# GroupDocs Documentation

This repository contains the source files for the official GroupDocs documentation website built with [Hugo](https://gohugo.io/). The live site is at [https://docs.groupdocs.com/](https://docs.groupdocs.com/).

## About This Repository

This is the centralized documentation hub for all GroupDocs on-premise document processing SDKs. It hosts the home page, shared layouts, themes, and build infrastructure. Individual product documentation lives in separate repositories and is pulled in at build time.

### Documented Products

| Product | Description |
|---|---|
| **GroupDocs.Total** | Complete document manipulation suite |
| **GroupDocs.Annotation** | Document annotation and collaboration |
| **GroupDocs.Assembly** | Document generation automation |
| **GroupDocs.Classification** | Document and text categorization |
| **GroupDocs.Comparison** | Document comparison |
| **GroupDocs.Conversion** | Document conversion (7400+ conversion pairs) |
| **GroupDocs.Editor** | Document editing |
| **GroupDocs.Markdown** | Markdown export for PDF, Word, Excel, and more |
| **GroupDocs.Merger** | Document merging and page manipulation |
| **GroupDocs.Metadata** | Metadata management |
| **GroupDocs.Parser** | Document parsing and data extraction |
| **GroupDocs.Redaction** | Document redaction and content removal |
| **GroupDocs.Search** | Full-text search |
| **GroupDocs.Signature** | Electronic signatures |
| **GroupDocs.Viewer** | Document viewing (170+ file formats) |
| **GroupDocs.Watermark** | Watermark manipulation |

Each product supports multiple platforms (.NET, Java, Python, Node.js) where applicable. Product documentation is stored in separate repos following the pattern `groupdocs-{product}/GroupDocs.{Name}-Docs`.

## Technology Stack

- **Static Site Generator**: [Hugo Extended](https://gohugo.io/) 0.101.0
- **Theme**: hugo-geekdoc (customized)
- **Content Format**: Markdown with YAML front matter
- **Output Formats**: HTML + Markdown (every page is also available as `.md`)
- **CI/CD**: GitHub Actions with reusable workflows
- **Deployment**: SCP to target servers

## Repository Structure

```
.
├── .github/workflows/
│   ├── build-and-deploy.yml      # Reusable workflow (shared build & deploy logic)
│   ├── publish-prod.yml          # Production deployment (calls build-and-deploy)
│   ├── publish-qa.yml            # QA deployment (calls build-and-deploy)
│   └── publish-index-json.yml    # Search index rebuild
├── content/                      # Markdown content (home page; products added at build time)
├── data/                         # JSON data files (products, structured data)
├── layouts/
│   ├── _default/
│   │   ├── list.md               # Markdown output template for section pages
│   │   └── single.md             # Markdown output template for single pages
│   └── index.json                # Search index template
├── static/                       # Static assets (images, icons)
├── themes/
│   └── hugo-geekdoc/             # Customized Geekdoc theme
├── config-geekdoc.toml           # Main Hugo configuration
├── ignore-total-config.toml      # Config overlay that excludes Total product
├── show-feedback-config.toml     # Config overlay that enables feedback forms
├── build_docs.cmd                # Local dev server (Windows)
├── build_search_index.sh         # Local search index build script
└── move_md_to_ugly_urls.sh       # Post-build: rename index.md → page.md
```

## Local Development

### Prerequisites

- [Hugo Extended](https://gohugo.io/installation/) version 0.101.0
- Git

### Running the Dev Server

```bash
# Windows
build_docs.cmd

# Or manually on any platform
hugo server --config config-geekdoc.toml,show-feedback-config.toml
```

Open `http://localhost:1313/` to view the site. Hugo watches for file changes and reloads automatically.

### Building for Production

```bash
# 1. Build the site
hugo --minify --config config-geekdoc.toml,ignore-total-config.toml

# 2. Move Markdown output to ugly URLs (e.g. /viewer/net/index.md → /viewer/net.md)
./move_md_to_ugly_urls.sh
```

The generated site will be in the `public/` directory.

### Building the Search Index Locally

```bash
bash build_search_index.sh
```

This clones all product documentation repos, builds the full site, and generates `public/index.json`.

## Markdown Output Format

Every documentation page is available in both HTML and raw Markdown. Append `.md` to any page URL to get the Markdown version:

| HTML | Markdown |
|---|---|
| `https://docs.groupdocs.com/viewer/net/` | `https://docs.groupdocs.com/viewer/net.md` |
| `https://docs.groupdocs.com/viewer/net/installation/` | `https://docs.groupdocs.com/viewer/net/installation.md` |

This is implemented via:
- A custom `MD` output format defined in `config-geekdoc.toml`
- Templates in `layouts/_default/single.md` and `layouts/_default/list.md`
- A post-build script (`move_md_to_ugly_urls.sh`) that renames `index.md` files to ugly URLs

## Deployment

Deployment is triggered manually via GitHub Actions **workflow_dispatch**. Both publish workflows present a checkbox UI with three modes:

| Mode | How to trigger |
|---|---|
| **Home only** (default) | Leave all product checkboxes unchecked -- builds only this repository's content |
| **All products** | Check the "All products" checkbox -- clones and builds all 16 product repos |
| **Selected products** | Check individual product checkboxes -- clones only the selected repos |

### Workflows

| Workflow | File | Purpose |
|---|---|---|
| **publish-prod** | `publish-prod.yml` | Deploy to `https://docs.groupdocs.com/` |
| **publish-qa** | `publish-qa.yml` | Deploy to `https://docs-qa.groupdocs.com/` |
| **Build and deploy** | `build-and-deploy.yml` | Reusable workflow with shared build logic (not triggered directly) |
| **publish-index-json** | `publish-index-json.yml` | Rebuild and deploy the full-text search index (`index.json`) |

The publish-prod and publish-qa workflows are thin wrappers that define the UI inputs and call `build-and-deploy.yml` with environment-specific settings (base URL, deploy target).

### Required Secrets

| Secret | Description |
|---|---|
| `DOCS_SSH_HOST` | Deployment server hostname |
| `DOCS_SSH_DIR` | Production deployment directory |
| `DOCS_QA_SSH_DIR` | QA deployment directory |
| `DOCS_SSH_USER` | SSH username |
| `DOCS_SSH_KEY` | SSH private key |

## Contributing

This repository is maintained by the GroupDocs documentation team. If you find issues or have suggestions:

1. Check if an issue already exists
2. Create a new issue describing the problem or enhancement
3. For significant changes, submit a pull request

## License

Licensed under the [MIT License](LICENSE).
