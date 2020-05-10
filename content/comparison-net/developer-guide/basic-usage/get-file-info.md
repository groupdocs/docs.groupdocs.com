---
id: get-file-info
url: comparison-net/get-file-info
title: Get file info
weight: 2
description: This article explains how to detect document file type, size and calculate pages count when annotate documents or images with GroupDocs.Comparison.
keywords: 
bookCollapseSection: true
productName: GroupDocs.Comparison for .NET
hideChildren: False
---

# Get file info

**[GroupDocs.Comparison](https://products.groupdocs.com/comparison/net)** allows to get document information which includes:

*   [FileType](https://apireference.groupdocs.com/net/comparison/groupdocs.comparison.interfaces/idocumentinfo/properties/filetype) - document file type (PDF, Word document, Excel spreadsheet, PowerPoint presentation or image etc.);
*   [PageCount](https://apireference.groupdocs.com/net/comparison/groupdocs.comparison.interfaces/idocumentinfo/properties/pagecount) - count of document pages;
*   [FileSize](https://apireference.groupdocs.com/net/comparison/groupdocs.comparison.interfaces/idocumentinfo/properties/size)[](https://apireference.groupdocs.com/net/comparison/groupdocs.comparison.interfaces/idocumentinfo/properties/size)\- document file size;[](https://apireference.groupdocs.com/net/comparison/groupdocs.comparison.interfaces/idocumentinfo/properties/size)

The following code samples demonstrate how to get document information.

## Get file info for the file from local disk

using (Comparer comparer = new Comparer(“source.docx”))
{
	IDocumentInfo info = comparer.Source.GetDocumentInfo();
    Console.WriteLine("\\nFile type: {0}\\nNumber of pages: {1}\\nDocument size: {2} bytes", info.FileType, info.PageCount, info.Size);
}

## Get file for the file from stream

using (Comparer comparer = new Comparer(File.OpenRead(“source.docx”))
{
	IDocumentInfo info = comparer.Source.GetDocumentInfo();
    Console.WriteLine("\\nFile type: {0}\\nNumber of pages: {1}\\nDocument size: {2} bytes", info.FileType, info.PageCount, info.Size);
}

## More resources

### Advanced Usage Topics

To learn more about document comparison features, please refer to the [advanced usage section](Advanced%2Busage.html).

### GitHub Examples

You may easily run the code above and see the feature in action in our GitHub examples:

*   [GroupDocs.Comparison for .NET examples, plugins, and showcase](https://github.com/groupdocs-comparison/GroupDocs.Comparison-for-.NET)
    
*   [GroupDocs.Comparison for Java examples, plugins, and showcase](https://github.com/groupdocs-comparison/GroupDocs.Comparison-for-Java)
    
*   [Document Comparison for .NET MVC UI Example](https://github.com/groupdocs-comparison/GroupDocs.Comparison-for-.NET-MVC) 
    
*   [Document Comparison for .NET App WebForms UI Modern Example](https://github.com/groupdocs-comparison/GroupDocs.Comparison-for-.NET-WebForms)
    
*   [Document Comparison for Java App Dropwizard UI Modern Example](https://github.com/groupdocs-comparison/GroupDocs.Comparison-for-Java-Dropwizard)
    
*   [Document Comparison for Java Spring UI Example](https://github.com/groupdocs-comparison/GroupDocs.Comparison-for-Java-Spring)
    

### Free Online App

Along with full-featured .NET library we provide simple, but powerful free Apps.

You are welcome to compare your DOC or DOCX, XLS or XLSX, PPT or PPTX, PDF, EML, EMLX, MSGand other documents with free to use online **[GroupDocs Comparison App](https://products.groupdocs.app/comparison)**.

