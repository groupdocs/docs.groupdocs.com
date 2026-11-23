// doc-preview: page previews for the code example blocks of docs.groupdocs.com (themes/hugo-geekdoc/static/js/
// doc-preview.js). Renders the sample and output files a browser can't show (DOCX, XLSX, PPTX, MSG...) to PNG pages
// with GroupDocs.Viewer, in the layout of GroupDocs.Viewer.UI's static content mode, so the same files feed the
// inline preview and the Viewer app in the Expand / Compare dialog. With --html, each HTML output becomes a page for
// the Viewer app's HTML mode, so the dialog shows a DOCX and the HTML made from it alike. With --zips, an output zip
// of pages (an example's PNG, JPG or HTML pages) gets its pages too. See README.md.
//
//   doc-preview render <platform dir> [--out <dir>] [--url-prefix /<product>/<platform>/_preview] [--html] [--zips]
//                      [--max-pages 10] [--scale 1.5] [--force] [--dry-run] [--license <file or URL>] [--evaluation]
//   doc-preview viewer <GroupDocs.Viewer.UI App folder> <out folder> --base /doc-viewer/<version>/
using System.Globalization;
using System.IO.Compression;
using System.Security.Cryptography;
using System.Text;
using System.Text.Encodings.Web;
using System.Text.Json;
using System.Text.Json.Nodes;
using System.Text.RegularExpressions;
using GroupDocs.Viewer;
using GroupDocs.Viewer.Exceptions;
using GroupDocs.Viewer.Options;

namespace DocPreview;

internal static class Program
{
    // Formats a browser can't show by itself. PDF, images, HTML and text stay the browser's in doc-preview.js (HTML also
    // gets a page for the dialog with --html).
    static readonly HashSet<string> Extensions = new(StringComparer.OrdinalIgnoreCase)
    {
        "doc", "docx", "docm", "dot", "dotx", "dotm", "rtf", "odt", "ott",
        "xls", "xlsx", "xlsm", "xlsb", "xlt", "xltx", "ods", "ots", "numbers",
        "ppt", "pptx", "pptm", "pps", "ppsx", "pot", "potx", "odp", "otp",
        "msg", "eml", "emlx", "mht", "mhtml",
        "vsd", "vsdx", "vss", "vssx", "vst", "vstx",
        "mpp", "one", "epub", "mobi", "azw3", "fb2", "chm", "xps",
        "tif", "tiff", "emf", "wmf", "psd", "dwg", "dxf",
    };

    // Where the docs keep sample (input) and output files, inside a platform folder (net, java, python-net...).
    static readonly string[] Folders = { "_sample_files", "_output_files", "sample-files" };

    // Widest page image, in pixels: wide enough for the dialog on a large screen.
    const int MaxWidth = 1600;

    // A file that takes longer is skipped (one Visio sample spent two minutes before failing).
    const int TimeoutSeconds = 60;

    // A PNG page bigger than this is a photo more than text: it is drawn as a JPG too, and the smaller one stays.
    const long PhotoBytes = 250 * 1024;
    const int JpgQuality = 85;

    // No byte order mark: the Viewer app and Hugo parse these files.
    static readonly UTF8Encoding Utf8 = new(false);
    static readonly JsonSerializerOptions JsonOut = new() { WriteIndented = true, Encoder = JavaScriptEncoder.UnsafeRelaxedJsonEscaping };

    static int Main(string[] args)
    {
        try
        {
            if (args.Length >= 2 && args[0] == "render") return Render(args[1..]);
            if (args.Length >= 3 && args[0] == "viewer") return BakeViewer(args[1..]);
        }
        catch (Exception ex)
        {
            Console.Error.WriteLine("error: " + ex.Message);
            return 1;
        }
        Console.Error.WriteLine("usage:\n  doc-preview render <platform dir> [--out <dir>] [--url-prefix <url>] [--html] [--zips] [--max-pages 10] [--scale 1.5] [--force] [--dry-run] [--license <file or URL>] [--evaluation]\n  doc-preview viewer <Viewer UI App folder> <out folder> --base /doc-viewer/<version>/");
        return 1;
    }

    static string? Opt(string[] args, string name)
    {
        int i = Array.IndexOf(args, name);
        return i >= 0 && i + 1 < args.Length ? args[i + 1] : null;
    }

    static bool Has(string[] args, string name) => Array.IndexOf(args, name) >= 0;

    /* ---------- render ---------- */

