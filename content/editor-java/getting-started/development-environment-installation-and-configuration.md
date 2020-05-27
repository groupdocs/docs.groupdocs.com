---
id: development-environment-installation-and-configuration
url: editor/java/development-environment-installation-and-configuration
title: Development Environment Installation and Configuration
weight: 6
description: ""
keywords: 
productName: GroupDocs.Editor for Java
hideChildren: False
---
# Development Environment, Installation and Configuration

<table class="sectionMacro" border="0" cellpadding="5" cellspacing="0" width="100%"><tbody><tr><td valign="top" width="50%"><div class="panel" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="panelHeader" style="border-bottom-width: 1px; background-color: rgb(176, 196, 222);"><b>Contents Summary</b></div><div class="panelContent"><style type="text/css">div.rbtoc1590607260584 { padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; }div.rbtoc1590607260584 ul { list-style-type: none; list-style-image: none; margin-left: 0px; }div.rbtoc1590607260584 li { margin-left: 0px; padding-left: 0px; }</style><div class="toc rbtoc1590607260584"><ul class="toc-indentation"><li><span class="TOCOutline">1</span> <a href="#DevelopmentEnvironment,InstallationandConfiguration-DevelopmentEnvironment">Development Environment</a><ul class="toc-indentation"><li><span class="TOCOutline">1.1</span> <a href="#DevelopmentEnvironment,InstallationandConfiguration-OperatingSystems">Operating Systems</a></li><li><span class="TOCOutline">1.2</span> <a href="#DevelopmentEnvironment,InstallationandConfiguration-SupportedRuntime">Supported Runtime</a></li><li><span class="TOCOutline">1.3</span> <a href="#DevelopmentEnvironment,InstallationandConfiguration-DevelopmentEnvironments">Development Environments</a></li></ul></li><li><span class="TOCOutline">2</span> <a href="#DevelopmentEnvironment,InstallationandConfiguration-InstallationfromGroupDocsRepositoryusingMaven">Installation from GroupDocs Repository using Maven</a><ul class="toc-indentation"><li><span class="TOCOutline">2.1</span> <a href="#DevelopmentEnvironment,InstallationandConfiguration-SpecifyGroupDocsRepositoryConfiguration">Specify GroupDocs Repository Configuration</a></li><li><span class="TOCOutline">2.2</span> <a href="#DevelopmentEnvironment,InstallationandConfiguration-DefineGroupDocs.EditorforJavaAPIDependency">Define GroupDocs.Editor for Java API Dependency</a></li></ul></li></ul></div></div></div></td><td valign="top">&nbsp;</td></tr></tbody></table>

## Development Environment

### Operating Systems

**GroupDocs.**Editor** for Java** can be executed on any Operating System with Java JDK installed.

*   Windows Desktops and Servers
*   Linux
*   Mac OS

### Supported Runtime

**GroupDocs.Editor for Java** supports Java run-time version 6 (1.6) and above.

### Development Environments

*   NetBeans
*   IntelliJ IDEA
*   Eclipse

## Installation from GroupDocs Repository using Maven

GroupDocs hosts all Java APIs on [GroupDocs Repository](https://repository.groupdocs.com/webapp/#/artifacts/browse/tree/General/repo). You can easily use [GroupDocs.Editor for Java](https://repository.groupdocs.com/webapp/#/artifacts/browse/tree/General/repo/com/groupdocs/groupdocs-editor) API directly in your Maven projects with simple configurations.

### Specify GroupDocs Repository Configuration

First, you need to specify GroupDocs repository configuration/location in your Maven `pom.xml` as follows:

<repositories>
	<repository>
		<id>GroupDocsJavaAPI</id>
		<name>GroupDocs Java API</name>
		<url>http://repository.groupdocs.com/repo/</url>
	</repository>
</repositories>

### Define GroupDocs.Editor for Java API Dependency

Then define GroupDocs.Editor for Java API dependency in your `pom.xml` as follows:

<dependencies>
    <dependency>
        <groupId>com.groupdocs</groupId>
        <artifactId>groupdocs-editor</artifactId>
        <version>19.10</version> 
    </dependency>
</dependencies>

After performing above-mentioned steps, GroupDocs.Editor for Java dependency will finally be added to your Maven project.
