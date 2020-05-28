---
id: common-list-image-in-spreadsheet-document
url: assembly/java/common-list-image-in-spreadsheet-document
title: Common List Image in Spreadsheet Document
weight: 2
description: ""
keywords: 
productName: GroupDocs.Assembly for Java
hideChildren: False
---
<table class="sectionMacro" border="0" cellpadding="5" cellspacing="0" width="100%"><tbody><tr><td valign="top" width="50%"><div class="panel" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="panelHeader" style="border-bottom-width: 1px; background-color: rgb(176, 196, 222);"><b>Contents Summary</b></div><div class="panelContent"><style type="text/css">div.rbtoc1590607144890 { padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; }div.rbtoc1590607144890 ul { list-style-type: none; list-style-image: none; margin-left: 0px; }div.rbtoc1590607144890 li { margin-left: 0px; padding-left: 0px; }</style><div class="toc rbtoc1590607144890"><ul class="toc-indentation"><li><span class="TOCOutline">1</span> <a href="#CommonListImageinSpreadsheetDocument-CommonListinMicrosoftExcelDocument">Common List in Microsoft Excel Document</a><ul class="toc-indentation"><li><span class="TOCOutline">1.1</span> <a href="#CommonListImageinSpreadsheetDocument-CreatingaCommonList">Creating a Common List</a></li><li><span class="TOCOutline">1.2</span> <a href="#CommonListImageinSpreadsheetDocument-ReportingRequirement">Reporting Requirement</a></li><li><span class="TOCOutline">1.3</span> <a href="#CommonListImageinSpreadsheetDocument-AddingSyntaxtobeevaluatedbyGroupDocs.AssemblyEngine">Adding Syntax to be evaluated by GroupDocs.Assembly Engine</a></li><li><span class="TOCOutline">1.4</span> <a href="#CommonListImageinSpreadsheetDocument-DownloadTemplate">Download Template</a></li><li><span class="TOCOutline">1.5</span> <a href="#CommonListImageinSpreadsheetDocument-GeneratingTheReport">Generating The Report</a></li><li><span class="TOCOutline">1.6</span> <a href="#CommonListImageinSpreadsheetDocument-ODSTemplateandReportinApacheOpenOffice">ODS Template and Report in Apache OpenOffice</a></li></ul></li></ul></div></div></div></td><td valign="top" width="15%">&nbsp;</td><td valign="top" width="35%">&nbsp;</td></tr></tbody></table>

{{< alert style="info" >}}In this article, we will use GroupDocs.Assembly to generate a Common List Image report in Spreadsheet Document format.{{< /alert >}}{{< alert style="info" >}}The code uses some of the objects defined in The Business Layer.{{< /alert >}}

## Common List in Microsoft Excel Document

### Creating a Common List

Please follow below steps to create Common List Image in MS Excel 2013:

1.  Insert the desired shape to display image in it.
2.  Go to Insert Tab and select shape by clicking on Shape Icon.
3.  Save your Document.

### Reporting Requirement

As a report developer, you are required to represent the following key requirements:

*   Report must show multiple managers' picture and name.
*   Report must be generated in the Spreadsheet Document.

### Adding Syntax to be evaluated by GroupDocs.Assembly Engine

