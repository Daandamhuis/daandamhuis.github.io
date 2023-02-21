---
sidebar_position: 1
title: Measures
description: This page contains all measures for the Model model, including the description, format string, and other technical details.
---

# Measures for Model
## Other
### Sales
**Description**:
> No Description available

<dl>
  <dt>Measure Name</dt>
  <dd>Sales</dd>

  <dt>Display Folder</dt>
  <dd></dd>

  <dt>Format String</dt>
  <dd></dd>

  <dt>Is Hidden</dt>
  <dd>No</dd>

</dl>

```dax title="Technical: Sales"
  SUM(Sales[Sales Amount])
```
---
## Measures
### Sales Amount by Due Date
**Description**:
> No Description available

<dl>
  <dt>Measure Name</dt>
  <dd>Sales Amount by Due Date</dd>

  <dt>Display Folder</dt>
  <dd>Measures</dd>

  <dt>Format String</dt>
  <dd></dd>

  <dt>Is Hidden</dt>
  <dd>No</dd>

</dl>

```dax title="Technical: Sales Amount by Due Date"
  CALCULATE(SUM(Sales[Sales Amount]), USERELATIONSHIP(Sales[DueDateKey],'Date'[DateKey])) 
```
---