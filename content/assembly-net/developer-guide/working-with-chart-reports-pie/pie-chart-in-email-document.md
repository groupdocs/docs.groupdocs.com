---
id: pie-chart-in-email-document
url: assembly/net/pie-chart-in-email-document
title: Pie Chart in Email Document
weight: 4
description: ""
keywords: 
productName: GroupDocs.Assembly for .NET
hideChildren: False
---
{{< alert style="info" >}}In this article, we will use GroupDocs.Assembly to generate a Pie Chart report in Presentation Document format.{{< /alert >}}

<table class="sectionMacro" border="0" cellpadding="5" cellspacing="0" width="100%"><tbody><tr><td valign="top" width="50%"><div class="panel" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="panelHeader" style="border-bottom-width: 1px; background-color: rgb(176, 196, 222);"><b>Contents Summary</b></div><div class="panelContent"><style type="text/css">div.rbtoc1590388623595 { padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; }div.rbtoc1590388623595 ul { list-style-type: none; list-style-image: none; margin-left: 0px; }div.rbtoc1590388623595 li { margin-left: 0px; padding-left: 0px; }</style><div class="toc rbtoc1590388623595"><ul class="toc-indentation"><li><span class="TOCOutline">1</span> <a href="#PieChartinEmailDocument-PieChartinEmailDocument">Pie Chart in Email Document</a><ul class="toc-indentation"><li><span class="TOCOutline">1.1</span> <a href="#PieChartinEmailDocument-CreatingaPieChart">Creating a Pie Chart</a></li><li><span class="TOCOutline">1.2</span> <a href="#PieChartinEmailDocument-ReportingRequirement">Reporting Requirement</a></li><li><span class="TOCOutline">1.3</span> <a href="#PieChartinEmailDocument-AddingSyntaxtobeevaluatedbyGroupDocs.AssemblyEngine">Adding Syntax to be evaluated by GroupDocs.Assembly Engine</a><ul class="toc-indentation"><li><span class="TOCOutline">1.3.1</span> <a href="#PieChartinEmailDocument-ChartTitle">Chart Title</a></li><li><span class="TOCOutline">1.3.2</span> <a href="#PieChartinEmailDocument-ChartData(Excel)">Chart Data (Excel)</a></li></ul></li><li><span class="TOCOutline">1.4</span> <a href="#PieChartinEmailDocument-GeneratingTheReport">Generating The Report</a></li></ul></li></ul></div></div></div></td><td valign="top" width="15%">&nbsp;</td><td valign="top" width="35%">&nbsp;</td></tr></tbody></table>

{{< alert style="info" >}}The code uses some of the objects defined in The Business Layer.{{< /alert >}}{{< alert style="info" >}}This feature is supported by version 17.8.0 or greater.{{< /alert >}}

## Pie Chart in Email Document

### Creating a Pie Chart

Please follow below steps to create Pie Chart in MS Outlook 2013:

1.  Create a new Email.
2.  Click the "Insert" tab, and then click "Chart" in the illustrations group to open the "Insert Chart" dialog box.
3.  Select "Pie".
4.  Preview "Pie" and press OK to insert the chart and Worksheet template to your email.
5.  Edit the Worksheet with your data to update the chart.

### Reporting Requirement

As a report developer, you are required to share managers' contract prices dynamically with the following key requirements:

*   The report must be in .eml or .msg format.
*   It must add email recipient, CSS and subject of the email.
*   The report must show information on a Pie Chart.
*   It must indicate customer name with value (price of the order).

### Adding Syntax to be evaluated by GroupDocs.Assembly Engine

##### Chart Title

```csharp
Total Order Price<<foreach [in
customers]>><<x [CustomerName]>>

```

##### Chart Data (Excel)

