---
id: in-table-list-with-filtering-grouping-and-ordering-in-html-document
url: assembly/java/in-table-list-with-filtering-grouping-and-ordering-in-html-document
title: In-Table List with Filtering Grouping and Ordering in HTML Document
weight: 4
description: ""
keywords: 
productName: GroupDocs.Assembly for Java
hideChildren: False
---
# In-Table List with Filtering, Grouping, and Ordering in HTML Document

<table class="sectionMacro" border="0" cellpadding="5" cellspacing="0" width="100%"><tbody><tr><td valign="top" width="50%"><div class="panel" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="panelHeader" style="border-bottom-width: 1px; background-color: rgb(176, 196, 222);"><b>Contents Summary</b></div><div class="panelContent"><style type="text/css">div.rbtoc1590607146227 { padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; }div.rbtoc1590607146227 ul { list-style-type: none; list-style-image: none; margin-left: 0px; }div.rbtoc1590607146227 li { margin-left: 0px; padding-left: 0px; }</style><div class="toc rbtoc1590607146227"><ul class="toc-indentation"><li><span class="TOCOutline">1</span> <a href="#In-TableListwithFiltering,Grouping,andOrderinginHTMLDocument-In-TableListwithFiltering,Grouping,andOrderinginHTMLDocument">In-Table List with Filtering, Grouping, and Ordering in HTML Document</a><ul class="toc-indentation"><li><span class="TOCOutline">1.1</span> <a href="#In-TableListwithFiltering,Grouping,andOrderinginHTMLDocument-ReportingRequirement">Reporting Requirement</a></li><li><span class="TOCOutline">1.2</span> <a href="#In-TableListwithFiltering,Grouping,andOrderinginHTMLDocument-AddingSyntaxtobeevaluatedbyGroupDocs.AssemblyEngine">Adding Syntax to be evaluated by GroupDocs.Assembly Engine</a></li><li><span class="TOCOutline">1.3</span> <a href="#In-TableListwithFiltering,Grouping,andOrderinginHTMLDocument-DownloadIn-TableListwithFiltering,Grouping,andOrderingTemplate">Download In-Table List with Filtering, Grouping, and Ordering Template</a></li><li><span class="TOCOutline">1.4</span> <a href="#In-TableListwithFiltering,Grouping,andOrderinginHTMLDocument-GeneratingTheReport">Generating The Report</a></li></ul></li></ul></div></div></div></td><td valign="top" width="15%">&nbsp;</td><td valign="top" width="35%">&nbsp;</td></tr></tbody></table>

{{< alert style="info" >}}In this article, we will use GroupDocs.Assembly to generate In-TableList with Filtering, Grouping, and Ordering report in HTML Document format.{{< /alert >}}{{< alert style="info" >}}The code uses some of the objects defined in The Business Layer.{{< /alert >}}

## In-Table List with Filtering, Grouping, and Ordering in HTML Document

### Reporting Requirement

As a report developer, you are required to represent managers' contract information with the following key requirements:

*   Report must show each manager along with sum of prices of his contracts.
*   It must represent all the information in tabular form.
*   Report must be generated in the HTML Document.

### Adding Syntax to be evaluated by GroupDocs.Assembly Engine

<<foreach \[in getContracts() .where(c => c.getDate().getYear() + 1900 == 2015) .groupBy(c => c.getManager()) .orderBy(g => g.key.getName())\]>> <</foreach>>

| Manager | Contract Price |
| --- | --- |
| **<<\[key.getName()\]>>** | <<\[sum(c => c.getPrice())\]>> |

### Download In-Table List with Filtering, Grouping, and Ordering Template

Please download the sample template we created in this article:

