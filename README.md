# Nika Website

## Editing content

The page text lives in Markdown, not directly in HTML:

- **`content/*.md`** — one file per section (`overview.md`, `features.md`, …).
  Each file holds named blocks:

  ```markdown
  ::: desc
  NIKA is a unified platform that bridges AI agents with realistic network environments.
  :::
  ```

- **`index.template.html`** — the page design/layout. Each editable spot is a
  placeholder like `<!-- md:overview.desc -->` (i.e. `<!-- md:SECTION.KEY -->`).

Edit the Markdown, then compile to `index.html`:

```bash
npm install       # first time only
npm run build
```

`npm run build` renders each block into its matching placeholder and writes
`index.html`. Inline Markdown works (`**bold**`, `` `code` ``, `[links](https://…)`,
em-dashes); a block written as a `- bullet list` becomes `<li>` items inside the
template's existing `<ul>`.

To add a new editable spot: put `<!-- md:SECTION.KEY -->` in the template and a
matching `::: KEY` block in `content/SECTION.md`. The build warns about
placeholders with no content and content blocks nothing references.

### Images

Local images live in `assets/images/`. The architecture diagram is
`assets/images/nika_arch.png` — replace that file (keep the name) to swap it,
or change the `src` in `index.template.html` and rebuild.

## Run locally

```bash
npm run dev
```

Serves on http://localhost:3000 with **live reload**: edit and save any
`content/*.md`, `index.template.html`, `css/*.css`, or `js/*.js` file and the
page rebuilds and refreshes automatically — no manual `npm run build` needed.

Or serve the already-built `index.html` directly (no watch/reload):

```bash
npx serve .                # http://localhost:3000
python3 -m http.server     # http://localhost:8000
```
