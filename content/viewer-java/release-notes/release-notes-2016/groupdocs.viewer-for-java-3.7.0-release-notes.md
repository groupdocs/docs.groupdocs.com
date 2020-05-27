---
id: groupdocs-viewer-for-java-3-7-0-release-notes
url: viewer/java/groupdocs-viewer-for-java-3-7-0-release-notes
title: GroupDocs.Viewer for Java 3.7.0 Release Notes
weight: 1
description: ""
keywords: 
productName: GroupDocs.Viewer for Java
hideChildren: False
---
{{< alert style="info" >}}This page contains release notes for GroupDocs.Viewer for Java 3.7.0{{< /alert >}}

## Major Features

There are improvements and fixes in this regular monthly release. The most notable are:

*   Introduced option to specify custom fonts path.
*   Introduced new methods for working with email attachments.
*   Introduced new methods for getting info for remotely located document or document in the form of stream.
*   Introduced ability to clear cache.
*   Introduced options to set opacity setting for watermark in html mode.
*   Improved rendering performance.
*   Improved rendering performance.
*   Improved applying watermark performance.
*   Improved GetPdfFile method usability and performance.
*   Implemented saving Cells document sheet to multiple pages in image mode.
*   Ability to specify font for watermark.
*   Add support for Spanish locale.
*   Add support for Italian locale
*   Hide/Show the hidden pages for Visio files
*   Ability to set default font when rendering Cells and Words documents
*   Ability to set the encoding standard automatically
*   LaTeX file format viewing support
*   Save html resources to cache without saving them to local disc
*   Improve rendering Pdf Dynamic XFA Forms
*   Ability to set default font when rendering Diagram documents
*   EMF and DICOM file format viewing support
*   Fixed html watermak rendering

## Full List of Issues Covering all Changes in this Release

