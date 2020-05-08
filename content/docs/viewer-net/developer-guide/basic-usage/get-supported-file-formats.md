---
id: get-supported-file-formats
url: viewer-net/get-supported-file-formats
title: Get supported file formats
weight: 5
description: This article explains how to obtain supported file formats list when viewing documents with GroupDocs.Viewer within your .NET applications.
keywords: 
bookCollapseSection: true
productName: GroupDocs.Viewer for .NET
hideChildren: False
---

# Get supported file formats

GroupDocs.Viewer allows to get the list of all [supported file formats](Supported%2BDocument%2BFormats.html) by following the below steps:

*   Call [GetSupportedFileTypes](https://apireference.groupdocs.com/net/viewer/groupdocs.viewer/filetype/methods/getsupportedfiletypes) methodof [FileType](https://apireference.groupdocs.com/net/viewer/groupdocs.viewer/filetype) class;
*   Enumerate through the collection of [FileType](https://apireference.groupdocs.com/net/viewer/groupdocs.viewer/filetype)objects*.*

The following code sample demonstrates how to get supported file formats list.

IEnumerable<FileType> supportedFileTypes = FileType
	.GetSupportedFileTypes()
	.OrderBy(f => f.Extension);

foreach (FileType fileType in supportedFileTypes)
	Console.WriteLine(fileType);

## More resources

### Advanced Usage Topics

To learn more about document viewing features, please refer to the [advanced usage section](Advanced%2Busage.html).

### GitHub Examples

You may easily run the code above and see the feature in action in our GitHub examples:

*   [GroupDocs.Viewer for .NET examples, plugins, and showcase](https://github.com/groupdocs-viewer/GroupDocs.Viewer-for-.NET)
    
*   [GroupDocs.Viewer for Java examples, plugins, and showcase](https://github.com/groupdocs-viewer/GroupDocs.Viewer-for-Java)
    
*   [Document Viewer for .NET MVC UI Example](https://github.com/groupdocs-viewer/GroupDocs.Viewer-for-.NET-MVC) 
    
*   [Document Viewer for .NET App WebForms UI Modern Example](https://github.com/groupdocs-viewer/GroupDocs.Viewer-for-.NET-WebForms)
    
*   [Document Viewer for Java App Dropwizard UI Modern Example](https://github.com/groupdocs-viewer/GroupDocs.Viewer-for-Java-Dropwizard)
    
*   [Document Viewer for Java Spring UI Example](https://github.com/groupdocs-viewer/GroupDocs.Viewer-for-Java-Spring)
    

### Free Online App

Along with full-featured .NET library we provide simple but powerful free Apps.

You are welcome to view Word, PDF, Excel, PowerPoint documents with free to use online **[GroupDocs Viewer App](https://products.groupdocs.app/viewer)**.

