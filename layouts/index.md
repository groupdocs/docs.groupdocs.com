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

## MCP servers for AI agents

These products ship an MCP server that lets AI agents such as Claude, Cursor, and Copilot process documents locally, over the Model Context Protocol:
{{ range sort .product "weight" }}
{{- if in .platforms "mcp" }}
- [{{ replace .title " Product Family" "" }} MCP Server]({{ printf "%s/mcp" (.url | strings.TrimPrefix "/") | absURL | strings.TrimRight "/" }}.md)
{{- end }}
{{- end }}

## For AI agents

Machine-readable indexes of the entire documentation, designed for agents and retrieval.

- [Docs MCP server]({{ "mcp" | absURL }}): Query this documentation from your AI assistant over the Model Context Protocol. (Not to be confused with the product MCP servers above, which process your documents.)
- [llms.txt]({{ "llms.txt" | absURL }}): Curated index of every product and platform.
- [llms-full.txt]({{ "llms-full.txt" | absURL }}): The full documentation in a single file.
- Markdown: append `.md` to any page URL — e.g. {{ "annotation.md" | absURL }}

## Developer Resources

- [API References](https://reference.groupdocs.com/)
- [Releases & Downloads](https://releases.groupdocs.com/)
- [Product Site](https://products.groupdocs.com/)
- [Blog](https://blog.groupdocs.com/)
- [Support Forum](https://forum.groupdocs.com/)
{{- end }}