<table class="confluenceTable"><tbody><tr><td class="confluenceTd"><p><strong>Key</strong></p></td><td class="confluenceTd"><p><strong>Summary</strong></p></td><td class="confluenceTd"><p><strong>Category</strong></p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-631</p></td><td class="confluenceTd"><p>Add ability to specify custom fonts path</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-475</p></td><td class="confluenceTd"><p>Opacity setting for Watermark</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-416</p></td><td class="confluenceTd"><p>Get selected attachment from email documents</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-414</p></td><td class="confluenceTd"><p>Render attachments from email documents</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-478</p></td><td class="confluenceTd"><p>Pre-Render Information required of a remotely located document or document in the form of streams</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-459</p></td><td class="confluenceTd"><p>Provide remove old cache utility feature in the next generation API</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-733&nbsp;</p></td><td class="confluenceTd"><p>Implement saving Cells document sheet to multiple pages in image mode</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-787</p></td><td class="confluenceTd"><p>Implement ability to specify font for watermark</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-394</p></td><td class="confluenceTd"><p>Support for hyperlinks referencing a worksheet in the same document</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-433</p></td><td class="confluenceTd"><p>Add support for Spanish locale</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-435</p></td><td class="confluenceTd"><p>Add support for Italian locale</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-639</p></td><td class="confluenceTd"><p>Hide/Show the hidden pages for Visio files</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-801</p></td><td class="confluenceTd"><p>Ability to set default font when rendering Cells documents</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-802</p></td><td class="confluenceTd"><p>Ability to set default font when rendering Words documents</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>WEB-2073</p></td><td class="confluenceTd"><p>LaTeX file format viewing support</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>WEB-1084</p></td><td class="confluenceTd"><p>The ability to show and hide PDF layers</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-871</p></td><td class="confluenceTd"><p>Ability to set default font when rendering Diagram documents</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-851</p></td><td class="confluenceTd"><p>Implement support of EMF file type.</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-549</p></td><td class="confluenceTd"><p>DICOM format support</p></td><td class="confluenceTd"><p>New Feature</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-582</p></td><td class="confluenceTd"><p>The GroupDocs.Viewer 3.x is slower than 2.19 in performance</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-641&nbsp;</p></td><td class="confluenceTd"><p>Update DocumentInfoOptions Cells/Words/Email DocumentInfoOptions properties names and types</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-640</p></td><td class="confluenceTd"><p>Remove duplicated document name header in Project document converted to html</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-636</p></td><td class="confluenceTd"><p>Remove border in html that was converted from words document</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-619</p></td><td class="confluenceTd"><p>Implement adding prefix to font-family property if it can be overriden</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-614</p></td><td class="confluenceTd"><p>Implement transparent watermarking in html mode</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-600</p></td><td class="confluenceTd"><p>Improve performance of extracting document information in image mode</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-590</p></td><td class="confluenceTd"><p>Apply HtmlResourcePrefix to fonts mentioned in css files</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-568</p></td><td class="confluenceTd"><p>Load document only when not cached</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-557</p></td><td class="confluenceTd"><p>Improve temp files folder structure</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-558</p></td><td class="confluenceTd"><p>Improve processing remote files by Uri</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-628</p></td><td class="confluenceTd"><p>Implement RotatePage method that returns void</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-663</p></td><td class="confluenceTd"><p>Improve library performance</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-665</p></td><td class="confluenceTd"><p>Improve applying watermark performance</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-670</p></td><td class="confluenceTd"><p>Improve get pdf file performance</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-674</p></td><td class="confluenceTd"><p>Improve GetPdfFile method usability</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-721</p></td><td class="confluenceTd"><p>Improve Words files to html rendering speed</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-732</p></td><td class="confluenceTd"><p>Implement saving file data separately based on options</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-748</p></td><td class="confluenceTd"><p>Implement releasing converters resources</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-401</p></td><td class="confluenceTd"><p>Improve applying pdf document transformations</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-803</p></td><td class="confluenceTd"><p>Ability to set the encoding standard automatically</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-824</p></td><td class="confluenceTd"><p>Cleanup GetDocumentInfo method response</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-826</p></td><td class="confluenceTd"><p>Remove XHTML xmlns attribute</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-827</p></td><td class="confluenceTd"><p>Cleanup html markup for Cells documents</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-899</p></td><td class="confluenceTd"><p>Convert Pdf Dynamic XFA Form to Standard AcroForm</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-895</p></td><td class="confluenceTd"><p>Mark CachedPageDescription redundant constructor as Obsolete</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-873</p></td><td class="confluenceTd"><p>Save html resources to cache without saving them to local disc.</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-616</p></td><td class="confluenceTd"><p>Implement GetPdfFile from stream or remote file</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>WEB-1734</p></td><td class="confluenceTd"><p>Hide the hidden sheets for .xls file</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>WEB-1107</p></td><td class="confluenceTd"><p>Convert a document page to JPEG in about 0.1 second</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>WEB-905</p></td><td class="confluenceTd"><p>Links for mail attachments</p></td><td class="confluenceTd"><p>Improvement</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-642</p></td><td class="confluenceTd"><p>GetDocumentInfo Method Throws Exception in Evaluation Mode</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-632</p></td><td class="confluenceTd"><p>The HtmlResourcePrefix {page-number} is not set in DiagramToHtmlConverter</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-476</p></td><td class="confluenceTd"><p>Some characters are not showing in correct format when render as HTML</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-591</p></td><td class="confluenceTd"><p>'System.OutOfMemoryException' thrown while rendering as image</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-605</p></td><td class="confluenceTd"><p>Only first frame or tiff document converted in image mode</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-606</p></td><td class="confluenceTd"><p>Only first frame or tiff document converted in image mode</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-550</p></td><td class="confluenceTd"><p>MSG file is not rendering properly</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-583</p></td><td class="confluenceTd"><p>Failed to get document information in image mode with text from epub document</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-570</p></td><td class="confluenceTd"><p>Failed to get document information in image mode with text in trial</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-551</p></td><td class="confluenceTd"><p>File description document type format is Unknown when extension is upper case</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-552</p></td><td class="confluenceTd"><p>File description document type format is Unknown when extension is upper case</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-652</p></td><td class="confluenceTd"><p>Small images are not visible in image mode</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-655</p></td><td class="confluenceTd"><p>Invalid parameter exception while converting mpt to image</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-659</p></td><td class="confluenceTd"><p>File is corrupted or damaged exception while converting mpt document to image</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-662</p></td><td class="confluenceTd"><p>Project reading exception in multithreading environment</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-681</p></td><td class="confluenceTd"><p>GetPdfFile returns all pages in trial mode</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-682</p></td><td class="confluenceTd"><p>JpegQuality is not applied for watermarked images</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-684</p></td><td class="confluenceTd"><p>Invalid Rendering of Excel File into Html and Image</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-689</p></td><td class="confluenceTd"><p>Incorrect Rendering of Excel File into Html and Image</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-690</p></td><td class="confluenceTd"><p>GetPages() for Email Attachment Throws Path Exception for Relative Storage Path</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-693</p></td><td class="confluenceTd"><p>Invalid Parameter Exception in Html Rendering</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-701</p></td><td class="confluenceTd"><p>GetPages() Throws Exception In Case of Stream Object</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-722</p></td><td class="confluenceTd"><p>Failed to load xps document in image mode with pdf</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-725</p></td><td class="confluenceTd"><p>API Renders First Sheet Twice in Excel Workbook</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-729</p></td><td class="confluenceTd"><p>Incorrect Spacing between Characters in Html Rendering</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-529</p></td><td class="confluenceTd"><p>Cannot add page to pdf document</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-564</p></td><td class="confluenceTd"><p>OutOfMemoryException raised when total readed file size reached upto 250MB</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-627</p></td><td class="confluenceTd"><p>The operation is not supported error raised when loading epub document</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-667</p></td><td class="confluenceTd"><p>IOException is raised when try to move a loaded document(into the viewer) to any other directory</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-691</p></td><td class="confluenceTd"><p>Cell shading is not applied uniformly while converting spreadsheet to HTML</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-717</p></td><td class="confluenceTd"><p>Ott file stream detects as ods file format</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-729</p></td><td class="confluenceTd"><p>GetDocumentInfo() Throws "Parameter is not valid" Exception</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-753</p></td><td class="confluenceTd"><p>Excel file is not properly rendering into HTML</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-776</p></td><td class="confluenceTd"><p>Header contents of Word document are not appearing in rendered html or images</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-779</p></td><td class="confluenceTd"><p>Exception generated while calling handler.getDocumentInfo(uuid)</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-780</p></td><td class="confluenceTd"><p>Exception when calling GetPdfFile/RotatePage/ReorderPage with guid without extension</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-784</p></td><td class="confluenceTd"><p>Incorrect watermark position and text in PDF file</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-786</p></td><td class="confluenceTd"><p>Out Of Memory Exception While Rendering Excel File into HTML</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-596</p></td><td class="confluenceTd"><p>The bookmark range is invalid for .docx</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-747</p></td><td class="confluenceTd"><p>Text document format detected as Unknown</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-805</p></td><td class="confluenceTd"><p>GetPages() Method Throws "Parameter is not valid" Exception</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-807</p></td><td class="confluenceTd"><p>Output html contains garbled characters and few characters are merged</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-820</p></td><td class="confluenceTd"><p>GetPages() throws exception for email attachments</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-821</p></td><td class="confluenceTd"><p>API throws exception in Mono</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-835</p></td><td class="confluenceTd"><p>User can't catch GroupDocsException</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-866</p></td><td class="confluenceTd"><p>Html watermark style block contains garbage characters.</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-865</p></td><td class="confluenceTd"><p>Html watermark style block contains garbage characters.</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-863</p></td><td class="confluenceTd"><p>Watermark is Rendered Incorrectly in Html Representation</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-838</p></td><td class="confluenceTd"><p>Wmf file dimmensions are different from dimmensions in the MS Paint.</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-834</p></td><td class="confluenceTd"><p>TeX to Html conversion error</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-829</p></td><td class="confluenceTd"><p>Incorrect Rendering of PDF Document into Image</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-811</p></td><td class="confluenceTd"><p>The output pdf file contains black pages instead of content when converting djvu to pdf.</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-810</p></td><td class="confluenceTd"><p>Slanting line does not appear in html rendering</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-794</p></td><td class="confluenceTd"><p>DefaultRegularFont setting doesn't work properly</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-566</p></td><td class="confluenceTd"><p>Specific pdf document can't be saved as HTML</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-496</p></td><td class="confluenceTd"><p>Exception when converting document to html after cleanup</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERNET-437</p></td><td class="confluenceTd"><p>Some characters not displayed when render HTML or PNG</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>WEB-2372</p></td><td class="confluenceTd"><p>Different HTML generated for the same document</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>WEB-1531</p></td><td class="confluenceTd"><p>Outlines are rendered incorrectly in HTML</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>WEB-2320</p></td><td class="confluenceTd"><p>Some text extracted from document twice</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>WEB-1709</p></td><td class="confluenceTd"><p>Text is shifted and duplicated in a PDF produced from VSD</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>WEB-1813</p></td><td class="confluenceTd"><p>Diagram file rendering regression</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>WEB-2029</p></td><td class="confluenceTd"><p>Incorrect saving XLSX to HTML</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>WEB-2289</p></td><td class="confluenceTd"><p>Incomplete converting XLSX to HTML</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>WEB-2322</p></td><td class="confluenceTd"><p>Text coordinates are incorrect for a specific document</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>WEB-2433</p></td><td class="confluenceTd"><p>Not all content of the Visio file is stored when converting to the PDF</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>WEB-1869</p></td><td class="confluenceTd"><p>Each page of a Word document is converted to HTML too long</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>WEB-2000</p></td><td class="confluenceTd"><p>Incorrect saving PDF to HTML</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>WEB-2081</p></td><td class="confluenceTd"><p>There is no text in tables of a PDF after conversion to HTML</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>WEB-2349</p></td><td class="confluenceTd"><p>Text selection is unstable in Firefox on the HTML engine</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>WEB-2070</p></td><td class="confluenceTd"><p>Convert .docx to .pdf wrong symbol</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>WEB-2448</p></td><td class="confluenceTd"><p>Missing character in resultant html</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>WEB-2425</p></td><td class="confluenceTd"><p>Incomprehensible characters when view pdf</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>WEB-2038</p></td><td class="confluenceTd"><p>Text issues when saving document containig XFA form to HTML</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERJAVA-853</p></td><td class="confluenceTd"><p>Supports the hyperlinks for the nested tabs for the .xls file</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERJAVA-924</p></td><td class="confluenceTd"><p>Cache is generated in the HTML mode independently of the useCache setting</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERJAVA-962</p></td><td class="confluenceTd"><p>Thumbnails are not displaying for some files</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERJAVA-967</p></td><td class="confluenceTd"><p>PDF to PNG text issues</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERJAVA-988</p></td><td class="confluenceTd"><p>HTML to PNG bad conversion</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERJAVA-1002</p></td><td class="confluenceTd"><p>Exception throws when try to rotate VTX file</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERJAVA-1015</p></td><td class="confluenceTd"><p>Pdf to Html text positioning issues</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERJAVA-1078</p></td><td class="confluenceTd"><p>preloadPagesCount() parameter doesn't work</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERJAVA-1079</p></td><td class="confluenceTd"><p>Quality parameter does not work</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERJAVA-1108</p></td><td class="confluenceTd"><p>The background is missed for IE 11</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERJAVA-1186</p></td><td class="confluenceTd"><p>Exception when trying to get thumbnails from presentation file</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERJAVA-1203</p></td><td class="confluenceTd"><p>Issues in rendering PDF document to HTML</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERJAVA-1204</p></td><td class="confluenceTd"><p>Exception generated while calling handler.getDocumentInfo(uuid)</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERJAVA-1206</p></td><td class="confluenceTd"><p>Excel files are not rendering to Images and HTML</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERJAVA-1211</p></td><td class="confluenceTd"><p>Issue in generated PDF file</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERJAVA-1212</p></td><td class="confluenceTd"><p>Excel files are not rendering to HTML or Images</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERJAVA-1216</p></td><td class="confluenceTd"><p>Performance issue with .pdf document that has a lot of images.</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERJAVA-1217</p></td><td class="confluenceTd"><p>Issue with showing Excel groups</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERJAVA-1220</p></td><td class="confluenceTd"><p>Invalid rendering of DWG file into Image or HTML</p></td><td class="confluenceTd"><p>Bug</p></td></tr><tr><td class="confluenceTd"><p>VIEWERJAVA-1309</p></td><td class="confluenceTd"><p>Exception with chunk image data throws during retrieving all image pages including transformation without license</p></td><td class="confluenceTd"><p>Bug</p></td></tr></tbody></table>

