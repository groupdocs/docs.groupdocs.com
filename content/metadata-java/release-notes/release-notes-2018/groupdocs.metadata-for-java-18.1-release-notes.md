---
id: groupdocs-metadata-for-java-18-1-release-notes
url: metadata/java/groupdocs-metadata-for-java-18-1-release-notes
title: GroupDocs.Metadata for Java 18.1 Release Notes
weight: 10
description: ""
keywords: 
productName: GroupDocs.Metadata for Java
hideChildren: False
---
{{< alert style="info" >}}This page contains release notes for GroupDocs.Metadata for Java 18.1.{{< /alert >}}

## Major Features

There are 3 new features in this regular monthly release. The most notable are:

*   Implement ability to read metadata of EPUB format
*   Implement ability to detect EPUB e-book format
*   Implement ability to read DublinCore metadata in EPUB format

## All Changes

<table class="confluenceTable"><tbody><tr><td class="confluenceTd">Key</td><td class="confluenceTd">Summary</td><td class="confluenceTd">Category</td></tr><tr><td class="confluenceTd"><span style="color: rgb(0, 0, 0);">METADATANET-717</span></td><td class="confluenceTd"><span style="color: rgb(0, 0, 0);">Implement ability to read metadata of EPUB format</span></td><td class="confluenceTd">New Feature</td></tr><tr><td class="confluenceTd"><span style="color: rgb(0, 0, 0);">METADATANET-2133&nbsp;</span>&nbsp;</td><td class="confluenceTd"><span style="color: rgb(0, 0, 0);">Implement ability to detect EPUB e-book format</span></td><td class="confluenceTd">New Feature&nbsp;</td></tr><tr><td colspan="1" class="confluenceTd"><span style="color: rgb(0, 0, 0);">METADATANET-2134</span></td><td colspan="1" class="confluenceTd"><span style="color: rgb(0, 0, 0);">Implement ability to read DublinCore metadata in EPUB format</span></td><td colspan="1" class="confluenceTd">New Feature&nbsp;</td></tr></tbody></table>

## Public API and Backward Incompatible Changes

{{< alert style="info" >}}This section lists public API changes that were introduced in GroupDocs.Metadata for Java 18.1. It includes not only new and obsoleted public methods, but also a description of any changes in the behavior behind the scenes in GroupDocs.Metadata which may affect existing code. Any behavior introduced that could be seen as a regression and modifies existing behavior is especially important and is documented here.{{< /alert >}}

### Implement ability to read metadata of EPUB format

##### Description

Implement ability to read metadata of EPUB e-book format

##### Public API changes

Added **EpubFormat** class into namespace **GroupDocs.Metadata.Formats.Ebook**  
Added **EpubMetadata** class into namespace **GroupDocs.Metadata.Formats.Ebook**

##### Usecases

This example demonstrates how to read metadata of EPUB e-book format

**Java**

```csharp
// path to the EPUB file
String file = "C:\\\\Jack_London_Biography.epub";

// open EPUB file
EpubFormat epub = new EpubFormat(file);

// read EPUB metadata
EpubMetadata metadata = epub.getEpubMetadata();

// get keys
String[] keys = metadata.getKeys();

for(String key: keys)
{
 // get next metadata property
 MetadataProperty property = metadata.readByStringKey(key);

 // and print it
System.out.println(property);
}
```

### Implement ability to detect EPUB e-book format

##### Description

Implement ability to detect EPUB e-book format

##### Public API changes

Added **EpubFormat** class into namespace **GroupDocs.Metadata.Formats.Ebook**

##### Usecases

This example demonstrates how to detect EPUB e-book format

**Java**

```csharp
// path to the file
String file = "C:\\\\download files\\\\wells-anticipations.epub";

// init FileFormatChecker
FileFormatChecker formatChecker = new FileFormatChecker(file);

// validate format
boolean isEpub = formatChecker.verifyFormat(DocumentType.Epub);

// and print appropriate message if success
if(isEpub)
{
 System.out.println("Is EPUB");
}
```

### Implement ability to read DublinCore metadata in EPUB format

##### Description

Implement ability to read DublinCore metadata of EPUB e-book format

##### Public API changes

Added **DublinCoreMetadata** class into namespace **GroupDocs.Metadata**

##### Usecases

This example demonstrates how to read DublinCore metadata of EPUB e-book format

**Java**

```csharp
// path to the EPUB file
String file = "C:\\\\download files\\\\wells-anticipations.epub";

// open EPUB file
EpubFormat epub = new EpubFormat(file);

// read DublinCore metadata
DublinCoreMetadata dublinCore = epub.getDublinCore();

// get dc title
System.out.printf("Title = %s\n", dublinCore.getTitle());

// get creator
System.out.printf("Creator = %s\n", dublinCore.getCreator());

// get dc publisher
System.out.printf("Publisher = %s\n", dublinCore.getPublisher());

// get dc description
System.out.printf("Description = %s\n", dublinCore.getDescription());

// get language
System.out.printf("Language = %s\n", dublinCore.getLanguage());

// get format
System.out.printf("Format = %s\n", dublinCore.getFormat());
```
