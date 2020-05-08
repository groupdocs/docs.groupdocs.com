---
id: groupdocs-viewer-for--net-20-4-release-notes
url: viewer-net/groupdocs-viewer-for--net-20-4-release-notes
title: GroupDocs.Viewer for .NET 20.4 Release Notes
weight: 4
description: 
keywords: 
bookCollapseSection: true
productName: GroupDocs.Viewer for .NET
hideChildren: False
---

# GroupDocs.Viewer for .NET 20.4 Release Notes


This page contains release notes for GroupDocs.Viewer for .NET 20.4

## Major Features

There are 10 features, improvements, and bug-fixes in this release, most notable are:

*   [Plotter Document (.plt, .hpg)](https://wiki.fileformat.com/cad/plt/) viewing support added, see [How to view PLT files](How%2Bto%2Bview%2BPLT%2Bfiles.html) for more details;
*   Viewing specific [Design Web Format File (.dwf)](https://wiki.fileformat.com/cad/dwf) layers is now supported, see [How to view DWF file layers](How%2Bto%2Bview%2BDWF%2Bfile%2Blayers.html) for more details;
*   Added option to set background color when viewing CAD drawings, see [How to set background color when converting CAD Drawings](How%2Bto%2Bset%2Bbackground%2Bcolor%2Bwhen%2Bconverting%2BCAD%2BDrawings.html) for more details;
*   Added option to show spreadsheet column headings and row numbers, see [How to show spreadsheet column and row headings](How%2Bto%2Bshow%2Bspreadsheet%2Bcolumn%2Band%2Brow%2Bheadings.html) for more details.  
    *NOTE: This feature is supported when rendering worksheets into a single page when *SpreadsheetOptions *is set to* SpreadsheetOptions.ForOnePagePerSheet().**

## Full List of Issues Covering all Changes in this Release

Key

Summary

Category

VIEWERNET-18

Add Plotter Document (.plt, .hpg) file format support

Feature

VIEWERNET-2222

Show spreadsheet column headings and row numbers

Feature

VIEWERNET-2392

Set background color when viewing CAD Drawings

Feature

VIEWERNET-316

Support viewing Design Web Format File (.dwf) layers

Improvement

VIEWERNET-2387

Display Inbox folder by default when viewing personal storage PST/OST files

Improvement

VIEWERNET-2180

Drawing objects are missing when rendering Word document as HTML

Bug

VIEWERNET-2317

Docx to Html conversion issue, unit degree is missing in resultant file

Bug

VIEWERNET-2322

Japanese Space is showing as lines

Bug

VIEWERNET-2325

PDF with watermark to HTML rendering issue

Bug

VIEWERNET-2344

PPTX-file with RTL text inside renders incorrectly.

Bug

## Public API and Backward Incompatible Changes

### Behavior changes

*   In this version we've improved viewing of Presonal Storage [OST](https://wiki.fileformat.com/email/ost/)/[PST](https://wiki.fileformat.com/email/pst/) files and as a result, the behavior changed.  
    Now when viewing personal storage OST /PST files the **Inbox** folder is selected and displayed by default as it shown on the screenshot below.

![](https://wiki.lisbon.dynabic.com/download/attachments/31916044/image2020-4-10%2018%3A23%3A9.png?version=1&modificationDate=1586524990000&api=v2)

### Changes in the public API 

*   Added new property to **[GroupDocs.Viewer.Options.CadOptions](https://apireference.groupdocs.com/net/viewer/groupdocs.viewer.options/cadoptions)** class

/// <summary>
/// Image background color
/// </summary>
public Color BackgroundColor { get; set; }

*   Added new property to **[GroupDocs.Viewer.Options.SpreadsheetOptions](https://apireference.groupdocs.com/net/viewer/groupdocs.viewer.options/spreadsheetoptions)** class

/// <summary>
/// Enables headings rendering.
/// </summary>
public bool RenderHeadings { get; set; }

  

  

