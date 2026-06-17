{{- /* Markdown output template for single pages */ -}}
# {{ partial "utils/title" . }}
{{ with .Description }}
{{ . }}
{{ end }}
{{ partial "md/abs-content.txt" . }}
