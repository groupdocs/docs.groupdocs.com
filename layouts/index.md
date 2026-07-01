{{- /* Markdown output template for the home page */ -}}
# {{ partial "utils/title" . }}
{{ with .Description }}
{{ . }}
{{ end }}
{{ partial "md/abs-content.txt" . }}
{{- /* The HTML homepage (layouts/index.html) renders these sections from data/products.toml
       and hand-curated links; mirror them here so /index.md stays a complete page. */ -}}
{{- with .Site.Data.products }}
## Product Families
{{ range sort .product "weight" }}
- [{{ .title }}]({{ .url | strings.TrimPrefix "/" | absURL | strings.TrimRight "/" }}.md): {{ .description }}
{{- end }}

## Agents and LLMs

GroupDocs products are built to plug straight into AI agents, LLMs, and automated document pipelines.

- [MCP Server]({{ "mcp" | absURL }}): Let your AI assistant query GroupDocs documentation on demand through the Model Context Protocol — fewer tokens, more accurate answers.
- AGENTS.md: Every GroupDocs Python package ships an AGENTS.md file, so AI coding assistants like Claude, Cursor, and Copilot discover the API automatically.
- [llms.txt]({{ "llms.txt" | absURL }}) / [llms-full.txt]({{ "llms-full.txt" | absURL }}): The whole documentation set in machine-readable form, available site-wide and per product.

## Developer Resources

- [API Reference](https://reference.groupdocs.com/)
- [Code Samples](https://groupdocs.github.io/)
- [Free Consulting](https://forum.groupdocs.com/c/free-consulting/37)
- [Free Support Forum](https://forum.groupdocs.com/)
- [Paid Support Helpdesk](https://helpdesk.groupdocs.com/)
- [Online Apps](https://products.groupdocs.app/)
{{- end }}
