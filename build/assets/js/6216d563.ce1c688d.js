"use strict";(self.webpackChunkwlx_docs=self.webpackChunkwlx_docs||[]).push([[74652],{57212:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var r=t(17624),s=t(4552);const i={env:["Wolfram Kernel"],context:"Notebook`Editor`Kernel`Slides`",source:"https://github.com/JerryI/wljs-revealjs/blob/dev/src/Kernel.wl",package:"wljs-revealjs"},d=void 0,l={id:"frontend/Reference/Slides/SlideEventListener",title:"SlideEventListener",description:"attaches an event listener to a current slide",source:"@site/docs/frontend/Reference/Slides/SlideEventListener.md",sourceDirName:"frontend/Reference/Slides",slug:"/frontend/Reference/Slides/SlideEventListener",permalink:"/wljs-docs/frontend/Reference/Slides/SlideEventListener",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1736628819e3,frontMatter:{env:["Wolfram Kernel"],context:"Notebook`Editor`Kernel`Slides`",source:"https://github.com/JerryI/wljs-revealjs/blob/dev/src/Kernel.wl",package:"wljs-revealjs"},sidebar:"tutorialSidebar",previous:{title:"Slides",permalink:"/wljs-docs/frontend/Reference/Slides/"},next:{title:"Sound",permalink:"/wljs-docs/frontend/Reference/Sound/"}},o={},a=[{value:"Options",id:"options",level:2},{value:"<code>&quot;Id&quot;</code>",id:"id",level:3},{value:"Event generation",id:"event-generation",level:2},{value:"Patterns",id:"patterns",level:3},{value:"<code>&quot;Slide&quot;</code>",id:"slide",level:4},{value:"<code>&quot;fragment-_&quot;</code>",id:"fragment-_",level:4},{value:"<code>&quot;Mounted&quot;</code>",id:"mounted",level:4},{value:"<code>&quot;Left&quot;</code>",id:"left",level:4},{value:"<code>&quot;Destroy&quot;</code>",id:"destroy",level:4},{value:"Supported output forms",id:"supported-output-forms",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-mathematica",children:"SlideEventListener[opts__]\n"})}),"\n",(0,r.jsx)(n.p,{children:"attaches an event listener to a current slide"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-md",children:'.slide\n# Slide 1\n\n---\n\n# Slide 2\n\nHere is will fire\n\n<SlideEventListener Id={"event"}/>\n'})}),"\n",(0,r.jsx)(n.p,{children:"and then a handler on WL side"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-mathematica",children:'EventHandler["event", Echo]\n'})}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["There is no restrictions on the number of attached listeners to a single slide. One can generate them on-fly from components. See ",(0,r.jsx)(n.a,{href:"/wljs-docs/frontend/Advanced/Slides/animations#Example%204%20%F0%9F%94%84%20Simple%20stat%20counter",children:"Example 4 \ud83d\udd04 Simple stat counter"})]})}),"\n",(0,r.jsx)(n.h2,{id:"options",children:"Options"}),"\n",(0,r.jsx)(n.h3,{id:"id",children:(0,r.jsx)(n.code,{children:'"Id"'})}),"\n",(0,r.jsx)(n.p,{children:"a string representation of an event identifier, that will be used"}),"\n",(0,r.jsx)(n.h2,{id:"event-generation",children:"Event generation"}),"\n",(0,r.jsxs)(n.p,{children:["It fires an event for a given slide (where it is placed) when it is revealed with a topic ",(0,r.jsx)(n.code,{children:'"Slide"'})," and for each slide-fragment revealed ",(0,r.jsx)(n.code,{children:'"fragment-x"'})," topic / pattern."]}),"\n",(0,r.jsx)(n.p,{children:"i.e."}),"\n",(0,r.jsx)(n.h3,{id:"patterns",children:"Patterns"}),"\n",(0,r.jsx)(n.h4,{id:"slide",children:(0,r.jsx)(n.code,{children:'"Slide"'})}),"\n",(0,r.jsx)(n.p,{children:"fires when a slide was revealed (even the first one)"}),"\n",(0,r.jsx)(n.h4,{id:"fragment-_",children:(0,r.jsx)(n.code,{children:'"fragment-_"'})}),"\n",(0,r.jsxs)(n.p,{children:["where ",(0,r.jsx)(n.code,{children:"_"})," is a number of a fragment revealed on a slide"]}),"\n",(0,r.jsx)(n.h4,{id:"mounted",children:(0,r.jsx)(n.code,{children:'"Mounted"'})}),"\n",(0,r.jsx)(n.p,{children:"fires, once an HTML content for a slide is ready"}),"\n",(0,r.jsx)(n.h4,{id:"left",children:(0,r.jsx)(n.code,{children:'"Left"'})}),"\n",(0,r.jsx)(n.p,{children:"fires, once a user leaves the slide (goes to the next or previous one) with an integer as a payload, that gives the direction"}),"\n",(0,r.jsx)(n.h4,{id:"destroy",children:(0,r.jsx)(n.code,{children:'"Destroy"'})}),"\n",(0,r.jsx)(n.p,{children:"fires, once a presentation was closed for some reason"}),"\n",(0,r.jsx)(n.p,{children:"Try"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-mathematica",children:'EventHandler["myEvent", {any_String :> (Print[StringTemplate["::``:: ``"][any, #]]&)}];\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-md",children:'.slide\n\n# 1st Slide\nNothing\n\n---\n\n# 2nd Slide\nA message pops up\n\nAnother message \x3c!-- .element: class="fragment" data-fragment-index="1" --\x3e\n\n<SlideEventListener Id={"myEvent"}/>\n'})}),"\n",(0,r.jsx)(n.h2,{id:"supported-output-forms",children:"Supported output forms"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/wljs-docs/frontend/Reference/Decorations/WLXForm",children:"WLXForm"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},4552:(e,n,t)=>{t.d(n,{I:()=>l,M:()=>d});var r=t(11504);const s={},i=r.createContext(s);function d(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);