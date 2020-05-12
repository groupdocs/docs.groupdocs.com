---
id: how-to-run-examples
url: editor-net/how-to-run-examples
title: How to Run Examples
weight: 6
description: 
keywords: 
bookCollapseSection: true
productName: GroupDocs.Editor for .NET
hideChildren: False
---

# How to Run Examples


Before running an example make sure that GroupDocs.Editor has been installed successfully.

We offer multiple solutions on how you can run GroupDocs.Editor examples, by building your own or using our back-end or front-end examples out-of-the-box.

Please choose one from the following list:


## Build project from scratch

*   Open Visual Studio and go to **File** -> **New **\->** Project**.
*   Select appropriate project type - Console App, ASP.NET Web Application etc.
*   Install **GroupDocs.Editor for .NET **from Nuget or official GroupDocs website following this [guide](https://docs.groupdocs.com/display/editornet/Development+Environment%2C+Installation+and+Configuration).
*   Code your first application with **GroupDocs.**Editor **for .NET **like this
    
     			string documentPath = @"C:\\sample.docx"; // NOTE: Put here actual path for your document
                using (Editor editor = new Editor(documentPath))
                {
                    // Obtain editable document from original DOCX document
                    WordProcessingEditOptions editOptions = new WordProcessingEditOptions();
                    EditableDocument editableDocument = editor.Edit(editOptions);
    
                    // Pass EditableDocument object to WYSIWYG editor and edit there...
                    // ...
    
                    // Save edited EditableDocument object to some WordProcessing format - DOC for example
                    WordProcessingSaveOptions saveOptions = new WordProcessingSaveOptions(Formats.WordProcessingFormats.Docx);
                    editor.Save(editableDocument, @"C:\\output\\edited.docx", saveOptions);
                }
    
*   Build and Run your project. 
*   Rendered document pages will appear inside "*C:\\output\\" *directory*.*

## Run back-end examples

The complete examples package of **GroupDocs.Editor **is hosted on [GitHub](https://github.com/groupdocs-editor/GroupDocs.Editor-for-.NET). You can either download the ZIP file from [here](https://github.com/groupdocs-editor/GroupDocs.Editor-for-.NET/archive/master.zip) or clone the repository of GitHub using your favourite git client.  
In case you download the ZIP file, extract the folders on your local disk. The extracted files and folders will look like following image:

![](editor-net/getting-started/how-to-run-examples/85426220.png)

In extracted files and folders, you can find CSharp solution file. The project is created in **Microsoft Visual Studio 2019**. The **Resources **folder contains all the sample document and image files used in the examples.  
To run the examples, open the solution file in Visual Studio and build the project. To add missing references of **GroupDocs.Editor **see [Development Environment, Installation and Configuration](https://docs.groupdocs.com/display/editornet/Development+Environment%2C+Installation+and+Configuration). All the functions are called from **RunExamples.cs**.   
Un-comment the function you want to run and comment the rest.

![](editor-net/getting-started/how-to-run-examples/85426221.png)

## Run MVC examples

You can run [GroupDocs.Editor for .NET MVC Example](https://github.com/groupdocs-editor/GroupDocs.Editor-for-.NET-MVC) following these steps:

*   Download [source code](https://github.com/groupdocs-editor/GroupDocs.Editor-for-.NET-MVC/archive/master.zip) from GitHub or clone this repository
    
    git clone https://github.com/groupdocs-editor/GroupDocs.Editor-for-.NET-MVC
    
*   Open solution in the VisualStudio. Update common parameters in **web.config** and example related properties in the **configuration.yml** to meet your requirements.
*   Open [http://localhost:8080/editor](http://localhost:8080/editor) in your favorite browser

For more details about project configuration please refer to this [guide](https://github.com/groupdocs-editor/GroupDocs.Editor-for-.NET-MVC#configuration).

## Run WebForms examples

You can run [GroupDocs.Editor for .NET Web.Forms Example](https://github.com/groupdocs-editor/GroupDocs.Editor-for-.NET-WebForms) following these steps:

*   Download [source code](https://github.com/groupdocs-editor/GroupDocs.Editor-for-.NET-WebForms/archive/master.zip) from GitHub or clone this repository
    
    git clone https://github.com/groupdocs-editor/GroupDocs.Editor-for-.NET-WebForms
    
*   Open solution in the VisualStudio. Update common parameters in **web.config** and example related properties in the **configuration.yml** to meet your requirements.
*   Open [http://localhost:8080/editor](http://localhost:8080/editor) in your favorite browser

For more details about project configuration please refer to this [guide](https://github.com/groupdocs-editor/GroupDocs.Editor-for-.NET-WebForms#configuration).

## Run from Docker

Use [Docker](https://www.docker.com/) image to try GroupDocs.Editor features in an easy way. Here are the command to run GroupDocs.Editor from docker image.

mkdir DocumentSamples
mkdir Licenses
docker run -p 8080:8080 --env application.hostAddress=localhost -v \`pwd\`/DocumentSamples:/home/groupdocs/app/DocumentSamples -v \`pwd\`/Licenses:/home/groupdocs/app/Licenses groupdocs/Editor
## Open http://localhost:8080/editor in your favorite browser.

## Contribute

If you like to add or improve an example, we encourage you to contribute to the project. All examples in this repository are open source and can be freely used in your own applications.  
To contribute, you can fork the repository, edit the code and create a pull request. We will review the changes and include it in the repository if found helpful.

