---
id: groupdocs-metadata-for-net-18-1-release-notes
url: metadata/net/groupdocs-metadata-for-net-18-1-release-notes
title: GroupDocs.Metadata for .NET 18.1 Release Notes
weight: 11
description: ""
keywords: 
productName: GroupDocs.Metadata for .NET
hideChildren: False
---
{{< alert style="info" >}}This page contains release notes for GroupDocs.Metadata for .NET 18.1.{{< /alert >}}

## Major Features

There are 3 new features in this regular monthly release. The most notable are:

*   Implement ability to read metadata of EPUB format
*   Implement ability to detect EPUB e-book format
*   Implement ability to read DublinCore metadata in EPUB format

## All Changes

<table class="confluenceTable"><tbody><tr><td class="confluenceTd">Key</td><td class="confluenceTd">Summary</td><td class="confluenceTd">Category</td></tr><tr><td class="confluenceTd"><span style="color: rgb(0, 0, 0);">METADATANET-717</span></td><td class="confluenceTd"><span style="color: rgb(0, 0, 0);">Implement ability to read metadata of EPUB format</span></td><td class="confluenceTd">New Feature</td></tr><tr><td class="confluenceTd"><span style="color: rgb(0, 0, 0);">METADATANET-2133&nbsp;</span>&nbsp;</td><td class="confluenceTd"><span style="color: rgb(0, 0, 0);">Implement ability to detect EPUB e-book format</span></td><td class="confluenceTd">New Feature&nbsp;</td></tr><tr><td colspan="1" class="confluenceTd"><span style="color: rgb(0, 0, 0);">METADATANET-2134</span></td><td colspan="1" class="confluenceTd"><span style="color: rgb(0, 0, 0);">Implement ability to read DublinCore metadata in EPUB format</span></td><td colspan="1" class="confluenceTd"><span>New Feature&nbsp;</span></td></tr></tbody></table>

## Public API and Backward Incompatible Changes

{{< alert style="info" >}}This section lists public API changes that were introduced in GroupDocs.Metadata for .NET 18.1. It includes not only new and obsoleted public methods, but also a description of any changes in the behavior behind the scenes in GroupDocs.Metadata which may affect existing code. Any behavior introduced that could be seen as a regression and modifies existing behavior is especially important and is documented here.{{< /alert >}}

#### Implement ability to read metadata of EPUB format

##### Description

Implement ability to read metadata of EPUB e-book format

##### Public API changes

Added **EpubFormat** class into namespace **GroupDocs.Metadata.Formats.Ebook**  
Added **EpubMetadata** class into namespace **GroupDocs.Metadata.Formats.Ebook**

##### Usecases

This example demonstrates how to read metadata of EPUB e-book format

**C#**

```csharp
// path to the EPUB file
const string file = @"C:\Jack_London_Biography.epub";

// open EPUB file
EpubFormat epub = new EpubFormat(file);

// read EPUB metadata
EpubMetadata metadata = epub.GetEpubMetadata();

// get keys
string[] keys = metadata.Keys;

foreach (string key in keys)
{
 // get next metadata property
 MetadataProperty property = metadata[key];

 // and print it
 Console.WriteLine(property);
}
```

#### Implement ability to detect EPUB e-book format

##### Description

Implement ability to detect EPUB e-book format

##### Public API changes

Added **EpubFormat** class into namespace **GroupDocs.Metadata.Formats.Ebook**

##### Usecases

This example demonstrates how to detect EPUB e-book format

**C#**

```csharp
// just try to open
EpubFormat epubFormat = new EpubFormat(file);

// or
//using FormatFactory
EpubFormat epubFormat = (EpubFormat) FormatFactory.RecognizeFormat(file);
```

### Implement ability to read DublinCore metadata in EPUB format

##### Description

Implement ability to read DublinCore metadata of EPUB e-book format

##### Public API changes

Added **DublinCoreMetadata** class into namespace **GroupDocs.Metadata**

##### Usecases

This example demonstrates how to read DublinCore metadata of EPUB e-book format

**C#**

```csharp
// path to the EPUB file
const string file = @"C:\Jack_London_Biography.epub";

// open EPUB file
EpubFormat epub = new EpubFormat(file);

// read dublin-core metadata
DublinCoreMetadata dublinCore = epub.GetDublinCore();

// get creator
string creator = dublinCore.Creator;

// get publisher
string publisher = dublinCore.Publisher;

// get contributor
string contributor = dublinCore.Contributor;
```
