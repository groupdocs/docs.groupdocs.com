---
id: removing-selective-chart-series-dynamically
url: assembly/java/removing-selective-chart-series-dynamically
title: Removing Selective Chart Series Dynamically
weight: 5
description: ""
keywords: 
productName: GroupDocs.Assembly for Java
hideChildren: False
---
<table class="sectionMacro" border="0" cellpadding="5" cellspacing="0" width="100%"><tbody><tr><td valign="top" width="50%"><div class="panel" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="panelHeader" style="border-bottom-width: 1px; background-color: rgb(176, 196, 222);"><b>Contents Summary</b></div><div class="panelContent"><style type="text/css">div.rbtoc1590607144756 { padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; }div.rbtoc1590607144756 ul { list-style-type: none; list-style-image: none; margin-left: 0px; }div.rbtoc1590607144756 li { margin-left: 0px; padding-left: 0px; }</style><div class="toc rbtoc1590607144756"><ul class="toc-indentation"><li><span class="TOCOutline">1</span> <a href="#RemovingSelectiveChartSeriesDynamically-ColumnChartinMicrosoftWordDocument">Column Chart in Microsoft Word Document</a><ul class="toc-indentation"><li><span class="TOCOutline">1.1</span> <a href="#RemovingSelectiveChartSeriesDynamically-CreatingaColumnChart">Creating a Column Chart</a></li><li><span class="TOCOutline">1.2</span> <a href="#RemovingSelectiveChartSeriesDynamically-ReportingRequirement">Reporting Requirement</a></li><li><span class="TOCOutline">1.3</span> <a href="#RemovingSelectiveChartSeriesDynamically-AddingSyntaxtobeevaluatedbyGroupDocs.AssemblyEngine">Adding Syntax to be evaluated by GroupDocs.Assembly Engine</a><ul class="toc-indentation"><li><span class="TOCOutline">1.3.1</span> <a href="#RemovingSelectiveChartSeriesDynamically-ChartTitle">Chart Title</a></li><li><span class="TOCOutline">1.3.2</span> <a href="#RemovingSelectiveChartSeriesDynamically-ChartData(Excel)">Chart Data (Excel)</a></li></ul></li><li><span class="TOCOutline">1.4</span> <a href="#RemovingSelectiveChartSeriesDynamically-DownloadTemplate">Download Template</a></li><li><span class="TOCOutline">1.5</span> <a href="#RemovingSelectiveChartSeriesDynamically-GeneratingTheReport">Generating The Report</a></li></ul></li></ul></div></div></div></td><td valign="top" width="15%">&nbsp;</td><td valign="top" width="35%">&nbsp;</td></tr></tbody></table>

{{< alert style="info" >}}This feature is supported by version 17.11 or greater{{< /alert >}}{{< alert style="info" >}}The code uses some of the objects defined in The Business Layer.{{< /alert >}}

## Column Chart in Microsoft Word Document

### Creating a Column Chart

Practising the following steps, you can insert a Column Chart in MS Word 2013:

1.  Click in the document where you want to insert the chart, click the "Insert" tab, and then click "Chart" in the illustrations group to open the "Insert Chart" dialog box.
2.  Select "Column" in the sidebar, you will see a gallery of charts.
3.  Select the "100% Stacked Column" and press "OK" to insert the chart and Worksheet template to your document.
4.  Edit the Worksheet with your data to update the chart. See [Chart Data (Excel)](Column%2BChart%2Bin%2BWord%2BProcessing%2BDocument.html#ColumnChartinWordProcessingDocument-ChartData(Excel)).
5.  Save your Document.

### Reporting Requirement

As a report developer, you are required to share orders quantity of the customers dynamically with the following key requirements:

*   Report must show total Contract Prices by Quarters
*   Report must be generated in the Word Processing Document.

### Adding Syntax to be evaluated by GroupDocs.Assembly Engine

#### Chart Title

```csharp
Total Contract Prices by Quarters
<<foreach[in getContracts()
.where(c => c.getDate().getYear() + 1900 == 2015)
.groupBy(c => c.getManager())
.orderBy(g => g.key.getName())]>><<x[key.getName()]>>
```

#### Chart Data (Excel)

|   | 1st Quarter<<y[where(c => c.getDate().getMonth()>= 0 && c.getDate().getMonth() <= 2).sum(c => c.getPrice())]>><<removeif [mode==1]>> | 2nd Quarter<<y[where(c => c.getDate().getMonth()>= 3 && c.getDate().getMonth() <= 5).sum(c => c.getPrice())]>><<removeif [mode==2]>> | 3rd Quarter<<y[where(c => c.getDate().getMonth()>= 6 && c.getDate().getMonth()<= 8).sum(c => c.getPrice())]>> | 4th Quarter<<y[where(c => c.getDate().getMonth()>= 9 && c.getDate().getMonth()<= 11).sum(c => c.getPrice())]>> |
| --- | --- | --- | --- | --- |
| Category 1 | 4.3 | 2.4 | 2 | 3 |
| Category 2 | 2.5 | 4.4 | 2 | 2 |
| Category 3 | 3.5 | 1.8 | 3 | 5 |
| Category 4 | 4.5 | 2.8 | 5 | 2 |

### Download Template

Please download the sample Chart with Filtering, Grouping, and Ordering document we created in this article:

*   [Chart Template.docx](https://github.com/aliahmedgroupdocs/GroupDocs.Assembly-for-Java/blob/master/Examples/GroupDocs.Assembly.Examples.Java/Data/Storage/Word%20Templates/Chart%20with%20Filtering%2C%20Grouping%2C%20and%20Ordering_RemoveIf.docx)

### Generating The Report

<table class="highlight tab-size js-file-line-container" data-tab-size="8" data-paste-markdown-skip=""><tbody><tr><td id="file-removeselectivechartseries-java-L1" class="blob-num js-line-number" data-line-number="1"></td><td id="file-removeselectivechartseries-java-LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> For complete examples and data files, please go to https://github.com/groupdocs-assembly/GroupDocs.Assembly-for-Java</span></td></tr><tr><td id="file-removeselectivechartseries-java-L2" class="blob-num js-line-number" data-line-number="2"></td><td id="file-removeselectivechartseries-java-LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> ExStart:removeSelectiveChartSeries</span></td></tr><tr><td id="file-removeselectivechartseries-java-L3" class="blob-num js-line-number" data-line-number="3"></td><td id="file-removeselectivechartseries-java-LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">String</span> srcDocument <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">"</span>/Word Templates/Chart with Filtering, Grouping, and Ordering_RemoveIf.docx<span class="pl-pds">"</span></span>;</td></tr><tr><td id="file-removeselectivechartseries-java-L4" class="blob-num js-line-number" data-line-number="4"></td><td id="file-removeselectivechartseries-java-LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">String</span> docReport <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">"</span>/Word Reports/Chart with Filtering, Grouping, and Ordering_report_RemoveIf.docx<span class="pl-pds">"</span></span>;</td></tr><tr><td id="file-removeselectivechartseries-java-L5" class="blob-num js-line-number" data-line-number="5"></td><td id="file-removeselectivechartseries-java-LC5" class="blob-code blob-code-inner js-file-line"><span class="pl-k">try</span> {</td></tr><tr><td id="file-removeselectivechartseries-java-L6" class="blob-num js-line-number" data-line-number="6"></td><td id="file-removeselectivechartseries-java-LC6" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">DocumentAssembler</span> assembler <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-smi">DocumentAssembler</span>();</td></tr><tr><td id="file-removeselectivechartseries-java-L7" class="blob-num js-line-number" data-line-number="7"></td><td id="file-removeselectivechartseries-java-LC7" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span>Set mode 1 or 2 to remove 1st or 2nd Quarter data</span></td></tr><tr><td id="file-removeselectivechartseries-java-L8" class="blob-num js-line-number" data-line-number="8"></td><td id="file-removeselectivechartseries-java-LC8" class="blob-code blob-code-inner js-file-line"><span class="pl-k">int</span> mode <span class="pl-k">=</span> <span class="pl-c1">1</span>;</td></tr><tr><td id="file-removeselectivechartseries-java-L9" class="blob-num js-line-number" data-line-number="9"></td><td id="file-removeselectivechartseries-java-LC9" class="blob-code blob-code-inner js-file-line">assembler<span class="pl-k">.</span>assembleDocument(<span class="pl-smi">CommonUtilities</span><span class="pl-k">.</span>getDataPath(srcDocument),</td></tr><tr><td id="file-removeselectivechartseries-java-L10" class="blob-num js-line-number" data-line-number="10"></td><td id="file-removeselectivechartseries-java-LC10" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">CommonUtilities</span><span class="pl-k">.</span>getOutPath(docReport),</td></tr><tr><td id="file-removeselectivechartseries-java-L11" class="blob-num js-line-number" data-line-number="11"></td><td id="file-removeselectivechartseries-java-LC11" class="blob-code blob-code-inner js-file-line"><span class="pl-k">new</span> <span class="pl-smi">DataSourceInfo</span>(<span class="pl-k">new</span> <span class="pl-smi">DataStorage</span>(),<span class="pl-s"><span class="pl-pds">"</span>orders<span class="pl-pds">"</span></span>),</td></tr><tr><td id="file-removeselectivechartseries-java-L12" class="blob-num js-line-number" data-line-number="12"></td><td id="file-removeselectivechartseries-java-LC12" class="blob-code blob-code-inner js-file-line"><span class="pl-k">new</span> <span class="pl-smi">DataSourceInfo</span>(mode,<span class="pl-s"><span class="pl-pds">"</span>mode<span class="pl-pds">"</span></span>));</td></tr><tr><td id="file-removeselectivechartseries-java-L13" class="blob-num js-line-number" data-line-number="13"></td><td id="file-removeselectivechartseries-java-LC13" class="blob-code blob-code-inner js-file-line">} <span class="pl-k">catch</span> (<span class="pl-smi">Exception</span> exp) {</td></tr><tr><td id="file-removeselectivechartseries-java-L14" class="blob-num js-line-number" data-line-number="14"></td><td id="file-removeselectivechartseries-java-LC14" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">System</span><span class="pl-k">.</span>out<span class="pl-k">.</span>println(<span class="pl-s"><span class="pl-pds">"</span>Exception: <span class="pl-pds">"</span></span> <span class="pl-k">+</span> exp<span class="pl-k">.</span>getMessage());</td></tr><tr><td id="file-removeselectivechartseries-java-L15" class="blob-num js-line-number" data-line-number="15"></td><td id="file-removeselectivechartseries-java-LC15" class="blob-code blob-code-inner js-file-line">}</td></tr><tr><td id="file-removeselectivechartseries-java-L16" class="blob-num js-line-number" data-line-number="16"></td><td id="file-removeselectivechartseries-java-LC16" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> ExEnd:removeSelectiveChartSeries</span></td></tr></tbody></table>

[view raw](https://gist.github.com/GroupDocsGists/18be56c4d11e2e602f786be46736bf2a/raw/587871a59b341d7cc5a6aeecf528aafb63bd3fdd/removeSelectiveChartSeries.java) [removeSelectiveChartSeries.java](https://gist.github.com/GroupDocsGists/18be56c4d11e2e602f786be46736bf2a#file-removeselectivechartseries-java) hosted with ❤ by [GitHub](https://github.com)