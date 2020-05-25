---
id: chart-series-coloring-in-word-processing-document
url: assembly/net/chart-series-coloring-in-word-processing-document
title: Chart Series Coloring in Word Processing Document
weight: 1
description: ""
keywords: 
productName: GroupDocs.Assembly for .NET
hideChildren: False
---
<table class="sectionMacro" border="0" cellpadding="5" cellspacing="0" width="100%"><tbody><tr><td valign="top" width="50%"><div class="panel" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="panelHeader" style="border-bottom-width: 1px; background-color: rgb(176, 196, 222);"><b>Contents Summary</b></div><div class="panelContent"><style type="text/css">div.rbtoc1590388625164 { padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; }div.rbtoc1590388625164 ul { list-style-type: none; list-style-image: none; margin-left: 0px; }div.rbtoc1590388625164 li { margin-left: 0px; padding-left: 0px; }</style><div class="toc rbtoc1590388625164"><ul class="toc-indentation"><li><span class="TOCOutline">1</span> <a href="#ChartSeriesColoringinWordProcessingDocument-ChartSeriesColoringinWordProcessingDocument">Chart Series Coloring in Word Processing Document</a><ul class="toc-indentation"><li><span class="TOCOutline">1.1</span> <a href="#ChartSeriesColoringinWordProcessingDocument-CreatingaColumnChart">Creating a Column Chart</a></li><li><span class="TOCOutline">1.2</span> <a href="#ChartSeriesColoringinWordProcessingDocument-ReportingRequirement">Reporting Requirement</a></li><li><span class="TOCOutline">1.3</span> <a href="#ChartSeriesColoringinWordProcessingDocument-AddingSyntaxtobeevaluatedbyGroupDocs.AssemblyEngine">Adding Syntax to be evaluated by GroupDocs.Assembly Engine</a><ul class="toc-indentation"><li><span class="TOCOutline">1.3.1</span> <a href="#ChartSeriesColoringinWordProcessingDocument-ChartTitle">Chart Title</a></li><li><span class="TOCOutline">1.3.2</span> <a href="#ChartSeriesColoringinWordProcessingDocument-ChartData(Excel)">Chart Data (Excel)</a></li></ul></li><li><span class="TOCOutline">1.4</span> <a href="#ChartSeriesColoringinWordProcessingDocument-DownloadTemplate">Download Template</a></li><li><span class="TOCOutline">1.5</span> <a href="#ChartSeriesColoringinWordProcessingDocument-GeneratingTheReport">Generating The Report</a></li></ul></li></ul></div></div></div></td><td valign="top" width="15%">&nbsp;</td><td valign="top" width="35%">&nbsp;</td></tr></tbody></table>

{{< alert style="info" >}}This feature is supported by version 18.5 or greater.{{< /alert >}}{{< alert style="info" >}}The code uses some of the objects defined in The Business Layer.{{< /alert >}}

## Chart Series Coloring in Word Processing Document

### Creating a Column Chart

Practising the following steps, you can insert a Column Chart in MS Word 2013:

1.  Click in the document where you want to insert the chart, click the "Insert" tab, and then click "Chart" in the illustrations group to open the "Insert Chart" dialog box
2.  Select "Column" in the sidebar, you will see a gallery of charts
3.  Select the "100% Stacked Column" and press "OK" to insert the chart and Worksheet template to your document
4.  Edit the Worksheet with your data to update the chart. See [Chart Data (Excel)](Chart%2BSeries%2BColoring%2Bin%2BWord%2BProcessing%2BDocument.html)
5.  Save your Document

### Reporting Requirement

As a report developer, you are required to share contract price by manager dynamically with the following key requirements:

*   The report must show the  name of the manager
*   The report must show the total contract price for each manager 
*   Series color to be used in chart series 
*   The Report must be generated in the Word Processing Document

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

