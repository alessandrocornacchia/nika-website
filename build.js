#!/usr/bin/env node
/**
 * build.js — compiles editable Markdown content into index.html.
 *
 * Source files:
 *   index.template.html   the page design/layout, with placeholders
 *                         of the form  <!-- md:SECTION.KEY -->
 *   content/SECTION.md    the editable prose for each section, split into
 *                         named blocks:
 *
 *                             ::: KEY
 *                             markdown text...
 *                             :::
 *
 * Each block fills the matching <!-- md:SECTION.KEY --> placeholder,
 * where SECTION is the markdown file name (e.g. content/overview.md
 * -> "overview"). Output is written to index.html.
 *
 * Rendering rules per block:
 *   - A bullet list (every line starts with "- ") becomes a sequence of
 *     <li>...</li> items — the template supplies the surrounding <ul>.
 *   - Anything else is rendered inline (bold, code, links, em-dashes…)
 *     so it drops cleanly inside the template's existing <p>/<h3>/<span>.
 *
 * Usage:  node build.js        (or: npm run build)
 */

const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

const ROOT = __dirname;
const CONTENT_DIR = path.join(ROOT, 'content');
const TEMPLATE = path.join(ROOT, 'index.template.html');
const OUTPUT = path.join(ROOT, 'index.html');

// Give absolute links the same new-tab behaviour the hand-written HTML used.
function withLinkTargets(html) {
  return html.replace(
    /<a href="(https?:\/\/[^"]*)"(?![^>]*\btarget=)/g,
    '<a href="$1" target="_blank" rel="noopener"'
  );
}

function renderBlock(body) {
  const lines = body.split('\n').map((l) => l.trimEnd());
  const nonEmpty = lines.filter((l) => l.trim() !== '');
  const isList = nonEmpty.length > 0 && nonEmpty.every((l) => /^\s*-\s+/.test(l));

  if (isList) {
    return nonEmpty
      .map((l) => `<li>${withLinkTargets(marked.parseInline(l.replace(/^\s*-\s+/, '')))}</li>`)
      .join('\n');
  }
  return withLinkTargets(marked.parseInline(body.trim()));
}

// Parse "::: key ... :::" blocks out of a markdown file.
// Leading whitespace on the fence lines is tolerated, since editors/formatters
// (e.g. Prettier) may indent the closing ":::" when it follows a list.
function parseBlocks(text) {
  const blocks = {};
  const re = /^[ \t]*:::[ \t]*([\w.-]+)[ \t]*\n([\s\S]*?)^[ \t]*:::[ \t]*$/gm;
  let m;
  while ((m = re.exec(text)) !== null) {
    blocks[m[1]] = m[2].replace(/\n+$/, '');
  }
  return blocks;
}

function loadContent() {
  const map = {};
  for (const file of fs.readdirSync(CONTENT_DIR)) {
    if (!file.endsWith('.md')) continue;
    const section = path.basename(file, '.md');
    const blocks = parseBlocks(fs.readFileSync(path.join(CONTENT_DIR, file), 'utf8'));
    for (const [key, body] of Object.entries(blocks)) {
      map[`${section}.${key}`] = renderBlock(body);
    }
  }
  return map;
}

function build() {
  const content = loadContent();
  const template = fs.readFileSync(TEMPLATE, 'utf8');

  const used = new Set();
  const missing = [];

  const output = template.replace(/<!--\s*md:([\w.-]+)\s*-->/g, (whole, id) => {
    if (Object.prototype.hasOwnProperty.call(content, id)) {
      used.add(id);
      return content[id];
    }
    missing.push(id);
    return whole; // leave placeholder visible so the gap is obvious
  });

  fs.writeFileSync(OUTPUT, output);

  const unused = Object.keys(content).filter((k) => !used.has(k));
  console.log(`✓ Built index.html — ${used.size} placeholders filled from ${CONTENT_DIR.replace(ROOT + '/', '')}/`);
  if (missing.length) {
    console.warn(`⚠ ${missing.length} placeholder(s) with no content block: ${[...new Set(missing)].join(', ')}`);
  }
  if (unused.length) {
    console.warn(`⚠ ${unused.length} content block(s) not referenced by the template: ${unused.join(', ')}`);
  }
}

module.exports = { build };

// Run once when invoked directly (`node build.js` / `npm run build`).
if (require.main === module) {
  build();
}
