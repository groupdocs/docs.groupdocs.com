---
id: groupdocs-metadata-for-net-17-05-release-notes
url: metadata/net/groupdocs-metadata-for-net-17-05-release-notes
title: GroupDocs.Metadata for .NET 17.05 Release Notes
weight: 9
description: ""
keywords: 
productName: GroupDocs.Metadata for .NET
hideChildren: False
---
{{< alert style="info" >}}This page contains release notes for GroupDocs.Metadata for .NET 17.05.0{{< /alert >}}

## Major Features

There are 2 new features in this regular monthly release. The most notable are:

*   Ability to read all revisions in Word format
*   Ability to accept or reject revisions in Word format

## All Changes

<table class="confluenceTable"><tbody><tr><td class="confluenceTd"><p><span style="color: rgb(0, 0, 0);">Key</span></p></td><td class="confluenceTd"><p><span style="color: rgb(0, 0, 0);">Summary</span></p></td><td class="confluenceTd"><p><span style="color: rgb(0, 0, 0);">Category</span></p></td></tr><tr><td class="confluenceTd"><p><span style="color: rgb(0, 0, 0);">METADATANET-1570</span></p></td><td class="confluenceTd"><p><span style="color: rgb(0, 0, 0);">Ability to read all revisions in Word format</span></p></td><td class="confluenceTd"><p><span style="color: rgb(0, 0, 0);">New Feature</span></p></td></tr><tr><td colspan="1" class="confluenceTd"><span style="color: rgb(0, 0, 0);">METADATANET-1722</span></td><td colspan="1" class="confluenceTd">Ability to accept or reject revisions in Word format</td><td colspan="1" class="confluenceTd"><span style="color: rgb(0, 0, 0);">New Feature</span></td></tr></tbody></table>

## Public API and Backward Incompatible Changes

{{< alert style="info" >}}This section lists public API changes that were introduced in GroupDocs.Metadata for .NET 17.05.0 It includes not only new and obsoleted public methods, but also a description of any changes in the behavior behind the scenes in GroupDocs.Metadata which may affect existing code. Any behavior introduced that could be seen as a regression and modifies existing behavior is especially important and is documented here.{{< /alert >}}

#### Ability to read all revisions in Word format

This feature allows to read all track changes(revisions) in Word document.

##### Public API changes

Added **RevisionType** enum into namespace **GroupDocs.Metadata.Formats.Document**  
Added **Revision** class into namespace **GroupDocs.Metadata.Formats.Document**  
Added **RevisionCollection** class into namespace **GroupDocs.Metadata.Formats.Document**

Given below example demonstrates how to read track changes (revisions) in Word document

**C#**

```csharp
// path to the MS Word file
string path = @"c:\download files\CV.docx";

// initialize DocFormat
DocFormat docFormat = new DocFormat(path);

// get revisions
RevisionCollection revisionCollection = docFormat.Revisions;

// get revisions count
Console.WriteLine("Revisions: {0}", revisionCollection.Count);

foreach (Revision revision in revisionCollection)
{
  // display revision type
  Console.WriteLine("Revision -  type: {0}, ", revision.RevisionType);

  // display revision author
  Console.Write("author: {0}, ", revision.Author);

  // display revision date
  Console.Write("date: {0}", revision.DateTime);
}

```

#### Ability to accept or reject revisions in Word format

This feature allows to accept or reject track changes (revisions) in Word document.

##### Public API changes

Added **RevisionType** enum into namespace **GroupDocs.Metadata.Formats.Document**  
Added **Revision** class into namespace **GroupDocs.Metadata.Formats.Document**  
Added **RevisionCollection** class into namespace **GroupDocs.Metadata.Formats.Document**

This example demonstrates how to accept all changes in Word document.

**C#**

```csharp
// path to the MS Word file
string path = @"c:\download files\CV.docx";

// initialize DocFormat
DocFormat docFormat = new DocFormat(path);

// get revisions
RevisionCollection revisionCollection = docFormat.Revisions;

// accept all revisions
revisionCollection.AcceptAll();

// and commit changes
docFormat.Save();

```

This example demonstrates how to reject all changes in Word document.

**C#**

```csharp
// path to the MS Word file
string path = @"c:\download files\CV.docx";

// initialize DocFormat
DocFormat docFormat = new DocFormat(path);

// get revisions
RevisionCollection revisionCollection = docFormat.Revisions;

// reject all revisions
revisionCollection.RejectAll();

// and commit changes
docFormat.Save();

```
