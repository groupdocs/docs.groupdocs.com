---
id: chart-series-coloring-in-email-document
url: assembly/java/chart-series-coloring-in-email-document
title: Chart Series Coloring in Email Document
weight: 4
description: ""
keywords: 
productName: GroupDocs.Assembly for Java
hideChildren: False
---
<table class="sectionMacro" border="0" cellpadding="5" cellspacing="0" width="100%"><tbody><tr><td valign="top" width="50%"><div class="panel" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="panelHeader" style="border-bottom-width: 1px; background-color: rgb(176, 196, 222);"><b>Contents Summary</b></div><div class="panelContent"><style type="text/css">div.rbtoc1590607146494 { padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; }div.rbtoc1590607146494 ul { list-style-type: none; list-style-image: none; margin-left: 0px; }div.rbtoc1590607146494 li { margin-left: 0px; padding-left: 0px; }</style><div class="toc rbtoc1590607146494"><ul class="toc-indentation"><li><span class="TOCOutline">1</span> <a href="#ChartSeriesColoringinEmailDocument-ChartSeriesColoringinEmailDocument">Chart Series Coloring in Email Document</a><ul class="toc-indentation"><li><span class="TOCOutline">1.1</span> <a href="#ChartSeriesColoringinEmailDocument-CreatingaColumnChart">Creating a Column Chart</a></li><li><span class="TOCOutline">1.2</span> <a href="#ChartSeriesColoringinEmailDocument-ReportingRequirement">Reporting Requirement</a></li><li><span class="TOCOutline">1.3</span> <a href="#ChartSeriesColoringinEmailDocument-AddingSyntaxtobeevaluatedbyGroupDocs.AssemblyEngine">Adding Syntax to be evaluated by GroupDocs.Assembly Engine</a><ul class="toc-indentation"><li><span class="TOCOutline">1.3.1</span> <a href="#ChartSeriesColoringinEmailDocument-ChartTitle">Chart Title</a></li><li><span class="TOCOutline">1.3.2</span> <a href="#ChartSeriesColoringinEmailDocument-ChartData(Excel)">Chart Data (Excel)</a></li></ul></li><li><span class="TOCOutline">1.4</span> <a href="#ChartSeriesColoringinEmailDocument-DownloadTemplate">Download Template</a></li><li><span class="TOCOutline">1.5</span> <a href="#ChartSeriesColoringinEmailDocument-GeneratingTheReport">Generating The Report</a></li></ul></li></ul></div></div></div></td><td valign="top" width="15%">&nbsp;</td><td valign="top" width="35%">&nbsp;</td></tr></tbody></table>

{{< alert style="info" >}}This feature is supported by version 18.6 or greater.{{< /alert >}}{{< alert style="info" >}}The code uses some of the objects defined in The Business Layer.{{< /alert >}}

## Chart Series Coloring in Email Document

### Creating a Column Chart

Please follow below steps to create a column chart in MS Outlook 2013:

1.  Create a new Email
2.  Click the "Insert" tab, and then click "Chart" in the illustrations group to open the "Insert Chart" dialog box
3.  Select "Column" in the sidebar, you will see a gallery of charts
4.  Select the "100% Stacked Column" and press "OK" to insert the chart and Worksheet template to your email
5.  Edit the Worksheet with your data to update the chart
6.  Save your Email

### Reporting Requirement

As a report developer, you are required to share contract price by manager dynamically with the following key requirements:

*   The report must show the  name of the manager
*   The report must show the total contract price for each manager 
*   Series color to be used in chart series 
*   The Report must be generated in the Email Document

### Adding Syntax to be evaluated by GroupDocs.Assembly Engine

#### Chart Title

```csharp
<Total Contract Prices by Managers<<foreach [m in
managers]>><<x [m.Manager]>>

```

#### Chart Data (Excel)