    static int Render(string[] args)
    {
        string platformDir = Path.GetFullPath(args[0]).TrimEnd('\\', '/');
        if (!Directory.Exists(platformDir)) throw new DirectoryNotFoundException(platformDir);
        string outDir = Path.GetFullPath(Opt(args, "--out") ?? Path.Combine(platformDir, "_preview"));

        // GroupDocs.Viewer-Docs\python-net -> /viewer/python-net/_preview
        string platform = Path.GetFileName(platformDir);
        string repo = Path.GetFileName(Path.GetDirectoryName(platformDir)) ?? "";
        string? product = repo.StartsWith("GroupDocs.") && repo.EndsWith("-Docs")
            ? repo["GroupDocs.".Length..^"-Docs".Length].ToLowerInvariant() : null;
        string urlPrefix = (Opt(args, "--url-prefix") ?? (product != null ? $"/{product}/{platform}/_preview"
            : throw new ArgumentException("--url-prefix is needed: the folder is not GroupDocs.<Product>-Docs\\<platform>"))).TrimEnd('/');

        int maxPages = int.Parse(Opt(args, "--max-pages") ?? "10", CultureInfo.InvariantCulture);
        double scale = double.Parse(Opt(args, "--scale") ?? "1.5", CultureInfo.InvariantCulture);
        bool force = Has(args, "--force");
        bool dryRun = Has(args, "--dry-run");
        // --html: each HTML file becomes its own page for the Viewer app, which shows HTML outputs in the dialog (PDFs
        // stay the browser's, which shows the whole PDF).
        bool withHtml = Has(args, "--html");
        // --zips: an output zip of pages gets them as its preview (ZipPages); any other zip keeps the file list that
        // the docs pipeline writes in its tab.
        bool withZips = Has(args, "--zips");

        // Evaluation mode would bake its marks into every page, so a run without a license has to be asked for.
        bool evaluation = Has(args, "--evaluation");
        string? license = Opt(args, "--license") ?? Environment.GetEnvironmentVariable("GROUPDOCS_LIC_PATH");
        if (!string.IsNullOrWhiteSpace(license) && (IsUrl(license) || File.Exists(license)))
        {
            if (!dryRun) SetLicense(license);
            evaluation = false;
        }
        else if (!evaluation && !dryRun)
        {
            Console.Error.WriteLine("No GroupDocs license: set GROUPDOCS_LIC_PATH or pass --license <file or URL>. (--evaluation renders with evaluation marks, for trying it out only.)");
            return 2;
        }

        var settings = new JsonObject
        {
            ["maxPages"] = maxPages,
            ["scale"] = scale,
            ["maxWidth"] = MaxWidth,
            ["jpg"] = $"over {PhotoBytes / 1024} KB, quality {JpgQuality}",
            ["evaluation"] = evaluation,
            ["viewer"] = typeof(Viewer).Assembly.GetName().Version?.ToString(),
            ["layout"] = Layout,
        };
        byte[] salt = Utf8.GetBytes(settings.ToJsonString());

        // The last run: a file whose content (so its id) and settings are unchanged is not rendered again.
        string indexPath = Path.Combine(outDir, "index.json");
        var previous = new Dictionary<string, JsonObject>(StringComparer.Ordinal);
        if (File.Exists(indexPath) && !force)
        {
            var old = JsonNode.Parse(File.ReadAllText(indexPath)) as JsonObject;
            if (old?["settings"]?.ToJsonString() == settings.ToJsonString() && old["files"] is JsonObject oldFiles)
            {
                foreach (var kv in oldFiles)
                {
                    // a file that failed is not tried again either, until --force or new settings
                    if (kv.Value is JsonObject e && e["id"]?.GetValue<string>() is string id && e["skip"]?.GetValue<string>() != "dry-run") previous[id] = e;
                }
            }
        }

        var files = new SortedDictionary<string, string>(StringComparer.Ordinal); // "_sample_files/a/b.docx" -> full path
        foreach (string folder in Folders)
        {
            string dir = Path.Combine(platformDir, folder);
            if (!Directory.Exists(dir)) continue;
            foreach (string f in Directory.EnumerateFiles(dir, "*", SearchOption.AllDirectories))
            {
                string ext = Path.GetExtension(f).TrimStart('.').ToLowerInvariant();
                // --zips: an output zip of pages, and every input zip (its contents as a tree, ZipTree)
                if (Extensions.Contains(ext) || (withHtml && ext is "html" or "htm") || (withZips && ext == "zip"))
                    files[Path.GetRelativePath(platformDir, f).Replace('\\', '/')] = f;
            }
        }

        var entries = new JsonObject();
        var byId = new Dictionary<string, JsonObject>(StringComparer.Ordinal);
        int rendered = 0, reused = 0, skipped = 0;
        var started = DateTime.UtcNow;
        foreach (var (rel, full) in files)
        {
            bool input = rel.StartsWith("_sample_files/", StringComparison.Ordinal);
            string id = Id(full, salt, input);
            if (!byId.TryGetValue(id, out JsonObject? entry))
            {
                string folder = Path.Combine(outDir, id);
                // Reused when its pages are all there (a cleanup once removed page files and left view-data.json).
                if (previous.TryGetValue(id, out JsonObject? old) && (old["skip"] != null || PagesPresent(folder)))
                {
                    entry = old;
                    reused++;
                }
                else if (dryRun)
                {
                    entry = new JsonObject { ["id"] = id, ["skip"] = "dry-run" };
                    Console.WriteLine($"would render {rel}");
                }
                else
                {
                    var clock = System.Diagnostics.Stopwatch.StartNew();
                    entry = RenderFile(full, folder, id, urlPrefix, maxPages, scale, input);
                    if (entry["skip"] != null) skipped++; else rendered++;
                    Console.WriteLine((entry["skip"] != null
                        ? $"skipped {rel}: {entry["skip"]}"
                        : $"rendered {rel}: {entry["pages"]} of {entry["total"]} pages") + $" ({clock.Elapsed.TotalSeconds:0.0} s)");
                }
                byId[id] = entry;
            }
            entries[rel] = entry.DeepClone();
        }

        if (dryRun)
        {
            Console.WriteLine($"{files.Count} files, {byId.Count} different; nothing written (dry run)");
            return 0;
        }

        Directory.CreateDirectory(outDir);
        var index = new JsonObject
        {
            ["version"] = 1,
            ["urlPrefix"] = urlPrefix,
            ["settings"] = settings.DeepClone(),
            ["html"] = withHtml, // not a setting: adding or dropping the HTML pages re-renders nothing else
            ["zips"] = withZips, // the same
            ["files"] = entries,
        };
        File.WriteAllText(indexPath, index.ToJsonString(JsonOut), Utf8);

        // Folders no file uses any more (content changed or removed).
        int removed = 0;
        foreach (string dir in Directory.EnumerateDirectories(outDir))
        {
            string name = Path.GetFileName(dir);
            if (!byId.ContainsKey(name))
            {
                Directory.Delete(dir, true);
                removed++;
            }
        }

        long bytes = Directory.EnumerateFiles(outDir, "*", SearchOption.AllDirectories).Sum(f => new FileInfo(f).Length);
        Console.WriteLine($"{files.Count} files ({byId.Count} different): {rendered} rendered, {reused} unchanged, {skipped} skipped, {removed} old folders removed; " +
                          $"{bytes / 1048576.0:0.0} MB in {Path.GetFileName(outDir)}, {(DateTime.UtcNow - started).TotalSeconds:0} s" + (evaluation ? " (EVALUATION MODE)" : ""));
        return 0;
    }

