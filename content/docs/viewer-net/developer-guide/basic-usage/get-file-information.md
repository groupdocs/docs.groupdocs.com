---
id: get-file-information
url: viewer-net/get-file-information
title: Get file information
weight: 4
description: This article explains how to detect document file type and calculate pages count when displaying file with GroupDocs.Viewer.
keywords: 
bookCollapseSection: true
productName: GroupDocs.Viewer for .NET
hideChildren: False
---

# Get file information

GroupDocs.Viewer for .NET API allows you to extract file information from different document types through [ViewInfo](https://apireference.groupdocs.com/net/viewer/groupdocs.viewer.results/viewinfo) class which will include following properties:

*   [FileType](https://apireference.groupdocs.com/net/viewer/groupdocs.viewer.results/viewinfo/properties/filetype)
*   [PageCount](https://apireference.groupdocs.com/net/viewer/groupdocs.viewer.results/viewinfo/properties/pages)

For the following document types GroupDocs.Viewer provides additional information:

*   Archive files - collection of folders inside archive (see [Get file information](Get%2Bfile%2Binformation.html));
*   CAD drawings - collection of layouts and layers (see [Get file information](Get%2Bfile%2Binformation.html)); 
*   Outlook data files - collection of folders inside data file (see [Get file information](Get%2Bfile%2Binformation.html));
*   PDF documents - flag that indicates whether document printing is allowed or not (see [Get file information](Get%2Bfile%2Binformation.html));
*   MS Project documents - project start/end dates (see [Get file information](Get%2Bfile%2Binformation.html)).

## Get file information for the file from local disk

using (Viewer viewer = new Viewer("sample.pdf"))
{
	ViewInfoOptions viewInfoOptions = ViewInfoOptions.ForHtmlView();
	ViewInfo viewInfo = viewer.GetViewInfo(viewInfoOptions);
 
    Console.WriteLine("Document type is: " + viewInfo.FileType);
    Console.WriteLine("Pages count: " + viewInfo.Pages.Count);
}

## Get file information for the file from stream

using (Viewer viewer = new Viewer(() => File.OpenRead("sample.pdf")))
{
	ViewInfoOptions viewInfoOptions = ViewInfoOptions.ForHtmlView();
	ViewInfo viewInfo = viewer.GetViewInfo(viewInfoOptions);
 
    Console.WriteLine("Document type is: " + viewInfo.FileType);
    Console.WriteLine("Pages count: " + viewInfo.Pages.Count);
}

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