<table class="MsoNormalTable" border="0" cellspacing="0" cellpadding="0" width="293" style="width: 219.75pt; border-collapse: collapse;"><tbody><tr style="height: 15pt;"><td width="293" nowrap="" colspan="4" style="width: 219.75pt; padding-top: 0in; padding-right: 5.4pt; padding-bottom: 0in; padding-left: 5.4pt; height: 15pt;"><p class="MsoNormal" style="margin-bottom: 0.0001pt; line-height: normal;"><span style="color: black;">&lt;&lt;foreach [in getManagers()]&gt;&gt;</span></p></td></tr><tr style="height: 15pt;"><td width="149" nowrap="" valign="bottom" style="width: 111.55pt; padding-top: 0in; padding-right: 5.4pt; padding-bottom: 0in; padding-left: 5.4pt; height: 15pt;"><p class="MsoNormal" style="margin-bottom: 0.0001pt; line-height: normal;"><span style="position: absolute; z-index: 251658240; margin-left: 0px; margin-top: 0px; width: 194px; height: 142px;"><img width="194" height="142" src="" alt="<<image [getPhoto()]>>"></span></p><table class="MsoNormalTable" border="0" cellspacing="0" cellpadding="0"><tbody><tr style="height: 15pt;"><td width="64" nowrap="" valign="bottom" style="width: 48pt; padding-top: 0in; padding-right: 0in; padding-bottom: 0in; padding-left: 0in; height: 15pt;"></td></tr></tbody></table></td><td width="1" nowrap="" valign="bottom" style="width: 0.7pt; padding-top: 0in; padding-right: 5.4pt; padding-bottom: 0in; padding-left: 5.4pt; height: 15pt;"></td><td width="1" nowrap="" valign="bottom" style="width: 0.7pt; padding-top: 0in; padding-right: 5.4pt; padding-bottom: 0in; padding-left: 5.4pt; height: 15pt;"></td><td width="142" nowrap="" valign="bottom" style="width: 106.8pt; padding-top: 0in; padding-right: 5.4pt; padding-bottom: 0in; padding-left: 5.4pt; height: 15pt;"></td></tr><tr style="height: 15pt;"><td width="149" nowrap="" valign="bottom" style="width: 111.55pt; padding-top: 0in; padding-right: 5.4pt; padding-bottom: 0in; padding-left: 5.4pt; height: 15pt;"></td><td width="1" nowrap="" valign="bottom" style="width: 0.7pt; padding-top: 0in; padding-right: 5.4pt; padding-bottom: 0in; padding-left: 5.4pt; height: 15pt;"></td><td width="1" nowrap="" valign="bottom" style="width: 0.7pt; padding-top: 0in; padding-right: 5.4pt; padding-bottom: 0in; padding-left: 5.4pt; height: 15pt;"></td><td width="142" nowrap="" valign="bottom" style="width: 106.8pt; padding-top: 0in; padding-right: 5.4pt; padding-bottom: 0in; padding-left: 5.4pt; height: 15pt;"></td></tr><tr style="height: 15pt;"><td width="149" nowrap="" valign="bottom" style="width: 111.55pt; padding-top: 0in; padding-right: 5.4pt; padding-bottom: 0in; padding-left: 5.4pt; height: 15pt;"></td><td width="1" nowrap="" valign="bottom" style="width: 0.7pt; padding-top: 0in; padding-right: 5.4pt; padding-bottom: 0in; padding-left: 5.4pt; height: 15pt;"></td><td width="1" nowrap="" valign="bottom" style="width: 0.7pt; padding-top: 0in; padding-right: 5.4pt; padding-bottom: 0in; padding-left: 5.4pt; height: 15pt;"></td><td width="142" nowrap="" valign="bottom" style="width: 106.8pt; padding-top: 0in; padding-right: 5.4pt; padding-bottom: 0in; padding-left: 5.4pt; height: 15pt;"></td></tr><tr style="height: 15pt;"><td width="149" nowrap="" valign="bottom" style="width: 111.55pt; padding-top: 0in; padding-right: 5.4pt; padding-bottom: 0in; padding-left: 5.4pt; height: 15pt;"></td><td width="1" nowrap="" valign="bottom" style="width: 0.7pt; padding-top: 0in; padding-right: 5.4pt; padding-bottom: 0in; padding-left: 5.4pt; height: 15pt;"></td><td width="1" nowrap="" valign="bottom" style="width: 0.7pt; padding-top: 0in; padding-right: 5.4pt; padding-bottom: 0in; padding-left: 5.4pt; height: 15pt;"></td><td width="142" nowrap="" valign="bottom" style="width: 106.8pt; padding-top: 0in; padding-right: 5.4pt; padding-bottom: 0in; padding-left: 5.4pt; height: 15pt;"></td></tr><tr style="height: 15pt;"><td width="149" nowrap="" valign="bottom" style="width: 111.55pt; padding-top: 0in; padding-right: 5.4pt; padding-bottom: 0in; padding-left: 5.4pt; height: 15pt;"></td><td width="1" nowrap="" valign="bottom" style="width: 0.7pt; padding-top: 0in; padding-right: 5.4pt; padding-bottom: 0in; padding-left: 5.4pt; height: 15pt;"></td><td width="1" nowrap="" valign="bottom" style="width: 0.7pt; padding-top: 0in; padding-right: 5.4pt; padding-bottom: 0in; padding-left: 5.4pt; height: 15pt;"></td><td width="142" nowrap="" valign="bottom" style="width: 106.8pt; padding-top: 0in; padding-right: 5.4pt; padding-bottom: 0in; padding-left: 5.4pt; height: 15pt;"></td></tr><tr style="height: 15pt;"><td width="149" nowrap="" valign="bottom" style="width: 111.55pt; padding-top: 0in; padding-right: 5.4pt; padding-bottom: 0in; padding-left: 5.4pt; height: 15pt;"></td><td width="1" nowrap="" valign="bottom" style="width: 0.7pt; padding-top: 0in; padding-right: 5.4pt; padding-bottom: 0in; padding-left: 5.4pt; height: 15pt;"></td><td width="1" nowrap="" valign="bottom" style="width: 0.7pt; padding-top: 0in; padding-right: 5.4pt; padding-bottom: 0in; padding-left: 5.4pt; height: 15pt;"></td><td width="142" nowrap="" valign="bottom" style="width: 106.8pt; padding-top: 0in; padding-right: 5.4pt; padding-bottom: 0in; padding-left: 5.4pt; height: 15pt;"></td></tr><tr style="height: 15pt;"><td width="149" nowrap="" valign="bottom" style="width: 111.55pt; padding-top: 0in; padding-right: 5.4pt; padding-bottom: 0in; padding-left: 5.4pt; height: 15pt;"></td><td width="1" nowrap="" valign="bottom" style="width: 0.7pt; padding-top: 0in; padding-right: 5.4pt; padding-bottom: 0in; padding-left: 5.4pt; height: 15pt;"></td><td width="1" nowrap="" valign="bottom" style="width: 0.7pt; padding-top: 0in; padding-right: 5.4pt; padding-bottom: 0in; padding-left: 5.4pt; height: 15pt;"></td><td width="142" nowrap="" valign="bottom" style="width: 106.8pt; padding-top: 0in; padding-right: 5.4pt; padding-bottom: 0in; padding-left: 5.4pt; height: 15pt;"></td></tr><tr style="height: 15pt;"><td width="149" nowrap="" valign="bottom" style="width: 111.55pt; padding-top: 0in; padding-right: 5.4pt; padding-bottom: 0in; padding-left: 5.4pt; height: 15pt;"></td><td width="1" nowrap="" valign="bottom" style="width: 0.7pt; padding-top: 0in; padding-right: 5.4pt; padding-bottom: 0in; padding-left: 5.4pt; height: 15pt;"></td><td width="1" nowrap="" valign="bottom" style="width: 0.7pt; padding-top: 0in; padding-right: 5.4pt; padding-bottom: 0in; padding-left: 5.4pt; height: 15pt;"></td><td width="142" nowrap="" valign="bottom" style="width: 106.8pt; padding-top: 0in; padding-right: 5.4pt; padding-bottom: 0in; padding-left: 5.4pt; height: 15pt;"></td></tr><tr style="height: 21pt;"><td width="151" nowrap="" colspan="3" style="width: 112.95pt; padding-top: 0in; padding-right: 5.4pt; padding-bottom: 0in; padding-left: 5.4pt; height: 21pt;"><p class="MsoNormal" style="margin-bottom: 0.0001pt; line-height: normal;"><b><span style="font-size: 16pt; color: black;">&lt;&lt;[getName()]&gt;&gt;</span></b></p></td><td width="142" nowrap="" style="width: 106.8pt; padding-top: 0in; padding-right: 5.4pt; padding-bottom: 0in; padding-left: 5.4pt; height: 21pt;"><p class="MsoNormal" style="margin-bottom: 0.0001pt; line-height: normal;"><span style="color: black;">&lt;&lt;/foreach&gt;&gt;</span></p></td></tr><tr style="height: 15pt;"><td width="149" nowrap="" style="width: 111.55pt; padding-top: 0in; padding-right: 5.4pt; padding-bottom: 0in; padding-left: 5.4pt; height: 15pt;"></td><td width="1" nowrap="" valign="bottom" style="width: 0.7pt; padding-top: 0in; padding-right: 5.4pt; padding-bottom: 0in; padding-left: 5.4pt; height: 15pt;"></td><td width="1" nowrap="" valign="bottom" style="width: 0.7pt; padding-top: 0in; padding-right: 5.4pt; padding-bottom: 0in; padding-left: 5.4pt; height: 15pt;"></td><td width="142" nowrap="" valign="bottom" style="width: 106.8pt; padding-top: 0in; padding-right: 5.4pt; padding-bottom: 0in; padding-left: 5.4pt; height: 15pt;"></td></tr></tbody></table>

