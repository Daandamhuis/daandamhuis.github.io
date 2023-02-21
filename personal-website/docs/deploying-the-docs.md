---
id: ci-cd-docs
slug: /using-ci-cd-docs
title: Deploy Documentation via DevOps
description: Create a doc page with rich content with PyTabular and Power BI datasets.
sidebar_position: 4
tags:
  - PyTabular
  - Getting started
  - Power BI
  - Microsoft
  - Azure DevOps
  - Static Web Apps
---

## Create Static Web App 

## Deploy Static Web App 

## Add Generation of Docs on the fly


### Python Script > Deploy Models.

```python
import pytabular
import getopt
import sys
import logging

logger = logging.getLogger("PyTabular")

argument_list = sys.argv[1:]

logger.info(sys.argv)


# Options
options = "s:m:u:p:w:c:d:t:"

# Long options
long_options = [
    "server=",
    "model=",
    "user=",
    "password=",
    "workspace=",
    "catalog=",
    "docs=",
    "translations=",
]

# Parameters to define for connections
SERVER_NAME, WORKSPACE_NAME, USER_ID, PASSWORD, MODEL_NAME, CONN_STR = (
    None,
    None,
    None,
    None,
    None,
    str(),
)

# Parameters to define for Docs.
DOC_LOCATION = "docs"
SELECTED_CULTURE = "en-US"
USE_TRANSLATIONS = False

try:
    # Parsing argument
    arguments, values = getopt.getopt(argument_list, options, long_options)

    # checking each argument
    for current_argument, current_value in arguments:
        if current_argument in ("-s", "--server"):
            SERVER_NAME = current_value
        if current_argument in ("-m", "--model", "-c", "--catalog"):
            MODEL_NAME = current_value
        if current_argument in ("-w", "--workspace"):
            WORKSPACE_NAME = current_value
        if current_argument in ("-u", "--user"):
            USER_ID = current_value
        if current_argument in ("-p", "--password"):
            PASSWORD = current_value
        if current_argument in ("-d", "--docs"):
            DOC_LOCATION = current_value
        if current_argument in ("-t", "--translations"):
            USE_TRANSLATIONS = current_value == "Yes"

    if SERVER_NAME is not None and MODEL_NAME is not None:
        CONN_STR = f"Provider=MSOLAP;Data Source={SERVER_NAME}"

        if WORKSPACE_NAME is not None:
            CONN_STR = f"{CONN_STR}/{WORKSPACE_NAME}"
        if USER_ID is not None:
            CONN_STR = f"{CONN_STR};User ID={USER_ID}"
        if PASSWORD is not None:
            CONN_STR = f"{CONN_STR};Password={PASSWORD}"

        CONN_STR = f"{CONN_STR};Catalog={MODEL_NAME}"

    else:
        logger.warning("Arguments -m (--model) and -s (--server_name) are needed")
        logger.warning(f"Server Name: {SERVER_NAME} > Model Name: {MODEL_NAME}")
        CONN_STR = None

except getopt.error as err:
    # output error, and return with an error code
    logger.warning(err)

if CONN_STR is not None:
    # Connect to a Tabular Model Model
    model = pytabular.Tabular(CONN_STR)

    # Initiate the Docs
    docs = pytabular.ModelDocumenter(
        model=model, save_location=f"{DOC_LOCATION}\\data-models"
    )

    # Set the translation for documentation to an available culture.
    # By setting the Tranlsations to `True` it will check if it exists and if it does,
    # it will start using the translations for the docs
    if USE_TRANSLATIONS:
        docs.set_translations(enable_translations=True, culture=SELECTED_CULTURE)

    # # Generate the pages.
    docs.generate_documentation_pages()

    # # Save docs to the default location
    docs.save_documentation()
else:
    logger.warning(f"Connection String isn't correctly setup >> {CONN_STR}")
```