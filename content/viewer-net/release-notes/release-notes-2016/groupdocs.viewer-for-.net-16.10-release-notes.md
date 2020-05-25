---
id: groupdocs-viewer-for-net-16-10-release-notes
url: viewer/net/groupdocs-viewer-for-net-16-10-release-notes
title: GroupDocs.Viewer For .NET 16.10 Release Notes
weight: 3
description: ""
keywords: 
productName: GroupDocs.Viewer for .NET
hideChildren: False
---
{{< alert style="info" >}}This page contains release notes for GroupDocs.Viewer for .NET 16.10.0.{{< /alert >}}

## Major Features

There are 1 new feature and 8 improvements and fixes in this regular monthly release. The most notable are:  
 

*   Improved rendering Slides documents by removing embedded audios
*   Improved extracting document information
*   MOBI file format viewing support
*   Fixed rendering of DWG documents which were rendered into small image or into image with dots

## Full List of Issues Covering all Changes in this Release

<table class="confluenceTable"><tbody><tr><td class="confluenceTd"><p><strong>Key</strong></p></td><td class="confluenceTd"><p><strong>Summary</strong></p></td><td class="confluenceTd"><p><strong>Category</strong></p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-888</p></td><td class="confluenceTd"><p>Mobi format support</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-913</p></td><td class="confluenceTd"><p>Remove embedded audios from presentation</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-942</p></td><td class="confluenceTd"><p>Invalid rendering of DWG file into Image or HTML</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-922</p></td><td class="confluenceTd"><p>GetDocumentInfo() method is throwing exception</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-918</p></td><td class="confluenceTd"><p>Failed to load XPS file in evaluation mode</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-910</p></td><td class="confluenceTd"><p>Dwg document is rendered into small image.</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-905</p></td><td class="confluenceTd"><p>Invalid rendering of DWG file into HTML and Image</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-798</p></td><td class="confluenceTd"><p>SheetRender.GetPageSize throws an exception when sheet is empty.</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-417</p></td><td class="confluenceTd"><p>FormattedText does not return TextWidth for Japanese characters.</p></td><td class="confluenceTd"><p>Bug</p></td></tr></tbody></table>

## Public API and Backward Incompatible Changes

{{< alert style="info" >}}This section lists public API changes that were introduced in GroupDocs.Viewer for .NET 16.10.0. It includes not only new and obsoleted public methods, but also a description of any changes in the behavior behind the scenes in GroupDocs.Viewer which may affect existing code. Any behavior introduced that could be seen as a regression and modifies existing behavior is especially important and is documented here.{{< /alert >}}

1.  Rename classes which names start with AutoCad to Cad
    1.  Class *GroupDocs.Viewer.Domain.DocumentTypeFormat* constant *AUTOCAD\_DRAWING\_FILE\_FORMAT* **value**** changed** to *"CAD Drawing File Format"*
    2.  Class\_ *{*}GroupDocs.Viewer.Domain.DocumentTypeFormat{*}* constant *{*}AUTOCAD\_DRAWING\_FILE\_FORMAT{*}* **name**** changed** *\_to **CAD\_DRAWING\_FILE\_FORMAT*
2.  Mobi format support
    1.  Class *GroupDocs.Viewer.Domain.DocumentTypeFormat* **constant** **added** *public const string MOBIPOCKET = "Mobipocket"*
