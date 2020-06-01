---
id: groupdocs-viewer-for-net-20-5-release-notes
url: viewer/net/groupdocs-viewer-for-net-20-5-release-notes
title: GroupDocs.Viewer for .NET 20.5 Release Notes
weight: 5
description: ""
keywords: 
productName: GroupDocs.Viewer for .NET
hideChildren: False
---
{{< alert style="info" >}}This page contains release notes for GroupDocs.Viewer for .NET 20.5{{< /alert >}}

## Major Features

There are 13 features, improvements, and bug-fixes in this release, most notable are:

*   When converting CAD drawings to HTML, CAD drawings are converted to SVG instead of PNG   
    *Related article* *[How to convert CAD drawings to HTML](How%2Bto%2Bconvert%2BCAD%2Bdrawings%2Bto%2BHTML.html)*
*   Added Flat XML ODF Template (.fodg) file format support  
    *Related article [How to convert and view ODG and FODG files](How%2Bto%2Bconvert%2Band%2Bview%2BODG%2Band%2BFODG%2Bfiles.html)*
*   Added IGES Drawing File (.igs) file format support  
    *Related article [How to convert and view IGS files](How%2Bto%2Bconvert%2Band%2Bview%2BIGS%2Bfiles.html)*
*   Added Common File Format File (.cf2) file-format support  
    *Related article [How to convert and view CFF2 and CF2 files](How%2Bto%2Bconvert%2Band%2Bview%2BCFF2%2Band%2BCF2%2Bfiles.html)*
*   Added Wavefront 3D Object File (.obj) file-format support  
    *Related article [How to convert and view OBJ files](How%2Bto%2Bconvert%2Band%2Bview%2BOBJ%2Bfiles.html)*
*   Added support viewing MS Project documents with notes  
    *Related article [How to convert and view MS Project documents with notes](How%2Bto%2Bconvert%2Band%2Bview%2BMS%2BProject%2Bdocuments%2Bwith%2Bnotes.html)*
*   Added support viewing Flat XML ODF Template (.fodg) files  
    *Related article [How to convert and view FODP and ODP files](How%2Bto%2Bconvert%2Band%2Bview%2BFODP%2Band%2BODP%2Bfiles.html)*
*   Improved default font support when converting PowerPoint files to HTML and PDF  
    *Related article [How to substitute missing font when converting presentations](How%2Bto%2Bsubstitute%2Bmissing%2Bfont%2Bwhen%2Bconverting%2Bpresentations.html)*

## Full List of Issues Covering all Changes in this Release

| Key | Summary | Category |
| --- | --- | --- |
| VIEWERNET-125 | Support viewing MS Project documents with notes | Feature |
| VIEWERNET-2034 | Add OpenDocument Flat XML Presentation (.fodp) file format support | Feature |
| VIEWERNET-2046 | Add Flat XML ODF Template (.fodg) file format support | Feature |
| VIEWERNET-2057 | Convert CAD drawings to SVG | Feature |
| VIEWERNET-2059 | Add IGES Drawing File (.igs) file format support | Feature |
| VIEWERNET-2243 | Add Common File Format File (.cf2) file-format support | Feature |
| VIEWERNET-2311 | Add Wavefront 3D Object File (.obj) file-format support | Feature |
| VIEWERNET-2433 | Improve default font support when converting PowerPoint files | Improvement |
| VIEWERNET-258 | Exception when rendering DWG file as image | Bug |
| VIEWERNET-2125 | Same result when rendering presentation without and with excluded font | Bug |
| VIEWERNET-2285 | Link represented as span when rendering PDF into HTML | Bug |
| VIEWERNET-2424 | File is corrupted or damaged exception when converting MPX file | Bug |
| VIEWERNET-2458 | Unable to load shared library 'gdi32.dll' or one of its dependencies exception when processing TEX files on Linux | Bug |

## Public API and Backward Incompatible Changes

### Behavior changes

*   Starting from 20.5 the CAD drawings are converted to SVG instead of PNG for better quality please refer to [How to convert CAD drawings to HTML](How%2Bto%2Bconvert%2BCAD%2Bdrawings%2Bto%2BHTML.html) article for more details.
