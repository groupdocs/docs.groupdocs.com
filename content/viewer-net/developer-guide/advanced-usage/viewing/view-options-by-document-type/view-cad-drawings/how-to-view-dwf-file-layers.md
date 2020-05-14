---
id: how-to-view-dwf-file-layers
url: viewer-net/how-to-view-dwf-file-layers
title: How to view DWF file layers
weight: 4
description: This article explains how to view a specific DWF file layers with GroupDocs.Viewer within your .NET / C# applications.
keywords: 
bookCollapseSection: true
productName: GroupDocs.Viewer for .NET
hideChildren: False
---

# How to view DWF file layers


## Introduction

Design Web Format File (.dwf) consists of various user layers. Layers represent various parts of the entire drawing, for example, this drawing describes a plan of a building and it's parts like stairs, walls, doors located in different layers.

![](https://wiki.lisbon.dynabic.com/download/attachments/31917399/image2020-4-23%2018%3A10%3A48.png?version=1&modificationDate=1587647449000&api=v2)

## Background

Let's take a sample DWF described above and then we'll process with GroupDocs.Viewer and compare results.

By default GroupDocs.Viewer renders all layers:

![](https://wiki.lisbon.dynabic.com/download/attachments/31917399/image2020-4-23%2018%3A12%3A27.png?version=1&modificationDate=1587647548000&api=v2)

## How to view only specific layers

If you want to view only specific layers you can set [CadOptions.Layers](https://apireference.groupdocs.com/net/viewer/groupdocs.viewer.options/cadoptions/properties/layers) property of [HtmlViewOptions](https://apireference.groupdocs.com/net/viewer/groupdocs.viewer.options/htmlviewoptions)(or [PngView](https://apireference.groupdocs.com/net/viewer/groupdocs.viewer.options/pngviewoptions)[Options](https://apireference.groupdocs.com/net/viewer/groupdocs.viewer.options/pngviewoptions)*, *or  [JpgView](https://apireference.groupdocs.com/net/viewer/groupdocs.viewer.options/jpgviewoptions)[Options](https://apireference.groupdocs.com/net/viewer/groupdocs.viewer.options/jpgviewoptions)*, *or[PdfViewOptions](https://apireference.groupdocs.com/net/viewer/groupdocs.viewer.options/pdfviewoptions)) class. 

Let's view only "Doors", "Stairs", "Walls" layers, to do that use following code, 

```csharp
using (Viewer viewer = new Viewer("sample.dwf"))
{
    PngViewOptions viewOptions = new PngViewOptions();
    
    options.CadOptions.Layers.Add(new Results.Layer("Stairs"));
    options.CadOptions.Layers.Add(new Results.Layer("Walls"));
    options.CadOptions.Layers.Add(new Results.Layer("Doors"));

    viewer.View(viewOptions);
}
```

Now GroupDocs.Viewer will render only these layers:

![](https://wiki.lisbon.dynabic.com/download/attachments/31917399/image2020-4-23%2018%3A18%3A23.png?version=1&modificationDate=1587647903000&api=v2)

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
