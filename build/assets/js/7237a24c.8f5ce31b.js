"use strict";(self.webpackChunkwlx_docs=self.webpackChunkwlx_docs||[]).push([[25912],{66104:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var a=t(17624),i=t(4552);const r={env:["Wolfram Kernel"],context:"Notebook`Kernel`Inputs`",package:"wljs-inputs",origin:"https://github.com/JerryI/wljs-inputs"},s=void 0,o={id:"frontend/Reference/GUI/InputRaster",title:"InputRaster",description:"provides a free-drawing 2D input",source:"@site/docs/frontend/Reference/GUI/InputRaster.md",sourceDirName:"frontend/Reference/GUI",slug:"/frontend/Reference/GUI/InputRaster",permalink:"/wljs-docs/frontend/Reference/GUI/InputRaster",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1736628819e3,frontMatter:{env:["Wolfram Kernel"],context:"Notebook`Kernel`Inputs`",package:"wljs-inputs",origin:"https://github.com/JerryI/wljs-inputs"},sidebar:"tutorialSidebar",previous:{title:"InputRange",permalink:"/wljs-docs/frontend/Reference/GUI/InputRange"},next:{title:"InputSelect",permalink:"/wljs-docs/frontend/Reference/GUI/InputSelect"}},c={},l=[{value:"Event generation",id:"event-generation",level:2},{value:"Chaining events",id:"chaining-events",level:2},{value:"Options",id:"options",level:2},{value:"<code>ImageSize</code>",id:"imagesize",level:3},{value:"<code>&quot;OverlayImage&quot;</code>",id:"overlayimage",level:3},{value:"<code>&quot;Topic&quot;</code>",id:"topic",level:3},{value:"<code>&quot;AllowUpdateWhileDrawing&quot;</code>",id:"allowupdatewhiledrawing",level:3}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.M)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"provides a free-drawing 2D input"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-mathematica",children:"InputRaster[opts___] _EventObject\n"})}),"\n",(0,a.jsx)(n.p,{children:"provides a free-drawing over an image"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-mathematica",children:"InputRaster[img_Image, opts___] _EventObject\n"})}),"\n",(0,a.jsx)(n.h2,{id:"event-generation",children:"Event generation"}),"\n",(0,a.jsxs)(n.p,{children:["Fires a single event on any changes on canvas with ",(0,a.jsx)(n.a,{href:"/wljs-docs/frontend/Reference/Image/",children:"Image"})," as a payload. For example"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-mathematica",children:'bufferImage = ImageData[ConstantImage[{0,0,0,0}, {350,350}], "Byte"];\n\nEventHandler[InputRaster[ImageSize->{350,350}], Function[img,\n  bufferImage = ImageData[img, "Byte"];\n]]\n\nImage[bufferImage // Offload, "Byte"]\n'})}),"\n",(0,a.jsx)(n.h2,{id:"chaining-events",children:"Chaining events"}),"\n",(0,a.jsx)(n.p,{children:"One can reuse another event"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-mathematica",children:"InputRaster[event_EventObject, rest__]\n"})}),"\n",(0,a.jsx)(n.h2,{id:"options",children:"Options"}),"\n",(0,a.jsx)(n.h3,{id:"imagesize",children:(0,a.jsx)(n.code,{children:"ImageSize"})}),"\n",(0,a.jsxs)(n.p,{children:["If no image or overlay image is provided, one can specify a size for blank canvas. By the default is ",(0,a.jsx)(n.code,{children:"300"})]}),"\n",(0,a.jsx)(n.h3,{id:"overlayimage",children:(0,a.jsx)(n.code,{children:'"OverlayImage"'})}),"\n",(0,a.jsx)(n.p,{children:"Places a semitransparent image over the canvas. It comes handy when working with masks for images"}),"\n",(0,a.jsx)(n.h3,{id:"topic",children:(0,a.jsx)(n.code,{children:'"Topic"'})}),"\n",(0,a.jsxs)(n.p,{children:["Specifies which topic (or pattern) of an event is used. By the default is ",(0,a.jsx)(n.code,{children:'"Default"'})]}),"\n",(0,a.jsx)(n.h3,{id:"allowupdatewhiledrawing",children:(0,a.jsx)(n.code,{children:'"AllowUpdateWhileDrawing"'})}),"\n",(0,a.jsxs)(n.p,{children:["By the default is ",(0,a.jsx)(n.code,{children:"False"}),". Sends new image on every change."]})]})}function p(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},4552:(e,n,t)=>{t.d(n,{I:()=>o,M:()=>s});var a=t(11504);const i={},r=a.createContext(i);function s(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);