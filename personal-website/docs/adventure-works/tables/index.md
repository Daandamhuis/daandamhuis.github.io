---
sidebar_position: 2
sidebar_label: Tables
description: This page contains all columns with tables for Model, including the description, and technical details.
---

# Tables Model
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
    #"Changed Type" = Table.TransformColumnTypes(Customer_Table,{{"CustomerKey", Int64.Type}, {"Customer ID", type text}, {"Customer", type text}, {"City", type text}, {"State-Province", type text}, {"Country-Region", type text}, {"Postal Code", type text}})
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
    #"Changed Type" = Table.TransformColumnTypes(Date_Table,{{"DateKey", Int64.Type}, {"Date", type date}, {"Fiscal Year", type text}, {"Fiscal Quarter", type text}, {"Month", type date}, {"Full Date", type date}, {"MonthKey", Int64.Type}})
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
    #"Changed Type" = Table.TransformColumnTypes(Product_Table,{{"ProductKey", Int64.Type}, {"SKU", type text}, {"Product", type text}, {"Standard Cost", type number}, {"Color", type text}, {"List Price", type number}, {"Model", type text}, {"Subcategory", type text}, {"Category", type text}})
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
    #"Changed Type" = Table.TransformColumnTypes(Reseller_Table,{{"ResellerKey", Int64.Type}, {"Reseller ID", type text}, {"Business Type", type text}, {"Reseller", type text}, {"City", type text}, {"State-Province", type text}, {"Country-Region", type text}, {"Postal Code", type text}})
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
    #"Changed Type" = Table.TransformColumnTypes(Sales_Table,{{"SalesOrderLineKey", Int64.Type}, {"ResellerKey", Int64.Type}, {"CustomerKey", Int64.Type}, {"ProductKey", Int64.Type}, {"OrderDateKey", Int64.Type}, {"DueDateKey", Int64.Type}, {"ShipDateKey", Int64.Type}, {"SalesTerritoryKey", Int64.Type}, {"Order Quantity", Int64.Type}, {"Unit Price", type number}, {"Extended Amount", type number}, {"Unit Price Discount Pct", Int64.Type}, {"Product Standard Cost", type number}, {"Total Product Cost", type number}, {"Sales Amount", type number}})
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
    #"Changed Type" = Table.TransformColumnTypes(SalesOrder_Table,{{"Channel", type text}, {"SalesOrderLineKey", Int64.Type}, {"Sales Order", type text}, {"Sales Order Line", type text}})
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
    #"Changed Type" = Table.TransformColumnTypes(SalesTerritory_Table,{{"SalesTerritoryKey", Int64.Type}, {"Region", type text}, {"Country", type text}, {"Group", type text}})
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
    #"Changed Type" = Table.TransformColumnTypes(Source,{{"Category", type text}, {"Sorting", Int64.Type}})
in
    #"Changed Type"
```
---