<table cellspacing="0" cellpadding="0" style="border-collapse: collapse; margin-left: 0pt;"><tbody><tr style="height: 15pt;"><td style="border-bottom-color: rgb(0, 0, 0); border-bottom-style: solid; border-bottom-width: 0.75pt; border-left-color: rgb(0, 0, 0); border-left-style: solid; border-left-width: 0.75pt; border-right-color: rgb(0, 0, 0); border-right-style: solid; border-right-width: 0.75pt; border-top-color: rgb(0, 0, 0); border-top-style: solid; border-top-width: 0.75pt; padding-left: 5.03pt; padding-right: 5.03pt; vertical-align: top; width: 219.6pt;"><p style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 0pt; margin-left: 0pt;"><span style="font-family: Calibri; font-size: 11pt;">Total Order Price&lt;&lt;y [</span><span style="font-family: Calibri; font-size: 11pt;">Order.Sum</span><span style="font-family: Calibri; font-size: 11pt;">(c =&gt; </span><span style="font-family: Calibri; font-size: 11pt;">c.Price</span><span style="font-family: Calibri; font-size: 11pt;">)]&gt;&gt;</span></p></td></tr><tr style="height: 15pt;"><td style="border-bottom-color: rgb(0, 0, 0); border-bottom-style: solid; border-bottom-width: 0.75pt; border-left-color: rgb(0, 0, 0); border-left-style: solid; border-left-width: 0.75pt; border-right-color: rgb(0, 0, 0); border-right-style: solid; border-right-width: 0.75pt; border-top-color: rgb(0, 0, 0); border-top-style: solid; border-top-width: 0.75pt; padding-left: 5.03pt; padding-right: 5.03pt; vertical-align: top; width: 219.6pt;"><p style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 0pt; margin-left: 0pt; text-align: right;"><span style="font-family: Calibri; font-size: 11pt;">8.2</span></p></td></tr><tr style="height: 15pt;"><td style="border-bottom-color: rgb(0, 0, 0); border-bottom-style: solid; border-bottom-width: 0.75pt; border-left-color: rgb(0, 0, 0); border-left-style: solid; border-left-width: 0.75pt; border-right-color: rgb(0, 0, 0); border-right-style: solid; border-right-width: 0.75pt; border-top-color: rgb(0, 0, 0); border-top-style: solid; border-top-width: 0.75pt; padding-left: 5.03pt; padding-right: 5.03pt; vertical-align: top; width: 219.6pt;"><p style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 0pt; margin-left: 0pt; text-align: right;"><span style="font-family: Calibri; font-size: 11pt;">3.2</span></p></td></tr><tr style="height: 15pt;"><td style="border-bottom-color: rgb(0, 0, 0); border-bottom-style: solid; border-bottom-width: 0.75pt; border-left-color: rgb(0, 0, 0); border-left-style: solid; border-left-width: 0.75pt; border-right-color: rgb(0, 0, 0); border-right-style: solid; border-right-width: 0.75pt; border-top-color: rgb(0, 0, 0); border-top-style: solid; border-top-width: 0.75pt; padding-left: 5.03pt; padding-right: 5.03pt; vertical-align: top; width: 219.6pt;"><p style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 0pt; margin-left: 0pt; text-align: right;"><span style="font-family: Calibri; font-size: 11pt;">1.4</span></p></td></tr><tr style="height: 15pt;"><td style="border-bottom-color: rgb(0, 0, 0); border-bottom-style: solid; border-bottom-width: 0.75pt; border-left-color: rgb(0, 0, 0); border-left-style: solid; border-left-width: 0.75pt; border-right-color: rgb(0, 0, 0); border-right-style: solid; border-right-width: 0.75pt; border-top-color: rgb(0, 0, 0); border-top-style: solid; border-top-width: 0.75pt; padding-left: 5.03pt; padding-right: 5.03pt; vertical-align: top; width: 219.6pt;"><p style="margin-top: 0pt; margin-right: 0pt; margin-bottom: 0pt; margin-left: 0pt; text-align: right;"><span style="font-family: Calibri; font-size: 11pt;">1.2</span></p></td></tr></tbody></table>

{{< alert style="success" >}}For detailed technical information about syntax, expressions and report generation by the engine, please visit: Working with GroupDocs.Assembly Engine.{{< /alert >}}

Download Pie Chart Template

Please download the sample Pie Chart document we used in this article:

