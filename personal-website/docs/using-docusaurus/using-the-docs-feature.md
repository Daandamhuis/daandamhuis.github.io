---
id: using-the-docs-feature
slug: /using-the-gen-docs
title: Generate Documentation
description: Create a doc page with rich content with PyTabular and Power BI datasets.
sidebar_position: 4
tags:
  - PyTabular
  - Getting started
  - Power BI
  - Microsoft
---

## Generate Documentation

```python
import pytabular as p
# Connect to a Tabular Model Model
model = p.Tabular(CONN_STR)

# Initiate the Docs
docs = p.ModelDocumenter(model=model, save_location=f"docs\\data-models")

# Set the translation for documentation to an available culture.
docs.set_translations(enable_translations=True, culture='en-US')

# # Generate the pages.
docs.generate_documentation_pages()

# # Save docs to the default location
docs.save_documentation()
```

### Power BI Premium (Per User)
The code snippet you provided is for connecting to a Power BI dataset using an OAuth2 service principal for authentication. This method only works for Premium (per User) workspaces and XMLA endpoints need to be enabled for it to work. It is recommended to create a Service Principal that you can use to authenticate. This service principal needs to be given access *admin rights* in the Workspace.

```python
USER_ID = 'user:<App Id>'
PASSWORD = '<Password>'
SERVER_NAME = 'powerbi://api.powerbi.com/v1.0/myorg'
WORKSPACE_NAME = '<Workspace Name>'
DATASET = '<Dataset Name>'

CONN_STR = f'Provider=MSOLAP;Data Source={SERVER_NAME}/{WORKSPACE_NAME}'
CONN_STR = f'{CONN_STR};User ID={USER_ID};Password={PASSWORD};Catalog={DATASET}'
```

To use this code snippet, you need to replace the placeholders with the actual values for your Power BI workspace and dataset. Once you have done that, you can use this connection string to connect to your Power BI dataset with PyTabular.

:::info
Please keep in mind that the method described here is applicable only for Premium (per User) workspaces and XMLA endpoints must be enabled for it to function properly. In case you are not using a Premium workspace or have not activated XMLA endpoints, an alternative method will be required to connect to your dataset. Additionally, note that the local method is a feasible option but cannot be used in a Deployment or Build pipeline.
:::

### SQL Server Analysis Server
Another way to generate documentation is to connect to a SQL Server Analysis Server (SSAS) model. To establish a connection, you need to provide a Server Name and a Dataset name. The basic connection string format is as follows:
```python
SERVER_NAME = '<Server name>'
DATASET = '<Dataset Name>'

CONN_STR = f'Provider=MSOLAP;Data Source={SERVER_NAME};Catalog={DATASET}'
```

If alternative credentials are required, you can specify them as discussed in the previous section.

### Power BI Desktop
Setup Local Connection Str

```python

```