Public API and Backward Incompatible Changes

##### **Custom fonts path**

**Set custom fonts directory path**

**Java**

```csharp
// Setup GroupDocs.Viewer config
ViewerConfig config = new ViewerConfig();
config.StoragePath = @"C:\storage"; 
// Add custom fonts directories to FontDirectories list
config.FontDirectories.Add(@"/usr/admin/Fonts");
config.FontDirectories.Add(@"/home/admin/Fonts"); 
// Init viewer handler with config
ViewerHtmlHandler htmlHandler = new ViewerHtmlHandler(config);
```

##### **Working with email attachements**

**Get email attachment original file**

```csharp
// Setup GroupDocs.Viewer config
ViewerConfig config = new ViewerConfig();
config.StoragePath = @"C:\storage"; 
// Create image handler
ViewerImageHandler handler = new ViewerImageHandler(config);
EmailAttachment attachment = new EmailAttachment("document-with-attachments.msg", "attachment-image.png"); 
// Get attachment original file
FileContainer container = imageHandler.GetFile(attachment);
Console.WriteLine("Attach name: {0}, size: {1}", attachment.Name, attachment.FileType);
Console.WriteLine("Attach stream lenght: {0}", fileContainer.Stream.Length);
```

**Get attachment document html representation**

**Java**

