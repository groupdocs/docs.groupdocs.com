---
id: groupdocs-comparison-for-net-18-8-release-notes
url: comparison-net/groupdocs-comparison-for-net-18-8-release-notes
title: GroupDocs.Comparison for .NET 18.8 Release Notes
weight: 4
description: 
keywords: 
bookCollapseSection: true
productName: GroupDocs.Comparison for .NET
hideChildren: False
---

# GroupDocs.Comparison for .NET 18.8 Release Notes

This page contains release notes for GroupDocs.Comparison for .NET 18.8

## Major Features

Below the list of most notable changes in  release of GroupDocs.Comparison for .NET 18.8:

*   Implemented new settings for text highlighting for the number of Comparison formats (Html, Slides, Notes, Pdf, Words)
*   Improve PDF mapper
*   Improve support of comparing different formats with image
*   Fixed number of issues of specific PDF documents comparing

## Full List of Issues Covering all Changes in this Release

Key

Summary

Issue Type

COMPARISONNET-1637

Implement new Setting for text highlighting Comparison.Html

New Feature

COMPARISONNET-1636

Implement new Setting for text highlighting Comparison.Slides

New Feature

COMPARISONNET-1635

Implement new Setting for text highlighting Comparison.Notes

New Feature

COMPARISONNET-1634

Implement new Setting for text highlighting Comparison.Pdf

New Feature

COMPARISONNET-1633

Implement new Setting for text highlighting Comparison.Words

New Feature

COMPARISONNET-1644

Improve PDF mapper

Improvement

COMPARISONNET-1640

Improve support of comparing different formats with image

Improvement

COMPARISONNET-1620

Output of PDF with graphs is not as expected

Bug

COMPARISONNET-1619

Output of PDF with images is not as expected

Bug

## Public API and Backward Incompatible Changes

This section lists public API changes that were introduced in GroupDocs.Comparison for .NET 18.8. It includes not only new and obsoleted public methods, but also a description of any changes in the behavior behind the scenes in GroupDocs.Comparison which may affect existing code. Any behavior introduced that could be seen as a regression and modifies existing behavior is especially important and is documented here.

1.  Inserted, deleted and style changed items styles setting used for set font color, highlight color , styles(bold, italic, underline, strike through) and tags for marked changes in result document:
    
    settings.InsertedItemsStyle.FontColor = System.Drawing.Color.Brown;
    settings.InsertedItemsStyle.HighlightColor = System.Drawing.Color.Red;
    settings.InsertedItemsStyle.BeginSeparatorString = "<inserted>";
    settings.InsertedItemsStyle.EndSeparatorString = "</inserted>";
    
    settings.DeletedItemsStyle.FontColor = System.Drawing.Color.Aquamarine;
    settings.DeletedItemsStyle.HighlightColor = System.Drawing.Color.Blue;
    settings.DeletedItemsStyle.BeginSeparatorString = "<deleted>";
    settings.DeletedItemsStyle.EndSeparatorString = "</deleted>";
    
    settings.StyleChangedItemsStyle.FontColor = System.Drawing.Color.Aqua;
    settings.StyleChangedItemsStyle.HighlightColor = System.Drawing.Color.Green;
    settings.StyleChangedItemsStyle.BeginSeparatorString = "<style>";
    settings.StyleChangedItemsStyle.EndSeparatorString = "</style>";
