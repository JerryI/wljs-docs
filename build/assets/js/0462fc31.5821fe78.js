"use strict";(self.webpackChunkwlx_docs=self.webpackChunkwlx_docs||[]).push([[70520],{66816:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var a=t(17624),s=t(4552);const i={draft:!1},r=void 0,o={id:"frontend/Advanced/Dynamics/Indicators",title:"Indicators",description:"While evaluating some experimental data, some live indicators comes handy",source:"@site/docs/frontend/Advanced/Dynamics/Indicators.md",sourceDirName:"frontend/Advanced/Dynamics",slug:"/frontend/Advanced/Dynamics/Indicators",permalink:"/wljs-docs/frontend/Advanced/Dynamics/Indicators",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1733416933e3,frontMatter:{draft:!1},sidebar:"tutorialSidebar",previous:{title:"Advanced animation",permalink:"/wljs-docs/frontend/Advanced/Dynamics/Advanced animation"},next:{title:"Offloading calculations",permalink:"/wljs-docs/frontend/Advanced/Dynamics/Offloading calculations"}},c={},l=[{value:"Crossbar and coordinates field",id:"crossbar-and-coordinates-field",level:2},{value:"Normal way",id:"normal-way",level:3},{value:"Dynamically append to a plot",id:"dynamically-append-to-a-plot",level:3},{value:"Progress bar",id:"progress-bar",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,s.M)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"While evaluating some experimental data, some live indicators comes handy"}),"\n",(0,a.jsx)(n.h2,{id:"crossbar-and-coordinates-field",children:"Crossbar and coordinates field"}),"\n",(0,a.jsx)(n.p,{children:"If you are an Origin Pro user, this one is an essential tool for picking data points from your graph."}),"\n",(0,a.jsxs)(n.p,{children:["Essentially we need two things ",(0,a.jsx)(n.a,{href:"/wljs-docs/frontend/Reference/Graphics/Line",children:"Line"})," and ",(0,a.jsx)(n.a,{href:"/wljs-docs/frontend/Reference/GUI/TextView",children:"TextView"})]}),"\n",(0,a.jsx)(n.h3,{id:"normal-way",children:"Normal way"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-mathematica",metastring:'title="cell 1"',children:'point = {0.,0.};\n\n(* plot some dummy function *)\nPlot[Sinc[x], {x,-10,10}, Epilog->{\n  Red,\n\n  (* crossbar *)\n  Line[With[{p = point[[1]]},\n    {{p, -10}, {p, 10}}\n  ] // Offload],\n\n  Line[With[{p = point[[2]]},\n    {{-10, p}, {10, p}}\n  ] // Offload],\n\n  (* attach listener *)\t\n  EventHandler[Graphics`Canvas[], {\n    "mousemove" -> Function[xy, point = xy]\n  }]\n}]\n'})}),"\n",(0,a.jsxs)(n.p,{children:["It attaches an ",(0,a.jsx)(n.a,{href:"/wljs-docs/frontend/Reference/Misc/Events#%60EventHandler%60",children:(0,a.jsx)(n.code,{children:"EventHandler"})})," to a ",(0,a.jsx)(n.code,{children:"Graphics`Canvas[]"})," object. Every-time user moves a mouse over it, an event handler is fired and ",(0,a.jsx)(n.code,{children:"point"})," symbol is updated, that causes updates of all lines"]}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["You can reduce the lag by tuning ",(0,a.jsx)(n.a,{href:"/wljs-docs/frontend/Reference/Graphics/TransitionDuration",children:"TransitionDuration"})," to a lower value."]})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:t(404).c+"",width:"996",height:"522"})}),"\n",(0,a.jsx)(n.p,{children:"Now the text field"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-matheamtica",metastring:'title="cell 2"',children:"TextView[point // Offload]\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:t(4004).c+"",width:"1044",height:"158"})}),"\n",(0,a.jsx)(n.p,{children:"An accuracy might be too large. We can output there separately by using another variable or a symbol"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-mathematica",children:'point = {0.,0.};\ntext = " ";\n\n(* plot some dummy function *)\nPlot[Sinc[x], {x,-10,10}, Epilog->{\n  Red,\n\n  (* crossbar *)\n  Line[With[{p = point[[1]]},\n    {{p, -10}, {p, 10}}\n  ] // Offload],\n\n  Line[With[{p = point[[2]]},\n    {{-10, p}, {10, p}}\n  ] // Offload],\n\n\n  EventHandler[Graphics`Canvas[], {\n    "mousemove" -> Function[xy, \n\t    point = xy;\n\t    text = ToString[Round[xy, 0.01]];\n\t]\n  }]\n}]\n\nTextView[text // Offload]\n'})}),"\n",(0,a.jsx)(n.p,{children:"Now it is much better"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:t(56408).c+"",width:"994",height:"616"})}),"\n",(0,a.jsx)(n.h3,{id:"dynamically-append-to-a-plot",children:"Dynamically append to a plot"}),"\n",(0,a.jsxs)(n.p,{children:["One can also append it to a plot dynamically afterwards using ",(0,a.jsx)(n.a,{href:"/wljs-docs/frontend/Reference/Frontend%20IO/FrontInstanceReference",children:"FrontInstanceReference"}),". Sometimes it is better, since all variables are scoped"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-mathematica",children:'placeCrossbar[ref_, pos_:{0.,0.}] := LeakyModule[{point = pos, text = ""},\n  FrontSubmit[{\n    Red,\n\n    (* crossbar *)\n    Line[With[{p = point[[1]]},\n      {{p, -10}, {p, 10}}\n    ] // Offload],\n\n    Line[With[{p = point[[2]]},\n      {{-10, p}, {10, p}}\n    ] // Offload],\n\n    EventHandler[Graphics`Canvas[], {\n    "mousemove" -> Function[xy, \n\t    point = xy;\n\t    text = ToString[Round[xy, 0.01]];\n\t]\n  }]\n  }, ref];\n  \n  TextView[text // Offload]\n]\n'})}),"\n",(0,a.jsx)(n.p,{children:"Now the only thing we need is to scope"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-mathematica",metastring:'title="cell 1"',children:"(* plot some dummy function *)\nref = FrontInstanceReference[];\nPlot[Sinc[x], {x,-10,10}, Epilog->{ref}]\n"})}),"\n",(0,a.jsx)(n.p,{children:"and after evaluation we can append it"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-mathematica",children:"placeCrossbar[ref]\n"})}),"\n",(0,a.jsx)(n.h2,{id:"progress-bar",children:"Progress bar"}),"\n",(0,a.jsxs)(n.p,{children:["During a long evaluation process we need some sort of indication. For this thing we need a couple of ingredients: ",(0,a.jsx)(n.a,{href:"/wljs-docs/frontend/Reference/Graphics/Rectangle",children:"Rectangle"}),", ",(0,a.jsx)(n.a,{href:"/wljs-docs/frontend/Reference/Cells%20and%20Notebook/CellPrint",children:"CellPrint"})]}),"\n",(0,a.jsx)(n.p,{children:"One can think about it if it was a typical OOP. We need a constructor that returns an instance for tracking the evaluation progress"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-mathematica",children:'progressBar[max_Real | max_Integer] := LeakyModule[{\n\tprogress = 0.,\n\tbar,\n\tincrement,\n\ttimer = AbsoluteTime[]\n},\n\tbar = CellPrint[ToString[\n\t\tGraphics[{\n\t\t\tLightBlue, Rectangle[{-1,-1}, {1,1}],\n\t\t\tGreen, Rectangle[{-1,-1}, {Offload[2 progress - 1], 1}]\n\t\t}, ImagePadding->None, ImageSize->{400, 30}]\n\t, StandardForm], "After"->EvaluationCell[]];\n\n\t(* throttling *)\n\tincrement[value_Real | value_Integer] := If[AbsoluteTime[] - timer > 0.1,\n\t\ttimer = AbsoluteTime[];\n\t\tprogress = value / max // N;\n\t\tIf[progress >= 0.99, \n\t\t\tClearAll[increment];\n\t\t\tDelete[bar];\n\t\t];\n\t];\n\n\tincrement\n]\n'})}),"\n",(0,a.jsx)(n.p,{children:"here we also use sort of throttling not to overstress frontend if our progress tracking function is called too often. A progress bar itself is printed to another cell as basically a growing green rectangle."}),"\n",(0,a.jsx)(n.p,{children:"Let us try to use it"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-mathematica",children:"bar = progressBar[10];\nTable[bar[i]; Pause[0.5]; i, {i, 10}]\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:t(52348).c+"",width:"1096",height:"246"})})]})}function p(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},404:(e,n,t)=>{t.d(n,{c:()=>a});const a=t.p+"assets/images/Draggable-ezgif.com-optipng-48c6ae4cf03acb8a8299795765974244.png"},4004:(e,n,t)=>{t.d(n,{c:()=>a});const a=t.p+"assets/images/Screenshot 2024-03-29 at 20.37.00-a6bf145f3bd03372dae774a75d247043.png"},56408:(e,n,t)=>{t.d(n,{c:()=>a});const a=t.p+"assets/images/Screenshot 2024-03-29 at 20.38.46-d9e36767400071db7a616d5863ffc30f.png"},52348:(e,n,t)=>{t.d(n,{c:()=>a});const a=t.p+"assets/images/Screenshot 2024-03-29 at 20.55.44-7c2dfe884eba6454a4d2be8ffdde0223.png"},4552:(e,n,t)=>{t.d(n,{I:()=>o,M:()=>r});var a=t(11504);const s={},i=a.createContext(s);function r(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);