```csharp
// Setup GroupDocs.Viewer config
ViewerConfig viewerConfig = new ViewerConfig();
viewerConfig.StoragePath = "c:
storage";
viewerConfig.UseCache = true; 
// Setup html conversion options
HtmlOptions htmlOptions = new HtmlOptions();
htmlOptions.IsResourcesEmbedded = false; 
// Init viewer html handler
ViewerHtmlHandler handler = new ViewerHtmlHandler(viewerConfig); 
DocumentInfoContainer info = handler.GetDocumentInfo("document-with-attachments.msg"); 
// Iterate over the attachments collection
foreach (AttachmentBase attachment in info.Attachments)
{
	Console.WriteLine("Attach name: {0}, size: {1}", attachment.Name, attachment.FileType); 
	// Get attachment document html representation
	List<PageHtml> pages = handler.GetPages(attachment, htmlOptions);
	foreach (PageHtml page in pages)
	{
		Console.WriteLine(" Page: {0}, size: {1}", page.PageNumber, page.HtmlContent.Length);
		foreach (HtmlResource htmlResource in page.HtmlResources)
		{
			Stream resourceStream = handler.GetResource(attachment, htmlResource);
			Console.WriteLine(" Resource: {0}, size: {1}", htmlResource.ResourceName, resourceStream.Length);
		}
	}
}
```

