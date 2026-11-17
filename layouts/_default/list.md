{{- /* Markdown output template for section/list pages */ -}}
{{- if .Params.family -}}
{{- /* Product family landing page: Markdown built from the same `family:` front matter as the HTML
       (themes/hugo-geekdoc/layouts/partials/family-page.html). Site links -> absolute .md twins. */ -}}
{{- $base := strings.TrimRight "/" .Site.BaseURL -}}
{{- $key := index (split .RelPermalink "/") 1 -}}
{{- $name := replace .Title " Product Family" "" -}}
{{- range where site.Data.products.product "key" $key }}{{ $name = replace .title " Product Family" "" }}{{ end -}}
{{- $longs := dict "net" "for .NET" "java" "for Java" "nodejs-java" "for Node.js via Java" "python-net" "for Python via .NET" "mcp" "MCP server" -}}
# {{ .Title }}
{{ with .Params.family.lead | default .Description }}
{{ . }}
{{ end }}
{{- range .Params.family.platforms }}
{{- $p := . }}

## {{ $name }} {{ index $longs .key }}
{{ with site.GetPage (printf "/%s/%s" $key .key) }}
Documentation: {{ $base }}{{ strings.TrimRight "/" .RelPermalink }}.md
{{ end -}}
{{- with .reference }}
API reference: {{ . }}
{{- end }}
{{- with .releases }}
Release notes: {{ . }}
{{- end }}
{{- range .sections }}

### {{ .title }}
{{ with .description }}
{{ . }}
{{ end }}
{{- range .links }}
{{- $u := partial "utils/family-link" . }}
{{- if and (strings.HasPrefix $u "/") (strings.HasSuffix $u "/") }}{{ $u = printf "%s%s.md" $base (strings.TrimRight "/" $u) }}{{ else if strings.HasPrefix $u "/" }}{{ $u = printf "%s%s" $base $u }}{{ end }}
- [{{ .title }}]({{ $u }})
{{- end }}
{{- end }}
{{- with .tools }}

### Tools & integrations
{{ range . }}
- [{{ .title }}]({{ .url }}){{ with .package }} (`{{ . }}`){{ end }}{{ with .description }}: {{ . }}{{ end }}{{ with .install }} Install: `{{ . }}`{{ end }}
{{- end }}
{{- end }}
{{- end }}
{{- with .Params.family.demos }}

## Live demos
{{ range . }}
- [{{ .title }}]({{ .url }}){{ with .description }}: {{ . }}{{ end }}
{{- end }}
{{- end }}
{{ else -}}
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
{{- end }}
