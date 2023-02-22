---
sidebar_position: 2
sidebar_label: Tables
title: Tables
description: This page contains all columns with tables for Model, including the description, and technical details.
---
### Customer
**Description**: 
> No Description available

<dl>
  <dt>Measures (#)</dt>
  <dd>0</dd>

  <dt>Columns (#)</dt>
  <dd>8</dd>

  <dt>Partiton (#)</dt>
  <dd>1</dd>

  <dt>Data Category</dt>
  <dd>Regular Table</dd>

  <dt>Is Hidden</dt>
  <dd>False</dd>

  <dt>Table Type</dt>
  <dd>Partition</dd>

  <dt>Source Type</dt>
  <dd>M</dd>

</dl>


```powerquery title="Table Source: Customer"
   let
    Source = Excel.Workbook(File.Contents("C:\Users\CStallings\Documents\py_files\PyTabular\test\adventureworks\AdventureWorks Sales.xlsx"), null, true),
    Customer_Table = Source{[Item="Customer",Kind="Table"]}[Data],
in
    #"Changed Type"
```
---
### Date
**Description**: 
> No Description available

<dl>
  <dt>Measures (#)</dt>
  <dd>0</dd>

  <dt>Columns (#)</dt>
  <dd>8</dd>

  <dt>Partiton (#)</dt>
  <dd>1</dd>

  <dt>Data Category</dt>
  <dd>Time</dd>

  <dt>Is Hidden</dt>
  <dd>False</dd>

  <dt>Table Type</dt>
  <dd>Partition</dd>

  <dt>Source Type</dt>
  <dd>M</dd>

</dl>


```powerquery title="Table Source: Date"
   let
    Source = Excel.Workbook(File.Contents("C:\Users\CStallings\Documents\py_files\PyTabular\test\adventureworks\AdventureWorks Sales.xlsx"), null, true),
    Date_Table = Source{[Item="Date",Kind="Table"]}[Data],
in
    #"Changed Type"
```
---
### Product
**Description**: 
> No Description available

<dl>
  <dt>Measures (#)</dt>
  <dd>0</dd>

  <dt>Columns (#)</dt>
  <dd>11</dd>

  <dt>Partiton (#)</dt>
  <dd>1</dd>

  <dt>Data Category</dt>
  <dd>Regular Table</dd>

  <dt>Is Hidden</dt>
  <dd>False</dd>

  <dt>Table Type</dt>
  <dd>Partition</dd>

  <dt>Source Type</dt>
  <dd>M</dd>

</dl>


```powerquery title="Table Source: Product"
   let
    Source = Excel.Workbook(File.Contents("C:\Users\CStallings\Documents\py_files\PyTabular\test\adventureworks\AdventureWorks Sales.xlsx"), null, true),
    Product_Table = Source{[Item="Product",Kind="Table"]}[Data],
in
    #"Changed Type"
```
---
### Reseller
**Description**: 
> No Description available

<dl>
  <dt>Measures (#)</dt>
  <dd>0</dd>

  <dt>Columns (#)</dt>
  <dd>9</dd>

  <dt>Partiton (#)</dt>
  <dd>1</dd>

  <dt>Data Category</dt>
  <dd>Regular Table</dd>

  <dt>Is Hidden</dt>
  <dd>False</dd>

  <dt>Table Type</dt>
  <dd>Partition</dd>

  <dt>Source Type</dt>
  <dd>M</dd>

</dl>


```powerquery title="Table Source: Reseller"
   let
    Source = Excel.Workbook(File.Contents("C:\Users\CStallings\Documents\py_files\PyTabular\test\adventureworks\AdventureWorks Sales.xlsx"), null, true),
    Reseller_Table = Source{[Item="Reseller",Kind="Table"]}[Data],
in
    #"Changed Type"
```
---
### Sales
**Description**: 
> No Description available

<dl>
  <dt>Measures (#)</dt>
  <dd>2</dd>

  <dt>Columns (#)</dt>
  <dd>16</dd>

  <dt>Partiton (#)</dt>
  <dd>1</dd>

  <dt>Data Category</dt>
  <dd>Regular Table</dd>

  <dt>Is Hidden</dt>
  <dd>False</dd>

  <dt>Table Type</dt>
  <dd>Partition</dd>

  <dt>Source Type</dt>
  <dd>M</dd>

</dl>


```powerquery title="Table Source: Sales"
   let
    Source = Excel.Workbook(File.Contents("C:\Users\CStallings\Documents\py_files\PyTabular\test\adventureworks\AdventureWorks Sales.xlsx"), null, true),
    Sales_Table = Source{[Item="Sales",Kind="Table"]}[Data],
in
    #"Changed Type"
```
---
### Sales Order
**Description**: 
> No Description available

<dl>
  <dt>Measures (#)</dt>
  <dd>0</dd>

  <dt>Columns (#)</dt>
  <dd>5</dd>

  <dt>Partiton (#)</dt>
  <dd>1</dd>

  <dt>Data Category</dt>
  <dd>Regular Table</dd>

  <dt>Is Hidden</dt>
  <dd>False</dd>

  <dt>Table Type</dt>
  <dd>Partition</dd>

  <dt>Source Type</dt>
  <dd>M</dd>

</dl>


```powerquery title="Table Source: Sales Order"
   let
    Source = Excel.Workbook(File.Contents("C:\Users\CStallings\Documents\py_files\PyTabular\test\adventureworks\AdventureWorks Sales.xlsx"), null, true),
    SalesOrder_Table = Source{[Item="SalesOrder",Kind="Table"]}[Data],
in
    #"Changed Type"
```
---
### Sales Territory
**Description**: 
> No Description available

<dl>
  <dt>Measures (#)</dt>
  <dd>0</dd>

  <dt>Columns (#)</dt>
  <dd>5</dd>

  <dt>Partiton (#)</dt>
  <dd>1</dd>

  <dt>Data Category</dt>
  <dd>Regular Table</dd>

  <dt>Is Hidden</dt>
  <dd>False</dd>

  <dt>Table Type</dt>
  <dd>Partition</dd>

  <dt>Source Type</dt>
  <dd>M</dd>

</dl>


```powerquery title="Table Source: Sales Territory"
   let
    Source = Excel.Workbook(File.Contents("C:\Users\CStallings\Documents\py_files\PyTabular\test\adventureworks\AdventureWorks Sales.xlsx"), null, true),
    SalesTerritory_Table = Source{[Item="SalesTerritory",Kind="Table"]}[Data],
in
    #"Changed Type"
```
---
### Table
**Description**: 
> No Description available

<dl>
  <dt>Measures (#)</dt>
  <dd>0</dd>

  <dt>Columns (#)</dt>
  <dd>3</dd>

  <dt>Partiton (#)</dt>
  <dd>1</dd>

  <dt>Data Category</dt>
  <dd>Regular Table</dd>

  <dt>Is Hidden</dt>
  <dd>False</dd>

  <dt>Table Type</dt>
  <dd>Partition</dd>

  <dt>Source Type</dt>
  <dd>M</dd>

</dl>


```powerquery title="Table Source: Table"
   let
    Source = Table.FromRows(Json.Document(Binary.Decompress(Binary.FromText("i45WckxOTi0uzi/KTC1W0lEyUYrViVZyyswG8wzBPOec/JKMzLx0oIAxRCA/tyA/LzWvBKTGSCk2FgA=", BinaryEncoding.Base64), Compression.Deflate)), let _t = ((type nullable text) meta [Serialized.Text = true]) in type table [Category = _t, Sorting = _t]),
in
    #"Changed Type"
```
---