**Get attachment document image representation**

**Java**

```csharp
// Setup GroupDocs.Viewer config
ViewerConfig viewerConfig = new ViewerConfig();
viewerConfig.StoragePath = "c:
storage";
viewerConfig.UseCache = true; 
// Init viewer image handler
ViewerImageHandler handler = new ViewerImageHandler(viewerConfig); 
DocumentInfoContainer info = handler.GetDocumentInfo("document-with-attachments.msg"); 
// Iterate over the attachments collection
foreach (AttachmentBase attachment in info.Attachments)
{
	Console.WriteLine("Attach name: {0}, size: {1}", attachment.Name, attachment.FileType); 
	// Get attachment document image representation
	List<PageImage> pages = handler.GetPages(attachment, htmlOptions);
	foreach (PageImage page in pages)
	Console.WriteLine(" Page: {0}, size: {1}", page.PageNumber, page.Stream.Length);
}
```

**Get document information**

**Get document information by guid**

**Java**

```csharp
// Setup GroupDocs.Viewer config
ViewerConfig config = new ViewerConfig();
config.StoragePath = @"C:\storage"; 
// Create html handler
ViewerHtmlHandler htmlHandler = new ViewerHtmlHandler(config); 
string guid = "word.doc";
// Get document information
DocumentInfoOptions options = new DocumentInfoOptions();
DocumentInfoContainer documentInfo = htmlHandler.GetDocumentInfo(guid, options); 
Console.WriteLine("DateCreated: {0}", documentInfo.DateCreated);
Console.WriteLine("DocumentType: {0}", documentInfo.DocumentType);
Console.WriteLine("DocumentTypeFormat: {0}", documentInfo.DocumentTypeFormat);
Console.WriteLine("Extension: {0}", documentInfo.Extension);
Console.WriteLine("FileType: {0}", documentInfo.FileType);
Console.WriteLine("Guid: {0}", documentInfo.Guid);
Console.WriteLine("LastModificationDate: {0}", documentInfo.LastModificationDate);
Console.WriteLine("Name: {0}", documentInfo.Name);
Console.WriteLine("PageCount: {0}", documentInfo.Pages.Count);
Console.WriteLine("Size: {0}", documentInfo.Size); 
foreach (PageData pageData in documentInfo.Pages)
{
	Console.WriteLine("Page number: {0}", pageData.Number);
	Console.WriteLine("Page name: {0}", pageData.Name);
}
```

