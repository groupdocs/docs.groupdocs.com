---
id: how-to-run-examples
url: comparison-net/how-to-run-examples
title: How to Run Examples
weight: 6
description: 
keywords: 
bookCollapseSection: true
productName: GroupDocs.Comparison for .NET
hideChildren: False
---

# How to Run Examples


Before running an example make sure that GroupDocs.Comparison has been installed successfully.

We offer multiple solutions on how you can run GroupDocs.Comparison examples, by building your own or using our back-end or front-end examples out-of-the-box.

Please choose one from the following list:


## Build project from scratch

*   Open Visual Studio and go to **File** -> **New **\->** Project**.
*   Select appropriate project type - Console App, ASP.NET Web Application etc.
*   Install **GroupDocs.Comparison for .NET **from Nuget or official GroupDocs website following this [guide](https://docs.groupdocs.com/display/comparisonnet/Development+Environment%2C+Installation+and+Configuration).
*   Code your first application with **GroupDocs.Comparison for .NET **like this
    
    string sourceDocumentPath = @"C:\\source.docx"; // NOTE: Put here actual path to source document
    string targetDocumentPath = @"C:\\target.docx"; // NOTE: Put here actual path to source document
    string outputPath = @"C:\\result.docx"; // NOTE: Put here actual path to source document
    
    using (Comparer comparer = new Comparer(sourceDocumentPath))
    {
    	comparer.Add(targetDocumentPath);
        comparer.Compare(outputPath);
    }
    
*   Build and Run your project. 
*   Rendered document pages will at path specified in "*outputPath" *parameter*.*

## Run back-end examples

The complete examples package of **GroupDocs.Comparison **is hosted on [GitHub](https://github.com/groupdocs-comparison/GroupDocs.Comparison-for-.NET). You can either download the ZIP file from [here](https://github.com/groupdocs-comparison/GroupDocs.Comparison-for-.NET/archive/master.zip) or clone the repository of GitHub using your favourite git client.  
In case you download the ZIP file, extract the folders on your local disk. The extracted files and folders will look like following image:

![](/comparison-net/getting-started/how-to-run-examples/85426226.jpg)

In extracted files and folders, you can find CSharp solution file. The project is created in **Microsoft Visual Studio 2019**. The **Resources **folder contains all the sample document and image files used in the examples.  
To run the examples, open the solution file in Visual Studio and build the project. To add missing references of **GroupDocs.Comparison **see [Development Environment, Installation and Configuration](https://docs.groupdocs.com/display/comparisonnet/Development+Environment%2C+Installation+and+Configuration). All the functions are called from **RunExamples.cs**.   
Un-comment the function you want to run and comment the rest.

![](/comparison-net/getting-started/how-to-run-examples/85426227.png)

## Run MVC examples

You can run [GroupDocs.Comparison for .NET MVC Example](https://github.com/groupdocs-comparison/GroupDocs.Comparison-for-.NET-MVC) following these steps:

*   Download [source code](https://github.com/groupdocs-comparison/GroupDocs.Comparison-for-.NET-MVC/archive/master.zip) from GitHub or clone this repository
    
    git clone https://github.com/groupdocs-comparison/GroupDocs.Comparison-for-.NET-MVC
    
*   Open solution in the VisualStudio. Update common parameters in **web.config** and example related properties in the **configuration.yml** to meet your requirements.
*   Open [http://localhost:8080/comparison](http://localhost:8080/comparison) in your favorite browser

For more details about project configuration please refer to this [guide](https://github.com/groupdocs-comparison/GroupDocs.Comparison-for-.NET-MVC#configuration).

## Run WebForms examples

You can run [GroupDocs.Comparison for .NET Web.Forms Example](https://github.com/groupdocs-comparison/GroupDocs.Comparison-for-.NET-WebForms) following these steps:

*   Download [source code](https://github.com/groupdocs-comparison/GroupDocs.Comparison-for-.NET-WebForms/archive/master.zip) from GitHub or clone this repository
    
    git clone https://github.com/groupdocs-comparison/GroupDocs.Comparison-for-.NET-WebForms
    
*   Open solution in the VisualStudio. Update common parameters in **web.config** and example related properties in the **configuration.yml** to meet your requirements.
*   Open [http://localhost:8080/comparison](http://localhost:8080/comparison) in your favorite browser

For more details about project configuration please refer to this [guide](https://github.com/groupdocs-comparison/GroupDocs.Comparison-for-.NET-WebForms#configuration).

## Run from Docker

Use [Docker](https://www.docker.com/) image to try GroupDocs.Comparison for .NET features in an easy way. Here are the command to run GroupDocs.Comparison for .NET from docker image.

mkdir DocumentSamples
mkdir Licenses
docker run -p 8080:8080 --env application.hostAddress=localhost -v \`pwd\`/DocumentSamples:/home/groupdocs/app/DocumentSamples -v \`pwd\`/Licenses:/home/groupdocs/app/Licenses groupdocs/comparison
## Open http://localhost:8080/comparison in your favorite browser.

## Contribute

If you like to add or improve an example, we encourage you to contribute to the project. All examples in this repository are open source and can be freely used in your own applications.  
To contribute, you can fork the repository, edit the code and create a pull request. We will review the changes and include it in the repository if found helpful.
