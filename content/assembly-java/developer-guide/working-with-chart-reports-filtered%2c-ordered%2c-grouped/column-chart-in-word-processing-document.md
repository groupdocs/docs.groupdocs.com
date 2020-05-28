---
id: column-chart-in-word-processing-document
url: assembly/java/column-chart-in-word-processing-document
title: Column Chart in Word Processing Document
weight: 1
description: ""
keywords: 
productName: GroupDocs.Assembly for Java
hideChildren: False
---
<table class="sectionMacro" border="0" cellpadding="5" cellspacing="0" width="100%"><tbody><tr><td valign="top" width="50%"><div class="panel" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="panelHeader" style="border-bottom-width: 1px; background-color: rgb(176, 196, 222);"><b>Contents Summary</b></div><div class="panelContent"><style type="text/css">div.rbtoc1590607144658 { padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; }div.rbtoc1590607144658 ul { list-style-type: none; list-style-image: none; margin-left: 0px; }div.rbtoc1590607144658 li { margin-left: 0px; padding-left: 0px; }</style><div class="toc rbtoc1590607144658"><ul class="toc-indentation"><li><span class="TOCOutline">1</span> <a href="#ColumnChartinWordProcessingDocument-ColumnChartinMicrosoftWordDocument">Column Chart in Microsoft Word Document</a><ul class="toc-indentation"><li><span class="TOCOutline">1.1</span> <a href="#ColumnChartinWordProcessingDocument-CreatingaColumnChart">Creating a Column Chart</a></li><li><span class="TOCOutline">1.2</span> <a href="#ColumnChartinWordProcessingDocument-ReportingRequirement">Reporting Requirement</a></li><li><span class="TOCOutline">1.3</span> <a href="#ColumnChartinWordProcessingDocument-AddingSyntaxtobeevaluatedbyGroupDocs.AssemblyEngine">Adding Syntax to be evaluated by GroupDocs.Assembly Engine</a><ul class="toc-indentation"><li><span class="TOCOutline">1.3.1</span> <a href="#ColumnChartinWordProcessingDocument-ChartTitle">Chart Title</a></li><li><span class="TOCOutline">1.3.2</span> <a href="#ColumnChartinWordProcessingDocument-ChartData(Excel)">Chart Data (Excel)</a></li></ul></li><li><span class="TOCOutline">1.4</span> <a href="#ColumnChartinWordProcessingDocument-DownloadTemplate">Download Template</a></li><li><span class="TOCOutline">1.5</span> <a href="#ColumnChartinWordProcessingDocument-GeneratingTheReport">Generating The Report</a></li></ul></li><li><span class="TOCOutline">2</span> <a href="#ColumnChartinWordProcessingDocument-ColumnChartinOpenOfficeDocument">Column Chart in OpenOffice Document</a></li></ul></div></div></div></td><td valign="top" width="15%">&nbsp;</td><td valign="top" width="35%">&nbsp;</td></tr></tbody></table>

{{< alert style="info" >}}In this article, we will use GroupDocs.Assembly to generate a Column Chart Report with Filtered, Ordered and Grouped Data in Word Processing Document format.{{< /alert >}}{{< alert style="info" >}}The code uses some of the objects defined in The Business Layer.{{< /alert >}}

## Column Chart in Microsoft Word Document

### Creating a Column Chart

Practising the following steps, you can insert a Column Chart in MS Word 2013:

1.  Click in the document where you want to insert the chart, click the "Insert" tab, and then click "Chart" in the illustrations group to open the "Insert Chart" dialog box.
2.  Select "Column" in the sidebar, you will see a gallery of charts.
3.  Select the "100% Stacked Column" and press "OK" to insert the chart and Worksheet template to your document.
4.  Edit the Worksheet with your data to update the chart. See [Chart Data (Excel)](Column%2BChart%2Bin%2BWord%2BProcessing%2BDocument.html).
5.  Save your Document.

### Reporting Requirement

As a report developer, you are required to share orders quantity of the customers dynamically with the following key requirements:

*   Report must show total Contract Prices by Quarters
*   Report must be generated in the Word Processing Document.

### Adding Syntax to be evaluated by GroupDocs.Assembly Engine

