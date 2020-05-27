---
id: groupdocs-conversion-for-java-16-10-1-release-notes
url: conversion/java/groupdocs-conversion-for-java-16-10-1-release-notes
title: GroupDocs.Conversion for Java 16.10.1 Release Notes
weight: 1
description: ""
keywords: 
productName: GroupDocs.Conversion for Java
hideChildren: False
---
{{< alert style="info" >}}This page contains release notes for GroupDocs.Conversion for Java 16.10.1{{< /alert >}}

## Major Features

There are 25 new features in this regular monthly release. The most notable are:

*   Detecting document type from streams.
*   Document conversion progress.
*   When converting to PDF return each page in separate stream
*   When converting to HTML return each page in separate stream
*   Place watermark in the converted document
*   Add support for converting to PSD format
*   Add support for converting from PSD format
*   Introducing two public interfaces IConversionProgressListener and IConversionStatusListener
*   Implement ConversionCompleted event with conversion details
*   Show grid lines when converting Excel files
*   Show hidden sheets when converting Excel files
*   Return conversion guid in ConversionProgressEventArgs
*   Conversion of SVG documents
*   Conversion of XPS documents
*   Conversion of ICO documents
*   When converting to Slides, option for removing slides comments
*   Fixed XLSX to PNG/JPG/HTML conversion
*   Respecting DPI option when converting to image
*   Conversion of Html to image
*   When converting from word, option for hide/show tracked changes in the converted document
*   Fixed respecting dpi setting when converting image to image 
*   Fixed respecting dpi setting when converting diagram to image
*   Converting from CAD documents to Cells, Html, Image, Pdf, Slides and Words
*   Setting default fonts to be used when converting from Slides if used font do not exist in the system
*   FixedLayout option when converting Word and Pdf to Html
*   Setting default Fonts

## Full List of Issues Covering all Changes in this Release

