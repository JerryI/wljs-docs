(self.webpackChunkwlx_docs=self.webpackChunkwlx_docs||[]).push([[5400],{21492:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>B,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var a=n(17624),r=n(4552),o=n(46880);const s={},i="BarTimeline Animated",c={type:"mdx",permalink:"/wljs-docs/wljs-demo/plot-baranimated/",source:"@site/src/pages/wljs-demo/plot-baranimated/index.mdx",title:"BarTimeline Animated",description:"You've likely seen videos featuring animated bar charts with a timeline, where the bars dynamically shift and overtake each other. These kinds of visuals are eye-catching.",frontMatter:{},unlisted:!1},l={},d=[];function u(e){const t={code:"code",h1:"h1",p:"p",...(0,r.M)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"bartimeline-animated",children:"BarTimeline Animated"}),"\n",(0,a.jsx)(t.p,{children:"You've likely seen videos featuring animated bar charts with a timeline, where the bars dynamically shift and overtake each other. These kinds of visuals are eye-catching."}),"\n",(0,a.jsxs)(t.p,{children:["Below is an example of such a plot function, which takes a list of ",(0,a.jsx)(t.code,{children:"TimeSeries"}),", interpolates them, and turns them into an interactive diagram. While this isn't a perfect implementation, it's good enough for demonstration purposes."]}),"\n","\n",(0,a.jsx)(o.Af,{kernel:n(28564).c,json:n(39616).c,notebook:n(2496).c}),"\n",(0,a.jsx)(o.EB,{display:"codemirror",nid:"2ad6ba59-4a8e-48a1-bdd6-a47c5c523314",id:"c3e7e5da-2082-405a-8923-77eec070f13b",type:"Input",opts:{InitGroup:!0,Fade:!0},children:"Options%5BbarTimelineAnimated%5D%20%3D%20%7BPlotLegends%20-%3E%20Automatic%7D%3B%0A%0AgetMagnitude%5Be_Quantity%5D%20%3A%3D%20QuantityMagnitude%5Be%5D%3B%0AgetMagnitude%5Be_%5D%20%3A%3D%20e%3B%0A%0AgetLevels%20%3D%20Function%5B%7Blist%7D%2C%20%0A%20%20SortBy%5B%0A%20%20%20%20MapIndexed%5BFunction%5B%7Bvalue%2C%20index%7D%2C%20%7Bvalue%2C%20index%20%2F%2F%20First%7D%5D%2C%20Ordering%5Blist%5D%5D%2C%20%0A%20%20%20%20First%0A%20%20%5D%5B%5BAll%2C%202%5D%5D%0A%5D%3B%0A%0AbarTimelineAnimated%5Bl_List%2C%20OptionsPattern%5B%5D%5D%20%3A%3D%20With%5B%7B%0A%20%20timeline%20%3D%20MinimalBy%5B%28%23%5B%22Times%22%5D%20%26%20%2F%40%20l%29%2C%20Length%5D%20%2F%2F%20First%2C%0A%20%20labels%20%3D%20If%5BOptionValue%5BPlotLegends%5D%20%3D%3D%3D%20Automatic%2C%20Range%5BLength%5Bl%5D%5D%2C%20OptionValue%5BPlotLegends%5D%5D%2C%0A%20%20interpolated%20%3D%20TimeSeries%5B%23%2C%20MissingDataMethod%20-%3E%20Automatic%5D%20%26%20%2F%40%20l%0A%7D%2C%0A%0A%20%20With%5B%7B%0A%20%20%20%20first%20%3D%20getMagnitude%5B%23%5Btimeline%20%2F%2F%20First%5D%5D%20%26%20%2F%40%20interpolated%0A%20%20%7D%2C%0A%0A%20%20%20%20Module%5B%7B%0A%20%20%20%20%20%20levels%20%3D%20getLevels%5Bfirst%5D%20%2F%20Length%5Bfirst%5D%20%2F%2F%20N%2C%0A%20%20%20%20%20%20order%20%3D%20getLevels%5Bfirst%5D%2C%0A%20%20%20%20%20%20rects%2C%0A%20%20%20%20%20%20date%20%3D%20timeline%20%2F%2F%20First%20%2F%2F%20DateObject%20%2F%2F%20TextString%2C%0A%20%20%20%20%20%20recalc%0A%20%20%20%20%7D%2C%0A%0A%20%20%20%20%20%20recalc%5Bindex_%5D%20%3A%3D%20With%5B%7Bvalues%20%3D%20getMagnitude%5B%23%5Btimeline%5B%5Bindex%5D%5D%5D%5D%20%26%20%2F%40%20interpolated%7D%2C%0A%0A%20%20%20%20%20%20%20%20With%5B%7BnewOrdering%20%3D%20getLevels%5Bvalues%5D%7D%2C%0A%20%20%20%20%20%20%20%20%20%20If%5Border%20%21%3D%20newOrdering%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20order%20%3D%20newOrdering%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20levels%20%3D%20newOrdering%20%2F%20Length%5Bfirst%5D%20%2F%2F%20N%3B%0A%20%20%20%20%20%20%20%20%20%20%5D%3B%0A%20%20%20%20%20%20%20%20%5D%3B%0A%0A%20%20%20%20%20%20%20%20date%20%3D%20timeline%5B%5Bindex%5D%5D%20%2F%2F%20DateObject%20%2F%2F%20TextString%3B%0A%0A%20%20%20%20%20%20%20%20With%5B%7Bmin%20%3D%20Min%5Bvalues%5D%2C%20max%20%3D%20Max%5Bvalues%5D%7D%2C%0A%20%20%20%20%20%20%20%20%20%20rects%20%3D%20%28%28values%20-%20min%29%20%2F%20%28max%20-%20min%29%20%2B%200.02%29%20%2F%201.02%3B%0A%20%20%20%20%20%20%20%20%5D%3B%0A%20%20%20%20%20%20%5D%3B%0A%0A%20%20%20%20%20%20recalc%5B1%5D%3B%0A%0A%20%20%20%20%20%20Column%5B%7B%0A%20%20%20%20%20%20%20%20With%5B%7Bspacing%20%3D%200.8%20%2F%20Length%5Blevels%5D%7D%2C%20%0A%20%20%20%20%20%20%20%20%20%20Graphics%5B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20Text%5Bdate%20%2F%2F%20Offload%2C%20%7B0.5%2C%200.%7D%2C%20%7B0%2C%200%7D%5D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20Directive%5BTransitionType%20-%3E%20%22CubicInOut%22%2C%20TransitionDuration%20-%3E%20500%5D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20Table%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20With%5B%7Bi%20%3D%20i%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Translate%5B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ColorData%5B97%5D%5Bi%5D%20%2F%2F%20Lighter%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Directive%5BTransitionType%20-%3E%20%22Linear%22%2C%20TransitionDuration%20-%3E%2020%5D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Rectangle%5B%7B0%2C%200%7D%2C%20%7BOffload%5Brects%5B%5Bi%5D%5D%5D%2C%20spacing%7D%5D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Black%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Text%5BStyle%5Blabels%5B%5Bi%5D%5D%2C%20FontSize%20-%3E%2014%5D%2C%20%7B-0.02%2C%20spacing%20%2F%203.0%7D%2C%20%7B1%2C%200%7D%5D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%20%7B0%2C%20Offload%5Blevels%5B%5Bi%5D%5D%5D%7D%5D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5D%2C%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7Bi%2C%201%2C%20Length%5Brects%5D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%20PlotRange%20-%3E%20%7B%7B-0.4%2C%201%7D%2C%20%7B-0.1%2C%201%20%2B%20spacing%7D%7D%2C%20ImagePadding%20-%3E%20None%5D%0A%20%20%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20EventHandler%5BInputRange%5B1%2C%20Length%5Btimeline%5D%2C%201%2C%201%5D%2C%20recalc%5D%0A%20%20%20%20%20%20%7D%5D%0A%20%20%20%20%5D%0A%20%20%5D%0A%5D%3B"}),"\n",(0,a.jsx)(t.p,{children:"Try on some sample date lists"}),"\n",(0,a.jsx)(o.EB,{display:"codemirror",nid:"2ad6ba59-4a8e-48a1-bdd6-a47c5c523314",id:"d7735a0e-966b-4e28-b50c-b89ebeaf30e0",type:"Input",opts:{},children:"country%20%3D%20%7B%22Germany%22%2C%20%22UK%22%2C%20%22Switzerland%22%2C%20%22Russia%22%2C%20%22China%22%7D%3B%0Agdp%20%3D%20CountryData%5B%23%2C%20%7B%22GDP%22%2C%20%7B1970%2C%202015%7D%7D%5D%20%26%2F%40%20country%3B%0A%0AbarTimelineAnimated%5Bgdp%2C%20PlotLegends-%3Ecountry%5D%20"}),"\n",(0,a.jsx)(o.EB,{display:"codemirror",nid:"2ad6ba59-4a8e-48a1-bdd6-a47c5c523314",id:"b4f28dc2-a11b-45a5-ad68-45becf7203ce",type:"Output",opts:{},children:"%28%2AGB%5B%2A%29%7B%7B%28%2AVB%5B%2A%29%28FrontEndRef%5B%22084ff465-4e77-4c6c-8a31-a929f31ef0d6%22%5D%29%28%2A%2C%2A%29%28%2A%221%3AeJxTTMoPSmNkYGAoZgESHvk5KRCeEJBwK8rPK3HNS3GtSE0uLUlMykkNVgEKG1iYpKWZmJnqmqSam%2BuaJJsl61okGhvqJloaWaYZG6amGaSYAQB%2BMRWC%22%2A%29%28%2A%5DVB%2A%29%7D%28%2A%7C%7C%2A%29%2C%28%2A%7C%7C%2A%29%7B%28%2AVB%5B%2A%29%28EventObject%5B%3C%7C%22Id%22%20-%3E%20%22f648954d-9822-461c-b80f-97fc58470297%22%2C%20%22Initial%22%20-%3E%201%2C%20%22View%22%20-%3E%20%22dd1f785e-7e91-4515-811a-c6276e706ca6%22%7C%3E%5D%29%28%2A%2C%2A%29%28%2A%221%3AeJxTTMoPSmNkYGAoZgESHvk5KRCeEJBwK8rPK3HNS3GtSE0uLUlMykkNVgEKp6QYpplbmKbqmqdaGuqamBqa6loYGibqJpsZmZulmhuYJSeaAQCBnxVP%22%2A%29%28%2A%5DVB%2A%29%7D%7D%28%2A%5DGB%2A%29"})]})}function B(e={}){const{wrapper:t}={...(0,r.M)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},46880:(e,t,n)=>{"use strict";n.d(t,{EB:()=>u,gL:()=>d,Af:()=>l});var a,r=n(11504);n(93391),n(28264);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}const s=e=>{let{title:t,titleId:n,...s}=e;return r.createElement("svg",o({xmlns:"http://www.w3.org/2000/svg",fill:"none",className:"w-5 h-5 ml-auto",viewBox:"0 0 24 24","aria-labelledby":n},s),t?r.createElement("title",{id:n},t):null,a||(a=r.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",d:"M17 17h.01m.39-3h.6c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C21 15.602 21 16.068 21 17s0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C19.398 20 18.932 20 18 20H6c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C3 18.398 3 17.932 3 17s0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C4.602 14 5.068 14 6 14h.6m5.4 1V4m0 11-3-3m3 3 3-3"})))};var i=n(66528),c=(n(98684),n(52964),n(93664),n(17624));function l(e){let{json:t,notebook:n,kernel:a}=e;const{colorMode:o,setColorMode:l}=(0,i.U)();return(0,r.useEffect)((()=>{console.warn("Create store"),console.warn(t);const e={},n={},r=[],o=new Deferred;let s=async()=>{s=async()=>{},fetch(t).then((t=>{console.warn("Store loaded!"),t.json().then((t=>{interpretate(t.objects,{hold:!0}).then((t=>{console.warn("Objects loaded!"),Object.keys(t).forEach((e=>{const n=new ObjectStorage(e);n.cache=t[e],n.cached=!0})),Object.keys(e).forEach((n=>{Array.isArray(e[n])?e[n].forEach((e=>e.resolve(t[n]))):e[n].resolve(t[n])}))})),interpretate(t.symbols,{hold:!0}).then((e=>{console.warn("Symbols loaded!"),Object.keys(e).forEach((t=>{core[t]=async(e,n)=>await interpretate(core[t].data,n),core[t].data=e[t],core[t]=async(e,n)=>{console.log("IE: calling our symbol...");const a=await interpretate(core[t].data,n);return n.root&&!n.novirtual&&(core[t].instances[n.root.uid]=n.root),a},core[t].update=async(e,n)=>{if(n.useCache)return core[t].cached&&core[t].currentData==core[t].data||(core[t].cached=await interpretate(core[t].data,n),core[t].currentData=core[t].data),core[t].cached;return await interpretate(core[t].data,n)},core[t].destroy=async(e,n)=>{delete core[t].instances[n.root.uid],console.warn(n.root.uid+" was destroyed"),console.warn("external symbol was destoryed")},core[t].data=e[t],core[t].virtual=!0,core[t].instances={}})),Object.keys(n).forEach((t=>{console.warn(t),n[t].resolve(e[t])})),o.resolve()}))}))}))};core.Offload=(e,t)=>{if(e.length>1)if("'Static'"===e[1][1]){if(e[1][2])return interpretate(e[0],{...t,static:!0})}else if(e.length>2&&"'Static'"===e[2][1]&&e[2][2])return interpretate(e[0],{...t,static:!0});return interpretate(e[0],t)},core.Offload.update=(e,t)=>{if(e.length>1)if("'Volatile'"===e[1][1]){if(!e[1][2])return void console.log("Update was rejected (Nonvolatile)")}else if(e.length>2&&"'Volatile'"===e[2][1]&&!e[2][2])return void console.log("Update was rejected (Nonvolatile)");return interpretate(e[0],t)},window.server={kernel:{}},window.server.ask=t=>{const n=new Deferred;return t.length<42?(console.error("Unknown command"),console.error(t),!1):(Array.isArray(e[t.slice(42,-2)])?e[t.slice(42,-2)].push(n):e[t.slice(42,-2)]=[n],s(),n.promise)},window.server.getSymbol=e=>{const t=new Deferred;return console.warn("Asking for symbol"+e),n[e]=t,t.promise},window.server.kernel.emitt=function(e,t,n){void 0===n&&(n="Default"),r.push({uid:e,data:t,type:n})},interpretate.anonymous=async(e,t)=>{let a,r;if(console.log("Anonimous symbol: "+JSON.stringify(e)),e instanceof Array)throw console.error(e),"unknown WL expression. Error at "+e[0];a=e;const o=new Deferred;return console.warn("Asking for symbol"+a),n[a]=o,r=await o.promise,core[a]=async(e,t)=>{console.log("IE: calling our symbol...");const n=await interpretate(core[a].data,t);return t.root&&!t.novirtual&&(core[a].instances[t.root.uid]=t.root),n},core[a].update=async(e,t)=>{if(t.useCache)return core[a].cached&&core[a].currentData==core[a].data||(core[a].cached=await interpretate(core[a].data,t),core[a].currentData=core[a].data),core[a].cached;return await interpretate(core[a].data,t)},core[a].destroy=async(e,t)=>{delete core[a].instances[t.root.uid],console.warn(t.root.uid+" was destroyed"),console.warn("external symbol was destoryed")},core[a].data=r,core[a].virtual=!0,core[a].instances={},interpretate(e,t)},(async()=>{if(console.warn("Kernel"),a){if(console.warn("KERNEL"),!interpretate.unzlib64String){const e=new Deferred,t=document.createElement("script");t.src="https://cdn.jsdelivr.net/gh/JerryI/wljs-export-html@main/dist/zip.min.js",t.addEventListener("load",(()=>e.resolve())),document.head.appendChild(t),await e.promise,console.warn("ZIP loaded!")}if(!window.KernelState){const e=new Deferred,t=document.createElement("script");t.src="https://cdn.jsdelivr.net/gh/JerryI/wljs-export-html@main/dist/decoder.min.js",t.addEventListener("load",(()=>e.resolve())),document.head.appendChild(t),await e.promise,console.warn("KernelState lib loaded!")}fetch(a).then((e=>{console.log(e),e.json().then((async e=>{let t=e;t=t.map((e=>interpretate.unzlib64String(e))),t=t.map(KernelMesh.unpack),console.warn("Mesh loaded!"),window.server.kernel.emitt=function(e,n,a){void 0===a&&(a="Default"),setTimeout((()=>{const r={type:"event",uid:e,pattern:a,data:n},o=t;for(let e=0;e<o.length;++e)if(o[e].test(r)){if(o[e].state)o[e].state=new KernelState(o[e].state,r,!0);else{if(o[e].database.has("$initialization")){o[e].database.get("$initialization").forEach((t=>o[e].state=new KernelState(o[e].state,t,!0)))}o[e].state=new KernelState(o[e].state,r,!0)}o[e].state.exec(o[e].database,(e=>{for(const t of Object.keys(e))if("$state"!==t)if(1===e[t].set.length){core[t].data=e[t].set[0];for(const e of Object.values(core[t].instances))e.update()}else{e[t].i+=1,e[t].i>=e[t].set.length&&(e[t].i=0),core[t].data=e[t].set[e[t].i];for(const e of Object.values(core[t].instances))e.update()}}))}}),2)},r.forEach((e=>window.server.kernel.emitt(e.uid,e.data,e.type)))}))}))}})()})),(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)("a",{href:n,className:"dark"==o?"p-2 text-xs w-full flex ring-1 ring-inset shadow ring-gray-300 text-gray-300 my-2":"p-2 text-xs w-full flex ring-1 ring-inset text-gray-600 shadow ring-gray-300 bg-gray-300 my-2",children:["Download original notebook ",(0,c.jsx)(s,{})]})})}function d(e){let{children:t,data:n}=e;const a={__html:decodeURIComponent(t)};return(0,c.jsx)("div",{dangerouslySetInnerHTML:a})}function u(e){let{children:t,nid:n,id:a,type:o,display:s,opts:l}=e;const d=(0,r.useRef)(null),{colorMode:u,setColorMode:B}=(0,i.U)(),m=decodeURIComponent(t),[D,h]=(0,r.useState)(l.Fade),[p,A]=(0,r.useState)(!1);return(0,r.useEffect)((()=>{const e=d.current;let t;if(console.warn("Create Codemirror"),console.warn(s),console.log(m),A(!0),console.warn("Created: "+s),"print"!=s){if(window.SupportedCells[s])return window.SupportedCells[s].view&&(t=new window.SupportedCells[s].view({element:e},m)),t.editor&&l.Fade&&(d.current.addEventListener("focusin",(()=>{h(!1)})),d.current.addEventListener("focusout",(()=>{h(!0)}))),()=>{t&&t.dispose()};console.warn("Not found: "+s)}}),[]),(0,c.jsx)("div",{style:{filter:"dark"==u?"invert(1) contrast(0.8) hue-rotate(-185deg)":"none"},className:"language-mathematica codeBlockContainer_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-Container-styles-module theme-code-block",children:(0,c.jsx)("div",{className:D?"h-fade-20 codeBlockContent_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-Content-styles-module":"codeBlockContent_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-Content-styles-module",children:(0,c.jsxs)("pre",{tabIndex:"0",className:"prism-code language-mathematica codeBlock_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-Content-styles-module thin-scrollbar",style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)"},children:[!p&&(0,c.jsx)("code",{style:{whiteSpace:"pre-wrap"},className:"codeBlockLines_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-Content-styles-module",children:m}),(0,c.jsx)("code",{ref:d,className:"codeBlockLines_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-Content-styles-module"})]})})})}},39616:(e,t,n)=>{"use strict";n.d(t,{c:()=>a});const a=n.p+"779d8c524a3b79819370df2dc5e614be.txt"},28564:(e,t,n)=>{"use strict";n.d(t,{c:()=>a});const a=n.p+"a22420a116527810d5d3043d2eb3131e.txt"},2496:(e,t,n)=>{"use strict";n.d(t,{c:()=>a});const a=n.p+"2df98a2282f4a9466aa48caf80efeec0.wln"},47944:()=>{},73223:()=>{}}]);