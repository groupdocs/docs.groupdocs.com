---
id: business-case-of-a-shopping-store
url: assembly/net/business-case-of-a-shopping-store
title: Business Case of a Shopping Store
weight: 1
description: ""
keywords: 
productName: GroupDocs.Assembly for .NET
hideChildren: False
---
{{< alert style="info" >}}This business case has been conceived for the demonstration purpose and serves well for a typical shopping store. There may be simpler or complex scenarios in real life businesses.{{< /alert >}}

<table class="sectionMacro" border="0" cellpadding="5" cellspacing="0" width="100%"><tbody><tr><td valign="top" width="50%"><div class="panel" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="panelHeader" style="border-bottom-width: 1px; background-color: rgb(176, 196, 222);"><b>Contents Summary</b></div><div class="panelContent"><style type="text/css">div.rbtoc1590388622277 { padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; }div.rbtoc1590388622277 ul { list-style-type: none; list-style-image: none; margin-left: 0px; }div.rbtoc1590388622277 li { margin-left: 0px; padding-left: 0px; }</style><div class="toc rbtoc1590388622277"><ul class="toc-indentation"><li><span class="TOCOutline">1</span> <a href="#BusinessCaseofaShoppingStore-BusinessCase">Business Case</a></li><li><span class="TOCOutline">2</span> <a href="#BusinessCaseofaShoppingStore-ReportingRequirements">Reporting Requirements</a></li><li><span class="TOCOutline">3</span> <a href="#BusinessCaseofaShoppingStore-BusinessObjects">Business Objects</a><ul class="toc-indentation"><li><span class="TOCOutline">3.1</span> <a href="#BusinessCaseofaShoppingStore-ClassDiagram">Class Diagram</a></li><li><span class="TOCOutline">3.2</span> <a href="#BusinessCaseofaShoppingStore-CustomObjects">Custom Objects</a></li><li><span class="TOCOutline">3.3</span> <a href="#BusinessCaseofaShoppingStore-DatabaseEntities">Database Entities</a></li></ul></li><li><span class="TOCOutline">4</span> <a href="#BusinessCaseofaShoppingStore-TemplatesLocation">Templates Location</a></li><li><span class="TOCOutline">5</span> <a href="#BusinessCaseofaShoppingStore-ReportsLocation">Reports Location</a></li></ul></div></div></div></td><td valign="top" width="15%"></td><td valign="top" width="35%"></td></tr></tbody></table>

## Business Case

1.  There are many customers of the shopping store.
2.  The store offers multiple products.
3.  A customer may place multiple orders.
4.  An order may have many products.
5.  The data may or may not be stored in a database system.

## Reporting Requirements

1.  A report based on some criteria is to be generated.
2.  The report can be in any of the formats: Documents, Spreadsheets, Presentations.
3.  The report developer must be able to define templates and then generate reports.

## Business Objects

### Class Diagram