<table class="confluenceTable"><tbody><tr><td class="confluenceTd"><p><strong>Key</strong></p></td><td class="confluenceTd"><p><strong>Summary</strong></p></td><td class="confluenceTd"><p><strong>Category</strong></p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-680</p></td><td class="confluenceTd"><p>Implement document conversion from stream with auto detect source file type</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-662</p></td><td class="confluenceTd"><p>Autodetect source document type when converting from stream</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-655</p></td><td class="confluenceTd"><p>Report conversion progress</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-654</p></td><td class="confluenceTd"><p>Return all supported conversions types with single method</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-684</p></td><td class="confluenceTd"><p>When converting to PDF return each page in separate stream</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-685</p></td><td class="confluenceTd"><p>When converting to HTML return each page in separate stream</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-723</p></td><td class="confluenceTd"><p>Place watermark in the converted document</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-724</p></td><td class="confluenceTd"><p>Add support for converting to PSD format</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-725</p></td><td class="confluenceTd"><p>Add support for converting from PSD format</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-789</p></td><td class="confluenceTd"><p>Implement ConversionCompleted event with conversion details</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-807</p></td><td class="confluenceTd"><p>ConversionStart event</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-812</p></td><td class="confluenceTd"><p>Introducing two public interfaces IConversionProgressListener and IConversionStatusListener</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-816</p></td><td class="confluenceTd"><p>Show grid lines when converting Excel files</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-817</p></td><td class="confluenceTd"><p>Show hidden sheets when converting Excel files</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-834</p></td><td class="confluenceTd"><p>Option for removing comments when converting slides documents</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-835</p></td><td class="confluenceTd"><p>Implement SVG document conversion</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-846</p></td><td class="confluenceTd"><p>Implement XPS document conversion</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-886</p></td><td class="confluenceTd"><p>Implement conversion to ICO</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-924</p></td><td class="confluenceTd"><p>Option when converting from Words for show/hide markup and tack changes</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-979</p></td><td class="confluenceTd"><p>Html to image conversion</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-1318</p></td><td class="confluenceTd"><p>Convert from CAD documents to Cells, Html, Image, Pdf, Slides, Words</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-1077</p></td><td class="confluenceTd"><p>Setting default Fonts</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-1305</p></td><td class="confluenceTd"><p>Add FixedLayout option to Words to Html conversions</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-1304</p></td><td class="confluenceTd"><p>Add FixedLayout option to Pdf to Html conversions</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONJAVA-149</p></td><td class="confluenceTd"><p>Setting default Fonts</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONJAVA-118</p></td><td class="confluenceTd"><p>Implement functionality for convert Project file to multipage Tiff file</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-765</p></td><td class="confluenceTd"><p>Return conversion guid in ConversionProgressEventArgs</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-710</p></td><td class="confluenceTd"><p>Client Response - In-Proper conversion From PPTX to PDF, Image and Word Document formats</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-722</p></td><td class="confluenceTd"><p>Exception when converting from ODP to PPT and PPS</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-734</p></td><td class="confluenceTd"><p>While Converting Xlsx file to HTML with HtmlSaveOptions Specific Pages (Sheets) does not work</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-740</p></td><td class="confluenceTd"><p>Client Response - HTML to Doc and Docx is not proper for Headings and contents are mixed</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-749</p></td><td class="confluenceTd"><p>Client Response - Only first page converts to PNG from TIF file (With and Without License)</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-750</p></td><td class="confluenceTd"><p>Client Response - Convert to HTML from Excel, PDF, MS Word overlaps the images AND some of Words with styling</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-757</p></td><td class="confluenceTd"><p>Can not find CallBack function to get Conversion Progress for MVC/WebForms Applications</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-767</p></td><td class="confluenceTd"><p>Client Respose - Could not open the file stream on azure.</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-782</p></td><td class="confluenceTd"><p>Client Response - FileType not supported Exceptions are not handled</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-783</p></td><td class="confluenceTd"><p>Client Response - Error for Empty Input Documents as Stream for Conversion</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-844</p></td><td class="confluenceTd"><p>xlsx to png Object null Reference exception</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-889</p></td><td class="confluenceTd"><p>Conversion from XLSX to PNG/JPG/HTML not Working Properly</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-890</p></td><td class="confluenceTd"><p>Converted File Name issue in Excel file to PNG</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-897</p></td><td class="confluenceTd"><p>Converting large XLS file to image with UsePdf=false is producing blurred images</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-898</p></td><td class="confluenceTd"><p>Missing pages when converting XLS file to image with UsePdf=true</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-899</p></td><td class="confluenceTd"><p>Excel to PNG/JPG/JPEG Low Image Quality Dpi not effecing</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-907</p></td><td class="confluenceTd"><p>PDF to Image conversion - target resolution is not changed when setting Dpi</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-908</p></td><td class="confluenceTd"><p>Words to Image conversion - target resolution is not changed when setting Dpi</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-909</p></td><td class="confluenceTd"><p>Slides to Image conversion - target resolution is not changed when setting Dpi</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-910</p></td><td class="confluenceTd"><p>Tasks to Image conversion - target resolution is not changed when setting Dpi</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-911</p></td><td class="confluenceTd"><p>Image to Image conversion - target resolution is not changed when setting Dpi</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-912</p></td><td class="confluenceTd"><p>Diagram to Image conversion - target resolution is not changed when setting Dpi</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-911</p></td><td class="confluenceTd"><p>Image to Image conversion - target resolution is not changed when setting Dpi</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-912</p></td><td class="confluenceTd"><p>Diagram to Image conversion - target resolution is not changed when setting Dpi</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-1072</p></td><td class="confluenceTd"><p>&nbsp;Txt to Pdf is causing "Unknown format" exception</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-1078&nbsp;</p></td><td class="confluenceTd"><p>% symbol in the file name trowns an exception</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-1206</p></td><td class="confluenceTd"><p>Exception in HTML to Excel Conversion</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-1207</p></td><td class="confluenceTd"><p>Convert Excel from Html - Table with background colour and some html controls are not converted properly</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONNET-1351</p></td><td class="confluenceTd"><p>Coversion with document as Stream input not working</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONJAVA-206</p></td><td class="confluenceTd"><p>Multithread conversion is not working</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONJAVA-166</p></td><td class="confluenceTd"><p>Unable to convert excel files containing empty sheets</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONJAVA-169</p></td><td class="confluenceTd"><p>Converting excel file to HTML not displaying the entire excel file.</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONJAVA-140</p></td><td class="confluenceTd"><p>After conversion can't render first page , throws an error "Out of Memory"</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONJAVA-142</p></td><td class="confluenceTd"><p>Conversion .pptx to .pdf doesn't work with multi-threading</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONJAVA-144</p></td><td class="confluenceTd"><p>Header and footer incorrect rendered after conversion to .html</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONJAVA-115</p></td><td class="confluenceTd"><p>Using resolution parameter together height and width parameters</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONJAVA-133</p></td><td class="confluenceTd"><p>Count pages does not match specified number of pages after conversion.</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONJAVA-135</p></td><td class="confluenceTd"><p>Static logger binder warning</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONJAVA-136</p></td><td class="confluenceTd"><p>Converted tiff file has incorrect page count in some TIFF viewers</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONJAVA-138</p></td><td class="confluenceTd"><p>Incorrect converts to png format.</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONJAVA-139</p></td><td class="confluenceTd"><p>Conversion Jpg to Png trows an error "LoadingException".</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONJAVA-56</p></td><td class="confluenceTd"><p>Incorrectly resizing documents when converting to image</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONJAVA-91</p></td><td class="confluenceTd"><p>Aspose.Words 15.8.0: Lost text after convert</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONJAVA-146</p></td><td class="confluenceTd"><p>Incorrect order of the documents after merging</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONJAVA-131</p></td><td class="confluenceTd"><p>Output file after CCITT4 compression not rendered well in IBM Viewer and Google viewer.</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONJAVA-148</p></td><td class="confluenceTd"><p>Path to image isn't correct after conversion .xls document to .html</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONJAVA-163</p></td><td class="confluenceTd"><p>Image resolution/size is not effecting by changing DPI</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONJAVA-134</p></td><td class="confluenceTd"><p>com.groupdocs.conversion.exception.InternalException: Can't convert to image! for conversion from .xls to multipage .tiff file</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>CONVERSIONJAVA-167</p></td><td class="confluenceTd"><p>ConversionHandler not releasing the source file's resource</p></td><td class="confluenceTd"><p>Bug</p></td></tr></tbody></table>

