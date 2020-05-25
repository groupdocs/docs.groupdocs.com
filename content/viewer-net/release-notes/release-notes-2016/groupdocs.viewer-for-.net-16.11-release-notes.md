---
id: groupdocs-viewer-for-net-16-11-release-notes
url: viewer/net/groupdocs-viewer-for-net-16-11-release-notes
title: GroupDocs.Viewer For .NET 16.11 Release Notes
weight: 2
description: ""
keywords: 
productName: GroupDocs.Viewer for .NET
hideChildren: False
---
{{< alert style="info" >}}This page contains release notes for GroupDocs.Viewer for .NET 16.11.0.{{< /alert >}}

## Major Features

There are 2 new features and 15 improvements and fixes in this regular monthly release. The most notable are:

*   Ability to set default font when rendering Email documents
*   OTP (OpenDocument Presentation Template) file format viewing support
*   Improved public API of ViewerConfig class and IInputDataHandler interface
*   When viewing two documents in one browser page CSS classes are not overriding

## Full List of Issues Covering all Changes in this Release

<table class="confluenceTable"><tbody><tr><td class="confluenceTd"><p><strong>Key</strong></p></td><td class="confluenceTd"><p><strong>Summary</strong></p></td><td class="confluenceTd"><p><strong>Category</strong></p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-955</p></td><td class="confluenceTd"><p>Ability to set default font when rendering Email documents</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-849</p></td><td class="confluenceTd"><p>Add OTP format support</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-966</p></td><td class="confluenceTd"><p>Improve public API of ViewerConfig class</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-963</p></td><td class="confluenceTd"><p>Improve rendering CAD (dwg, dxf) documents to Pdf</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-957</p></td><td class="confluenceTd"><p>Improve public API of IInputDataHandler interface</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-927</p></td><td class="confluenceTd"><p>Display HTML pages of two different documents in the same page in browser without overriding css classes</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>WEB-2447</p></td><td class="confluenceTd"><p>The background is missed for IE 11</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>WEB-2109</p></td><td class="confluenceTd"><p>Special characters like accents, umlauts and circumflex are displayed incorrectly when saving specific PDF to HTML</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>WEB-1398</p></td><td class="confluenceTd"><p>A ligature is shown incorrectly in HTML produced from PDF</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-979</p></td><td class="confluenceTd"><p>Invalid characters while rendering Word document into HTML</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-958</p></td><td class="confluenceTd"><p>Throws unsupported file format exception when loading specific doc file</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-956</p></td><td class="confluenceTd"><p>Getting exception "File type 'doc' is not supported"</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-949</p></td><td class="confluenceTd"><p>Parameter is not valid exception when rendering xlsx to image</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-877</p></td><td class="confluenceTd"><p>Extra blank page created when convering dwg to pdf.</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-848</p></td><td class="confluenceTd"><p>Failed to convert wmf file to image in Asp.Net application.</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-847</p></td><td class="confluenceTd"><p>Incorrect Rendering of Radio Buttons, Checkboxes and their Label into Html</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-775</p></td><td class="confluenceTd"><p>No text when converting Pdf to Html with FontAbsorber</p></td><td class="confluenceTd"><p>Bug</p></td></tr></tbody></table>

## Public API and Backward Incompatible Changes

{{< alert style="info" >}}This section lists public API changes that were introduced in GroupDocs.Viewer for .NET 16.11.0. It includes not only new and obsoleted public methods, but also a description of any changes in the behavior behind the scenes in GroupDocs.Viewer which may affect existing code. Any behavior introduced that could be seen as a regression and modifies existing behavior is especially important and is documented here.{{< /alert >}}

### Ability to set default font when rendering Email documents

Default font name may be specified in this cases:

1.  You want to generally specify the default font to fall back on if a particular font in a document cannot be found during rendering.
2.  Your document uses fonts that contain non-English characters and you want to make sure any missing font is replaced with one that has the same character set available.

**C#**

```csharp
// Setup GroupDocs.Viewer config
ViewerConfig config = new ViewerConfig();
config.StoragePath = @"C:\storage";
config.DefaultFontName = "Calibri";


```

### Improved Public APIs

1.  Improve public API of ViewerConfig classPublic API changes:
    1.  Class *GroupDocs.Viewer.Config.ViewerConfig* property *public string TempFolderName* marked as 'Obsolete'
    2.  Class *GroupDocs.Viewer.Config.ViewerConfig* property *public string TempPath* marked as 'Obsolete'