    // Content address: the same file in two places renders once, and the id never needs URL escaping. The settings are
    // part of it (`salt`), so pages drawn differently (another scale, a license, a new GroupDocs.Viewer) get new URLs:
    // browsers and the server cache never show the old ones. A test on 2026-11-20 showed a licensed page under the
    // evaluation page's URL still drawn from the browser cache.
    static string Id(string path, byte[] salt, bool input = false)
    {
        using var sha = IncrementalHash.CreateHash(HashAlgorithmName.SHA256);
        using (var stream = File.OpenRead(path))
        {
            var buffer = new byte[81920];
            int read;
            while ((read = stream.Read(buffer, 0, buffer.Length)) > 0) sha.AppendData(buffer, 0, read);
        }
        sha.AppendData(salt);
        string hash = Convert.ToHexString(sha.GetHashAndReset()).ToLowerInvariant()[..16];
        // The Viewer app reads the format from the extension, and the baked app shows ".html" in its HTML mode: a
        // zip's folder is named after its pages (".html" or ".png"), not ".zip". An input zip's page is its file tree,
        // an HTML page.
        string ext = Path.GetExtension(path).ToLowerInvariant();
        if (ext == ".zip" && input) return hash + ".html";
        return hash + (ext == ".zip" ? ZipKindOf(path) switch { ZipKind.Html => ".html", ZipKind.Images => ".png", _ => ".zip" } : ext);
    }

    // Bump when the files written for a page change shape (2: an HTML file as its own page; 3: the links of a zip's
    // HTML pages, an <object>'s data among them, point at the zip's files).
    const int Layout = 3;

    // One file -> <folder>/page-N.png (N <= maxPages) + view-data.json (GroupDocs.Viewer.UI static content mode).
    // With --html, an HTML file is its own single page instead (see below).
    static JsonObject RenderFile(string path, string folder, string id, string urlPrefix, int maxPages, double scale, bool input = false)
    {
        int treeFiles = -1; // an input zip: how many files its tree lists
        string temp = folder + ".tmp";
        try
        {
            if (Directory.Exists(temp)) Directory.Delete(temp, true);
            Directory.CreateDirectory(temp);
            string ext = Path.GetExtension(path).TrimStart('.').ToLowerInvariant();
            var pages = new List<(int Number, int Width, int Height, string Name)>();
            int total;
            if (ext is "html" or "htm")
            {
                // Shown as itself, as a browser shows it, by the app's HTML mode (the baked app switches to it for
                // .html files): above all GroupDocs.Viewer's own HTML pages, which the app is made for. Its size is the
                // one the page declares, else a Letter page's; the app measures the content anyway.
                string html = File.ReadAllText(path);
                // Files it loads from next to it (an image, a stylesheet) would be asked for next to the app instead,
                // so such a page stays in the browser's own view (no pages here).
                if (LinksLocalFiles(html, Path.GetDirectoryName(path)!)) return new JsonObject { ["id"] = id, ["skip"] = "linked files" };
                var sheets = WorkbookSheets(html);
                if (sheets != null)
                {
                    // A spreadsheet rendered to one HTML file (RenderToSinglePage) is an app, not a document: each
                    // worksheet is an <iframe srcdoc> sized to the viewport, and the tabs that switch them need a script
                    // (VIEWERNET-5861). In a frame without scripts only part of sheet 1 shows, so each worksheet
                    // becomes a page of its own, as a paged HTML view would have it.
                    total = sheets.Count;
                    foreach (var (sheet, i) in sheets.Take(maxPages).Select((s, i) => (s, i)))
                    {
                        var (w, h) = HtmlPageSize(sheet) ?? (816, 1056);
                        string name = $"page-{i + 1}.html";
                        File.WriteAllText(Path.Combine(temp, name), ForViewer(sheet), Utf8);
                        pages.Add((i + 1, w, h, name));
                    }
                }
                else
                {
                    var (width, height) = HtmlPageSize(html) ?? (816, 1056);
                    File.WriteAllText(Path.Combine(temp, "page-1.html"), ForViewer(html), Utf8);
                    pages.Add((1, width, height, "page-1.html"));
                    total = 1;
                }
            }
            else if (ext == "zip" && input)
            {
                // An input archive (an example opens it): one page, the tree of what is inside.
                var (html, files, height) = ZipTree(path);
                File.WriteAllText(Path.Combine(temp, "page-1.html"), ForViewer(html), Utf8);
                pages.Add((1, TreeWidth, height, "page-1.html"));
                total = 1;
                treeFiles = files;
            }
            else if (ext == "zip")
            {
                // An example's pages, zipped by the docs pipeline: they become the preview's pages as they are.
                total = ZipPages(path, temp, $"{urlPrefix}/{id}", maxPages, pages);
                if (total == 0) return new JsonObject { ["id"] = id, ["skip"] = "not pages" };
            }
            else
            {
                using var timeout = new CancellationTokenSource(TimeSpan.FromSeconds(TimeoutSeconds));
                // No downloads while rendering (an email's remote images): the same pages on every run, and fast.
                using var viewer = new Viewer(path, new LoadOptions { SkipExternalResources = true });
                var info = viewer.GetViewInfo(ViewInfoOptions.FromPngViewOptions(new PngViewOptions()), timeout.Token);
                total = info.Pages.Count;
                if (total == 0) return new JsonObject { ["id"] = id, ["skip"] = "no pages" };
                foreach (var page in info.Pages.Take(Math.Min(total, maxPages)))
                {
                    pages.Add((page.Number, page.Width, page.Height, RenderPage(viewer, page, temp, scale, timeout.Token)));
                }
            }

            var list = new JsonArray();
            foreach (var page in pages)
            {
                string url = $"{urlPrefix}/{id}/{page.Name}";
                list.Add(new JsonObject
                {
                    ["number"] = page.Number,
                    ["width"] = page.Width,
                    ["height"] = page.Height,
                    ["pageUrl"] = url,
                    ["thumbUrl"] = url, // never null: the app would turn it into the URL "null"
                });
            }
            // Never "pageLimit": the app would show its "Upgrade to Premium" sheet. The first maxPages pages are all
            // it lists; doc-preview.js says how many there are in all.
            var viewData = new JsonObject
            {
                ["file"] = urlPrefix.TrimStart('/') + "/" + id,
                ["fileName"] = Path.GetFileName(path),
                ["fileType"] = ext == "zip" ? Path.GetExtension(id).TrimStart('.') : ext, // a zip: its pages' type

                ["canPrint"] = false,
                ["searchTerm"] = null,
                ["pages"] = list,
            };
            File.WriteAllText(Path.Combine(temp, "view-data.json"), viewData.ToJsonString(JsonOut), Utf8);
            if (Directory.Exists(folder)) Directory.Delete(folder, true);
            Directory.Move(temp, folder);
            var result = new JsonObject
            {
                ["id"] = id, ["pages"] = pages.Count, ["total"] = total, ["first"] = pages[0].Name,
                ["width"] = pages[0].Width, ["height"] = pages[0].Height,
            };
            if (treeFiles >= 0) result["files"] = treeFiles; // doc-preview.js says "N files", not "1 page"
            return result;
        }
        catch (PasswordRequiredException)
        {
            return new JsonObject { ["id"] = id, ["skip"] = "password" };
        }
        catch (OperationCanceledException)
        {
            Console.Error.WriteLine($"  {Path.GetFileName(path)}: over {TimeoutSeconds} s");
            return new JsonObject { ["id"] = id, ["skip"] = "timeout" };
        }
        catch (IncorrectPasswordException)
        {
            return new JsonObject { ["id"] = id, ["skip"] = "password" };
        }
        catch (Exception ex)
        {
            Console.Error.WriteLine($"  {Path.GetFileName(path)}: {ex.GetType().Name}: {ex.Message}");
            return new JsonObject { ["id"] = id, ["skip"] = "error" };
        }
        finally
        {
            if (Directory.Exists(temp)) Directory.Delete(temp, true);
        }
    }