*   [Pie Chart.msg](https://github.com/groupdocs-assembly/GroupDocs.Assembly-for-.NET/raw/master/Examples/Data/Source/Email%20Templates/Pie%20Chart.msg?raw=true)

### Generating The Report

<table class="highlight tab-size js-file-line-container" data-tab-size="8" data-paste-markdown-skip=""><tbody><tr><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-generatepiechartiemailformat-cs-L1" class="blob-num js-line-number" data-line-number="1"></td><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-generatepiechartiemailformat-cs-LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span>For complete examples and data files, please go to https://github.com/groupdocs-assembly/GroupDocs.Assembly-for-.NET</span></td></tr><tr><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-generatepiechartiemailformat-cs-L2" class="blob-num js-line-number" data-line-number="2"></td><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-generatepiechartiemailformat-cs-LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span>Setting up source email template</span></td></tr><tr><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-generatepiechartiemailformat-cs-L3" class="blob-num js-line-number" data-line-number="3"></td><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-generatepiechartiemailformat-cs-LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-k">const</span> <span class="pl-en">String</span> <span class="pl-smi">strEmailTemplate</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">"</span>Email Templates/Pie Chart.msg<span class="pl-pds">"</span></span>;</td></tr><tr><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-generatepiechartiemailformat-cs-L4" class="blob-num js-line-number" data-line-number="4"></td><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-generatepiechartiemailformat-cs-LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span>Setting up destination email report</span></td></tr><tr><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-generatepiechartiemailformat-cs-L5" class="blob-num js-line-number" data-line-number="5"></td><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-generatepiechartiemailformat-cs-LC5" class="blob-code blob-code-inner js-file-line"><span class="pl-k">const</span> <span class="pl-en">String</span> <span class="pl-smi">strEmailReport</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">"</span>Email Reports/Pie Chart Report.msg<span class="pl-pds">"</span></span>;</td></tr><tr><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-generatepiechartiemailformat-cs-L6" class="blob-num js-line-number" data-line-number="6"></td><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-generatepiechartiemailformat-cs-LC6" class="blob-code blob-code-inner js-file-line"><span class="pl-k">try</span></td></tr><tr><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-generatepiechartiemailformat-cs-L7" class="blob-num js-line-number" data-line-number="7"></td><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-generatepiechartiemailformat-cs-LC7" class="blob-code blob-code-inner js-file-line">{</td></tr><tr><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-generatepiechartiemailformat-cs-L8" class="blob-num js-line-number" data-line-number="8"></td><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-generatepiechartiemailformat-cs-LC8" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span>Instantiate DocumentAssembler class</span></td></tr><tr><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-generatepiechartiemailformat-cs-L9" class="blob-num js-line-number" data-line-number="9"></td><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-generatepiechartiemailformat-cs-LC9" class="blob-code blob-code-inner js-file-line"><span class="pl-en">DocumentAssembler</span> <span class="pl-smi">assembler</span> <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">DocumentAssembler</span>();</td></tr><tr><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-generatepiechartiemailformat-cs-L10" class="blob-num js-line-number" data-line-number="10"></td><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-generatepiechartiemailformat-cs-LC10" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span>Call AssembleDocument to generate Pie Chart Report in email format</span></td></tr><tr><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-generatepiechartiemailformat-cs-L11" class="blob-num js-line-number" data-line-number="11"></td><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-generatepiechartiemailformat-cs-LC11" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">assembler</span>.<span class="pl-en">AssembleDocument</span>(<span class="pl-smi">CommonUtilities</span>.<span class="pl-en">GetSourceDocument</span>(<span class="pl-smi">strEmailTemplate</span>), <span class="pl-smi">CommonUtilities</span>.<span class="pl-en">SetDestinationDocument</span>(<span class="pl-smi">strEmailReport</span>),<span class="pl-smi">DataLayer</span>.<span class="pl-en">EmailDataSourceObject</span>(<span class="pl-smi">strEmailTemplate</span>, <span class="pl-smi">DataLayer</span>.<span class="pl-en">PopulateData</span>()), <span class="pl-smi">DataLayer</span>.<span class="pl-en">EmailDataSourceName</span>(<span class="pl-s"><span class="pl-pds">"</span>.msg<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>customers<span class="pl-pds">"</span></span>));</td></tr><tr><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-generatepiechartiemailformat-cs-L12" class="blob-num js-line-number" data-line-number="12"></td><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-generatepiechartiemailformat-cs-LC12" class="blob-code blob-code-inner js-file-line">}</td></tr><tr><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-generatepiechartiemailformat-cs-L13" class="blob-num js-line-number" data-line-number="13"></td><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-generatepiechartiemailformat-cs-LC13" class="blob-code blob-code-inner js-file-line"><span class="pl-k">catch</span> (<span class="pl-en">Exception</span> <span class="pl-smi">ex</span>)</td></tr><tr><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-generatepiechartiemailformat-cs-L14" class="blob-num js-line-number" data-line-number="14"></td><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-generatepiechartiemailformat-cs-LC14" class="blob-code blob-code-inner js-file-line">{</td></tr><tr><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-generatepiechartiemailformat-cs-L15" class="blob-num js-line-number" data-line-number="15"></td><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-generatepiechartiemailformat-cs-LC15" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Console</span>.<span class="pl-en">WriteLine</span>(<span class="pl-smi">ex</span>.<span class="pl-smi">Message</span>);</td></tr><tr><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-generatepiechartiemailformat-cs-L16" class="blob-num js-line-number" data-line-number="16"></td><td id="file-examples-csharp-groupdocs-assemblyexamples-generatereport-generatepiechartiemailformat-cs-LC16" class="blob-code blob-code-inner js-file-line">}</td></tr></tbody></table>

[view raw](https://gist.github.com/GroupDocsGists/16f8e9bddf60f4a95459a2898d9357aa/raw/b67b18fbae2c64037be39764c11411897f7d0b88/Examples-CSharp-GroupDocs.AssemblyExamples-GenerateReport-GeneratePieChartiEmailFormat.cs) [Examples-CSharp-GroupDocs.AssemblyExamples-GenerateReport-GeneratePieChartiEmailFormat.cs](https://gist.github.com/GroupDocsGists/16f8e9bddf60f4a95459a2898d9357aa#file-examples-csharp-groupdocs-assemblyexamples-generatereport-generatepiechartiemailformat-cs) hosted with ❤ by [GitHub](https://github.com)