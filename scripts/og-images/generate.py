#!/usr/bin/env python3
"""Generate the social preview cards (Open Graph / Twitter, 1200x630 JPEG) in static/og/.

    python scripts/og-images/generate.py                 # all cards
    python scripts/og-images/generate.py viewer search   # only these product families (+ the default card)

Re-run after adding a product or platform to data/products.toml, then commit static/og/.

Cards
    static/og/docs.jpg                  default (home page, 404, anything outside a product)
    static/og/<key>.jpg                 product family landing page, e.g. /viewer/
    static/og/<key>-<platform>.jpg      everything under /<key>/<platform>/, e.g. /viewer/net/...

Which card a page gets is decided by themes/hugo-geekdoc/layouts/partials/utils/og-card.html.

Requirements: Python 3.11+ (tomllib) and Google Chrome, Chromium or Microsoft Edge for headless rendering
(found automatically, or set CHROME=/path/to/chrome). The card design is card.html next to this script.
"""
import base64
import os
import pathlib
import shutil
import subprocess
import sys
import tempfile
import tomllib
import urllib.parse

HERE = pathlib.Path(__file__).resolve().parent
ROOT = HERE.parents[1]  # the site repo (scripts/og-images/generate.py)
THEME_STATIC = ROOT / "themes" / "hugo-geekdoc" / "static"
OUT = ROOT / "static" / "og"

# platform key -> subtitle on the card (titles follow the docs: "GroupDocs.Viewer for Python via .NET")
PLATFORMS = {
    "net": "for .NET",
    "java": "for Java",
    "python-net": "for Python via .NET",
    "nodejs-java": "for Node.js via Java",
    "mcp": "MCP server for AI agents",
}
ORDER = list(PLATFORMS)
RUNTIMES = ["net", "java", "python-net", "nodejs-java"]


def find_chrome():
    env = os.environ.get("CHROME")
    if env:
        return env
    candidates = [
        r"C:\Program Files\Google\Chrome\Application\chrome.exe",
        r"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe",
        r"C:\Program Files\Microsoft\Edge\Application\msedge.exe",
        "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    ]
    for c in candidates:
        if os.path.isfile(c):
            return c
    for name in ("google-chrome", "google-chrome-stable", "chromium", "chromium-browser", "chrome", "msedge"):
        found = shutil.which(name)
        if found:
            return found
    sys.exit("Chrome/Chromium/Edge not found; set CHROME=/path/to/browser")


def data_uri(path, mime):
    return f"data:{mime};base64," + base64.b64encode(path.read_bytes()).decode("ascii")


def build_template(tmp):
    """card.html with fonts, the white GroupDocs logo and the product icon sprite inlined."""
    html = (HERE / "card.html").read_text(encoding="utf-8")
    fonts = THEME_STATIC / "fonts"
    sprite = (THEME_STATIC / "img" / "groupdocs-stack.svg").read_text(encoding="utf-8")
    html = (html
            .replace("@INTER_MEDIUM@", data_uri(fonts / "Inter-Medium.ttf", "font/ttf"))
            .replace("@INTER_SEMIBOLD@", data_uri(fonts / "Inter-SemiBold.ttf", "font/ttf"))
            .replace("@INTER_EXTRABOLD@", data_uri(fonts / "Inter-ExtraBold.ttf", "font/ttf"))
            .replace("@LOGO_WHITE@", data_uri(THEME_STATIC / "logo-white.svg", "image/svg+xml"))
            .replace("@SPRITE@", sprite))
    path = tmp / "card.html"
    path.write_text(html, encoding="utf-8")
    return path


def render(chrome, template, params, out, profile):
    url = template.as_uri() + "?" + urllib.parse.urlencode(params)
    cmd = [
        chrome, "--headless=new", "--disable-gpu", "--no-first-run", "--no-default-browser-check",
        f"--user-data-dir={profile}", "--hide-scrollbars", "--force-device-scale-factor=1",
        "--window-size=1200,630", "--virtual-time-budget=3000", f"--screenshot={out}", url,
    ]
    subprocess.run(cmd, check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, timeout=120)
    if not out.is_file() or out.stat().st_size == 0:
        sys.exit(f"Chrome did not write {out}")


def main(only):
    products = tomllib.loads((ROOT / "data" / "products.toml").read_text(encoding="utf-8"))["product"]
    products = sorted(products, key=lambda p: p.get("weight", 0))
    if only:
        products = [p for p in products if p["key"] in only]
        if not products:
            sys.exit(f"no product with key in {only}")

    cards = [("docs.jpg", {
        "kind": "default",
        "name": "Document processing SDKs",
        "sub": "Developer guides, code examples and MCP servers for .NET, Java, Python and Node.js",
        "platforms": ",".join(ORDER),
    })]
    for p in products:
        name = p["title"].replace(" Product Family", "")
        listed = [k for k in ORDER if k in p.get("platforms", [])]
        cards.append((f"{p['key']}.jpg", {
            "kind": "family", "name": name, "sub": "Developer documentation",
            "icon": p["icon"], "platforms": ",".join(listed),
        }))
        # every runtime gets a card (a few repos have platform folders not listed in products.toml);
        # MCP only where the family ships an MCP server
        for k in RUNTIMES + (["mcp"] if "mcp" in listed else []):
            pills = [x for x in ORDER if x in listed or x == k]
            cards.append((f"{p['key']}-{k}.jpg", {
                "kind": "platform", "name": name, "sub": PLATFORMS[k],
                "icon": p["icon"], "platforms": ",".join(pills), "active": k,
            }))

    chrome = find_chrome()
    OUT.mkdir(parents=True, exist_ok=True)
    with tempfile.TemporaryDirectory(prefix="og-cards-") as tmpdir:
        tmp = pathlib.Path(tmpdir)
        template = build_template(tmp)
        profile = tmp / "chrome-profile"  # isolated profile: never touches a running browser
        for i, (filename, params) in enumerate(cards, 1):
            render(chrome, template, params, OUT / filename, profile)
            print(f"[{i}/{len(cards)}] static/og/{filename}")
    total = sum((OUT / f).stat().st_size for f, _ in cards)
    print(f"{len(cards)} cards, {total // 1024} KB")


if __name__ == "__main__":
    main(set(sys.argv[1:]))
