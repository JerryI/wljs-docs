"use strict";(self.webpackChunkwlx_docs=self.webpackChunkwlx_docs||[]).push([[52808],{9308:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var t=n(17624),s=n(4552);const i={env:["WLJS"],package:"wljs-graphics3d-threejs",context:"JerryI`Notebook`Graphics3DUtils`",source:"https://github.com/JerryI/Mathematica-ThreeJS-graphics-engine/blob/dev/src/kernel.js"},a=void 0,c={id:"frontend/Reference/Graphics3D/Metalness",title:"Metalness",description:"It is considered to be removed. Please use Directive instead",source:"@site/docs/frontend/Reference/Graphics3D/Metalness.md",sourceDirName:"frontend/Reference/Graphics3D",slug:"/frontend/Reference/Graphics3D/Metalness",permalink:"/wljs-docs/frontend/Reference/Graphics3D/Metalness",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1727447848e3,frontMatter:{env:["WLJS"],package:"wljs-graphics3d-threejs",context:"JerryI`Notebook`Graphics3DUtils`",source:"https://github.com/JerryI/Mathematica-ThreeJS-graphics-engine/blob/dev/src/kernel.js"},sidebar:"tutorialSidebar",previous:{title:"MeshToonMaterial",permalink:"/wljs-docs/frontend/Reference/Graphics3D/MeshToonMaterial"},next:{title:"Opacity",permalink:"/wljs-docs/frontend/Reference/Graphics3D/Opacity"}},o={},h=[];function l(e){const r={a:"a",admonition:"admonition",code:"code",p:"p",pre:"pre",strong:"strong",...(0,s.M)(),...e.components},{Wl:n}=r;return n||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Wl",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.admonition,{type:"warning",children:(0,t.jsxs)(r.p,{children:["It is considered to be removed. Please use ",(0,t.jsx)(r.a,{href:"/wljs-docs/frontend/Reference/Graphics3D/Directive",children:"Directive"})," instead"]})}),"\n",(0,t.jsxs)(r.p,{children:["specifies metallic property of a graphics primitive (see ",(0,t.jsx)(r.a,{href:"/wljs-docs/frontend/Reference/Graphics3D/MeshPhysicalMaterial",children:"MeshPhysicalMaterial"}),")"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-mathematica",children:"Metalness[i_Real]\n"})}),"\n",(0,t.jsxs)(r.p,{children:["where ",(0,t.jsx)(r.code,{children:"i"})," can be between ",(0,t.jsx)(r.code,{children:"0"})," and ",(0,t.jsx)(r.code,{children:"1"}),". In real world it either ",(0,t.jsx)(r.code,{children:"1"})," or ",(0,t.jsx)(r.code,{children:"0"}),"."]}),"\n",(0,t.jsx)(r.p,{children:"An effect is more visible, when there is an HDR map is used"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"non-metallic"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-mathematica",children:'Graphics3D[{Metalness[0], Sphere[]}, "Lighting"->None, "Lightmap"->"https://raw.githubusercontent.com/JerryI/Mathematica-ThreeJS-graphics-engine/master/assets/PureSky.hdr"]\n'})}),"\n",(0,t.jsx)(n,{children:'Graphics3D[{Metalness[0], Sphere[]}, "Lighting"->None, "Lightmap"->"https://raw.githubusercontent.com/JerryI/Mathematica-ThreeJS-graphics-engine/master/assets/PureSky.hdr"]'}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"metallic"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-mathematica",children:'Graphics3D[{Metalness[1], Sphere[]}, "Lighting"->None, "Lightmap"->"https://raw.githubusercontent.com/JerryI/Mathematica-ThreeJS-graphics-engine/master/assets/PureSky.hdr"]\n'})}),"\n",(0,t.jsx)(n,{children:'Graphics3D[{Metalness[1], Sphere[]}, "Lighting"->None, "Lightmap"->"https://raw.githubusercontent.com/JerryI/Mathematica-ThreeJS-graphics-engine/master/assets/PureSky.hdr"]'}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"metallic and polished"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-mathematica",children:'Graphics3D[{Metalness[1], Roughness[0], Sphere[]}, "Lighting"->None, "Lightmap"->"https://raw.githubusercontent.com/JerryI/Mathematica-ThreeJS-graphics-engine/master/assets/PureSky.hdr"]\n'})}),"\n",(0,t.jsx)(n,{children:'Graphics3D[{Metalness[1], Roughness[0], Sphere[]}, "Lighting"->None, "Lightmap"->"https://raw.githubusercontent.com/JerryI/Mathematica-ThreeJS-graphics-engine/master/assets/PureSky.hdr"]'})]})}function d(e={}){const{wrapper:r}={...(0,s.M)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},4552:(e,r,n)=>{n.d(r,{I:()=>c,M:()=>a});var t=n(11504);const s={},i=t.createContext(s);function a(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);