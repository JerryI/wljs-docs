"use strict";(self.webpackChunkwlx_docs=self.webpackChunkwlx_docs||[]).push([[4304],{54372:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>c,default:()=>x,frontMatter:()=>a,metadata:()=>o,toc:()=>t});var l=i(17624),s=i(4552);const a={env:["Wolfram Kernel"],update:!1,virtual:null,registered:!0},c=void 0,o={id:"frontend/Reference/Plotting Functions/Plot",title:"Plot",description:"A Swiss knife for displaying 2D data",source:"@site/docs/frontend/Reference/Plotting Functions/Plot.md",sourceDirName:"frontend/Reference/Plotting Functions",slug:"/frontend/Reference/Plotting Functions/Plot",permalink:"/wljs-docs/frontend/Reference/Plotting Functions/Plot",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1728738925e3,frontMatter:{env:["Wolfram Kernel"],update:!1,virtual:null,registered:!0},sidebar:"tutorialSidebar",previous:{title:"ParametricPlot",permalink:"/wljs-docs/frontend/Reference/Plotting Functions/ParametricPlot"},next:{title:"Plot3D",permalink:"/wljs-docs/frontend/Reference/Plotting Functions/Plot3D"}},r={},t=[{value:"Options",id:"options",level:2},{value:"<code>PlotStyle</code>",id:"plotstyle",level:3},{value:"<code>AxesLabel</code>",id:"axeslabel",level:3},{value:"<code>Ticks</code>",id:"ticks",level:3},{value:"<code>Controls</code> \ud83d\udc9b",id:"controls-",level:3},{value:"<code>Frame</code>",id:"frame",level:3},{value:"<code>FrameTicks</code>",id:"frameticks",level:4},{value:"<code>FrameLabel</code>",id:"framelabel",level:4},{value:"<code>FrameStyle</code>",id:"framestyle",level:4},{value:"<code>FrameTicksStyle</code>",id:"frameticksstyle",level:4},{value:"<code>TickLabels</code>",id:"ticklabels",level:4},{value:"<code>ClippingStyle</code>",id:"clippingstyle",level:3},{value:"<code>Filling</code>",id:"filling",level:3},{value:"<code>Baseline</code>",id:"baseline",level:3},{value:"<code>Epilog</code>",id:"epilog",level:3},{value:"<code>Prolog</code>",id:"prolog",level:3},{value:"<code>ExclusionsStyle</code>",id:"exclusionsstyle",level:3},{value:"<code>ImageSize</code>",id:"imagesize",level:3},{value:"<code>MaxReqursion</code>",id:"maxreqursion",level:3},{value:"<code>Mesh</code>",id:"mesh",level:3},{value:"<code>PeformanceGoal</code>",id:"peformancegoal",level:3},{value:"<code>PlotPoints</code>",id:"plotpoints",level:3},{value:"<code>PlotLegends</code>",id:"plotlegends",level:3},{value:"<code>PlotRange</code>",id:"plotrange",level:3},{value:"<code>RegionFunction</code>",id:"regionfunction",level:3},{value:"<code>Axes</code>",id:"axes",level:3},{value:"Dynamics",id:"dynamics",level:2}];function d(e){const n={a:"a",admonition:"admonition",annotation:"annotation",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",math:"math",mi:"mi",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,s.M)(),...e.components},{Wl:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Wl",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:"A Swiss knife for displaying 2D data"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-mathematica",children:"Plot[expr_, {variable, min, max, step}, opts__]\n"})}),"\n",(0,l.jsxs)(n.p,{children:["has ",(0,l.jsx)(n.code,{children:"HoldFirst"})," attribute. See the list of supported options (",(0,l.jsx)(n.code,{children:"opts"}),") down below"]}),"\n",(0,l.jsx)(n.h2,{id:"options",children:"Options"}),"\n",(0,l.jsx)(n.h3,{id:"plotstyle",children:(0,l.jsx)(n.code,{children:"PlotStyle"})}),"\n",(0,l.jsxs)(n.p,{children:["Works as in Mathematica, i.e. per element in ",(0,l.jsx)(n.code,{children:"expr"})," array, supports color, opacity and etc"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-mathematica",children:"Plot[Table[x^y, {y, 6}]//Evaluate, {x, 0,1}, PlotStyle->Table[Blend[{Red, Blue}, i/6], {i, 6}]]\n"})}),"\n",(0,l.jsx)(i,{children:"Plot[Table[x^y, {y, 6}]//Evaluate, {x, 0,1}, PlotStyle->Table[Blend[{Red, Blue}, i/6], {i, 6}], ImageSize->500]"}),"\n",(0,l.jsx)(n.h3,{id:"axeslabel",children:(0,l.jsx)(n.code,{children:"AxesLabel"})}),"\n",(0,l.jsx)(n.p,{children:"Place labels on your axes"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-mathematica",children:'Plot[Sinc[x], {x, 0, 10}, AxesLabel -> {"x", "Sinc[x]"}]\n'})}),"\n",(0,l.jsx)(i,{children:'Plot[Sinc[x], {x, 0, 10}, AxesLabel -> {"x", "Sinc[x]"}, ImageSize->500]'}),"\n",(0,l.jsxs)(n.p,{children:["Labels ",(0,l.jsx)(n.strong,{children:"accepts only strings"})," or numbers unlike Mathematica, where you can put everything."]}),"\n",(0,l.jsxs)(n.p,{children:["Since it is translated into ",(0,l.jsx)(n.a,{href:"/wljs-docs/frontend/Reference/Graphics/Text",children:(0,l.jsx)(n.code,{children:"Text"})}),", one can use sort of TeX math input"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-mathematica",children:'Plot[PDF[NormalDistribution[0, 1], x], {x, -10, 10}, AxesLabel -> {"wavenumber (cm^{-1})", "absorption \\\\alpha"}, PlotRange->Full]\n'})}),"\n",(0,l.jsx)(i,{children:'Plot[PDF[NormalDistribution[0, 1], x], {x, -10, 10}, AxesLabel -> {"wavenumber (cm^{-1})", "absorption \\alpha"}, PlotRange->Full, ImageSize->500]'}),"\n",(0,l.jsx)(n.p,{children:"It also supports absolute positioning using offset"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-mathematica",children:'Plot[PDF[NormalDistribution[0, 1], x], {x, -10, 10}, AxesLabel -> {"wavenumber (cm^{-1})", {"absorption \\\\alpha", {112,0}}}, PlotRange->Full]\n'})}),"\n",(0,l.jsx)(n.h3,{id:"ticks",children:(0,l.jsx)(n.code,{children:"Ticks"})}),"\n",(0,l.jsx)(n.p,{children:"Customize ticks by providing an array of numbers for both axes"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-mathematica",children:"Plot[x, {x, 0, 1}, Ticks->{{0, 0.5, 1}, {}}]\n"})}),"\n",(0,l.jsx)(i,{children:"Plot[x, {x, 0, 1}, Ticks->{{0, 0.5, 1}, {}}, ImageSize->500]"}),"\n",(0,l.jsxs)(n.p,{children:["Or by providing as pairs ",(0,l.jsx)(n.code,{children:"{Number, String}"})," one can specify the displayed text"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-mathematica",children:'Plot[x, {x, 0, 1}, Ticks->{{{0, "Zero"}, {0.5, "Half"}, {1,"One"}}, {}}]\n'})}),"\n",(0,l.jsx)(i,{children:'Plot[x, {x, 0, 1}, Ticks->{{{0, "Zero"}, {0.5, "Half"}, {1,"One"}}, {}}, ImageSize->500]'}),"\n",(0,l.jsxs)(n.h3,{id:"controls-",children:[(0,l.jsx)(n.code,{children:"Controls"})," \ud83d\udc9b"]}),"\n",(0,l.jsxs)(n.p,{children:["This is more an option for ",(0,l.jsx)(n.a,{href:"/wljs-docs/frontend/Reference/Graphics/",children:"Graphics"}),", but with a bit of a hacking it can be used here as well. The features ",(0,l.jsx)(n.strong,{children:"allows to pan and zoom your plots"}),", that was never possible in Mathematica"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-mathematica",children:"Plot[Sin[1/x], {x, 0.001, 0.1}, MaxRecursion->1];\nInsert[%, Controls->True, {2,-1}]\n"})}),"\n",(0,l.jsx)(i,{children:"Insert[Plot[Sin[1/x], {x, 0.001, 0.1}, MaxRecursion->1, ImageSize->500], Controls->True, {2,-1}]"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.em,{children:"Try to use your mouse here"})}),"\n",(0,l.jsx)(n.h3,{id:"frame",children:(0,l.jsx)(n.code,{children:"Frame"})}),"\n",(0,l.jsx)(n.p,{children:"Turns plot into the journals-like styled graph. In general it has much more options to customize the look"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-mathematica",children:"Plot[x, {x, 0, 1}, Frame->True]\n"})}),"\n",(0,l.jsx)(i,{children:"Plot[x, {x, 0, 1}, Frame->True, ImageSize->500]"}),"\n",(0,l.jsx)(n.h4,{id:"frameticks",children:(0,l.jsx)(n.code,{children:"FrameTicks"})}),"\n",(0,l.jsxs)(n.p,{children:["The same as ",(0,l.jsx)(n.a,{href:"#%60Ticks%60",children:(0,l.jsx)(n.code,{children:"Ticks"})}),", but for this regime."]}),"\n",(0,l.jsx)(n.h4,{id:"framelabel",children:(0,l.jsx)(n.code,{children:"FrameLabel"})}),"\n",(0,l.jsxs)(n.p,{children:["The same as ",(0,l.jsx)(n.a,{href:"#%60AxesLabel%60",children:(0,l.jsx)(n.code,{children:"AxesLabel"})})]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-mathematica",children:'Plot[x, {x, 0, 1}, Frame->True, FrameLabel->{\n\t"x-axis", \n\t"y-axis"\n}]\n'})}),"\n",(0,l.jsx)(i,{children:'Plot[x, {x, 0, 1}, Frame->True, FrameLabel->{"x-axis", "y-axis"}, ImageSize->500]'}),"\n",(0,l.jsx)(n.p,{children:"one can specify an absolute offset for a label by wrapping it into a list"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-mathematica",children:'Plot[x, {x, 0, 1}, Frame->True, FrameLabel->{\n\t"x-axis", \n\t{"y-axis", {0,50}}\n}]\n'})}),"\n",(0,l.jsx)(n.h4,{id:"framestyle",children:(0,l.jsx)(n.code,{children:"FrameStyle"})}),"\n",(0,l.jsxs)(n.p,{children:["Affects the style of ",(0,l.jsx)(n.a,{href:"#%60FrameLabels%60",children:(0,l.jsx)(n.code,{children:"FrameLabels"})}),". Use ",(0,l.jsx)(n.code,{children:"Directive"})," for changing the style"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-mathematica",children:'Plot[x, {x, 0, 1}, Frame->True, FrameLabel->{"x-axis", "y-axis"}, FrameStyle->Directive[FontSize->16]]\n'})}),"\n",(0,l.jsx)(i,{children:'Plot[x, {x, 0, 1}, Frame->True, FrameLabel->{"x-axis", "y-axis"}, FrameStyle->Directive[FontSize->16], ImageSize->500]'}),"\n",(0,l.jsx)(n.h4,{id:"frameticksstyle",children:(0,l.jsx)(n.code,{children:"FrameTicksStyle"})}),"\n",(0,l.jsxs)(n.p,{children:["Affects the style of ",(0,l.jsx)(n.a,{href:"#%60FrameTicks%60",children:(0,l.jsx)(n.code,{children:"FrameTicks"})})]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-mathematica",children:'Plot[x, {x, 0, 1}, Frame->True, FrameLabel->{"x-axis", "y-axis"}, FrameTicksStyle->Directive[FontSize->16]]\n'})}),"\n",(0,l.jsx)(i,{children:'Plot[x, {x, 0, 1}, Frame->True, FrameLabel->{"x-axis", "y-axis"}, FrameTicksStyle->Directive[FontSize->16], ImageSize->500]'}),"\n",(0,l.jsx)(n.h4,{id:"ticklabels",children:(0,l.jsx)(n.code,{children:"TickLabels"})}),"\n",(0,l.jsx)(n.admonition,{type:"info",children:(0,l.jsxs)(n.p,{children:["Since ",(0,l.jsx)(n.code,{children:"Plot"})," options are hardcoded in WL core, we cannot add new options, however using trick with ",(0,l.jsx)(n.code,{children:"Insert"})," any values can be provided to the resulting ",(0,l.jsx)(n.code,{children:"Graphics"})," expression"]})}),"\n",(0,l.jsx)(n.p,{children:"To remove unnecessary ticks, use"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-mathematica",children:'Plot[x, {x, 0, 1}, Frame->True];\nInsert[%, "TickLabels"->{{True, False}, {True, False}}, {2,-1}]\n'})}),"\n",(0,l.jsx)(i,{children:'Insert[Plot[x, {x, 0, 1}, Frame->True, ImageSize->500], "TickLabels"->{{True, False}, {True, False}}, {2,-1}]'}),"\n",(0,l.jsx)(n.h3,{id:"clippingstyle",children:(0,l.jsx)(n.code,{children:"ClippingStyle"})}),"\n",(0,l.jsx)(n.p,{children:"Show the clipped regions like the rest of the curve and colored"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-mathematica",children:"Plot[Sin[x]/x^2, {x, -10, 10}, ClippingStyle -> Red]\n"})}),"\n",(0,l.jsx)(i,{children:"Plot[Sin[x]/x^2, {x, -10, 10}, ClippingStyle -> Red, ImageSize->500]"}),"\n",(0,l.jsx)(n.h3,{id:"filling",children:(0,l.jsx)(n.code,{children:"Filling"})}),"\n",(0,l.jsx)(n.p,{children:"Fill the area under, over of between curves"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-mathematica",children:"Plot[Evaluate[Table[BesselJ[n, x], {n, 4}]], {x, 0, 10}, Filling -> Axis]\n"})}),"\n",(0,l.jsx)(i,{children:"Plot[Evaluate[Table[BesselJ[n, x], {n, 4}]], {x, 0, 10}, Filling -> Axis, ImageSize->500]"}),"\n",(0,l.jsx)(n.p,{children:"Possible options will be"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"Bottom"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"Top"})}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"{1 -> {2}}"})," from curve 1 to 2"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"baseline",children:(0,l.jsx)(n.code,{children:"Baseline"})}),"\n",(0,l.jsxs)(n.p,{children:["Align graphs by the\xa0",(0,l.jsxs)(n.span,{className:"katex",children:[(0,l.jsx)(n.span,{className:"katex-mathml",children:(0,l.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(n.semantics,{children:[(0,l.jsx)(n.mrow,{children:(0,l.jsx)(n.mi,{children:"x"})}),(0,l.jsx)(n.annotation,{encoding:"application/x-tex",children:"x"})]})})}),(0,l.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(n.span,{className:"base",children:[(0,l.jsx)(n.span,{className:"strut",style:{height:"0.4306em"}}),(0,l.jsx)(n.span,{className:"mord mathnormal",children:"x"})]})})]}),"\xa0axis in each plot:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-mathematica",children:"{Plot[Im[Zeta[1/2 + I t]], {t, -20, 20}, BaselinePosition -> Axis], \n Plot[Re[Zeta[1/2 + I t]], {t, -20, 20}, BaselinePosition -> Axis]} // Row\n"})}),"\n",(0,l.jsx)(n.h3,{id:"epilog",children:(0,l.jsx)(n.code,{children:"Epilog"})}),"\n",(0,l.jsx)(n.p,{children:"Puts any graphics object on top of the data plotted"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-mathematica",children:"Plot[Sin[x], {x, 0, 2 Pi}, Epilog -> {PointSize[0.04], Point[{0, 0}], Point[{Pi, 0}], Point[{2 Pi, 0}]}]\n"})}),"\n",(0,l.jsx)(i,{children:"Plot[Sin[x], {x, 0, 2 Pi}, Epilog -> {PointSize[0.04], Point[{0, 0}], Point[{Pi, 0}], Point[{2 Pi, 0}]}, ImageSize->500]"}),"\n",(0,l.jsxs)(n.p,{children:["It opens up many possibilities, since it provides low-level access to the ",(0,l.jsx)(n.code,{children:"Graphics"})," canvas."]}),"\n",(0,l.jsx)(n.h3,{id:"prolog",children:(0,l.jsx)(n.code,{children:"Prolog"})}),"\n",(0,l.jsxs)(n.p,{children:["The same as ",(0,l.jsx)(n.a,{href:"#%60Epilog%60",children:(0,l.jsx)(n.code,{children:"Epilog"})}),", but acts before plotting the data."]}),"\n",(0,l.jsx)(n.h3,{id:"exclusionsstyle",children:(0,l.jsx)(n.code,{children:"ExclusionsStyle"})}),"\n",(0,l.jsx)(n.p,{children:"Use red lines to indicate the vertical asymptotes"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-mathematica",children:"Plot[Tan[x], {x, 0, 10}, Exclusions -> {Cos[x] == 0}, \n ExclusionsStyle -> Red]\n"})}),"\n",(0,l.jsx)(i,{children:"Plot[Tan[x], {x, 0, 10}, Exclusions -> {Cos[x] == 0}, \n ExclusionsStyle -> Red, ImageSize->500]"}),"\n",(0,l.jsx)(n.h3,{id:"imagesize",children:(0,l.jsx)(n.code,{children:"ImageSize"})}),"\n",(0,l.jsx)(n.p,{children:"A common option for any graphics"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-mathematica",children:"ImageSize -> Width\n"})}),"\n",(0,l.jsx)(n.p,{children:"or"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-mathematica",children:"ImageSize -> {Width, Height}\n"})}),"\n",(0,l.jsx)(n.p,{children:"It uses pixels as units"}),"\n",(0,l.jsx)(n.h3,{id:"maxreqursion",children:(0,l.jsx)(n.code,{children:"MaxReqursion"})}),"\n",(0,l.jsx)(n.p,{children:"Affects the accuracy of the plot when it comes to the sudden changes of a sampled function"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-mathematica",children:"Plot[Sin[1/x], {x, 0.001, 0.1}, MaxRecursion->1]\n"})}),"\n",(0,l.jsx)(i,{children:"Plot[Sin[1/x], {x, 0.001, 0.1}, MaxRecursion->1, ImageSize->500]"}),"\n",(0,l.jsxs)(n.p,{children:["The lowest values is ",(0,l.jsx)(n.code,{children:"0"})]}),"\n",(0,l.jsx)(n.h3,{id:"mesh",children:(0,l.jsx)(n.code,{children:"Mesh"})}),"\n",(0,l.jsx)(n.p,{children:"Shows sampling points"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-mathematica",children:"Plot[Sin[1/x], {x, 0.001, 0.1}, Mesh -> All]\n"})}),"\n",(0,l.jsx)(i,{children:"Plot[Sin[1/x], {x, 0.001, 0.1}, Mesh -> All, MaxRecursion->1, ImageSize->500]"}),"\n",(0,l.jsx)(n.h3,{id:"peformancegoal",children:(0,l.jsx)(n.code,{children:"PeformanceGoal"})}),"\n",(0,l.jsx)(n.p,{children:"Affects the number of sampling points to reduce the load"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:'"Speed"'})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:'"Quality"'})}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"plotpoints",children:(0,l.jsx)(n.code,{children:"PlotPoints"})}),"\n",(0,l.jsx)(n.p,{children:"Change the initial sampling points"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"a number"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"plotlegends",children:(0,l.jsx)(n.code,{children:"PlotLegends"})}),"\n",(0,l.jsxs)(n.p,{children:["Is quite limited. Accepts ",(0,l.jsx)(n.code,{children:"Automatic"}),", ",(0,l.jsx)(n.code,{children:'"Expressions"'})," or ",(0,l.jsx)(n.code,{children:"List"})," of expressions to show"]}),"\n",(0,l.jsx)(n.h3,{id:"plotrange",children:(0,l.jsx)(n.code,{children:"PlotRange"})}),"\n",(0,l.jsx)(n.p,{children:"Change the lot range to show the whole area"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-mathematica",children:"Plot[Sqrt[x], {x, -5, 5}, PlotRange -> Full]\n"})}),"\n",(0,l.jsx)(i,{children:"Plot[Sqrt[x], {x, -5, 5}, PlotRange -> Full, MaxRecursion->0,ImageSize->500]"}),"\n",(0,l.jsx)(n.p,{children:"Or a custom range"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-mathematica",children:"Plot[Sqrt[x], {x, -5, 5}, PlotRange -> {{-5,5}, {0,1}}]\n"})}),"\n",(0,l.jsx)(i,{children:"Plot[Sqrt[x], {x, -5, 5}, PlotRange -> {{-5,5}, {0,1}}, MaxRecursion->0,ImageSize->500]"}),"\n",(0,l.jsx)(n.h3,{id:"regionfunction",children:(0,l.jsx)(n.code,{children:"RegionFunction"})}),"\n",(0,l.jsx)(n.p,{children:"Show the specific area only"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-mathematica",children:"Plot[Sin[x], {x, 0, 8 Pi}, RegionFunction -> Function[{x, y}, Abs[y] > 0.5]]\n"})}),"\n",(0,l.jsx)(i,{children:"Plot[Sin[x], {x, 0, 8 Pi}, \n RegionFunction -> Function[{x, y}, Abs[y] > 0.5], ImageSize->500, MaxRecursion->0]"}),"\n",(0,l.jsx)(n.h3,{id:"axes",children:(0,l.jsx)(n.code,{children:"Axes"})}),"\n",(0,l.jsx)(n.admonition,{type:"caution",children:(0,l.jsxs)(n.p,{children:["Currently is not supported by ",(0,l.jsx)(n.a,{href:"/wljs-docs/frontend/Reference/Graphics/",children:"Graphics"})," ;("]})}),"\n",(0,l.jsx)(n.p,{children:"Show or hide axes of the plot"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-mathematica",children:"Plot[Sinc[x], {x, 0, 10}, Axes -> False]\n"})}),"\n",(0,l.jsx)(n.h2,{id:"dynamics",children:"Dynamics"}),"\n",(0,l.jsxs)(n.p,{children:["Consider to use ",(0,l.jsx)(n.a,{href:"/wljs-docs/frontend/Reference/Plotting%20Functions/ManipulatePlot",children:"ManipulatePlot"})," for manipulating parameters of a function in real time"]})]})}function x(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},4552:(e,n,i)=>{i.d(n,{I:()=>o,M:()=>c});var l=i(11504);const s={},a=l.createContext(s);function c(e){const n=l.useContext(a);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),l.createElement(a.Provider,{value:n},e.children)}}}]);