---
id: how-to-view-plt-files
url: viewer-net/how-to-view-plt-files
title: How to view PLT files
weight: 5
description: This article explains how to convert PLT files with GroupDocs.Viewer within your .NET applications.
keywords: 
bookCollapseSection: true
productName: GroupDocs.Viewer for .NET
hideChildren: False
---
## Introduction

[PLT](https://wiki.fileformat.com/cad/plt/) and HPG formats are based on the plotter language developed by Hewlett-Packard (HP-GL). These formats are designed for sending information to plotter printers, contain text/binary instructions on HPGL language to draw vector images on paper.

## How to view PLT files

The PLT/HPG can be opened with desktop applications like e.g. Autodesk AutoCAD.

In case you need to view a PLT/HPG file in a browser or in a standard image or PDF viewer application, you can convert it to HTML, JPEG, PNG  PDF format with GroupDocs.Viewer for .NET. 

### Convert PLT to HTML

To convert PLT/HPG files to HTML with GroupDocs.Viewer for .NET use following code:

```csharp
using (Viewer viewer = new Viewer("sample.plt"))
{
       HtmlViewOptions options = HtmlViewOptions.ForEmbeddedResources("output.html");
       //options.CadOptions = CadOptions.ForRenderingByScaleFactor(0.7f); // Render image and reduce it by 30%
       //options.CadOptions = CadOptions.ForRenderingByWidthAndHeight(400,400); // Render image and set output size to 400x400
       //options.CadOptions = CadOptions.ForRenderingByWidth(500); // Render image, fix width by 500 px and recalculate height
       //options.CadOptions = CadOptions.ForRenderingByHeight(500); // Render image, fix height by 500 px and recalculate width

       viewer.View(options);
}
```

The following screenshot shows the output HTML file opened in a browser.

![](https://wiki.lisbon.dynabic.com/download/attachments/31916987/image2020-4-21%2017%3A11%3A4.png?version=1&modificationDate=1587471065000&api=v2)

### Convert PLT to JPG

To convert PLT/HPG files to JPG with GroupDocs.Viewer for .NET use following code: 

```csharp
using (Viewer viewer = new Viewer("sample.plt"))
{
       JpgViewOptions options = new JpgViewOptions("output.html");
	   //options.CadOptions = CadOptions.ForRenderingByScaleFactor(0.7f); // Render image and reduce it by 30%
       //options.CadOptions = CadOptions.ForRenderingByWidthAndHeight(400,400); // Render image and set output size to 400x400
       //options.CadOptions = CadOptions.ForRenderingByWidth(500); // Render image, fix width by 500 px and recalculate height
       //options.CadOptions = CadOptions.ForRenderingByHeight(500); // Render image, fix height by 500 px and recalculate width

       viewer.View(options);
}
```

The following screenshot shows the output JPG file opened in a Windows Photo Viewer application.

![](https://wiki.lisbon.dynabic.com/download/attachments/31916987/image2020-4-22%2015%3A32%3A41.png?version=1&modificationDate=1587551562000&api=v2)

### Convert PLT to PNG

To convert PLT/HPG files to PNG with GroupDocs.Viewer for .NET use following code: 

```csharp
using (Viewer viewer = new Viewer("sample.plt"))
{
       PngViewOptions options = new PngViewOptions("output.html");
	   //options.CadOptions = CadOptions.ForRenderingByScaleFactor(0.7f); // Render image and reduce it by 30%
       //options.CadOptions = CadOptions.ForRenderingByWidthAndHeight(400,400); // Render image and set output size to 400x400
       //options.CadOptions = CadOptions.ForRenderingByWidth(500); // Render image, fix width by 500 px and recalculate height
       //options.CadOptions = CadOptions.ForRenderingByHeight(500); // Render image, fix height by 500 px and recalculate width

       viewer.View(options);
}
```

The following screenshot shows the output PNG file opened in a Windows Photo Viewer application.

![](https://wiki.lisbon.dynabic.com/download/attachments/31916987/image2020-4-21%2022%3A39%3A6.png?version=1&modificationDate=1587490746000&api=v2)

### Convert PLT to PDF

To convert PLT/HPG files to PDF with GroupDocs.Viewer for .NET use following code: 

```csharp
using (Viewer viewer = new Viewer("sample.plt"))
{
       PdfViewOptions options = new PdfViewOptions("output.pdf");
	   //options.CadOptions = CadOptions.ForRenderingByScaleFactor(0.7f); // Render image and reduce it by 30%
       //options.CadOptions = CadOptions.ForRenderingByWidthAndHeight(400,400); // Render image and set output size to 400x400
       //options.CadOptions = CadOptions.ForRenderingByWidth(500); // Render image, fix width by 500 px and recalculate height
       //options.CadOptions = CadOptions.ForRenderingByHeight(500); // Render image, fix height by 500 px and recalculate width

       viewer.View(options);
}
```

The following screenshot shows the output PDF file opened in a browser.

![](https://wiki.lisbon.dynabic.com/download/attachments/31916987/image2020-4-21%2022%3A42%3A10.png?version=1&modificationDate=1587490931000&api=v2)

## More resources

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