![](https://raw.githubusercontent.com/groupdocsassembly/GroupDocs_Assembly_NET/master/Examples/Data/Data%20Sources/Database%20Backup/class.PNG)

### Custom Objects

Here are our customer objects:

<table class="highlight tab-size js-file-line-container" data-tab-size="8" data-paste-markdown-skip=""><tbody><tr><td id="file-projectbusinesssobjects-cs-L1" class="blob-num js-line-number" data-line-number="1"></td><td id="file-projectbusinesssobjects-cs-LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> For complete examples and data files, please go to https://github.com/groupdocsassembly/GroupDocs_Assembly_NET</span></td></tr><tr><td id="file-projectbusinesssobjects-cs-L2" class="blob-num js-line-number" data-line-number="2"></td><td id="file-projectbusinesssobjects-cs-LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-k">public</span> <span class="pl-k">class</span> <span class="pl-en">Customer</span></td></tr><tr><td id="file-projectbusinesssobjects-cs-L3" class="blob-num js-line-number" data-line-number="3"></td><td id="file-projectbusinesssobjects-cs-LC3" class="blob-code blob-code-inner js-file-line">{</td></tr><tr><td id="file-projectbusinesssobjects-cs-L4" class="blob-num js-line-number" data-line-number="4"></td><td id="file-projectbusinesssobjects-cs-LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-k">public</span> <span class="pl-en">String</span> <span class="pl-smi">CustomerName</span> { <span class="pl-k">get</span>; <span class="pl-k">set</span>; }</td></tr><tr><td id="file-projectbusinesssobjects-cs-L5" class="blob-num js-line-number" data-line-number="5"></td><td id="file-projectbusinesssobjects-cs-LC5" class="blob-code blob-code-inner js-file-line"><span class="pl-k">public</span> <span class="pl-k">string</span> <span class="pl-smi">ShippingAddress</span> { <span class="pl-k">get</span>; <span class="pl-k">set</span>; }</td></tr><tr><td id="file-projectbusinesssobjects-cs-L6" class="blob-num js-line-number" data-line-number="6"></td><td id="file-projectbusinesssobjects-cs-LC6" class="blob-code blob-code-inner js-file-line"><span class="pl-k">public</span> <span class="pl-k">string</span> <span class="pl-smi">CustomerContactNumber</span> { <span class="pl-k">get</span>; <span class="pl-k">set</span>; }</td></tr><tr><td id="file-projectbusinesssobjects-cs-L7" class="blob-num js-line-number" data-line-number="7"></td><td id="file-projectbusinesssobjects-cs-LC7" class="blob-code blob-code-inner js-file-line"><span class="pl-k">public</span> <span class="pl-en">IEnumerable</span>&lt;<span class="pl-en">Order</span>&gt; <span class="pl-smi">Order</span> { <span class="pl-k">get</span>; <span class="pl-k">set</span>; }</td></tr><tr><td id="file-projectbusinesssobjects-cs-L8" class="blob-num js-line-number" data-line-number="8"></td><td id="file-projectbusinesssobjects-cs-LC8" class="blob-code blob-code-inner js-file-line"><span class="pl-k">public</span> <span class="pl-en">String</span> <span class="pl-smi">Photo</span> { <span class="pl-k">get</span> { <span class="pl-k">return</span> <span class="pl-smi">Path</span>.<span class="pl-en">Combine</span>(<span class="pl-smi">Path</span>.<span class="pl-en">GetFullPath</span>(<span class="pl-smi">imagePath</span>), <span class="pl-s"><span class="pl-pds">"</span>no-photo.jpg<span class="pl-pds">"</span></span>); } }</td></tr><tr><td id="file-projectbusinesssobjects-cs-L9" class="blob-num js-line-number" data-line-number="9"></td><td id="file-projectbusinesssobjects-cs-LC9" class="blob-code blob-code-inner js-file-line">}</td></tr><tr><td id="file-projectbusinesssobjects-cs-L10" class="blob-num js-line-number" data-line-number="10"></td><td id="file-projectbusinesssobjects-cs-LC10" class="blob-code blob-code-inner js-file-line"><span class="pl-k">public</span> <span class="pl-k">class</span> <span class="pl-en">Order</span></td></tr><tr><td id="file-projectbusinesssobjects-cs-L11" class="blob-num js-line-number" data-line-number="11"></td><td id="file-projectbusinesssobjects-cs-LC11" class="blob-code blob-code-inner js-file-line">{</td></tr><tr><td id="file-projectbusinesssobjects-cs-L12" class="blob-num js-line-number" data-line-number="12"></td><td id="file-projectbusinesssobjects-cs-LC12" class="blob-code blob-code-inner js-file-line"><span class="pl-k">public</span> <span class="pl-en">Customer</span> <span class="pl-smi">Customer</span> { <span class="pl-k">get</span>; <span class="pl-k">set</span>; }</td></tr><tr><td id="file-projectbusinesssobjects-cs-L13" class="blob-num js-line-number" data-line-number="13"></td><td id="file-projectbusinesssobjects-cs-LC13" class="blob-code blob-code-inner js-file-line"><span class="pl-k">public</span> <span class="pl-en">Product</span> <span class="pl-smi">Product</span> { <span class="pl-k">get</span>; <span class="pl-k">set</span>; }</td></tr><tr><td id="file-projectbusinesssobjects-cs-L14" class="blob-num js-line-number" data-line-number="14"></td><td id="file-projectbusinesssobjects-cs-LC14" class="blob-code blob-code-inner js-file-line"><span class="pl-k">public</span> <span class="pl-k">int</span> <span class="pl-smi">ProductQuantity</span> { <span class="pl-k">get</span>; <span class="pl-k">set</span>; }</td></tr><tr><td id="file-projectbusinesssobjects-cs-L15" class="blob-num js-line-number" data-line-number="15"></td><td id="file-projectbusinesssobjects-cs-LC15" class="blob-code blob-code-inner js-file-line"><span class="pl-k">public</span> <span class="pl-k">int</span> <span class="pl-smi">Price</span> { <span class="pl-k">get</span>; <span class="pl-k">set</span>; }</td></tr><tr><td id="file-projectbusinesssobjects-cs-L16" class="blob-num js-line-number" data-line-number="16"></td><td id="file-projectbusinesssobjects-cs-LC16" class="blob-code blob-code-inner js-file-line"><span class="pl-k">public</span> <span class="pl-k">string</span> <span class="pl-smi">Barcode</span> { <span class="pl-k">get</span>; <span class="pl-k">set</span>; }</td></tr><tr><td id="file-projectbusinesssobjects-cs-L17" class="blob-num js-line-number" data-line-number="17"></td><td id="file-projectbusinesssobjects-cs-LC17" class="blob-code blob-code-inner js-file-line"><span class="pl-k">public</span> <span class="pl-en">DateTime</span> <span class="pl-smi">OrderDate</span> { <span class="pl-k">get</span>; <span class="pl-k">set</span>; }</td></tr><tr><td id="file-projectbusinesssobjects-cs-L18" class="blob-num js-line-number" data-line-number="18"></td><td id="file-projectbusinesssobjects-cs-LC18" class="blob-code blob-code-inner js-file-line"><span class="pl-k">public</span> <span class="pl-k">int</span> <span class="pl-smi">OrderNumber</span> { <span class="pl-k">get</span>; <span class="pl-k">set</span>; }</td></tr><tr><td id="file-projectbusinesssobjects-cs-L19" class="blob-num js-line-number" data-line-number="19"></td><td id="file-projectbusinesssobjects-cs-LC19" class="blob-code blob-code-inner js-file-line"><span class="pl-k">public</span> <span class="pl-en">DateTime</span> <span class="pl-smi">ShippingDate</span> { <span class="pl-k">get</span>; <span class="pl-k">set</span>; }</td></tr><tr><td id="file-projectbusinesssobjects-cs-L20" class="blob-num js-line-number" data-line-number="20"></td><td id="file-projectbusinesssobjects-cs-LC20" class="blob-code blob-code-inner js-file-line"><span class="pl-k">public</span> <span class="pl-en">IEnumerable</span>&lt;<span class="pl-en">Service</span>&gt; <span class="pl-smi">Services</span> { <span class="pl-k">get</span>; <span class="pl-k">set</span>; }</td></tr><tr><td id="file-projectbusinesssobjects-cs-L21" class="blob-num js-line-number" data-line-number="21"></td><td id="file-projectbusinesssobjects-cs-LC21" class="blob-code blob-code-inner js-file-line">}</td></tr><tr><td id="file-projectbusinesssobjects-cs-L22" class="blob-num js-line-number" data-line-number="22"></td><td id="file-projectbusinesssobjects-cs-LC22" class="blob-code blob-code-inner js-file-line"><span class="pl-k">public</span> <span class="pl-k">class</span> <span class="pl-en">Product</span></td></tr><tr><td id="file-projectbusinesssobjects-cs-L23" class="blob-num js-line-number" data-line-number="23"></td><td id="file-projectbusinesssobjects-cs-LC23" class="blob-code blob-code-inner js-file-line">{</td></tr><tr><td id="file-projectbusinesssobjects-cs-L24" class="blob-num js-line-number" data-line-number="24"></td><td id="file-projectbusinesssobjects-cs-LC24" class="blob-code blob-code-inner js-file-line"><span class="pl-k">public</span> <span class="pl-k">string</span> <span class="pl-smi">ProductName</span> { <span class="pl-k">get</span>; <span class="pl-k">set</span>; }</td></tr><tr><td id="file-projectbusinesssobjects-cs-L25" class="blob-num js-line-number" data-line-number="25"></td><td id="file-projectbusinesssobjects-cs-LC25" class="blob-code blob-code-inner js-file-line"><span class="pl-k">public</span> <span class="pl-k">int</span> <span class="pl-smi">UnitInStock</span> { <span class="pl-k">get</span>; <span class="pl-k">set</span>; }</td></tr><tr><td id="file-projectbusinesssobjects-cs-L26" class="blob-num js-line-number" data-line-number="26"></td><td id="file-projectbusinesssobjects-cs-LC26" class="blob-code blob-code-inner js-file-line"><span class="pl-k">public</span> <span class="pl-k">int</span> <span class="pl-smi">Discount</span> { <span class="pl-k">get</span>; <span class="pl-k">set</span>; }</td></tr><tr><td id="file-projectbusinesssobjects-cs-L27" class="blob-num js-line-number" data-line-number="27"></td><td id="file-projectbusinesssobjects-cs-LC27" class="blob-code blob-code-inner js-file-line"><span class="pl-k">public</span> <span class="pl-k">string</span> <span class="pl-smi">ProductPrice</span> { <span class="pl-k">get</span>; <span class="pl-k">set</span>; }</td></tr><tr><td id="file-projectbusinesssobjects-cs-L28" class="blob-num js-line-number" data-line-number="28"></td><td id="file-projectbusinesssobjects-cs-LC28" class="blob-code blob-code-inner js-file-line">}</td></tr><tr><td id="file-projectbusinesssobjects-cs-L29" class="blob-num js-line-number" data-line-number="29"></td><td id="file-projectbusinesssobjects-cs-LC29" class="blob-code blob-code-inner js-file-line"><span class="pl-k">public</span> <span class="pl-k">class</span> <span class="pl-en">Service</span></td></tr><tr><td id="file-projectbusinesssobjects-cs-L30" class="blob-num js-line-number" data-line-number="30"></td><td id="file-projectbusinesssobjects-cs-LC30" class="blob-code blob-code-inner js-file-line">{</td></tr><tr><td id="file-projectbusinesssobjects-cs-L31" class="blob-num js-line-number" data-line-number="31"></td><td id="file-projectbusinesssobjects-cs-LC31" class="blob-code blob-code-inner js-file-line"><span class="pl-k">public</span> <span class="pl-k">string</span> <span class="pl-smi">ServiceName</span> { <span class="pl-k">get</span>; <span class="pl-k">set</span>; }</td></tr><tr><td id="file-projectbusinesssobjects-cs-L32" class="blob-num js-line-number" data-line-number="32"></td><td id="file-projectbusinesssobjects-cs-LC32" class="blob-code blob-code-inner js-file-line">}</td></tr></tbody></table>

[view raw](https://gist.github.com/GroupDocsGists/cd8768711ff88414192c3f50a9b7c918/raw/dc2a7f2393018f0a406ef6616dd37ff28b7ef4dd/ProjectBusinesssObjects.cs) [ProjectBusinesssObjects.cs](https://gist.github.com/GroupDocsGists/cd8768711ff88414192c3f50a9b7c918#file-projectbusinesssobjects-cs) hosted with ❤ by [GitHub](https://github.com)

### Database Entities

![](https://raw.githubusercontent.com/groupdocsassembly/GroupDocs_Assembly_NET/master/Examples/Data/Data%20Sources/Database%20Backup/database.PNG)

## Templates Location

There is a fixed location of templates somewhere /Date/Source/. The report developer may create any number of templates and can create sub directories under /Data/Source/ in order to organize the templates as per convenience.

## Reports Location

The reports can be placed anywhere under directory /Data/Destination/. The report developer can create sub directories and give name to the output reports as per convenience.