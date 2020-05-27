---
id: groupdocs-annotation-for-java-17-1-0-release-notes
url: annotation/java/groupdocs-annotation-for-java-17-1-0-release-notes
title: GroupDocs.Annotation for Java 17.1.0 Release Notes
weight: 6
description: ""
keywords: 
productName: GroupDocs.Annotation for Java
hideChildren: False
---
{{< alert style="info" >}}This page contains release notes for GroupDocs.Annotation for Java 17.1.0{{< /alert >}}

## Major Features

Below the list of improvements fixes and new features in this regular monthly release of GroupDocs.Annotation for Java. The most notable are:

*   Implement annotations import from Word documents
*   Implement  auto-import annotations when opening PDF documents
*   Add native Word annotations after export to Word documents different types of annotations
*   Fix users permission for Delete annotations
*   Implemented following for slides documents:
*   Point annotation
*   Area annotation
*   ResourceRedaction annotation
*   Arrow annotation
*   TextField annotation
*   Polyline annotation
*   Watermark annotation
*   Show and store annotation author when export annotation for PDF documents

Implemented following for slides documents:

*   TextHighlight annotation
*   TextStrikeout annotation
*   TextUndreline annotation

Implemented ability to import following annotations:

*   Import of ResourceRedaction annotation
*   Import of Text Field annotation 
*   Import of Area annotation
*   Import of Arrow annotation
*   Import of Polyline annotation
*   Import of Watermark annotation
*   Import of Point annotation

Implemented following annotations for images:

*   Watermart annotation
*   Polyline annotation
*   Text Underline annotation
*   Text Strikeout annotation
*   TextField annotation
*   Point annotation
*   Resource Redaction annotation
*   Area annotation

Implemented annotating documents of following types:

*   JPG
*   TIFF
*   BMP
*   GIF (static images without animation)

Fixed following bugs:

*   When exporting Slide document TextField annotation hasn't text
*   For Slides format fix background when import Resource Redaction annotation 

Improvement:

*   Increase number of integration test for improving quality of product

Fixed bug with wrong annotation orientation (After export PDF annotations are shifted to other place)

## Full List of Issues Covering all Changes in this Release