|   | Total Contract Price<<y [m.Total_Contract_Price]>><<seriesColor [color]>> |
| --- | --- |
| Category 1 | 4.3 |
| Category 2 | 2.5 |
| Category 3 | 3.5 |
| Category 4 | 4.5 |

{{< alert style="success" >}}For detailed technical information about syntax, expressions and report generation by the engine, please visit: Working with GroupDocs.Assembly Engine{{< /alert >}}

### Download Template

Please download the sample Dynamic Chart Series Color document we created in this article:

*   [Chart Template.msg](https://github.com/groupdocs-assembly/GroupDocs.Assembly-for-Java/blob/master/Examples/GroupDocs.Assembly.Examples.Java/Data/Storage/Email%20Templates/Dynamic%20Chart%20Series%20Color.msg) (Template for CustomObject and JSON examples) 

### Generating The Report

For a chart with dynamic data, you can set colors of chart series dynamically based upon expressions. To use the feature, do the following steps:

*   Declare a chart with dynamic data in the usual way
*   For chart series to be colored dynamically, define corresponding color expressions in names of these series using **seriesColor** tags having the following syntax:
    
    ```csharp
    <<seriesColor [color_expression]>>
    ```
    

A color expression must return a value of one of the following types:

*   A string containing the name of a known color, that is, the case-insensitive name of a member of the [KnownColor](https://msdn.microsoft.com/en-us/library/system.drawing.knowncolor(v=vs.110).aspx) enumeration such as "red"
*   An integer value defining RGB (red, green, blue) components of the color such as 0xFFFF00 (yellow)
*   A value of the [Color](http://msdn.microsoft.com/en-us/library/system.drawing.color(v=vs.110).aspx) type

Following code snippet generates the report:

<table class="highlight tab-size js-file-line-container" data-tab-size="8" data-paste-markdown-skip=""><tbody><tr><td id="file-dynamicchartseriescoloremail-java-L1" class="blob-num js-line-number" data-line-number="1"></td><td id="file-dynamicchartseriescoloremail-java-LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> For complete examples and data files, please go to https://github.com/groupdocs-assembly/GroupDocs.Assembly-for-Java</span></td></tr><tr><td id="file-dynamicchartseriescoloremail-java-L2" class="blob-num js-line-number" data-line-number="2"></td><td id="file-dynamicchartseriescoloremail-java-LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-k">try</span> {</td></tr><tr><td id="file-dynamicchartseriescoloremail-java-L3" class="blob-num js-line-number" data-line-number="3"></td><td id="file-dynamicchartseriescoloremail-java-LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">String</span> srcDocument <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">"</span>/Email Templates/Dynamic Chart Series Color.msg<span class="pl-pds">"</span></span>;</td></tr><tr><td id="file-dynamicchartseriescoloremail-java-L4" class="blob-num js-line-number" data-line-number="4"></td><td id="file-dynamicchartseriescoloremail-java-LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">String</span> outDocument <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">"</span>/Email Reports/Dynamic Chart Series Color.msg<span class="pl-pds">"</span></span>;</td></tr><tr><td id="file-dynamicchartseriescoloremail-java-L5" class="blob-num js-line-number" data-line-number="5"></td><td id="file-dynamicchartseriescoloremail-java-LC5" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span>Define series color</span></td></tr><tr><td id="file-dynamicchartseriescoloremail-java-L6" class="blob-num js-line-number" data-line-number="6"></td><td id="file-dynamicchartseriescoloremail-java-LC6" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">String</span> color <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">"</span>blue<span class="pl-pds">"</span></span>;</td></tr><tr><td id="file-dynamicchartseriescoloremail-java-L7" class="blob-num js-line-number" data-line-number="7"></td><td id="file-dynamicchartseriescoloremail-java-LC7" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> Set table column names to be extracted from the document.</span></td></tr><tr><td id="file-dynamicchartseriescoloremail-java-L8" class="blob-num js-line-number" data-line-number="8"></td><td id="file-dynamicchartseriescoloremail-java-LC8" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">DocumentTableOptions</span> options <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-smi">DocumentTableOptions</span>();</td></tr><tr><td id="file-dynamicchartseriescoloremail-java-L9" class="blob-num js-line-number" data-line-number="9"></td><td id="file-dynamicchartseriescoloremail-java-LC9" class="blob-code blob-code-inner js-file-line">options<span class="pl-k">.</span>setFirstRowContainsColumnNames(<span class="pl-c1">true</span>);</td></tr><tr><td id="file-dynamicchartseriescoloremail-java-L10" class="blob-num js-line-number" data-line-number="10"></td><td id="file-dynamicchartseriescoloremail-java-LC10" class="blob-code blob-code-inner js-file-line"></td></tr><tr><td id="file-dynamicchartseriescoloremail-java-L11" class="blob-num js-line-number" data-line-number="11"></td><td id="file-dynamicchartseriescoloremail-java-LC11" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">DocumentTable</span> table <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-smi">DocumentTable</span>(<span class="pl-smi">CommonUtilities</span><span class="pl-k">.</span>wordDataFile <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">"</span>/Managers Data.docx<span class="pl-pds">"</span></span>, <span class="pl-c1">1</span>, options);</td></tr><tr><td id="file-dynamicchartseriescoloremail-java-L12" class="blob-num js-line-number" data-line-number="12"></td><td id="file-dynamicchartseriescoloremail-java-LC12" class="blob-code blob-code-inner js-file-line"></td></tr><tr><td id="file-dynamicchartseriescoloremail-java-L13" class="blob-num js-line-number" data-line-number="13"></td><td id="file-dynamicchartseriescoloremail-java-LC13" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> NOTE: For non-Spreadsheet documents, the type of a document table</span></td></tr><tr><td id="file-dynamicchartseriescoloremail-java-L14" class="blob-num js-line-number" data-line-number="14"></td><td id="file-dynamicchartseriescoloremail-java-LC14" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> column is always string by default.</span></td></tr><tr><td id="file-dynamicchartseriescoloremail-java-L15" class="blob-num js-line-number" data-line-number="15"></td><td id="file-dynamicchartseriescoloremail-java-LC15" class="blob-code blob-code-inner js-file-line"><span class="pl-k">assert</span> table<span class="pl-k">.</span>getColumns()<span class="pl-k">.</span>get(<span class="pl-s"><span class="pl-pds">"</span>Total_Contract_Price<span class="pl-pds">"</span></span>)<span class="pl-k">.</span>getType() <span class="pl-k">==</span> <span class="pl-smi">String</span><span class="pl-k">.</span>class;</td></tr><tr><td id="file-dynamicchartseriescoloremail-java-L16" class="blob-num js-line-number" data-line-number="16"></td><td id="file-dynamicchartseriescoloremail-java-LC16" class="blob-code blob-code-inner js-file-line"></td></tr><tr><td id="file-dynamicchartseriescoloremail-java-L17" class="blob-num js-line-number" data-line-number="17"></td><td id="file-dynamicchartseriescoloremail-java-LC17" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> Change the column's type to double thus enabling to use arithmetic</span></td></tr><tr><td id="file-dynamicchartseriescoloremail-java-L18" class="blob-num js-line-number" data-line-number="18"></td><td id="file-dynamicchartseriescoloremail-java-LC18" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> operations on values of the column</span></td></tr><tr><td id="file-dynamicchartseriescoloremail-java-L19" class="blob-num js-line-number" data-line-number="19"></td><td id="file-dynamicchartseriescoloremail-java-LC19" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> such as summing in templates.</span></td></tr><tr><td id="file-dynamicchartseriescoloremail-java-L20" class="blob-num js-line-number" data-line-number="20"></td><td id="file-dynamicchartseriescoloremail-java-LC20" class="blob-code blob-code-inner js-file-line">table<span class="pl-k">.</span>getColumns()<span class="pl-k">.</span>get(<span class="pl-s"><span class="pl-pds">"</span>Total_Contract_Price<span class="pl-pds">"</span></span>)<span class="pl-k">.</span>setType(<span class="pl-k">double</span><span class="pl-k">.</span>class);</td></tr><tr><td id="file-dynamicchartseriescoloremail-java-L21" class="blob-num js-line-number" data-line-number="21"></td><td id="file-dynamicchartseriescoloremail-java-LC21" class="blob-code blob-code-inner js-file-line"></td></tr><tr><td id="file-dynamicchartseriescoloremail-java-L22" class="blob-num js-line-number" data-line-number="22"></td><td id="file-dynamicchartseriescoloremail-java-LC22" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> Pass DocumentTable as a data source.</span></td></tr><tr><td id="file-dynamicchartseriescoloremail-java-L23" class="blob-num js-line-number" data-line-number="23"></td><td id="file-dynamicchartseriescoloremail-java-LC23" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">DocumentAssembler</span> assembler <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-smi">DocumentAssembler</span>();</td></tr><tr><td id="file-dynamicchartseriescoloremail-java-L24" class="blob-num js-line-number" data-line-number="24"></td><td id="file-dynamicchartseriescoloremail-java-LC24" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">DocumentAssembler</span><span class="pl-k">.</span>setUseReflectionOptimization(<span class="pl-c1">false</span>);</td></tr><tr><td id="file-dynamicchartseriescoloremail-java-L25" class="blob-num js-line-number" data-line-number="25"></td><td id="file-dynamicchartseriescoloremail-java-LC25" class="blob-code blob-code-inner js-file-line">assembler<span class="pl-k">.</span>assembleDocument(<span class="pl-smi">CommonUtilities</span><span class="pl-k">.</span>getDataPath(srcDocument),</td></tr><tr><td id="file-dynamicchartseriescoloremail-java-L26" class="blob-num js-line-number" data-line-number="26"></td><td id="file-dynamicchartseriescoloremail-java-LC26" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">CommonUtilities</span><span class="pl-k">.</span>getOutPath(outDocument), <span class="pl-k">new</span> <span class="pl-smi">Object</span>[]{table,color}, <span class="pl-k">new</span> <span class="pl-smi">String</span>[]{<span class="pl-s"><span class="pl-pds">"</span>managers<span class="pl-pds">"</span></span>,<span class="pl-s"><span class="pl-pds">"</span>color<span class="pl-pds">"</span></span>});</td></tr><tr><td id="file-dynamicchartseriescoloremail-java-L27" class="blob-num js-line-number" data-line-number="27"></td><td id="file-dynamicchartseriescoloremail-java-LC27" class="blob-code blob-code-inner js-file-line">} <span class="pl-k">catch</span> (<span class="pl-smi">Exception</span> e) {</td></tr><tr><td id="file-dynamicchartseriescoloremail-java-L28" class="blob-num js-line-number" data-line-number="28"></td><td id="file-dynamicchartseriescoloremail-java-LC28" class="blob-code blob-code-inner js-file-line">e<span class="pl-k">.</span>printStackTrace();</td></tr><tr><td id="file-dynamicchartseriescoloremail-java-L29" class="blob-num js-line-number" data-line-number="29"></td><td id="file-dynamicchartseriescoloremail-java-LC29" class="blob-code blob-code-inner js-file-line">}</td></tr></tbody></table>

[view raw](https://gist.github.com/GroupDocsGists/404351d4481debba2ce792f9fe485328/raw/c1b6a4e006a7a0eaacc7c747ae25bed653a32d49/dynamicChartSeriesColorEmail.java) [dynamicChartSeriesColorEmail.java](https://gist.github.com/GroupDocsGists/404351d4481debba2ce792f9fe485328#file-dynamicchartseriescoloremail-java) hosted with ❤ by [GitHub](https://github.com)