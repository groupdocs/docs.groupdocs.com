---
id: groupdocs-viewer-for-net-3-7-0-release-notes
url: viewer/net/groupdocs-viewer-for-net-3-7-0-release-notes
title: GroupDocs.Viewer For .NET 3.7.0 Release Notes
weight: 4
description: ""
keywords: 
productName: GroupDocs.Viewer for .NET
hideChildren: False
---
{{< alert style="info" >}}This page contains release notes for GroupDocs.Viewer for .NET 3.7.0.{{< /alert >}}

## Major Features

There are 4 new features and 16 improvements and fixes in this regular monthly release. The most notable are:  
 

*   Save HTML resources to cache without saving them to local disc
*   Improve rendering Pdf Dynamic XFA Forms
*   Ability to set default font when rendering Diagram documents
*   EMF and DICOM file format viewing support
*   Fixed HTML watermark rendering 

## Full List of Issues Covering all Changes in this Release

<table class="confluenceTable"><tbody><tr><td class="confluenceTd"><p><strong>Key</strong></p></td><td class="confluenceTd"><p><strong>Summary</strong></p></td><td class="confluenceTd"><p><strong>Category</strong></p></td></tr><tr><td class="confluenceTd"><p>WEB-1084</p></td><td class="confluenceTd"><p>The ability to show and hide PDF layers</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-871</p></td><td class="confluenceTd"><p>Ability to set default font when rendering Diagram documents</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-851</p></td><td class="confluenceTd"><p>Implement support of EMF file type.</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-549</p></td><td class="confluenceTd"><p>DICOM format support</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-899</p></td><td class="confluenceTd"><p>Convert Pdf Dynamic XFA Form to Standard AcroForm</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-895</p></td><td class="confluenceTd"><p>Mark CachedPageDescription redundant constructor as Obsolete</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-873</p></td><td class="confluenceTd"><p>Save HTML resources to cache without saving them to local disc.</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>WEB-2425</p></td><td class="confluenceTd"><p>Incomprehensible characters when view pdf</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>WEB-2038</p></td><td class="confluenceTd"><p>Text issues when saving document containing XFA form to HTML</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-866</p></td><td class="confluenceTd"><p>Html watermark style block contains garbage characters.</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-865</p></td><td class="confluenceTd"><p>Html watermark style block contains garbage characters.</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-863</p></td><td class="confluenceTd"><p>Watermark is Rendered Incorrectly in Html Representation</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-838</p></td><td class="confluenceTd"><p>Wmf file dimensions are different from dimensions in the MS Paint.</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-834</p></td><td class="confluenceTd"><p>TeX to Html conversion error</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-829</p></td><td class="confluenceTd"><p>Incorrect Rendering of PDF Document into Image</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-811</p></td><td class="confluenceTd"><p>The output pdf file contains black pages instead of content when converting djvu to pdf.</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-794</p></td><td class="confluenceTd"><p>DefaultRegularFont setting doesn't work properly</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-566</p></td><td class="confluenceTd"><p>Specific pdf document can't be saved as HTML</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-496</p></td><td class="confluenceTd"><p>Exception when converting document to HTML after cleanup</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-437</p></td><td class="confluenceTd"><p>Some characters not displayed when rendering HTML or PNG</p></td><td class="confluenceTd"><p>Bug</p></td></tr></tbody></table>

## Public API and Backward Incompatible Changes

{{< alert style="info" >}}This section lists public API changes that were introduced in GroupDocs.Viewer for .NET 3.7.0. It includes not only new and obsoleted public methods, but also a description of any changes in the behavior behind the scenes in GroupDocs.Viewer which may affect existing code. Any behavior introduced that could be seen as a regression and modifies existing behavior is especially important and is documented here.{{< /alert >}}

1.  Mark CachedPageDescription redundant constructor as Obsolete
    1.  Class GroupDocs.Viewer.Domain.CachedPageDescription constructor public CachedPageDescription(string guid, CacheFileType cacheFileType) marked as 'obsolete'
2.  Improve CAD files rendering 
    1.  Class GroupDocs.Viewer.Domain.DocumentTypeName constant public const string Autocad = "Autocad"; changed to public const string CAD = "CAD";
3.  Update public classes fields access modifiers.
    1.  Class GroupDocs.Viewer.Localization.LocalizedStringKeys new contant EXC\_TMPL\_CORRUPTED\_OR\_DAMAGED\_FILE
    2.  Class GroupDocs.Viewer.Localization.LocalizedStringKeys new contant EXC\_TMPL\_FILE\_TYPE\_NOT\_SUPPORTED
    3.  Class GroupDocs.Viewer.Localization.LocalizedStringKeys new contant EXC\_TMPL\_INVALID\_PASSWORD
    4.  Class GroupDocs.Viewer.Localization.LocalizedStringKeys new contant EXC\_TMPL\_PASSWORD\_PROTECTED\_FILE
    5.  Class GroupDocs.Viewer.Localization.LocalizedStringKeys new contant EXC\_TMPL\_STORAGE\_PATH\_NOT\_SPECIFIED
    6.  Class GroupDocs.Viewer.Localization.LocalizedStringKeys new contant EXC\_TMPL\_CACHE\_FILE\_NOT\_FOUND
    7.  Class GroupDocs.Viewer.Localization.LocalizedStringKeys new contant EXC\_TMPL\_GUID\_NOT\_SPECIFIED
    8.  Class GroupDocs.Viewer.Localization.LocalizedStringKeys new contant EXC\_TMPL\_TRANSFORMATION\_FAILED\_PAGE\_NOT\_EXIST

### Set default font name

Default font name may be specified in this cases:

1.  You want to generally specify the default font to fall back on if particular font in a document cannot be found during rendering.
2.  Your document uses fonts that non-English characters and you want to make sure any missing font is replaced with one that has the same character set available.

**C#**

```csharp
// Setup GroupDocs.Viewer config
ViewerConfig config = new ViewerConfig();
config.StoragePath = @"C:\storage";
config.DefaultFontName = "Calibri";


```

### Working with layers in HTML representation of pdf documents

Starting from version 3.7.0 the rendering Pdf documents into HTML representation was improved.  
It is possible to work with layers in HTML representation of Pdf document (e.g. show\\hide) with help of javascript.  
Each layer is separated into <div> tag which has Html data tag "data-pdflayer" and its value contains layer name.  
For example Pdf document has layer with name "Backgroung" so output html will contain tag

**HTML**

```csharp
<div data-pdflayer="Backgroung"> .... </div>


```

This layer can be easily accessed with javascript, see the example how to access and hide layer with help of [JQuery](https://jquery.com/).

**JavaScript**

```csharp
// get layer
var layer = $("[data-pdflayer='Backgroung']");

// hide layer
layer.hide();

// show layer
layer.show();

// get all layers
var allLayers = $("[data-pdflayer]");

// go throught all layers and print layer name
allLayers.each(function(index) {
    console.log(index + ": " + $(this).data("pdflayer"));
});

```
