/* Code example blocks: the {{< tabs >}} blocks that link sample (input) and output files. Design: Claude Design's
   "code example block" v2 (folder "docs.groupdocs.com - Design\v2": README.md, ANSWERS.md).
   Input tabs link <product>/<platform>/_sample_files/... (older pages: sample-files/...); output tabs link
   _output_files/... and show a "Binary file (PDF, 313 KB)" or "HTML file (114 KB)" block, or the first lines of a
   text output (docs-to-code-examples pipeline). This script works on the page as built (no shortcode changes) and
   loads nothing with the page: a file loads when a reader opens its tab (files up to params.docPreviewAutoMB,
   1 MB, show right away; a bigger one waits for "Show preview") or asks for it.
   - Tab row: IN / OUT tags on file tabs, the language icon on code tabs and a divider between them. Where the
     tabs do not fit, gdoc-tabs.js shows a dropdown instead; its options read "IN · sample.pdf".
   - Each file tab starts with a bar: the file's name · type · size, then its actions:
     1. "Show preview" / "Hide preview" for a file a browser can show (PDF, images, HTML sandboxed, text), or one
        scripts/doc-preview rendered to page images (DOCX, XLSX, PPTX, MSG...: data-preview on its link; in the
        dialog and a new tab GroupDocs.Viewer.UI shows them, params.docPreviewViewer), or an output zip of pages
        (render --zips: its PNG/JPG pages, or its HTML pages in the scaled frame; the zip's file list then hides);
        "Show full output" / "Show less" for a text output the pipeline cut at 10 lines;
        "Show files" / "Hide files" for a tab with several files (a grid; a card opens the dialog);
        "Open PDF ↗" where the browser has no in-page PDF viewer.
     2. "Compare input and output" (same file type, e.g. PDF in, PDF out) or "View input and output" (e.g. a PDF
        in, its extracted text out): a side-by-side dialog, when the block has both. An HTML output that has its
        page (render --html) shows there in the Viewer app too, like the DOCX beside it.
     3. "Open ↗" and "Download" ("Download all (.zip)" for a zip output); icons only on phones.
     The bar replaces the generator's "The following sample file is used..." sentence, the "Binary file (...)"
     block and the "Download full output" link (hidden on screen only: print keeps them).
   - Shown when the tab opens (once: the reader's Hide preview / Hide files sticks): a file up to the limit, or
     the grid of a tab with several files whose images add up to no more. Not with data saver on or on a slow
     connection, and not the full text of a cut output: the excerpt is on the page already.
   - An open preview taller than --gdx-collapsed starts collapsed under "Show all". A full text output shows
     whole (it is what the reader asked for), with another "Show less" at its end when it is long.
   - "Expected behavior: ..." right after a block becomes the block's footer, "Expected result".
   Sizes come from data-bytes on the links (layouts/_default/_markup/render-link.html, read at build time) or the
   "Binary file (PDF, 313 KB)" block. Loaded by layouts/partials/doc-preview.html (switches: params.docPreview,
   docPreviewCompare -> data-compare) only on pages that link such files. Styles: static/custom.css ("Code example
   blocks"). Vanilla JS on purpose, like gdoc-tabs.js and page-actions.js. */