**Get document information by stream**

**Java**

```csharp
// Setup GroupDocs.Viewer config
ViewerConfig config = new ViewerConfig();
config.StoragePath = @"C:\storage"; 
// Create html handler
ViewerHtmlHandler htmlHandler = new ViewerHtmlHandler(config); 
// Get document stream
Stream stream = GetDocumentStream();
// Get document information
DocumentInfoOptions options = new DocumentInfoOptions();
DocumentInfoContainer documentInfo = htmlHandler.GetDocumentInfo(stream, options); 
Console.WriteLine("DateCreated: {0}", documentInfo.DateCreated);
Console.WriteLine("DocumentType: {0}", documentInfo.DocumentType);
Console.WriteLine("DocumentTypeFormat: {0}", documentInfo.DocumentTypeFormat);
Console.WriteLine("Extension: {0}", documentInfo.Extension);
Console.WriteLine("FileType: {0}", documentInfo.FileType);
Console.WriteLine("Guid: {0}", documentInfo.Guid);
Console.WriteLine("LastModificationDate: {0}", documentInfo.LastModificationDate);
Console.WriteLine("Name: {0}", documentInfo.Name);
Console.WriteLine("PageCount: {0}", documentInfo.Pages.Count);
Console.WriteLine("Size: {0}", documentInfo.Size); 
foreach (PageData pageData in documentInfo.Pages)
{
	Console.WriteLine("Page number: {0}", pageData.Number);
	Console.WriteLine("Page name: {0}", pageData.Name);
}
```

**Get document information by Uri**

**Java**

```csharp
// Setup GroupDocs.Viewer config
ViewerConfig config = new ViewerConfig();
config.StoragePath = @"C:\storage"; 
// Create html handler
ViewerHtmlHandler htmlHandler = new ViewerHtmlHandler(config); 
Uri uri = new Uri("http://example.com/words.doc"); 
// Get document information
DocumentInfoOptions options = new DocumentInfoOptions();
DocumentInfoContainer documentInfo = htmlHandler.GetDocumentInfo(uri, options); 
Console.WriteLine("DateCreated: {0}", documentInfo.DateCreated);
Console.WriteLine("DocumentType: {0}", documentInfo.DocumentType);
Console.WriteLine("DocumentTypeFormat: {0}", documentInfo.DocumentTypeFormat);
Console.WriteLine("Extension: {0}", documentInfo.Extension);
Console.WriteLine("FileType: {0}", documentInfo.FileType);
Console.WriteLine("Guid: {0}", documentInfo.Guid);
Console.WriteLine("LastModificationDate: {0}", documentInfo.LastModificationDate);
Console.WriteLine("Name: {0}", documentInfo.Name);
Console.WriteLine("PageCount: {0}", documentInfo.Pages.Count);
Console.WriteLine("Size: {0}", documentInfo.Size); 
foreach (PageData pageData in documentInfo.Pages)
{
	Console.WriteLine("Page number: {0}", pageData.Number);
	Console.WriteLine("Page name: {0}", pageData.Name);
} 
```

