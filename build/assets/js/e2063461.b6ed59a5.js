"use strict";(self.webpackChunkwlx_docs=self.webpackChunkwlx_docs||[]).push([[60091],{77476:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var o=t(17624),s=t(4552);const i={},r=void 0,a={id:"frontend/Advanced/Projector",title:"Projector",description:"There is an option to unpin the output cell to a new window",source:"@site/docs/frontend/Advanced/Projector.md",sourceDirName:"frontend/Advanced",slug:"/frontend/Advanced/Projector",permalink:"/wljs-docs/frontend/Advanced/Projector",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1724600266e3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Packages",permalink:"/wljs-docs/frontend/Advanced/Packages"},next:{title:"Decorating symbols",permalink:"/wljs-docs/frontend/Advanced/Syntax sugar/Decorating symbols"}},l={},c=[{value:"Detaching controls / output graphics",id:"detaching-controls--output-graphics",level:2},{value:"Making a slideshow",id:"making-a-slideshow",level:2}];function d(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"There is an option to unpin the output cell to a new window"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(94288).c+"",width:"796",height:"312"})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"It does two things"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Evaluates the cell in the context of notebook"}),"\n",(0,o.jsx)(n.li,{children:"Projects the last output result to a new window"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/wljs-docs/frontend/Reference/Frontend%20IO/CurrentWindow",children:"CurrentWindow"})," will refer to a new window, but ",(0,o.jsx)(n.a,{href:"/wljs-docs/frontend/Reference/Cells%20and%20Notebook/NotebookStore",children:"NotebookStore"})," will still be assigned to the source notebook."]})}),"\n",(0,o.jsx)(n.h2,{id:"detaching-controls--output-graphics",children:"Detaching controls / output graphics"}),"\n",(0,o.jsx)(n.p,{children:"It comes handy if you have interactive elements in different cells and you want to arrange them"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:"boids simulation"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-mathematica",metastring:'title="evaluate normally"',children:'n = 100;\nr := RandomInteger[{1, n}];\nf := (#/(.05 + Sqrt[#.#])) & /@ (x[[#]] - x) &;\ns := With[{r1 = r}, p[[r1]] = r; q[[r1]] = r];\nx = RandomReal[{-1, 1}, {n, 2}];\nv = {#,#} &/@ x // NumericArray;\n{p, q} = RandomInteger[{1, n}, {2, n}];\ncolors = RGBColor[#/n // N,0.3,0.5] &/@ Range[n];\n\nfps = 0;\nfpsLabel = "0";\ntime = AbsoluteTime[];\ndefaults = <|"p"->0.03, "q"->0.02|>;\n\nEventHandler["frame", Function[Null,\n  With[{new = 0.995 x + defaults["p"] f[p] - defaults["q"] f[q]},\n    v = {5 #[[1]], 5 #[[1]] + 30 #[[2]]} &/@ Transpose[{new, new - x}] // NumericArray;\n    x = new;\n  ];\n  \n  If[r < 100, s];\n\n  (* FPS counter *)\n  fps += 1;\n  With[{diff = AbsoluteTime[] - time},\n    If[diff >= 1.0,\n      fpsLabel = ToString[fps / (diff)];\n      fps = 0;\n      time = AbsoluteTime[];\n    ];\n  ];\n]];\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-mathematica",metastring:'title="project it to a window"',children:'Graphics[{\n  PointSize[0.007], Table[With[{i = i, c = colors[[i]]},\n    {c, Arrow[v[[i]] // Offload]}\n  ], {i, n}],\n  AnimationFrameListener[v // Offload, "Event"->"frame"],\n  Text[fpsLabel // Offload, {-1.8,1.8}]\n}, PlotRange -> {{-2,2}, {-2,2}}, "TransitionType"->"Linear", "TransitionDuration"->10, ImageSize->500]  \n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-mathematica",metastring:'title="evaluate normally"',children:'EventHandler[InputGroup[<|\n  "p" -> InputRange[0, 0.1, 0.01, 0.03, "Label"->"p"], \n  "q" -> InputRange[0, 0.1, 0.01, 0.02, "Label"->"q"]\n|>], Function[assoc, defaults = assoc]] \n'})}),"\n",(0,o.jsx)(n.p,{children:"The result looks like"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(72884).c+"",width:"952",height:"572"})}),"\n",(0,o.jsx)(n.p,{children:"You can project the controls to a new window as well. There is no limitations on the number of windows."}),"\n",(0,o.jsx)(n.h2,{id:"making-a-slideshow",children:"Making a slideshow"}),"\n",(0,o.jsxs)(n.p,{children:["If you are working with ",(0,o.jsx)(n.a,{href:"/wljs-docs/frontend/Reference/Slides/",children:"Slides"})," cells, you can always go fullscreen by pressing ",(0,o.jsx)(n.code,{children:"F"})," key on the output cell in the notebook. Here is a second option"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(23404).c+"",width:"1140",height:"549"})}),"\n",(0,o.jsx)(n.admonition,{type:"warning",children:(0,o.jsxs)(n.p,{children:["All your custom ",(0,o.jsx)(n.a,{href:"/wljs-docs/frontend/Cell%20types/Javascript",children:"JavaScript"})," cells, as well as custom styles for your presentation defined in ",(0,o.jsx)(n.a,{href:"/wljs-docs/frontend/Cell%20types/HTML",children:"HTML"})," cells, will not be accessible in the projected window."]})})]})}function h(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},94288:(e,n,t)=>{t.d(n,{c:()=>o});const o=t.p+"assets/images/Screenshot 2024-08-25 at 17.09.18-a9764fafd8b2ba7dd453bd9a3d65079f.png"},72884:(e,n,t)=>{t.d(n,{c:()=>o});const o=t.p+"assets/images/Screenshot 2024-08-25 at 17.17.48-dee7daaac2b3bac801f31622574104d7.png"},23404:(e,n,t)=>{t.d(n,{c:()=>o});const o=t.p+"assets/images/Screenshot 2024-08-25 at 17.25.50-6b788e4e01185532d963ff5521dc2cf6.png"},4552:(e,n,t)=>{t.d(n,{I:()=>a,M:()=>r});var o=t(11504);const s={},i=o.createContext(s);function r(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);