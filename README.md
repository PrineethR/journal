# Journal of Personal Curiosities

Plain HTML, served by GitHub Pages at writing.prineethr.com. No build step.

- `index.html` is the cover and contents list.
- `journal.css` and `journal.js` are shared by every page.
- Each paper is a folder in `papers/` with its own `index.html`.

## New paper

1. Copy `papers/_template` to `papers/your-title`.
2. Write in its `index.html`.
3. Add an entry to the contents list in `index.html`.
4. Commit and push.

The paper "Instructions for authors" documents the markup.

## Preview locally

Paths start with `/`, so open the site through a local server, not as a file:

```bash
python3 -m http.server 4173
```
