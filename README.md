# GroupDocs Documentation

This repository contains the source files for generating the official GroupDocs documentation website using [Hugo](https://gohugo.io/) static site generator. The live documentation is available at [https://docs.groupdocs.com/](https://docs.groupdocs.com/).

## About This Repository

This is a centralized documentation repository for all GroupDocs on-premise document processing SDKs. It provides developer documentation, guides, and API references for the entire GroupDocs product family.

### Documented Products

This repository contains documentation for the following GroupDocs product families:

- **GroupDocs.Total** - Complete document manipulation suite
- **GroupDocs.Conversion** - Document conversion SDK (7400+ conversion pairs)
- **GroupDocs.Viewer** - Document viewer SDK (100+ file formats)
- **GroupDocs.Markdown** - Markdown export SDK
- **GroupDocs.Comparison** - Document comparison SDK
- **GroupDocs.Watermark** - Watermark manipulation SDK
- **GroupDocs.Metadata** - Metadata management SDK
- **GroupDocs.Parser** - Document parsing and data extraction SDK
- **GroupDocs.Merger** - Document merging and page manipulation SDK
- **GroupDocs.Assembly** - Document generation automation SDK
- **GroupDocs.Redaction** - Document redaction and content removal SDK
- **GroupDocs.Signature** - Electronic signature SDK
- **GroupDocs.Search** - Full-text search SDK
- **GroupDocs.Editor** - Document editing SDK
- **GroupDocs.Annotation** - Document annotation and collaboration SDK
- **GroupDocs.Classification** - Document and text categorization SDK

Each product family includes documentation for multiple platforms (.NET, Java, Python, Node.js) where applicable.

## Technology Stack

- **Static Site Generator**: [Hugo](https://gohugo.io/) (Extended version 0.101.0+)
- **Theme**: [hugo-geekdoc](https://github.com/xenonstack/geekdoc) (customized for GroupDocs)
- **Content Format**: Markdown files with front matter
- **Build System**: GitHub Actions workflows for automated builds and deployment

## Repository Structure

```
.
├── content/              # Markdown documentation source files
├── data/                 # JSON data files for products and structured data
├── static/              # Static assets (images, sitemaps, etc.)
├── themes/              # Hugo themes (hugo-geekdoc, ace-documentation)
├── config-geekdoc.toml  # Main Hugo configuration (production)
├── config.toml          # Alternative Hugo configuration
├── build_docs.cmd       # Local development build script
└── .github/workflows/   # GitHub Actions CI/CD workflows
```

## Local Development

### Prerequisites

- [Hugo Extended](https://gohugo.io/installation/) version 0.101.0
- Git

### Building Locally

1. Clone this repository:
   ```bash
   git clone https://github.com/groupdocs/docs.git
   cd docs
   ```

2. Run the local development server:
   ```bash
   # Windows
   build_docs.cmd
   
   # Or manually
   hugo server --config config-geekdoc.toml,show-feedback-config.toml
   ```

3. Open your browser to `http://localhost:1313/` to view the documentation site.

### Building for Production

To build the static site for production:

```bash
hugo --minify --config config-geekdoc.toml,ignore-total-config.toml
```

The generated site will be in the `public/` directory.

## Deployment

This repository uses GitHub Actions workflows for automated deployment:

- **QA Environment**: Manual workflow dispatch to deploy to `https://docs-qa.groupdocs.com/`
- **Production Environment**: Manual workflow dispatch to deploy to `https://docs.groupdocs.com/`

Both workflows:
1. Checkout the repository
2. Install Hugo Extended
3. Build the site with minification
4. Deploy artifacts via SCP to the target server

## Contributing

This repository is primarily maintained by the GroupDocs documentation team. If you find documentation issues or have suggestions:

1. Check if an issue already exists
2. Create a new issue describing the problem or enhancement
3. For significant changes, consider submitting a pull request

## Repository Purpose

The files in this repository are used to:

- Build and maintain the official GroupDocs documentation website
- Ensure documentation stays up-to-date with product releases
- Provide a consistent structure for automated builds and publication
- Support multiple product families and platforms from a single codebase

## License

This repository contains documentation source files and is licensed under the [MIT License](LICENSE).