### Download Template

Please download the sample Common List document we created in this article:

*   [Common List.xlsx](https://github.com/groupdocs-assembly/GroupDocs.Assembly-for-Java/blob/master/Examples/GroupDocs.Assembly.Examples.Java/Data/Storage/Spreadsheet%20Templates/Common%20List.xlsx?raw=true)

### Generating The Report

<table class="highlight tab-size js-file-line-container" data-tab-size="8" data-paste-markdown-skip=""><tbody><tr><td id="file-examples-groupdocs-assembly-examples-java-src-main-java-com-groupdocs-assembly-examples-generatereport-commonlistspreadsheet-java-L1" class="blob-num js-line-number" data-line-number="1"></td><td id="file-examples-groupdocs-assembly-examples-java-src-main-java-com-groupdocs-assembly-examples-generatereport-commonlistspreadsheet-java-LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> For complete examples and data files, please go to https://github.com/groupdocs-assembly/GroupDocs.Assembly-for-Java</span></td></tr><tr><td id="file-examples-groupdocs-assembly-examples-java-src-main-java-com-groupdocs-assembly-examples-generatereport-commonlistspreadsheet-java-L2" class="blob-num js-line-number" data-line-number="2"></td><td id="file-examples-groupdocs-assembly-examples-java-src-main-java-com-groupdocs-assembly-examples-generatereport-commonlistspreadsheet-java-LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">String</span> srcDocument <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">"</span>/Spreadsheet Templates/Common List.xlsx<span class="pl-pds">"</span></span>;</td></tr><tr><td id="file-examples-groupdocs-assembly-examples-java-src-main-java-com-groupdocs-assembly-examples-generatereport-commonlistspreadsheet-java-L3" class="blob-num js-line-number" data-line-number="3"></td><td id="file-examples-groupdocs-assembly-examples-java-src-main-java-com-groupdocs-assembly-examples-generatereport-commonlistspreadsheet-java-LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">String</span> docReport <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">"</span>/Spreadsheet Reports/Common List_report.xlsx<span class="pl-pds">"</span></span>;</td></tr><tr><td id="file-examples-groupdocs-assembly-examples-java-src-main-java-com-groupdocs-assembly-examples-generatereport-commonlistspreadsheet-java-L4" class="blob-num js-line-number" data-line-number="4"></td><td id="file-examples-groupdocs-assembly-examples-java-src-main-java-com-groupdocs-assembly-examples-generatereport-commonlistspreadsheet-java-LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-k">try</span> {</td></tr><tr><td id="file-examples-groupdocs-assembly-examples-java-src-main-java-com-groupdocs-assembly-examples-generatereport-commonlistspreadsheet-java-L5" class="blob-num js-line-number" data-line-number="5"></td><td id="file-examples-groupdocs-assembly-examples-java-src-main-java-com-groupdocs-assembly-examples-generatereport-commonlistspreadsheet-java-LC5" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">DocumentAssembler</span> assembler <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-smi">DocumentAssembler</span>();</td></tr><tr><td id="file-examples-groupdocs-assembly-examples-java-src-main-java-com-groupdocs-assembly-examples-generatereport-commonlistspreadsheet-java-L6" class="blob-num js-line-number" data-line-number="6"></td><td id="file-examples-groupdocs-assembly-examples-java-src-main-java-com-groupdocs-assembly-examples-generatereport-commonlistspreadsheet-java-LC6" class="blob-code blob-code-inner js-file-line">assembler<span class="pl-k">.</span>assembleDocument(<span class="pl-smi">CommonUtilities</span><span class="pl-k">.</span>getTestDataPath(srcDocument),</td></tr><tr><td id="file-examples-groupdocs-assembly-examples-java-src-main-java-com-groupdocs-assembly-examples-generatereport-commonlistspreadsheet-java-L7" class="blob-num js-line-number" data-line-number="7"></td><td id="file-examples-groupdocs-assembly-examples-java-src-main-java-com-groupdocs-assembly-examples-generatereport-commonlistspreadsheet-java-LC7" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">CommonUtilities</span><span class="pl-k">.</span>getTestOutPath(docReport),<span class="pl-k">new</span> <span class="pl-smi">DataSourceInfo</span>( <span class="pl-k">new</span> <span class="pl-smi">DataStorage</span>(), <span class="pl-c1">null</span>));</td></tr><tr><td id="file-examples-groupdocs-assembly-examples-java-src-main-java-com-groupdocs-assembly-examples-generatereport-commonlistspreadsheet-java-L8" class="blob-num js-line-number" data-line-number="8"></td><td id="file-examples-groupdocs-assembly-examples-java-src-main-java-com-groupdocs-assembly-examples-generatereport-commonlistspreadsheet-java-LC8" class="blob-code blob-code-inner js-file-line">} <span class="pl-k">catch</span> (<span class="pl-smi">Exception</span> exp) {</td></tr><tr><td id="file-examples-groupdocs-assembly-examples-java-src-main-java-com-groupdocs-assembly-examples-generatereport-commonlistspreadsheet-java-L9" class="blob-num js-line-number" data-line-number="9"></td><td id="file-examples-groupdocs-assembly-examples-java-src-main-java-com-groupdocs-assembly-examples-generatereport-commonlistspreadsheet-java-LC9" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">System</span><span class="pl-k">.</span>out<span class="pl-k">.</span>println(<span class="pl-s"><span class="pl-pds">"</span>Exception: <span class="pl-pds">"</span></span> <span class="pl-k">+</span> exp<span class="pl-k">.</span>getMessage());</td></tr><tr><td id="file-examples-groupdocs-assembly-examples-java-src-main-java-com-groupdocs-assembly-examples-generatereport-commonlistspreadsheet-java-L10" class="blob-num js-line-number" data-line-number="10"></td><td id="file-examples-groupdocs-assembly-examples-java-src-main-java-com-groupdocs-assembly-examples-generatereport-commonlistspreadsheet-java-LC10" class="blob-code blob-code-inner js-file-line">}</td></tr></tbody></table>

[view raw](https://gist.github.com/GroupDocsGists/aaa7f940daf32fbedc127e02ed97f261/raw/94e469cd0ec230b627bf5f488dfca6cbb4f716ef/Examples-GroupDocs.Assembly.Examples.Java-src-main-java-com-groupdocs-assembly-examples-GenerateReport-commonlistspreadsheet.java) [Examples-GroupDocs.Assembly.Examples.Java-src-main-java-com-groupdocs-assembly-examples-GenerateReport-commonlistspreadsheet.java](https://gist.github.com/GroupDocsGists/aaa7f940daf32fbedc127e02ed97f261#file-examples-groupdocs-assembly-examples-java-src-main-java-com-groupdocs-assembly-examples-generatereport-commonlistspreadsheet-java) hosted with ❤ by [GitHub](https://github.com)

### ODS Template and Report in Apache OpenOffice

In order to check compatibility of ODS between Microsoft Office 2010 and Apache OpenOffice 4.1.2, we performed below tests:

*   We opened the ODS template created through Microsoft Office 2010 in Apache OpenOffice 4.1.2. The template opened successfully in Apache OpenOffice without any issues or formatting losses.

*   We opened the ODS report generated through GroupDocs.Assembly in Apache OpenOffice 4.1.2. The report opened successfully in Apache OpenOffice without any issues or formatting losses.