(function () {
  "use strict";

  if (!window.fetch || !window.Promise) return; // very old browsers: the download links still work

  var script = document.currentScript || document.querySelector('script[src*="/js/doc-preview.js"]');
  var OPTS = {
    compare: !script || script.getAttribute("data-compare") !== "false",
    // Files up to this many bytes show as soon as their tab opens (data-auto-mb: params.docPreviewAutoMB);
    // 0 = only when a reader asks.
    autoMax: (function () {
      var mb = script ? parseFloat(script.getAttribute("data-auto-mb")) : NaN;
      return mb > 0 ? Math.round(mb * 1024 * 1024) : 0;
    })(),
    // GroupDocs.Viewer.UI as static files (data-viewer: params.docPreviewViewer, e.g. "/doc-viewer/26.9.1/"): shows
    // a file's page images in the dialog and in a new tab. Empty: the dialog lists the page images itself.
    viewer: (script && script.getAttribute("data-viewer")) || ""
  };

  var KB = 1024;
  var MB = 1024 * 1024;
  var TEXT_MAX = 2 * MB; // never more text than this in the page
  var KIND = {
    png: "image", jpg: "image", jpeg: "image", gif: "image", webp: "image", svg: "image", bmp: "image", avif: "image",
    pdf: "pdf",
    html: "html", htm: "html",
    txt: "text", md: "text", json: "text", csv: "text", tsv: "text", xml: "text",
    yml: "text", yaml: "text", log: "text", ini: "text"
  };
  // /<product>/<platform>/(_sample_files|_output_files|sample-files)/<path>.<ext>
  var FILE_RE = /^\/[^\/]+\/[^\/]+\/(_sample_files|_output_files|sample-files)\/.+\.([A-Za-z0-9]{1,8})$/;
  // The docs-to-code-examples pipeline's one-line placeholders (inject_output_tabs.py; keep in step):
  // "Binary file (PDF, 313 KB)" for binary outputs (once "Binary file (PDF)") and "HTML file (114 KB)"
  // for HTML ones, whose source excerpt told a reader nothing.
  var PLACEHOLDER_RE = /^(?:Binary file \(([^,()]+)(?:, ([\d.]+) ?(bytes|B|KB|MB|GB))?\)|(HTML) file \(([\d.]+) ?(bytes|B|KB|MB|GB)\))$/i;
  // legacy sample-files/ folders hold inputs and outputs; the tab's wording tells them apart
  var INPUT_WORDS = /\b(sample|source|input|template)\b/i;
  var OUTPUT_WORDS = /\b(output|outputs|result|converted|rendered|edited|produced|expected)\b/i;
  // The words of the generator's sentences that only say which file a tab holds ("`sample.pdf` is the sample
  // file used in this example. Click here to download it.") once the file links and names are taken out. Such
  // a paragraph says nothing the bar does not, so it is hidden on screen; one with any other word (a password,
  // what the files are) stays.
  var BOILERPLATE = /^(?:the|a|an|following|sample|source|target|template|input|output|file|files|document|documents|archive|is|are|used|produced|by|in|this|example|click|here|to|download|it|them|and|converted|attachment|pdf|docx?|xlsx?|pptx?|html?|png|jpe?g|txt|csv|json|xml|md|zip|eml|msg|rtf|odt|ods|odp|epub|vsdx)$/;
  // Chrome on Android has no in-page PDF viewer (a frame would download the file) and touch devices show
  // one page at best, so there a PDF gets "Open PDF" (a new tab) instead of a preview.
  var PDF_INLINE = navigator.pdfViewerEnabled !== false &&
    !(window.matchMedia && window.matchMedia("(pointer: coarse)").matches);
  // Links to this site only. The base URL's origin equals location.origin on a normal page and is also
  // right in a srcdoc frame, whose location.origin is "null".
  var ORIGIN = (function () {
    try { return new URL(document.baseURI).origin; } catch (e) { return window.location.origin; }
  })();

  var SVG = '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">';
  var ICON = {
    show: SVG + '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>',
    hide: SVG + '<path d="M3 3l18 18"/><path d="M10.6 5.1A10.7 10.7 0 0 1 12 5c6.5 0 10 7 10 7a17.6 17.6 0 0 1-3.2 4.2M6.6 6.6C3.9 8.4 2 12 2 12s3.5 7 10 7c1.9 0 3.6-.5 5-1.4"/><path d="M9.9 9.9a3 3 0 0 0 4.2 4.2"/></svg>',
    more: SVG + '<path d="M7 7l5 5 5-5M7 13l5 5 5-5"/></svg>',
    less: SVG + '<path d="M17 11l-5-5-5 5M17 17l-5-5-5 5"/></svg>',
    down: SVG + '<path d="M6 9l6 6 6-6"/></svg>',
    up: SVG + '<path d="M18 15l-6-6-6 6"/></svg>',
    files: SVG + '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>',
    compare: SVG + '<rect x="3" y="4" width="7.5" height="16" rx="1.5"/><rect x="13.5" y="4" width="7.5" height="16" rx="1.5"/></svg>',
    download: SVG + '<path d="M12 4v11M7 10l5 5 5-5M5 20h14"/></svg>',
    external: SVG + '<path d="M14 4h6v6M20 4l-9 9"/><path d="M19 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5"/></svg>',
    expand: SVG + '<path d="M14 4h6v6M10 20H4v-6M20 4l-7 7M4 20l7-7"/></svg>',
    close: SVG + '<path d="M6 6l12 12M18 6L6 18"/></svg>'
  };
  // Language marks for code tabs ("Python", "C#", ... or a file name such as App.java).
  var LANG_SVG = '<svg class="gdx-lang" viewBox="0 0 24 24" aria-hidden="true">';
  var LANG = {
    python: LANG_SVG + '<path d="M11.9 2c-5 0-4.7 2.2-4.7 2.2v2.3h4.8v.7H5.3S2 6.8 2 11.9s2.9 4.9 2.9 4.9h1.7v-2.4s-.1-2.9 2.8-2.9h4.8s2.7 0 2.7-2.6V4.6S17.3 2 11.9 2zM9.3 3.5a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8z" fill="#3776ab"/><path d="M12.1 22c5 0 4.7-2.2 4.7-2.2v-2.3H12v-.7h6.7s3.3.4 3.3-4.7-2.9-4.9-2.9-4.9h-1.7v2.4s.1 2.9-2.8 2.9H9.8s-2.7 0-2.7 2.6v4.3S6.7 22 12.1 22zm2.6-1.5a.9.9 0 1 1 0-1.8.9.9 0 0 1 0 1.8z" fill="#f7c600"/></svg>',
    javascript: LANG_SVG + '<rect x="2" y="2" width="20" height="20" rx="3" fill="#f7df1e"/><text x="13" y="18" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="10" font-weight="700" fill="#1f1f1f">JS</text></svg>',
    csharp: LANG_SVG + '<rect x="2" y="2" width="20" height="20" rx="5" fill="#68217a"/><text x="12" y="16.5" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="9.5" font-weight="700" fill="#fff">C#</text></svg>',
    java: LANG_SVG + '<path d="M8.5 8c-1-1.2 1-2.3 0-4M12.5 8c-1-1.2 1-2.3 0-4" fill="none" stroke="#5382a1" stroke-width="1.6" stroke-linecap="round"/><path d="M4.5 10.5h12v3.2a5.3 5.3 0 0 1-5.3 5.3h-1.4a5.3 5.3 0 0 1-5.3-5.3z" fill="#e76f00"/><path d="M16.5 12h1.3a2.2 2.2 0 0 1 0 4.4h-1.6" fill="none" stroke="#e76f00" stroke-width="1.6"/><path d="M3.5 21h14" fill="none" stroke="#5382a1" stroke-width="1.6" stroke-linecap="round"/></svg>'
  };

  /* ---------- helpers ---------- */

  function track(action, file) {
    try {
      if (window.dataLayer && typeof window.dataLayer.push === "function") {
        var data = { event: "doc_preview", doc_preview_action: action };
        if (file) {
          data.doc_preview_ext = file.ext;
          data.doc_preview_role = file.role;
        }
        window.dataLayer.push(data);
      }
    } catch (e) { /* analytics must never break the page */ }
  }

  function el(tag, attrs, text) {
    var node = document.createElement(tag);
    if (attrs) {
      for (var key in attrs) {
        if (Object.prototype.hasOwnProperty.call(attrs, key) && attrs[key] != null) node.setAttribute(key, attrs[key]);
      }
    }
    if (text != null) node.textContent = text;
    return node;
  }

  function clear(node) {
    while (node.firstChild) node.removeChild(node.firstChild);
  }

  function remove(node) {
    if (node && node.parentNode) node.parentNode.removeChild(node);
  }

  function decode(s) {
    try { return decodeURIComponent(s); } catch (e) { return s; }
  }

  function toBytes(value, unit) {
    var u = (unit || "").toUpperCase();
    if (u === "KB") return Math.round(value * KB);
    if (u === "MB") return Math.round(value * MB);
    if (u === "GB") return Math.round(value * MB * 1024);
    return Math.round(value);
  }

  function fmtSize(bytes) {
    if (bytes == null) return "";
    if (bytes < KB) return bytes + " bytes";
    if (bytes < MB) return Math.round(bytes / KB) + " KB";
    return (bytes / MB).toFixed(1).replace(/\.0$/, "") + " MB";
  }

  // "PDF · 608 KB", "DOCX · 48 KB · 3 pages" (an HTML file is one page by construction: no count)
  function metaText(file) {
    var parts = [file.type];
    if (file.size != null) parts.push(fmtSize(file.size));
    if (file.pages && (file.native !== "html" || splitHtml(file))) parts.push(file.pages.total + (file.pages.total === 1 ? " page" : " pages"));
    return parts.join(" · ");
  }

  // An HTML output the Viewer app can show (render --html copied it as its page): the dialog shows it there, like
  // the DOCX beside it. The app shows the HTML itself, so nothing is lost; the tab keeps the browser's own view.
  function viewerHtml(file) {
    return file.native === "html" && !!file.pages && !!OPTS.viewer;
  }

  /* ---------- page images (scripts/doc-preview) ---------- */

  // A file the browser can't show (DOCX, XLSX, PPTX, MSG...) that scripts/doc-preview rendered: its folder holds
  // page-1 ... page-N (the first pages; PNG, or JPG for a photo) and view-data.json, which lists them,
  // GroupDocs.Viewer.UI's static content layout.
  function pageImg(file, n, ratio, url) {
    var img = el("img", {
      "class": "gdx-page", src: url || (n === 1 ? file.pages.first : file.pages.url + "page-" + n + ".png"), alt: "Page " + n + " of " + file.name,
      loading: n > 1 ? "lazy" : null, decoding: "async"
    });
    if (ratio > 0) img.style.aspectRatio = "1 / " + ratio.toFixed(4); // its height before it loads: no jump
    return img;
  }

  // Pages `from`..`to`, each with its own shape (a workbook mixes portrait and landscape sheets).
  function addPages(file, well, from, to) {
    var url = file.pages.url + "view-data.json";
    return fetch(url, { credentials: "same-origin" }).then(function (res) {
      return res.ok ? res.json() : null;
    }).catch(function () { return null; }).then(function (data) {
      var list = (data && data.pages) || [];
      for (var n = from; n <= to; n++) {
        var p = list[n - 1];
        well.appendChild(pageImg(file, n, p && p.width ? p.height / p.width : 0, p && p.pageUrl));
      }
      if (file.pages.total > file.pages.count) {
        well.appendChild(el("p", { "class": "gdx-note" }, "The preview shows the first " + file.pages.count + " of " +
          file.pages.total + " pages. Download the file to see them all."));
      }
    });
  }

  // The Viewer app on a file's pages: ?file=<product>/<platform>/_preview/<id> (it reads <that>/view-data.json).
  function viewerUrl(file) {
    return OPTS.viewer + "?file=" + encodeURIComponent(file.pages.url.replace(/^\/|\/$/g, ""));
  }

  // The site's theme: the reader's choice (color-theme on <html>, the theme's toggle) or else the system's.
  function siteTheme() {
    var t = document.documentElement.getAttribute("color-theme");
    if (t === "dark" || t === "light") return t;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  // The Viewer app follows the system theme; a reader may have switched the site to the other one. Same origin, so
  // its data-theme (ThemeService) is set to the site's once it has loaded, kept there, and changed with the site's
  // (the theme toggle, or the system's in auto mode).
  var systemDark = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;

  function themeViewer(frame) {
    frame.addEventListener("load", function () {
      try {
        var root = frame.contentDocument.documentElement;
        var watch = [];
        var apply = function () {
          if (!frame.isConnected) { // the preview was closed: stop watching
            watch.forEach(function (stop) { stop(); });
            return;
          }
          var want = siteTheme();
          if (root.getAttribute("data-theme") !== want) root.setAttribute("data-theme", want);
        };
        apply();
        var own = new MutationObserver(apply);
        own.observe(root, { attributes: true, attributeFilter: ["data-theme"] });
        var site = new MutationObserver(apply);
        site.observe(document.documentElement, { attributes: true, attributeFilter: ["color-theme"] });
        watch.push(function () { own.disconnect(); }, function () { site.disconnect(); });
        if (systemDark && systemDark.addEventListener) {
          systemDark.addEventListener("change", apply);
          watch.push(function () { systemDark.removeEventListener("change", apply); });
        }
      } catch (e) { /* not readable: it keeps the system theme */ }
    });
    return frame;
  }

  function isVisible(node) {
    return !!(node.offsetWidth || node.offsetHeight);
  }

  // Kinds a browser can show here (a PDF only where it has an in-page PDF viewer), and page images.
  function comparable(file) {
    return file.kind === "image" || file.kind === "html" || file.kind === "text" || file.kind === "pages" ||
      (file.kind === "pdf" && PDF_INLINE);
  }

  function roleName(file) {
    return file.role === "output" ? "Output" : "Input";
  }

  function roleTag(file) {
    return file.role === "output" ? "OUT" : "IN";
  }

  // Two files of one type (PDF in, PDF out) are compared; otherwise (a PDF in, its extracted text out) a
  // reader just views both.
  var TYPE_ALIAS = { jpeg: "jpg", htm: "html", yml: "yaml" };
  function sideBySideLabel(a, b) {
    var same = a && b && (TYPE_ALIAS[a.ext] || a.ext) === (TYPE_ALIAS[b.ext] || b.ext);
    return same ? { long: "Compare input and output", short: "Compare" }
                : { long: "View input and output", short: "View both" };
  }

  function langOf(name) {
    var n = name.replace(/\s+/g, " ").trim().toLowerCase();
    if (n === "python" || /\.py$/.test(n)) return "python";
    if (n === "javascript" || n === "js" || n === "node.js" || n === "nodejs" || /\.[cm]?js$/.test(n)) return "javascript";
    if (n === "c#" || n === "csharp" || /\.cs$/.test(n)) return "csharp";
    if (n === "java" || /\.java$/.test(n)) return "java";
    return null;
  }

  /* ---------- network ---------- */

  var probes = {};

  // Size from a HEAD request: bytes, null when the server does not say, -1 when the file is missing. Only for a
  // file whose size the page does not give, once a reader asks for it.
  function probe(url) {
    if (!probes[url]) {
      probes[url] = fetch(url, { method: "HEAD", credentials: "same-origin" }).then(function (res) {
        if (!res.ok) return -1;
        var length = parseInt(res.headers.get("content-length"), 10);
        return isNaN(length) ? null : length;
      }, function () { return null; }); // network trouble: let the preview itself try
    }
    return probes[url];
  }

  function sizeOf(file) {
    if (file.size != null) return Promise.resolve(file.size);
    return probe(file.url).then(function (size) {
      if (size != null && size >= 0) file.size = size;
      return size;
    });
  }

  // The reader's browser asks to save data, or the connection is slow (Chrome, Edge; asked each time): nothing
  // shows on its own then.
  function savingData() {
    var c = navigator.connection;
    return !!(c && (c.saveData || /^(slow-2g|2g|3g)$/.test(c.effectiveType || "")));
  }

  // Runs `show` the first time the tab's bar is on screen: the tab was opened (a click, the dropdown on phones, an
  // expand block opened around it). Once only: after that, the reader's Show / Hide decides. The block's
  // "change" event runs it at once (setupGroup); the observer catches the rest.
  var autoObserver = null;

  function whenOpened(tab, show) {
    if (!OPTS.autoMax || !window.IntersectionObserver) return;
    if (!autoObserver) {
      autoObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) autoRun(entry.target);
        });
      }, { rootMargin: "200px 0px" });
    }
    tab.bar.gdxAuto = show;
    autoObserver.observe(tab.bar);
  }

  // The tab of this bar is open and the bar on (or near) the screen: run its waiting `show`, once.
  function autoRun(bar) {
    if (!bar.gdxAuto || !isVisible(bar)) return;
    var r = bar.getBoundingClientRect();
    if (r.bottom < -200 || r.top > window.innerHeight + 200) return;
    var show = bar.gdxAuto;
    bar.gdxAuto = null;
    autoObserver.unobserve(bar);
    if (!savingData()) show();
  }

  function readText(url) {
    return fetch(url, { credentials: "same-origin" }).then(function (res) {
      if (!res.ok) throw new Error("missing");
      var length = parseInt(res.headers.get("content-length"), 10);
      if (length > TEXT_MAX) throw new Error("too-big");
      return res.text();
    }).then(function (text) {
      if (text.length > TEXT_MAX) throw new Error("too-big"); // compressed responses have no length up front
      if (text.indexOf(String.fromCharCode(0)) !== -1) throw new Error("binary");
      text = text.charCodeAt(0) === 0xFEFF ? text.slice(1) : text; // drop a byte order mark
      return text.replace(/\s+$/, "");
    });
  }

  function textError(err) {
    if (err && err.message === "too-big") return "This file is too large to show here. Download it instead.";
    if (err && err.message === "binary") return "This file is not plain text. Download it instead.";
    if (err && err.message === "missing") return "This file could not be found.";
    return "The file could not be loaded.";
  }

  /* ---------- buttons ---------- */

  var uid = 0;

  // Icon + label; a short label, if given, replaces the long one on phones.
  function setLabel(node, icon, label, shortLabel) {
    node.innerHTML = icon;
    if (shortLabel) {
      node.appendChild(el("span", { "class": "gdx-long" }, label));
      node.appendChild(el("span", { "class": "gdx-short" }, shortLabel));
    } else {
      node.appendChild(el("span", null, label));
    }
  }

  // A .gdx-btn: a button, or a link when attrs has an href.
  function button(icon, label, attrs, shortLabel, extraClass) {
    var isLink = !!(attrs && attrs.href);
    var node = el(isLink ? "a" : "button", attrs);
    if (!isLink) node.setAttribute("type", "button");
    node.className = "gdx-btn" + (extraClass ? " " + extraClass : "");
    setLabel(node, icon, label, shortLabel);
    return node;
  }

  /* ---------- collapse: a tall preview or full text output starts at --gdx-collapsed ---------- */

  var collapsibles = [];

  function makeCollapsible(content, moreLabel, inWell) {
    var c = { expanded: false };
    c.body = el("div", { "class": "gdx-body is-collapsed" + (inWell ? " gdx-well-body" : "") });
    c.body.appendChild(content);
    c.more = el("div", { "class": "gdx-more", hidden: "" });
    c.btn = button(ICON.down, moreLabel, { "aria-expanded": "false" });
    c.more.appendChild(c.btn);
    c.btn.addEventListener("click", function () {
      c.expanded = !c.expanded;
      c.body.classList.toggle("is-collapsed", !c.expanded);
      c.btn.setAttribute("aria-expanded", String(c.expanded));
      setLabel(c.btn, c.expanded ? ICON.up : ICON.down, c.expanded ? "Show less" : moreLabel);
      if (!c.expanded) c.body.scrollIntoView({ block: "nearest" });
    });
    collapsibles.push(c);
    return c;
  }

  // Shows "Show all" only when the content is taller than the limit (measured once it is visible), plus some slack:
  // hiding a few lines behind a button helps no one (c.slack: more for a one-page file, e.g. a slide).
  function measure(c) {
    if (!c.body.isConnected || !isVisible(c.body)) return;
    var limit = parseInt(window.getComputedStyle(c.body).getPropertyValue("--gdx-collapsed"), 10) || 360;
    var tall = c.body.scrollHeight > limit + (c.slack || 40);
    c.more.hidden = !tall && !c.always; // c.always: more pages to load behind the button
    c.body.classList.toggle("is-collapsed", tall && !c.expanded);
  }

  function measureAll() {
    collapsibles = collapsibles.filter(function (c) { return c.body.isConnected; });
    collapsibles.forEach(measure);
  }

  // An HTML page in a frame as tall as its content, so the block, not the frame, scrolls. A page wider than the
  // preview (rendered documents have a fixed page width) is laid out at its own width and scaled down to fit,
  // like a PDF at page width.
  function fitFrame(frame) {
    try {
      var box = frame.parentNode;
      var doc = frame.contentDocument;
      if (!doc || !doc.documentElement || !isVisible(box)) return;
      var root = doc.documentElement;
      var avail = box.clientWidth;
      frame.style.transform = "";
      frame.style.width = avail + "px";
      var wide = Math.max(root.scrollWidth, doc.body ? doc.body.scrollWidth : 0);
      var scale = wide > avail + 1 ? avail / wide : 1;
      if (scale < 1) frame.style.width = wide + "px";
      var h = Math.min(Math.max(root.scrollHeight, doc.body ? doc.body.scrollHeight : 0), 20000);
      frame.style.height = h + "px";
      if (scale < 1) frame.style.transform = "scale(" + scale + ")";
      box.style.height = Math.ceil(h * scale) + "px";
    } catch (e) { /* not readable: keep the default height */ }
  }

  function fitFrames(root) {
    Array.prototype.forEach.call((root || document).querySelectorAll(".gdx-frame"), fitFrame);
  }

  /* ---------- dialog renderers (one file in a pane) ---------- */

  function note(view, message) {
    clear(view);
    view.removeAttribute("data-kind");
    view.appendChild(el("p", { "class": "gdoc-preview__note" }, message));
  }

  function fail(view, file, message) {
    note(view, message);
    track("preview_error", file);
  }

  function pdfCard(view, file) {
    var box = el("div", { "class": "gdoc-preview__card" });
    box.appendChild(el("p", null, "This browser opens PDF files outside the page."));
    var open = el("a", {
      "class": "gdoc-preview__btn gdoc-preview__btn--primary", href: file.url, target: "_blank", rel: "noopener"
    }, "Open PDF ↗");
    open.addEventListener("click", function () { track("open_new_tab", file); });
    box.appendChild(open);
    view.appendChild(box);
  }

  // Fill a dialog pane's `view` with `file`. A text that arrives after another file was picked (or the dialog
  // closed) is dropped: each render takes a new token, and clearing a view invalidates it.
  var renderToken = 0;

  function invalidate(view) {
    view.gdxToken = ++renderToken;
  }

  function render(view, file) {
    clear(view);
    invalidate(view);
    var token = view.gdxToken;
    view.setAttribute("data-kind", file.kind);
    if (file.kind === "image") {
      var img = el("img", { "class": "gdoc-preview__img", src: file.url, alt: file.name, decoding: "async" });
      img.addEventListener("error", function () {
        if (view.gdxToken === token) fail(view, file, "The image could not be loaded.");
      });
      view.appendChild(img);
    } else if (file.kind === "pdf") {
      if (!PDF_INLINE) {
        view.setAttribute("data-kind", "card"); // no frame, so no frame height
        pdfCard(view, file);
        return;
      }
      // fit the page width; no thumbnail sidebar (it takes a third of a pane)
      view.appendChild(el("iframe", { "class": "gdoc-preview__frame", src: file.url + "#view=FitH&navpanes=0", title: "Preview of " + file.name }));
    } else if (file.kind === "html" && viewerHtml(file)) {
      view.setAttribute("data-kind", "pages"); // the app's frame, as for a DOCX
      view.appendChild(themeViewer(el("iframe", { "class": "gdoc-preview__frame", src: viewerUrl(file), title: "Preview of " + file.name })));
    } else if (file.kind === "html") {
      // sandbox="": no scripts, no forms, no access to this page
      view.appendChild(el("iframe", { "class": "gdoc-preview__frame", src: file.url, sandbox: "", title: "Preview of " + file.name }));
    } else if (file.kind === "pages") {
      if (OPTS.viewer) {
        // GroupDocs.Viewer.UI in static content mode: zoom and page navigation over the same page images
        view.appendChild(themeViewer(el("iframe", { "class": "gdoc-preview__frame", src: viewerUrl(file), title: "Preview of " + file.name })));
      } else if (htmlPages(file)) {
        view.setAttribute("data-kind", "html");
        view.appendChild(el("iframe", { "class": "gdoc-preview__frame", src: file.pages.first, sandbox: "", title: "Preview of " + file.name }));
      } else {
        var well = el("div", { "class": "gdx-well" });
        view.appendChild(well);
        addPages(file, well, 1, file.pages.count);
      }
    } else if (file.kind === "text") {
      note(view, "Loading…");
      readText(file.url).then(function (text) {
        if (view.gdxToken !== token) return;
        clear(view);
        view.setAttribute("data-kind", "text");
        var hl = el("div", { "class": "highlight gdoc-preview__text" });
        var pre = el("pre", { "class": "chroma", tabindex: "0" });
        pre.appendChild(el("code", null, text));
        hl.appendChild(pre);
        view.appendChild(hl);
      }, function (err) {
        if (view.gdxToken === token) fail(view, file, textError(err));
      });
    } else {
      note(view, "A preview of " + file.type + " files is not available yet. Download the file to open it.");
    }
  }

  /* ---------- scanning the tab blocks ---------- */

  function fileOf(a) {
    if (a.origin && a.origin !== ORIGIN) return null;
    var m = FILE_RE.exec(a.pathname);
    if (!m) return null;
    var path = a.pathname;
    var ext = m[2].toLowerCase();
    var bytes = parseInt(a.getAttribute("data-bytes"), 10); // render-link.html, at build time
    var preview = a.getAttribute("data-preview"); // its page 1 (scripts/doc-preview), also from render-link.html
    return {
      url: path,
      name: decode(path.slice(path.lastIndexOf("/") + 1)),
      ext: ext,
      type: ext.toUpperCase(),
      // shown as page images: a file the browser can't show itself
      kind: KIND[ext] || (preview ? "pages" : "other"),
      native: KIND[ext] || null, // what the browser can show by itself
      folder: m[1],
      size: isNaN(bytes) ? null : bytes,
      // the page images or, for an HTML output, its page for the Viewer app (viewerHtml)
      pages: preview ? {
        url: preview.slice(0, preview.lastIndexOf("/") + 1),        // the folder: view-data.json, page-N.png|jpg
        first: preview,                                             // page 1
        count: parseInt(a.getAttribute("data-pages"), 10) || 1,   // page images there are
        total: parseInt(a.getAttribute("data-total"), 10) || 1,   // pages the file has
        ratio: parseFloat(a.getAttribute("data-ratio")) || 0,     // page 1: height / width
        html: /\.html?$/i.test(preview)                             // HTML pages (a zip of an HTML view's pages)
      } : null
    };
  }

  // A zip of HTML pages (render --zips): its pages show as the HTML they are, in the browser's scaled frames (page 1
  // first, the others behind "Show all N pages").
  function htmlPages(file) {
    return file.kind === "pages" && file.native !== "html" && !!file.pages && file.pages.html;
  }

  // An HTML output that scripts/doc-preview split into pages (page-N.html): a workbook rendered to one HTML file.
  function splitHtml(file) {
    return file.native === "html" && !!file.pages && file.pages.html && file.pages.total > 1;
  }

  // The pipeline's placeholder block in a pane ("Binary file (...)" or "HTML file (...)"), if any.
  function placeholderIn(pane) {
    for (var n = pane.firstElementChild; n; n = n.nextElementSibling) {
      if (!n.classList.contains("highlight")) continue;
      var m = PLACEHOLDER_RE.exec(n.textContent.trim());
      if (!m) continue;
      if (m[4]) return { node: n, type: "HTML", size: toBytes(parseFloat(m[5]), m[6]) };
      return { node: n, type: m[1].trim(), size: m[2] ? toBytes(parseFloat(m[2]), m[3]) : null };
    }
    return null;
  }

  // A text block the pane already shows (not the binary placeholder).
  function textBlockIn(pane, placeholder) {
    for (var n = pane.firstElementChild; n; n = n.nextElementSibling) {
      if (n.classList.contains("highlight") && n !== placeholder) return n;
    }
    return null;
  }

  // A text block the pipeline cut after 10 lines.
  function truncatedBlockIn(pane) {
    for (var n = pane.firstElementChild; n; n = n.nextElementSibling) {
      if (n.classList.contains("highlight") && /\[TRUNCATED\]\s*$/.test(n.textContent)) return n;
    }
    return null;
  }

  function scanGroup(box) {
    var group = { box: box, panes: [], files: [] };
    for (var c = box.firstElementChild; c; c = c.nextElementSibling) {
      if (!c.classList.contains("gdoc-tabs__content")) continue;
      var files = [];
      var seen = {};
      var links = c.querySelectorAll("a[href]");
      for (var i = 0; i < links.length; i++) {
        var a = links[i];
        if (a.closest(".gdoc-tabs") !== box) continue; // a tab block inside this one is its own group
        var file = fileOf(a);
        if (!file || seen[file.url]) continue;
        seen[file.url] = true;
        file.link = a;
        file.group = group;
        files.push(file);
      }
      if (!files.length) continue;

      // Wording of the tab without the file names, e.g. "is the sample file used in this example".
      var label = c.previousElementSibling;
      var words = (label ? label.textContent + " " : "") + c.textContent;
      files.forEach(function (f) { words = words.split(f.name).join(" "); });
      var outputWords = !INPUT_WORDS.test(words) && OUTPUT_WORDS.test(words);
      files.forEach(function (f) {
        f.role = (f.folder === "_output_files" || outputWords) ? "output" : "input";
      });

      var ph = placeholderIn(c);
      if (ph && files.length === 1 && files[0].size == null) files[0].size = ph.size;
      group.panes.push({ node: c, label: label, files: files, placeholder: ph ? ph.node : null });
      group.files = group.files.concat(files);
    }
    return group.files.length ? group : null;
  }

  // The nearest heading above a tab block, for the dialog title.
  function headingFor(box) {
    for (var n = box; n && !(n.classList && n.classList.contains("gdoc-markdown")); n = n.parentElement) {
      for (var s = n.previousElementSibling; s; s = s.previousElementSibling) {
        var h = /^H[1-3]$/.test(s.tagName) ? s : (s.classList.contains("gdoc-page__anchorwrap") ? s.querySelector("h1, h2, h3") : null);
        if (h) {
          // without what the theme adds to a heading: the page title's "Leave feedback", anchor icons
          var copy = h.cloneNode(true);
          Array.prototype.forEach.call(copy.querySelectorAll(".gdoc-feedback-link, button, svg, [aria-hidden='true']"), remove);
          return copy.textContent.replace(/\s+/g, " ").trim();
        }
      }
    }
    return "";
  }

  /* ---------- the tab row: tags, language icons, divider; the footer ---------- */

  function paneOf(group, node) {
    for (var i = 0; i < group.panes.length; i++) {
      if (group.panes[i].node === node) return group.panes[i];
    }
    return null;
  }

  function decorate(group) {
    var box = group.box;
    box.classList.add("gdx-example");
    var firstFile = null;
    var codeBefore = false;
    for (var c = box.firstElementChild; c; c = c.nextElementSibling) {
      if (!c.classList.contains("gdoc-tabs__label")) continue;
      var name = c.querySelector(".gdoc-tabs__name") || c;
      var text = name.textContent.replace(/\s+/g, " ").trim();
      var pane = paneOf(group, c.nextElementSibling);
      if (pane) {
        var file = pane.files[0];
        name.insertBefore(el("span", { "class": "gdx-sr" }, roleName(file) + ": "), name.firstChild);
        name.insertBefore(el("span", { "class": "gdx-role gdx-role-" + (file.role === "output" ? "out" : "in"), "aria-hidden": "true" }, roleTag(file)), name.firstChild);
        c.setAttribute("data-option", roleTag(file) + " · " + text); // gdoc-tabs.js dropdown
        if (!firstFile) firstFile = c;
      } else {
        var lang = langOf(text);
        if (lang) {
          c.setAttribute("data-option", text); // not the icon's own "JS" / "C#"
          name.insertAdjacentHTML("afterbegin", LANG[lang]);
        }
        if (!firstFile) codeBefore = true;
      }
    }
    // a divider between the code tab(s) and the file tabs
    if (firstFile && codeBefore) {
      var radio = firstFile.previousElementSibling;
      var at = radio && radio.classList.contains("gdoc-tabs__control") ? radio : firstFile;
      box.insertBefore(el("span", { "class": "gdx-sep gdoc-tabs__sep", "aria-hidden": "true" }), at);
    }
    try {
      box.dispatchEvent(new CustomEvent("gdoc-tabs:refresh")); // dropdown options and fit (gdoc-tabs.js)
    } catch (e) { /* no CustomEvent: the dropdown keeps the plain names */ }
    moveExpected(box);
  }

  // "**Expected behavior:** ..." right after the block becomes its footer, "Expected result" (Parser python-net).
  function moveExpected(box) {
    var p = box.nextElementSibling;
    // A {{< tabs >}} right under a paragraph's last line (no blank line) leaves an empty <p></p> after the block.
    while (p && p.tagName === "P" && !p.firstElementChild && !p.textContent.trim()) p = p.nextElementSibling;
    if (!p || p.tagName !== "P") return;
    var strong = p.firstElementChild;
    if (!strong || strong.tagName !== "STRONG" || !/^expected behaviou?r:?$/i.test(strong.textContent.trim())) return;
    for (var n = p.firstChild; n !== strong; n = n.nextSibling) {
      if (n.nodeType !== 3 || n.nodeValue.trim()) return; // text before the label: not the generator's line
    }
    var foot = el("div", { "class": "gdx-foot" });
    foot.appendChild(el("b", null, "Expected result"));
    var body = el("span");
    remove(strong);
    while (p.firstChild) body.appendChild(p.firstChild);
    if (body.firstChild && body.firstChild.nodeType === 3) body.firstChild.nodeValue = body.firstChild.nodeValue.replace(/^[\s:]+/, "");
    foot.appendChild(body);
    box.appendChild(foot);
    remove(p);
  }

  /* ---------- a file tab: the bar and its actions ---------- */

  // A paragraph or list that only names the tab's files: "The following sample file is used in this example:
  // sample.pdf", "`sample.pdf` is the sample file used in this example. Click here to download it.", the
  // pipeline's "Download full output" link. The bar says the same.
  function isGeneratorText(node) {
    if (!/^(P|UL|OL)$/.test(node.tagName)) return false;
    var links = node.querySelectorAll("a[href]");
    var hasFile = false;
    for (var i = 0; i < links.length; i++) {
      if (fileOf(links[i])) hasFile = true;
    }
    if (!hasFile) return false;
    var copy = node.cloneNode(true);
    var drop = copy.querySelectorAll("a[href], code");
    for (var j = 0; j < drop.length; j++) {
      var d = drop[j];
      if (d.tagName === "A" && !fileOf(d) && !/^here$/i.test(d.textContent.trim())) continue; // another link: its words count
      remove(d);
    }
    var words = copy.textContent.toLowerCase().match(/[a-z0-9#+]+/g) || [];
    return words.every(function (w) { return BOILERPLATE.test(w); });
  }

  function makeBar(tab) {
    var bar = el("div", { "class": "gdx-bar" });
    var meta = el("div", { "class": "gdx-meta" });
    var files = tab.files;
    if (files.length === 1) {
      meta.appendChild(el("b", null, files[0].name));
      meta.appendChild(el("span", null, metaText(files[0])));
    } else {
      var names = files.slice(0, 3).map(function (f) { return f.name; }).join(", ") + (files.length > 3 ? ", …" : "");
      var total = 0;
      var known = files.every(function (f) { total += f.size || 0; return f.size != null; });
      meta.appendChild(el("b", null, names));
      meta.appendChild(el("span", null, files.length + " files" + (known ? " · " + fmtSize(total) : "")));
    }
    bar.appendChild(meta);
    tab.actions = el("div", { "class": "gdx-actions", role: "group", "aria-label": "File actions" });
    bar.appendChild(tab.actions);
    return bar;
  }

  // The preview area of a tab, right under its bar.
  function makeArea(tab) {
    var area = el("div", { "class": "gdx-pv", id: "gdx-pv-" + (++uid), hidden: "" });
    tab.pane.insertBefore(area, tab.bar.nextSibling);
    return area;
  }

  function areaNote(area, message) {
    clear(area);
    area.appendChild(el("p", { "class": "gdx-note" }, message));
  }

  // One file under the bar: the browser's PDF viewer at a fixed height; an image, an HTML page (as tall as its
  // content) or text in a body that starts collapsed when it is tall. Expand shows it in the dialog.
  function buildPreview(tab, area) {
    var file = tab.file;
    var box = el("div", { "class": "gdx-preview" });
    if (file.kind !== "text") {
      var expand = button(ICON.expand, "Expand", { title: "Expand" }, null,
        "gdx-btn-icon gdx-expand" + (file.kind === "pdf" ? " gdx-expand-low" : ""));
      expand.addEventListener("click", function () { openDialog(tab.group, file, null, expand); });
      box.appendChild(expand);
    }
    if (file.kind === "pdf") {
      // fit the page width; no thumbnail sidebar
      box.appendChild(el("iframe", { "class": "gdx-pdf", src: file.url + "#view=FitH&navpanes=0", title: "Preview of " + file.name }));
    } else if (file.kind === "image") {
      var well = el("div", { "class": "gdx-well" });
      var img = el("img", { src: file.url, alt: file.name, decoding: "async" });
      well.appendChild(img);
      var ci = makeCollapsible(well, "Show all", true);
      img.addEventListener("load", function () { measure(ci); });
      img.addEventListener("error", function () { areaNote(area, "The image could not be loaded."); track("preview_error", file); });
      box.appendChild(ci.body);
      box.appendChild(ci.more);
    } else if (file.kind === "html" || htmlPages(file)) {
      var page = el("div", { "class": "gdx-well" });
      // One page in a frame. No allow-scripts: no scripts, forms or pop-ups run. allow-same-origin only lets this
      // page read the page's size, so the frame can be as tall as its content (and no scroll bars of its own).
      var addFrame = function (src, title) {
        var paper = el("div", { "class": "gdx-frame-box" });
        var f = el("iframe", { "class": "gdx-frame", src: src, sandbox: "allow-same-origin", scrolling: "no", title: title });
        paper.appendChild(f);
        page.appendChild(paper);
        return f;
      };
      // A zip of HTML pages shows page 1 under the bar, like a document; its other pages load when the reader
      // opens them all (page-N.html in the same preview folder, up to the pages rendered).
      // An HTML file the renderer split into pages counts as one too: a workbook's worksheets (RenderToSinglePage),
      // which need a script and the window's height to show as one file.
      var zipped = htmlPages(file) || splitHtml(file);
      var n = zipped ? file.pages.count : 1;
      var frame = addFrame(zipped ? file.pages.first : file.url, zipped ? "Page 1 of " + file.name : "Preview of " + file.name);
      var ch = makeCollapsible(page, n === 1 ? "Show full page" :
        (n < file.pages.total ? "Show " + n + " of " + file.pages.total + " pages" : "Show all " + n + " pages"), true);
      if (n > 1) {
        ch.always = true; // the other pages are behind the button even when page 1 is short
        var restFrames = false;
        ch.btn.addEventListener("click", function () { // after the collapsible's own handler
          if (!ch.expanded || restFrames) return;
          restFrames = true;
          for (var i = 2; i <= n; i++) {
            var f = addFrame(file.pages.url + "page-" + i + ".html", "Page " + i + " of " + file.name);
            f.addEventListener("load", function (e) { fitFrame(e.target); });
          }
          if (file.pages.total > n) {
            page.appendChild(el("p", { "class": "gdx-note" }, "The preview shows the first " + n + " of " +
              file.pages.total + " pages. Download the file to see them all."));
          }
        });
      }
      frame.addEventListener("load", function () { fitFrame(frame); measure(ch); });
      box.appendChild(ch.body);
      box.appendChild(ch.more);
    } else if (file.kind === "pages") {
      // Page 1 under the bar; the other pages load when the reader opens them all.
      var pages = el("div", { "class": "gdx-well" });
      var first = pageImg(file, 1, file.pages.ratio);
      pages.appendChild(first);
      var n = file.pages.count;
      var cp = makeCollapsible(pages, n === 1 ? "Show full page" :
        (n < file.pages.total ? "Show " + n + " of " + file.pages.total + " pages" : "Show all " + n + " pages"), true);
      if (n === 1 && file.pages.total === 1) cp.slack = 200; // a one-page file shows whole unless it is a tall page
      var rest = false;
      cp.btn.addEventListener("click", function () { // after the collapsible's own handler
        if (!cp.expanded || rest) return;
        rest = true;
        if (n > 1 || file.pages.total > n) addPages(file, pages, 2, n);
      });
      first.addEventListener("load", function () { measure(cp); });
      first.addEventListener("error", function () { areaNote(area, "The preview could not be loaded."); track("preview_error", file); });
      box.appendChild(cp.body);
      box.appendChild(cp.more);
    } else if (file.kind === "text") {
      var pre = el("pre", { "class": "gdx-text", tabindex: "0" }, "Loading…");
      var ct = makeCollapsible(pre, "Show all", false);
      readText(file.url).then(function (text) {
        pre.textContent = text;
        measure(ct);
      }, function (err) {
        pre.textContent = textError(err);
        track("preview_error", file);
      });
      box.appendChild(ct.body);
      box.appendChild(ct.more);
    }
    area.appendChild(box);
  }

  // "Show preview" / "Hide preview", or "Open PDF ↗" where the browser has no in-page PDF viewer. A file up to
  // the auto limit shows when its tab opens, so its button starts as "Hide preview".
  function previewAction(tab) {
    var file = tab.file;
    if (file.kind === "pdf" && !PDF_INLINE) {
      tab.opensItself = true; // no separate Open
      var link = button(ICON.external, "Open PDF ↗", { href: file.url, target: "_blank", rel: "noopener" }, null, "gdx-btn-main");
      link.addEventListener("click", function () { track("open_new_tab", file); });
      return link;
    }
    var area = makeArea(tab);
    var open = false;
    var b = button(ICON.show, "Show preview", { "aria-expanded": "false", "aria-controls": area.id }, "Preview", "gdx-btn-main");

    function set(on, action) {
      if (on === open) return;
      open = on;
      b.setAttribute("aria-expanded", String(open));
      setLabel(b, open ? ICON.hide : ICON.show, open ? "Hide preview" : "Show preview", open ? "Hide" : "Preview");
      if (!open) {
        area.hidden = true;
        clear(area); // unloads a PDF or HTML frame
        track("hide_preview", file);
        return;
      }
      area.hidden = false;
      track(action, file);
      if (file.size != null) { buildPreview(tab, area); return; }
      areaNote(area, "Loading…");
      sizeOf(file).then(function (size) { // a file the build did not find: say so instead of a broken frame
        if (!open) return;
        clear(area);
        if (size === -1) { areaNote(area, "This file could not be found."); track("preview_error", file); return; }
        buildPreview(tab, area);
      });
    }

    b.addEventListener("click", function () { set(!open, "show_preview"); });
    // Page images load page 1 only (a PNG well under the limit), whatever the size of the DOCX itself.
    if (file.kind === "pages" || (file.size != null && file.size <= OPTS.autoMax)) {
      whenOpened(tab, function () { set(true, "auto_preview"); });
    }
    return b;
  }

  // "Show full output" / "Show less" for a text output the pipeline cut after 10 lines: the whole text takes
  // the excerpt's place, all of it (the reader asked for the full output, so it does not start collapsed); a
  // long one also gets "Show less" at its end.
  function fullOutputAction(tab, block) {
    var file = tab.file;
    var full = null; // .gdx-full, built on first use
    var body = null;
    var more = null;
    var busy = false; // not `disabled` while loading: a disabled button loses keyboard focus
    var b = button(ICON.more, "Show full output", { "aria-expanded": "false" }, "Full output", "gdx-btn-main");

    function show(on) {
      full.hidden = !on;
      block.classList.toggle("gdx-swapped", on);
      b.setAttribute("aria-expanded", String(on));
      setLabel(b, on ? ICON.less : ICON.more, on ? "Show less" : "Show full output", on ? "Less" : "Full output");
      if (on) {
        var limit = parseInt(window.getComputedStyle(body).getPropertyValue("--gdx-collapsed"), 10) || 360;
        more.hidden = body.scrollHeight <= limit + 40;
      }
    }

    b.addEventListener("click", function () {
      if (busy) return;
      if (full) { show(full.hidden); return; }
      busy = true;
      b.setAttribute("aria-busy", "true");
      setLabel(b, ICON.more, "Loading…", "Loading…");
      readText(file.url).then(function (text) {
        busy = false;
        b.removeAttribute("aria-busy");
        full = el("div", { "class": "gdx-full", hidden: "" });
        body = el("div", { "class": "gdx-body" });
        body.appendChild(el("pre", { "class": "gdx-text", tabindex: "0" }, text));
        more = el("div", { "class": "gdx-more", hidden: "" });
        var less = button(ICON.up, "Show less", null);
        less.addEventListener("click", function () {
          show(false);
          b.focus();
          tab.bar.scrollIntoView({ block: "nearest" });
        });
        more.appendChild(less);
        full.appendChild(body);
        full.appendChild(more);
        block.parentNode.insertBefore(full, block.nextSibling);
        show(true);
        track("show_full", file);
      }, function (err) {
        busy = false;
        b.removeAttribute("aria-busy");
        var tooBig = !!(err && err.message === "too-big");
        b.disabled = tooBig; // nothing more to do here: the Download next to it is the way
        setLabel(b, ICON.more, tooBig ? "Too large to show: download it" : "Show full output (try again)", tooBig ? "Too large" : "Try again");
        track("preview_error", file);
      });
    });
    return b;
  }

  // The pipeline's last line "[TRUNCATED]" becomes a faint "…".
  function markCut(block) {
    var code = block.querySelector("pre code") || block.querySelector("pre");
    if (!code) return;
    var walker = document.createTreeWalker(code, NodeFilter.SHOW_TEXT, null, false);
    var last = null;
    while (walker.nextNode()) {
      if (walker.currentNode.nodeValue.indexOf("[TRUNCATED]") !== -1) last = walker.currentNode;
    }
    if (!last) return;
    var rest = last.splitText(last.nodeValue.lastIndexOf("[TRUNCATED]"));
    rest.nodeValue = rest.nodeValue.slice("[TRUNCATED]".length);
    rest.parentNode.insertBefore(el("span", { "class": "gdx-text-cut", title: "The output goes on: Show full output" }, "…"), rest);
  }

  // A grid of the tab's files: a thumbnail for an image, a type tile otherwise. A card the browser can show opens
  // the dialog; a PDF without an in-page viewer opens in a new tab; any other file downloads.
  function buildGrid(tab) {
    var grid = el("div", { "class": "gdx-grid" });
    tab.files.forEach(function (file) {
      var card;
      if (comparable(file)) {
        card = el("button", { type: "button", "class": "gdx-card", title: "Expand " + file.name });
        card.addEventListener("click", function () { openDialog(tab.group, file, null, card); });
      } else if (file.kind === "pdf") {
        card = el("a", { "class": "gdx-card", href: file.url, target: "_blank", rel: "noopener", title: "Open " + file.name });
        card.addEventListener("click", function () { track("open_new_tab", file); });
      } else {
        card = el("a", { "class": "gdx-card", href: file.url, download: file.name, title: "Download " + file.name });
        card.addEventListener("click", function () { track("download", file); });
      }
      var art = el("span", { "class": "gdx-card-art" });
      var tile = el("span", { "class": "gdx-card-type" }, file.type);
      if (file.kind === "image" || file.kind === "pages") {
        var img = el("img", {
          "class": file.kind === "pages" ? "gdx-card-page" : null, // the top of page 1, like a document card
          src: file.kind === "pages" ? file.pages.first : file.url, alt: "", loading: "lazy", decoding: "async"
        });
        img.addEventListener("error", function () { clear(art); art.appendChild(tile); });
        art.appendChild(img);
      } else {
        art.appendChild(tile);
      }
      card.appendChild(art);
      card.appendChild(el("span", { "class": "gdx-card-name" }, file.name));
      if (file.size != null) card.appendChild(el("span", { "class": "gdx-card-size" }, fmtSize(file.size)));
      grid.appendChild(card);
    });
    return grid;
  }

  // "Show files" / "Hide files" for a tab that lists several files. The grid loads only its image thumbnails, so
  // it shows when the tab opens if those add up to no more than the auto limit.
  function filesAction(tab) {
    var area = makeArea(tab);
    var built = false;
    var b = button(ICON.files, "Show files", { "aria-expanded": "false", "aria-controls": area.id }, "Files", "gdx-btn-main");

    function set(on, action) {
      if (on === !area.hidden) return;
      if (on && !built) {
        area.appendChild(buildGrid(tab));
        built = true;
      }
      area.hidden = !on;
      b.setAttribute("aria-expanded", String(on));
      setLabel(b, on ? ICON.hide : ICON.files, on ? "Hide files" : "Show files", on ? "Hide" : "Files");
      track(on ? action : "hide_files", tab.files[0]);
    }

    b.addEventListener("click", function () { set(area.hidden, "show_files"); });
    var images = 0;
    var known = tab.files.every(function (f) {
      if (f.kind === "image") images += f.size || 0;
      return f.kind !== "image" || f.size != null;
    });
    if (known && images <= OPTS.autoMax) {
      whenOpened(tab, function () { set(true, "auto_files"); });
    }
    return b;
  }

  // Opens the dialog with this tab's file and the first file of the other role; named after that pair.
  function compareAction(group, file) {
    var inputs = group.files.filter(function (f) { return f.role === "input" && comparable(f); });
    var outputs = group.files.filter(function (f) { return f.role === "output" && comparable(f); });
    var left = file.role === "input" ? file : inputs[0];
    var right = file.role === "output" ? file : outputs[0];
    var label = sideBySideLabel(left, right);
    var b = button(ICON.compare, label.long, { "aria-label": label.long }, label.short);
    b.addEventListener("click", function () {
      openDialog(group, left, right, b);
    });
    return b;
  }

  // Where "Open" goes: the file itself when the browser shows it (an HTML output too, though the dialog shows it in
  // the Viewer app), else the Viewer app on its pages (the DOCX itself would only download); null for neither.
  function openHref(file) {
    if (file.kind !== "pages") return file.url;
    return OPTS.viewer ? viewerUrl(file) : null;
  }

  // A new tab with the file (openHref).
  function openAction(file) {
    var href = openHref(file);
    if (!href) return null;
    var a = button(ICON.external, "Open ↗", { href: href, target: "_blank", rel: "noopener", title: "Open " + file.name + " in a new tab" }, null, "gdx-btn-icon-sm");
    a.addEventListener("click", function () { track("open_new_tab", file); });
    return a;
  }

  function downloadAction(file) {
    var zip = file.ext === "zip" && file.role === "output";
    var a = button(ICON.download, zip ? "Download all (.zip)" : "Download", { href: file.url, download: file.name, title: "Download " + file.name }, null, "gdx-btn-icon-sm");
    a.addEventListener("click", function () { track("download", file); });
    return a;
  }

  function setupGroup(group) {
    decorate(group);
    var compareOn = OPTS.compare &&
      group.files.some(function (f) { return f.role === "input" && comparable(f); }) &&
      group.files.some(function (f) { return f.role === "output" && comparable(f); });

    group.panes.forEach(function (pane) {
      var tab = { group: group, pane: pane.node, files: pane.files, file: pane.files[0] };
      var single = pane.files.length === 1 ? pane.files[0] : null;
      var shownText = textBlockIn(pane.node, pane.placeholder);
      pane.node.classList.add("gdx-file");
      tab.bar = pane.bar = makeBar(tab);
      pane.node.insertBefore(tab.bar, pane.node.firstChild);

      // 1. See the file
      var see = null;
      if (!single) {
        see = filesAction(tab);
      } else if (single.kind === "text" && shownText) {
        if (single.role === "output") {
          shownText.classList.add("gdx-excerpt"); // wrapped, no Copy (the bar has Download)
          var cut = truncatedBlockIn(pane.node);
          if (cut) {
            see = fullOutputAction(tab, cut);
            markCut(cut);
          }
        }
      } else if (single.kind !== "other") {
        see = previewAction(tab);
      }
      if (see) tab.actions.appendChild(see);

      // 2. Compare / View, from a tab whose own file can be shown side by side
      if (compareOn) {
        var mine = pane.files.filter(comparable)[0];
        if (mine) tab.actions.appendChild(compareAction(group, mine));
      }

      // 3. Open and Download, one file per tab
      if (single) {
        var open = single.kind !== "other" && !tab.opensItself ? openAction(single) : null;
        if (open) tab.actions.appendChild(open);
        tab.actions.appendChild(downloadAction(single));
      }

      // The generator's own lines say what the bar says: hidden on screen (print keeps them). So does the file
      // list of a zip whose pages the preview shows.
      for (var n = pane.node.firstElementChild; n; n = n.nextElementSibling) {
        if (n === pane.placeholder || isGeneratorText(n) ||
            (n === shownText && single && single.ext === "zip" && single.pages)) n.classList.add("gdx-replaced");
      }
    });

    // A tab opened (a click, or the dropdown on phones, whose change bubbles here after gdoc-tabs.js checked the
    // tab): a small file shows at once; then measure what loaded while it was hidden.
    group.box.addEventListener("change", function () {
      group.panes.forEach(function (pane) { autoRun(pane.bar); });
      window.requestAnimationFrame(function () {
        fitFrames(group.box);
        measureAll();
      });
    });
  }

  // A wider or narrower window: HTML pages refit and tall previews measure again.
  var resizeTimer = 0;
  window.addEventListener("resize", function () {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(function () {
      fitFrames();
      measureAll();
    }, 150);
  });

  /* ---------- dialog: one file larger, or input and output side by side ---------- */

  var dlg = null;

  // A pane's header: a file picker (IN / OUT tag, name, chevron over a native select), type and size, Open and
  // Download.
  function makePane(side) {
    var pane = { side: side, file: null, shown: null };
    pane.root = el("section", { "class": "gdoc-preview-pane", "data-side": side });
    var bar = el("div", { "class": "gdoc-preview-pane__bar" });
    pane.pick = el("label", { "class": "gdx-pick" });
    pane.tag = el("span", { "class": "gdx-role", "aria-hidden": "true" });
    pane.name = el("span", { "class": "gdx-pick__name", "aria-hidden": "true" });
    var chevron = el("span", { "class": "gdx-pick__chevron", "aria-hidden": "true" });
    chevron.innerHTML = ICON.down;
    pane.select = el("select", { "class": "gdx-pick__select", "aria-label": side === "left" ? "File on the left" : "File on the right" });
    pane.pick.appendChild(pane.tag);
    pane.pick.appendChild(pane.name);
    pane.pick.appendChild(chevron);
    pane.pick.appendChild(pane.select);
    pane.meta = el("span", { "class": "gdoc-preview-pane__meta" });
    var actions = el("span", { "class": "gdx-pane-actions" });
    pane.open = button(ICON.external, "Open in a new tab", { href: "#", target: "_blank", rel: "noopener" }, null, "gdx-btn-icon");
    pane.download = button(ICON.download, "Download", { href: "#", download: "" }, null, "gdx-btn-icon");
    actions.appendChild(pane.open);
    actions.appendChild(pane.download);
    bar.appendChild(pane.pick);
    bar.appendChild(pane.meta);
    bar.appendChild(actions);
    pane.view = el("div", { "class": "gdoc-preview-pane__view", "aria-live": "polite" });
    pane.root.appendChild(bar);
    pane.root.appendChild(pane.view);
    pane.select.addEventListener("change", function () {
      var file = dlg.files[+pane.select.value];
      setPaneFile(pane, file);
      if (dlg.root.getAttribute("data-mode") === "compare") setCompareTitle(dlg.left.file, dlg.right.file);
      track("compare_change", file);
    });
    pane.open.addEventListener("click", function () { track("open_new_tab", pane.file); });
    pane.download.addEventListener("click", function () { track("download", pane.file); });
    return pane;
  }

  function ensureDialog() {
    if (dlg) return dlg;
    var root = el("dialog", { "class": "gdoc-preview-dialog", "aria-labelledby": "gdoc-preview-dialog-title" });
    var head = el("div", { "class": "gdoc-preview-dialog__head" });
    var title = el("h2", { "class": "gdoc-preview-dialog__title", id: "gdoc-preview-dialog-title" });
    var sw = el("div", { "class": "gdoc-preview-dialog__switch", role: "group", "aria-label": "Show" });
    var swLeft = el("button", { type: "button", "data-side": "left", "aria-pressed": "true" });
    var swRight = el("button", { type: "button", "data-side": "right", "aria-pressed": "false" });
    sw.appendChild(swLeft);
    sw.appendChild(swRight);
    var close = el("button", { type: "button", "class": "gdoc-preview-dialog__close", "aria-label": "Close", title: "Close" });
    close.innerHTML = ICON.close;
    head.appendChild(title);
    head.appendChild(sw);
    head.appendChild(close);
    var panes = el("div", { "class": "gdoc-preview-dialog__panes", "data-active": "left" });
    var left = makePane("left");
    var right = makePane("right");
    panes.appendChild(left.root);
    panes.appendChild(right.root);
    root.appendChild(head);
    root.appendChild(panes);
    // Outside the article, so the .gdoc-markdown rules do not restyle it (like page-actions.js).
    document.body.appendChild(root);

    dlg = { root: root, title: title, sw: sw, swLeft: swLeft, swRight: swRight, panes: panes, left: left, right: right, files: [], opener: null };

    close.addEventListener("click", closeDialog);
    root.addEventListener("click", function (e) {
      if (e.target === root) closeDialog(); // the backdrop: the dialog box itself is fully covered
    });
    sw.addEventListener("click", function (e) {
      var b = e.target.closest("button[data-side]");
      if (b) setActive(b.getAttribute("data-side"));
    });
    root.addEventListener("close", onClosed);
    window.addEventListener("resize", renderVisible); // e.g. phone rotated: the other pane may show now
    return dlg;
  }

  function setPaneFile(pane, file) {
    pane.file = file;
    pane.root.setAttribute("data-role", file.role);
    pane.tag.className = "gdx-role gdx-role-" + (file.role === "output" ? "out" : "in");
    pane.tag.textContent = roleTag(file);
    pane.name.textContent = file.name;
    pane.pick.title = roleName(file) + ": " + file.name;
    pane.select.value = String(dlg.files.indexOf(file));
    pane.meta.textContent = metaText(file);
    pane.open.href = openHref(file) || file.url;
    pane.open.hidden = !openHref(file); // the DOCX itself would only download
    pane.open.title = "Open " + file.name + " in a new tab";
    pane.download.href = file.url;
    pane.download.setAttribute("download", file.name);
    pane.download.title = "Download " + file.name;
    pane.shown = null;
    clear(pane.view);
    invalidate(pane.view);
    updateSwitch();
    renderVisible();
    if (file.size == null) { // a size the page does not give: from a HEAD request
      sizeOf(file).then(function () {
        if (pane.file === file) pane.meta.textContent = metaText(file);
      });
    }
  }

  function renderVisible() {
    if (!dlg || !dlg.root.open) return;
    [dlg.left, dlg.right].forEach(function (pane) {
      if (pane.file && pane.shown !== pane.file && isVisible(pane.root)) {
        pane.shown = pane.file;
        render(pane.view, pane.file);
      }
    });
  }

  // Phones show one pane at a time; the switch names them by role ("Input" / "Output").
  function updateSwitch() {
    var l = dlg.left.file ? roleName(dlg.left.file) : "";
    var r = dlg.right.file ? roleName(dlg.right.file) : "";
    if (l === r) { l += " 1"; r += " 2"; }
    dlg.swLeft.textContent = l;
    dlg.swRight.textContent = r;
  }

  function setActive(side) {
    dlg.panes.setAttribute("data-active", side);
    dlg.swLeft.setAttribute("aria-pressed", String(side === "left"));
    dlg.swRight.setAttribute("aria-pressed", String(side === "right"));
    renderVisible();
  }

  function fillSelect(select, files) {
    clear(select);
    files.forEach(function (f, i) {
      select.appendChild(el("option", { value: String(i) }, roleTag(f) + " · " + f.name));
    });
  }

  // "Compare input and output — <heading>" or "View input and output — <heading>", after the two files shown.
  function setCompareTitle(a, b) {
    dlg.title.textContent = sideBySideLabel(a, b).long + (dlg.heading ? " — " + dlg.heading : "");
  }

  function openDialog(group, first, second, opener) {
    var d = ensureDialog();
    var compare = !!second;
    d.files = group.files.filter(comparable);
    if (d.files.indexOf(first) === -1) d.files.unshift(first);
    d.opener = opener || null;
    d.root.setAttribute("data-mode", compare ? "compare" : "single");
    d.heading = headingFor(group.box);
    fillSelect(d.left.select, d.files);
    fillSelect(d.right.select, d.files);
    d.left.file = d.right.file = null;
    if (compare) setCompareTitle(first, second);
    else d.title.textContent = first.name;
    setActive("left");
    if (typeof d.root.showModal === "function") {
      if (!d.root.open) d.root.showModal();
    } else {
      d.root.setAttribute("open", ""); // very old browsers: shown in place, closed by the close button
    }
    document.documentElement.classList.add("gdoc-preview-open");
    setPaneFile(d.left, first);
    if (compare) setPaneFile(d.right, second);
    d.left.select.focus();
    track(compare ? "compare_open" : "expand_open", second || first);
  }

  function closeDialog() {
    if (!dlg) return;
    if (typeof dlg.root.close === "function" && dlg.root.open) {
      dlg.root.close(); // fires "close" -> onClosed
    } else {
      dlg.root.removeAttribute("open");
      onClosed();
    }
  }

  function onClosed() {
    [dlg.left, dlg.right].forEach(function (pane) {
      clear(pane.view); // unloads the frames (and stops a PDF viewer)
      invalidate(pane.view);
      pane.shown = null;
      pane.file = null;
    });
    document.documentElement.classList.remove("gdoc-preview-open");
    if (dlg.opener && document.contains(dlg.opener)) dlg.opener.focus();
    dlg.opener = null;
  }

  /* ---------- start ---------- */

  function init() {
    var boxes = document.querySelectorAll(".gdoc-tabs");
    for (var i = 0; i < boxes.length; i++) {
      var group = scanGroup(boxes[i]);
      if (group) setupGroup(group);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
