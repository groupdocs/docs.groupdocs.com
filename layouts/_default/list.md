{{- /* Markdown output template for section/list pages */ -}}
# {{ partial "utils/title" . }}
{{ with .Description }}
{{ . }}
{{ end }}
{{ .RawContent }}
{{ if and (not .Params.hideChildren) (.Pages) }}
## Contents
{{ range .Pages.ByWeight }}
- [{{ partial "utils/title" . }}]({{ .RelPermalink }})
{{- end }}
{{ end }}
