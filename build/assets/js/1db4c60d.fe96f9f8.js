"use strict";(self.webpackChunkwljs_docs=self.webpackChunkwljs_docs||[]).push([[9775],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(g,l(l({ref:t},c),{},{components:n})):a.createElement(g,l({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9092:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:1},l=void 0,i={unversionedId:"frontend/Cell types/Wolfram Language",id:"frontend/Cell types/Wolfram Language",title:"Wolfram Language",description:"Github repo",source:"@site/docs/frontend/Cell types/Wolfram Language.md",sourceDirName:"frontend/Cell types",slug:"/frontend/Cell types/Wolfram Language",permalink:"/wljs-docs/docs/frontend/Cell types/Wolfram Language",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"frontendSidebar",previous:{title:"Cell types",permalink:"/wljs-docs/docs/category/cell-types"},next:{title:"Markdown",permalink:"/wljs-docs/docs/frontend/Cell types/Markdown"}},s={},p=[{value:"Syntax highlighting",id:"syntax-highlighting",level:2},{value:"Graphics symbols | Syntax sugar",id:"graphics-symbols--syntax-sugar",level:2}],c=(u="Notebook",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var u;const d={toc:p},m="wrapper";function g(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/JerryI/wljs-editor"},"Github repo"))),(0,r.kt)("p",null,"When you open an editor and ",(0,r.kt)("strong",{parentName:"p"},"start typing"),", the following happens"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"each character is send to a server and updates the cell (autosaving)"),(0,r.kt)("li",{parentName:"ol"},"editor tries to figure out the language or a cell type "),(0,r.kt)("li",{parentName:"ol"},"considering (2) it changes the highlighting and autocomplete / other plugins")),(0,r.kt)("p",null,"In this sense your input cell is ",(0,r.kt)("strong",{parentName:"p"},"an ultimate tool"),"."),(0,r.kt)("h1",{id:"-head"},"<<<<<<< HEAD"),(0,r.kt)("p",null,"![","[ezgif.com-video-to-gif-4.gif]","]"),(0,r.kt)("blockquote",null,(0,r.kt)("blockquote",{parentName:"blockquote"},(0,r.kt)("blockquote",{parentName:"blockquote"},(0,r.kt)("blockquote",{parentName:"blockquote"},(0,r.kt)("blockquote",{parentName:"blockquote"},(0,r.kt)("blockquote",{parentName:"blockquote"},(0,r.kt)("blockquote",{parentName:"blockquote"},(0,r.kt)("p",{parentName:"blockquote"},"e7b73df70c567ba4b97e70f57fa8d5abc31d191f")))))))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"To specify the type of a cell - use a prefix in the first line of the cell"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-markdown"},".md\n# Hello\n")),(0,r.kt)("p",{parentName:"admonition"},"it can be anything ",(0,r.kt)("inlineCode",{parentName:"p"},"**.**")," the behavior is defined by language processors shipped via packages installed (see ",(0,r.kt)("a",{parentName:"p",href:"/wljs-docs/docs/frontend/Evaluation/Static"},"Static Evaluation"),")")),(0,r.kt)("p",null,"For example"),(0,r.kt)(c,{code:"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",name:"aridity-18185",mdxType:"Notebook"},"aridity-18185"),(0,r.kt)("p",null,"Then whatever you typed, you should press ",(0,r.kt)("inlineCode",{parentName:"p"},"Shift-Enter")," to make magic happens."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Input cell is a universal text-field and cannot be customized. Output cells can be different and customized via plugins / packages.")),(0,r.kt)("p",null,"Wolfram Language cells support code with built-in syntax highlighting, graphics or any other interactive objects, syntax sugar (fractions) and etc."),(0,r.kt)("h2",{id:"syntax-highlighting"},"Syntax highlighting"),(0,r.kt)("p",null,"Depending on the language you specify at the first line, it will highlight HTML, Markdown or Javascript. Wolfram Language autocomplete and highlighting can be extended using external packages."),(0,r.kt)("p",null,"Locate any package in ",(0,r.kt)("inlineCode",{parentName:"p"},"Packages/")," folder. Usually ",(0,r.kt)("inlineCode",{parentName:"p"},"src/autocomplete.js")," file describes any new library-related Wolfram Expressions."),(0,r.kt)("h2",{id:"graphics-symbols--syntax-sugar"},"Graphics symbols | Syntax sugar"),(0,r.kt)("p",null,'All "heavy" objects are represented as'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-mathematica"},'FrontEndExecutable["uid"]\n')),(0,r.kt)("p",null,"where ",(0,r.kt)("inlineCode",{parentName:"p"},"uid")," is an identifier for the Objects storage. Basically any ",(0,r.kt)("inlineCode",{parentName:"p"},"Graphics"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Graphics3D")," are packed to such construction to prevent slow-down caused by many symbols stored in the editor."),(0,r.kt)("p",null,"For the lightweight objects it uses inline representation, for example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-mathematica"},"data // Iconize\n")),(0,r.kt)("p",null,"will result in"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-mathematica"},'FrontEndInlineExecutable["compressed data"]\n')),(0,r.kt)("p",null,"There are some special cases, please see more about it in....."))}g.isMDXComponent=!0}}]);