**Working with cache files**

**How to clear all cache files.**

**Java**

```csharp
//Init viewer config
ViewerConfig viewerConfig = new ViewerConfig();
viewerConfig.StoragePath = "c:
storage"; 
// Init viewer image or html handler
ViewerImageHandler viewerImageHandler = new ViewerImageHandler(viewerConfig); 
//Clear all cache files 
viewerImageHandler.ClearCache();
```

**How to clear files from cache older than specified time interval.**

**Java**

```csharp
//Init viewer config
ViewerConfig viewerConfig = new ViewerConfig();
viewerConfig.StoragePath = "c:
storage"; 
// Init viewer image or html handler
ViewerImageHandler viewerImageHandler = new ViewerImageHandler(viewerConfig); 
//Clear files from cache older than specified time interval
TimeSpan olderThanTwoDays = TimeSpan.FromDays(2);
viewerImageHandler.ClearCache(olderThanTwoDays)
```

1.  **The PdfFileOptions addPrintAction property is depricated, please use PdfFileOptions Transformations property ****and Transformation.addPringAction enumeration.**
2.  **Implemented getPdfFile from stream or remote file public methods.**  
    Public api changes:  
    1.  ViewerHandler.getPdfFile(PdfFileOptions) marked as deprecated
    2.  PdfFileOptions class all constructors except parameterles are marked as deprecated
    3.  Added new ViewerHandler methods:  
        
        *   FileContainer getPdfFile(String guid);
        *   FileContainer getPdfFile(String guid, PdfFileOptions pdfFileOptions);
        *   FileContainer getPdfFile(InputStream fileStream);
        *   FileContainer getPdfFile(InputStream fileStream, PdfFileOptions pdfFileOptions);
        *   FileContainer getPdfFile(InputStream fileStream, String fileName);
        *   FileContainer getPdfFile(InputStream fileStream, String fileName, PdfFileOptions pdfFileOptions);
        *   FileContainer getPdfFile(URL uri);
        *   FileContainer getPdfFile(URL uri, PdfFileOptions pdfFileOptions);
        *   FileContainer getPdfFile(URL uri, WindowsAuthenticationCredential credential, PdfFileOptions pdfFileOptions);
        
3.  **Implemented saving Cells document sheet to multiple pages in image mode.**  
    1.  Public API changes: Option CellsOptions.setOnePagePerSheet() now supported by ImageHandler. 
4.  **Implemented setting 'FontName' which allows users to specify font name for watermark text.**  
    Public API changes:  
    1.  Class: com.groupdocs.viewer.domain.Watermark
    2.  Added field: getFontName() and setFontName()
    3.  getPages method watermarking with font name
    4.  getPdfFile method watermarking with font name
5.  **Cleanup GetDocumentInfo method response.**  
    1.  Class com.groupdocs.viewer.domain.containers.DocumentInfoContainer field setContentControls() marked as deprecated
    2.  Class com.groupdocs.viewer.domain.ContentControl marked as deprecated
    3.  Class com.groupdocs.viewer.domain.WordsFileData field setContentControls() marked as deprecated
6.  **User can't catch GroupDocsException**  
    1.  New public class com.groupdocs.viewer.exception.GroupDocsViewerException
    2.  All exceptions from com.groupdocs.viewer.exception package are derived classes of GroupDocsViewerException.
7.  How to specify resource prefix  
    HtmlResourcePrefix setting is necessary when every resource name in html document should be prefixed with some string. This may be useful when resources for document are obtained via some REST API method. Please note that css files will also be processed - html resource prefix value will be added to font names in css file.
    
    **Java**
    
    ```csharp
    HtmlOptions htmlOptions = new HtmlOptions();
    htmlOptions.setHtmlResourcePrefix("http://contoso.com/api/getResource?name=");
    ```
    
    If css files should not be processed then IgnoreResourcePrefixForCss setting should be set to true.
    
    **Java**
    
    ```csharp
    HtmlOptions htmlOptions = new HtmlOptions();
    htmlOptions.setHtmlResourcePrefix("http://contoso.com/api/getResource?name=");
    htmlOptions.setIgnoreResourcePrefixForCss(true);
    ```
    
