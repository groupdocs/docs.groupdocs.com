---
id: features-overview
url: watermark/net/features-overview
title: Features Overview
weight: 1
description: "GroupDocs.Watermark for .NET API presents a wide range of features related to watermark: adding, searching, modifying, removing and more."
keywords: 
productName: GroupDocs.Watermark for .NET
hideChildren: False
---
## Watermark

A watermark is an image or text that is intentionally superimposed onto document or image. Its purpose is to make it more difficult for the original document or image to be copied or used without permission.

GroupDocs.Watermark for .NET API presents a wide range of features related to watermark. Some key features are listed below.

1.  Adding text/image watermark to supported document formats
2.  Searching and removing text/image watermark in supported document formats
3.  Searching watermarks in particular objects
4.  Adding watermark to images inside a document
5.  Modifying existing watermark objects in supported document formats
6.  Extracting information of watermark objects in a document
7.  PDF document rasterization
8.  Getting document information
9.  Searching watermarks by text formatting (font, color etc)
10.  Modifying hyperlinks associated with document entities (all formats)
11.  Setting background image for charts in Excel and PowerPoint document
12.  Modifying PDF and email attachments
13.  Using *Dynabic.Metered* account to use API in licensed mode

## Add watermark

Following are the watermark types that can be added to each supported document format.

<table class="confluenceTable"><tbody><tr><td class="confluenceTd"><p><strong>Document Format</strong></p></td><td class="confluenceTd"><p><strong>Watermark Type</strong></p></td></tr><tr><td class="confluenceTd"><p>PDF</p></td><td class="confluenceTd"><p>XObject (image and text)</p></td></tr><tr><td class="confluenceTd"><p>&nbsp;</p></td><td class="confluenceTd"><p>Artifact (image and text)&nbsp;</p></td></tr><tr><td class="confluenceTd"><p>&nbsp;</p></td><td class="confluenceTd"><p>Annotation&nbsp;(image and text)</p></td></tr><tr><td class="confluenceTd"><p>Word</p></td><td class="confluenceTd"><p>Shape (image and text)</p></td></tr><tr><td class="confluenceTd"><p>Excel</p></td><td class="confluenceTd"><p>Shape (image and text)</p></td></tr><tr><td class="confluenceTd"><p>&nbsp;</p></td><td class="confluenceTd"><p>Header &amp; Footer&nbsp;(image and text)</p></td></tr><tr><td class="confluenceTd"><p>&nbsp;</p></td><td class="confluenceTd"><p>Background image</p></td></tr><tr><td class="confluenceTd"><p>PowerPoint</p></td><td class="confluenceTd"><p>Shape (image and text)</p></td></tr><tr><td class="confluenceTd"><p>Visio</p></td><td class="confluenceTd"><p>Shape (image and text)</p></td></tr><tr><td class="confluenceTd"><p>Raster Image Formats</p></td><td class="confluenceTd"><p>Text</p></td></tr><tr><td class="confluenceTd"><p>&nbsp;</p></td><td class="confluenceTd"><p>Image</p></td></tr><tr><td class="confluenceTd"><p>Multi-page tiff</p></td><td class="confluenceTd"><p>Text</p></td></tr><tr><td class="confluenceTd"><p>&nbsp;</p></td><td class="confluenceTd"><p>Image</p></td></tr><tr><td class="confluenceTd"><p>Animated gif</p></td><td class="confluenceTd"><p>Text</p></td></tr><tr><td class="confluenceTd"><p>&nbsp;</p></td><td class="confluenceTd"><p>Image</p></td></tr></tbody></table>

## Search watermark

Following are the watermark types that can be found using GroupDocs.Watermark.