#### Chart Title

```csharp
Total Contract Prices by Quarters<<foreach [in getContracts()
.where(c => c.getDate().getYear() + 1900 == 2015)
.groupBy(c => c.getManager())
.orderBy(g => g.key.getName())]>><<x [key.getName()]>>

```

#### Chart Data (Excel)

<table class="MsoTableGrid" border="1" cellspacing="0" cellpadding="0" width="710" style="width: 532.45pt; margin-left: 15.75pt; border-collapse: collapse; border-top-color: initial; border-top-style: none; border-top-width: initial; border-right-color: initial; border-right-style: none; border-right-width: initial; border-bottom-color: initial; border-bottom-style: none; border-bottom-width: initial; border-left-color: initial; border-left-style: none; border-left-width: initial;"><tbody><tr><td width="98" valign="top" style="width: 73.65pt; border-top-color: windowtext; border-top-style: solid; border-top-width: 1pt; border-right-color: windowtext; border-right-style: solid; border-right-width: 1pt; border-bottom-color: windowtext; border-bottom-style: solid; border-bottom-width: 1pt; border-left-color: windowtext; border-left-style: solid; border-left-width: 1pt; padding-top: 0in; padding-right: 5.4pt; padding-bottom: 0in; padding-left: 5.4pt;"><p class="MsoNormal" style="margin-bottom: 0.0001pt; line-height: normal;">&nbsp;</p></td><td width="153" valign="bottom" style="width: 114.7pt; border-top-color: windowtext; border-top-style: solid; border-top-width: 1pt; border-right-color: windowtext; border-right-style: solid; border-right-width: 1pt; border-bottom-color: windowtext; border-bottom-style: solid; border-bottom-width: 1pt; border-left-color: initial; border-left-style: none; border-left-width: initial; padding-top: 0in; padding-right: 5.4pt; padding-bottom: 0in; padding-left: 5.4pt;"><p class="MsoNormal" style="margin-bottom: 0.0001pt; line-height: normal;"><span style="color: black;">1st Quarter&lt;&lt;y [where(c =&gt; c.getDate().getMonth() &gt;= 0 &amp;&amp; c.getDate().getMonth() &lt;= 2).sum(c =&gt; c.getPrice())]&gt;&gt;</span></p></td><td width="153" valign="bottom" style="width: 114.7pt; border-top-color: windowtext; border-top-style: solid; border-top-width: 1pt; border-right-color: windowtext; border-right-style: solid; border-right-width: 1pt; border-bottom-color: windowtext; border-bottom-style: solid; border-bottom-width: 1pt; border-left-color: initial; border-left-style: none; border-left-width: initial; padding-top: 0in; padding-right: 5.4pt; padding-bottom: 0in; padding-left: 5.4pt;"><p class="MsoNormal" style="margin-bottom: 0.0001pt; line-height: normal;"><span style="color: black;">2nd Quarter&lt;&lt;y [where(c =&gt; c.getDate().getMonth() &gt;= 3 &amp;&amp; c.getDate().getMonth() &lt;= 5).sum(c =&gt; c.getPrice())]&gt;&gt;</span></p></td><td width="153" valign="bottom" style="width: 114.7pt; border-top-color: windowtext; border-top-style: solid; border-top-width: 1pt; border-right-color: windowtext; border-right-style: solid; border-right-width: 1pt; border-bottom-color: windowtext; border-bottom-style: solid; border-bottom-width: 1pt; border-left-color: initial; border-left-style: none; border-left-width: initial; padding-top: 0in; padding-right: 5.4pt; padding-bottom: 0in; padding-left: 5.4pt;"><p class="MsoNormal" style="margin-bottom: 0.0001pt; line-height: normal;"><span style="color: black;">3rd Quarter&lt;&lt;y [where(c =&gt; c.getDate().getMonth() &gt;= 6 &amp;&amp; c.getDate().getMonth() &lt;= 8).sum(c =&gt; c.getPrice())]&gt;&gt;</span></p></td><td width="153" valign="bottom" style="width: 114.7pt; border-top-color: windowtext; border-top-style: solid; border-top-width: 1pt; border-right-color: windowtext; border-right-style: solid; border-right-width: 1pt; border-bottom-color: windowtext; border-bottom-style: solid; border-bottom-width: 1pt; border-left-color: initial; border-left-style: none; border-left-width: initial; padding-top: 0in; padding-right: 5.4pt; padding-bottom: 0in; padding-left: 5.4pt;"><p class="MsoNormal" style="margin-bottom: 0.0001pt; line-height: normal;"><span style="color: black;">4th Quarter&lt;&lt;y [where(c =&gt; c.getDate().getMonth() &gt;= 9 &amp;&amp; c.getDate().getMonth() &lt;= 11).sum(c =&gt; c.getPrice())]&gt;&gt;</span></p></td></tr><tr><td width="98" valign="bottom" style="width: 73.65pt; border-top-color: initial; border-top-style: none; border-top-width: initial; border-right-color: windowtext; border-right-style: solid; border-right-width: 1pt; border-bottom-color: windowtext; border-bottom-style: solid; border-bottom-width: 1pt; border-left-color: windowtext; border-left-style: solid; border-left-width: 1pt; padding-top: 0in; padding-right: 5.4pt; padding-bottom: 0in; padding-left: 5.4pt;"><p class="MsoNormal" style="margin-bottom: 0.0001pt; line-height: normal;"><span style="color: black;">Category 1</span></p></td><td width="153" valign="bottom" style="width: 114.7pt; border-top-color: initial; border-top-style: none; border-top-width: initial; border-left-color: initial; border-left-style: none; border-left-width: initial; border-bottom-color: windowtext; border-bottom-style: solid; border-bottom-width: 1pt; border-right-color: windowtext; border-right-style: solid; border-right-width: 1pt; padding-top: 0in; padding-right: 5.4pt; padding-bottom: 0in; padding-left: 5.4pt;"><p class="MsoNormal" align="right" style="margin-bottom: 0.0001pt; text-align: right; line-height: normal;"><span style="color: black;">4.3</span></p></td><td width="153" valign="bottom" style="width: 114.7pt; border-top-color: initial; border-top-style: none; border-top-width: initial; border-left-color: initial; border-left-style: none; border-left-width: initial; border-bottom-color: windowtext; border-bottom-style: solid; border-bottom-width: 1pt; border-right-color: windowtext; border-right-style: solid; border-right-width: 1pt; padding-top: 0in; padding-right: 5.4pt; padding-bottom: 0in; padding-left: 5.4pt;"><p class="MsoNormal" align="right" style="margin-bottom: 0.0001pt; text-align: right; line-height: normal;"><span style="color: black;">2.4</span></p></td><td width="153" valign="bottom" style="width: 114.7pt; border-top-color: initial; border-top-style: none; border-top-width: initial; border-left-color: initial; border-left-style: none; border-left-width: initial; border-bottom-color: windowtext; border-bottom-style: solid; border-bottom-width: 1pt; border-right-color: windowtext; border-right-style: solid; border-right-width: 1pt; padding-top: 0in; padding-right: 5.4pt; padding-bottom: 0in; padding-left: 5.4pt;"><p class="MsoNormal" align="right" style="margin-bottom: 0.0001pt; text-align: right; line-height: normal;"><span style="color: black;">2</span></p></td><td width="153" valign="bottom" style="width: 114.7pt; border-top-color: initial; border-top-style: none; border-top-width: initial; border-left-color: initial; border-left-style: none; border-left-width: initial; border-bottom-color: windowtext; border-bottom-style: solid; border-bottom-width: 1pt; border-right-color: windowtext; border-right-style: solid; border-right-width: 1pt; padding-top: 0in; padding-right: 5.4pt; padding-bottom: 0in; padding-left: 5.4pt;"><p class="MsoNormal" align="right" style="margin-bottom: 0.0001pt; text-align: right; line-height: normal;"><span style="color: black;">3</span></p></td></tr><tr><td width="98" valign="bottom" style="width: 73.65pt; border-top-color: initial; border-top-style: none; border-top-width: initial; border-right-color: windowtext; border-right-style: solid; border-right-width: 1pt; border-bottom-color: windowtext; border-bottom-style: solid; border-bottom-width: 1pt; border-left-color: windowtext; border-left-style: solid; border-left-width: 1pt; padding-top: 0in; padding-right: 5.4pt; padding-bottom: 0in; padding-left: 5.4pt;"><p class="MsoNormal" style="margin-bottom: 0.0001pt; line-height: normal;"><span style="color: black;">Category 2</span></p></td><td width="153" valign="bottom" style="width: 114.7pt; border-top-color: initial; border-top-style: none; border-top-width: initial; border-left-color: initial; border-left-style: none; border-left-width: initial; border-bottom-color: windowtext; border-bottom-style: solid; border-bottom-width: 1pt; border-right-color: windowtext; border-right-style: solid; border-right-width: 1pt; padding-top: 0in; padding-right: 5.4pt; padding-bottom: 0in; padding-left: 5.4pt;"><p class="MsoNormal" align="right" style="margin-bottom: 0.0001pt; text-align: right; line-height: normal;"><span style="color: black;">2.5</span></p></td><td width="153" valign="bottom" style="width: 114.7pt; border-top-color: initial; border-top-style: none; border-top-width: initial; border-left-color: initial; border-left-style: none; border-left-width: initial; border-bottom-color: windowtext; border-bottom-style: solid; border-bottom-width: 1pt; border-right-color: windowtext; border-right-style: solid; border-right-width: 1pt; padding-top: 0in; padding-right: 5.4pt; padding-bottom: 0in; padding-left: 5.4pt;"><p class="MsoNormal" align="right" style="margin-bottom: 0.0001pt; text-align: right; line-height: normal;"><span style="color: black;">4.4</span></p></td><td width="153" valign="bottom" style="width: 114.7pt; border-top-color: initial; border-top-style: none; border-top-width: initial; border-left-color: initial; border-left-style: none; border-left-width: initial; border-bottom-color: windowtext; border-bottom-style: solid; border-bottom-width: 1pt; border-right-color: windowtext; border-right-style: solid; border-right-width: 1pt; padding-top: 0in; padding-right: 5.4pt; padding-bottom: 0in; padding-left: 5.4pt;"><p class="MsoNormal" align="right" style="margin-bottom: 0.0001pt; text-align: right; line-height: normal;"><span style="color: black;">2</span></p></td><td width="153" valign="bottom" style="width: 114.7pt; border-top-color: initial; border-top-style: none; border-top-width: initial; border-left-color: initial; border-left-style: none; border-left-width: initial; border-bottom-color: windowtext; border-bottom-style: solid; border-bottom-width: 1pt; border-right-color: windowtext; border-right-style: solid; border-right-width: 1pt; padding-top: 0in; padding-right: 5.4pt; padding-bottom: 0in; padding-left: 5.4pt;"><p class="MsoNormal" align="right" style="margin-bottom: 0.0001pt; text-align: right; line-height: normal;"><span style="color: black;">2</span></p></td></tr><tr><td width="98" valign="bottom" style="width: 73.65pt; border-top-color: initial; border-top-style: none; border-top-width: initial; border-right-color: windowtext; border-right-style: solid; border-right-width: 1pt; border-bottom-color: windowtext; border-bottom-style: solid; border-bottom-width: 1pt; border-left-color: windowtext; border-left-style: solid; border-left-width: 1pt; padding-top: 0in; padding-right: 5.4pt; padding-bottom: 0in; padding-left: 5.4pt;"><p class="MsoNormal" style="margin-bottom: 0.0001pt; line-height: normal;"><span style="color: black;">Category 3</span></p></td><td width="153" valign="bottom" style="width: 114.7pt; border-top-color: initial; border-top-style: none; border-top-width: initial; border-left-color: initial; border-left-style: none; border-left-width: initial; border-bottom-color: windowtext; border-bottom-style: solid; border-bottom-width: 1pt; border-right-color: windowtext; border-right-style: solid; border-right-width: 1pt; padding-top: 0in; padding-right: 5.4pt; padding-bottom: 0in; padding-left: 5.4pt;"><p class="MsoNormal" align="right" style="margin-bottom: 0.0001pt; text-align: right; line-height: normal;"><span style="color: black;">3.5</span></p></td><td width="153" valign="bottom" style="width: 114.7pt; border-top-color: initial; border-top-style: none; border-top-width: initial; border-left-color: initial; border-left-style: none; border-left-width: initial; border-bottom-color: windowtext; border-bottom-style: solid; border-bottom-width: 1pt; border-right-color: windowtext; border-right-style: solid; border-right-width: 1pt; padding-top: 0in; padding-right: 5.4pt; padding-bottom: 0in; padding-left: 5.4pt;"><p class="MsoNormal" align="right" style="margin-bottom: 0.0001pt; text-align: right; line-height: normal;"><span style="color: black;">1.8</span></p></td><td width="153" valign="bottom" style="width: 114.7pt; border-top-color: initial; border-top-style: none; border-top-width: initial; border-left-color: initial; border-left-style: none; border-left-width: initial; border-bottom-color: windowtext; border-bottom-style: solid; border-bottom-width: 1pt; border-right-color: windowtext; border-right-style: solid; border-right-width: 1pt; padding-top: 0in; padding-right: 5.4pt; padding-bottom: 0in; padding-left: 5.4pt;"><p class="MsoNormal" align="right" style="margin-bottom: 0.0001pt; text-align: right; line-height: normal;"><span style="color: black;">3</span></p></td><td width="153" valign="bottom" style="width: 114.7pt; border-top-color: initial; border-top-style: none; border-top-width: initial; border-left-color: initial; border-left-style: none; border-left-width: initial; border-bottom-color: windowtext; border-bottom-style: solid; border-bottom-width: 1pt; border-right-color: windowtext; border-right-style: solid; border-right-width: 1pt; padding-top: 0in; padding-right: 5.4pt; padding-bottom: 0in; padding-left: 5.4pt;"><p class="MsoNormal" align="right" style="margin-bottom: 0.0001pt; text-align: right; line-height: normal;"><span style="color: black;">5</span></p></td></tr><tr><td width="98" valign="bottom" style="width: 73.65pt; border-top-color: initial; border-top-style: none; border-top-width: initial; border-right-color: windowtext; border-right-style: solid; border-right-width: 1pt; border-bottom-color: windowtext; border-bottom-style: solid; border-bottom-width: 1pt; border-left-color: windowtext; border-left-style: solid; border-left-width: 1pt; padding-top: 0in; padding-right: 5.4pt; padding-bottom: 0in; padding-left: 5.4pt;"><p class="MsoNormal" style="margin-bottom: 0.0001pt; line-height: normal;"><span style="color: black;">Category 4</span></p></td><td width="153" valign="bottom" style="width: 114.7pt; border-top-color: initial; border-top-style: none; border-top-width: initial; border-left-color: initial; border-left-style: none; border-left-width: initial; border-bottom-color: windowtext; border-bottom-style: solid; border-bottom-width: 1pt; border-right-color: windowtext; border-right-style: solid; border-right-width: 1pt; padding-top: 0in; padding-right: 5.4pt; padding-bottom: 0in; padding-left: 5.4pt;"><p class="MsoNormal" align="right" style="margin-bottom: 0.0001pt; text-align: right; line-height: normal;"><span style="color: black;">4.5</span></p></td><td width="153" valign="bottom" style="width: 114.7pt; border-top-color: initial; border-top-style: none; border-top-width: initial; border-left-color: initial; border-left-style: none; border-left-width: initial; border-bottom-color: windowtext; border-bottom-style: solid; border-bottom-width: 1pt; border-right-color: windowtext; border-right-style: solid; border-right-width: 1pt; padding-top: 0in; padding-right: 5.4pt; padding-bottom: 0in; padding-left: 5.4pt;"><p class="MsoNormal" align="right" style="margin-bottom: 0.0001pt; text-align: right; line-height: normal;"><span style="color: black;">2.8</span></p></td><td width="153" valign="bottom" style="width: 114.7pt; border-top-color: initial; border-top-style: none; border-top-width: initial; border-left-color: initial; border-left-style: none; border-left-width: initial; border-bottom-color: windowtext; border-bottom-style: solid; border-bottom-width: 1pt; border-right-color: windowtext; border-right-style: solid; border-right-width: 1pt; padding-top: 0in; padding-right: 5.4pt; padding-bottom: 0in; padding-left: 5.4pt;"><p class="MsoNormal" align="right" style="margin-bottom: 0.0001pt; text-align: right; line-height: normal;"><span style="color: black;">5</span></p></td><td width="153" valign="bottom" style="width: 114.7pt; border-top-color: initial; border-top-style: none; border-top-width: initial; border-left-color: initial; border-left-style: none; border-left-width: initial; border-bottom-color: windowtext; border-bottom-style: solid; border-bottom-width: 1pt; border-right-color: windowtext; border-right-style: solid; border-right-width: 1pt; padding-top: 0in; padding-right: 5.4pt; padding-bottom: 0in; padding-left: 5.4pt;"><p class="MsoNormal" align="right" style="margin-bottom: 0.0001pt; text-align: right; line-height: normal;"><span style="color: black;">2</span></p></td></tr></tbody></table>

