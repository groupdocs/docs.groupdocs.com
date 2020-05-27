---
id: development-environment-installation-and-configuration
url: parser/java/development-environment-installation-and-configuration
title: Development Environment Installation and Configuration
weight: 4
description: ""
keywords: 
productName: GroupDocs.Parser for Java
hideChildren: False
---
# Development Environment, Installation and Configuration


## Installation from GroupDocs Repository using Maven

GroupDocs hosts all Java APIs on [GroupDocs Repository](https://repository.groupdocs.com). You can easily use [GroupDocs.Parser for Java](https://artifact.groupdocs.com/webapp/#/artifacts/browse/tree/General/repo/com/groupdocs/groupdocs-parser) API directly in your Maven projects with simple configurations.

### Specify GroupDocs Repository Configuration

First, you need to specify GroupDocs repository configuration/location in your Maven `pom.xml` as follows: 

<table class="confluenceTable"><tbody><tr><td class="confluenceTd"><div class="container" title="Hint: double-click to select code"><div class="line number1 index0 alt2"><code class="java plain">&lt;repositories&gt;</code></div><div class="line number2 index1 alt1"><code class="java spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="java plain">&lt;repository&gt;</code></div><div class="line number3 index2 alt2"><code class="java spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="java plain">&lt;id&gt;GroupDocsJavaAPI&lt;/id&gt;</code></div><div class="line number4 index3 alt1"><code class="java spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="java plain">&lt;name&gt;GroupDocs Java API&lt;/name&gt;</code></div><div class="line number5 index4 alt2"><code class="java spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="java plain">&lt;url&gt;http:</code><code class="java comments">//<a href="http://repository.groupdocs.com/repo/" class="external-link" rel="nofollow">repository.groupdocs.com/repo/</a>&lt;/url&gt;</code></div><div class="line number6 index5 alt1"><code class="java spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="java plain">&lt;/repository&gt;</code></div><div class="line number7 index6 alt2"><code class="java plain">&lt;/repositories&gt;</code></div></div></td></tr></tbody></table>

### Define GroupDocs.Parser for Java API Dependency

Then define GroupDocs.Parser for Java API dependency in your `pom.xml` as follows:

<table class="confluenceTable"><tbody><tr><td class="confluenceTd"><div class="container" title="Hint: double-click to select code"><div class="line number1 index0 alt2"><code class="java plain">&lt;dependencies&gt;</code></div><div class="line number2 index1 alt1"><code class="java spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="java plain">&lt;dependency&gt;</code></div><div class="line number3 index2 alt2"><code class="java spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="java plain">&lt;groupId&gt;com.groupdocs&lt;/groupId&gt;</code></div><div class="line number4 index3 alt1"><code class="java spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="java plain">&lt;artifactId&gt;groupdocs-parser&lt;/artifactId&gt;</code></div><div class="line number5 index4 alt2"><code class="java spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="java plain">&lt;version&gt;</code><code class="java value">19.11</code><code class="java plain">&lt;/version&gt;</code></div><div class="line number6 index5 alt1"><code class="java spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="java plain">&lt;/dependency&gt;</code></div><div class="line number7 index6 alt2"><code class="java plain">&lt;/dependencies&gt;</code></div></div></td></tr></tbody></table>

After performing above-mentioned steps, GroupDocs.Parser for Java dependency will finally be added to your Maven project.

## Install from official GroupDocs website

You can follow the steps below to reference GroupDocs.Parser for Java downloaded from official website [Downloads section](https://downloads.groupdocs.com/parser/java):

1.  Unpack zip archive .
2.  Switch to **lib** folder.
3.  Run **install.bat** (for Windows) or **install.sh** (for Linux) file to install the library in your local maven repository.
4.  After this you should add the GroupDocs.Parser for Java **dependency** block to your .pom.xml project file.