## Public API and Backward Incompatible Changes

{{< alert style="info" >}}This section lists public API changes that were introduced in GroupDocs.Conversion for Java 16.10.1. It includes not only new and obsoleted public methods, but also a description of any changes in the behavior behind the scenes in GroupDocs.Conversion which may affect existing code. Any behavior introduced that could be seen as a regression and modifies existing behavior is especially important and is documented here.{{< /alert >}}

### How to get conversion progress

Here is an example of how to get conversion progress

**Java**

```csharp
String sourceFileName = "sample.docx"; //TODO: Put the source filename here

// Setup Conversion configuration
ConversionConfig conversionConfig = new ConversionConfig();
conversionConfig.setCachePath("CACHE_PATH");
conversionConfig.setStoragePath("STORAGE_PATH");
conversionConfig.setOutputPath("OUTPUT_PATH");

ConversionHandler conversionHandler = new ConversionHandler(conversionConfig);
conversionHandler.ConversionProgress.add(new ConversionProgressHandler() {
    // Here is the implementation of the conversion progress handler method
    @Override
    public void invoke(ConversionProgressEventArgs args) {
        System.out.println("Conversion progress: {"+args.getProgress()+"}");
    }
});

PdfSaveOptions saveOptions = new PdfSaveOptions();
saveOptions.setOutputType(OutputType.String);

String resultPath = conversionHandler.<String>convert(sourceFileName, saveOptions);

System.out.println("The conversion finished. The result can be located here: "+resultPath+". Press <<ENTER>> to exit.");
```

### How to place watermark in converted document

**Java**

```csharp
String sourceFileName = "sample.docx"; //TODO: Put the source filename here

// Setup Conversion configuration
ConversionConfig conversionConfig = new ConversionConfig();
conversionConfig.setCachePath("CACHE_PATH");
conversionConfig.setStoragePath("STORAGE_PATH");
conversionConfig.setOutputPath("OUTPUT_PATH");

ConversionHandler conversionHandler = new ConversionHandler(conversionConfig);

// Save options
PdfSaveOptions saveOptions = new PdfSaveOptions();
saveOptions.setOutputType(OutputType.String);
WatermarkOptions watermarkOptions = new WatermarkOptions("Watermark text");
watermarkOptions.setColor(Color.blue);
watermarkOptions.setFont(new Font("Arial", 40, 12));
watermarkOptions.setRotationAngle(45);
watermarkOptions.setTransparency(0.1);
watermarkOptions.setLeft(200);
watermarkOptions.setTop(400);
saveOptions.setWatermarkOptions(watermarkOptions);

String result = conversionHandler.<String>convert(sourceFileName, saveOptions);
System.out.println("The conversion finished. The result can be located here: "+result+". Press <<ENTER>> to exit.");
```

### How to convert to PSD

**Java**

