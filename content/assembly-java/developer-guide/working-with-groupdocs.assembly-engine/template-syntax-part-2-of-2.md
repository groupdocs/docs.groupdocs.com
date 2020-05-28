---
id: template-syntax-part-2-of-2
url: assembly/java/template-syntax-part-2-of-2
title: Template Syntax - Part 2 of 2
weight: 2
description: ""
keywords: 
productName: GroupDocs.Assembly for Java
hideChildren: False
---
{{< alert style="info" >}}This article is the second part of the Template Syntax series of articles. For first part, please visit Template Syntax - Part 1 of 2.{{< /alert >}}

<table class="sectionMacro" border="0" cellpadding="5" cellspacing="0" width="100%"><tbody><tr><td valign="top" width="50%"><div class="panel" style="border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"><div class="panelHeader" style="border-bottom-width: 1px; background-color: rgb(176, 196, 222);"><b>Contents Summary</b></div><div class="panelContent"><style type="text/css">div.rbtoc1590607144350 { padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; }div.rbtoc1590607144350 ul { list-style-type: none; list-style-image: none; margin-left: 0px; }div.rbtoc1590607144350 li { margin-left: 0px; padding-left: 0px; }</style><div class="toc rbtoc1590607144350"><ul class="toc-indentation"><li><span class="TOCOutline">1</span> <a href="#TemplateSyntax-Part2of2-OutputtingExpressionResults">Outputting Expression Results</a></li><li><span class="TOCOutline">2</span> <a href="#TemplateSyntax-Part2of2-OutputtingSequentialData">Outputting Sequential Data</a><ul class="toc-indentation"><li><span class="TOCOutline">2.1</span> <a href="#TemplateSyntax-Part2of2-CommonDataBands">Common Data Bands</a></li><li><span class="TOCOutline">2.2</span> <a href="#TemplateSyntax-Part2of2-NumberedLists">Numbered Lists</a><ul class="toc-indentation"><li><span class="TOCOutline">2.2.1</span> <a href="#TemplateSyntax-Part2of2-Dynamiclistnumberingrestart">Dynamic list numbering restart</a></li></ul></li><li><span class="TOCOutline">2.3</span> <a href="#TemplateSyntax-Part2of2-Table-RowDataBands">Table-Row Data Bands</a></li><li><span class="TOCOutline">2.4</span> <a href="#TemplateSyntax-Part2of2-ExtensionMethodsofIterationVariables">Extension Methods of Iteration Variables</a></li><li><span class="TOCOutline">2.5</span> <a href="#TemplateSyntax-Part2of2-ChartsRepresentingSequentialData">Charts Representing Sequential Data</a></li></ul></li><li><span class="TOCOutline">3</span> <a href="#TemplateSyntax-Part2of2-EnumerationExtensionMethods">Enumeration Extension Methods</a><ul class="toc-indentation"><li><span class="TOCOutline">3.1</span> <a href="#TemplateSyntax-Part2of2-TheEnumeration">The Enumeration</a></li><li><span class="TOCOutline">3.2</span> <a href="#TemplateSyntax-Part2of2-TheEnumerationExtension">The Enumeration Extension</a></li></ul></li></ul></div></div></div></td><td valign="top" width="15%">&nbsp;</td><td valign="top" width="35%">&nbsp;</td></tr></tbody></table>

## Outputting Expression Results

You can output expression results to your reports using expression tags. An expression tag denotes a placeholder for an expression result within a template. While building a report, the corresponding expression is evaluated, and this placeholder is replaced with the formatted result of the expression.

An expression tag has no name and consists of the following elements:

*   An expression enclosed by brackets
*   An optional format string enclosed by double quotes and preceded by the ":" character
*   An optional `html` switch

```csharp
<<[expression]:"format" -html>>
```

If `html` switch is not present, the result of the corresponding expression is written to a document as a plain text at runtime. Font attributes are derived from the first character of the corresponding tag in this case.

If `html` switch is present, the expression result is considered to be a HTML block and is written as such. This feature is useful, when you need to format text parts of an expression result in different ways. For example, the following tag is replaced with a content like "**Bold** and *italic* text" at runtime.

```csharp
<<["<b>Bold</b> and <i>italic</i> text"] -html>>
```

To format a numeric or date-time expression result, you can specify a format string as an element of the corresponding expression tag. Such format strings are the same as the ones that you pass to DecimalFormat or SimpleDateFormat constructors. That is, for example, given that `d` is a `DateTime` value, you can use the following template to format the value using the "yyyy.MM.dd" pattern.

