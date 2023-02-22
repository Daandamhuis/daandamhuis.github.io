"use strict";(self.webpackChunkpersonal_website=self.webpackChunkpersonal_website||[]).push([[7620],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),u=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(a),g=n,h=p["".concat(l,".").concat(g)]||p[g]||d[g]||o;return a?r.createElement(h,s(s({ref:t},c),{},{components:a})):r.createElement(h,s({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=g;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:n,s[1]=i;for(var u=2;u<o;u++)s[u]=a[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},8922:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=a(7462),n=(a(7294),a(3905));const o={id:"setup-docusaurus",slug:"/setup-docusaurus",title:"PyTabular | Docusaurus",description:"Install Docusaurus Locally",sidebar_position:2,tags:["Docusaurus","Getting started","PyTabular","Power BI","Microsoft"]},s=void 0,i={unversionedId:"using-docusaurus/setup-docusaurus",id:"using-docusaurus/setup-docusaurus",title:"PyTabular | Docusaurus",description:"Install Docusaurus Locally",source:"@site/docs/using-docusaurus/index.md",sourceDirName:"using-docusaurus",slug:"/setup-docusaurus",permalink:"/docs/setup-docusaurus",draft:!1,tags:[{label:"Docusaurus",permalink:"/docs/tags/docusaurus"},{label:"Getting started",permalink:"/docs/tags/getting-started"},{label:"PyTabular",permalink:"/docs/tags/py-tabular"},{label:"Power BI",permalink:"/docs/tags/power-bi"},{label:"Microsoft",permalink:"/docs/tags/microsoft"}],version:"current",sidebarPosition:2,frontMatter:{id:"setup-docusaurus",slug:"/setup-docusaurus",title:"PyTabular | Docusaurus",description:"Install Docusaurus Locally",sidebar_position:2,tags:["Docusaurus","Getting started","PyTabular","Power BI","Microsoft"]},sidebar:"tutorialSidebar",previous:{title:"Getting Starting",permalink:"/docs/"},next:{title:"Generate Documentation",permalink:"/docs/using-the-gen-docs"}},l={},u=[{value:"Installing Docusaurs",id:"installing-docusaurs",level:2},{value:"(Optional) Syntax Highlighting",id:"optional-syntax-highlighting",level:3},{value:"(Optional) Installing Local Search.",id:"optional-installing-local-search",level:3}],c={toc:u};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"installing-docusaurs"},"Installing Docusaurs"),(0,n.kt)("p",null,"To install Docusaurus locally, you'll need to follow the installation guide provided by the Docusaurus team to ensure that everything is up-to-date. Here's how to get started:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Navigate to the ",(0,n.kt)("a",{parentName:"li",href:"https://docusaurus.io/docs/installation"},"Docusaurus installation guide")," in your web browser."),(0,n.kt)("li",{parentName:"ol"},"Follow the instructions provided in the guide to install Docusaurus on your local machine. The guide includes detailed steps for setting up Docusaurus, including installing Node.js and creating a new Docusaurus project."),(0,n.kt)("li",{parentName:"ol"},"Once you have completed the installation process, you can start using Docusaurus to create your own documentation website.")),(0,n.kt)("p",null,"And that's it! With Docusaurus installed on your local machine, you're ready to start creating your own documentation website. Good luck!"),(0,n.kt)("h3",{id:"optional-syntax-highlighting"},"(Optional) Syntax Highlighting"),(0,n.kt)("p",null,"To apply syntax highlighting for Power BI / SQL-specific languages using Prism, you'll need to edit the docusaurus.config.js file located in the root directory of your Docusaurus project."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open the docusaurus.config.js file in your preferred code editor.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Locate the Prism section of the file. It should look something like this:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-js"},"...\nprism: {\n    theme: lightCodeTheme,\n    darkTheme: darkCodeTheme,\n    // Add these for enabling DAX, M (PowerQuery) and SQL.\n    additionalLanguages: ['dax', 'powerquery', 'sql'], \n},\n...\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"To enable syntax highlighting for DAX, PowerQuery, and SQL, add these languages to the additionalLanguages array in the Prism section of the docusaurus.config.js file.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Save the changes to the file.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Restart the server."))),(0,n.kt)("p",null,"And that's it! You should now have syntax highlighting enabled for these specific languages in your Power BI and SQL code blocks."),(0,n.kt)("h3",{id:"optional-installing-local-search"},"(Optional) Installing Local Search."))}p.isMDXComponent=!0}}]);