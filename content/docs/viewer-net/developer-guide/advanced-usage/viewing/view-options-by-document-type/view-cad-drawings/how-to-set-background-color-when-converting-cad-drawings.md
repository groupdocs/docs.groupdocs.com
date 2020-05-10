---
id: how-to-set-background-color-when-converting-cad-drawings
url: viewer-net/how-to-set-background-color-when-converting-cad-drawings
title: How to set background color when converting CAD Drawings
weight: 3
description: This article explains how to set background color when converting CAD Drawings with GroupDocs.Viewer within your .NET / C# applications.
keywords: 
bookCollapseSection: true
productName: GroupDocs.Viewer for .NET
hideChildren: False
---

# How to set background color when converting CAD Drawings



## Introduction

When converting CAD drawings with GroupDocs.Viewer there is no background color set by default but we proved an option that enables you to set any background color.

## Setting background color when converting CAD Drawings

Let's check how does output looks when converting sample CAD drawing with GroupDocs.Viewer.

And as you can see the background color of the output image below is white.

![](https://wiki.lisbon.dynabic.com/download/attachments/31917147/image2020-4-22%2018%3A17%3A31.png?version=1&modificationDate=1587561452000&api=v2)

Now, lets set background color and convert CAD drawing one more time.

To set background color you need to specify the [BackgroundColor](https://apireference.groupdocs.com/viewer/net/groupdocs.viewer.options/cadoptions/properties/backgroundcolor) property value in the [CadOptions](https://apireference.groupdocs.com/viewer/net/groupdocs.viewer.options/cadoptions) class. 

The following code snippet shows how to set background color.

using (Viewer viewer = new Viewer("input.dwg"))
{
    PngViewOptions options = new PngViewOptions(pageFilePathFormat);
    options.CadOptions.BackgroundColor = System.Drawing.Color.Blue;
    viewer.View(options);
}

And here is output image with blue background color:

![](https://wiki.lisbon.dynabic.com/download/attachments/31917147/image2020-4-22%2018%3A11%3A27.png?version=1&modificationDate=1587561088000&api=v2)

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
