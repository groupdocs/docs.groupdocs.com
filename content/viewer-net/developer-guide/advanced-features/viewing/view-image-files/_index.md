---
id: view-image-files
url: viewer/net/view-image-files
title: View Image Files
weight: 19
description: "This article contains use-cases of viewing image files with GroupDocs.Viewer within your .NET applications."
keywords: 
productName: GroupDocs.Viewer for .NET
hideChildren: False
---
## Overview

For today there a lot of image files formats that contain pixel bit map with color(or black and white) values, some of them you can find in cameras (like JPEG, CR2) or in FAXes/scanners (TIF, TIFF). Some formats use image compression (like JPEG), for some formats use it optional (TIF/TIFF).

## Supported Image Formats

The following image formats are supported by the GroupDocs.Viewer for .NET. 

Auto Detection means that GroupDocs.Viewer for .NET can determine the type of the image file by reading the information in the file header.

| Format | File Extension | Auto Detection |
| --- | --- | --- |
| [Bitmap Picture (BMP)](https://wiki.fileformat.com/image/bmp/) | [.bmp](https://wiki.fileformat.com/image/bmp/) | Yes |
| [Computer Graphics Metafile](https://wiki.fileformat.com/page-description-language/cgm/) | [.cgm](https://wiki.fileformat.com/page-description-language/cgm/) | Yes |
| [CorelDraw Vector Graphic Drawing (CDR)](https://wiki.fileformat.com/image/cdr/)[](https://wiki.fileformat.com/image/cdr/) | [.cdr](https://wiki.fileformat.com/image/cdr/) | Yes |
| [Digital Imaging and Communications in Medicine (DICOM)](https://wiki.fileformat.com/image/dicom/) | [.dcm](https://wiki.fileformat.com/image/dcm/) | Yes |
| [Deja Vu (DjVu)](https://wiki.fileformat.com/image/djvu/) | [.djvu](https://wiki.fileformat.com/image/djvu/) | Yes |
| [Digital Negative Specification](https://wiki.fileformat.com/image/dng/) | .[dng](https://wiki.fileformat.com/image/dng/) | Yes |
| [Device independent bitmap](https://wiki.fileformat.com/image/dib/) | [.dib](https://wiki.fileformat.com/image/dib/) | Yes |
| [Windows Enhanced Metafile (EMF)](https://wiki.fileformat.com/image/emf/) | .[emf](https://wiki.fileformat.com/image/emf/) | Yes |
| [Encapsulated PostScript](https://wiki.fileformat.com/page-description-language/eps/) | [.eps](https://wiki.fileformat.com/page-description-language/eps/) | Yes |
| [Graphics Interchange Format (GIF)](https://wiki.fileformat.com/image/gif/) | [.gif](https://wiki.fileformat.com/image/gif/) | Yes |
| [Windows Icon](https://wiki.fileformat.com/image/ico/) | [.ico](https://wiki.fileformat.com/image/ico/) | Yes |
| [JPEG 2000 Core Image File](https://wiki.fileformat.com/image/jp2/) | [.jp2](https://wiki.fileformat.com/image/jp2/) | Yes |
| [JPEG 2000 Image File](https://fileinfo.com/extension/jpf) | [.jpf](https://fileinfo.com/extension/jpf) | Yes |
| [JPEG 2000 Image File](https://fileinfo.com/extension/jpx) | [.jpx](https://fileinfo.com/extension/jpx) | Yes |
| [JPEG 2000 Image File](https://filext.com/file-extension/JPM) | [.jpm](https://filext.com/file-extension/JPM) | Yes |
| [JPEG 2000 Code Stream](https://fileinfo.com/extension/j2c) | [.j2c](https://fileinfo.com/extension/j2c) | Yes |
| [JPEG 2000 Code Stream](https://fileinfo.com/extension/j2k) | [.j2k](https://fileinfo.com/extension/j2k) | Yes |
| [JPEG 2000 Code Stream](https://fileinfo.com/extension/j2c) | [.jpc](https://wiki.fileformat.com/image/jpc/) | Yes |
| [Joint Photographic Experts Group (JPEG)](https://wiki.fileformat.com/image/jpeg/) | [.jpg, .jpeg](https://wiki.fileformat.com/image/jpeg/) | Yes |
| [Open Document Graphic (ODG)](https://wiki.fileformat.com/image/odg/) | [.odg](https://wiki.fileformat.com/image/odg/) | Yes |
| [Printer Command Language (PCL)](https://wiki.fileformat.com/page-description-language/pcl/) | [.pcl](https://wiki.fileformat.com/page-description-language/pcl/) | Yes |
| [Portable Network Graphics (PNG)](https://wiki.fileformat.com/image/png/) | [.png](https://wiki.fileformat.com/image/png/) | Yes |
| [PostScript (PS)](https://wiki.fileformat.com/page-description-language/ps/) | [.ps](https://wiki.fileformat.com/page-description-language/ps/)[](https://wiki.fileformat.com/image/ps/) | Yes |
| [Adobe Photoshop Document (PSD)](https://wiki.fileformat.com/image/psd/) | [.psd](https://wiki.fileformat.com/image/psd/) | Yes |
| [Scalable Vector Graphics (SVG)](https://wiki.fileformat.com/page-description-language/svg/) | [.svg](https://wiki.fileformat.com/page-description-language/svg/)[](https://wiki.fileformat.com/image/svg/) | Yes |
| [Tagged Image File Format (TIFF)](https://wiki.fileformat.com/image/tiff/) | [.tif, .tiff](https://wiki.fileformat.com/image/tiff/) | Yes |
| [WebP Image](https://wiki.fileformat.com/image/webp/) | [.webp](https://wiki.fileformat.com/image/webp/) | Yes |
| [Windows Metafile (WMF)](https://wiki.fileformat.com/image/wmf/) | [.wmf](https://wiki.fileformat.com/image/wmf/) | Yes |

## In this section

The articles given in this section describes the usage of GroupDocs.Viewer to convert Image formats with different available options.
