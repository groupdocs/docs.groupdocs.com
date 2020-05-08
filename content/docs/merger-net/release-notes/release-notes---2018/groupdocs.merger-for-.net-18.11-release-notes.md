---
id: groupdocs-merger-for--net-18-11-release-notes
url: merger-net/groupdocs-merger-for--net-18-11-release-notes
title: GroupDocs.Merger for .NET 18.11 Release Notes
weight: 1
description: 
keywords: 
bookCollapseSection: true
productName: GroupDocs.Merger for .NET
hideChildren: False
---

# GroupDocs.Merger for .NET 18.11 Release Notes


This page contains release notes for GroupDocs.Merger for .NET 18.11

## Major Features

There are 3 new features in this regular monthly release. The most notable are:

*   Added Rotate method to rotate pages in document 
*   Added ChangeOrientation method to change orientation of pages in document
*   Added functionality to get all supported formats

## Full List of Issues Covering all Changes in this Release

Key

Summary

Category

MERGERNET-156

Implement RotatePages method

New Feature

MERGERNET-245

Implement ChangeOrientation method

New Feature

MERGERNET-259

Implement GetSupportedFormats method

New Feature

## Public API and Backward Incompatible Changes

This section lists public API changes that were introduced in GroupDocs.Merger for .NET 18.11. It includes not only new and obsoleted public methods, but also a description of any changes in the behavior behind the scenes in GroupDocs.Merger which may affect existing code. Any behavior introduced that could be seen as a regression and modifies existing behavior is especially important and is documented here.

### New method ChangeOrientation

New method ChangeOrientation has been added

public DocumentResult ChangeOrientation(Stream documentStream, OrientationOptions orientationOptions);

### New method GetSupportedFormats

New method GetSupportedFormats has been added

public Dictionary<string, FileFormat> GetSupportedFormats();

### New method RotatePages

New method RotatePages has been added

public DocumentResult RotatePages(Stream documentStream, RotateOptions rotateOptions);

### Obsolete class PagesOptions

Class PagesOptions is obsolete

\[Obsolete("Class is obsolete. Use option for method (for example, use SplitOptions for Split method).")\]
public class PagesOptions;

Methods where that class was used are obsolete as well

public DocumentResult RemovePages(Stream documentStream, PagesOptions options);
public MultiDocumentResult Split(Stream documentStream, PagesOptions pagesOptions);
public DocumentResult Trim(Stream documentStream, PagesOptions pagesOptions); 

New classes has been added

public class RemovePagesOptions;
public class SplitOptions;
public class TrimOptions; 

Method signatures has been added

public DocumentResult RemovePages(Stream documentStream, RemovePagesOptions removePagesOptions);
public MultiDocumentResult Split(Stream documentStream, SplitOptions splitOptions);
public DocumentResult Trim(Stream documentStream, TrimOptions trimOptions);

Usage

You have to initiate one of new classes with list of page numbers and use it as option for appropriate method

List<int> pages = new List<int>();
pages.Add(1);
pages.Add(3);
RemovePagesOptions pagesOptions = new RemovePagesOptions(fileFormat, password, pages);
 
DocumentResult streamResult = new DocumentHandler().RemovePages(documentExample, pagesOptions);

### Obsolete class RangeOptions

Class RangeOptions is obsolete

\[Obsolete("Class is obsolete. Use option for method (for example, use SplitOptions for Split method).")\]
public class RangeOptions;

Methods where that class was used are obsolete also

public DocumentResult RemovePages(Stream documentStream, RangeOptions options);
public MultiDocumentResult Split(Stream documentStream, RangeOptions rangeOptions);
DocumentResult Trim(Stream documentStream, RangeOptions rangeOptions);

New classes has been added

public class RemovePagesOptions;
public class SplitOptions;
public class TrimOptions; 

Method signatures has been added

public DocumentResult RemovePages(Stream documentStream, RemovePagesOptions removePagesOptions);
public MultiDocumentResult Split(Stream documentStream, SplitOptions splitOptions);
public DocumentResult Trim(Stream documentStream, TrimOptions trimOptions);

Usage

You have to initiate one of new classes with RangeMode enum and use it as option for appropriate method

RemovePagesOptions removePagesOptions = new RemovePagesOptions(fileFormat, password, 1, 5, RangeMode.AllPages);
DocumentResult streamResult = new DocumentHandler().RemovePages(documentExample, removePagesOptions);

