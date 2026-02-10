# Enabling Markdown Output in Product Repositories

This guide explains how to enable the Markdown output format (`.md` alongside HTML) in individual product documentation repositories such as `GroupDocs.Viewer-Docs`, `GroupDocs.Conversion-Docs`, etc.

## Background

Every product repo follows the same pattern:

```
GroupDocs.{Product}-Docs/
├── common/                  ← submodule (groupdocs/docs.groupdocs.com)
├── java/                    ← product content
├── net/
├── nodejs-java/
├── python-net/
├── _index.md                ← product landing page
├── build_docs.cmd           ← local dev server (Windows)
├── build_docs.sh            ← local dev server (Linux/macOS)
└── .github/workflows/
    ├── publish-prod.yml
    └── publish-qa.yml
```

The `common` submodule (`groupdocs/docs.groupdocs.com`) contains the Hugo config, theme, and layouts. The Markdown output format is defined there. Updating the submodule pulls in all the required infrastructure.

## Prerequisites

The `common` submodule must contain the following changes (already applied in the central docs repo):

- `config.toml` — MD output format and `text/markdown` media type
- `layouts/_default/single.md` — Markdown template for single pages
- `layouts/_default/list.md` — Markdown template for section pages
- `layouts/index.md` — Markdown template for the home page
- `move_md_to_ugly_urls.sh` — post-build script that renames `index.md` → `page.md`

## Step 1: Update the `common` Submodule

In the product repo, pull the latest `common` submodule so it picks up the new config, layouts, and script:

```bash
git submodule update --init --recursive
cd common
git pull origin master
cd ..
git add common
git commit -m "Update common submodule with Markdown output support"
```

## Step 2: Update the CI Workflows

Both `publish-prod.yml` and `publish-qa.yml` need a post-build step. The changes are the same for both files — only the deploy targets differ.

### Before (current workflow)

```yaml
    - name: Run and build Hugo
      run: |
        mkdir -p common/content/${{ env.PRODUCT }}
        cp -r java common/content/${{ env.PRODUCT }}
        cp -r net common/content/${{ env.PRODUCT }}
        cp -r nodejs-java common/content/${{ env.PRODUCT }}
        cp -r python-net common/content/${{ env.PRODUCT }}
        cp _index.md common/content/${{ env.PRODUCT }}
        hugo --source common --minify ...

    - name: Deploy sitemap
      ...
```

### After (add the highlighted step)

```yaml
    - name: Run and build Hugo
      run: |
        mkdir -p common/content/${{ env.PRODUCT }}
        cp -r java common/content/${{ env.PRODUCT }}
        cp -r net common/content/${{ env.PRODUCT }}
        cp -r nodejs-java common/content/${{ env.PRODUCT }}
        cp -r python-net common/content/${{ env.PRODUCT }}
        cp _index.md common/content/${{ env.PRODUCT }}
        hugo --source common --minify ...

    # ── NEW: rename index.md files to ugly URLs ──
    - name: Move MD files to ugly URLs
      run: common/move_md_to_ugly_urls.sh common/public/${{ env.PRODUCT }}

    - name: Deploy sitemap
      ...
```

**Important:** the script is called with `common/public/${{ env.PRODUCT }}` (not `common/public`). This ensures:

- Sub-pages get ugly URLs: `/viewer/net/installation.md` instead of `/viewer/net/installation/index.md`
- The product root `index.md` stays inside the product directory so it is included in the rsync deploy

### Full workflow example (publish-prod.yml for Viewer)