<table class="confluenceTable"><tbody><tr><td class="confluenceTd"><p align="center"><strong>Key</strong></p></td><td class="confluenceTd"><p align="center"><strong>Summary</strong></p></td><td class="confluenceTd"><p align="center"><strong>Category</strong></p></td></tr><tr><td class="confluenceTd"><p>ANNOTATIONNET-249</p></td><td class="confluenceTd"><p>Import TextField annotation from Words Documents</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>ANNOTATIONNET-236</p></td><td class="confluenceTd"><p>Implement TextRedaction annotation import from Word</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>ANNOTATIONNET-244</p></td><td class="confluenceTd"><p>Implement Shape annotations import from Word</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>ANNOTATIONNET-237</p></td><td class="confluenceTd"><p>Implement TextStrikeout annotation import from Word</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>ANNOTATIONNET-238</p></td><td class="confluenceTd"><p>Implement Underline annotation import from Word</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>ANNOTATIONNET-235</p></td><td class="confluenceTd"><p>Implement Area annotation import from Word</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>ANNOTATIONNET-234</p></td><td class="confluenceTd"><p>Implement Text annotation import from Word</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>ANNOTATIONNET-230</p></td><td class="confluenceTd"><p>Add native Word annotations after export Word documents to Text Replacement annotation</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>ANNOTATIONNET-224</p></td><td class="confluenceTd"><p>Add native Word annotations after export Word documents</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>ANNOTATIONNET-228</p></td><td class="confluenceTd"><p>Add native Word annotations after export Word documents to Strikeout annotation</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>ANNOTATIONNET-282</p></td><td class="confluenceTd"><p>Implement Watermark annotation for Slides format</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>ANNOTATIONNET-276</p></td><td class="confluenceTd"><p>Implement Area annotation for Slides format</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>ANNOTATIONNET-275</p></td><td class="confluenceTd"><p>Implement Arrow annotation for Slides format</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>ANNOTATIONNET-273</p></td><td class="confluenceTd"><p>Implement Text Field annotation in Slides document</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>ANNOTATIONNET-272</p></td><td class="confluenceTd"><p>Implement Polyline annotation for Slides format</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>ANNOTATIONNET-271</p></td><td class="confluenceTd"><p>Implement Point annotation for Slides format</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>ANNOTATIONNET-303</p></td><td class="confluenceTd"><p>Implement Strikeout annotation for Slides format</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>ANNOTATIONNET-302</p></td><td class="confluenceTd"><p>Implement Undreline annotation for Slides format</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>ANNOTATIONNET-301</p></td><td class="confluenceTd"><p>Implement Highlight annotation for Slides format</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>ANNOTATIONNET-296</p></td><td class="confluenceTd"><p>Implement import of Text Field annotation for Slides</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>ANNOTATIONNET-295</p></td><td class="confluenceTd"><p>Implement import of Point annotation for Slides</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>ANNOTATIONNET-294</p></td><td class="confluenceTd"><p>Implement import of Resource Redaction annotation for Slides</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>ANNOTATIONNET-293</p></td><td class="confluenceTd"><p>Implement import of Watermark annotation for Slides</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>ANNOTATIONNET-292</p></td><td class="confluenceTd"><p>Implement import of Polyline annotation for Slides</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>ANNOTATIONNET-291</p></td><td class="confluenceTd"><p>Implement import of Arrow annotation for Slides</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>ANNOTATIONNET-290</p></td><td class="confluenceTd"><p>Implement import of Area annotation for Slides</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>ANNOTATIONNET-320</p></td><td class="confluenceTd"><p>Implement Watermark annotation for images</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>ANNOTATIONNET-319</p></td><td class="confluenceTd"><p>Implement Polyline annotation for images</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>ANNOTATIONNET-318</p></td><td class="confluenceTd"><p>Implement Text Underline annotation for images</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>ANNOTATIONNET-317</p></td><td class="confluenceTd"><p>Implement Text Strikeout annotations for images</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>ANNOTATIONNET-316</p></td><td class="confluenceTd"><p>Implement TextField annotation for images</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>ANNOTATIONNET-315</p></td><td class="confluenceTd"><p>Implement Point annotation for images</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>ANNOTATIONNET-314</p></td><td class="confluenceTd"><p>Implement Resource Redaction annotation for images</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>ANNOTATIONNET-313</p></td><td class="confluenceTd"><p>Implement Area annotation for images</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>ANNOTATIONNET-337</p></td><td class="confluenceTd"><p>Implement annotating GIF format static images (without animation)</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>ANNOTATIONNET-332</p></td><td class="confluenceTd"><p>Implement annotating TIFF format images</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>ANNOTATIONNET-331</p></td><td class="confluenceTd"><p>Implement annotating BMP format images</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>ANNOTATIONNET-329</p></td><td class="confluenceTd"><p>Implement annotating JPEG format images</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>ANNOTATIONNET-241</p></td><td class="confluenceTd"><p>Implement option for ability to auto-import annotations when opening PDF documents</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>ANNOTATIONNET-266</p></td><td class="confluenceTd"><p>Show and store annotation author when export annotation for PDF documents</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>ANNOTATIONNET-250</p></td><td class="confluenceTd"><p>Fix users permission for Delete annotations</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>ANNOTATIONNET-298</p></td><td class="confluenceTd"><p>Arrow annotation imported incorrectly on several Words documents</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>ANNOTATIONNET-311</p></td><td class="confluenceTd"><p>Wrong annotation orientation (After export PDF annotations are shifted to other place)</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>ANNOTATIONNET-335</p></td><td class="confluenceTd"><p>While exporting Slide document TextField annotation hasn't text</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>ANNOTATIONNET-324</p></td><td class="confluenceTd"><p>Fix background when import Resource Redaction annotation (for slides)</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>ANNOTATIONJAVA-904</p></td><td class="confluenceTd"><p>Quality doesn't work</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>ANNOTATIONJAVA-915</p></td><td class="confluenceTd"><p>Search functionality doesn't work for one pdf</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>ANNOTATIONJAVA-856</p></td><td class="confluenceTd"><p>Incorrect rendering "strickeout text" annotation after import</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>ANNOTATIONJAVA-877</p></td><td class="confluenceTd"><p>Localization works only after a document was rendered</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>ANNOTATIONJAVA-907</p></td><td class="confluenceTd"><p>Access callbacks ExportPdf and ExportWord do not works</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>ANNOTATIONJAVA-911</p></td><td class="confluenceTd"><p>Performance issue with .pdf document that has a lot of images</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>ANNOTATIONJAVA-764</p></td><td class="confluenceTd"><p>Document comments reply issues</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>ANNOTATIONJAVA-910</p></td><td class="confluenceTd"><p>Issue with showing Excel groups</p></td><td class="confluenceTd"><p>Bug</p></td></tr></tbody></table>

## Public API and Backward Incompatible Changes

{{< alert style="info" >}}This section lists public API changes that were introduced in GroupDocs.Annotation for Java 17.1.0. It includes not only new and obsoleted public methods, but also a description of any changes in the behavior behind the scenes in GroupDocs.Annotation which may affect existing code. Any behavior introduced that could be seen as a regression and modifies existing behavior is especially important and is documented here.{{< /alert >}}

  

Added ability to import annotations from Words documents: Documentation article

Added ability to annotate Slides documents with different annotations types: Documentation article

Added ability to import annotations from Slides documents: Documentation article

Added ability to add text annotations to Slides documents (TextHighlight, TextStrikeout, TextUnderline): Documentation article

Added ability to annotate images: Documentation article

Added new formats to annotating images article: Documentation article
