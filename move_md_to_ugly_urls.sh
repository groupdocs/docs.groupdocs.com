#!/bin/bash
# Move MD files from pretty URLs to ugly URLs.
# Hugo generates Markdown output as public/{path}/index.md (pretty URLs).
# This script renames them to public/{path}.md (ugly URLs) so that
# /viewer/net.md is served instead of /viewer/net/index.md.
#
# Usage:
#   ./move_md_to_ugly_urls.sh [output_dir]
#
# Arguments:
#   output_dir  Hugo output directory (default: "public")

set -euo pipefail

output_dir="${1:-public}"

if [ ! -d "$output_dir" ]; then
  echo "Error: directory '$output_dir' does not exist." >&2
  echo "Run 'hugo --config config-geekdoc.toml' first to generate the site." >&2
  exit 1
fi

count=0
find "$output_dir" -name "index.md" -mindepth 2 | while read -r file; do
  dir=$(dirname "$file")
  parent=$(dirname "$dir")
  name=$(basename "$dir")
  mv "$file" "$parent/$name.md"
  count=$((count + 1))
done

echo "Done. Moved index.md files to ugly URLs in '$output_dir'."
