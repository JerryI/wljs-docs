"use strict";(self.webpackChunkwlx_docs=self.webpackChunkwlx_docs||[]).push([[45328],{78352:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>t,metadata:()=>d,toc:()=>c});var s=l(17624),i=l(4552);const t={draft:!1},a=void 0,d={id:"frontend/Advanced/Slides/Styling",title:"Styling",description:"The most basics styling",source:"@site/docs/frontend/Advanced/Slides/Styling.md",sourceDirName:"frontend/Advanced/Slides",slug:"/frontend/Advanced/Slides/Styling",permalink:"/wljs-docs/frontend/Advanced/Slides/Styling",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{draft:!1},sidebar:"tutorialSidebar",previous:{title:"Embedded Mermaid diagrams",permalink:"/wljs-docs/frontend/Advanced/Slides/Mermaid Diagrams"},next:{title:"Transitions",permalink:"/wljs-docs/frontend/Advanced/Slides/Transitions"}},r={},c=[{value:"Global settings",id:"global-settings",level:2},{value:"Local",id:"local",level:2},{value:"Using data attributes",id:"using-data-attributes",level:3},{value:"Misc",id:"misc",level:2},{value:"Align things on a slide",id:"align-things-on-a-slide",level:3},{value:"Local style",id:"local-style",level:4},{value:"Inline styles",id:"inline-styles",level:4},{value:"Tailwind utility classes",id:"tailwind-utility-classes",level:4},{value:"Collapse / Expand section",id:"collapse--expand-section",level:3},{value:"Scroll bar",id:"scroll-bar",level:3},{value:"Align content",id:"align-content",level:3}];function o(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",p:"p",pre:"pre",...(0,i.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"The most basics styling"}),"\n",(0,s.jsx)(n.h2,{id:"global-settings",children:"Global settings"}),"\n",(0,s.jsxs)(n.p,{children:["One can set a global style applied for all slides in your notebook. You need to use ",(0,s.jsx)(n.a,{href:"/wljs-docs/frontend/Cell%20types/HTML",children:"HTML"})," or ",(0,s.jsx)(n.a,{href:"/wljs-docs/frontend/Cell%20types/WLX",children:"WLX"})," cels for it and redefine ",(0,s.jsx)(n.code,{children:".reveal"})," class"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",metastring:'title="cell 1"',children:".wlx\n\n<style>\n  .reveal {\n    font-family: Arial;\n  }\n</style>\n"})}),"\n",(0,s.jsxs)(n.p,{children:["now the default font will be ",(0,s.jsx)(n.code,{children:"Arial"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",metastring:'title="cell 2"',children:".slide\n\n# Hey, I am Arial!\n"})}),"\n",(0,s.jsx)(n.h2,{id:"local",children:"Local"}),"\n",(0,s.jsxs)(n.p,{children:["One can do the same with an individual slide by wrapping the text into HTML or ",(0,s.jsx)(n.a,{href:"/wljs-docs/frontend/Cell%20types/WLX",children:"WLX"})," tags"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:'.slide\n\n<div style="font-family: Arial">\n\n# Title, I am Arial\n\n</div>\n\nI am not Arial\n'})}),"\n",(0,s.jsxs)(n.admonition,{type:"warning",children:[(0,s.jsxs)(n.p,{children:["In order to mix Markdown with HTML or ",(0,s.jsx)(n.a,{href:"/wljs-docs/frontend/Cell%20types/WLX",children:"WLX"})," correctly, remove white spaces from the beginning markdown, i.e."]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:".slide\n\n<div>\n\t# It wont work\n</div>\n"})}),(0,s.jsx)(n.p,{children:"but instead"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:".slide\n\n<div>\n\n# It will work\n\n</div>\n"})})]}),"\n",(0,s.jsx)(n.p,{children:"Or one can define a class for it early"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",metastring:'title="cell 1"',children:".wlx\n\n<style>\n  .specialClass {\n    font-family: Arial;\n  }\n</style>\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",metastring:'title="cell 2"',children:'.slide\n\n<div class="specialClass">\n\n# Title, I am Arial\n\n</div>\n\nI am not Arial\n'})}),"\n",(0,s.jsx)(n.h3,{id:"using-data-attributes",children:"Using data attributes"}),"\n",(0,s.jsx)(n.p,{children:"It might come handy to use RevealJS styling option for individual elements instead of writing plain XML"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:'.slide\n\n\x3c!-- .slide: data-background-color="black" --\x3e\n\n\n# Hey, I am white \x3c!-- .element: style="color:white" --\x3e\n\n# Hey, I am red \x3c!-- .element: style="color:red" --\x3e\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Here ",(0,s.jsx)(n.code,{children:"slide"})," is applied to an entire slide, while ",(0,s.jsx)(n.code,{children:"element"})," is localized to the last markdown element."]}),"\n",(0,s.jsx)(n.h2,{id:"misc",children:"Misc"}),"\n",(0,s.jsx)(n.h3,{id:"align-things-on-a-slide",children:"Align things on a slide"}),"\n",(0,s.jsx)(n.p,{children:"There are many ways on how to do that, here is one of the examples"}),"\n",(0,s.jsx)(n.h4,{id:"local-style",children:"Local style"}),"\n",(0,s.jsxs)(n.p,{children:["Define your own class inside slide or outside in ",(0,s.jsx)(n.a,{href:"/wljs-docs/frontend/Cell%20types/HTML",children:"HTML"})," cell for example"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-md",children:'.slide\n\n<style>\n  .center-x{\n    margin-left:auto; \n    margin-right:auto;\n    margin-top: 2rem;\n    border: none; \n    border-radius: 4px\n  }\n</style>\n\n## Programming Languages\n### Wolfram Language\n\n<iframe class="center-x" width="800" height="500" src="https://www.wolfram.com"/>\n\n'})}),"\n",(0,s.jsx)(n.h4,{id:"inline-styles",children:"Inline styles"}),"\n",(0,s.jsxs)(n.p,{children:["The same as before, but explicitly as ",(0,s.jsx)(n.code,{children:"style"})," attribute"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-md",children:'...\n\n<iframe style="margin-left: auto; margin-right:auto" width="800" height="500" src="https://www.wolfram.com"/>\n'})}),"\n",(0,s.jsx)(n.h4,{id:"tailwind-utility-classes",children:"Tailwind utility classes"}),"\n",(0,s.jsxs)(n.p,{children:["The same as before, but explicitly as ",(0,s.jsx)(n.code,{children:"class"})," attribute"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-md",children:'...\n\n<iframe class="mr-auto ml-auto" width="800" height="500" src="https://www.wolfram.com"/>\n'})}),"\n",(0,s.jsx)(n.h3,{id:"collapse--expand-section",children:"Collapse / Expand section"}),"\n",(0,s.jsx)(n.p,{children:"Use native HTML5 tag for it"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-md",children:".slide\n\n# Title\n\n<details>\n<summary>Hidden section</summary>\n\n## Subtitle\n\n</details>\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:l(37348).c+"",width:"1358",height:"686"})}),"\n",(0,s.jsx)(n.h3,{id:"scroll-bar",children:"Scroll bar"}),"\n",(0,s.jsx)(n.p,{children:"If the content is too large, but you still want to keep it on a single slide, one can tune the settings for a slide element"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-md",children:'.slide\n\n\x3c!-- .slide: style="height:100%; overflow-y:scroll" --\x3e\n\n...large content goes\n\n'})}),"\n",(0,s.jsx)(n.h3,{id:"align-content",children:"Align content"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-md",children:'.slide\n\n\x3c!-- .slide: style="text-align:left" --\x3e\n\n# Heading\n\nSome text\n\n'})})]})}function h(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},37348:(e,n,l)=>{l.d(n,{c:()=>s});const s=l.p+"assets/images/Screenshot 2024-09-03 at 09.16.28-b5a4e59f62a78128b9c6b80a5597081e.png"},4552:(e,n,l)=>{l.d(n,{I:()=>d,M:()=>a});var s=l(11504);const i={},t=s.createContext(i);function a(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);