    // A rendered folder is complete: view-data.json and every page it lists.
    static bool PagesPresent(string folder)
    {
        string viewData = Path.Combine(folder, "view-data.json");
        if (!File.Exists(viewData)) return false;
        try
        {
            if (JsonNode.Parse(File.ReadAllText(viewData))?["pages"] is not JsonArray pages) return false;
            return pages.All(p => p?["pageUrl"]?.GetValue<string>() is string url && File.Exists(Path.Combine(folder, url[(url.LastIndexOf('/') + 1)..])));
        }
        catch (Exception)
        {
            return false;
        }
    }

    // One page -> page-N.png, or page-N.jpg when that is much smaller. Returns the file name.
    static string RenderPage(Viewer viewer, GroupDocs.Viewer.Results.Page page, string temp, double scale, CancellationToken token)
    {
        // Drawn larger than the page so it stays sharp on high-density screens (the app shows it at page size), but
        // never wider than MaxWidth: a 1920 px slide at 1.5x was a 2.3 MB PNG.
        int width = (int)Math.Round(Math.Min(page.Width * scale, MaxWidth));
        var png = new PngViewOptions(Path.Combine(temp, "page-{0}.png"));
        if (width != page.Width) png.Width = width;
        viewer.View(png, token, page.Number);
        string name = $"page-{page.Number}.png";

        // PNG keeps text crisp, but a photo (a slide, a scan) is 1 MB and more: such a page is drawn again as JPG and
        // keeps whichever is much smaller.
        string pngPath = Path.Combine(temp, name);
        long pngBytes = new FileInfo(pngPath).Length;
        if (pngBytes <= PhotoBytes) return name;
        var jpg = new JpgViewOptions(Path.Combine(temp, "page-{0}.jpg")) { Quality = JpgQuality };
        if (width != page.Width) jpg.Width = width;
        viewer.View(jpg, token, page.Number);
        string jpgPath = Path.Combine(temp, $"page-{page.Number}.jpg");
        if (new FileInfo(jpgPath).Length < pngBytes * 0.6)
        {
            File.Delete(pngPath);
            return $"page-{page.Number}.jpg";
        }
        File.Delete(jpgPath);
        return name;
    }

    /* ---------- an input zip: the tree of what is inside (--zips) ---------- */

    // CSS px, the page's width. The Viewer app zooms an HTML page to fit its content's width: a tree only as wide as its
    // longest line came out at 208% in the dialog, 816 at 95% (and scaled down in the tab); 640 fits the tab unscaled.
    const int TreeWidth = 640;
    const int TreeMaxLines = 400;  // a huge archive lists this many lines, then how many more entries there are

    sealed class TreeNode
    {
        public bool IsDir;
        public readonly Dictionary<string, TreeNode> Children = new(StringComparer.Ordinal);
    }

    // The archive's folders and files as a text tree, the way the `tree` command prints one: folders first, then files,
    // each sorted by name, a folder with "/" after its name. Only the names: no icons, sizes or dates. Returns the
    // page, how many files the archive holds and the page height in CSS px.
    static (string Html, int Files, int Height) ZipTree(string path)
    {
        var root = new TreeNode { IsDir = true };
        int files = 0;
        using (var zip = ZipFile.OpenRead(path))
        {
            foreach (var entry in zip.Entries)
            {
                string full = entry.FullName.Replace('\\', '/');
                var parts = full.Split('/', StringSplitOptions.RemoveEmptyEntries);
                if (parts.Length == 0) continue;
                bool isDirEntry = full.EndsWith('/');
                var node = root;
                for (int i = 0; i < parts.Length; i++)
                {
                    bool dir = i < parts.Length - 1 || isDirEntry;
                    if (!node.Children.TryGetValue(parts[i], out var child))
                        node.Children[parts[i]] = child = new TreeNode { IsDir = dir };
                    else if (dir)
                        child.IsDir = true;
                    node = child;
                }
                if (!isDirEntry) files++;
            }
        }

        var lines = new List<string> { System.Net.WebUtility.HtmlEncode(Path.GetFileName(path)) };
        void Walk(TreeNode node, string indent)
        {
            var kids = node.Children
                .OrderBy(k => k.Value.IsDir ? 0 : 1)
                .ThenBy(k => k.Key, StringComparer.OrdinalIgnoreCase)
                .ToList();
            for (int i = 0; i < kids.Count; i++)
            {
                bool last = i == kids.Count - 1;
                string name = System.Net.WebUtility.HtmlEncode(kids[i].Key);
                lines.Add(indent + (last ? "└── " : "├── ") + (kids[i].Value.IsDir ? $"<b>{name}/</b>" : name));
                if (kids[i].Value.IsDir) Walk(kids[i].Value, indent + (last ? "    " : "│   "));
            }
        }
        Walk(root, "");

        if (lines.Count > TreeMaxLines)
        {
            int more = lines.Count - TreeMaxLines;
            lines = lines.Take(TreeMaxLines).ToList();
            lines.Add($"<span class=\"more\">… and {more} more</span>");
        }
        string title = System.Net.WebUtility.HtmlEncode(Path.GetFileName(path));
        string html = "<!DOCTYPE html><html><head><meta charset=\"utf-8\"><title>" + title + "</title><style>" +
            "body{box-sizing:border-box;width:" + TreeWidth + "px;margin:0;padding:20px 24px;background:#fff;color:#1e293b;" +
            "font:13px/1.4 Consolas,\"Cascadia Mono\",SFMono-Regular,Menlo,\"Liberation Mono\",monospace}" +
            "pre{margin:0;font:inherit;white-space:pre}b{font-weight:600;color:#0f172a}.more{color:#64748b}" +
            "</style></head><body><pre>" + string.Join("\n", lines) + "</pre></body></html>";
        return (html, files, 40 + (int)Math.Ceiling(lines.Count * 18.2));
    }

