"use strict";(self.webpackChunkwljs_docs=self.webpackChunkwljs_docs||[]).push([[5084],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>y});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(t),m=a,y=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return t?r.createElement(y,i(i({ref:n},d),{},{components:t})):r.createElement(y,i({ref:n},d))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4597:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const o={sidebar_position:2},i=void 0,l={unversionedId:"frontend/Evaluation/Dynamic",id:"frontend/Evaluation/Dynamic",title:"Dynamic",description:"To support dynamics and two-ways data binding it relies on the event-based evaluation. For each asynchronous evaluation on the secondary kernel via Kernel API",source:"@site/docs/frontend/Evaluation/Dynamic.md",sourceDirName:"frontend/Evaluation",slug:"/frontend/Evaluation/Dynamic",permalink:"/wljs-docs/docs/frontend/Evaluation/Dynamic",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"frontendSidebar",previous:{title:"Static",permalink:"/wljs-docs/docs/frontend/Evaluation/Static"},next:{title:"Expressions representation",permalink:"/wljs-docs/docs/frontend/Expressions representation"}},s={},c=[{value:"Event system",id:"event-system",level:3},{value:"A direct request by the frontend to the secondary kernel",id:"a-direct-request-by-the-frontend-to-the-secondary-kernel",level:4},{value:"How to reply back?",id:"how-to-reply-back",level:4},{value:"Promises",id:"promises",level:3}],d={toc:c},u="wrapper";function p(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"To support dynamics and two-ways data binding it relies on the event-based evaluation. For each asynchronous evaluation on the secondary kernel via Kernel API"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"an event has to be fired by the frontend (browser)"),(0,a.kt)("li",{parentName:"ul"},"a direct request must be send by the frontend")),(0,a.kt)("h3",{id:"event-system"},"Event system"),(0,a.kt)("p",null,"It uses a very simplified event system, where an event object has an id and the data inside. Each event object can be assigned only to the one handler"),(0,a.kt)("mermaid",{value:"flowchart LR\n\nsubgraph EventObject\n\tid\n\tdata\nend\n\nsubgraph EventHandler\n\tFunction\nend\n\nEventObject --Call--\x3eEventHandler"}),(0,a.kt)("p",null,"in the code anywhere one can use"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-mathematica"},'event = EventObject[<|"id"->"uid"|>]\nEventBind[event, Function[data,\n    Print["Fired!"];\n    Print[data]\n]]\n')),(0,a.kt)("p",null,"to fire an event one need to evaluate"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-mathematica"},'EmittedEvent["uid", "Hello world"]\n')),(0,a.kt)("p",null,"The trick is that one can substitute anything in-between "),(0,a.kt)("mermaid",{value:'flowchart LR\n\nsubgraph Frontend\nsubgraph Event1["Event"]\n\tid1["id"]\n\tdata1["data"]\nend\nend\n\nsubgraph MasterKernel\n\nend\n\nsubgraph SecondaryKernel\nsubgraph EventHandler\n\tFunction\nend\nend\n\nEvent1--Fire--\x3eMasterKernel--Fire--\x3eEventHandler\n'}),(0,a.kt)("p",null,"on JS side (frontend) it looks like"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"server.emitt('uid', data)\n")),(0,a.kt)("p",null,"A slider, a button, an animation on the frontend ",(0,a.kt)("strong",{parentName:"p"},"are a just event-generators")," with a fancy view boxes (see ",(0,a.kt)("a",{parentName:"p",href:"/wljs-docs/docs/frontend/Customizing%20IO/Boxes"},"Boxes"),")."),(0,a.kt)("h4",{id:"a-direct-request-by-the-frontend-to-the-secondary-kernel"},"A direct request by the frontend to the secondary kernel"),(0,a.kt)("p",null,"On JS side it is possible to evaluate any arbitrary function on the secondary kernel by calling"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"server.talkKernel('Print[\"Hi!\"]')\n")),(0,a.kt)("h4",{id:"how-to-reply-back"},"How to reply back?"),(0,a.kt)("p",null,"To make fire the chain backwards we rely on the direct communication between frontend and the secondary kernel. Secondary kernel is always aware, to which notebook it is connected. Then to execute any frontend function (see [","[Frontend functions]","]) one can call"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-mathematica"},'FrontSubmit[ Alert["Hello World"] ];\n')),(0,a.kt)("p",null,"ie."),(0,a.kt)("mermaid",{value:"flowchart RL\n\nsubgraph Frontend\nWLJS --\x3e Alert!\nend\n\nMasterKernel\n\nSecondaryKernel\n\n\nSecondaryKernel--Alert--\x3eMasterKernel--Alert--\x3eWLJS\n"}),(0,a.kt)("p",null,"One can transfer any arbitrary symbolic or non-symbolic data to it and even perform [","[../Heterogenesis computation/Basics]","] there. With some syntax sugar it provides a nice interface to interact with [","[Frontend objects]","]."),(0,a.kt)("h3",{id:"promises"},"Promises"),(0,a.kt)("p",null,"The given examples above are focused on the async evaluation and etc. But what if we need get some data from the master or secondary kernel and then, perform some calculations using that?"),(0,a.kt)("p",null,"it uses ",(0,a.kt)("inlineCode",{parentName:"p"},"NotebookPromise")," api together with JS's ",(0,a.kt)("inlineCode",{parentName:"p"},"promise")," in a way like"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"server.ask('1+1').then((result)=>{\n    alert(result)\n})\n\n//or for thesecondary kernel\nserver.askKernel('1+1').then((result)=>{\n    alert(result)\n})\n")),(0,a.kt)("p",null,"it allows you to write efficient async code with synchronous communication."))}p.isMDXComponent=!0}}]);