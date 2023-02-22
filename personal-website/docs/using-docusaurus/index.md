---
id: setup-docusaurus
slug: /setup-docusaurus
title: PyTabular | Docusaurus
description: Install Docusaurus Locally
sidebar_position: 2
tags:
  - Docusaurus
  - Getting started
  - PyTabular
  - Power BI
  - Microsoft
---

## Installing Docusaurs 
To install Docusaurus locally, you'll need to follow the installation guide provided by the Docusaurus team to ensure that everything is up-to-date. Here's how to get started:

1. Navigate to the [Docusaurus installation guide](https://docusaurus.io/docs/installation) in your web browser.
2. Follow the instructions provided in the guide to install Docusaurus on your local machine. The guide includes detailed steps for setting up Docusaurus, including installing Node.js and creating a new Docusaurus project.
3. Once you have completed the installation process, you can start using Docusaurus to create your own documentation website.

And that's it! With Docusaurus installed on your local machine, you're ready to start creating your own documentation website. Good luck!

### (Optional) Syntax Highlighting
To apply syntax highlighting for Power BI / SQL-specific languages using Prism, you'll need to edit the docusaurus.config.js file located in the root directory of your Docusaurus project.

1. Open the docusaurus.config.js file in your preferred code editor.
2. Locate the Prism section of the file. It should look something like this:
  ```js
  ...
  prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
      // Add these for enabling DAX, M (PowerQuery) and SQL.
      additionalLanguages: ['dax', 'powerquery', 'sql'], 
  },
  ...
  ```

3. To enable syntax highlighting for DAX, PowerQuery, and SQL, add these languages to the additionalLanguages array in the Prism section of the docusaurus.config.js file.

4. Save the changes to the file.
5. Restart the server.

And that's it! You should now have syntax highlighting enabled for these specific languages in your Power BI and SQL code blocks.

#### Python Syntax

```python
import pytabular
import logging

logger = logging.getLogger("PyTabular")
model = pytabular.Tabular(f"{SERVER};Catalog={INITIAL_CATALOG}")

docs = pytabular.ModelDocumenter(model)
docs.save_documentation()
```

#### Power Query

```powerquery
let
    Source = Sql.Database("sql-stichd-dwh-dev.database.windows.net", "sqldb-DWH"),
    dim_vw_Date = Source{[Schema="dim",Item="vw_Dates"]}[Data]
in
    dim_vw_Date
```

#### DAX

```dax
SUMX (
   VALUES ( 'vw_TracksideF1_Item'[stichd_UnitListPrice] ),
   'vw_TracksideF1_Item'[stichd_UnitListPrice] * [msr_trns_quantity]
)
```

#### SQL Server

```sql
select *
from [dim].[vw_Dates]
where [Year]  >= 2020
```

### (Optional) Installing Local Search.