<table class="confluenceTable"><tbody><tr><td colspan="1" class="confluenceTd"><p><strong>Format</strong></p></td><td colspan="1" class="confluenceTd"><p><strong>Watermark type</strong></p></td></tr><tr><td class="confluenceTd"><p>PDF</p></td><td class="confluenceTd"><p>XObject&nbsp;(image and text)</p></td></tr><tr><td class="confluenceTd"><p>&nbsp;</p></td><td class="confluenceTd"><p>Artifact (image and text)</p></td></tr><tr><td class="confluenceTd"><p>&nbsp;</p></td><td class="confluenceTd"><p>Annotation&nbsp;(image and text)</p></td></tr><tr><td class="confluenceTd"><p>&nbsp;</p></td><td class="confluenceTd"><p>Regular text</p></td></tr><tr><td class="confluenceTd"><p>Word</p></td><td class="confluenceTd"><p>Shape (image and text)</p></td></tr><tr><td class="confluenceTd"><p>&nbsp;</p></td><td class="confluenceTd"><p>Regular text</p></td></tr><tr><td class="confluenceTd"><p>&nbsp;</p></td><td class="confluenceTd"><p>Hyperlinks</p></td></tr><tr><td class="confluenceTd"><p>Excel</p></td><td class="confluenceTd"><p>Shape (image and text)</p></td></tr><tr><td class="confluenceTd"><p>&nbsp;</p></td><td class="confluenceTd"><p>Header&amp;Footer&nbsp;(image and text)</p></td></tr><tr><td class="confluenceTd"><p>&nbsp;</p></td><td class="confluenceTd"><p>Background image</p></td></tr><tr><td class="confluenceTd"><p>&nbsp;</p></td><td class="confluenceTd"><p>Text and formulas in cells</p></td></tr><tr><td class="confluenceTd"><p>&nbsp;</p></td><td class="confluenceTd"><p>Hyperlinks</p></td></tr><tr><td class="confluenceTd"><p>PowerPoint</p></td><td class="confluenceTd"><p>Shape (image and text)</p></td></tr><tr><td class="confluenceTd"><p>&nbsp;</p></td><td class="confluenceTd"><p>Hyperlinks</p></td></tr><tr><td class="confluenceTd"><p>Visio</p></td><td class="confluenceTd"><p>Shape (image and text)</p></td></tr><tr><td class="confluenceTd"><p>&nbsp;</p></td><td class="confluenceTd"><p>Diagram comments</p></td></tr><tr><td class="confluenceTd"><p>&nbsp;</p></td><td class="confluenceTd"><p>Hyperlinks</p></td></tr><tr><td class="confluenceTd"><p>Email</p></td><td class="confluenceTd"><p>Attached and embedded images</p></td></tr><tr><td class="confluenceTd"><p>&nbsp;</p></td><td class="confluenceTd"><p>Subject and body text fragments</p></td></tr></tbody></table>

## Remove watermark

Following are the watermark types that can be removed using GroupDocs.Watermark.

<table class="confluenceTable"><tbody><tr><td class="confluenceTd"><p><strong>Format</strong></p></td><td class="confluenceTd"><p><strong>Watermark type</strong></p></td></tr><tr><td class="confluenceTd"><p>PDF</p></td><td class="confluenceTd"><p>XObject&nbsp;(image and text)</p></td></tr><tr><td class="confluenceTd"><p>&nbsp;</p></td><td class="confluenceTd"><p>Artifact (image and text)</p></td></tr><tr><td class="confluenceTd"><p>&nbsp;</p></td><td class="confluenceTd"><p>Annotation&nbsp;(image and text)</p></td></tr><tr><td class="confluenceTd"><p>&nbsp;</p></td><td class="confluenceTd"><p>Regular text</p></td></tr><tr><td class="confluenceTd"><p>Word</p></td><td class="confluenceTd"><p>Shape (image and text)</p></td></tr><tr><td class="confluenceTd"><p>&nbsp;</p></td><td class="confluenceTd"><p>Regular text</p></td></tr><tr><td class="confluenceTd"><p>&nbsp;</p></td><td class="confluenceTd"><p>Hyperlinks</p></td></tr><tr><td class="confluenceTd"><p>Excel</p></td><td class="confluenceTd"><p>Shape (image and text)</p></td></tr><tr><td class="confluenceTd"><p>&nbsp;</p></td><td class="confluenceTd"><p>Header&amp;Footer&nbsp;(image and text)</p></td></tr><tr><td class="confluenceTd"><p>&nbsp;</p></td><td class="confluenceTd"><p>Background image</p></td></tr><tr><td class="confluenceTd"><p>&nbsp;</p></td><td class="confluenceTd"><p>Text and formulas in cells</p></td></tr><tr><td class="confluenceTd"><p>&nbsp;</p></td><td class="confluenceTd"><p>Hyperlinks</p></td></tr><tr><td class="confluenceTd"><p>PowerPoint</p></td><td class="confluenceTd"><p>Shape (image and text)</p></td></tr><tr><td class="confluenceTd"><p>&nbsp;</p></td><td class="confluenceTd"><p>Hyperlinks</p></td></tr><tr><td class="confluenceTd"><p>Visio</p></td><td class="confluenceTd"><p>Shape (image and text)</p></td></tr><tr><td class="confluenceTd"><p>&nbsp;</p></td><td class="confluenceTd"><p>Diagram comments</p></td></tr><tr><td class="confluenceTd"><p>&nbsp;</p></td><td class="confluenceTd"><p>Hyperlinks</p></td></tr><tr><td class="confluenceTd"><p>Email</p></td><td class="confluenceTd"><p>Attached and embedded images</p></td></tr><tr><td class="confluenceTd"><p>&nbsp;</p></td><td class="confluenceTd"><p>Subject and body text fragments</p></td></tr></tbody></table>

## Document information extraction

GroupDocs.Watermark allows to obtain basic information about source document - file type, size, pages count, page height and width etc.  
This may be quite useful for generating document preview and precise watermark placing inside document.

## Preview document pages

Document preview feature allows to generate image representations of document pages. This may be helpful for better understanding about document content and its structure,  
set proper watermark position inside document, apply appropriate watermark styling etc. Preview can be generated for all document pages (by default) or for specific page numbers or page range.

Supported image formats for document preview are:

*   PNG;
*   JPG;
*   BMP.