```yaml
name: publish-prod

on: workflow_dispatch

jobs:
  build:
    runs-on: self-hosted
    env:
      PRODUCT: viewer

    steps:
      - name: Clean up current folder
        run: rm -rf ./* ./.??*

      - uses: actions/checkout@v4

      - name: Submodule update
        run: |
          git submodule update --init --recursive
          git submodule foreach git pull origin master

      - name: Install Hugo
        run: |
          curl -LO https://github.com/gohugoio/hugo/releases/download/v0.101.0/hugo_extended_0.101.0_Linux-64bit.deb
          sudo dpkg -i hugo_extended_0.101.0_Linux-64bit.deb

      - name: Run and build Hugo
        run: |
          mkdir -p common/content/${{ env.PRODUCT }}
          cp -r java common/content/${{ env.PRODUCT }}
          cp -r net common/content/${{ env.PRODUCT }}
          cp -r nodejs-java common/content/${{ env.PRODUCT }}
          cp -r python-net common/content/${{ env.PRODUCT }}
          cp _index.md common/content/${{ env.PRODUCT }}
          hugo --source common --minify

      - name: Move MD files to ugly URLs
        run: common/move_md_to_ugly_urls.sh common/public/${{ env.PRODUCT }}

      - name: Deploy sitemap
        uses: nogsantos/scp-deploy@master
        with:
          src: common/public/product-sitemap.xml
          host: ${{ secrets.DOCS_SSH_HOST }}
          remote: ${{ secrets.DOCS_SSH_DIR }}/sitemaps/${{ env.PRODUCT }}.xml
          user: ${{ secrets.DOCS_SSH_USER }}
          key: ${{ secrets.DOCS_SSH_KEY }}

      - name: Deploy documentation
        uses: burnett01/rsync-deployments@7.0.1
        with:
          switches: -vzr --delete
          path: common/public/${{ env.PRODUCT }}
          remote_path: ${{ secrets.DOCS_SSH_DIR }}
          remote_host: ${{ secrets.DOCS_SSH_HOST }}
          remote_user: ${{ secrets.DOCS_SSH_USER }}
          remote_key: ${{ secrets.DOCS_SSH_KEY }}
```

## Step 3: Update Local Build Scripts

### build_docs.sh (Linux/macOS)

No changes required for the dev server — Hugo serves the MD output at `/viewer/net/index.md` automatically during development.

To test the ugly URL rename locally after a static build:

```bash
# Build static site
cd common
hugo
cd ..

# Rename MD files
common/move_md_to_ugly_urls.sh common/public/$PRODUCT
```

### build_docs.cmd (Windows)

No changes needed — the dev server works as-is. For static builds on Windows, use Git Bash or WSL to run `move_md_to_ugly_urls.sh`.

## URL Mapping

After deployment, Markdown versions are available at:

| HTML URL | Markdown URL |
|---|---|
| `/viewer/net/` | `/viewer/net.md` |
| `/viewer/net/installation/` | `/viewer/net/installation.md` |
| `/viewer/java/features-overview/` | `/viewer/java/features-overview.md` |

The product landing page (`/viewer/`) has its Markdown at `/viewer/index.md` when deployed from the product repo. When deployed from the central docs repo, it is available at `/viewer.md`.

## Applying to All Product Repos

The same changes apply to every product repo. Only the `PRODUCT` env variable differs:

| Repository | PRODUCT value |
|---|---|
| GroupDocs.Annotation-Docs | `annotation` |
| GroupDocs.Assembly-Docs | `assembly` |
| GroupDocs.Classification-Docs | `classification` |
| GroupDocs.Comparison-Docs | `comparison` |
| GroupDocs.Conversion-Docs | `conversion` |
| GroupDocs.Editor-Docs | `editor` |
| GroupDocs.Markdown-Docs | `markdown` |
| GroupDocs.Merger-Docs | `merger` |
| GroupDocs.Metadata-Docs | `metadata` |
| GroupDocs.Parser-Docs | `parser` |
| GroupDocs.Redaction-Docs | `redaction` |
| GroupDocs.Search-Docs | `search` |
| GroupDocs.Signature-Docs | `signature` |
| GroupDocs.Total-Docs | `total` |
| GroupDocs.Viewer-Docs | `viewer` |
| GroupDocs.Watermark-Docs | `watermark` |

## Checklist

For each product repository:

- [ ] Update `common` submodule to latest master
- [ ] Add "Move MD files to ugly URLs" step to `publish-prod.yml`
- [ ] Add "Move MD files to ugly URLs" step to `publish-qa.yml`
- [ ] Commit and push
- [ ] Run the QA workflow to verify MD files are deployed
- [ ] Run the prod workflow
