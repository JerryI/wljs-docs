"use strict";(self.webpackChunkwlx_docs=self.webpackChunkwlx_docs||[]).push([[33500],{21236:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>l,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var a=t(17624),s=t(4552);const i={sidebar_position:1},c="1. Creating new type",r={id:"frontend/Advanced/Objects/Creating new type",title:"1. Creating new type",description:"OOP elements fit Wolfram Language very nicely if you thing about in more general sense as an abstract isolated entities of something which can communicate with each other using messages and have their own internal states.",source:"@site/docs/frontend/Advanced/Objects/Creating new type.md",sourceDirName:"frontend/Advanced/Objects",slug:"/frontend/Advanced/Objects/Creating new type",permalink:"/wljs-docs/frontend/Advanced/Objects/Creating new type",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1714593606e3,sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Shared libraries",permalink:"/wljs-docs/frontend/Advanced/Javascript/Shared libraries"},next:{title:"2. Static decorations",permalink:"/wljs-docs/frontend/Advanced/Objects/Static decorations"}},o={},d=[{value:"Properties and methods",id:"properties-and-methods",level:2},{value:"Event system",id:"event-system",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",...(0,s.M)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"1-creating-new-type",children:"1. Creating new type"}),"\n",(0,a.jsx)(n.p,{children:"OOP elements fit Wolfram Language very nicely if you thing about in more general sense as an abstract isolated entities of something which can communicate with each other using messages and have their own internal states."}),"\n",(0,a.jsx)(n.h2,{id:"properties-and-methods",children:"Properties and methods"}),"\n",(0,a.jsxs)(n.p,{children:["Let it be an object with a single field default ",(0,a.jsx)(n.code,{children:'"State"'})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-mathematica",children:'CreateType[StateMachine, init, {"State"->1}]\ninit[o_] := o["UId"] = CreateUUID[];\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Here we also assigned a unique text ID to it for the future using ",(0,a.jsx)(n.strong,{children:"constructor function"})," ",(0,a.jsx)(n.code,{children:"init"}),". By calling now ",(0,a.jsx)(n.code,{children:"StateMachine"})," we ",(0,a.jsx)(n.em,{children:"create an instance of this type"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-mathematica",children:"machine = StateMachine[]\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:t(46172).c+"",width:"2166",height:"146"})}),"\n",(0,a.jsxs)(n.p,{children:["Think about it if it as an ",(0,a.jsx)(n.code,{children:"Association"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["One can assign any properties, but ",(0,a.jsxs)(n.strong,{children:["just be aware that ",(0,a.jsx)(n.code,{children:"Set"})," has ",(0,a.jsx)(n.code,{children:"HoldFirst"})," attribute and set any properties using"]})," ",(0,a.jsx)(n.code,{children:"With"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-mathematica",children:'With[{o = machine},\n\to["State"] = 33\n]\n'})}),"\n",(0,a.jsx)(n.p,{children:"One can also see all properties using a special key"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-mathematica",children:'machine["Properties"]\n'})}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:["See the full guide from Kirill Belov on ",(0,a.jsx)(n.em,{children:"Objects"})," core package at ",(0,a.jsx)(n.a,{href:"https://community.wolfram.com/groups/-/m/t/3092778",children:"Wolfam Community"})]})}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["There is no need in installing ",(0,a.jsx)(n.em,{children:"Objects"})," paclet. This is already a part of WLJS Notebook Kernel"]})}),"\n",(0,a.jsxs)(n.p,{children:["Time to define sort of ",(0,a.jsx)(n.em,{children:"methods"})," of created types. It is based solely on ",(0,a.jsx)(n.code,{children:"TagSet"})," technique widely used in Wolfram Language"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-mathematica",children:'StateMachine /: StateMachineChange[s_StateMachine, state_Integer] := With[{},\n  s["State"] = state;\n  s\n]\n\nStateMachine /: Delete[s_StateMachine] := With[{},\n  DeleteObject[s]\n]\n'})}),"\n",(0,a.jsx)(n.p,{children:"then to update the state we only need to call this on our object instance"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-mathematica",children:'StateMachineChange[machine, 1];\nmachine["State"]\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-mathematica",children:"1\n"})}),"\n",(0,a.jsx)(n.p,{children:"In a case if you want an experience close to traditional OOP, one can utilize contexts"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-mathematica",children:'StateMachine /: StateMachine`Change[s_StateMachine, state_Integer] := With[{},\n  s["State"] = state;\n  s\n]\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-mathematica",children:'StateMachine`Change[machine, 1];\nmachine["State"]\n'})}),"\n",(0,a.jsx)(n.h2,{id:"event-system",children:"Event system"}),"\n",(0,a.jsxs)(n.p,{children:["Subscription / published model is quite often applied to objects in OOP. Moreover this comes handy when we need to perform asynchronous tasks and needles to say it plays a great role in communicating between different objects. Here we will integrate it with ",(0,a.jsx)(n.a,{href:"/wljs-docs/frontend/Reference/Misc/Events",children:"Events"})," system we built."]}),"\n",(0,a.jsxs)(n.p,{children:["Firstly, since ",(0,a.jsx)(n.a,{href:"/wljs-docs/frontend/Reference/Misc/Events",children:"Events"})," uses mostly text-strings as an identifiers for event objects, we rely on ",(0,a.jsx)(n.code,{children:'"UId"'})," field generated in a constructor function"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-mathematica",children:'StateMachine /: EventFire[s_StateMachine, opts__] := EventFire[s["UId"], opts]\n\nStateMachine /: EventHandler[s_StateMachine, opts__] := EventHandler[s["UId"], opts]\n\nStateMachine /: EventClone[s_StateMachine] := EventClone[s["UId"]]\nStateMachine /: EventRemove[s_StateMachine] := EventRemove[s["UId"]]\n'})}),"\n",(0,a.jsx)(n.p,{children:"To notify all subscribers we need to modify our method of settings the state"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-mathematica",children:'StateMachine /: StateMachineChange[s_StateMachine, state_Integer] := With[{},\n  s["State"] = state;\n  EventFire[s, "State", state]; (* THIS LINE *)\n  s\n]\n\nStateMachine /: Delete[s_StateMachine] := With[{},\n  EventFire[s, "Destroy", Null];\n  DeleteObject[s]\n]\n'})}),"\n",(0,a.jsx)(n.p,{children:"Let us check how it works!"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-mathematica",children:"machine = StateMachine[];\nEventHandler[StateMachine, Beep]; (* make sound *)\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-mathematica",children:"StateMachineChange[machine, RandomInteger[{1,10}]];\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Every time you change the state ",(0,a.jsx)(n.em,{children:"it will make sound"}),"."]}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:["See more about event system ",(0,a.jsx)(n.a,{href:"/wljs-docs/frontend/Reference/Misc/Events",children:"here"})]})}),"\n",(0,a.jsx)(n.p,{children:"One can also subscribe to a particular pattern or topic"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-mathematica",children:'EventHandler[StateMachine, {\n\t"State" -> Function[state, Print[state]]\n}]; \n'})}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsx)(n.p,{children:"This is a core mechanism in WLJS notebook interface"})})]})}function l(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},46172:(e,n,t)=>{t.d(n,{c:()=>a});const a=t.p+"assets/images/Screenshot 2024-05-01 at 19.02.35-a72542abc83e2eda5923024f72b52daa.png"},4552:(e,n,t)=>{t.d(n,{I:()=>r,M:()=>c});var a=t(11504);const s={},i=a.createContext(s);function c(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);