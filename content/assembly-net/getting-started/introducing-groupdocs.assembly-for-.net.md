---
id: introducing-groupdocs-assembly-for-net
url: assembly/net/introducing-groupdocs-assembly-for-net
title: Introducing GroupDocs.Assembly for .NET
weight: 1
description: ""
keywords: 
productName: GroupDocs.Assembly for .NET
hideChildren: False
---
<table class="sectionMacro" border="0" cellpadding="5" cellspacing="0" width="100%"><tbody><tr><td valign="top" width="50%"><div class="panel" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="panelHeader" style="border-bottom-width: 1px; background-color: rgb(176, 196, 222);"><b>Contents Summary</b></div><div class="panelContent"><style type="text/css">div.rbtoc1590388621998 { padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; }div.rbtoc1590388621998 ul { list-style-type: none; list-style-image: none; margin-left: 0px; }div.rbtoc1590388621998 li { margin-left: 0px; padding-left: 0px; }</style><div class="toc rbtoc1590388621998"><ul class="toc-indentation"><li><span class="TOCOutline">1</span> <a href="#IntroducingGroupDocs.Assemblyfor.NET-IntroductiontoGroupDocs.Assemblyfor.NET">Introduction to GroupDocs.Assembly for .NET</a><ul class="toc-indentation"><li><span class="TOCOutline">1.1</span> <a href="#IntroducingGroupDocs.Assemblyfor.NET-DocumentAutomationConcept">Document Automation Concept</a></li><li><span class="TOCOutline">1.2</span> <a href="#IntroducingGroupDocs.Assemblyfor.NET-ReportGenerationConcept">Report Generation Concept</a></li></ul></li><li><span class="TOCOutline">2</span> <a href="#IntroducingGroupDocs.Assemblyfor.NET-SupportedDocumentFormats">Supported Document Formats</a></li><li><span class="TOCOutline">3</span> <a href="#IntroducingGroupDocs.Assemblyfor.NET-SupportedOutputFileFormatsDependingonInputFileFormats">Supported Output File Formats Depending on Input File Formats</a></li><li><span class="TOCOutline">4</span> <a href="#IntroducingGroupDocs.Assemblyfor.NET-SupportedTemplateSyntax">Supported Template Syntax</a></li><li><span class="TOCOutline">5</span> <a href="#IntroducingGroupDocs.Assemblyfor.NET-SupportedDataSources">Supported Data Sources</a></li><li><span class="TOCOutline">6</span> <a href="#IntroducingGroupDocs.Assemblyfor.NET-TechnicalSupportChannels">Technical Support Channels</a><ul class="toc-indentation"><li><span class="TOCOutline">6.1</span> <a href="#IntroducingGroupDocs.Assemblyfor.NET-ProductSupportForums">Product Support Forums</a></li><li><span class="TOCOutline">6.2</span> <a href="#IntroducingGroupDocs.Assemblyfor.NET-SalesandLicenseRelatedTechnicalQueries">Sales and License Related Technical Queries</a></li></ul></li></ul></div></div></div></td><td valign="top">&nbsp;</td></tr></tbody></table>

## Introduction to GroupDocs.Assembly for .NET

GroupDocs.Assembly for .NET is a document automation and reports generation API designed to create custom documents from templates. This .NET reporting API intelligently assembles the given data with the defined template document and it is a **report generator** which generates an output document based on the data source, in the template's format as or in the specified output format. Since GroupDocs.Assembly for .NET can generate documents based on a data source, essentially it serves two purposes: Document Automation and Report Generation.

### Document Automation Concept

As per Wikipedia, Document Automation can be described as:

> **Document automation** (also known as **document assembly**) is the design of systems and [workflows](https://en.wikipedia.org/wiki/Workflow) that assist in the creation of [electronic documents](https://en.wikipedia.org/wiki/Electronic_document). These include logic-based systems that use segments of pre-existing text and/or data to assemble a new document. This process is increasingly used within certain industries to assemble legal documents, contracts and letters. Document automation systems can also be used to automate all conditional text, variable text, and data contained within a set of documents.
> 
> Automation systems allow companies to minimize data entry, reduce the time spent proof-reading, and reduce the risks associated with human error. Additional benefits include: time and financial savings due to decreased paper handling, document loading, storage, distribution, postage/shipping, faxes, telephone, labor and waste.

For more information, please visit: [https://en.wikipedia.org/wiki/Document\_automation](https://en.wikipedia.org/wiki/Document_automation)

### Report Generation Concept

As per Wikipedia, Report Generation can be described as:

> A **report generator** is a computer program whose purpose is to take data from a source such as a database, XML stream or a spreadsheet, and use it to produce a document in a format which satisfies a particular human readership.
> 
> Report generation functionality is almost always\[[citation needed](https://en.wikipedia.org/wiki/Wikipedia:Citation_needed)\] present in [database systems](https://en.wikipedia.org/wiki/Database_systems), where the source of the data is the database itself. It can also be argued that report generation is part of the purpose of a [spreadsheet](https://en.wikipedia.org/wiki/Spreadsheet). Standalone report generators may work with multiple data sources and export reports to different document formats.

For more information, please visit: [https://en.wikipedia.org/wiki/Report\_generator](https://en.wikipedia.org/wiki/Report_generator)

## Supported Document Formats

GroupDocs.Assembly for .NET is capable to recognize and load multiple document formats in memory and populate these templates with the assigned data source. Therefore, you can create your templates in any of the supported document formats. The initial version of GroupDocs.Assembly supports word processing documents including Microsoft Word documents, spreadsheet documents including Microsoft Excel Workbooks and presentation documents including Microsoft PowerPoint Presentations. The future releases of GroupDocs.Assembly will be supporting more document formats and the [supported document formats](Supported%2BDocument%2BFormats.html) section will be updated periodically whenever more document formats are supported in the future releases.

## Supported Output File Formats Depending on Input File Formats

The following table shows which output file formats are supported by GroupDocs.Assembly depending on input file formats:

| Input File Formats (from left to right) and Output File Formats (top down) | Word Processing (DOC, DOCX, DOCM, DOT, DOTX, DOTM, WordprocessingML, RTF, ODT, OTT) | Spreadsheet (XLS, XLSX, XLSM, XLTX, XLTM, XLSB, SpreadsheetML, ODS) | Presentation (PPT, PPTX, PPTM, PPS, PPSX, PPSM, POTX, POTM, ODP) | Email (EML, EMLX, MSG) | HTML and Plain Text |
| --- | --- | --- | --- | --- | --- |
| Word Processing (DOC, DOCX, DOCM, DOT, DOTX, DOTM, WordprocessingML, RTF, ODT, OTT) | Supported | Not Supported | Not Supported | Supported | Supported |
| Spreadsheet (XLS, XLSX, XLSM, XLTX, XLTM, XLSB, SpreadsheetML, ODS) | Not Supported | Supported | Not Supported | Not Supported | Not Supported |
| Presentation (PPT, PPTX, PPTM, PPS, PPSX, PPSM, POTX, POTM, ODP) | Not Supported | Not Supported | Supported | Not Supported | Not Supported |
| Email (EML, EMLX, MSG) | Not Supported | Not Supported | Not Supported | Supported | Not Supported |
| HTML, PDF, XPS, TIFF | Supported | Supported | Supported | Supported | Supported |
| MHTML | Supported | Supported | Not Supported | Supported | Supported |
| Plain Text, XAML, OpenXPS, EPUB, SVG, PS, PCL | Supported | Not Supported | Not Supported | Supported | Supported |

## Supported Template Syntax

Essentially, the GroupDocs.Assembly for .NET engine supports LINQ but it does not support the actual LINQ syntax. Instead, the engine supports the underlying C# syntax for LINQ queries which is actually shorter than LINQ. This basically means that the developers can use the familiar and well documented C# syntax to write data binding/traversal queries right in the document templates. As a result, developers can enjoy many benefits including short and concise reporting syntax and binding to any type of supported data source including business objects. For more information about the supported LINQ based syntax, please visit [Template Syntax](Template%2BSyntax%2B-%2BPart%2B1%2Bof%2B2.html). In future, [Mustache](https://mustache.github.io/mustache.5.html) template support is also planned.

## Supported Data Sources

GroupDocs.Assembly for .NET supports the following data sources:

*   Database
*   XML
*   OData
*   JSON
*   Custom .NET Objects

Furthermore, GroupDocs.Assembly for .NET support various Data Manipulation features. For more information, please visit [Data Sources](Features%2BOverview.html#FeaturesOverview-DataSources).

## Technical Support Channels

### Product Support Forums

The main channel of the Technical Support is [Product Support Forums](http://groupdocs.com/Community/Forums/Default.aspx). Post your question in the Forum and it will be answered within a few hours. Please try to report one issue per thread with all details required to reproduce the issue.

### Sales and License Related Technical Queries

For sales and License related technical queries please visit the [GroupDocs.Purcahse Froum](http://groupdocs.com/Community/forums/groupdocs.purchase/10/showforum.aspx). Please note that GroupDocs.Purchase is a private forum and will require you to sign up with [groupdocs.com](http://www.groupdocs.com) before you can view this forum.