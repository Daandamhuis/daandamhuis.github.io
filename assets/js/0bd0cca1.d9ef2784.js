"use strict";(self.webpackChunkpersonal_website=self.webpackChunkpersonal_website||[]).push([[423],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=a,g=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},291:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={id:"using-the-docs-feature",slug:"/using-the-gen-docs",title:"Generate Documentation",description:"Create a doc page with rich content with PyTabular and Power BI datasets.",sidebar_position:4,tags:["PyTabular","Getting started","Power BI","Microsoft"]},i=void 0,s={unversionedId:"using-docusaurus/using-the-docs-feature",id:"using-docusaurus/using-the-docs-feature",title:"Generate Documentation",description:"Create a doc page with rich content with PyTabular and Power BI datasets.",source:"@site/docs/using-docusaurus/using-the-docs-feature.md",sourceDirName:"using-docusaurus",slug:"/using-the-gen-docs",permalink:"/docs/using-the-gen-docs",draft:!1,tags:[{label:"PyTabular",permalink:"/docs/tags/py-tabular"},{label:"Getting started",permalink:"/docs/tags/getting-started"},{label:"Power BI",permalink:"/docs/tags/power-bi"},{label:"Microsoft",permalink:"/docs/tags/microsoft"}],version:"current",sidebarPosition:4,frontMatter:{id:"using-the-docs-feature",slug:"/using-the-gen-docs",title:"Generate Documentation",description:"Create a doc page with rich content with PyTabular and Power BI datasets.",sidebar_position:4,tags:["PyTabular","Getting started","Power BI","Microsoft"]},sidebar:"tutorialSidebar",previous:{title:"PyTabular | Docusaurus",permalink:"/docs/setup-docusaurus"},next:{title:"Deploy Documentation",permalink:"/docs/using-ci-cd-docs"}},c={},l=[{value:"Generate Documentation",id:"generate-documentation",level:2},{value:"Power BI Premium (Per User)",id:"power-bi-premium-per-user",level:3},{value:"SQL Server Analysis Server",id:"sql-server-analysis-server",level:3},{value:"Power BI Desktop",id:"power-bi-desktop",level:3}],u={toc:l};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"generate-documentation"},"Generate Documentation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import pytabular as p\n# Connect to a Tabular Model Model\nmodel = p.Tabular(CONN_STR)\n\n# Initiate the Docs\ndocs = p.ModelDocumenter(model=model, save_location=f\"docs\\\\data-models\")\n\n# Set the translation for documentation to an available culture.\ndocs.set_translations(enable_translations=True, culture='en-US')\n\n# # Generate the pages.\ndocs.generate_documentation_pages()\n\n# # Save docs to the default location\ndocs.save_documentation()\n")),(0,a.kt)("h3",{id:"power-bi-premium-per-user"},"Power BI Premium (Per User)"),(0,a.kt)("p",null,"This code snippet is for connecting to a Power BI dataset using an OAuth2 service principal for authentication. This method only works for Premium (per User) workspaces and XMLA endpoints need to be enabled for it to work. It is recommended to create a Service Principal that you can use to authenticate. This service principal needs to be given access ",(0,a.kt)("em",{parentName:"p"},"admin rights")," in the Workspace."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"USER_ID = 'user:<App Id>'\nPASSWORD = '<Password>'\nSERVER_NAME = 'powerbi://api.powerbi.com/v1.0/myorg'\nWORKSPACE_NAME = '<Workspace Name>'\nDATASET = '<Dataset Name>'\n\nCONN_STR = f'Provider=MSOLAP;Data Source={SERVER_NAME}/{WORKSPACE_NAME}'\nCONN_STR = f'{CONN_STR};User ID={USER_ID};Password={PASSWORD};Catalog={DATASET}'\n")),(0,a.kt)("p",null,"To use this code snippet, you need to replace the placeholders with the actual values for your Power BI workspace and dataset. Once you have done that, you can use this connection string to connect to your Power BI dataset with PyTabular."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Please keep in mind that the method described here is applicable only for Premium (per User) workspaces and XMLA endpoints must be enabled for it to function properly. In case you are not using a Premium workspace or have not activated XMLA endpoints, an alternative method will be required to connect to your dataset. Additionally, note that the local method is a feasible option but cannot be used in a Deployment or Build pipeline.")),(0,a.kt)("h3",{id:"sql-server-analysis-server"},"SQL Server Analysis Server"),(0,a.kt)("p",null,"Another way to generate documentation is to connect to a SQL Server Analysis Server (SSAS) model. To establish a connection, you need to provide a Server Name and a Dataset name. The basic connection string format is as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"SERVER_NAME = '<Server name>'\nDATASET = '<Dataset Name>'\n\nCONN_STR = f'Provider=MSOLAP;Data Source={SERVER_NAME};Catalog={DATASET}'\n")),(0,a.kt)("p",null,"If alternative credentials are required, you can specify them as discussed in the previous section."),(0,a.kt)("h3",{id:"power-bi-desktop"},"Power BI Desktop"),(0,a.kt)("p",null,"Setup Local Connection Str"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"")))}p.isMDXComponent=!0}}]);