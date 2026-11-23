# doc-preview

Page previews for the code example blocks on docs.groupdocs.com.

Example tabs link sample (input) and output files. Browsers show PDF, images, HTML and text by themselves (`themes/hugo-geekdoc/static/js/doc-preview.js`). This tool covers the rest (DOCX, XLSX, PPTX, MSG, VSDX, EPUB…). It renders their first pages to PNG with [GroupDocs.Viewer for .NET](https://products.groupdocs.com/viewer/net), in the folder layout of [GroupDocs.Viewer.UI](https://github.com/groupdocs-viewer/GroupDocs.Viewer-for-.NET-UI)'s static content mode. The same files feed two views:

- **Inline:** the file's tab shows page 1. "Show all N pages" loads the rest. The bar says `DOCX · 48 KB · 3 pages`.
- **Dialog and new tab:** GroupDocs.Viewer.UI, served as static files, shows the pages with zoom and page navigation. "Compare / View input and output" puts it next to the other file. With `render --html`, the dialog shows HTML outputs in the app too, as themselves, so a DOCX and the HTML made from it look alike.

The tabs keep page images: the Viewer app inside every tab was tried and set aside. It added a toolbar and its own scrolling to each tab, and it sizes the page only after it loads.

Requires the .NET 10 SDK.

## Render a platform's previews

```powershell
$env:GROUPDOCS_LIC_PATH = "C:\path\to\GroupDocs.Total.lic"   # a file or its URL; or --license <file or URL>
dotnet run --project scripts/doc-preview -c Release -- render ..\GroupDocs.Viewer-Docs\python-net [--html] [--zips]
```

**Input.** Every file with a supported extension under `_sample_files`, `_output_files` and `sample-files`.
- The formats a browser can't show: DOCX, XLSX, PPTX, MSG, VSDX, EPUB, TIFF…
- With `--html`, HTML files too. Each is copied as its own single page, `page-1.html`, which the Viewer app shows in its HTML mode, as a browser does. Redrawing HTML onto pages instead put a slide in the top corner of a Letter page.
  - **Size.** GroupDocs.Viewer's own HTML pages declare their size, and `view-data.json` takes it from there: a slide's `<svg width="13.333333in" height="7.5in">`, a document page's `style="width:595.3pt; height:841.9pt"`. A page that flows (an email, a web page) starts as a Letter page, and the app measures the content.
  - **`<html>` and `<body>` styles are kept.** The app puts the page into a shadow root, which drops those two elements and their styles. So the copy moves them onto a wrapper `<div class="gdv-body">`: the body's style, class, dir and lang, and CSS rules for `html` and `body`. Without it, an email rendered to HTML lost its Times New Roman font. 21 of the docs' 82 HTML files style `<html>` or `<body>`.
  - **A page that loads files next to it stays in the browser** (`skip: "linked files"`). The app would ask for them next to itself instead. In the docs that's 1 of 82 HTML files, an Assembly sample with `image001.jpg`. Links to files that aren't there (broken in a browser too) don't count.
  - **A workbook rendered to one HTML file is split into its worksheets.** With `RenderToSinglePage`, GroupDocs.Viewer writes each worksheet as an `<iframe srcdoc>` sized to the window (`calc(100vh - 35px)`), switched by tabs that need a script (VIEWERNET-5861). In the docs' frames, which run no scripts, that showed part of sheet 1 only. So each worksheet becomes `page-N.html`, starting with the sheet's name, and the tab shows "Show all 3 pages" as for a zip of HTML pages (`splitHtml` in `doc-preview.js`). This changed no layout version, so a cached preview of such a file must be removed from `index.json` (and its folder) to be rendered again.
  - Running without `--html` again removes those folders and re-renders nothing else.
  - **From Git Bash**, set `MSYS_NO_PATHCONV=1`: otherwise `--url-prefix /viewer/...` arrives as `C:/Program Files/Git/viewer/...`, and `index.json` keeps it for every link of the platform.
- With `--zips`, every input zip under `_sample_files` gets one page, the tree of what is inside: folders first, then files, each sorted by name, names only (no icons, sizes or dates), up to 400 lines. The folder is named `<hash>.html`, so the Viewer app shows it in its HTML mode. The page is 640 px wide: the app zooms an HTML page to fit its content, and a tree only as wide as its longest line came out at 208%. `index.json` records `files`, which `render-link.html` passes on as `data-files`, so the tab says "ZIP · 1.8 MB · 21 files" and "Show all files".
- With `--zips`, the zips under `_output_files` that hold an example's pages. The docs pipeline zips the outputs of an example that writes several files, so a DOCX rendered to PNG or HTML has a zip for an output. Its tab then shows the pages instead of the pipeline's list of the zip's files (`ZIP · 1.2 MB · 4 pages`), and the dialog shows them in the Viewer app.
  - **Image pages.** A zip of PNG or JPG files only: the images in natural order (`page_2` before `page_10`) are the pages, as they are. A PNG over 250 KB becomes a JPG when that is at least 40% smaller, as for document pages. The folder is named `<hash>.png`.
  - **HTML pages.** A zip of HTML files and the files they load (fonts, stylesheets, images: an `external resources` view): each HTML file becomes `page-N.html`, with the `<body>` wrapper above. The other files go under `res/` with their paths in the zip, and every relative link to them (`src`, `href`, CSS `url()`) becomes their URL, so they load next to the docs page and in the Viewer app. The folder is named `<hash>.html`, so the baked app opens it in its HTML mode.
  - **Anything else stays a file list:** a zip with a PDF, a log next to the pages, an attachment. `index.json` says `skip: "not pages"`.
  - Running without `--zips` again removes those folders and re-renders nothing else.

**Output.** `<platform>\_preview\` (or `--out <dir>`):

```
_preview/
├── index.json                    # every file by its path in the platform: {id, pages, total, first, width, height} or {skip}
└── 3fa85f6457174562.docx/        # content address: sha256 of the file (16 hex) + its extension
    ├── view-data.json            # GroupDocs.Viewer.UI static content: the pages and their URLs
    ├── page-1.png
    └── page-2.png ...
```

- **Content addresses.** Identical files render once. For example, Viewer python-net links 144 files with 110 different contents. The folder name hashes the file and the render settings together. So a changed file, or pages drawn differently (another scale, a license, a new GroupDocs.Viewer), get a new folder and new URLs, and caches never serve old pages. A licensed page under an evaluation page's URL still showed the evaluation page from the browser cache. Folders that no file uses any more are deleted.
- **Runs are incremental.** A file is rendered again only if its content or the settings changed, its folder is missing a page (a cleanup of `%TEMP%` once removed pages from a local test site), or with `--force`. A file that failed isn't retried either until then.
- **Page limit.** At most `--max-pages` (10) pages per file. `index.json` keeps the real total, so the site can say "first 10 of 14 pages".
- **Image size.** Pages are drawn at `--scale` (1.5×) their size, never wider than 1600 px. That keeps them sharp on high-density screens without huge slides.
- **Format.** Pages are PNG, which keeps text crisp. A page over 250 KB as PNG is mostly a photo (a slide, a scan), so it is drawn again as JPG (quality 85) and keeps the JPG if that is at least 40% smaller. On Watermark python-net this took the previews from 22.8 MB to 10.4 MB.
- **Page 1's name.** `index.json` records it (`first`: `page-1.png` or `page-1.jpg`); `view-data.json` lists every page's URL.
- **No downloads while rendering.** Remote images in emails are skipped (`SkipExternalResources`).
- **Time limit.** A file that takes more than 60 s is skipped as `timeout`.
- **License.** `GROUPDOCS_LIC_PATH` or `--license` names a license file or its `http(s)` URL. A downloaded license stays in memory: the tool never writes it to disk or prints it. Without a license the tool stops (exit code 2). Evaluation mode would put its marks on every page and cap documents at 2 pages. `--evaluation` renders anyway, for trying the tool out only.

**Wiring.** The site finds the previews at build time; nothing else needs setting.
- `config.toml` mounts `**/_preview/**` as static files, and each `_preview/index.json` as data too.
- `_markup/render-link.html` adds `data-preview`, `data-pages`, `data-total` and `data-ratio` to the links of files that have pages.

## Serve GroupDocs.Viewer.UI as static files

```powershell
dotnet run --project scripts/doc-preview -c Release -- viewer `
  ..\..\viewer-for-net\GroupDocs.Viewer-for-.NET-UI\src\GroupDocs.Viewer.UI\App static\doc-viewer\26.10.0 --base /doc-viewer/26.10.0/
```

Bake from a released version: check out its tag in the UI repo first (`git checkout 26.10.0`). The site serves `static/doc-viewer/26.10.0/`, baked from GroupDocs.Viewer.UI 26.10.0 (Angular 22.2.6).

This copies the Viewer app and fills in its `index.html` the way the ASP.NET middleware does. It sets every config key, because a missing one breaks the app:
- static content mode and image rendering, with `apiEndpoint` set to `""`;
- toolbar with zoom and page navigation;
- no header, upload, file browser, download, print, search or thumbnails.

It also uses the app's custom slots:
- **CSS:**
  - The page navigation shows from 480 px. The app shows it only from 1080 px, and a docs tab or dialog pane is narrower.
  - Pages stay white in the dark theme. The app gives pages a warm paper color there, which shows through an HTML page (page images cover it), so an HTML output looked beige next to a white DOCX page.
- **JS:** a file whose name ends in `.html` (`render --html`) switches the app to HTML mode before it starts. The mode is one setting for the whole app; see the feature request `GroupDocs.Viewer-for-.NET-UI-FeatureRequests/per-file-rendering-mode.md`.

Then set `docPreviewViewer = "/doc-viewer/26.10.0/"` in `config.toml`. Use a new folder for each Viewer UI release, and for each new bake of one. Its `main.js` and `styles.css` names carry no hash, and the custom slots live in `index.html`. The server and browsers cache all of them: after a new bake into the same folder, the old page stayed in the browser.

**How the app finds a file.** It opens `/doc-viewer/<version>/?file=<product>/<platform>/_preview/<id>`, reads `/<that>/view-data.json` from the site root, and takes the format from the folder's extension.

**Theme.** The app follows the system theme. Because the app runs on the same origin, `doc-preview.js` sets it to the site's theme, and changes it when the reader switches the site's theme.

## Facts that matter

- **Never write `pageLimit` into `view-data.json`.** The app then shows its "Upgrade to Premium" sheet.
- **Set `thumbUrl` on every page.** A `null` one turns into the URL `null`.
- **Write JSON without a byte order mark.**
- **The app doesn't ask for thumbnails in static mode.** Its config has no `loadThumbnails` endpoint, so pages bring their own `thumbUrl`.
