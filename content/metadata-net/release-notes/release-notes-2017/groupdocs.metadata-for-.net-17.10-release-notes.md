---
id: groupdocs-metadata-for-net-17-10-release-notes
url: metadata/net/groupdocs-metadata-for-net-17-10-release-notes
title: GroupDocs.Metadata for .NET 17.10 Release Notes
weight: 5
description: ""
keywords: 
productName: GroupDocs.Metadata for .NET
hideChildren: False
---
{{< alert style="info" >}}This page contains release notes for GroupDocs.Metadata for .NET 17.10.{{< /alert >}}

## Major Features

There are 2 new features and 3 fixes in this regular monthly release. The most notable are:

*   Ability to read metadata of ZIP format
*   Ability to read metadata of MOV format
*   File Size increased after Metadata removal
*   GPS related data is removed after we try to remove the metadata of the JPG file
*   Unable to update XMPBasic metadata when updating PdfMetadata at the same time

## Full List of Issues Covering all Changes in this Release

<table class="confluenceTable"><tbody><tr style="font-size: 10pt; line-height: 13pt; background-color: initial; background-image: none;"><td style="font-size: 10pt; line-height: 13pt; background-color: initial; background-image: none; padding-top: 5px; padding-right: 5px; padding-bottom: 5px; padding-left: 5px; min-width: 0.6em;" class="confluenceTd"><span style="color: rgb(0, 0, 0);">Key</span></td><td style="font-size: 10pt; line-height: 13pt; background-color: initial; background-image: none; padding-top: 5px; padding-right: 5px; padding-bottom: 5px; padding-left: 5px; min-width: 0.6em;" class="confluenceTd"><span style="color: rgb(0, 0, 0);">Summary</span></td><td style="font-size: 10pt; line-height: 13pt; background-color: initial; background-image: none; padding-top: 5px; padding-right: 5px; padding-bottom: 5px; padding-left: 5px; min-width: 0.6em;" class="confluenceTd"><span style="color: rgb(0, 0, 0);">Category</span></td></tr><tr style="font-size: 10pt; line-height: 13pt; background-color: initial; background-image: none;"><td style="font-size: 10pt; line-height: 13pt; background-color: initial; background-image: none; padding-top: 5px; padding-right: 5px; padding-bottom: 5px; padding-left: 5px; min-width: 0.6em;" class="confluenceTd"><span style="color: rgb(0, 0, 0);">METADATANET-1927</span>&nbsp;</td><td style="font-size: 10pt; line-height: 13pt; background-color: initial; background-image: none; padding-top: 5px; padding-right: 5px; padding-bottom: 5px; padding-left: 5px; min-width: 0.6em;" class="confluenceTd"><span style="color: rgb(0, 0, 0);">Ability to read metadata of ZIP format</span>&nbsp;</td><td style="font-size: 10pt; line-height: 13pt; background-color: initial; background-image: none; padding-top: 5px; padding-right: 5px; padding-bottom: 5px; padding-left: 5px; min-width: 0.6em;" class="confluenceTd"><span style="color: rgb(0, 0, 0);">New Feature</span>&nbsp;</td></tr><tr style="font-size: 10pt; line-height: 13pt; background-color: initial; background-image: none;"><td style="font-size: 10pt; line-height: 13pt; background-color: initial; background-image: none; padding-top: 5px; padding-right: 5px; padding-bottom: 5px; padding-left: 5px; min-width: 0.6em;" class="confluenceTd"><span style="color: rgb(0, 0, 0);">METADATANET-1567</span></td><td style="font-size: 10pt; line-height: 13pt; background-color: initial; background-image: none; padding-top: 5px; padding-right: 5px; padding-bottom: 5px; padding-left: 5px; min-width: 0.6em;" class="confluenceTd"><span style="color: rgb(0, 0, 0);">Implement ability to detect MOV video format</span>&nbsp;</td><td style="font-size: 10pt; line-height: 13pt; background-color: initial; background-image: none; padding-top: 5px; padding-right: 5px; padding-bottom: 5px; padding-left: 5px; min-width: 0.6em;" class="confluenceTd"><span style="color: rgb(0, 0, 0);">New Feature</span></td></tr><tr style="font-size: 10pt; line-height: 13pt; background-color: initial; background-image: none;"><td style="font-size: 10pt; line-height: 13pt; background-color: initial; background-image: none; padding-top: 5px; padding-right: 5px; padding-bottom: 5px; padding-left: 5px; min-width: 0.6em;" class="confluenceTd"><span style="color: rgb(0, 0, 0);">METADATANET-1924</span></td><td style="font-size: 10pt; line-height: 13pt; background-color: initial; background-image: none; padding-top: 5px; padding-right: 5px; padding-bottom: 5px; padding-left: 5px; min-width: 0.6em;" class="confluenceTd"><span style="color: rgb(0, 0, 0);">File Size increased after Metadata removal</span>&nbsp;</td><td style="font-size: 10pt; line-height: 13pt; background-color: initial; background-image: none; padding-top: 5px; padding-right: 5px; padding-bottom: 5px; padding-left: 5px; min-width: 0.6em;" class="confluenceTd"><span style="color: rgb(0, 0, 0);">Bug</span></td></tr><tr style="font-size: 10pt; line-height: 13pt; background-color: initial; background-image: none;"><td style="font-size: 10pt; line-height: 13pt; background-color: initial; background-image: none; padding-top: 5px; padding-right: 5px; padding-bottom: 5px; padding-left: 5px; min-width: 0.6em;" class="confluenceTd"><span style="color: rgb(0, 0, 0);">METADATANET-1935</span></td><td style="font-size: 10pt; line-height: 13pt; background-color: initial; background-image: none; padding-top: 5px; padding-right: 5px; padding-bottom: 5px; padding-left: 5px; min-width: 0.6em;" class="confluenceTd"><span style="color: rgb(0, 0, 0);">JPG - the GPS related data is removed after we try to remove the metadata of the JPG file</span>&nbsp;</td><td style="font-size: 10pt; line-height: 13pt; background-color: initial; background-image: none; padding-top: 5px; padding-right: 5px; padding-bottom: 5px; padding-left: 5px; min-width: 0.6em;" class="confluenceTd"><span style="color: rgb(0, 0, 0);">Bug</span></td></tr><tr style="font-size: 10pt; line-height: 13pt; background-color: initial; background-image: none;"><td style="font-size: 10pt; line-height: 13pt; background-color: initial; background-image: none; padding-top: 5px; padding-right: 5px; padding-bottom: 5px; padding-left: 5px; min-width: 0.6em;" class="confluenceTd"><span style="color: rgb(0, 0, 0);">METADATANET-1940</span></td><td style="font-size: 10pt; line-height: 13pt; background-color: initial; background-image: none; padding-top: 5px; padding-right: 5px; padding-bottom: 5px; padding-left: 5px; min-width: 0.6em;" class="confluenceTd"><span style="color: rgb(0, 0, 0);">Unable to update XMPBasic metadata when updating PdfMetadata at the same time</span></td><td style="font-size: 10pt; line-height: 13pt; background-color: initial; background-image: none; padding-top: 5px; padding-right: 5px; padding-bottom: 5px; padding-left: 5px; min-width: 0.6em;" class="confluenceTd"><span style="color: rgb(0, 0, 0);">Bug</span></td></tr></tbody></table>

## Public API and Backward Incompatible Changes

{{< alert style="info" >}}This section lists public API changes that were introduced in GroupDocs.Metadata for .NET 17.10. It includes not only new and obsoleted public methods, but also a description of any changes in the behavior behind the scenes in GroupDocs.Metadata which may affect existing code. Any behavior introduced that could be seen as a regression and modifies existing behavior is especially important and is documented here.{{< /alert >}}

### Ability to Detect MOV Video Format

##### Description

Implement ability to detect MOV video format

##### Public API changes

Added **MovFormat** class into namespace **GroupDocs.Metadata.Formats.Video**

**C#**

```csharp
MovFormat movFormat = new MovFormat(file);
```

### Ability to Detect ZIP Format

##### Description

Implement ability to read metadata of ZIP format

##### Public API changes

Added **ZipFormat** class into namespace **GroupDocs.Metadata.Formats.Archive**

##### Usecases

This example demonstrates how to read metadata of ZIP format

**C#**

```csharp
 
string copy = GetFileCopy(path);

ZipFormat movFormat = new ZipFormat(copy);

ZipMetadata info = movFormat.ZipInfo;
 
```
