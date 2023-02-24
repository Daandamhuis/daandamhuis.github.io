"use strict";(self.webpackChunkpersonal_website=self.webpackChunkpersonal_website||[]).push([[8235],{3905:(e,t,l)=>{l.d(t,{Zo:()=>i,kt:()=>b});var n=l(7294);function r(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function a(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function u(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?a(Object(l),!0).forEach((function(t){r(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function o(e,t){if(null==e)return{};var l,n,r=function(e,t){if(null==e)return{};var l,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var d=n.createContext({}),s=function(e){var t=n.useContext(d),l=t;return e&&(l="function"==typeof e?e(t):u(u({},t),e)),l},i=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},k="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var l=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),k=s(l),p=r,b=k["".concat(d,".").concat(p)]||k[p]||c[p]||a;return l?n.createElement(b,u(u({ref:t},i),{},{components:l})):n.createElement(b,u({ref:t},i))}));function b(e,t){var l=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=l.length,u=new Array(a);u[0]=p;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[k]="string"==typeof e?e:r,u[1]=o;for(var s=2;s<a;s++)u[s]=l[s];return n.createElement.apply(null,u)}return n.createElement.apply(null,l)}p.displayName="MDXCreateElement"},5065:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>k,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var n=l(7462),r=(l(7294),l(3905));const a={sidebar_position:2,sidebar_label:"Tables",title:"Tables",description:"This page contains all columns with tables for Model, including the description, and technical details."},u=void 0,o={unversionedId:"adventure-works/tables/index",id:"adventure-works/tables/index",title:"Tables",description:"This page contains all columns with tables for Model, including the description, and technical details.",source:"@site/docs/adventure-works/tables/index.md",sourceDirName:"adventure-works/tables",slug:"/adventure-works/tables/",permalink:"/docs/adventure-works/tables/",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Tables",title:"Tables",description:"This page contains all columns with tables for Model, including the description, and technical details."},sidebar:"tutorialSidebar",previous:{title:"Measures",permalink:"/docs/adventure-works/measures"},next:{title:"Customer",permalink:"/docs/adventure-works/tables/customer"}},d={},s=[{value:"Customer",id:"customer",level:3},{value:"Date",id:"date",level:3},{value:"Product",id:"product",level:3},{value:"Reseller",id:"reseller",level:3},{value:"Sales",id:"sales",level:3},{value:"Sales Order",id:"sales-order",level:3},{value:"Sales Territory",id:"sales-territory",level:3},{value:"Table",id:"table",level:3}],i={toc:s};function k(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,n.Z)({},i,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"customer"},"Customer"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description"),": "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"No Description available")),(0,r.kt)("dl",null,(0,r.kt)("dt",null,"Measures (#)"),(0,r.kt)("dd",null,"0"),(0,r.kt)("dt",null,"Columns (#)"),(0,r.kt)("dd",null,"8"),(0,r.kt)("dt",null,"Partiton (#)"),(0,r.kt)("dd",null,"1"),(0,r.kt)("dt",null,"Data Category"),(0,r.kt)("dd",null,"Regular Table"),(0,r.kt)("dt",null,"Is Hidden"),(0,r.kt)("dd",null,"False"),(0,r.kt)("dt",null,"Table Type"),(0,r.kt)("dd",null,"Partition"),(0,r.kt)("dt",null,"Source Type"),(0,r.kt)("dd",null,"M")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powerquery",metastring:'title="Table Source: Customer"',title:'"Table',"Source:":!0,'Customer"':!0},'   let\n    Source = Excel.Workbook(File.Contents("C:\\Users\\CStallings\\Documents\\py_files\\PyTabular\\test\\adventureworks\\AdventureWorks Sales.xlsx"), null, true),\n    Customer_Table = Source{[Item="Customer",Kind="Table"]}[Data],\nin\n    #"Changed Type"\n')),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"date"},"Date"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description"),": "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"No Description available")),(0,r.kt)("dl",null,(0,r.kt)("dt",null,"Measures (#)"),(0,r.kt)("dd",null,"0"),(0,r.kt)("dt",null,"Columns (#)"),(0,r.kt)("dd",null,"8"),(0,r.kt)("dt",null,"Partiton (#)"),(0,r.kt)("dd",null,"1"),(0,r.kt)("dt",null,"Data Category"),(0,r.kt)("dd",null,"Time"),(0,r.kt)("dt",null,"Is Hidden"),(0,r.kt)("dd",null,"False"),(0,r.kt)("dt",null,"Table Type"),(0,r.kt)("dd",null,"Partition"),(0,r.kt)("dt",null,"Source Type"),(0,r.kt)("dd",null,"M")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powerquery",metastring:'title="Table Source: Date"',title:'"Table',"Source:":!0,'Date"':!0},'   let\n    Source = Excel.Workbook(File.Contents("C:\\Users\\CStallings\\Documents\\py_files\\PyTabular\\test\\adventureworks\\AdventureWorks Sales.xlsx"), null, true),\n    Date_Table = Source{[Item="Date",Kind="Table"]}[Data],\nin\n    #"Changed Type"\n')),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"product"},"Product"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description"),": "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"No Description available")),(0,r.kt)("dl",null,(0,r.kt)("dt",null,"Measures (#)"),(0,r.kt)("dd",null,"0"),(0,r.kt)("dt",null,"Columns (#)"),(0,r.kt)("dd",null,"11"),(0,r.kt)("dt",null,"Partiton (#)"),(0,r.kt)("dd",null,"1"),(0,r.kt)("dt",null,"Data Category"),(0,r.kt)("dd",null,"Regular Table"),(0,r.kt)("dt",null,"Is Hidden"),(0,r.kt)("dd",null,"False"),(0,r.kt)("dt",null,"Table Type"),(0,r.kt)("dd",null,"Partition"),(0,r.kt)("dt",null,"Source Type"),(0,r.kt)("dd",null,"M")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powerquery",metastring:'title="Table Source: Product"',title:'"Table',"Source:":!0,'Product"':!0},'   let\n    Source = Excel.Workbook(File.Contents("C:\\Users\\CStallings\\Documents\\py_files\\PyTabular\\test\\adventureworks\\AdventureWorks Sales.xlsx"), null, true),\n    Product_Table = Source{[Item="Product",Kind="Table"]}[Data],\nin\n    #"Changed Type"\n')),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"reseller"},"Reseller"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description"),": "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"No Description available")),(0,r.kt)("dl",null,(0,r.kt)("dt",null,"Measures (#)"),(0,r.kt)("dd",null,"0"),(0,r.kt)("dt",null,"Columns (#)"),(0,r.kt)("dd",null,"9"),(0,r.kt)("dt",null,"Partiton (#)"),(0,r.kt)("dd",null,"1"),(0,r.kt)("dt",null,"Data Category"),(0,r.kt)("dd",null,"Regular Table"),(0,r.kt)("dt",null,"Is Hidden"),(0,r.kt)("dd",null,"False"),(0,r.kt)("dt",null,"Table Type"),(0,r.kt)("dd",null,"Partition"),(0,r.kt)("dt",null,"Source Type"),(0,r.kt)("dd",null,"M")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powerquery",metastring:'title="Table Source: Reseller"',title:'"Table',"Source:":!0,'Reseller"':!0},'   let\n    Source = Excel.Workbook(File.Contents("C:\\Users\\CStallings\\Documents\\py_files\\PyTabular\\test\\adventureworks\\AdventureWorks Sales.xlsx"), null, true),\n    Reseller_Table = Source{[Item="Reseller",Kind="Table"]}[Data],\nin\n    #"Changed Type"\n')),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"sales"},"Sales"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description"),": "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"No Description available")),(0,r.kt)("dl",null,(0,r.kt)("dt",null,"Measures (#)"),(0,r.kt)("dd",null,"2"),(0,r.kt)("dt",null,"Columns (#)"),(0,r.kt)("dd",null,"16"),(0,r.kt)("dt",null,"Partiton (#)"),(0,r.kt)("dd",null,"1"),(0,r.kt)("dt",null,"Data Category"),(0,r.kt)("dd",null,"Regular Table"),(0,r.kt)("dt",null,"Is Hidden"),(0,r.kt)("dd",null,"False"),(0,r.kt)("dt",null,"Table Type"),(0,r.kt)("dd",null,"Partition"),(0,r.kt)("dt",null,"Source Type"),(0,r.kt)("dd",null,"M")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powerquery",metastring:'title="Table Source: Sales"',title:'"Table',"Source:":!0,'Sales"':!0},'   let\n    Source = Excel.Workbook(File.Contents("C:\\Users\\CStallings\\Documents\\py_files\\PyTabular\\test\\adventureworks\\AdventureWorks Sales.xlsx"), null, true),\n    Sales_Table = Source{[Item="Sales",Kind="Table"]}[Data],\nin\n    #"Changed Type"\n')),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"sales-order"},"Sales Order"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description"),": "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"No Description available")),(0,r.kt)("dl",null,(0,r.kt)("dt",null,"Measures (#)"),(0,r.kt)("dd",null,"0"),(0,r.kt)("dt",null,"Columns (#)"),(0,r.kt)("dd",null,"5"),(0,r.kt)("dt",null,"Partiton (#)"),(0,r.kt)("dd",null,"1"),(0,r.kt)("dt",null,"Data Category"),(0,r.kt)("dd",null,"Regular Table"),(0,r.kt)("dt",null,"Is Hidden"),(0,r.kt)("dd",null,"False"),(0,r.kt)("dt",null,"Table Type"),(0,r.kt)("dd",null,"Partition"),(0,r.kt)("dt",null,"Source Type"),(0,r.kt)("dd",null,"M")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powerquery",metastring:'title="Table Source: Sales Order"',title:'"Table',"Source:":!0,Sales:!0,'Order"':!0},'   let\n    Source = Excel.Workbook(File.Contents("C:\\Users\\CStallings\\Documents\\py_files\\PyTabular\\test\\adventureworks\\AdventureWorks Sales.xlsx"), null, true),\n    SalesOrder_Table = Source{[Item="SalesOrder",Kind="Table"]}[Data],\nin\n    #"Changed Type"\n')),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"sales-territory"},"Sales Territory"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description"),": "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"No Description available")),(0,r.kt)("dl",null,(0,r.kt)("dt",null,"Measures (#)"),(0,r.kt)("dd",null,"0"),(0,r.kt)("dt",null,"Columns (#)"),(0,r.kt)("dd",null,"5"),(0,r.kt)("dt",null,"Partiton (#)"),(0,r.kt)("dd",null,"1"),(0,r.kt)("dt",null,"Data Category"),(0,r.kt)("dd",null,"Regular Table"),(0,r.kt)("dt",null,"Is Hidden"),(0,r.kt)("dd",null,"False"),(0,r.kt)("dt",null,"Table Type"),(0,r.kt)("dd",null,"Partition"),(0,r.kt)("dt",null,"Source Type"),(0,r.kt)("dd",null,"M")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powerquery",metastring:'title="Table Source: Sales Territory"',title:'"Table',"Source:":!0,Sales:!0,'Territory"':!0},'   let\n    Source = Excel.Workbook(File.Contents("C:\\Users\\CStallings\\Documents\\py_files\\PyTabular\\test\\adventureworks\\AdventureWorks Sales.xlsx"), null, true),\n    SalesTerritory_Table = Source{[Item="SalesTerritory",Kind="Table"]}[Data],\nin\n    #"Changed Type"\n')),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"table"},"Table"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description"),": "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"No Description available")),(0,r.kt)("dl",null,(0,r.kt)("dt",null,"Measures (#)"),(0,r.kt)("dd",null,"0"),(0,r.kt)("dt",null,"Columns (#)"),(0,r.kt)("dd",null,"3"),(0,r.kt)("dt",null,"Partiton (#)"),(0,r.kt)("dd",null,"1"),(0,r.kt)("dt",null,"Data Category"),(0,r.kt)("dd",null,"Regular Table"),(0,r.kt)("dt",null,"Is Hidden"),(0,r.kt)("dd",null,"False"),(0,r.kt)("dt",null,"Table Type"),(0,r.kt)("dd",null,"Partition"),(0,r.kt)("dt",null,"Source Type"),(0,r.kt)("dd",null,"M")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powerquery",metastring:'title="Table Source: Table"',title:'"Table',"Source:":!0,'Table"':!0},'   let\n    Source = Table.FromRows(Json.Document(Binary.Decompress(Binary.FromText("i45WckxOTi0uzi/KTC1W0lEyUYrViVZyyswG8wzBPOec/JKMzLx0oIAxRCA/tyA/LzWvBKTGSCk2FgA=", BinaryEncoding.Base64), Compression.Deflate)), let _t = ((type nullable text) meta [Serialized.Text = true]) in type table [Category = _t, Sorting = _t]),\nin\n    #"Changed Type"\n')),(0,r.kt)("hr",null))}k.isMDXComponent=!0}}]);