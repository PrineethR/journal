# Journal of Personal Curiosities

Plain HTML, served by GitHub Pages at writing.prineethr.com.

- `index.html` is the cover and contents list.
- `journal.css` and `journal.js` are shared by every page.
- Each paper is a folder in `papers/`.
- `new-paper` turns a Markdown draft into a paper. It needs only Python 3.

## Writing a paper

Start a draft:

```bash
./new-paper "Title of the paper"
```

Write in `papers/title-of-the-paper/paper.md`, then build the page and add it to the cover:

```bash
./new-paper papers/title-of-the-paper
```

Build again after every change. When it is ready, build, commit and push in one go:

```bash
./new-paper papers/title-of-the-paper --publish
```

## What the draft understands

| Write | Get |
| --- | --- |
| Text before the first heading | The abstract |
| `## Heading`, `### Heading` | A numbered section, a subsection |
| `*italic*`, `**bold**`, `` `code` ``, `[text](url)` | The usual |
| `^[A note.]` | A footnote |
| `[@key]` | A citation, such as [2] |
| `[](#fig-id)`, `[](#section-id)` | "Figure 2", "Section 3" |
| `![Caption](image.png){#fig-id}` | A numbered figure; add `.wide` for a wider one |
| `- item`, `1. item`, `> quote`, fenced code | Lists, quotations, code blocks |
| `## References` with `- [key] Author. Title.` | The reference list |
| A block starting with an HTML tag | Passed through untouched |

Section ids are made from the heading (`## Second section` is `#second-section`), or set with `## Heading {#my-id}`.

Tables, SVG drawings and interactive figures are written as HTML inside the draft. An HTML block runs from its opening tag to the line with the matching closing tag, so keep the outer tag (`<figure>`, `<script>`, `<table>`) on its own lines.

The title, date, issue number, cover summary and keywords are set in the block between the `---` lines at the top of the draft.

## Writing HTML directly

Copy `papers/_template`, write in its `index.html`, and add an entry to the contents list in `index.html` by hand. "Instructions for authors" was written this way and shows the markup.

## Preview locally

Paths start with `/`, so open the site through a local server, not as a file:

```bash
python3 -m http.server 4173
```