    /* ---------- an output zip of pages (--zips) ---------- */

    enum ZipKind { Other, Images, Html }

    static readonly HashSet<string> ImageExtensions = new(StringComparer.OrdinalIgnoreCase) { ".png", ".jpg", ".jpeg" };

    // What an HTML page loads from next to it (external resources): fonts, stylesheets, images, scripts.
    static readonly HashSet<string> ResourceExtensions = new(StringComparer.OrdinalIgnoreCase)
    {
        ".css", ".js", ".woff", ".woff2", ".ttf", ".otf", ".eot", ".png", ".jpg", ".jpeg", ".gif", ".svg", ".bmp", ".webp",
    };

    static List<ZipArchiveEntry> FileEntries(ZipArchive zip) =>
        zip.Entries.Where(e => e.Name.Length > 0 && !e.FullName.StartsWith("__MACOSX/", StringComparison.Ordinal)).ToList();

    // Images only: an image view's pages. HTML files plus what they load: an HTML view's pages. Anything else (a PDF,
    // a log next to the pages, an attachment) is not pages: its tab keeps the pipeline's file list.
    static ZipKind ZipKindOf(string path)
    {
        try
        {
            using var zip = ZipFile.OpenRead(path);
            var entries = FileEntries(zip);
            if (entries.Count == 0) return ZipKind.Other;
            if (entries.All(e => ImageExtensions.Contains(Path.GetExtension(e.Name)))) return ZipKind.Images;
            bool html = entries.Any(e => Path.GetExtension(e.Name).ToLowerInvariant() is ".html" or ".htm");
            if (html && entries.All(e => Path.GetExtension(e.Name).ToLowerInvariant() is ".html" or ".htm" || ResourceExtensions.Contains(Path.GetExtension(e.Name))))
                return ZipKind.Html;
        }
        catch (InvalidDataException)
        {
            // not a zip after all
        }
        return ZipKind.Other;
    }

    // page_2 before page_10: digits compare as numbers.
    static readonly Comparer<string> Natural = Comparer<string>.Create((a, b) =>
    {
        var x = Regex.Split(a.ToLowerInvariant(), @"(\d+)");
        var y = Regex.Split(b.ToLowerInvariant(), @"(\d+)");
        for (int i = 0; i < Math.Min(x.Length, y.Length); i++)
        {
            int c = (i % 2 == 1 && long.TryParse(x[i], out long m) && long.TryParse(y[i], out long n))
                ? m.CompareTo(n) : string.CompareOrdinal(x[i], y[i]);
            if (c != 0) return c;
        }
        return x.Length.CompareTo(y.Length);
    });

