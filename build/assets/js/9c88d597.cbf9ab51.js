"use strict";(self.webpackChunkwlx_docs=self.webpackChunkwlx_docs||[]).push([[26400],{39344:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var o=r(17624),t=r(4552);const i={env:["Wolfram Kernel"],package:"wljs-editor",context:"Notebook`Editor`Kernel`FrontProxy`"},s=void 0,a={id:"frontend/Reference/Frontend IO/FrontProxy",title:"FrontProxy",description:"Experimental feature. API might be changed in the future",source:"@site/docs/frontend/Reference/Frontend IO/FrontProxy.md",sourceDirName:"frontend/Reference/Frontend IO",slug:"/frontend/Reference/Frontend IO/FrontProxy",permalink:"/wljs-docs/frontend/Reference/Frontend IO/FrontProxy",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1736412817e3,frontMatter:{env:["Wolfram Kernel"],package:"wljs-editor",context:"Notebook`Editor`Kernel`FrontProxy`"},sidebar:"tutorialSidebar",previous:{title:"FrontInstanceReference",permalink:"/wljs-docs/frontend/Reference/Frontend IO/FrontInstanceReference"},next:{title:"FrontSubmit",permalink:"/wljs-docs/frontend/Reference/Frontend IO/FrontSubmit"}},c={},d=[{value:"Constructor",id:"constructor",level:2},{value:"Instancing",id:"instancing",level:2},{value:"As an object",id:"as-an-object",level:3},{value:"Methods",id:"methods",level:4},{value:"<code>Show</code>",id:"show",level:5},{value:"<code>Delete</code>",id:"delete",level:5},{value:"<code>FrontProxyGet</code>",id:"frontproxyget",level:5},{value:"<code>FrontProxySet</code>",id:"frontproxyset",level:5},{value:"As a batch",id:"as-a-batch",level:3},{value:"Methods",id:"methods-1",level:4},{value:"<code>FrontProxyObject</code>",id:"frontproxyobject",level:6},{value:"<code>FrontProxyShow</code>",id:"frontproxyshow",level:6},{value:"<code>FrontProxyRemove</code>",id:"frontproxyremove",level:6},{value:"Common methods",id:"common-methods",level:2},{value:"<code>FrontProxyDispatch</code>",id:"frontproxydispatch",level:3},{value:"<code>FrontProxyBuffer</code>",id:"frontproxybuffer",level:3},{value:"<code>FrontProxyBufferSet</code>",id:"frontproxybufferset",level:3},{value:"Tips",id:"tips",level:2},{value:"Examples",id:"examples",level:2},{value:"Spherical attracting molecules",id:"spherical-attracting-molecules",level:3},{value:"Fireworks",id:"fireworks",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",img:"img",p:"p",pre:"pre",strong:"strong",...(0,t.M)(),...e.components},{CodeMirror:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("CodeMirror",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.admonition,{type:"warning",children:(0,o.jsx)(n.p,{children:"Experimental feature. API might be changed in the future"})}),"\n",(0,o.jsxs)(n.p,{children:["A OOP-like abstraction for managing and manipulating graphical or any dynamic ",(0,o.jsx)(n.a,{href:"/wljs-docs/frontend/Advanced/Frontend%20interpretation/WLJS%20Functions",children:"frontend instances"})," efficiently and process them in batch. The idea is to use proxy objects as lightweight references to groups of instances (like rectangles, circles combined with other primitives) in a larger scene."]}),"\n",(0,o.jsx)(n.p,{children:"All properties of proxies are stored in linear auto-sizable buffers, which allows JIT-enabled processing and easy sync with a frontend (single transaction)."}),"\n",(0,o.jsx)(n.h2,{id:"constructor",children:"Constructor"}),"\n",(0,o.jsx)(n.p,{children:"Creates a new proxy type"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-mathematica",children:"FrontProxy[{properties__}, body_] _FrontProxyFunction\n"})}),"\n",(0,o.jsx)(n.p,{children:"or if you want to specify mutable properties explicitly"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-mathematica",children:"FrontProxy[{properties__}, body_, {mutable__}] _FrontProxyFunction\n"})}),"\n",(0,o.jsxs)(n.p,{children:["For example to make proxy for many ",(0,o.jsx)(n.a,{href:"/wljs-docs/frontend/Reference/Graphics/Disk",children:"Disk"}),"s with controllable opacity, color and position"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-mathematica",children:"disk = FrontProxy[{pos, c}, {\n\tOpacity[c], RGBColor[With[{h=c}, {h, 1-h, 0.}]],\n    Disk[pos, 0.1]\n}];\n"})}),"\n",(0,o.jsx)(n.h2,{id:"instancing",children:"Instancing"}),"\n",(0,o.jsxs)(n.p,{children:["After creating a ",(0,o.jsx)(n.code,{children:"FrontProxyFunction"})," you can start to create your proxies. There are two ways on how to do that"]}),"\n",(0,o.jsx)(n.h3,{id:"as-an-object",children:"As an object"}),"\n",(0,o.jsxs)(n.p,{children:["This is more user-friendly approach, you can directly use ",(0,o.jsx)(n.code,{children:"FrontProxyFunction"})," and provide arguments as down-values"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-mathematica",children:"_FrontProxyFunction [args__] _FrontProxyObject\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Each argument from ",(0,o.jsx)(n.code,{children:"args"})," will be assigned to the defined ",(0,o.jsx)(n.code,{children:"properties__"})," in the same order as they appears in the constructor."]}),"\n",(0,o.jsx)(n.p,{children:"For example"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-mathematica",children:"disks = Table[disk[RandomReal[{-1,1}, 2], 0.2], {10}]\n"})}),"\n",(0,o.jsx)(n.p,{children:"this line will create 10 random disks proxies."}),"\n",(0,o.jsx)(n.h4,{id:"methods",children:"Methods"}),"\n",(0,o.jsx)(n.p,{children:"With those object you can do following things"}),"\n",(0,o.jsx)(n.h5,{id:"show",children:(0,o.jsx)(n.code,{children:"Show"})}),"\n",(0,o.jsx)(n.p,{children:"Reveals the structure of the instance behind the proxy"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-mathematica",children:"Show[__FrontProxyObject] _List\n"})}),"\n",(0,o.jsxs)(n.p,{children:["It is usually used to dynamically add new objects on the graphical scene using ",(0,o.jsx)(n.a,{href:"/wljs-docs/frontend/Reference/Frontend%20IO/FrontSubmit",children:"FrontSubmit"})," or statically place inside ",(0,o.jsx)(n.a,{href:"/wljs-docs/frontend/Reference/Graphics/",children:"Graphics"})," or ",(0,o.jsx)(n.a,{href:"/wljs-docs/frontend/Reference/Graphics3D/",children:"Graphics3D"}),"."]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["It wraps the whole body into ",(0,o.jsx)(n.a,{href:"/wljs-docs/frontend/Reference/Interpreter/Offload",children:"Offload"})," to force the execution on the frontned"]})}),"\n",(0,o.jsxs)(n.p,{children:["For example using predefined ",(0,o.jsx)(n.code,{children:"disk"})," structure"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-mathematica",children:"Show @@ disks\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-mathematica",metastring:'title="output"',children:"{FrontInstanceGroup[7808824509103943983,Offload[{Opacity[c$268241[[1]]],RGBColor[{c$268241[[1]],1-c$268241[[1]],0.`}]}]],FrontInstanceGroup[5182874663715795086,Offload[{Opacity[c$268241[[2]]],RGBColor[{c$268241[[2]],1-c$268241[[2]],0.`}]}]],\n...\n"})}),"\n",(0,o.jsx)(n.p,{children:"One can add them to the graphics scene basically by placing them directly there"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-mathematica",children:"Graphics[{\n\tShow @@ disks\n}, PlotRange->{{-1,1}, {-1,1}}]\n"})}),"\n",(0,o.jsxs)(n.p,{children:["or dynamically using ",(0,o.jsx)(n.a,{href:"/wljs-docs/frontend/Reference/Frontend%20IO/FrontSubmit",children:"FrontSubmit"})," and ",(0,o.jsx)(n.a,{href:"/wljs-docs/frontend/Reference/Frontend%20IO/FrontInstanceReference",children:"FrontInstanceReference"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-mathematica",children:"scene = FrontInstanceReference[];\nGraphics[{scene}, PlotRange->{{-1,1}, {-1,1}}]\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-mathematica",children:"FrontSubmit[Show @@ disks, scene];\n"})}),"\n",(0,o.jsx)(n.h5,{id:"delete",children:(0,o.jsx)(n.code,{children:"Delete"})}),"\n",(0,o.jsxs)(n.p,{children:["Dynamically removes an ",(0,o.jsx)(n.code,{children:"FrontProxyObject"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-mathematica",children:"Delete[__FrontProxyObject]\n"})}),"\n",(0,o.jsx)(n.p,{children:"For example if you placed some disks early on the scene, you can remove by directly calling at any place"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-mathematica",children:"Delete @@ disks\n"})}),"\n",(0,o.jsx)(n.h5,{id:"frontproxyget",children:(0,o.jsx)(n.code,{children:"FrontProxyGet"})}),"\n",(0,o.jsx)(n.p,{children:"Gets all properties as a list of the individual instance"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-mathematica",children:"FrontProxyGet[_FrontProxyObject] _List\n"})}),"\n",(0,o.jsx)(n.p,{children:"The order is the same as presented in constructor."}),"\n",(0,o.jsx)(n.h5,{id:"frontproxyset",children:(0,o.jsx)(n.code,{children:"FrontProxySet"})}),"\n",(0,o.jsx)(n.p,{children:"Sets properties of the individual instance"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-mathematica",children:"FrontProxySet[_FrontProxyObject, values_List]\n"})}),"\n",(0,o.jsx)(n.h3,{id:"as-a-batch",children:"As a batch"}),"\n",(0,o.jsx)(n.p,{children:"A handy object-like representation might be slow, when it comes to creating many instances or removing them. To construct multiple instances use"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-mathematica",children:"FrontProxyAdd[_FrontProxyFunction, args__List] _List\n"})}),"\n",(0,o.jsxs)(n.p,{children:["as a result it returns ",(0,o.jsxs)(n.strong,{children:["a plain ",(0,o.jsx)(n.code,{children:"List"})," of integers corresponding to the internal ",(0,o.jsx)(n.code,{children:"Ids"})]})]}),"\n",(0,o.jsx)(n.h4,{id:"methods-1",children:"Methods"}),"\n",(0,o.jsx)(n.p,{children:"The following methods can be applied"}),"\n",(0,o.jsx)(n.h6,{id:"frontproxyobject",children:(0,o.jsx)(n.code,{children:"FrontProxyObject"})}),"\n",(0,o.jsxs)(n.p,{children:["Converts a pair of the internal ",(0,o.jsx)(n.code,{children:"Id"})," and ",(0,o.jsx)(n.code,{children:"FrontProxyFunction"})," to ",(0,o.jsx)(n.code,{children:"FrontProxyObject"})," to be used in ",(0,o.jsx)(n.a,{href:"#As%20object",children:"As object"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-mathematica",children:"FrontProxyObject[_FrontProxyFunction, Id_Integer] _FrontProxyObject\n"})}),"\n",(0,o.jsx)(n.h6,{id:"frontproxyshow",children:(0,o.jsx)(n.code,{children:"FrontProxyShow"})}),"\n",(0,o.jsx)(n.p,{children:"Reveals the structure of the instance behind the proxy"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-mathematica",children:"FrontProxyShow[_FrontProxyFunction, Id_Integer] _\n"})}),"\n",(0,o.jsx)(n.p,{children:"or for a list of proxies ids"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-mathematica",children:"FrontProxyShow[_FrontProxyFunction, {Id__Integer}] _\n"})}),"\n",(0,o.jsx)(n.h6,{id:"frontproxyremove",children:(0,o.jsx)(n.code,{children:"FrontProxyRemove"})}),"\n",(0,o.jsx)(n.p,{children:"Removes the given proxy or list of proxies by provided Ids"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-mathematica",children:"FrontProxyRemove[_FrontProxyFunction, Id_Integer]\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-mathematica",children:"FrontProxyRemove[_FrontProxyFunction, {Id__Integer}]\n"})}),"\n",(0,o.jsx)(n.h2,{id:"common-methods",children:"Common methods"}),"\n",(0,o.jsxs)(n.p,{children:["There is a few general methods for ",(0,o.jsx)(n.code,{children:"_FrontProxyFunction"})]}),"\n",(0,o.jsx)(n.h3,{id:"frontproxydispatch",children:(0,o.jsx)(n.code,{children:"FrontProxyDispatch"})}),"\n",(0,o.jsx)(n.p,{children:"Dispatches the changes made to the properties of proxies"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-mathematica",children:"FrontProxyDispatch[_FrontProxyFunction]\n"})}),"\n",(0,o.jsx)(n.p,{children:"It is called usually when all calculations have been finished and an update is needed to see the changes. Behind the scenes it submits all buffers storing the properties of object to the frontend."}),"\n",(0,o.jsx)(n.p,{children:"For example, after we applied changes to our proxies properties we can dispatch them to the frontend to see changes immediately"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-mathematica",children:"Do[\n\tModule[{pos, c},\n\t\t{pos, c} = FrontProxyGet[i];\n\t\tFrontProxySet[i, {0.9 pos, c + 0.1}];\n\t]\n, {i, disks}];\n\nFrontProxyDispatch[disk];\n"})}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["For the performance reasons, we recommend to avoid atomic operations like ",(0,o.jsx)(n.code,{children:"FrontProxySet/Get"})," and rely on buffers (see below)"]})}),"\n",(0,o.jsx)(n.h3,{id:"frontproxybuffer",children:(0,o.jsx)(n.code,{children:"FrontProxyBuffer"})}),"\n",(0,o.jsx)(n.p,{children:"Provides a read access to the slice of a given property of all proxies in a form if linear packed array"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-mathematica",children:"FrontProxyBuffer[_FrontProxyFunction, index_Integer] _List\n"})}),"\n",(0,o.jsxs)(n.p,{children:["where ",(0,o.jsx)(n.code,{children:"index"})," goes from the first property provided in ",(0,o.jsx)(n.a,{href:"#Constructor",children:"Constructor"})," to the last. There is a special case"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-mathematica",children:"FrontProxyBuffer[_FrontProxyFunction, -1] _List\n"})}),"\n",(0,o.jsxs)(n.p,{children:["which ",(0,o.jsx)(n.strong,{children:"returns a boolean array standing for the validity of the property at the given position"}),'. Since proxies are dynamic and can be created or removed any time it might temporary lead to "holes" in buffers marked as ',(0,o.jsx)(n.code,{children:"False"})," in the list."]}),"\n",(0,o.jsxs)(n.p,{children:["Each position in buffers does correspond to ",(0,o.jsx)(n.code,{children:"Id"})," used by proxy in ",(0,o.jsx)(n.a,{href:"#As%20a%20batch",children:"As a batch"})," methods."]}),"\n",(0,o.jsx)(n.h3,{id:"frontproxybufferset",children:(0,o.jsx)(n.code,{children:"FrontProxyBufferSet"})}),"\n",(0,o.jsx)(n.p,{children:"Updates a given property buffer with a new array"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-mathematica",children:"FrontProxyBuffer[_FrontProxyFunction, index_Integer, new_List]\n"})}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["It does not have an effect of ",(0,o.jsx)(n.a,{href:"#%60FrontProxyDispatch%60",children:(0,o.jsx)(n.code,{children:"FrontProxyDispatch"})}),". You will need to call it separately after you have finished all changes with buffers."]})}),"\n",(0,o.jsxs)(n.p,{children:["For example one can update ",(0,o.jsx)(n.code,{children:"disks"})," primitives in the following way"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-mathematica",children:"  With[{\n    position = FrontProxyBuffer[disk, 1]\n  },\n    With[{velocity = Map[Total] @ Table[potential[a,b], {a, position}, {b, position}]},\n    \n    FrontProxyBufferSet[disk, 1, position - 0.001 velocity];\n    FrontProxyDispatch[disk];\n    ];\n  ];\n"})}),"\n",(0,o.jsx)(n.h2,{id:"tips",children:"Tips"}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["If you dynamically add proxies to the scene. Call ",(0,o.jsx)(n.a,{href:"#%60FrontProxyDispatch%60",children:(0,o.jsx)(n.code,{children:"FrontProxyDispatch"})})," before submitting it to a scene. This will make sure, that the buffer size is up-to date on the frontend as well."]})}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["For fast animations with many proxies involved turn off transition interpolation globally on ",(0,o.jsx)(n.a,{href:"/wljs-docs/frontend/Reference/Graphics/",children:"Graphics"})," using an option ",(0,o.jsx)(n.a,{href:"/wljs-docs/frontend/Reference/Graphics/#%60TransitionType%60",children:(0,o.jsx)(n.code,{children:"TransitionType"})})," set to ",(0,o.jsx)(n.code,{children:"None"}),"."]})}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["For processing many proxies use ",(0,o.jsx)(n.a,{href:"#As%20a%20batch",children:"batch"})," approach and pure functions with ",(0,o.jsx)(n.code,{children:"Map"}),", ",(0,o.jsx)(n.code,{children:"Table"})," or ",(0,o.jsx)(n.code,{children:"MapThread"})," and etc. Multiple passes using less complicated function cost less, than a single pass with one complex."]})}),"\n",(0,o.jsxs)(n.admonition,{type:"tip",children:[(0,o.jsxs)(n.p,{children:["If you animate multiple properties of the same primitive to avoid unnecessary update calls on the frontend use ",(0,o.jsx)(n.a,{href:"/wljs-docs/frontend/Reference/Interpreter/Offload",children:"Offload"})," with ",(0,o.jsx)(n.code,{children:'"Static"'})," option, i.e."]}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-mathematica",children:'FrontProxy[{pos, radius}, Disk[pos, Offload[radius, "Static"->True]]]\n'})}),(0,o.jsx)(n.p,{children:"uses 1 repaint cycles, while"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-mathematica",children:"FrontProxy[{pos, radius}, Disk[pos, radius]]\n"})})]}),"\n",(0,o.jsx)(n.p,{children:"uses 2 \ud83d\udc4e"}),"\n",(0,o.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(n.h3,{id:"spherical-attracting-molecules",children:"Spherical attracting molecules"}),"\n",(0,o.jsxs)(n.p,{children:["Here we will use Lennard-Jones potential to model a bunch of sphere-like molecules on 2D canvas aka ",(0,o.jsx)(n.a,{href:"/wljs-docs/frontend/Reference/Graphics/",children:"Graphics"})]}),"\n",(0,o.jsx)(i,{children:'disk = FrontProxy[{pos, c}, {\n\tOpacity[0.2], RGBColor[With[{h=c}, {h, 1-h, 0.}]],\n    Disk[pos, 0.1]\n}];\n\ndisks = Table[disk[RandomReal[{-1,1}, 2], 0.2], {10}];\n\nanimation = CreateUUID[];\nscene = FrontInstanceReference[];\n\ntrigger = 1;\n\npotential = Function[{a,b}, With[{r = Norm[a-b]+0.01, r0 = 0.22},\n  With[{c = (*FB[*)((3.0 ((*SpB[*)Power[r0(*|*),(*|*)6](*]SpB*)))(*,*)/(*,*)((*SpB[*)Power[r(*|*),(*|*)8](*]SpB*)))(*]FB*)-(*FB[*)((3.0 ((*SpB[*)Power[r0(*|*),(*|*)12](*]SpB*)))(*,*)/(*,*)((*SpB[*)Power[r(*|*),(*|*)14](*]SpB*)))(*]FB*)},\n    If[Abs[c] > 100.0, {0.,0.}, (a-b) c]\n  ]\n]];\n\nEventHandler[animation, Function[Null,\n  With[{\n    position = FrontProxyBuffer[disk, 1],\n    state    = FrontProxyBuffer[disk, 2]\n  },\n    With[{velocity = Map[Total] @ Table[potential[a,b], {a, position}, {b, position}]},\n      With[{\n        character = Map[Clip[5.0 Norm[#], {0.2, 0.8}]&, velocity]\n      },\n        FrontProxyBufferSet[disk, 1, position - 0.001 velocity];\n        FrontProxyBufferSet[disk, 2, character];\n\n        FrontProxyDispatch[disk];\n      ];\n    ];\n  ];\n\n  trigger = 1;\n]];\n\nadd = With[{new = disk[#, 0.2]},\n  FrontProxyDispatch[disk];\n  FrontSubmit[new // Show, scene];\n]&;\n\nGraphics[{\n  Show @@ disks, scene,\n  AnimationFrameListener[trigger // Offload, "Event"->animation],\n  EventHandler[Graphics`Canvas[], {"click" -> add}]\n}, PlotRange->{{-1,1}, {-1,1}}, TransitionType->None]'}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:r(36156).c+"",width:"600",height:"403"})}),"\n",(0,o.jsx)(n.h3,{id:"fireworks",children:"Fireworks"}),"\n",(0,o.jsx)(n.p,{children:"A crash test for the frontend system"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-mathematica",children:'(* Define the rectangle proxy with initial properties *)\nrectangleProxy = FrontProxy[\n  {position, velocity, rotationAngle, lifeSpan}, \n  Translate[\n    {Opacity[lifeSpan], RGBColor[With[{l = lifeSpan}, {l, 0, 1 - l}]], Rectangle[{-1, -1}, {1, 1}]}, \n    position\n  ]\n];\n\n(* Initialize variables *)\nnewProxies = {};\nexpiredProxies = {};\nframeCounter = 1;\nframeRate = 1;\nlastUpdateTime = AbsoluteTime[];\n\nsceneReference = FrontInstanceReference[];\n\n(* Function to add new proxies at a given position *)\naddProxyAtPosition[position_] := newProxies = {\n  newProxies, \n  FrontProxyAdd[\n    rectangleProxy, \n    Sequence @@ Table[\n      {position, RandomReal[{0.2, 1.8}] {Cos[angle], Sin[angle]} // N, RandomReal[{0, 3.14}], 1.0},\n      {angle, 0., 2 Pi, 2 Pi / 12.0}\n    ]\n  ]\n};\n\n(* Frame update logic *)\nModule[{},\n  EventHandler["frame", Function[Null,\n    With[{\n      positions = FrontProxyBuffer[rectangleProxy, 1],\n      velocities = FrontProxyBuffer[rectangleProxy, 2],\n      lifeSpans = FrontProxyBuffer[rectangleProxy, 4],\n      isValid = FrontProxyBuffer[rectangleProxy, -1]\n    },\n      (* Identify expired proxies for disposal *)\n      expiredProxies = MapThread[\n        If[#1 && #2 < 0.2, #3, Nothing] &, \n        {isValid, lifeSpans, Range[Length[lifeSpans]]}\n      ];\n      \n      (* Update positions and life spans *)\n      FrontProxyBufferSet[rectangleProxy, 1, positions + velocities];\n      FrontProxyBufferSet[rectangleProxy, 4, lifeSpans * 0.95];\n    ];\n\n    (* Dispatch updates to proxies *)\n    FrontProxyDispatch[rectangleProxy];\n\n    (* Remove expired proxies *)\n    If[Length[expiredProxies] > 0,\n      FrontProxyRemove[rectangleProxy, expiredProxies];\n      expiredProxies = {};\n    ];\n\n    (* Submit new proxies *)\n    If[Length[newProxies] > 0, \n      FrontSubmit[FrontProxyShow[rectangleProxy, newProxies // Flatten], sceneReference];\n      newProxies = {};\n    ];\n\n    (* Update FPS counter *)\n    With[{currentTime = AbsoluteTime[]},\n      If[currentTime - lastUpdateTime > 1.0,\n        frameRate = Round[(frameCounter + frameRate) / 2.0];\n        frameCounter = 1;\n        lastUpdateTime = currentTime;\n      ,\n        frameCounter++;\n      ];\n    ];\n  ]]\n];\n\n(* Create the graphics and event handlers *)\nGraphics[\n  {\n    sceneReference, \n    {Directive[FontSize -> 20], Text[frameRate // Offload, {-80, -80}]}, \n    AnimationFrameListener[frameCounter // Offload, "Event" -> "frame"], \n    EventHandler[\n      Graphics`Canvas[], \n      {"mousemove" -> addProxyAtPosition}\n    ]\n  }, \n  PlotRange -> {{-100, 100}, {-100, 100}}, \n  TransitionType -> None\n]\n'})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:r(70984).c+"",width:"600",height:"503"})})]})}function h(e={}){const{wrapper:n}={...(0,t.M)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},70984:(e,n,r)=>{r.d(n,{c:()=>o});const o=r.p+"assets/images/fire-ezgif.com-video-to-gif-converter-a8da107d1d515c144dab68b80d544d98.gif"},36156:(e,n,r)=>{r.d(n,{c:()=>o});const o=r.p+"assets/images/lenard-ezgif.com-video-to-gif-converter-4ef3fc217a88f298e880dfef39f7dd05.gif"},4552:(e,n,r)=>{r.d(n,{I:()=>a,M:()=>s});var o=r(11504);const t={},i=o.createContext(t);function s(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);