"use strict";(self.webpackChunkpersonal_website=self.webpackChunkpersonal_website||[]).push([[7162],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>y});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),d=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(a),m=n,y=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return a?r.createElement(y,i(i({ref:t},c),{},{components:a})):r.createElement(y,i({ref:t},c))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var d=2;d<o;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9390:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var r=a(7462),n=(a(7294),a(3905));const o={id:"getting-started",slug:"/",title:"Getting Starting",description:"Create a doc page with rich content with PyTabular and Power BI datesets.",sidebar_position:1,tags:["PyTabular","Getting started","Power BI","Microsoft"]},i="Generating the docs",s={unversionedId:"getting-started",id:"getting-started",title:"Getting Starting",description:"Create a doc page with rich content with PyTabular and Power BI datesets.",source:"@site/docs/getting-started.md",sourceDirName:".",slug:"/",permalink:"/docs/",draft:!1,tags:[{label:"PyTabular",permalink:"/docs/tags/py-tabular"},{label:"Getting started",permalink:"/docs/tags/getting-started"},{label:"Power BI",permalink:"/docs/tags/power-bi"},{label:"Microsoft",permalink:"/docs/tags/microsoft"}],version:"current",sidebarPosition:1,frontMatter:{id:"getting-started",slug:"/",title:"Getting Starting",description:"Create a doc page with rich content with PyTabular and Power BI datesets.",sidebar_position:1,tags:["PyTabular","Getting started","Power BI","Microsoft"]},sidebar:"tutorialSidebar",next:{title:"Setup Docusaurus",permalink:"/docs/setup-docusaurus"}},l={},d=[{value:"PyTabular",id:"pytabular",level:2},{value:"Python Syntax",id:"python-syntax",level:3},{value:"Power Query",id:"power-query",level:3},{value:"DAX",id:"dax",level:3},{value:"SQL Server",id:"sql-server",level:3},{value:"Adventure Works",id:"adventure-works",level:2}],c={toc:d};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"generating-the-docs"},"Generating the docs"),(0,n.kt)("p",null,"We will demonstrate the capabilities of PyTabular in documenting Power BI datasets. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Curts0/PyTabular"},"PyTabular")," is a powerful Python library that allows for easy and efficient documentation of data sources, including those in Power BI. We will show you how PyTabular can improve the organization, transparency, and understanding of your Power BI datasets, making your data more accessible and actionable for your team."),(0,n.kt)("h2",{id:"pytabular"},"PyTabular"),(0,n.kt)("p",null,"PyTabular is a Python library that can be used to generate documentation for Power BI datasets. It allows users to extract metadata and data from a Power BI dataset and generate a human-readable document that describes the dataset's structure, contents, and usage. The generated documents are currently only in Markdown and they can be directly used in Docusaurus."),(0,n.kt)("p",null,"To use PyTabular, you first need to install the library by running ",(0,n.kt)("inlineCode",{parentName:"p"},"pip install pytabular")," in your command line. Once installed, you can use the library to extract metadata and data from a Power BI dataset by specifying the file path of the dataset. You can then use the extracted data to generate a document that includes information such as the dataset's table and column names, data types, relationships, and sample data."),(0,n.kt)("p",null,"PyTabular is a powerful tool for generating documentation for Power BI datasets, making it easy to understand and share the structure and contents of a dataset. It can save time and improve the efficiency of data analysis by providing a clear and concise document that describes the dataset."),(0,n.kt)("h3",{id:"python-syntax"},"Python Syntax"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'import pytabular\nimport logging\n\nlogger = logging.getLogger("PyTabular")\nmodel = pytabular.Tabular(f"{SERVER};Catalog={INITIAL_CATALOG}")\n\ndocs = pytabular.ModelDocumenter(model)\ndocs.save_documentation()\n')),(0,n.kt)("h3",{id:"power-query"},"Power Query"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-powerquery"},'let\n    Source = Sql.Database("sql-stichd-dwh-dev.database.windows.net", "sqldb-DWH"),\n    dim_vw_Date = Source{[Schema="dim",Item="vw_Dates"]}[Data]\nin\n    dim_vw_Date\n')),(0,n.kt)("h3",{id:"dax"},"DAX"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dax"},"SUMX (\n   VALUES ( 'vw_TracksideF1_Item'[stichd_UnitListPrice] ),\n   'vw_TracksideF1_Item'[stichd_UnitListPrice] * [msr_trns_quantity]\n)\n")),(0,n.kt)("h3",{id:"sql-server"},"SQL Server"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"select *\nfrom [dim].[vw_Dates]\nwhere [Year]  >= 2020\n")),(0,n.kt)("h2",{id:"adventure-works"},"Adventure Works"),(0,n.kt)("p",null,"The Adventure Works dataset is a collection of data related to a fictional company called Adventure Works. It includes information such as sales data, customer information, and product details. This dataset is commonly used for business intelligence and data analysis projects, as it provides a realistic and diverse set of data that can be used to test and develop analytical models. The dataset can be used to gain insights into the performance of the company and make informed business decisions. It is designed to be used with SQL Server and other Microsoft technologies, and is available in both relational and OLAP formats."))}u.isMDXComponent=!0}}]);