```csharp
<<[d]:"yyyy.MM.dd">>
```

## Outputting Sequential Data

You can output a sequence of elements of the same type to your report using a data band. A `data band` has a body that represents a template for a single element of such a sequence. While building a report, sequence elements are enumerated, and the following procedure takes place for each of the elements:

1.  The data band body is duplicated and appended to the report.
2.  The appended data band body is populated with the element's data.

**Note --** A data band body can contain nested data bands.

A data band body is defined between the corresponding opening and closing `foreach` tags within a template as follows.

```csharp
<<foreach ...>>
data_band_body
<</foreach>>

```

You can reference an element of the corresponding sequence in template expressions within a data band body using an iteration variable. At runtime, an iteration variable represents a sequence element for which an iteration is currently being performed. You can declare an iteration variable within the corresponding opening `foreach` tag.

An opening `foreach` tag defines a `foreach` statement enclosed by brackets. The following table describes elements of this statement.

| Element | Optional? | Remarks |
| --- | --- | --- |
| **Iteration Variable Type** | Yes | You can specify the type of an iteration variable explicitly. This type must be known by the engine (see [Setting up Known External Types](https://docs.groupdocs.com/display/assemblynet/GroupDocs.Assembly+Engine+APIs#GroupDocs.AssemblyEngineAPIs-SettingupKnownExternalTypes) for more information).  
If you do not specify the type explicitly, it is determined implicitly by the engine depending on the type of the corresponding sequence. |
| **Iteration Variable Name** | Yes | You can specify the name of an iteration variable to use it while accessing the variable's members. The name must be unique within the scope of the corresponding `foreach` tag.  
If you do not specify the name, you can access the variable's members using the contextual object member access syntax (see [Using Contextual Object](https://docs.groupdocs.com/display/assemblynet/Template+Syntax+-+Part+1+of+2#TemplateSyntax-Part1of2-UsingContextualObjectMemberAccess) Member Access" for more information). |
| **"in" Keyword** | No | 
 |
| **Sequence Expression** | No | A sequence expression must return an [Iterable](http://docs.oracle.com/javase/7/docs/api/java/lang/Iterable.html) implementor. |

The complete syntax of a `foreach` tag (including optional elements) is as follows.

```csharp
<<foreach [variable_type variable_name in sequence_expression]>>
data_band_body
<</foreach>>

```

### Common Data Bands

{{< alert style="info" >}}See Bulleted List template using Common Data Bands in it.{{< /alert >}}

A common data band is a data band which body starts and ends within paragraphs that belong to a single story or table cell.

In particular, a common data band can be entirely located within a single paragraph. In this case, while building a report, the band is replaced with contents that are entirely located within the same paragraph as well. The following example illustrates such a scenario. Given that items is an enumeration of the strings "item1", "item2", and "item3", you can use the following template to enumerate them with commas in a single paragraph.

```csharp
The items are: <<foreach [item in items]>><<[item]>>, <</foreach>>and others.

```

In this case, the engine produces a report as follows.

```csharp
The items are: item1, item2, item3, and others.
```

When the body of a common data band starts and ends within different paragraphs, the engine duplicates on iteration only those paragraph breaks which are located within the body. The following table illustrates the relevant cases.

**Note --** Examples in the table are given with paragraph marks shown as per Microsoft Word® editor.

| Template | Report |
| --- | --- |
| 
```csharp
prefix <<foreach [item in items]>><<[item]>>¶
<</foreach>>suffix
```



 | 

```csharp
prefix item1¶
item2¶
item3¶
suffix
```



 |
| 

```csharp
prefix<<foreach [item in items]>>¶
<<[item]>><</foreach>> suffix
```



 | 

```csharp
prefix¶
item1¶
item2¶
item3 suffix
```



 |
| 

```csharp
prefix¶
<<foreach [item in items]>><<[item]>>¶
<</foreach>>suffix
```



 | 

```csharp
prefix¶
item1¶
item2¶
item3¶
suffix
```



 |
| 

```csharp
prefix<<foreach [item in items]>>¶
<<[item]>><</foreach>>¶
suffix
```



 | 

```csharp
prefix¶
item1¶
item2¶
item3¶
suffix
```



 |
| 

```csharp
prefix¶
<<foreach [item in items]>>¶
<<[item]>>¶
<</foreach>>¶
suffix
```



 | 

```csharp
prefix¶
¶
item1¶
¶
item2¶
¶
item3¶
¶
suffix
```



 |

While building a report, duplicated paragraph breaks derive common attributes from their template prototypes. In particular, this fact enables you to build numbered or bulleted lists in reports dynamically. For example, given the above declaration of items, you can get a report with their numbered list using the following template.

### Numbered Lists

 "1. " in the template stands for a numbered list label.

```csharp
1. <<foreach [item in items]>><<[item]>>
<</foreach>>

```

In this case, the engine produces a report as follows.

```csharp
1. item1
2. item2
3. item3

```

#### Dynamic list numbering restart

This feature is useful when working with a nested numbered list within a data band as shown in the following example.

Assume that you have the Order and Service classes defined in your application as follows:

```csharp
public class Order
{
    public String getClientName() {... }

    public String getClientAddress() {... }

    public Iterable<Service> getServices() { ... }
    ...
}

public class Service
{
    public String getName() {...}
    ...
}

```

Given that orders is an enumeration of Order instances, you could try to use the following template to output information on several orders in one document.

```csharp
<<foreach [order in orders]>><<[order.getClientName()]>> (<<[order.getClientAddress()]>>)
1. <<foreach [service in order.getServices()]>><<[service.getName()]>>
<</foreach>><</foreach>>
```

But then, a resultant document would look as follows:

Jane Doe (445 Mount Eden Road Mount Eden Auckland 1024)
     1. Regular Cleaning
     2. Oven Cleaning
John Smith (43 Vogel Street Roslyn Palmerston North 4414)
     3. Regular Cleaning
     4. Oven Cleaning
     5. Carpet Cleaning

That is, there would be a single numbered list across all orders, which is not applicable for this scenario. However, you can make list numbering to restart for every order by putting a restartNum tag into your template before a corresponding foreach tag as follows:

```csharp
<<foreach [order in orders]>><<[order.getClientName()]>> (<<[order.getClientAddress()]>>)
1. <<restartNum>><<foreach [service in order.getServices()]>><<[service.getName()]>>
<</foreach>><</foreach>>

```

{{< alert style="warning" >}}When using with a data band, it is required to put a restartNum tag before a corresponding foreach tag in the same numbered paragraph.{{< /alert >}}

Then, a resultant document looks as follows:

Jane Doe (445 Mount Eden Road Mount Eden Auckland 1024)

1.  Regular Cleaning
2.  Oven Cleaning

John Smith (43 Vogel Street Roslyn Palmerston North 4414)

1.  Regular Cleaning
2.  Oven Cleaning
3.  Carpet Cleaning
    

{{< alert style="warning" >}}You can use a restartNum tag without a data band to dynamically restart list numbering for a containing paragraph, if needed; for example, the tag can be used to restart list numbering for a document inserted dynamically.{{< /alert >}}

### Table-Row Data Bands

{{< alert style="info" >}}See In-Table List With Alternate Content template using Table-Row Data Bands in it.{{< /alert >}}

A table-row data band is a data band which body occupies single or multiple rows of a single document table. The body of such a band starts at the beginning of the first occupied row and ends at the end of the last occupied row as follows.

<table class="confluenceTable"><tbody><tr><td class="confluenceTd"><p>&nbsp;</p></td><td class="confluenceTd"><p>&nbsp;</p></td><td class="confluenceTd"><p>&nbsp;</p></td></tr><tr><td class="confluenceTd"><p><code>&lt;&lt;foreach ...</code>&gt;&gt; ...</p></td><td class="confluenceTd"><p>...</p></td><td class="confluenceTd"><p>...</p></td></tr><tr><td class="confluenceTd"><p>...</p></td><td class="confluenceTd"><p>...</p></td><td class="confluenceTd"><p>...</p></td></tr><tr><td class="confluenceTd"><p>...</p></td><td class="confluenceTd"><p>...</p></td><td class="confluenceTd"><p><code>... &lt;&lt;/foreach&gt;&gt;</code></p></td></tr><tr><td class="confluenceTd"><p>&nbsp;</p></td><td class="confluenceTd"><p>&nbsp;</p></td><td class="confluenceTd"><p>&nbsp;</p></td></tr></tbody></table>

  
The most common use case of a table-row data band is the building of a document table that represents a list of items. You can use a template like the following one to achieve this.

| Client | Manager | Contract Price |
| --- | --- | --- |
| 
```csharp
<<foreach [
    c in ds.Contracts
]>><<[c.Clients.Name]>>
```



 | 

```csharp
<<[c.Managers.Name]>>
```



 | 

```csharp
<<[c.Price]>><</
foreach>>
```



 |
| Total: | 

 | 

```csharp
<<[ds
    .Contracts
    .sum(c =>
        c.Price)]>>
```



 |

In this case, the engine produces a report as follows.

| Client | Manager | Contract Price |
| --- | --- | --- |
| A Company | John Smith | 1200000 |
| B Ltd. | John Smith | 750000 |
| C & D | John Smith | 350000 |
| E Corp. | Tony Anderson | 650000 |
| F & Partners | Tony Anderson | 550000 |
| G & Co. | July James | 350000 |
| H Group | July James | 250000 |
| I & Sons | July James | 100000 |
| J Ent. | July James | 100000 |
| Total: | 
 | 4300000 |

To populate a document table with a master-detail data, you can use nested table-row data bands like in the following template.

| Manager/Client | Contract Price |
| --- | --- |
| 
```csharp
<<foreach [
    m in ds.Managers
]>><<[m.Name]>>
```



 | 

```csharp
<<[m.Contracts.sum(
    c => c.Price)]>>
```



 |
| 

```csharp
<<foreach [
    c in m.Contracts
]>> <<[c.Clients.Name]>>
```



 | 

```csharp
<<[c.Price]>><</
foreach>><</
foreach>>
```



 |
| Total: | 

```csharp
<<[ds
    .Contracts
    .sum(c =>
        c.Price)]>>
```



 |

In this case, the engine produces a report as follows.

| Manager/Client | Contract Price |
| --- | --- |
| John Smith | 2300000 |
|    A Company | 1200000 |
|    B Ltd. | 750000 |
|    C & D | 350000 |
| Tony Anderson | 1200000 |
|    E Corp. | 650000 |
|    F & Partners | 550000 |
| July James | 800000 |
|    G & Co. | 350000 |
|    H Group | 250000 |
|    I & Sons | 100000 |
|    J Ent. | 100000 |
| Total: | 4300000 |

You can normally use common data bands nested to table-row data bands as well like in the following template.

| Manager | Clients |
| --- | --- |
| 
```csharp
<<foreach [
    m in ds.Managers
]>><<[m.Name]>>
```



 | 

```csharp
<<foreach [
    c in m.Contracts
]>><<[c.Clients.Name]>>
<</foreach>><</foreach>>
```



 |

In this case, the engine produces a report as follows.

| Manager | Clients |
| --- | --- |
| John Smith | A Company  
B Ltd.  
C & D |
| Tony Anderson | E Corp.  
F & Partners |
| July James | G & Co.  
H Group  
I & Sons  
J Ent. |

### Extension Methods of Iteration Variables

{{< alert style="info" >}}See Multicolored Numbered Listtemplate using Extension Methods of Iteration Variable in it.{{< /alert >}}

GroupDocs.Assembly Engine provides special extension methods for iteration variables of any type. You can normally use these extension methods in template expressions. The following list describes the extension methods.

*   `indexOf()`

Returns the zero-based index of a sequence item that is represented by the corresponding iteration variable. You can use this extension method to distinguish sequence items with different indexes and then handle them in different ways. For example, given that `items` is an enumeration of the strings "item1", "item2", and "item3", you can use the following template to enumerate them prefixing all of them but the first one with commas.

```csharp
The items are: <<foreach [
    item in items]>><<[item.indexOf() != 0
        ? ", "
        : ""]>><<[item]>><</foreach>>.

```

In this case, the engine produces a report as follows.

```csharp
The items are: item1, item2, item3.

```

*   `numberOf()`

Returns the one-based index of a sequence item that is represented by the corresponding iteration variable. You can use this extension method to number sequence `items` without involving Microsoft Word® lists. For example, given the previous declaration of items, you can enumerate and number them in a document table using the following template.

| No. | Item |
| --- | --- |
| 
```csharp
<<foreach [item
in items]>><<[
item.numberOf()]>>
```



 | 

```csharp
<<[item]>><</foreach>>
```



 |

In this case, the engine produces a report as follows.

| No. | Item |
| --- | --- |
| 1 | item1 |
| 2 | item2 |
| 3 | item3 |

### Charts Representing Sequential Data

{{< alert style="info" >}}See Bubble Chart template representing Sequential Data in it.{{< /alert >}}

GroupDocs.Assembly Engine enables you to use charts to represent your sequential data. To declare a chart that is going to be populated with data dynamically within your template, do the following steps:

1.  Add a chart to your template at the place where you want it to appear in a result document.
2.  Configure the appearance of the chart.
3.  Add required chart series and configure their appearance as well.
4.  Add a title to the chart, if missing.
5.  Add an opening foreach tag to the chart title.
6.  Depending on the type of the chart, add x tags to the chart title or chart series' names as follows.
    
    ```csharp
    <<x [x_value_expression]>>
    
    ```
    
    1.  For a scatter or bubble chart, you can go one of the following ways:
        1.  To use the same x-value expression for all chart series, add a single x tag to the chart title after the corresponding foreachtag.
        2.  To use different x-value expressions for every chart series, add multiple x tags to chart series' names – one for each chart series.  
            An x-value expression for a scatter or bubble chart must return a numeric value.
    2.  For a chart of another type, add a single x tag to the chart title after the corresponding foreach tag. In this case, an x-value expression must return a numeric, date, or string value.
7.  For a chart of any type, add y tags to chart series' names as follows.
    
    ```csharp
    <<y [y_value_expression]>>
    
    ```
    
    An y-value expression must return a numeric value.
    
8.  For a bubble chart, add size tags to chart series' names as follows.
    
    ```csharp
    <<size [bubble_size_expression]>>
    
    ```
    
    A bubble-size expression must return a numeric value.
    
9.  For a chart with dynamic data, you can select which series to include into it dynamically based upon conditions. In particular, this feature is useful when you need to restrict access to sensitive data in chart series for some users of your application. To use the feature, do the following steps:
    
    1.  Declare a chart with dynamic data in the usual way
    2.  For series to be removed from the chart based upon conditions dynamically, define the conditions in names of these series using removeif tags having the following syntax
    
    ```csharp
    <<removeif [conditional_expression]>>
    
    ```
    
    A conditional expression must return a Boolean value.
    

**Note:** A closing foreach tag is not used for a chart.  
While composing expressions for x, y, and size tags, you can normally reference an iteration variable declared at the corresponding foreach tag in a chart title in the same way as if you intended to output results of expressions within a data band.

**Note:** You can normally use charts with dynamic data within data bands.  
During runtime, a chart with a foreach tag in its title is processed by the engine as follows:

1.  A sequence expression declared at the foreach tag is evaluated and iterated.
2.  For every sequence item, expressions declared at x, y, and size tags are evaluated.
3.  Results of these expressions are used to populate corresponding chart series.
4.  All foreach, x, y, and size tags are removed from the chart title and chart series' names.  
    Consider the following example. Assume that you have the Manager and Contract classes defined in your application as follows.
    
    ```csharp
    public class Manager
    {
        public String getName() { ... }
        public Iterable<Contract> getContracts() { ... }
        ...
    }
    
    public class Contract
    {
        public float getPrice { ... }
        ...
    }
    
    ```
    
    Given that managers is an enumeration of Manager instances, you can use the following template to represent total contract prices achieved by managers in a [column chart](Working%2Bwith%2BChart%2BReports%2B-%2BFiltered%252C%2BOrdered%252C%2BGrouped.html). 
    

## Enumeration Extension Methods

### The Enumeration

GroupDocs.Assembly Engine enables you to perform common manipulations on a sequential data through the engine's built-in extension methods for `Iterable`. These extension methods mimic some extension methods of [IEnumerable<T>](http://msdn.microsoft.com/en-us/library/9eekhta0(v=vs.110).aspx) providing the same signatures and behavior features. Thus, you can group, sort, and perform other sequential data manipulations in template expressions in a familiar way.

### The Enumeration Extension

Below table describes the built-in extension methods. The following notation conventions are used within the table:

*   `Selector` stands for a lambda function returning a value and taking an enumeration item as its single argument. See [Using Lambda Functions](https://docs.groupdocs.com/display/assemblynet/Template+Syntax+-+Part+1+of+2#TemplateSyntax-Part1of2-UsingLambdaFunctions) for more information.
*   `ComparableSelector` stands for `Selector` returning [IComparable](http://msdn.microsoft.com/en-US/library/system.icomparable(v=vs.110).aspx).
*   `Predicate` stands for `Selector` returning a Boolean value.

Examples in this table are given using `persons` and `otherPersons`, enumerations of instances of the `Person` class that is defined as follows.

```csharp
public class Person
{
    public String getName { ... }
    public int getAge { ... }
    public Iterable<Person> getChildren { ... }
    ...
}

```

| Extension Method | Examples and Notes |
| --- | --- |
| `all(Predicate)` | 
```csharp
persons.all(p => p.getAge < 50)
```



 |
| `any()` | 

```csharp
persons.any()
```



 |
| `any(Predicate)` | 

```csharp
persons.any(p => p.getName == "John Smith")
```



 |
| `average(Selector)` | 

```csharp
persons.average(p => p.getAge)
```

The input selector must return a value of any type that has predefined addition and division operators. |
| `concat(Iterable)` | 

```csharp
persons.concat(otherPersons)
```

An implicit reference conversion must exist between types of items of concatenated enumerations. |
| `contains(Object)` | 

```csharp
persons.contains(otherPersons.first())
```



 |
| `count()` | 

```csharp
persons.count()
```



 |
| `count(Predicate)` | 

```csharp
persons.count(p => p.getAge > 30)
```



 |
| `distinct()` | 

```csharp
persons.distinct()
```



 |
| `first()` | 

```csharp
persons.first()
```



 |
| `first(Predicate)` | 

```csharp
persons.first(p => p.getAge > 30)
```



 |
| `firstOrDefault()` | 

```csharp
persons.firstOrDefault()
```



 |
| `firstOrDefault(Predicate)` | 

```csharp
persons.firstOrDefault(p => p.getAge > 30)
```



 |
| `groupBy(Selector)` | 

```csharp
persons.groupBy(p => p.getAge)
```

Or

```csharp
persons.groupBy(
    p => new
    {
        age = p.getAge,
        count = p.getChildren.count()
    })
```

This method returns an enumeration of group objects. Each group has a unique key defined by the input selector and contains items of the source enumeration associated with this key. You can access the key of a group instance using the Key property. You can treat a group itself as an enumeration of items that the group contains. |
| `last()` | 

```csharp
persons.last()
```



 |
| `last(Predicate)` | 

```csharp
persons.last(p => p.getAge > 100)
```



 |
| `lastOrDefault()` | 

```csharp
persons.lastOrDefault()
```



 |
| `lastOrDefault(Predicate)` | 

```csharp
persons.lastOrDefault(p => p.getAge > 100)
```



 |
| `max(ComparableSelector)` | 

```csharp
persons.max(p => p.getAge)
```



 |
| `min(ComparableSelector)` | 

```csharp
persons.min(p => p.getAge)
```



 |
| `orderBy(ComparableSelector)` | 

```csharp
persons.orderBy(p => p.getAge)
```

Or

```csharp
persons.orderBy(p => p.getAge)
    .thenByDescending(p => p.getName)
```

Or

```csharp
persons.orderBy(p => p.getAge)
    .thenByDescending(p => p.getName)
    .thenBy(p => p.getChildren.count())
```

This method returns an enumeration ordered by a single key. To specify additional ordering keys, you can use the following extension methods of an ordered enumeration:

*   `thenBy(ComparableSelector)`
*   `thenByDescending(ComparableSelector)`

 |
| `orderByDescending(ComparableSelector)` | 

```csharp
persons.orderByDescending(p => p.getAge)
```

Or

```csharp
persons.orderByDescending(p => p.getAge)
    .thenByDescending(p => p.getName)
```

Or

```csharp
persons.orderByDescending(p => p.getAge)
    .thenByDescending(p => p.getName)
    .thenBy(p => p.getChildren.count())
```

See the previous note. |
| `single()` | 

```csharp
persons.single()
```



 |
| `single(Predicate)` | 

```csharp
persons.single(
    p => p.getName == "John Smith")
```



 |
| `singleOrDefault()` | 

```csharp
persons.singleOrDefault()
```



 |
| `singleOrDefault(Predicate)` | 

```csharp
persons.singleOrDefault(
    p => p.getName == "John Smith")
```



 |
| `skip(int)` | 

```csharp
persons.skip(10)
```



 |
| `skipWhile(Predicate)` | 

```csharp
persons.skipWhile(p => p.getAge < 21)
```



 |
| `sum(Selector)` | 

```csharp
persons.sum(p => p.getChildren.count())
```

The input selector must return a value of any type that has a predefined addition operator. |
| `take(int)` | 

```csharp
persons.take(5)
```



 |
| `takeWhile(Predicate)` | 

```csharp
persons.takeWhile(p => p.getAge < 50)
```



 |
| `union(Iterable)` | 

```csharp
persons.union(otherPersons)
```

An implicit reference conversion must exist between types of items of united enumerations. |
| `where(Predicate)` | 

```csharp
persons.where(p => p.getAge > 18)
```



 |