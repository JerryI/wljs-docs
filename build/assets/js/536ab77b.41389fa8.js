"use strict";(self.webpackChunkwljs_docs=self.webpackChunkwljs_docs||[]).push([[412],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6902:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(7294),r=n(412);const o=["https://cdn.jsdelivr.net/gh/JerryI/wljs-interpreter@latest/src/interpreter.js","https://cdn.jsdelivr.net/gh/JerryI/wljs-interpreter@latest/src/core.js","https://cdn.jsdelivr.net/gh/JerryI/wljs-cells@main/dist/kernel.js","https://cdn.jsdelivr.net/gh/JerryI/wljs-editor@master/dist/kernel.js","https://cdn.jsdelivr.net/gh/JerryI/wljs-editor@master/src/boxes.js","https://cdn.jsdelivr.net/gh/JerryI/wljs-markdown-support@master/dist/kernel.js","https://cdn.jsdelivr.net/gh/JerryI/wljs-js-support@master/dist/kernel.js","https://cdn.jsdelivr.net/gh/JerryI/wljs-html-support@master/dist/kernel.js","https://cdn.jsdelivr.net/gh/JerryI/wljs-inputs@master/dist/kernel.js","https://cdn.jsdelivr.net/gh/JerryI/wljs-graphics-d3@latest/dist/kernel.js","https://cdn.jsdelivr.net/gh/JerryI/wljs-plotly@latest/dist/kernel.js"];function i(e){return new Promise(((t,n)=>{if(r.Z.canUseDOM){var a=document.createElement("script");a.src=e,a.type="module",a.onload=()=>{t()},a.onerror=()=>{n("cannot load script "+e)},document.head.appendChild(a)}}))}const l=new Event("load-wljs");function s(){return(0,a.useEffect)((async()=>{if(r.Z.canUseDOM){if(window.loadedNotebooks={},window.LoadedWLJS)return;for(const e of o)await i(e);window.LoadedWLJS=!0,window.dispatchEvent(l)}}),[]),a.createElement("div",{id:"helmet"})}},1365:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(3778),o=n(412);function i(e){let{children:t,code:n,name:i,width:l,height:s}=e;return(0,a.useEffect)((()=>{if(o.Z.canUseDOM){const e=Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15),t=async()=>{if(window.LoadedWLJSForSure=!0,e in window.eventAttr)return;window.eventAttr[e]=!0;const t=r.iF(r.TD(atob(n),!0)),a=r.T8(t),o=JSON.parse(a);console.log(i);for(const e of o[0]){const t=new ObjectStorage(e[0]);t.cache=e[1],t.cached=!0}for(const e of o[1]){const t={local:{},global:{}};console.log(e),await interpretate(e,t)}};return window.LoadedWLJSForSure?t():window.addEventListener("load-wljs",t),()=>{Object.values(window.CellHashStorage).forEach((e=>{console.log(e),"input"===e?.type&&e.dispose()}))}}}),[]),a.createElement("main",{id:"frontend-editor",className:"main-container styles-container-editor"},a.createElement("div",{id:"frontend-editor-content",className:"group-container"},a.createElement("div",{id:i})))}o.Z.canUseDOM&&(window.eventAttr={},window.OfflineMode=!0)},7860:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var a=n(7462),r=(n(7294),n(3905)),o=n(6902),i=n(1365);const l={slug:"meta-example",title:"Introducing metamarkers",authors:"jerryi",tags:["evaluation","metamarkers"],enableComments:!0},s=void 0,c={permalink:"/wljs-docs/blog/meta-example",source:"@site/blog/2023-04-20-placed/index.md",title:"Introducing metamarkers",description:".png)",date:"2023-04-20T00:00:00.000Z",formattedDate:"April 20, 2023",tags:[{label:"evaluation",permalink:"/wljs-docs/blog/tags/evaluation"},{label:"metamarkers",permalink:"/wljs-docs/blog/tags/metamarkers"}],readingTime:1.665,hasTruncateMarker:!0,authors:[{name:"Kirill Vasin",title:"Maintainer",url:"https://github.com/JerryI",imageURL:"img/jerryi.jpg",key:"jerryi"}],frontMatter:{slug:"meta-example",title:"Introducing metamarkers",authors:"jerryi",tags:["evaluation","metamarkers"],enableComments:!0},prevItem:{title:"Introducing middleware event handlers",permalink:"/wljs-docs/blog/middleware-example"}},p={authorsImageUrls:[void 0]},d=[{value:"Voxel cellular automaton",id:"voxel-cellular-automaton",level:2}],u={toc:d},m="wrapper";function f(e){let{components:t,...l}=e;return(0,r.kt)(m,(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(8691).Z,width:"537",height:"332"}),"\nTo add new elements to a plot / graph there is no need in full reevaluation of a cell or using dynamic binding. Since the context of executing is stored together with an object, one can simply evaluate (in-place) the needed expression."),(0,r.kt)(o.Z,{mdxType:"Component"}),(0,r.kt)("p",null,"Let's have a look at the following example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-mathematica"},'Plot[Sin[x], {x,0,Pi}, Epilog->{MetaMarker["myplot"]}]\n')),(0,r.kt)("p",null,"Here it results in ",(0,r.kt)("inlineCode",{parentName:"p"},"Graphics")," expressions with a bunch of ",(0,r.kt)("inlineCode",{parentName:"p"},"Line")," lying inside, while ",(0,r.kt)("inlineCode",{parentName:"p"},"Epilog")," option just puts the given expression into the end of the same ",(0,r.kt)("inlineCode",{parentName:"p"},"Graphics")," object."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(6618).Z,width:"536",height:"342"})),(0,r.kt)("p",null,"You can think about ",(0,r.kt)("inlineCode",{parentName:"p"},"MetaMarker")," as if it was ",(0,r.kt)("inlineCode",{parentName:"p"},'<div id="">')," or class, that allows you to identify that particular object in the given context."),(0,r.kt)("p",null,"After than one can simply execute an expression by using the following expression"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-mathematica"},'Placed[{\n    RGBColor[1,0,1], \n    Line[{{0,0},{0.4,1}}]\n}, FindMetaMarker["myplot"]//First] // Hold // FrontSubmit\n')),(0,r.kt)("p",null,"As a result, the graph will show a new feature"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(8130).Z,width:"550",height:"345"})),(0,r.kt)("p",null,"This does not depend on ",(0,r.kt)("inlineCode",{parentName:"p"},"Graphics")," object, it can be anything in principle."),(0,r.kt)("h2",{id:"voxel-cellular-automaton"},"Voxel cellular automaton"),(0,r.kt)("p",null,"For example, let us create an empty 3D canvas"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-mathematica"},'Graphics3D[{Sky[], MetaMarker["marker"]},  "Lighting"->None]\n')),(0,r.kt)("p",null,"Then using build-in cellular automaton, we can visualize it lively in 3D using simple ",(0,r.kt)("inlineCode",{parentName:"p"},"Cuboid")," shapes with different colors"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-mathematica"},'size = {10,10};\nboard = CellularAutomaton[{6, {2, 1}, {1, 1}}, {{{1}}, 0}, 50]//First;\nsize = board//Dimensions\n\nz = 20;\n\niterate := (\n board = CellularAutomaton[{6, {2, 1}, {1, 1}}, board];\n\n Table[\n  If[board[[i+size[[1]]/2 // Floor,j+size[[2]]/2 // Floor]] > 0, \n    With[{coords = Cuboid[{i+1,j+1,z+0.8}, {i,j,z}], color = {1+i/100,1+i/100,(z+10)/10}},\n    \n      Placed[{ RGBColor@color, coords}, FindMetaMarker["marker"]//First] // Hold // FrontSubmit;\n      Pause[0.02];\n      \n    ]\n  ];\n , {i, -size[[1]]/2//Floor, size[[1]]/2//Floor}, {j, -size[[2]]/2//Floor, size[[2]]/2//Floor}];\n z = z - 0.8;\n);\n')),(0,r.kt)("p",null,"If a cell is 1, then it will be a cube on that place. By calling"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-mathematica"},"Do[iterate //Quiet;, {i,1,10}];\n")),(0,r.kt)("p",null,"One can observe in real time the following"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(8491).Z,width:"505",height:"311"})),(0,r.kt)("p",null,"The full code is presented below"),(0,r.kt)(i.Z,{code:"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",name:"speakeasy-b5f04",mdxType:"Notebook"},"speakeasy-b5f04"),(0,r.kt)("p",null,"You can also download this notebook via a link"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{target:"_blank",href:n(745).Z},"VoxelAutomata.wl"))),(0,r.kt)("p",null,"Thank you for reading! See you"))}f.isMDXComponent=!0},745:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/VoxelAutomata-c77ac782fd1022ade0babece848f2287.wl"},6618:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Screenshot 2023-07-14 at 15.36.32-3d5da1248e1ee5952118cd1070f8997b.png"},8130:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Screenshot 2023-07-14 at 15.37.00-428a0a9d2b3d60f4662c7dd3e613593c.png"},8491:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ezgif.com-optimize-10-63a5d4259a897d8f219e311db66a3e75.gif"},8691:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/screenshot(5)-7664ea1c5e080cca6fca30e40d057411.png"}}]);