"use strict";(self.webpackChunkwlx_docs=self.webpackChunkwlx_docs||[]).push([[13796],{20896:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var o=n(17624),l=n(4552);const s={tags:["text","layout"]},r=void 0,i={id:"frontend/Advanced/Components library/Title and footer",title:"Title and footer",description:"A simple layout helpers to stylize your Slides",source:"@site/docs/frontend/Advanced/Components library/Title and footer.md",sourceDirName:"frontend/Advanced/Components library",slug:"/frontend/Advanced/Components library/Title and footer",permalink:"/wljs-docs/frontend/Advanced/Components library/Title and footer",draft:!1,unlisted:!1,tags:[{label:"text",permalink:"/wljs-docs/tags/text"},{label:"layout",permalink:"/wljs-docs/tags/layout"}],version:"current",lastUpdatedAt:1732651155e3,frontMatter:{tags:["text","layout"]},sidebar:"tutorialSidebar",previous:{title:"Stats counter",permalink:"/wljs-docs/frontend/Advanced/Components library/Stats counter"},next:{title:"AI Assistant",permalink:"/wljs-docs/frontend/Advanced/Command palette/AI Assistant"}},a={},d=[{value:"Title component",id:"title-component",level:2},{value:"Footer component",id:"footer-component",level:2}];function c(e){const t={a:"a",code:"code",h2:"h2",img:"img",p:"p",pre:"pre",...(0,l.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["A simple layout helpers to stylize your ",(0,o.jsx)(t.a,{href:"/wljs-docs/frontend/Reference/Slides/",children:"Slides"})]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(11924).c+"",width:"1282",height:"720"})}),"\n",(0,o.jsx)(t.p,{children:"For example"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-html",children:'.slide\n\x3c!-- .slide: class="text-left h-full" style="height:100%" --\x3e\n\n<MakeTitle>$Fe_x Zn_{2-x} Mo_3 O_8$ is a platform for</MakeTitle>\n\nContent goes...\n\nContent goes...\n\nContent goes...\n\n<Footer/>\n\n'})}),"\n",(0,o.jsx)(t.h2,{id:"title-component",children:"Title component"}),"\n",(0,o.jsx)(t.p,{children:"Place here your logo and decorate it with a gradient for instance"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-jsx",children:'.wlx\n\nMakeTitle[Title__String] := MakeTitle[StringJoin[Title]]\n\nMakeTitle[Title_String] := With[{\n  logo = "https://www.trr360.de/wp-content/uploads/2022/04/cropped-logo_small-1.png"\n},\n<div class="relative flex w-full text-left flex-row gap-x-4" style="align-items: center; margin-bottom:1.5rem;">\n  <div style="bottom:0; z-index:1; position: absolute; background: linear-gradient(to left, red, blue, green); width: 100%; height: 0.7rem;"></div>\n  <img style="margin:0; z-index:2; padding:0rem;" width="120" src="{logo}"/>\n  <h2><Title/></h2>\n</div>\n]\n'})}),"\n",(0,o.jsx)(t.h2,{id:"footer-component",children:"Footer component"}),"\n",(0,o.jsx)(t.p,{children:"It uses absolute position of the element in order not to occupy space on an actual slide"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-jsx",children:'.wlx\n\nFooter = With[{},\n  <div class="w-full ml-auto mr-auto bottom-0 text-sm absolute">\n    DFG Retreat Meeting TRR360: <i>C4 Ultrastrong matter-magnon coupling\n</i>, Kirill Vasin\n  </div>\n];\n'})})]})}function p(e={}){const{wrapper:t}={...(0,l.M)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},11924:(e,t,n)=>{n.d(t,{c:()=>o});const o=n.p+"assets/images/Screenshot 2024-11-26 at 20.13.52-dc565f1412e47ea7e0669bd5bf8e5a5e.png"},4552:(e,t,n)=>{n.d(t,{I:()=>i,M:()=>r});var o=n(11504);const l={},s=o.createContext(l);function r(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);