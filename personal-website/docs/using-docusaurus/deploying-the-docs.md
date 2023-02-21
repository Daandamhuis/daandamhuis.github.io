---
id: ci-cd-docs
slug: /using-ci-cd-docs
title: Deploy Documentation
description: Create a doc page with rich content with PyTabular and Power BI datasets.
sidebar_position: 5
tags:
  - PyTabular
  - Getting started
  - Power BI
  - Microsoft
  - Azure DevOps
  - Static Web Apps
---

## Create and Deploy Static Web App
Creating and deploying a static web app on Azure is a great way to host your Docusaurus site. Dave Brook has written an excellent article on how to deploy a Docusaurus site via Azure DevOps Build pipeline and Azure Static Web Apps.

To get started, there are a few prerequisites that you'll need:

1. You'll need the necessary rights to create a static web app in Azure.
1. You'll also need a DevOps repository where you can store your Docusaurus site's source code.

Once you have these prerequisites in place, you can follow [Dave's guide](https://www.daveabrock.com/2021/04/01/static-web-apps-azure-pipelines/) to set up a build pipeline and deploy your Docusaurus site to Azure Static Web Apps.

Keep in mind that while the Azure DevOps experience isn't as streamlined and elegant as the GitHub experience, it still offers great value for Azure DevOps customers. With Azure Static Web Apps support, you can build and deploy your app to Azure Static Web Apps with ease.

## Add Generation of Docs on the fly
Once you've set up a basic pipeline in Azure DevOps for your Docusaurus site, you can also generate documentation based on your source code without having to execute a local script. This can be done using a build pipeline, a few command line tasks in the pipeline, and a git commit command.

1. Give correct access rights to [deployment user](https://learn.microsoft.com/en-us/azure/devops/pipelines/scripts/git-commands?view=azure-devops&tabs=yaml)

Here's how you can generate documentation using Azure DevOps:

#### Generate Docs
1. Set up a build job step with the latest version of Windows (`windows-latest`)
1. Setup Python 3.10.
1. Execute a Python script that will generate the local files for the docs section of your site.
1. Upload the resulting files as Pipeline Artifacts.

#### Deploy Docs
1. Create a new job using the latest version of Ubuntu (`ubuntu-latest`).
2. Download the Pipeline Artifacts from the previous job.
3. Build and deploy the static web app model.
4. Push the generated files back to the main branch using a set of Git commands.

By following these steps, you can generate documentation for your Docusaurus site directly in Azure DevOps, without having to execute a local script. This will help automate the documentation generation process and ensure that your site is always up-to-date with the latest changes to your source code.

Good luck with your project!

### Example Pipeline 
This is an example pipeline which, excecutes the steps above. 

```yaml
name: $(Date:yyyyMMdd)-$(Rev:r)

pr:
  branches:
    include:
      - main
  paths:
    include:
        - site/*
        
jobs:
- job: generate_docs
  displayName: Generate Documentation
  condition: or(eq(variables['Build.Reason'], 'Manual'),eq(variables['Build.Reason'], 'PullRequest'))
  pool:
    vmImage: windows-latest
  variables:
  - group: deployment-group-prd
  steps:
  - checkout: self
    submodules: true
  - task: UsePythonVersion@0
    displayName: 'Use Python 3.10'
    inputs:
      versionSpec: 3.10
  - task: CmdLine@2
    displayName: 'Install Python Tabular.'
    inputs:
      script: 'python3 -m pip install python-tabular'
  - task: CmdLine@2
    displayName: 'Generate Documentation for website > $(MODEL_NAME)'
    inputs:
      script: 'python3 document-models.py --model "$(MODEL_NAME)" --server "$(SERVER_NAME)" --workspace "$(WORKSPACE_NAME)" --user "$(USER_ID)" --password "$(USER_PASSWORD)" --translations "$(USE_TRANSLATIONS)"'

  - publish: $(System.DefaultWorkingDirectory)/site/docs
    displayName: 'Publish freshly generated docs.'
    artifact: documentation
  
- job: build_and_deploy_job
  displayName: Build and Deploy Job
  dependsOn: generate_docs
  condition: in(dependencies.generate_docs.result, 'Succeeded')
  pool:
    vmImage: ubuntu-latest
  variables:
  - group: deployment-group-prd
  steps:
  - checkout: self
    submodules: true
    persistCredentials: true
  - task: DownloadPipelineArtifact@2
    inputs:
      artifact: 'documentation'
      path: $(System.DefaultWorkingDirectory)/site/docs
  - task: AzureStaticWebApp@0
    displayName: "Generate Docusaurus site"
    inputs:
      azure_static_web_apps_api_token: $(AZURE_STATIC_WEB_APPS_API_TOKEN)
      app_location: "/site/" # App source code path
      output_location: "build" # Built app content directory - optional
  - task: CmdLine@2
    displayName: 'Commit to Main > Results > Build for =  $(MODEL_NAME)'
    inputs:
      script: |
        git config --global init.defaultbranch main
        git config --global user.email "example@email.com"
        git config --global user.name "(Build Service)"
                
        git add .
        git commit -m "Results > Build for =  $(MODEL_NAME)"
        git push -u origin main
```

### Example: Python Script.
This script can be used in the Build pipeline to generate the documentation for *one* model.
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