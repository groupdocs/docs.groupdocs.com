{{- /* Markdown output template for section/list pages */ -}}
# {{ partial "utils/title" . }}
{{ with .Description }}
{{ . }}
{{ end }}
{{ partial "md/abs-content.txt" . }}
{{ if and (not .Params.hideChildren) (.Pages) }}
## Contents
{{ range .Pages.ByWeight }}
- [{{ partial "utils/title" . }}]({{ strings.TrimRight "/" .Permalink }}.md)
{{- end }}
{{ end }}
