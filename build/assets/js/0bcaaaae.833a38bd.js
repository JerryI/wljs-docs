(self.webpackChunkwlx_docs=self.webpackChunkwlx_docs||[]).push([[88328],{77776:(e,t,o)=>{"use strict";o.r(t),o.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var n=o(17624),r=o(4552),a=o(46880);const s={},c="Quantum well",l={type:"mdx",permalink:"/wljs-docs/wljs-demo/mid-quantum-well/",source:"@site/src/pages/wljs-demo/mid-quantum-well/index.mdx",title:"Quantum well",description:"Solving Schrodinger equation in real-time",frontMatter:{},unlisted:!1},i={},d=[];function u(e){const t={h1:"h1",p:"p",...(0,r.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"quantum-well",children:"Quantum well"}),"\n",(0,n.jsx)(t.p,{children:"Solving Schrodinger equation in real-time"}),"\n","\n",(0,n.jsx)(a.Af,{kernel:o(2596).c,json:o(28120).c,notebook:o(19536).c}),"\n",(0,n.jsx)(t.p,{children:"Initial parameters"}),"\n",(0,n.jsx)(a.EB,{display:"codemirror",nid:"e4145421-df5d-4e47-8684-07af42ec4f51",id:"fa5dfc2e-6784-4249-af76-328d29c58b57",type:"Input",opts:{InitGroup:!0},children:"v0%20%3D%208.%3B%0Ahb%20%3D%201.%3B%0Ad%20%20%3D%201.%3B%0Am%20%20%3D%201.%3B"}),"\n",(0,n.jsx)(t.p,{children:"Operator"}),"\n",(0,n.jsx)(a.EB,{display:"codemirror",nid:"e4145421-df5d-4e47-8684-07af42ec4f51",id:"216a66d1-e80f-4b42-97fe-f7b4d5abb370",type:"Input",opts:{InitGroup:!0},children:"V%20%3D%20%28%2ATB%5B%2A%29Piecewise%5B%7B%7B%28%2A%7C%2A%290%28%2A%7C%2A%29%2C%28%2A%7C%2A%29-d%3C%3D%23%3Cd%28%2A%7C%2A%29%7D%2C%7B%28%2A%7C%2A%29v0%28%2A%7C%2A%29%2C%28%2A%7C%2A%29True%28%2A%7C%2A%29%7D%7D%5D%28%2A%7C%2A%29%28%2A1%3AeJxTTMoPSmNkYGAo5gESAZmpyanlmcWpTvkVmUxAAQBzVQdd%2A%29%28%2A%5DTB%2A%29%20%26%3B%0Aop%5Bu_%5Bx_%5D%5D%20%3A%3D%20-%20hb%5E2%2F%282%20m%29%20u%27%27%5Bx%5D%20%2B%20V%5Bx%5D%20u%5Bx%5D%3B"}),"\n",(0,n.jsx)(t.p,{children:"Controls"}),"\n",(0,n.jsx)(a.EB,{display:"codemirror",nid:"e4145421-df5d-4e47-8684-07af42ec4f51",id:"942ee4a3-818d-4db7-b153-5754b3f7b413",type:"Input",opts:{InitGroup:!0,Fade:!1},children:"controls%20%3D%20EventHandler%5BInputGroup%5B%3C%7C%0A%20%20%22m%22%20-%3E%20InputRange%5B0.1%2C%205%2C%201.0%2C%201.0%2C%20%22Label%22-%3E%22Mass%22%5D%2C%0A%20%20%22V%22%20-%3E%20InputRange%5B0.1%2C%2010%2C%201.0%2C%208.0%2C%20%22Label%22-%3E%22V0%22%5D%2C%0A%20%20%22d%22%20-%3E%20InputRange%5B0.1%2C%202%2C%200.5%2C%201.0%2C%20%22Label%22-%3E%22d%22%5D%0A%7C%3E%5D%2C%20Function%5Bvalues%2C%0A%20%20%20%20%20%20v0%20%3D%20values%5B%22V%22%5D%3B%0A%20%20%20%20%20%20m%20%3D%20values%5B%22m%22%5D%3B%0A%20%20%20%20%20%20d%20%3D%20values%5B%22d%22%5D%3B%0A%20%20%0A%20%20%20%20%20%20vplot%20%3D%20Table%5B%7Bx%2CV%5Bx%5D%7D%2C%20%7Bx%2C-2%2C2%2C0.05%7D%5D%3B%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20%7Bev%2C%20ef%7D%20%3D%20%0A%20%20%20%20%20%20%20%20NDEigensystem%5B%7Bop%5Bu%5Bx%5D%5D%2C%20DirichletCondition%5Bu%5Bx%5D%20%3D%3D%200%2C%20True%5D%7D%2C%20u%5Bx%5D%2C%20%7Bx%2C%20-2%2C%202%7D%2C%206%5D%3B%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20xaxis%20%3D%20Table%5Bi%2C%20%7Bi%2C-2%2C2%2C0.025%7D%5D%3B%0A%20%20%20%20%20%20yaxis%20%3D%20Table%5BEvaluate%5Bef%20%2B%20ev%5D%2C%20%7Bx%2C%20xaxis%7D%5D%20%2F%2F%20Transpose%3B%0A%5D%5D%3B%0A%0Acontrols%20%2F%2F%20EventFire%3B"}),"\n",(0,n.jsx)(t.p,{children:"Graphical output"}),"\n",(0,n.jsx)(a.EB,{display:"codemirror",nid:"e4145421-df5d-4e47-8684-07af42ec4f51",id:"95a41b3d-b02b-44d7-b2b5-bff523d996e7",type:"Input",opts:{},children:"Row%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20Graphics%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Table%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20With%5B%7Bi%20%3D%20i%2C%20color%20%3D%20ColorData%5B97%5D%5Bi%5D%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7Bcolor%2C%20Line%5B%7Bxaxis%2C%20yaxis%5B%5Bi%5D%5D%7D%20%2F%2F%20Transpose%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5D%20%2F%2F%20Offload%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7Bi%2C%20Length%5Byaxis%5D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20AbsoluteThickness%5B2%5D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Line%5Bvplot%20%2F%2F%20Offload%5D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20Axes%20-%3E%20True%0A%20%20%20%20%20%20%20%20%20%20%20%20%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20PlotRange%20-%3E%20%7B%7B-2%2C%202%7D%2C%20%7B0%2C%2016%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20ImageSize%20-%3E%20%7B350%2C%20350%7D%0A%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%20%20%2C%0A%20%20%20%20%20%20%20%20controls%0A%20%20%20%20%7D%0A%5D"}),"\n",(0,n.jsx)(a.EB,{display:"codemirror",nid:"e4145421-df5d-4e47-8684-07af42ec4f51",id:"a02dc42b-96eb-43f3-9a7f-b2c57aa80933",type:"Output",opts:{},children:"%28%2AGB%5B%2A%29%7B%7B%28%2AVB%5B%2A%29%28FrontEndRef%5B%2288343d8d-6429-47ba-ad68-6d5bc17aeccd%22%5D%29%28%2A%2C%2A%29%28%2A%221%3AeJxTTMoPSmNkYGAoZgESHvk5KRCeEJBwK8rPK3HNS3GtSE0uLUlMykkNVgEKW1gYmxinWKTompkYWeqamCcl6iammFnomqWYJiUbmiemJienAAB94BYP%22%2A%29%28%2A%5DVB%2A%29%28%2A%7C%2A%29%2C%28%2A%7C%2A%29%28%2AVB%5B%2A%29%28EventObject%5B%3C%7C%22Id%22%20-%3E%20%229f1cd6cf-3c45-4198-ab48-a15dd669c1ce%22%2C%20%22Initial%22%20-%3E%20%3C%7C%22m%22%20-%3E%201.%2C%20%22V%22%20-%3E%208.%2C%20%22d%22%20-%3E%201.%7C%3E%2C%20%22View%22%20-%3E%20%22036730f0-8219-4c21-9547-2ecc0b0186e7%22%7C%3E%5D%29%28%2A%2C%2A%29%28%2A%221%3AeJxTTMoPSmNkYGAoZgESHvk5KRCeEJBwK8rPK3HNS3GtSE0uLUlMykkNVgEKGxibmRsbpBnoWhgZWuqaJBsZ6lqampjrGqUmJxskGRhamKWaAwBrcBSt%22%2A%29%28%2A%5DVB%2A%29%7D%7D%28%2A%5DGB%2A%29"})]})}function p(e={}){const{wrapper:t}={...(0,r.M)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},46880:(e,t,o)=>{"use strict";o.d(t,{EB:()=>u,gL:()=>d,Af:()=>i});var n,r=o(11504);o(93391),o(28264);function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},a.apply(this,arguments)}const s=e=>{let{title:t,titleId:o,...s}=e;return r.createElement("svg",a({xmlns:"http://www.w3.org/2000/svg",fill:"none",className:"w-5 h-5 ml-auto",viewBox:"0 0 24 24","aria-labelledby":o},s),t?r.createElement("title",{id:o},t):null,n||(n=r.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",d:"M17 17h.01m.39-3h.6c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C21 15.602 21 16.068 21 17s0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C19.398 20 18.932 20 18 20H6c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C3 18.398 3 17.932 3 17s0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C4.602 14 5.068 14 6 14h.6m5.4 1V4m0 11-3-3m3 3 3-3"})))};var c=o(66528),l=(o(98684),o(52964),o(93664),o(17624));function i(e){let{json:t,notebook:o,kernel:n}=e;const{colorMode:a,setColorMode:i}=(0,c.U)();return(0,r.useEffect)((()=>{console.warn("Create store"),console.warn(t);const e={},o={},r=[],a=new Deferred;let s=async()=>{s=async()=>{},fetch(t).then((t=>{console.warn("Store loaded!"),t.json().then((t=>{interpretate(t.objects,{hold:!0}).then((t=>{console.warn("Objects loaded!"),Object.keys(t).forEach((e=>{const o=new ObjectStorage(e);o.cache=t[e],o.cached=!0})),Object.keys(e).forEach((o=>{Array.isArray(e[o])?e[o].forEach((e=>e.resolve(t[o]))):e[o].resolve(t[o])}))})),interpretate(t.symbols,{hold:!0}).then((e=>{console.warn("Symbols loaded!"),Object.keys(e).forEach((t=>{core[t]=async(e,o)=>await interpretate(core[t].data,o),core[t].data=e[t],core[t]=async(e,o)=>{console.log("IE: calling our symbol...");const n=await interpretate(core[t].data,o);return o.root&&!o.novirtual&&(core[t].instances[o.root.uid]=o.root),n},core[t].update=async(e,o)=>{if(o.useCache)return core[t].cached&&core[t].currentData==core[t].data||(core[t].cached=await interpretate(core[t].data,o),core[t].currentData=core[t].data),core[t].cached;return await interpretate(core[t].data,o)},core[t].destroy=async(e,o)=>{delete core[t].instances[o.root.uid],console.warn(o.root.uid+" was destroyed"),console.warn("external symbol was destoryed")},core[t].data=e[t],core[t].virtual=!0,core[t].instances={}})),Object.keys(o).forEach((t=>{console.warn(t),o[t].resolve(e[t])})),a.resolve()}))}))}))};core.Offload=(e,t)=>{if(e.length>1)if("'Static'"===e[1][1]){if(e[1][2])return interpretate(e[0],{...t,static:!0})}else if(e.length>2&&"'Static'"===e[2][1]&&e[2][2])return interpretate(e[0],{...t,static:!0});return interpretate(e[0],t)},core.Offload.update=(e,t)=>{if(e.length>1)if("'Volatile'"===e[1][1]){if(!e[1][2])return void console.log("Update was rejected (Nonvolatile)")}else if(e.length>2&&"'Volatile'"===e[2][1]&&!e[2][2])return void console.log("Update was rejected (Nonvolatile)");return interpretate(e[0],t)},window.server={kernel:{}},window.server.ask=t=>{const o=new Deferred;return t.length<42?(console.error("Unknown command"),console.error(t),!1):(Array.isArray(e[t.slice(42,-2)])?e[t.slice(42,-2)].push(o):e[t.slice(42,-2)]=[o],s(),o.promise)},window.server.getSymbol=e=>{const t=new Deferred;return console.warn("Asking for symbol"+e),o[e]=t,t.promise},window.server.kernel.emitt=function(e,t,o){void 0===o&&(o="Default"),r.push({uid:e,data:t,type:o})},interpretate.anonymous=async(e,t)=>{let n,r;if(console.log("Anonimous symbol: "+JSON.stringify(e)),e instanceof Array)throw console.error(e),"unknown WL expression. Error at "+e[0];n=e;const a=new Deferred;return console.warn("Asking for symbol"+n),o[n]=a,r=await a.promise,core[n]=async(e,t)=>{console.log("IE: calling our symbol...");const o=await interpretate(core[n].data,t);return t.root&&!t.novirtual&&(core[n].instances[t.root.uid]=t.root),o},core[n].update=async(e,t)=>{if(t.useCache)return core[n].cached&&core[n].currentData==core[n].data||(core[n].cached=await interpretate(core[n].data,t),core[n].currentData=core[n].data),core[n].cached;return await interpretate(core[n].data,t)},core[n].destroy=async(e,t)=>{delete core[n].instances[t.root.uid],console.warn(t.root.uid+" was destroyed"),console.warn("external symbol was destoryed")},core[n].data=r,core[n].virtual=!0,core[n].instances={},interpretate(e,t)},(async()=>{if(console.warn("Kernel"),n){if(console.warn("KERNEL"),!interpretate.unzlib64String){const e=new Deferred,t=document.createElement("script");t.src="https://cdn.jsdelivr.net/gh/JerryI/wljs-export-html@main/dist/zip.min.js",t.addEventListener("load",(()=>e.resolve())),document.head.appendChild(t),await e.promise,console.warn("ZIP loaded!")}if(!window.KernelState){const e=new Deferred,t=document.createElement("script");t.src="https://cdn.jsdelivr.net/gh/JerryI/wljs-export-html@main/dist/decoder.min.js",t.addEventListener("load",(()=>e.resolve())),document.head.appendChild(t),await e.promise,console.warn("KernelState lib loaded!")}fetch(n).then((e=>{console.log(e),e.json().then((async e=>{let t=e;t=t.map((e=>interpretate.unzlib64String(e))),t=t.map(KernelMesh.unpack),console.warn("Mesh loaded!"),window.server.kernel.emitt=function(e,o,n){void 0===n&&(n="Default"),setTimeout((()=>{const r={type:"event",uid:e,pattern:n,data:o},a=t;for(let e=0;e<a.length;++e)if(a[e].test(r)){if(a[e].state)a[e].state=new KernelState(a[e].state,r,!0);else{if(a[e].database.has("$initialization")){a[e].database.get("$initialization").forEach((t=>a[e].state=new KernelState(a[e].state,t,!0)))}a[e].state=new KernelState(a[e].state,r,!0)}a[e].state.exec(a[e].database,(e=>{for(const t of Object.keys(e))if("$state"!==t)if(1===e[t].set.length){core[t].data=e[t].set[0];for(const e of Object.values(core[t].instances))e.update()}else{e[t].i+=1,e[t].i>=e[t].set.length&&(e[t].i=0),core[t].data=e[t].set[e[t].i];for(const e of Object.values(core[t].instances))e.update()}}))}}),2)},r.forEach((e=>window.server.kernel.emitt(e.uid,e.data,e.type)))}))}))}})()})),(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("a",{href:o,className:"dark"==a?"p-2 text-xs w-full flex ring-1 ring-inset shadow ring-gray-300 text-gray-300 my-2":"p-2 text-xs w-full flex ring-1 ring-inset text-gray-600 shadow ring-gray-300 bg-gray-300 my-2",children:["Download original notebook ",(0,l.jsx)(s,{})]})})}function d(e){let{children:t,data:o}=e;const n={__html:decodeURIComponent(t)};return(0,l.jsx)("div",{dangerouslySetInnerHTML:n})}function u(e){let{children:t,nid:o,id:n,type:a,display:s,opts:i}=e;const d=(0,r.useRef)(null),{colorMode:u,setColorMode:p}=(0,c.U)(),m=decodeURIComponent(t),[f,C]=(0,r.useState)(i.Fade),[h,A]=(0,r.useState)(!1);return(0,r.useEffect)((()=>{const e=d.current;let t;if(console.warn("Create Codemirror"),console.warn(s),console.log(m),A(!0),console.warn("Created: "+s),"print"!=s){if(window.SupportedCells[s])return window.SupportedCells[s].view&&(t=new window.SupportedCells[s].view({element:e},m)),t.editor&&i.Fade&&(d.current.addEventListener("focusin",(()=>{C(!1)})),d.current.addEventListener("focusout",(()=>{C(!0)}))),()=>{t&&t.dispose()};console.warn("Not found: "+s)}}),[]),(0,l.jsx)("div",{style:{filter:"dark"==u?"invert(1) contrast(0.8) hue-rotate(-185deg)":"none"},className:"language-mathematica codeBlockContainer_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-Container-styles-module theme-code-block",children:(0,l.jsx)("div",{className:f?"h-fade-20 codeBlockContent_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-Content-styles-module":"codeBlockContent_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-Content-styles-module",children:(0,l.jsxs)("pre",{tabIndex:"0",className:"prism-code language-mathematica codeBlock_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-Content-styles-module thin-scrollbar",style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)"},children:[!h&&(0,l.jsx)("code",{style:{whiteSpace:"pre-wrap"},className:"codeBlockLines_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-Content-styles-module",children:m}),(0,l.jsx)("code",{ref:d,className:"codeBlockLines_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-Content-styles-module"})]})})})}},28120:(e,t,o)=>{"use strict";o.d(t,{c:()=>n});const n=o.p+"940d217576608264c310dee2a7b75314.txt"},2596:(e,t,o)=>{"use strict";o.d(t,{c:()=>n});const n=o.p+"4d55cab4c4a6c264f18602f1c4ca8d73.txt"},19536:(e,t,o)=>{"use strict";o.d(t,{c:()=>n});const n=o.p+"1518b7ac47b7f693d4f46eb940fae28f.wln"},47944:()=>{},73223:()=>{}}]);