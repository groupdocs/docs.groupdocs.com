# Applying Config Consolidation to Product Repositories

This guide explains how to update individual product documentation repositories (e.g. `GroupDocs.Viewer-Docs`, `GroupDocs.Conversion-Docs`) after the central docs repo consolidated its Hugo configuration from multiple overlay files into a single `config.toml`.

## Background

The central `docs.groupdocs.com` repository (used as the `common` submodule) previously had separate config files:

| Old file | Purpose |
|---|---|
| `config-geekdoc.toml` | Main Hugo config |
| `ignore-total-config.toml` | Excluded Total product |
| `show-feedback-config.toml` | Enabled feedback forms |

These have been merged into a single `config.toml`. Hugo auto-discovers `config.toml` by default, so explicit `--config` flags are no longer needed.

## Changes Required

Each product repo needs **3 files updated** and a **submodule bump**:

### Step 1: Update the `common` submodule

```bash
git submodule update --init --recursive
cd common
git pull origin master
cd ..
```

Verify that `common/config.toml` exists and `common/config-geekdoc.toml` does **not**.

### Step 2: Update `build_docs.cmd`

```diff
 set PRODUCT=viewer

 call git submodule update --init --recursive
 call git submodule foreach git pull origin master
 xcopy java common\content\%PRODUCT%\java /s /e /Y /i
 xcopy net common\content\%PRODUCT%\net /s /e /Y /i
 xcopy nodejs-java common\content\%PRODUCT%\nodejs-java /s /e /Y /i
 xcopy python-net common\content\%PRODUCT%\python-net /s /e /Y /i
 xcopy _index.md common\content\%PRODUCT%
 cd common
-call hugo server --config config-geekdoc.toml,ignore-total-config.toml,show-feedback-config.toml
+call hugo server
```

### Step 3: Update `build_docs.sh`

```diff
 export PRODUCT=viewer

 git submodule update --init --recursive
 git submodule foreach git pull origin master
 mkdir -p common/content/$PRODUCT/java && cp -r java common/content/$PRODUCT/
 mkdir -p common/content/$PRODUCT/net && cp -r net common/content/$PRODUCT/
 mkdir -p common/content/$PRODUCT/nodejs-java && cp -r nodejs-java common/content/$PRODUCT/
 mkdir -p common/content/$PRODUCT/python-net && cp -r python-net common/content/$PRODUCT/
 cp -r _index.md common/content/$PRODUCT
 cd common
-hugo server --config config-geekdoc.toml,ignore-total-config.toml,show-feedback-config.toml
+hugo server
```

### Step 4: Update `.github/workflows/publish-prod.yml`

```diff
       - name: Run and build Hugo
         run: |
           mkdir -p common/content/${{ env.PRODUCT }}
           cp -r java common/content/${{ env.PRODUCT }}
           cp -r net common/content/${{ env.PRODUCT }}
           cp -r nodejs-java common/content/${{ env.PRODUCT }}
           cp -r python-net common/content/${{ env.PRODUCT }}
           cp _index.md common/content/${{ env.PRODUCT }}
-          hugo --source common --minify --config config-geekdoc.toml,ignore-total-config.toml,show-feedback-config.toml
+          hugo --source common --minify
```

### Step 5: Update `.github/workflows/publish-qa.yml`

```diff
       - name: Run and build Hugo
         run: |
           mkdir -p common/content/${{ env.PRODUCT }}
           cp -r java common/content/${{ env.PRODUCT }}
           cp -r net common/content/${{ env.PRODUCT }}
           cp -r nodejs-java common/content/${{ env.PRODUCT }}
           cp -r python-net common/content/${{ env.PRODUCT }}
           cp _index.md common/content/${{ env.PRODUCT }}
-          hugo --source common --minify --config config-geekdoc.toml,ignore-total-config.toml,show-feedback-config.toml --baseURL 'https://docs-qa.groupdocs.com/'
+          hugo --source common --minify --baseURL 'https://docs-qa.groupdocs.com/'
```

### Step 6: Commit and push

```bash
git add common build_docs.cmd build_docs.sh .github/workflows/
git commit -m "Update common submodule, use consolidated config.toml"
git push
```

## Applying to All Product Repos

The same changes apply to every product repo. Only the `PRODUCT` env variable and platform folders differ:

| Repository | PRODUCT value |
|---|---|
| GroupDocs.Annotation-Docs | `annotation` |
| GroupDocs.Assembly-Docs | `assembly` |
| GroupDocs.Classification-Docs | `classification` |
| GroupDocs.Comparison-Docs | `comparison` |
| GroupDocs.Conversion-Docs | `conversion` |
| GroupDocs.Editor-Docs | `editor` |
| GroupDocs.Markdown-Docs | `markdown` |
| GroupDocs.Merger-Docs | `merger` |
| GroupDocs.Metadata-Docs | `metadata` |
| GroupDocs.Parser-Docs | `parser` |
| GroupDocs.Redaction-Docs | `redaction` |
| GroupDocs.Search-Docs | `search` |
| GroupDocs.Signature-Docs | `signature` |
| GroupDocs.Total-Docs | `total` |
| GroupDocs.Viewer-Docs | `viewer` |
| GroupDocs.Watermark-Docs | `watermark` |

> [!NOTE]
> Some repos may not have all platform folders (e.g. `classification` only has `net`). The `cp -r` / `xcopy` commands for missing folders are harmless — they will simply be skipped or produce a benign warning.

## Checklist

For each product repository:

- [ ] Update `common` submodule to latest master
- [ ] Update `build_docs.cmd` — remove `--config` flag
- [ ] Update `build_docs.sh` — remove `--config` flag
- [ ] Update `publish-prod.yml` — remove `--config` flag
- [ ] Update `publish-qa.yml` — remove `--config` flag
- [ ] Commit and push
- [ ] Run the QA workflow to verify the build succeeds
- [ ] Run the prod workflow