```csharp
String sourceFileName = "sample.docx"; //TODO: Put the source filename here

// Setup Conversion configuration
ConversionConfig conversionConfig = new ConversionConfig();
conversionConfig.setCachePath("CACHE_PATH");
conversionConfig.setStoragePath("STORAGE_PATH");
conversionConfig.setOutputPath("OUTPUT_PATH");

ConversionHandler conversionHandler = new ConversionHandler(conversionConfig);

// Save options
ImageSaveOptions saveOptions = new ImageSaveOptions();
saveOptions.setOutputType(OutputType.String);
saveOptions.setConvertFileType(ImageSaveOptions.ImageFileType.PSD);
PsdOptions psdOptions = new PsdOptions();
psdOptions.setColorMode(PsdOptions.ColorModes.GRAYSCALE);
psdOptions.setCompressionMethod(PsdOptions.CompressionMethods.RAW);
saveOptions.setPsdOptions(psdOptions);

List<String> result = conversionHandler.<List<String>>convert(sourceFileName , saveOptions);
```

### How to convert from PSD

**Java**

```csharp
String sourceFileName = "Sample.psd"; //TODO: Put the source filename here

// Setup Conversion configuration
ConversionConfig conversionConfig = new ConversionConfig();
conversionConfig.setCachePath("CACHE_PATH");
conversionConfig.setStoragePath("STORAGE_PATH");
conversionConfig.setOutputPath("OUTPUT_PATH");

ConversionHandler conversionHandler = new ConversionHandler(conversionConfig);

// Save options
SaveOptions saveOptions = new PdfSaveOptions();
saveOptions.setOutputType(OutputType.String);

String result = conversionHandler.<String>convert(sourceFileName, saveOptions);
```

### How to use ConversionStart, ConversionProgress and ConversionComplete events

**Java**

```csharp
String sourceFileName = "sample.docx"; //TODO: Put the source filename here

// Setup Conversion configuration
ConversionConfig conversionConfig = new ConversionConfig();
conversionConfig.setCachePath("CACHE_PATH");
conversionConfig.setStoragePath("STORAGE_PATH");
conversionConfig.setOutputPath("OUTPUT_PATH");

ConversionHandler conversionHandler = new ConversionHandler(conversionConfig);

conversionHandler.ConversionStart.add(new ConversionStartHandler() {
    @Override
    public void invoke(ConversionStartEventArgs args) {
        System.out.println("Conversion " + args.getConversionGuid() + " started");
    }
});

conversionHandler.ConversionProgress.add(new ConversionProgressHandler() {
    @Override
    public void invoke(ConversionProgressEventArgs args) {
        System.out.println("Conversion " + args.getConversionGuid() + " progress: " + args.getProgress() + " %");
    }
});

conversionHandler.ConversionComplete.add(new ConversionCompleteHandler() {
    @Override
    public void invoke(ConversionCompleteEventArgs args) {
        System.out.println("Conversion " + args.getConversionGuid() + " completed");
        System.out.println("Result document is " + args.getConversionType() + ". Cache is " + args.getUsedCache());
        System.out.println("Result document has " + ((PdfConversionCompleteEventArgs) args).getPageCount() + " page(s).")
    }
});

// Save options
SaveOptions saveOptions = new PdfSaveOptions();
saveOptions.setOutputType(OutputType.String);

String result = conversionHandler.<String>convert(sourceFileName, saveOptions);
```

### How to use IConversionProgressListener and IConversionStatusListener to receive conversion status changes and progress info

Defining conversion callbacks receiver

**Java**

```csharp
public class ConversionManager implements IConversionProgressListener, IConversionStatusListener {
    private final ConversionHandler _conversionHandler;
    public ConversionManager(String path) {
        _conversionHandler = Common.getConversionHandler();
        _conversionHandler.setConversionProgressListener(this);
        _conversionHandler.setConversionStatusListener(this);
    }
    @Override
    public void conversionProgressChanged(ConversionProgressEventArgs args) {
        System.out.println("Conversion progress: " + args.getProgress() + " %");
    }
    @Override
    public void conversionStatusChanged(ConversionEventArgs args) {
        System.out.println("Conversion status changed to: " + args.getStatus());
    }
    public String convert(String file) throws IOException {
        PdfSaveOptions option = new PdfSaveOptions();
        option.setOutputType(OutputType.String);

        return _conversionHandler.<String>convert(file, option);
    }
}
```

### Usage of the conversion callback receiver for getting updates from conversion

**Java**

