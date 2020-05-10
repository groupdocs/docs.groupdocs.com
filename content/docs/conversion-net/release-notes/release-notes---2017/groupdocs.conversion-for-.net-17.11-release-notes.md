---
id: groupdocs-conversion-for--net-17-11-release-notes
url: conversion-net/groupdocs-conversion-for--net-17-11-release-notes
title: GroupDocs.Conversion for .NET 17.11 Release Notes
weight: 2
description: 
keywords: 
bookCollapseSection: true
productName: GroupDocs.Conversion for .NET
hideChildren: False
---

# GroupDocs.Conversion for .NET 17.11 Release Notes


This page contains release notes for GroupDocs.Conversion for .NET 17.11

## Major Features

There are 5+ new features, improvements and fixes in this regular monthly release. The most notable are:

*   Cells to SVG conversion improvement
*   Diagram to SVG conversion improvement
*   Detecting unsupported Excel 95 format and throw meaningful exception
*   Conversion from/to POTX and POTM
*   Conversion from/to PPTM and PPSM
*   Conversion from/to XLTX and XLTM
*   3 bugs fixed

## Full List of Issues Covering all Changes in this Release

**Key**

**Summary**

**Category**

CONVERSIONNET-2183

Implement conversion from/to POTX and POTM

New Feature

CONVERSIONNET-2209

Implement conversion from/to PPTM and PPSM

New Feature

CONVERSIONNET-2218

Implement conversion from/to XLTX and XLTM

New Feature

CONVERSIONNET-2206

Check for unsupported Excel 95 XLS file format and throw an exception

Improvement

CONVERSIONNET-2225

Cells to SVG conversion improvement

Improvement

CONVERSIONNET-2235

Diagram to SVG conversion improvement

Improvement

CONVERSIONNET-2245

Set custom font directories

Improvement

CONVERSIONNET-2180

Conversion for Doc with macro to Docx failed

Bug

CONVERSIONNET-2103

System.ArgumentException when converting Mobi to Ppt or Pps

Bug

CONVERSIONNET-2173

Conversion of specific pptx to jpg results wrong output

Bug

## Public API and Backward Incompatible Changes

This section lists public API changes that were introduced in GroupDocs.Conversion for .NET 17.11. It includes not only new and obsoleted public methods, but also a description of any changes in the behavior behind the scenes in GroupDocs.Conversion which may affect existing code. Any behavior introduced that could be seen as a regression and modifies existing behavior is especially important and is documented here.

### Introduced new property

public List<string> FontDirectories { get; }

### Usage

`var config =` `new` `ConversionConfig();`

`config.FontDirectories.Add(``@"c:\custom-fonts"``);`
