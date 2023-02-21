---
id: setup-docusaurus
slug: /setup-docusaurus
title: Setup Docusaurus
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

### (Optional) Installing Local Search.
