#!/usr/bin/env node
/**
 * dev.js — live-reloading dev server.
 *
 * Rebuilds index.html whenever a content/*.md file or index.template.html
 * changes, and refreshes the browser automatically. Also reloads on CSS/JS
 * edits. Run with `npm run dev`, then open http://localhost:3000.
 */

const browserSync = require('browser-sync').create();
const { build } = require('./build.js');

function safeBuild() {
  try {
    build();
  } catch (err) {
    console.error('✗ Build failed:', err.message);
  }
}

// Initial build so index.html exists / is current before serving.
safeBuild();

browserSync.init({
  server: '.',
  port: 3000,
  open: false,
  notify: false,
  ui: false,
  // Reload the browser when the generated/static assets change.
  files: ['index.html', 'css/*.css', 'js/*.js'],
});

// Rebuild (which rewrites index.html and thus triggers a reload) whenever
// the Markdown source or the template changes.
browserSync.watch(['content/*.md', 'index.template.html'], (event) => {
  if (event === 'change' || event === 'add' || event === 'unlink') {
    safeBuild();
  }
});

console.log('Watching content/*.md and index.template.html — edit & save to auto-refresh.');
