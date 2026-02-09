#!/bin/bash
set -e

# Test script for building the full-text search index locally.
# Mirrors the build-search-index.yml workflow (except deploy step).
#
# Prerequisites: Hugo v0.101.0+ extended must be installed.
# Usage: bash build_search_index.sh

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

echo "=== Checking Hugo ==="
if ! command -v hugo &> /dev/null; then
  echo "Error: Hugo is not installed. Install hugo_extended v0.101.0+"
  exit 1
fi
hugo version

echo ""
echo "=== Downloading documentation repositories ==="

# Each entry is "product_key:ProductName"
# Repo URL pattern: https://github.com/groupdocs-{key}/GroupDocs.{Name}-Docs
PRODUCTS="
  annotation:Annotation
  assembly:Assembly
  classification:Classification
  comparison:Comparison
  conversion:Conversion
  editor:Editor
  markdown:Markdown
  merger:Merger
  metadata:Metadata
  parser:Parser
  redaction:Redaction
  search:Search
  signature:Signature
  total:Total
  viewer:Viewer
  watermark:Watermark
"

for entry in $PRODUCTS; do
  product="${entry%%:*}"
  product_name="${entry##*:}"
  repo_url="https://github.com/groupdocs-${product}/GroupDocs.${product_name}-Docs.git"

  echo ""
  echo "--- Downloading ${product} documentation ---"
  echo "Repository: groupdocs-${product}/GroupDocs.${product_name}-Docs"

  git clone --depth 1 "${repo_url}" "temp-${product}" 2>&1 || {
    echo "WARNING: Failed to clone GroupDocs.${product_name}-Docs, skipping."
    continue
  }

  # Create content directory for this product
  mkdir -p "content/${product}"

  # Copy product family index page
  if [ -f "temp-${product}/_index.md" ]; then
    cp "temp-${product}/_index.md" "content/${product}/"
    echo "Copied _index.md"
  fi

  # Copy platform-specific documentation folders
  for platform in net java nodejs-java python-net; do
    if [ -d "temp-${product}/${platform}" ]; then
      cp -r "temp-${product}/${platform}" "content/${product}/"
      echo "Copied ${platform}/ folder"
    fi
  done

  # Cleanup cloned repo
  rm -rf "temp-${product}"
done

echo ""
echo "=== Content structure ==="
ls -la content/

echo ""
echo "=== Building site ==="
hugo --config config-geekdoc.toml

echo ""
echo "=== Verifying index.json ==="
if [ ! -f "./public/index.json" ]; then
  echo "ERROR: index.json was not generated"
  exit 1
fi

echo "index.json size: $(wc -c < ./public/index.json) bytes"
echo "Number of entries: $(grep -c '"id"' ./public/index.json || echo 0)"
echo ""
echo "Output: public/index.json"
echo "Done."
