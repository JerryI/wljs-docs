"use strict";(self.webpackChunkwlx_docs=self.webpackChunkwlx_docs||[]).push([[23832],{28708:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var t=n(17624),r=n(4552);const s={env:["WLJS"],package:"wljs-graphics-d3",source:"https://github.com/JerryI/wljs-graphics-d3/blob/dev/src/kernel.js"},a=void 0,o={id:"frontend/Reference/Graphics/Directive",title:"Directive",description:"Used for styling plots or 2D graphics",source:"@site/docs/frontend/Reference/Graphics/Directive.md",sourceDirName:"frontend/Reference/Graphics",slug:"/frontend/Reference/Graphics/Directive",permalink:"/wljs-docs/frontend/Reference/Graphics/Directive",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1736628819e3,frontMatter:{env:["WLJS"],package:"wljs-graphics-d3",source:"https://github.com/JerryI/wljs-graphics-d3/blob/dev/src/kernel.js"},sidebar:"tutorialSidebar",previous:{title:"Circle",permalink:"/wljs-docs/frontend/Reference/Graphics/Circle"},next:{title:"Disk",permalink:"/wljs-docs/frontend/Reference/Graphics/Disk"}},l={},c=[{value:"Directives",id:"directives",level:2},{value:"<code>_RGBColor</code>",id:"_rgbcolor",level:3},{value:"Options",id:"options",level:2},{value:"<code>FontSize</code>",id:"fontsize",level:3},{value:"<code>FontFamily</code>",id:"fontfamily",level:3},{value:"<code>TransitionType</code>",id:"transitiontype",level:3},{value:"<code>TransitionDuration</code>",id:"transitionduration",level:3},{value:"Examples",id:"examples",level:2},{value:"Ticks of a plot",id:"ticks-of-a-plot",level:3},{value:"FrameLabel style",id:"framelabel-style",level:3},{value:"Transitions",id:"transitions",level:3}];function d(e){const i={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,r.M)(),...e.components},{Wl:n}=i;return n||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Wl",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.p,{children:"Used for styling plots or 2D graphics"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-mathematica",children:"Directive[directives___, opts___Rule]\n"})}),"\n",(0,t.jsx)(i.p,{children:"The support is quite limited compared to Mathematica's implementation"}),"\n",(0,t.jsx)(i.h2,{id:"directives",children:"Directives"}),"\n",(0,t.jsx)(i.h3,{id:"_rgbcolor",children:(0,t.jsx)(i.code,{children:"_RGBColor"})}),"\n",(0,t.jsx)(i.h2,{id:"options",children:"Options"}),"\n",(0,t.jsx)(i.h3,{id:"fontsize",children:(0,t.jsx)(i.code,{children:"FontSize"})}),"\n",(0,t.jsx)(i.h3,{id:"fontfamily",children:(0,t.jsx)(i.code,{children:"FontFamily"})}),"\n",(0,t.jsx)(i.h3,{id:"transitiontype",children:(0,t.jsx)(i.code,{children:"TransitionType"})}),"\n",(0,t.jsx)(i.h3,{id:"transitionduration",children:(0,t.jsx)(i.code,{children:"TransitionDuration"})}),"\n",(0,t.jsx)(i.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(i.h3,{id:"ticks-of-a-plot",children:"Ticks of a plot"}),"\n",(0,t.jsx)(i.p,{children:"One can provide a font-size parameters"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-mathematica",children:"Plot[Sin[x], {x,0,2Pi}, FrameTicksStyle->Directive[FontSize->16], Frame->True]\n"})}),"\n",(0,t.jsx)(n,{children:"Plot[Sin[x], {x,0,2Pi}, FrameTicksStyle->Directive[FontSize->16], Frame->True, ImageSize->350]"}),"\n",(0,t.jsx)(i.h3,{id:"framelabel-style",children:"FrameLabel style"}),"\n",(0,t.jsx)(i.p,{children:"The same is valid for the labels"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-mathematica",children:'Plot[Sin[x], {x,0,10 Pi}, FrameStyle->Directive[FontSize->16], Frame->True, FrameLabel->{"x-axis", "y-axis"}]\n'})}),"\n",(0,t.jsx)(n,{children:'Plot[Sin[x], {x,0,10 Pi}, FrameStyle->Directive[FontSize->16], Frame->True, FrameLabel->{"x-axis", "y-axis"}, ImageSize->350]'}),"\n",(0,t.jsx)(i.h3,{id:"transitions",children:"Transitions"}),"\n",(0,t.jsx)(i.p,{children:"One can specify the local transitions parameters. For example"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-mathematica",children:"p1 = {0,0};\np2 = {0,0};\n\nGraphics[{\n\tDirective[TransitionDuration->500], Red, Disk[p1 // Offload, 0.2],\n\t{Directive[TransitionDuration->100], Blue, Disk[p2 // Offload, 0.2]}}\n, PlotRange->{{-1,1}, {-1,1}}]\n"})}),"\n",(0,t.jsx)(i.p,{children:"then try"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-mathematica",children:"p1 = {1,1};\np2 = {-1,-1};\n"})}),"\n",(0,t.jsxs)(i.p,{children:["You will find that they are animated with a different duration. ",(0,t.jsxs)(i.strong,{children:["The same applies to ",(0,t.jsx)(i.code,{children:"TransitionType"})," as well"]})]})]})}function p(e={}){const{wrapper:i}={...(0,r.M)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},4552:(e,i,n)=>{n.d(i,{I:()=>o,M:()=>a});var t=n(11504);const r={},s=t.createContext(r);function a(e){const i=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(s.Provider,{value:i},e.children)}}}]);