```csharp
String sourceFileName = "sample.docx"; //TODO: Put the source filename here
String storagePath = ".";
ConversionManager manager = new ConversionManager(storagePath);

String result = manager.convert(sourceFileName);
System.out.println(result);
```

### How to show grid lines when converting from Excel

**Java**

```csharp
String sourceFileName = "sample.xlsx"; //TODO: Put the source filename here

// Setup Conversion configuration
ConversionConfig conversionConfig = new ConversionConfig();
conversionConfig.setCachePath("CACHE_PATH");
conversionConfig.setStoragePath("STORAGE_PATH");
conversionConfig.setOutputPath("OUTPUT_PATH");

ConversionHandler conversionHandler = new ConversionHandler(conversionConfig);

// Save options
SaveOptions saveOptions = new HtmlSaveOptions();
saveOptions.setOutputType(OutputType.String);
saveOptions.setShowGridLines(true);

String result = conversionHandler.<String>convert(sourceFileName, saveOptions);
```

### How to show hidden sheets when converting from Excel

**Java**

```csharp
String sourceFileName = "sample.xlsx"; //TODO: Put the source filename here

// Setup Conversion configuration
ConversionConfig conversionConfig = new ConversionConfig();
conversionConfig.setCachePath("CACHE_PATH");
conversionConfig.setStoragePath("STORAGE_PATH");
conversionConfig.setOutputPath("OUTPUT_PATH");

ConversionHandler conversionHandler = new ConversionHandler(conversionConfig);

// Save options
SaveOptions saveOptions = new HtmlSaveOptions();
saveOptions.setOutputType(OutputType.String);
saveOptions.setShowHiddenSheets(true);
String result = conversionHandler.<String>convert(sourceFileName, saveOptions);
```

### How to remove slides comments when converting to Slides

**Java**

```csharp
String sourceFileName = "sample.pptx"; //TODO: Put the source filename here

// Setup Conversion configuration
ConversionConfig conversionConfig = new ConversionConfig();
conversionConfig.setCachePath("CACHE_PATH");
conversionConfig.setStoragePath("STORAGE_PATH");
conversionConfig.setOutputPath("OUTPUT_PATH");

ConversionHandler conversionHandler = new ConversionHandler(conversionConfig);

// Save options
SlidesSaveOptions saveOptions = new SlidesSaveOptions();
saveOptions.setOutputType(OutputType.String);
saveOptions.setRemoveSlidesComments(true);

String result = conversionHandler.<String>convert(sourceFileName, saveOptions);
```

### How to hide tracked changes when converting from Words

**Java**

```csharp
String sourceFileName = "sample.docx"; //TODO: Put the source filename here

// Setup Conversion configuration
ConversionConfig conversionConfig = new ConversionConfig();
conversionConfig.setCachePath("CACHE_PATH");
conversionConfig.setStoragePath("STORAGE_PATH");
conversionConfig.setOutputPath("OUTPUT_PATH");

ConversionHandler conversionHandler = new ConversionHandler(conversionConfig);

// Save options
SaveOptions saveOptions = new PdfSaveOptions();
saveOptions.setOutputType(OutputType.String);
saveOptions.setHideWordTrackedChanges(true);

String result = conversionHandler.<String>convert(sourceFileName, saveOptions);
```

### How to convert html to image

**Java**

```csharp
String sourceFileName = "sample.html"; //TODO: Put the source filename here

// Setup Conversion configuration
ConversionConfig conversionConfig = new ConversionConfig();
conversionConfig.setCachePath("cache");
conversionConfig.setStoragePath(".");
ConversionHandler conversionHandler = new ConversionHandler(conversionConfig);

// Save options
ImageSaveOptions saveOptions = new ImageSaveOptions();
saveOptions.setOutputType(OutputType.String);
saveOptions.setDpi(300);
List<String> result = conversionHandler.<List<String>>convert(sourceFileName, saveOptions);
```

### Introduced SlidesLoadOptions with ability to specify default font for rendering if a presentation font is missing

**Java**

```csharp
SlidesLoadOptions loadOptions = new SlidesLoadOptions();
loadOptions.setPassword("secret");
loadOptions.setDefaultFont("Verdana"); // Default font for rendering the presentation. The following font will be used if a presentation font is missing.
```

### HtmlSaveOptions class is extended with new property - FixedLayout - if true html will be rendered with absolutely positioned elements

**Java**

```csharp
HtmlSaveOptions saveOptions1 = new HtmlSaveOptions();
saveOptions1.setFixedLayout(true);
```
