"use strict";(self.webpackChunkwljs_docs=self.webpackChunkwljs_docs||[]).push([[3287],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=l(n),m=o,f=p["".concat(c,".").concat(m)]||p[m]||u[m]||s;return n?r.createElement(f,a(a({ref:t},d),{},{components:n})):r.createElement(f,a({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:o,a[1]=i;for(var l=2;l<s;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6902:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(7294),o=n(412);const s=["https://cdn.jsdelivr.net/gh/JerryI/wljs-interpreter@latest/src/interpreter.js","https://cdn.jsdelivr.net/gh/JerryI/wljs-interpreter@latest/src/core.js","https://cdn.jsdelivr.net/gh/JerryI/wljs-cells@main/dist/kernel.js","https://cdn.jsdelivr.net/gh/JerryI/wljs-editor@master/dist/kernel.js","https://cdn.jsdelivr.net/gh/JerryI/wljs-editor@master/src/boxes.js","https://cdn.jsdelivr.net/gh/JerryI/wljs-markdown-support@master/dist/kernel.js","https://cdn.jsdelivr.net/gh/JerryI/wljs-js-support@master/dist/kernel.js","https://cdn.jsdelivr.net/gh/JerryI/wljs-html-support@master/dist/kernel.js","https://cdn.jsdelivr.net/gh/JerryI/wljs-inputs@master/dist/kernel.js","https://cdn.jsdelivr.net/gh/JerryI/wljs-graphics-d3@latest/dist/kernel.js","https://cdn.jsdelivr.net/gh/JerryI/wljs-plotly@latest/dist/kernel.js"];function a(e){return new Promise(((t,n)=>{if(o.Z.canUseDOM){var r=document.createElement("script");r.src=e,r.type="module",r.onload=()=>{t()},r.onerror=()=>{n("cannot load script "+e)},document.head.appendChild(r)}}))}const i=new Event("load-wljs");function c(){return(0,r.useEffect)((async()=>{if(o.Z.canUseDOM){if(window.loadedNotebooks={},window.LoadedWLJS)return;for(const e of s)await a(e);window.LoadedWLJS=!0,window.dispatchEvent(i)}}),[]),r.createElement("div",{id:"helmet"})}},1365:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(7294),o=n(3778),s=n(412);function a(e){let{children:t,code:n,name:a,width:i,height:c}=e;return(0,r.useEffect)((()=>{if(s.Z.canUseDOM){const e=Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15),t=async()=>{if(window.LoadedWLJSForSure=!0,e in window.eventAttr)return;window.eventAttr[e]=!0;const t=o.iF(o.TD(atob(n),!0)),r=o.T8(t),s=JSON.parse(r);console.log(a);for(const e of s[0]){const t=new ObjectStorage(e[0]);t.cache=e[1],t.cached=!0}for(const e of s[1]){const t={local:{},global:{}};console.log(e),await interpretate(e,t)}};return window.LoadedWLJSForSure?t():window.addEventListener("load-wljs",t),()=>{Object.values(window.CellHashStorage).forEach((e=>{console.log(e),"input"===e?.type&&e.dispose()}))}}}),[]),r.createElement("main",{id:"frontend-editor",className:"main-container styles-container-editor"},r.createElement("div",{id:"frontend-editor-content",className:"group-container"},r.createElement("div",{id:a})))}s.Z.canUseDOM&&(window.eventAttr={},window.OfflineMode=!0)},3595:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),o=(n(7294),n(3905)),s=n(6902),a=n(1365);const i={sidebar_position:2},c=void 0,l={unversionedId:"frontend/Cell types/Markdown",id:"frontend/Cell types/Markdown",title:"Markdown",description:"Github repo",source:"@site/docs/frontend/Cell types/Markdown.md",sourceDirName:"frontend/Cell types",slug:"/frontend/Cell types/Markdown",permalink:"/wljs-docs/docs/frontend/Cell types/Markdown",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"frontendSidebar",previous:{title:"Wolfram Language",permalink:"/wljs-docs/docs/frontend/Cell types/Wolfram Language"},next:{title:"HTML",permalink:"/wljs-docs/docs/frontend/Cell types/HTML"}},d={},p=[{value:"Template Engine",id:"template-engine",level:2}],u={toc:p},m="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(s.Z,{mdxType:"Component"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/JerryI/wljs-markdown-support"},"Github repo")),"\nTo switch to Markdown language with LaTeX support use ",(0,o.kt)("inlineCode",{parentName:"p"},".md")," prefix on the first line"),(0,o.kt)(a.Z,{code:"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",name:"diatom-a26e6",mdxType:"Notebook"},"diatom-a26e6"),(0,o.kt)("h2",{id:"template-engine"},"Template Engine"),(0,o.kt)("p",null,"WSP template engine allows to use Wolfram Language to process the text like PHP (see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/JerryI/tinyweb-mathematica"},"more here"),"). For example, to create a list in Markdown one can do"),(0,o.kt)(a.Z,{code:"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",name:"industriousness-6dfb5",mdxType:"Notebook"},"industriousness-6dfb5"),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"There is a bug in WSP Engine, that removes whitespaces before and after the ",(0,o.kt)("inlineCode",{parentName:"p"},"<?wsp")," tag.")))}f.isMDXComponent=!0}}]);