*   [In-Table List with Filtering, Grouping, and Ordering.html](https://github.com/groupdocs-assembly/GroupDocs.Assembly-for-Java/blob/master/Examples/GroupDocs.Assembly.Examples.Java/Data/Storage/Html%20Templates/In-Table%20List%20with%20Filtering%2C%20Grouping%2C%20and%20Ordering.html?raw=true)

### Generating The Report

<table class="highlight tab-size js-file-line-container" data-tab-size="8" data-paste-markdown-skip=""><tbody><tr><td id="file-examples-groupdocs-assembly-examples-java-src-main-java-com-groupdocs-assembly-examples-generatereport-intablelistwithfilteringroupingandorderinghtml-java-L1" class="blob-num js-line-number" data-line-number="1"></td><td id="file-examples-groupdocs-assembly-examples-java-src-main-java-com-groupdocs-assembly-examples-generatereport-intablelistwithfilteringroupingandorderinghtml-java-LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> For complete examples and data files, please go to https://github.com/groupdocs-assembly/GroupDocs.Assembly-for-Java</span></td></tr><tr><td id="file-examples-groupdocs-assembly-examples-java-src-main-java-com-groupdocs-assembly-examples-generatereport-intablelistwithfilteringroupingandorderinghtml-java-L2" class="blob-num js-line-number" data-line-number="2"></td><td id="file-examples-groupdocs-assembly-examples-java-src-main-java-com-groupdocs-assembly-examples-generatereport-intablelistwithfilteringroupingandorderinghtml-java-LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">String</span> srcDocument <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">"</span>/Html Templates/In-Table List with Filtering, Grouping, and Ordering.html<span class="pl-pds">"</span></span>;</td></tr><tr><td id="file-examples-groupdocs-assembly-examples-java-src-main-java-com-groupdocs-assembly-examples-generatereport-intablelistwithfilteringroupingandorderinghtml-java-L3" class="blob-num js-line-number" data-line-number="3"></td><td id="file-examples-groupdocs-assembly-examples-java-src-main-java-com-groupdocs-assembly-examples-generatereport-intablelistwithfilteringroupingandorderinghtml-java-LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">String</span> docReport <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">"</span>/Html Reports/In-Table List with Filtering, Grouping, and Ordering_report.html<span class="pl-pds">"</span></span>;</td></tr><tr><td id="file-examples-groupdocs-assembly-examples-java-src-main-java-com-groupdocs-assembly-examples-generatereport-intablelistwithfilteringroupingandorderinghtml-java-L4" class="blob-num js-line-number" data-line-number="4"></td><td id="file-examples-groupdocs-assembly-examples-java-src-main-java-com-groupdocs-assembly-examples-generatereport-intablelistwithfilteringroupingandorderinghtml-java-LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-k">try</span> {</td></tr><tr><td id="file-examples-groupdocs-assembly-examples-java-src-main-java-com-groupdocs-assembly-examples-generatereport-intablelistwithfilteringroupingandorderinghtml-java-L5" class="blob-num js-line-number" data-line-number="5"></td><td id="file-examples-groupdocs-assembly-examples-java-src-main-java-com-groupdocs-assembly-examples-generatereport-intablelistwithfilteringroupingandorderinghtml-java-LC5" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">DocumentAssembler</span> assembler <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-smi">DocumentAssembler</span>();</td></tr><tr><td id="file-examples-groupdocs-assembly-examples-java-src-main-java-com-groupdocs-assembly-examples-generatereport-intablelistwithfilteringroupingandorderinghtml-java-L6" class="blob-num js-line-number" data-line-number="6"></td><td id="file-examples-groupdocs-assembly-examples-java-src-main-java-com-groupdocs-assembly-examples-generatereport-intablelistwithfilteringroupingandorderinghtml-java-LC6" class="blob-code blob-code-inner js-file-line">assembler<span class="pl-k">.</span>assembleDocument(<span class="pl-smi">CommonUtilities</span><span class="pl-k">.</span>getDataPath(srcDocument),</td></tr><tr><td id="file-examples-groupdocs-assembly-examples-java-src-main-java-com-groupdocs-assembly-examples-generatereport-intablelistwithfilteringroupingandorderinghtml-java-L7" class="blob-num js-line-number" data-line-number="7"></td><td id="file-examples-groupdocs-assembly-examples-java-src-main-java-com-groupdocs-assembly-examples-generatereport-intablelistwithfilteringroupingandorderinghtml-java-LC7" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">CommonUtilities</span><span class="pl-k">.</span>getOutPath(docReport),<span class="pl-k">new</span> <span class="pl-smi">DataSourceInfo</span>( <span class="pl-k">new</span> <span class="pl-smi">DataStorage</span>(), <span class="pl-c1">null</span>));</td></tr><tr><td id="file-examples-groupdocs-assembly-examples-java-src-main-java-com-groupdocs-assembly-examples-generatereport-intablelistwithfilteringroupingandorderinghtml-java-L8" class="blob-num js-line-number" data-line-number="8"></td><td id="file-examples-groupdocs-assembly-examples-java-src-main-java-com-groupdocs-assembly-examples-generatereport-intablelistwithfilteringroupingandorderinghtml-java-LC8" class="blob-code blob-code-inner js-file-line">} <span class="pl-k">catch</span> (<span class="pl-smi">Exception</span> exp) {</td></tr><tr><td id="file-examples-groupdocs-assembly-examples-java-src-main-java-com-groupdocs-assembly-examples-generatereport-intablelistwithfilteringroupingandorderinghtml-java-L9" class="blob-num js-line-number" data-line-number="9"></td><td id="file-examples-groupdocs-assembly-examples-java-src-main-java-com-groupdocs-assembly-examples-generatereport-intablelistwithfilteringroupingandorderinghtml-java-LC9" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">System</span><span class="pl-k">.</span>out<span class="pl-k">.</span>println(<span class="pl-s"><span class="pl-pds">"</span>Exception: <span class="pl-pds">"</span></span> <span class="pl-k">+</span> exp<span class="pl-k">.</span>getMessage());</td></tr><tr><td id="file-examples-groupdocs-assembly-examples-java-src-main-java-com-groupdocs-assembly-examples-generatereport-intablelistwithfilteringroupingandorderinghtml-java-L10" class="blob-num js-line-number" data-line-number="10"></td><td id="file-examples-groupdocs-assembly-examples-java-src-main-java-com-groupdocs-assembly-examples-generatereport-intablelistwithfilteringroupingandorderinghtml-java-LC10" class="blob-code blob-code-inner js-file-line">}</td></tr></tbody></table>

[view raw](https://gist.github.com/GroupDocsGists/4554b48316196d2579cb1cbd679b8bfe/raw/f2afde1bce803a30725356cd592cd21c870b7e1b/Examples-GroupDocs.Assembly.Examples.Java-src-main-java-com-groupdocs-assembly-examples-GenerateReport-intablelistwithfilteringroupingandorderinghtml.java) [Examples-GroupDocs.Assembly.Examples.Java-src-main-java-com-groupdocs-assembly-examples-GenerateReport-intablelistwithfilteringroupingandorderinghtml.java](https://gist.github.com/GroupDocsGists/4554b48316196d2579cb1cbd679b8bfe#file-examples-groupdocs-assembly-examples-java-src-main-java-com-groupdocs-assembly-examples-generatereport-intablelistwithfilteringroupingandorderinghtml-java) hosted with ❤ by [GitHub](https://github.com)