2.  Improve public API of IInputDataHandler interface Public API changes:
    1.  Class *ViewerImageHandler/ViewerHtmlHandler* method *FileListContainer GetFileList()* added
    2.  Class\_ViewerImageHandler/ViewerHtmlHandler\_ method *GetFileList(FileListOptions fileListOptions)* added
    3.  Class *ViewerImageHandler/ViewerHtmlHandler* method *FileTreeContainer LoadFileTree()* marked as 'Obsolete'
    4.  Class *ViewerImageHandler/ViewerHtmlHandler* method *FileTreeContainer LoadFileTree(FileTreeOptions fileTreeOptions)* marked as 'Obsolete'
    5.  Class *GroupDocs.Viewer.Domain.Containers.FileTreeContainer* marked as 'Obsolete'
    6.  Class *GroupDocs.Viewer.Domain.Options.FileTreeOptions* marked as 'Obsolete'
    7.  Interface *GroupDocs.Viewer.Handler.Input.IInputDataHandler* method *SaveDocument(CachedDocumentDescription cachedDocumentDescription, Stream documentStream)* marked as 'Obsolete'
    8.  Interface *GroupDocs.Viewer.Handler.Input.IInputDataHandler* method *LoadFileTree(FileTreeOptions fileTreeOptions)* marked as 'Obsolete'
    9.  Interface *GroupDocs.Viewer.Handler.Input.IInputDataHandler* method *void AddFile(string guid, Stream content)* added
    10.  Interface *GroupDocs.Viewer.Handler.Input.IInputDataHandler* method *List<FileDescription> GetEntities(string path)* added

### Get file list

{{< alert style="info" >}}LoadFileTree method is obsolete starting from version 16.11.0 and it is replaced with GetFileList method.{{< /alert >}}{{< alert style="info" >}}GetFileList method retrieves files and directories for specified path (or GroupDocs.Viewer's storage path) and works identically in ViewerImageHandler and ViewerHtmlHandler{{< /alert >}}

**Load file list for ViewerConfig.StoragePath**

**C#**

```csharp
// Setup GroupDocs.Viewer config
ViewerConfig config = new ViewerConfig();
config.StoragePath = @"C:\storage";

// Create image handler
ViewerImageHandler imageHandler = new ViewerImageHandler(config);

// Load file list for ViewerConfig.StoragePath
FileListContainer container = imageHandler.GetFileList();
foreach (var node in container.Files)
{
    if (node.IsDirectory)
    {
        Console.WriteLine("Guid: {0} | Name: {1} | LastModificationDate: {2}",
            node.Guid,
            node.Name,
            node.LastModificationDate);
    }
    else
        Console.WriteLine("Guid: {0} | Name: {1} | Document type: {2} | File type: {3} | Extension: {4} | Size: {5} | LastModificationDate: {6}",
            node.Guid,
            node.Name,
            node.DocumentType,
            node.FileType,
            node.Extension,
            node.Size,
            node.LastModificationDate);
}


```

**Load file list for custom path**

**C#**

```csharp
// Setup GroupDocs.Viewer config
ViewerConfig config = new ViewerConfig();
config.StoragePath = @"C:\storage";

// Create image handler
ViewerImageHandler imageHandler = new ViewerImageHandler(config);

// Load file list for custom path
FileListOptions options = new FileListOptions(@"D:\");
FileListContainer container = imageHandler.GetFileList(options);
foreach (var node in container.Files)
{
    if (node.IsDirectory)
    {
        Console.WriteLine("Guid: {0} | Name: {1} | LastModificationDate: {2}",
            node.Guid,
            node.Name,
            node.LastModificationDate);
    }
    else
        Console.WriteLine("Guid: {0} | Name: {1} | Document type: {2} | File type: {3} | Extension: {4} | Size: {5} | LastModificationDate: {6}",
            node.Guid,
            node.Name,
            node.DocumentType,
            node.FileType,
            node.Extension,
            node.Size,
            node.LastModificationDate);
}


```

**Load file list for custom path with order**

**C#**

```csharp
// Setup GroupDocs.Viewer config
ViewerConfig config = new ViewerConfig();
config.StoragePath = @"C:\storage";

// Create image handler
ViewerImageHandler imageHandler = new ViewerImageHandler(config);

// Load file list sorted by Name and ordered Ascending for custom path
FileListOptions options = new FileListOptions(@"D:\", FileListOptions.FileListSortBy.Name, FileListOptions.FileListOrderBy.Ascending);
FileListContainer container = imageHandler.GetFileList(options);
foreach (var node in container.Files)
{
    if (node.IsDirectory)
    {
        Console.WriteLine("Guid: {0} | Name: {1} | LastModificationDate: {2}",
            node.Guid,
            node.Name,
            node.LastModificationDate);
    }
    else
        Console.WriteLine("Guid: {0} | Name: {1} | Document type: {2} | File type: {3} | Extension: {4} | Size: {5} | LastModificationDate: {6}",
            node.Guid,
            node.Name,
            node.DocumentType,
            node.FileType,
            node.Extension,
            node.Size,
            node.LastModificationDate);
}


```