*   [Chart Template.docx](https://github.com/groupdocs-assembly/GroupDocs.Assembly-for-.NET/blob/master/Examples/Data/Source/Word%20Templates/Dynamic%20Chart%20Series%20Color.docx) (Template for CustomObject and JSON examples) 

### Generating The Report

For a chart with dynamic data, you can set colors of chart series dynamically based upon expressions. To use the feature, do the following steps:

*   Declare a chart with dynamic data in the usual way
*   For chart series to be colored dynamically, define corresponding color expressions in names of these series using **seriesColor** tags having the following syntax:
    
    ```csharp
    <<seriesColor [color_expression]>>
    ```
    

A color expression must return a value of one of the following types:

*   A string containing the name of a known color, that is, the case-insensitive name of a member of the [KnownColor](https://msdn.microsoft.com/en-us/library/system.drawing.knowncolor(v=vs.110).aspx) enumeration such as "red"
*   An integer value defining RGB (red, green, blue) components of the color such as 0xFFFF00 (yellow)
*   A value of the [Color](http://msdn.microsoft.com/en-us/library/system.drawing.color(v=vs.110).aspx) type

Following code snippet generates the report:

<table class="highlight tab-size js-file-line-container" data-tab-size="8" data-paste-markdown-skip=""><tbody><tr><td id="file-dynamicchartseriescolor-cs-L1" class="blob-num js-line-number" data-line-number="1"></td><td id="file-dynamicchartseriescolor-cs-LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> For complete examples and data files, please go to https://github.com/groupdocs-assembly/GroupDocs.Assembly-for-.NET</span></td></tr><tr><td id="file-dynamicchartseriescolor-cs-L2" class="blob-num js-line-number" data-line-number="2"></td><td id="file-dynamicchartseriescolor-cs-LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-k">try</span></td></tr><tr><td id="file-dynamicchartseriescolor-cs-L3" class="blob-num js-line-number" data-line-number="3"></td><td id="file-dynamicchartseriescolor-cs-LC3" class="blob-code blob-code-inner js-file-line">{</td></tr><tr><td id="file-dynamicchartseriescolor-cs-L4" class="blob-num js-line-number" data-line-number="4"></td><td id="file-dynamicchartseriescolor-cs-LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> Setting up source open document template</span></td></tr><tr><td id="file-dynamicchartseriescolor-cs-L5" class="blob-num js-line-number" data-line-number="5"></td><td id="file-dynamicchartseriescolor-cs-LC5" class="blob-code blob-code-inner js-file-line"><span class="pl-k">const</span> <span class="pl-en">String</span> <span class="pl-smi">strDocumentTemplate</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">"</span>Word Templates/Dynamic Chart Series Color.docx<span class="pl-pds">"</span></span>;</td></tr><tr><td id="file-dynamicchartseriescolor-cs-L6" class="blob-num js-line-number" data-line-number="6"></td><td id="file-dynamicchartseriescolor-cs-LC6" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span>setting up data source document</span></td></tr><tr><td id="file-dynamicchartseriescolor-cs-L7" class="blob-num js-line-number" data-line-number="7"></td><td id="file-dynamicchartseriescolor-cs-LC7" class="blob-code blob-code-inner js-file-line"><span class="pl-k">const</span> <span class="pl-k">string</span> <span class="pl-smi">dataSrcDocument</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">"</span>Word DataSource/Managers Data.docx<span class="pl-pds">"</span></span>;</td></tr><tr><td id="file-dynamicchartseriescolor-cs-L8" class="blob-num js-line-number" data-line-number="8"></td><td id="file-dynamicchartseriescolor-cs-LC8" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span>Setting up destination open document report</span></td></tr><tr><td id="file-dynamicchartseriescolor-cs-L9" class="blob-num js-line-number" data-line-number="9"></td><td id="file-dynamicchartseriescolor-cs-LC9" class="blob-code blob-code-inner js-file-line"><span class="pl-k">const</span> <span class="pl-en">String</span> <span class="pl-smi">strDocumentReport</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">"</span>Word Reports/Dynamic Chart Series Color.docx<span class="pl-pds">"</span></span>;</td></tr><tr><td id="file-dynamicchartseriescolor-cs-L10" class="blob-num js-line-number" data-line-number="10"></td><td id="file-dynamicchartseriescolor-cs-LC10" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span>Define serires color</span></td></tr><tr><td id="file-dynamicchartseriescolor-cs-L11" class="blob-num js-line-number" data-line-number="11"></td><td id="file-dynamicchartseriescolor-cs-LC11" class="blob-code blob-code-inner js-file-line"><span class="pl-k">string</span> <span class="pl-smi">color</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">"</span>red<span class="pl-pds">"</span></span>;</td></tr><tr><td id="file-dynamicchartseriescolor-cs-L12" class="blob-num js-line-number" data-line-number="12"></td><td id="file-dynamicchartseriescolor-cs-LC12" class="blob-code blob-code-inner js-file-line"></td></tr><tr><td id="file-dynamicchartseriescolor-cs-L13" class="blob-num js-line-number" data-line-number="13"></td><td id="file-dynamicchartseriescolor-cs-LC13" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> Set table column names to be extracted from the document.</span></td></tr><tr><td id="file-dynamicchartseriescolor-cs-L14" class="blob-num js-line-number" data-line-number="14"></td><td id="file-dynamicchartseriescolor-cs-LC14" class="blob-code blob-code-inner js-file-line"><span class="pl-en">DocumentTableOptions</span> <span class="pl-smi">options</span> <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">DocumentTableOptions</span>();</td></tr><tr><td id="file-dynamicchartseriescolor-cs-L15" class="blob-num js-line-number" data-line-number="15"></td><td id="file-dynamicchartseriescolor-cs-LC15" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">options</span>.<span class="pl-smi">FirstRowContainsColumnNames</span> <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td></tr><tr><td id="file-dynamicchartseriescolor-cs-L16" class="blob-num js-line-number" data-line-number="16"></td><td id="file-dynamicchartseriescolor-cs-LC16" class="blob-code blob-code-inner js-file-line"></td></tr><tr><td id="file-dynamicchartseriescolor-cs-L17" class="blob-num js-line-number" data-line-number="17"></td><td id="file-dynamicchartseriescolor-cs-LC17" class="blob-code blob-code-inner js-file-line"><span class="pl-en">DocumentTable</span> <span class="pl-smi">table</span> <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">DocumentTable</span>(<span class="pl-smi">CommonUtilities</span>.<span class="pl-en">GetDataSourceDocument</span>(<span class="pl-smi">dataSrcDocument</span>), <span class="pl-c1">1</span>, <span class="pl-smi">options</span>);</td></tr><tr><td id="file-dynamicchartseriescolor-cs-L18" class="blob-num js-line-number" data-line-number="18"></td><td id="file-dynamicchartseriescolor-cs-LC18" class="blob-code blob-code-inner js-file-line"></td></tr><tr><td id="file-dynamicchartseriescolor-cs-L19" class="blob-num js-line-number" data-line-number="19"></td><td id="file-dynamicchartseriescolor-cs-LC19" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> NOTE: For non-Spreadsheet documents, the type of a document table column is always string by default.</span></td></tr><tr><td id="file-dynamicchartseriescolor-cs-L20" class="blob-num js-line-number" data-line-number="20"></td><td id="file-dynamicchartseriescolor-cs-LC20" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Debug</span>.<span class="pl-en">Assert</span>(<span class="pl-smi">table</span>.<span class="pl-smi">Columns</span>[<span class="pl-s"><span class="pl-pds">"</span>Total_Contract_Price<span class="pl-pds">"</span></span>].<span class="pl-smi">Type</span> <span class="pl-k">==</span> <span class="pl-k">typeof</span>(<span class="pl-k">string</span>));</td></tr><tr><td id="file-dynamicchartseriescolor-cs-L21" class="blob-num js-line-number" data-line-number="21"></td><td id="file-dynamicchartseriescolor-cs-LC21" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> Change the column's type to double thus enabling to use arithmetic operations on values of the column</span></td></tr><tr><td id="file-dynamicchartseriescolor-cs-L22" class="blob-num js-line-number" data-line-number="22"></td><td id="file-dynamicchartseriescolor-cs-LC22" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> such as summing in templates.</span></td></tr><tr><td id="file-dynamicchartseriescolor-cs-L23" class="blob-num js-line-number" data-line-number="23"></td><td id="file-dynamicchartseriescolor-cs-LC23" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">table</span>.<span class="pl-smi">Columns</span>[<span class="pl-s"><span class="pl-pds">"</span>Total_Contract_Price<span class="pl-pds">"</span></span>].<span class="pl-smi">Type</span> <span class="pl-k">=</span> <span class="pl-k">typeof</span>(<span class="pl-k">double</span>);</td></tr><tr><td id="file-dynamicchartseriescolor-cs-L24" class="blob-num js-line-number" data-line-number="24"></td><td id="file-dynamicchartseriescolor-cs-LC24" class="blob-code blob-code-inner js-file-line"></td></tr><tr><td id="file-dynamicchartseriescolor-cs-L25" class="blob-num js-line-number" data-line-number="25"></td><td id="file-dynamicchartseriescolor-cs-LC25" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> Pass DocumentTable as a data source.</span></td></tr><tr><td id="file-dynamicchartseriescolor-cs-L26" class="blob-num js-line-number" data-line-number="26"></td><td id="file-dynamicchartseriescolor-cs-LC26" class="blob-code blob-code-inner js-file-line"><span class="pl-en">DocumentAssembler</span> <span class="pl-smi">assembler</span> <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">DocumentAssembler</span>();</td></tr><tr><td id="file-dynamicchartseriescolor-cs-L27" class="blob-num js-line-number" data-line-number="27"></td><td id="file-dynamicchartseriescolor-cs-LC27" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">assembler</span>.<span class="pl-en">AssembleDocument</span>(<span class="pl-smi">CommonUtilities</span>.<span class="pl-en">GetSourceDocument</span>(<span class="pl-smi">strDocumentTemplate</span>),</td></tr><tr><td id="file-dynamicchartseriescolor-cs-L28" class="blob-num js-line-number" data-line-number="28"></td><td id="file-dynamicchartseriescolor-cs-LC28" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">CommonUtilities</span>.<span class="pl-en">SetDestinationDocument</span>(<span class="pl-smi">strDocumentReport</span>),</td></tr><tr><td id="file-dynamicchartseriescolor-cs-L29" class="blob-num js-line-number" data-line-number="29"></td><td id="file-dynamicchartseriescolor-cs-LC29" class="blob-code blob-code-inner js-file-line"><span class="pl-k">new</span> <span class="pl-en">DataSourceInfo</span>(<span class="pl-smi">table</span>,<span class="pl-s"><span class="pl-pds">"</span>managers<span class="pl-pds">"</span></span>),</td></tr><tr><td id="file-dynamicchartseriescolor-cs-L30" class="blob-num js-line-number" data-line-number="30"></td><td id="file-dynamicchartseriescolor-cs-LC30" class="blob-code blob-code-inner js-file-line"><span class="pl-k">new</span> <span class="pl-en">DataSourceInfo</span>(<span class="pl-smi">color</span>,<span class="pl-s"><span class="pl-pds">"</span>color<span class="pl-pds">"</span></span>));</td></tr><tr><td id="file-dynamicchartseriescolor-cs-L31" class="blob-num js-line-number" data-line-number="31"></td><td id="file-dynamicchartseriescolor-cs-LC31" class="blob-code blob-code-inner js-file-line"></td></tr><tr><td id="file-dynamicchartseriescolor-cs-L32" class="blob-num js-line-number" data-line-number="32"></td><td id="file-dynamicchartseriescolor-cs-LC32" class="blob-code blob-code-inner js-file-line">}</td></tr><tr><td id="file-dynamicchartseriescolor-cs-L33" class="blob-num js-line-number" data-line-number="33"></td><td id="file-dynamicchartseriescolor-cs-LC33" class="blob-code blob-code-inner js-file-line"><span class="pl-k">catch</span> (<span class="pl-en">Exception</span> <span class="pl-smi">ex</span>)</td></tr><tr><td id="file-dynamicchartseriescolor-cs-L34" class="blob-num js-line-number" data-line-number="34"></td><td id="file-dynamicchartseriescolor-cs-LC34" class="blob-code blob-code-inner js-file-line">{</td></tr><tr><td id="file-dynamicchartseriescolor-cs-L35" class="blob-num js-line-number" data-line-number="35"></td><td id="file-dynamicchartseriescolor-cs-LC35" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Console</span>.<span class="pl-en">WriteLine</span>(<span class="pl-smi">ex</span>.<span class="pl-smi">Message</span>);</td></tr><tr><td id="file-dynamicchartseriescolor-cs-L36" class="blob-num js-line-number" data-line-number="36"></td><td id="file-dynamicchartseriescolor-cs-LC36" class="blob-code blob-code-inner js-file-line">}</td></tr></tbody></table>

[view raw](https://gist.github.com/GroupDocsGists/492c3768cdc6ab44f3323171dd2aa512/raw/42acaf692938981d5387b9bd8cf7aa6b9cf6e0cb/DynamicChartSeriesColor.cs) [DynamicChartSeriesColor.cs](https://gist.github.com/GroupDocsGists/492c3768cdc6ab44f3323171dd2aa512#file-dynamicchartseriescolor-cs) hosted with ❤ by [GitHub](https://github.com)