    // The zip's pages into `temp` (page-N.png|jpg, or page-N.html with the files it loads under res/). Returns how
    // many pages the zip has, 0 when it isn't pages.
    static int ZipPages(string path, string temp, string folderUrl, int maxPages, List<(int Number, int Width, int Height, string Name)> pages)
    {
        var kind = ZipKindOf(path);
        if (kind == ZipKind.Other) return 0;
        using var zip = ZipFile.OpenRead(path);
        var entries = FileEntries(zip);
        if (kind == ZipKind.Images)
        {
            var images = entries.OrderBy(e => e.FullName, Natural).ToList();
            foreach (var (entry, i) in images.Take(maxPages).Select((e, i) => (e, i)))
            {
                pages.Add(ImagePage(entry, i + 1, temp));
            }
            return images.Count;
        }

        var htmlPages = entries.Where(e => Path.GetExtension(e.Name).ToLowerInvariant() is ".html" or ".htm")
            .OrderBy(e => e.FullName, Natural).ToList();
        // Where each file of the zip is served from: a page as page-N.html, anything else under res/ with its path in
        // the zip, so the URLs a stylesheet holds (fonts next to it) still resolve.
        var urls = new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase);
        string resDir = Path.GetFullPath(Path.Combine(temp, "res")) + Path.DirectorySeparatorChar;
        foreach (var entry in entries)
        {
            string key = ZipPath(entry.FullName);
            int n = htmlPages.IndexOf(entry);
            if (n >= 0)
            {
                if (n < maxPages) urls[key] = $"{folderUrl}/page-{n + 1}.html";
                continue;
            }
            string target = Path.GetFullPath(Path.Combine(resDir, key.Replace('/', Path.DirectorySeparatorChar)));
            if (!target.StartsWith(resDir, StringComparison.OrdinalIgnoreCase)) continue; // a path out of the folder
            Directory.CreateDirectory(Path.GetDirectoryName(target)!);
            entry.ExtractToFile(target, true);
            urls[key] = $"{folderUrl}/res/" + string.Join("/", key.Split('/').Select(Uri.EscapeDataString));
        }
        foreach (var (entry, i) in htmlPages.Take(maxPages).Select((e, i) => (e, i)))
        {
            string html;
            using (var reader = new StreamReader(entry.Open(), Utf8, detectEncodingFromByteOrderMarks: true)) html = reader.ReadToEnd();
            string dir = ZipPath(entry.FullName) is var p && p.Contains('/') ? p[..p.LastIndexOf('/')] : "";
            html = ZipLinks(html, dir, urls);
            var (width, height) = HtmlPageSize(html) ?? (816, 1056);
            string name = $"page-{i + 1}.html";
            File.WriteAllText(Path.Combine(temp, name), ForViewer(html), Utf8);
            pages.Add((i + 1, width, height, name));
        }
        return htmlPages.Count;
    }

    // A path inside the zip: forward slashes, no "." or ".." segments.
    static string ZipPath(string path)
    {
        var parts = new List<string>();
        foreach (string part in path.Replace('\\', '/').Split('/'))
        {
            if (part is "" or ".") continue;
            if (part == "..") { if (parts.Count > 0) parts.RemoveAt(parts.Count - 1); continue; }
            parts.Add(part);
        }
        return string.Join("/", parts);
    }

    // A page's relative links (src, href, url()) to files of the zip become the URLs the files are served from, so
    // they load next to the docs page and in the Viewer app alike. Any other link stays as it is.
    static string ZipLinks(string html, string dir, Dictionary<string, string> urls) =>
        Links.Replace(html, m =>
        {
            Group g = m.Groups[1].Success ? m.Groups[1] : m.Groups[2];
            string link = g.Value.Trim();
            if (link.Length == 0 || Absolute.IsMatch(link)) return m.Value;
            int cut = link.IndexOfAny(new[] { '?', '#' });
            string target = cut >= 0 ? link[..cut] : link;
            string key = ZipPath((dir.Length > 0 ? dir + "/" : "") + Uri.UnescapeDataString(target));
            if (!urls.TryGetValue(key, out string? url)) return m.Value;
            int start = g.Index - m.Index;
            return m.Value[..start] + url + (cut >= 0 ? link[cut..] : "") + m.Value[(start + g.Length)..];
        });

    // An image page as it is, or as a JPG when that is much smaller (a photo-like PNG, as for document pages).
    static (int Number, int Width, int Height, string Name) ImagePage(ZipArchiveEntry entry, int n, string temp)
    {
        string ext = Path.GetExtension(entry.Name).ToLowerInvariant() == ".png" ? ".png" : ".jpg";
        string name = $"page-{n}{ext}";
        string file = Path.Combine(temp, name);
        entry.ExtractToFile(file, true);
        if (ext == ".png" && entry.Length > PhotoBytes)
        {
            string work = Path.Combine(temp, $"jpg-{n}");
            Directory.CreateDirectory(work);
            try
            {
                using (var viewer = new Viewer(file))
                {
                    viewer.View(new JpgViewOptions(Path.Combine(work, "page-{0}.jpg")) { Quality = JpgQuality });
                }
                string jpg = Path.Combine(work, "page-1.jpg");
                var (pw, ph) = ImageSize(file);
                if (File.Exists(jpg) && new FileInfo(jpg).Length < entry.Length * 0.6 && ImageSize(jpg) == (pw, ph))
                {
                    File.Delete(file);
                    name = $"page-{n}.jpg";
                    file = Path.Combine(temp, name);
                    File.Move(jpg, file);
                }
            }
            catch (Exception ex)
            {
                Console.Error.WriteLine($"  {entry.FullName}: kept as PNG ({ex.GetType().Name})");
            }
            finally
            {
                Directory.Delete(work, true);
            }
        }
        var (width, height) = ImageSize(file);
        return (n, width, height, name);
    }

    // Width and height from a PNG's IHDR or a JPEG's SOF segment.
    static (int Width, int Height) ImageSize(string path)
    {
        byte[] b = File.ReadAllBytes(path);
        if (b.Length > 24 && b[0] == 0x89 && b[1] == 'P' && b[2] == 'N' && b[3] == 'G')
            return ((b[16] << 24) | (b[17] << 16) | (b[18] << 8) | b[19], (b[20] << 24) | (b[21] << 16) | (b[22] << 8) | b[23]);
        if (b.Length > 4 && b[0] == 0xFF && b[1] == 0xD8)
        {
            int i = 2;
            while (i + 9 < b.Length)
            {
                if (b[i] != 0xFF) { i++; continue; }
                byte marker = b[i + 1];
                if (marker == 0xFF) { i++; continue; }
                int length = (b[i + 2] << 8) | b[i + 3];
                if (marker >= 0xC0 && marker <= 0xCF && marker is not (0xC4 or 0xC8 or 0xCC))
                    return ((b[i + 7] << 8) | b[i + 8], (b[i + 5] << 8) | b[i + 6]);
                i += 2 + length;
            }
        }
        throw new InvalidDataException("not a PNG or JPEG image: " + Path.GetFileName(path));
    }

    // Relative links (src, href, CSS url(), an <object>'s data: a slide's SVG) to files that exist next to the HTML
    // file. Absolute URLs (any scheme: data:, https:, cid:...), anchors and links to files that aren't there (broken
    // in a browser too) don't count.
    static readonly Regex Links = new(@"(?:\b(?:src|href|poster|background|data)\s*=\s*[""']([^""']+)[""']|url\(\s*[""']?([^""')]+)[""']?\s*\))", RegexOptions.IgnoreCase);
    static readonly Regex Absolute = new(@"^(?:[a-z][a-z0-9+.-]*:|//|#)", RegexOptions.IgnoreCase);

    static bool LinksLocalFiles(string html, string dir)
    {
        foreach (Match m in Links.Matches(Regex.Replace(html, @"<!--[\s\S]*?-->", "")))
        {
            string link = (m.Groups[1].Success ? m.Groups[1].Value : m.Groups[2].Value).Trim();
            if (link.Length == 0 || Absolute.IsMatch(link)) continue;
            string local = Uri.UnescapeDataString(link.Split('?', '#')[0]).Replace('/', Path.DirectorySeparatorChar);
            try
            {
                if (local.Length > 0 && File.Exists(Path.GetFullPath(Path.Combine(dir, local)))) return true;
            }
            catch (Exception)
            {
                // not a path
            }
        }
        return false;
    }

    // The app puts an HTML page inside its own page (a shadow root), where <html> and <body> are dropped, and their
    // styles with them: an email's <body style="font-family:'Times New Roman'">, a "body { margin: 0 }" rule. The
    // copy moves them onto a wrapper: <body>'s style, class, dir and lang (and its old bgcolor and text colors) go to a
    // <div class="gdv-body">, and the CSS selectors html and body become that div.
    static readonly Regex BodyTag = new(@"<body\b([^>]*)>", RegexOptions.IgnoreCase);
    static readonly Regex Attr = new(@"\b(style|class|dir|lang|bgcolor|text)\s*=\s*(?:""([^""]*)""|'([^']*)'|([^\s>]+))", RegexOptions.IgnoreCase);
    static readonly Regex StyleBlock = new(@"(<style\b[^>]*>)([\s\S]*?)(</style\s*>)", RegexOptions.IgnoreCase);

    static string ForViewer(string html)
    {
        var body = BodyTag.Match(html);
        if (!body.Success) return html; // a fragment: nothing is dropped
        string style = "", cls = "gdv-body", extra = "";
        foreach (Match a in Attr.Matches(body.Groups[1].Value))
        {
            string value = a.Groups[2].Success ? a.Groups[2].Value : a.Groups[3].Success ? a.Groups[3].Value : a.Groups[4].Value;
            switch (a.Groups[1].Value.ToLowerInvariant())
            {
                case "style": style += value.TrimEnd(';', ' ') + ";"; break;
                case "class": cls += " " + value; break;
                case "bgcolor": style = $"background-color:{value};" + style; break;
                case "text": style = $"color:{value};" + style; break;
                default: extra += $" {a.Groups[1].Value.ToLowerInvariant()}=\"{value.Replace("\"", "&quot;")}\""; break;
            }
        }
        string open = $"<div class=\"{cls.Replace("\"", "&quot;")}\"" + (style.Length > 0 ? $" style=\"{style.Replace("\"", "&quot;")}\"" : "") + extra + ">";
        int end = html.LastIndexOf("</body", StringComparison.OrdinalIgnoreCase);
        string result = end > body.Index
            ? html[..(body.Index + body.Length)] + open + html[(body.Index + body.Length)..end] + "</div>" + html[end..]
            : html[..(body.Index + body.Length)] + open + html[(body.Index + body.Length)..] + "</div>";
        return StyleBlock.Replace(result, m => m.Groups[1].Value + BodySelectors(m.Groups[2].Value) + m.Groups[3].Value);
    }

    // In a stylesheet, "html" and "body" as type selectors become ".gdv-body" ("html body" and "html > body" too).
    // Only selectors change: the text before each "{" that isn't an @-rule.
    static string BodySelectors(string css)
    {
        var sb = new StringBuilder(css.Length + 32);
        int start = 0;
        for (int i = 0; i < css.Length; i++)
        {
            char c = css[i];
            if (c == '}' || c == ';') { sb.Append(css, start, i - start + 1); start = i + 1; }
            else if (c == '{')
            {
                string prelude = css[start..i];
                if (!prelude.TrimStart().StartsWith('@'))
                {
                    prelude = Regex.Replace(prelude, @"(?<![\w.#:-])html\s*>?\s*body(?![\w-])", "body", RegexOptions.IgnoreCase);
                    prelude = Regex.Replace(prelude, @"(?<![\w.#:-])(?:html|body)(?![\w-])", ".gdv-body", RegexOptions.IgnoreCase);
                }
                sb.Append(prelude).Append('{');
                start = i + 1;
            }
        }
        sb.Append(css, start, css.Length - start);
        return sb.ToString();
    }

    // The worksheets of GroupDocs.Viewer's single-page spreadsheet HTML, each a document of its own, or null for any
    // other HTML. The file is <div class="__gdv_ws_container"> with one <div class="__gdv_ws_content"><iframe srcdoc="...">
    // per worksheet, then a button per worksheet with its name. Each worksheet's page starts with that name, since
    // the tabs are gone; the Excel "File-List" links to files that were never written are dropped.
    static readonly Regex SheetFrame = new(@"<div\b[^>]*\b__gdv_ws_content\b[^>]*>\s*<iframe\b[^>]*?\bsrcdoc\s*=\s*""([^""]*)""", RegexOptions.IgnoreCase);
    static readonly Regex SheetButton = new(@"<button\b[^>]*\b__gdv_ws_link\b[^>]*>([\s\S]*?)</button\s*>", RegexOptions.IgnoreCase);
    static readonly Regex ExcelLinks = new(@"<link\b[^>]*\brel\s*=\s*[""']?(?:File-List|Edit-Time-Data|OLE-Object-Data)\b[^>]*>", RegexOptions.IgnoreCase);

    static List<string>? WorkbookSheets(string html)
    {
        if (!html.Contains("__gdv_ws_container", StringComparison.Ordinal)) return null;
        var frames = SheetFrame.Matches(html);
        if (frames.Count == 0) return null;
        var names = SheetButton.Matches(html).Select(m => System.Net.WebUtility.HtmlDecode(Regex.Replace(m.Groups[1].Value, "<[^>]*>", "")).Trim()).ToList();
        var sheets = new List<string>();
        for (int i = 0; i < frames.Count; i++)
        {
            string sheet = ExcelLinks.Replace(System.Net.WebUtility.HtmlDecode(frames[i].Groups[1].Value), "");
            string name = i < names.Count && names[i].Length > 0 ? names[i] : $"Sheet {i + 1}";
            string label = "<div style=\"font:600 13px/1.5 Arial,Helvetica,sans-serif;color:#475569;margin:0 0 8px\">" +
                           System.Net.WebUtility.HtmlEncode(name) + "</div>";
            var body = BodyTag.Match(sheet);
            sheets.Add(body.Success ? sheet.Insert(body.Index + body.Length, label) : label + sheet);
        }
        return sheets;
    }

    // The page size an HTML page declares, in CSS px. GroupDocs.Viewer's HTML output gives it on one of its first
    // elements: a slide's <svg width="13.333333in" height="7.5in">, a document page's <div style="width:595.3pt;
    // height:841.9pt;">. Null for a page that flows (an email, a web page).
    static readonly Regex StyleBlocks = new(@"<style\b[\s\S]*?</style\s*>", RegexOptions.IgnoreCase);
    static readonly Regex BoxTags = new(@"<(?:svg|div)\b([^>]*)>", RegexOptions.IgnoreCase);
    static readonly Regex StyleAttr = new(@"\bstyle\s*=\s*(?:""([^""]*)""|'([^']*)')", RegexOptions.IgnoreCase);

    static (int Width, int Height)? HtmlPageSize(string html)
    {
        string text = StyleBlocks.Replace(html, "");
        int body = text.IndexOf("<body", StringComparison.OrdinalIgnoreCase);
        if (body >= 0) text = text[body..];
        foreach (Match tag in BoxTags.Matches(text).Take(6))
        {
            string attrs = tag.Groups[1].Value;
            double? w = Length(attrs, @"\bwidth\s*=\s*[""']?\s*"), h = Length(attrs, @"\bheight\s*=\s*[""']?\s*");
            var style = StyleAttr.Match(attrs);
            if ((w == null || h == null) && style.Success)
            {
                string css = style.Groups[1].Success ? style.Groups[1].Value : style.Groups[2].Value;
                w = Length(css, @"(?:^|;)\s*width\s*:\s*");
                h = Length(css, @"(?:^|;)\s*height\s*:\s*");
            }
            if (w > 0 && h > 0) return ((int)Math.Round(w.Value), (int)Math.Round(h.Value));
        }
        return null;
    }

    // A length after `prefix` in CSS px: in, pt, cm, mm, px or a bare number; null for a percentage or nothing.
    static double? Length(string text, string prefix)
    {
        var m = Regex.Match(text, prefix + @"([\d.]+)\s*(in|pt|px|cm|mm)?(?![\d.%])", RegexOptions.IgnoreCase);
        if (!m.Success || !double.TryParse(m.Groups[1].Value, NumberStyles.Float, CultureInfo.InvariantCulture, out double v)) return null;
        return m.Groups[2].Value.ToLowerInvariant() switch
        {
            "in" => v * 96, "pt" => v * 96 / 72, "cm" => v * 96 / 2.54, "mm" => v * 96 / 25.4, _ => v,
        };
    }

    static bool IsUrl(string s) =>
        Uri.TryCreate(s, UriKind.Absolute, out Uri? u) && (u.Scheme == Uri.UriSchemeHttp || u.Scheme == Uri.UriSchemeHttps);

    // GROUPDOCS_LIC_PATH names a license file or, on the build network, the URL of one. A downloaded license stays in
    // memory: it is never written to disk or printed.
    static void SetLicense(string source)
    {
        if (!IsUrl(source))
        {
            new License().SetLicense(source);
            return;
        }
        using var http = new HttpClient { Timeout = TimeSpan.FromSeconds(30) };
        byte[] bytes = http.GetByteArrayAsync(source).GetAwaiter().GetResult();
        using var stream = new MemoryStream(bytes, writable: false);
        new License().SetLicense(stream);
    }

    /* ---------- viewer: GroupDocs.Viewer.UI as static files ---------- */

    // Copies the Viewer app (src/GroupDocs.Viewer.UI/App of GroupDocs.Viewer-for-.NET-UI) and fills in index.html the
    // way the ASP.NET middleware does (UIResourceExtensions.GetIndexPageHtml), for static content mode. Every config
    // key is set: the app reads them all, and a missing one is undefined (a missing supportedLanguages breaks it).
    static int BakeViewer(string[] args)
    {
        string app = Path.GetFullPath(args[0]);
        string outDir = Path.GetFullPath(args[1]);
        string basePath = Opt(args, "--base") ?? throw new ArgumentException("--base /doc-viewer/<version>/ is needed");
        if (!basePath.EndsWith('/')) basePath += "/";
        string indexFile = Path.Combine(app, "index.html");
        if (!File.Exists(indexFile)) throw new FileNotFoundException("not the Viewer app folder: no index.html", indexFile);

        if (Directory.Exists(outDir)) Directory.Delete(outDir, true);
        foreach (string f in Directory.EnumerateFiles(app, "*", SearchOption.AllDirectories))
        {
            string rel = Path.GetRelativePath(app, f);
            if (rel == "index.html") continue;
            string target = Path.Combine(outDir, rel);
            Directory.CreateDirectory(Path.GetDirectoryName(target)!);
            File.Copy(f, target);
        }

        var config = new JsonObject
        {
            ["apiEndpoint"] = "",               // page URLs in view-data.json are root-relative already
            ["renderingMode"] = "image",
            ["staticContentMode"] = true,
            ["initialFile"] = null,             // ?file=<product>/<platform>/_preview/<id>
            ["preloadPages"] = 3,
            ["initialZoom"] = "Fit Width",
            ["enableHeader"] = false,           // the docs dialog has its own header
            ["enableToolbar"] = true,
            ["enablePageSelector"] = true,
            ["enableDownloadPdf"] = false,      // no print.pdf is rendered
            ["enableFileUpload"] = false,
            ["enableFileBrowser"] = false,
            ["enableContextMenu"] = false,
            ["enableRotate"] = false,
            ["enableThemeSwitcher"] = false,
            ["defaultTheme"] = "auto",
            ["enableZoom"] = true,
            ["enableSearch"] = false,           // image mode has no text layer
            ["enableFileName"] = false,
            ["enableThumbnails"] = false,
            ["enablePrint"] = false,
            ["enablePresentation"] = false,
            ["enableHyperlinks"] = false,
            ["enableScrollAnimation"] = true,
            ["enableLanguageSelector"] = false,
            ["enableHelp"] = false,
            ["defaultLanguage"] = "en",
            ["supportedLanguages"] = new JsonArray("en"),
            ["showExitButton"] = false,
            ["apiEndpointConfig"] = new JsonObject
            {
                ["filesTree"] = "/list-dir.json",
                ["viewData"] = "/view-data.json",
                ["printPdf"] = "/print.pdf",
            },
        };

        // 1. The app shows its page navigation (first, previous, page number, next, last) from 1080 px only, and a docs
        //    tab or dialog pane is narrower: there it shows from 480 px (a phone keeps room for zoom only).
        // 2. Pages stay white, as everywhere on the site: the app's dark theme gives pages a warm paper color, which an
        //    HTML page shows (page images cover it), so an HTML output looked beige next to a white DOCX page.
        const string customCss = "<style>@media (min-width: 480px) { .actions-row { display: flex !important; } } " +
                                 "gd-shadow-page { background-color: #fff !important; }</style>";
        // An HTML file (render --html) is its own page, for the app's HTML mode: it shows the HTML as a browser does
        // and measures its size. The mode is an app setting, so a .html file switches it here, before the app starts.
        const string customJs = "<script>(function () { var f = new URLSearchParams(location.search).get(\"file\") || \"\"; " +
                                "if (/\\.html?$/i.test(f)) window.groupdocs.viewer.renderingMode = \"html\"; })();</script>";

        string html = File.ReadAllText(indexFile)
            .Replace("#uiPath#", basePath)
            .Replace("#uiTitle#", "Document preview")
            .Replace("#uiConfig#", config.ToJsonString(JsonOut))
            .Replace("#customCSS#", customCss)
            .Replace("#customJS#", customJs);
        html = html.Replace("<head>", "<head>\n\t<meta name=\"robots\" content=\"noindex\">\n\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">");
        File.WriteAllText(Path.Combine(outDir, "index.html"), html, Utf8);
        Console.WriteLine($"Viewer app at {basePath} -> {outDir}");
        return 0;
    }
}
