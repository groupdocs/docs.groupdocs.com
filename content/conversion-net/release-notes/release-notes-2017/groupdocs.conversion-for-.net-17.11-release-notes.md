---
id: groupdocs-conversion-for-net-17-11-release-notes
url: conversion/net/groupdocs-conversion-for-net-17-11-release-notes
title: GroupDocs.Conversion for .NET 17.11 Release Notes
weight: 2
description: ""
keywords: 
productName: GroupDocs.Conversion for .NET
hideChildren: False
---
{{< alert style="info" >}}This page contains release notes for GroupDocs.Conversion for .NET 17.11{{< /alert >}}

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

<table class="confluenceTable"><tbody><tr><td class="confluenceTd"><p><strong>Key</strong></p></td><td class="confluenceTd"><p><strong>Summary</strong></p></td><td class="confluenceTd"><p><strong>Category</strong></p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-2183</p></td><td class="confluenceTd"><p>Implement conversion from/to POTX and POTM</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-2209</p></td><td class="confluenceTd"><p>Implement conversion from/to PPTM and PPSM</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-2218</p></td><td class="confluenceTd"><p>Implement conversion from/to XLTX and XLTM</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-2206</p></td><td class="confluenceTd"><p>Check for unsupported Excel 95 XLS file format and throw an exception</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-2225</p></td><td class="confluenceTd"><p>Cells to SVG conversion improvement</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-2235</p></td><td class="confluenceTd"><p>Diagram to SVG conversion improvement</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-2245</p></td><td class="confluenceTd"><p>Set custom font directories</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-2180</p></td><td class="confluenceTd"><p>Conversion for Doc with macro to Docx failed</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-2103</p></td><td class="confluenceTd"><p>System.ArgumentException when converting Mobi to Ppt or Pps</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-2173</p></td><td class="confluenceTd"><p>Conversion of specific pptx to jpg results wrong output</p></td><td class="confluenceTd"><p>Bug</p></td></tr></tbody></table>

## Public API and Backward Incompatible Changes

{{< alert style="info" >}}This section lists public API changes that were introduced in GroupDocs.Conversion for .NET 17.11. It includes not only new and obsoleted public methods, but also a description of any changes in the behavior behind the scenes in GroupDocs.Conversion which may affect existing code. Any behavior introduced that could be seen as a regression and modifies existing behavior is especially important and is documented here.{{< /alert >}}

### Introduced new property

```csharp
public List<string> FontDirectories { get; }
```

### Usage

{{< alert style="info" >}}var config = new ConversionConfig();config.FontDirectories.Add(@"c:\custom-fonts");{{< /alert >}}
