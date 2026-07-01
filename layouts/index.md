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

## For AI agents

Machine-readable indexes of the entire documentation, designed for agents and retrieval.

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