8.  **[How to set default font name](https://docs.asposeptyltd.com/display/viewerjava/Working+with+Common+Operations)**
9.  **[Show hidden pages for Visio files](https://docs.asposeptyltd.com/display/viewerjava/Render+Visio+Document+as+HTML+with+Hidden+Pages)[](file:///C:/wiki/display/viewer/17.++Show+hidden+pages+for+Visio+files)**
10.  **[How to specify internal hyperlink prefix for Excel files](https://docs.asposeptyltd.com/display/viewerjava/Render+Excel+as+Html+with+InternalHyperlinkPrefix)**
11.  **Mark CachedPageDescription redundant constructor as Obsolete**  
    1.  Class com.groupdocs.viewer.domain.CachedPageDescription constructor public CachedPageDescription(String guid, CacheFileType cacheFileType) marked as deprecated
12.  ****Improve CAD files rendering ****  
    1.  Class com.groupdocs.viewer.domain.DocumentTypeName constant public final String Autocad = "Autocad"; changed to public final String CAD = "CAD"
13.  **Update public classes fields access modifiers.**  
    
    1.  Class com.groupdocs.viewer.localization.LocalizedStringKeys new contant EXC\_TMPL\_CORRUPTED\_OR\_DAMAGED\_FILE
    2.  Class com.groupdocs.viewer.localization.LocalizedStringKeys new contant EXC\_TMPL\_FILE\_TYPE\_NOT\_SUPPORTED
    3.  Class com.groupdocs.viewer.localization.LocalizedStringKeys new contant EXC\_TMPL\_INVALID\_PASSWORD
    4.  Class com.groupdocs.viewer.localization.LocalizedStringKeys new contant EXC\_TMPL\_PASSWORD\_PROTECTED\_FILE
    5.  Class com.groupdocs.viewer.localization.LocalizedStringKeys new contant EXC\_TMPL\_STORAGE\_PATH\_NOT\_SPECIFIED
    6.  Class com.groupdocs.viewer.localization.LocalizedStringKeys new contant EXC\_TMPL\_CACHE\_FILE\_NOT\_FOUND
    7.  Class com.groupdocs.viewer.localization.LocalizedStringKeys new contant EXC\_TMPL\_GUID\_NOT\_SPECIFIED
    8.  Class com.groupdocs.viewer.localization.LocalizedStringKeys new contant EXC\_TMPL\_TRANSFORMATION\_FAILED\_PAGE\_NOT\_EXIST
    
14.  **[Ability to set default font when rendering Diagram documents](https://docs.asposeptyltd.com/display/viewerjava/Working+with+Common+Operations)[](http://lisbon.dynabic.com/wiki/display/viewer/16.++How+to+set+default+font+name)**
15.  The ability to show and hide PDF layers
    
    Starting from version 3.7.0 GroupDocs.Viewer the rendering Pdf documents into html representation was improved. It is possible to work with layers in html representation of Pdf document (e.g. show\\hide) with help of javascript. Each layer is separated into <div> tag which has Html data tag "data-pdflayer" and its value contains layer name. For example Pdf document has layer with name "Backgroung" so output html will contain tag
    
    **Html**
    
    ```csharp
    <div data-pdflayer="Backgroung"> .... </div>
    ```
    
    This layer can be easily accessed with javascript, see example how to access and hide layer with help of JQuery
    
    **JavaScript**
    
    ```csharp
    // get layer
    var layer = $("[data-pdflayer='Backgroung']");
    // hide layer
    layer.hide();
    // show layer
    layer.show();
    // get all layers
    var allLayers = $("[data-pdflayer]");
    // go throught all layers and print layer name
    allLayers.each(function(index) {
        console.log(index + ": " + $(this).data("pdflayer"));
    });
    ```