### Download Template

Please download the sample Chart with Filtering, Grouping, and Ordering document we created in this article:

*   [Chart Template.docx](https://github.com/groupdocs-assembly/GroupDocs.Assembly-for-Java/blob/master/Examples/GroupDocs.Assembly.Examples.Java/Data/Storage/Word%20Templates/Chart%20with%20Filtering%2C%20Grouping%2C%20and%20Ordering.docx?raw=true)

### Generating The Report

<table class="highlight tab-size js-file-line-container" data-tab-size="8" data-paste-markdown-skip=""><tbody><tr><td id="file-examples-groupdocs-assembly-examples-java-src-main-java-com-groupdocs-assembly-examples-generatereport-chartwithfilteringgroupingandorderingdocument-java-L1" class="blob-num js-line-number" data-line-number="1"></td><td id="file-examples-groupdocs-assembly-examples-java-src-main-java-com-groupdocs-assembly-examples-generatereport-chartwithfilteringgroupingandorderingdocument-java-LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> For complete examples and data files, please go to https://github.com/groupdocs-assembly/GroupDocs.Assembly-for-Java</span></td></tr><tr><td id="file-examples-groupdocs-assembly-examples-java-src-main-java-com-groupdocs-assembly-examples-generatereport-chartwithfilteringgroupingandorderingdocument-java-L2" class="blob-num js-line-number" data-line-number="2"></td><td id="file-examples-groupdocs-assembly-examples-java-src-main-java-com-groupdocs-assembly-examples-generatereport-chartwithfilteringgroupingandorderingdocument-java-LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">String</span> srcDocument <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">"</span>/Word Templates/Chart with Filtering, Grouping, and Ordering.docx<span class="pl-pds">"</span></span>;</td></tr><tr><td id="file-examples-groupdocs-assembly-examples-java-src-main-java-com-groupdocs-assembly-examples-generatereport-chartwithfilteringgroupingandorderingdocument-java-L3" class="blob-num js-line-number" data-line-number="3"></td><td id="file-examples-groupdocs-assembly-examples-java-src-main-java-com-groupdocs-assembly-examples-generatereport-chartwithfilteringgroupingandorderingdocument-java-LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">String</span> docReport <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">"</span>/Word Reports/Chart with Filtering, Grouping, and Ordering_report.docx<span class="pl-pds">"</span></span>;</td></tr><tr><td id="file-examples-groupdocs-assembly-examples-java-src-main-java-com-groupdocs-assembly-examples-generatereport-chartwithfilteringgroupingandorderingdocument-java-L4" class="blob-num js-line-number" data-line-number="4"></td><td id="file-examples-groupdocs-assembly-examples-java-src-main-java-com-groupdocs-assembly-examples-generatereport-chartwithfilteringgroupingandorderingdocument-java-LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-k">try</span> {</td></tr><tr><td id="file-examples-groupdocs-assembly-examples-java-src-main-java-com-groupdocs-assembly-examples-generatereport-chartwithfilteringgroupingandorderingdocument-java-L5" class="blob-num js-line-number" data-line-number="5"></td><td id="file-examples-groupdocs-assembly-examples-java-src-main-java-com-groupdocs-assembly-examples-generatereport-chartwithfilteringgroupingandorderingdocument-java-LC5" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">DocumentAssembler</span> assembler <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-smi">DocumentAssembler</span>();</td></tr><tr><td id="file-examples-groupdocs-assembly-examples-java-src-main-java-com-groupdocs-assembly-examples-generatereport-chartwithfilteringgroupingandorderingdocument-java-L6" class="blob-num js-line-number" data-line-number="6"></td><td id="file-examples-groupdocs-assembly-examples-java-src-main-java-com-groupdocs-assembly-examples-generatereport-chartwithfilteringgroupingandorderingdocument-java-LC6" class="blob-code blob-code-inner js-file-line">assembler<span class="pl-k">.</span>assembleDocument(<span class="pl-smi">CommonUtilities</span><span class="pl-k">.</span>getTestDataPath(srcDocument),</td></tr><tr><td id="file-examples-groupdocs-assembly-examples-java-src-main-java-com-groupdocs-assembly-examples-generatereport-chartwithfilteringgroupingandorderingdocument-java-L7" class="blob-num js-line-number" data-line-number="7"></td><td id="file-examples-groupdocs-assembly-examples-java-src-main-java-com-groupdocs-assembly-examples-generatereport-chartwithfilteringgroupingandorderingdocument-java-LC7" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">CommonUtilities</span><span class="pl-k">.</span>getTestOutPath(docReport), <span class="pl-k">new</span> <span class="pl-smi">DataSourceInfo</span>(<span class="pl-k">new</span> <span class="pl-smi">DataStorage</span>(), <span class="pl-c1">null</span>));</td></tr><tr><td id="file-examples-groupdocs-assembly-examples-java-src-main-java-com-groupdocs-assembly-examples-generatereport-chartwithfilteringgroupingandorderingdocument-java-L8" class="blob-num js-line-number" data-line-number="8"></td><td id="file-examples-groupdocs-assembly-examples-java-src-main-java-com-groupdocs-assembly-examples-generatereport-chartwithfilteringgroupingandorderingdocument-java-LC8" class="blob-code blob-code-inner js-file-line">} <span class="pl-k">catch</span> (<span class="pl-smi">Exception</span> exp) {</td></tr><tr><td id="file-examples-groupdocs-assembly-examples-java-src-main-java-com-groupdocs-assembly-examples-generatereport-chartwithfilteringgroupingandorderingdocument-java-L9" class="blob-num js-line-number" data-line-number="9"></td><td id="file-examples-groupdocs-assembly-examples-java-src-main-java-com-groupdocs-assembly-examples-generatereport-chartwithfilteringgroupingandorderingdocument-java-LC9" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">System</span><span class="pl-k">.</span>out<span class="pl-k">.</span>println(<span class="pl-s"><span class="pl-pds">"</span>Exception: <span class="pl-pds">"</span></span> <span class="pl-k">+</span> exp<span class="pl-k">.</span>getMessage());</td></tr><tr><td id="file-examples-groupdocs-assembly-examples-java-src-main-java-com-groupdocs-assembly-examples-generatereport-chartwithfilteringgroupingandorderingdocument-java-L10" class="blob-num js-line-number" data-line-number="10"></td><td id="file-examples-groupdocs-assembly-examples-java-src-main-java-com-groupdocs-assembly-examples-generatereport-chartwithfilteringgroupingandorderingdocument-java-LC10" class="blob-code blob-code-inner js-file-line">}</td></tr></tbody></table>

[view raw](https://gist.github.com/GroupDocsGists/0b6e4846e90cffde96b3072f7b117399/raw/874bc9c9441d8072eaa58c1ffd1c20007388c200/Examples-GroupDocs.Assembly.Examples.Java-src-main-java-com-groupdocs-assembly-examples-GenerateReport-chartwithfilteringgroupingandorderingdocument.java) [Examples-GroupDocs.Assembly.Examples.Java-src-main-java-com-groupdocs-assembly-examples-GenerateReport-chartwithfilteringgroupingandorderingdocument.java](https://gist.github.com/GroupDocsGists/0b6e4846e90cffde96b3072f7b117399#file-examples-groupdocs-assembly-examples-java-src-main-java-com-groupdocs-assembly-examples-generatereport-chartwithfilteringgroupingandorderingdocument-java) hosted with ❤ by [GitHub](https://github.com)

## Column Chart in OpenOffice Document

To be investigated.