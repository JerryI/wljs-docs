(self.webpackChunkwlx_docs=self.webpackChunkwlx_docs||[]).push([[37908],{68951:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var r=n(17624),a=n(4552),o=n(46880);const i={},s="Dynamics and User's Input",d={type:"mdx",permalink:"/wljs-docs/wljs-demo/mid-sliders-dynamics/",source:"@site/src/pages/wljs-demo/mid-sliders-dynamics/index.mdx",title:"Dynamics and User's Input",description:"This is one of the major feature developed in WLJS Notebook",frontMatter:{},unlisted:!1},c={},l=[{value:"A shortcut",id:"a-shortcut",level:2},{value:"For whom need a deeper look",id:"for-whom-need-a-deeper-look",level:2},{value:"Sliders and data",id:"sliders-and-data",level:2},{value:"Primitives",id:"primitives",level:2},{value:"Adding sliders",id:"adding-sliders",level:2},{value:"Wrapping up",id:"wrapping-up",level:2}];function p(e){const t={code:"code",em:"em",h1:"h1",h2:"h2",p:"p",strong:"strong",...(0,a.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"dynamics-and-users-input",children:"Dynamics and User's Input"}),"\n",(0,r.jsx)(t.p,{children:"This is one of the major feature developed in WLJS Notebook"}),"\n","\n",(0,r.jsx)(o.Af,{kernel:n(98412).c,json:n(43084).c,notebook:n(11934).c}),"\n",(0,r.jsx)(t.h2,{id:"a-shortcut",children:"A shortcut"}),"\n",(0,r.jsx)(t.p,{children:"If you just need to plot a function with a few parameters to vary"}),"\n",(0,r.jsx)(o.EB,{display:"codemirror",nid:"3741c885-c738-4115-abf5-14f91ebf0527",id:"d1af78af-2220-4aa6-a555-01fe2413a8cf",type:"Input",opts:{},children:"ManipulatePlot%5BSum%5BSin%5Bi%20%CF%89%20t%5D%2C%20%7Bi%2C%2010%7D%5D%2C%20%7Bt%2C0%2C2Pi%7D%2C%20%7B%CF%89%2C%200.%2C%2010.1%2C%200.1%7D%5D"}),"\n",(0,r.jsx)(t.p,{children:"Or for multiple function"}),"\n",(0,r.jsx)(o.EB,{display:"codemirror",nid:"3741c885-c738-4115-abf5-14f91ebf0527",id:"998b5f40-c7c0-4b37-9922-e0242aadfa56",type:"Input",opts:{},children:"ManipulatePlot%5B%7BSin%5B%CF%89%20t%5D%2C%20Sum%5BSin%5Bi%20%CF%89%20t%5D%2C%20%7Bi%2C%2010%7D%5D%7D%2C%20%7Bt%2C0%2C2Pi%7D%2C%20%7B%CF%89%2C%200.%2C%2010.1%2C%200.1%7D%5D"}),"\n",(0,r.jsx)(t.p,{children:"Or for animating"}),"\n",(0,r.jsx)(o.EB,{display:"codemirror",nid:"3741c885-c738-4115-abf5-14f91ebf0527",id:"1a235d3b-0e6e-4692-b112-6d68f3719133",type:"Input",opts:{},children:"AnimatePlot%5B%7BSin%5B%CF%89%20u%5D%2C%20Sum%5BSin%5Bi%20%CF%89%20u%5D%2C%20%7Bi%2C%2010%7D%5D%7D%2C%20%7Bu%2C0%2C2Pi%7D%2C%20%7B%CF%89%2C%200.%2C%205.1%2C%200.1%7D%5D"}),"\n",(0,r.jsx)(o.EB,{display:"codemirror",nid:"3741c885-c738-4115-abf5-14f91ebf0527",id:"5560bdce-9ceb-4eb4-a6d5-bfb887e51984",type:"Output",opts:{},children:"%28%2AVB%5B%2A%29%28FrontEndRef%5B%22a83bbcae-9605-49c1-ad4f-0d55a9e7e1b0%22%5D%29%28%2A%2C%2A%29%28%2A%221%3AeJxTTMoPSmNkYGAoZgESHvk5KRCeEJBwK8rPK3HNS3GtSE0uLUlMykkNVgEKJ1oYJyUlJ6bqWpoZmOqaWCYb6iammKTpGqSYmiZappqnGiYZAACRBhYs%22%2A%29%28%2A%5DVB%2A%29"}),"\n",(0,r.jsx)(t.p,{children:"Or for general purpose"}),"\n",(0,r.jsx)(o.EB,{display:"codemirror",nid:"3741c885-c738-4115-abf5-14f91ebf0527",id:"0cdd31da-bae4-406c-815f-c93a7deec571",type:"Input",opts:{},children:"Manipulate%5BPlot3D%5BSin%5Bn%20x%5D%20Cos%5Bn%20y%5D%2C%20%7Bx%2C-Pi%2CPi%7D%2C%20%7By%2C-Pi%2CPi%7D%5D%2C%20%7Bn%2C%201%2C3%2C1%7D%5D"}),"\n",(0,r.jsx)(t.h2,{id:"for-whom-need-a-deeper-look",children:"For whom need a deeper look"}),"\n",(0,r.jsx)(t.h2,{id:"sliders-and-data",children:"Sliders and data"}),"\n",(0,r.jsx)(t.p,{children:"The simples way to demonstarate it is to generate some data"}),"\n",(0,r.jsx)(o.EB,{display:"codemirror",nid:"3741c885-c738-4115-abf5-14f91ebf0527",id:"42f96599-120c-405b-971e-274639f8b455",type:"Input",opts:{},children:"generate%5B%CF%89_%2C%20t_%5D%20%3A%3D%20Sum%5BSin%5Bi%20%CF%89%20t%5D%2C%20%7Bi%2C%2010%7D%5D"}),"\n",(0,r.jsx)(o.EB,{display:"codemirror",nid:"3741c885-c738-4115-abf5-14f91ebf0527",id:"1466d53f-e09c-4098-83bf-051d13fbe8ac",type:"Input",opts:{},children:"Plot%5Bgenerate%5B10.%2C%20t%5D%2C%20%7Bt%2C%200%2C%202Pi%7D%5D"}),"\n",(0,r.jsx)(o.EB,{display:"codemirror",nid:"3741c885-c738-4115-abf5-14f91ebf0527",id:"5199805f-fcdc-408b-8a0e-0418a19b4258",type:"Output",opts:{},children:"%28%2AVB%5B%2A%29%28FrontEndRef%5B%22e2ac9276-93fa-47c8-8225-9fa8c7f20617%22%5D%29%28%2A%2C%2A%29%28%2A%221%3AeJxTTMoPSmNkYGAoZgESHvk5KRCeEJBwK8rPK3HNS3GtSE0uLUlMykkNVgEKpxolJlsamZvpWhqnJeqamCdb6FoYGZnqWqYlWiSbpxkZmBmaAwCDpRVY%22%2A%29%28%2A%5DVB%2A%29"}),"\n",(0,r.jsxs)(t.p,{children:["This is a static picture, but we can make it dynamic. The major drawback is that we have to use basic primitives such as ",(0,r.jsx)(t.code,{children:"Line"})," and ",(0,r.jsx)(t.code,{children:"Graphics"})," wrapper for this to happen"]}),"\n",(0,r.jsx)(t.h2,{id:"primitives",children:"Primitives"}),"\n",(0,r.jsxs)(t.p,{children:["Let's try it out with ",(0,r.jsx)(t.code,{children:"Graphics"})," step by step"]}),"\n",(0,r.jsx)(o.EB,{display:"codemirror",nid:"3741c885-c738-4115-abf5-14f91ebf0527",id:"5cb74ab9-0caa-4c37-9b36-2beefe94d7c9",type:"Input",opts:{},children:"dyn%20%3D%20Table%5B%7Bt%2C%20generate%5B10.%2C%20t%5D%7D%2C%20%7Bt%2C%200%2C%202Pi%2C%200.04%7D%5D%3B%0AGraphics%5BLine%5Bdyn%5D%5D"}),"\n",(0,r.jsx)(o.EB,{display:"codemirror",nid:"3741c885-c738-4115-abf5-14f91ebf0527",id:"c484b1bf-9c5c-43de-883a-357c518204b1",type:"Output",opts:{},children:"%28%2AVB%5B%2A%29%28FrontEndRef%5B%22cdb634ad-91f7-4a79-8d3e-32f8b7258708%22%5D%29%28%2A%2C%2A%29%28%2A%221%3AeJxTTMoPSmNkYGAoZgESHvk5KRCeEJBwK8rPK3HNS3GtSE0uLUlMykkNVgEKJ6ckmRmbJKboWhqmmeuaJJpb6lqkGKfqGhulWSSZG5lamBtYAACMhxWI%22%2A%29%28%2A%5DVB%2A%29"}),"\n",(0,r.jsx)(t.p,{children:"A bit more clarity"}),"\n",(0,r.jsx)(o.EB,{display:"codemirror",nid:"3741c885-c738-4115-abf5-14f91ebf0527",id:"76fed5b7-2730-4886-be01-7608f397ec25",type:"Input",opts:{},children:"Graphics%5BLine%5Bdyn%5D%2C%20Axes-%3ETrue%2C%20PlotRange-%3E%7B%7B0%2C6%7D%2C%20%7B-7%2C7%7D%7D%5D"}),"\n",(0,r.jsx)(o.EB,{display:"codemirror",nid:"3741c885-c738-4115-abf5-14f91ebf0527",id:"8541b944-b7a0-4fb8-a57d-1f25645344cc",type:"Output",opts:{},children:"%28%2AVB%5B%2A%29%28FrontEndRef%5B%22ea1e5a0c-b365-446e-a8dc-bbe08c0f96f6%22%5D%29%28%2A%2C%2A%29%28%2A%221%3AeJxTTMoPSmNkYGAoZgESHvk5KRCeEJBwK8rPK3HNS3GtSE0uLUlMykkNVgEKpyYappomGiTrJhmbmeqamJil6iZapAC5SakGFskGaZZmaWYAktcWYA%3D%3D%22%2A%29%28%2A%5DVB%2A%29"}),"\n",(0,r.jsxs)(t.p,{children:["However, ",(0,r.jsx)(t.strong,{children:"this is still a static picture"}),", to make it dynamic, we need to use ",(0,r.jsx)(t.code,{children:"Offload"})," keyword"]}),"\n",(0,r.jsx)(o.EB,{display:"codemirror",nid:"3741c885-c738-4115-abf5-14f91ebf0527",id:"9a6b5789-0416-4055-b81a-13758d175cbb",type:"Input",opts:{},children:"Graphics%5BLine%5Bdyn%20%2F%2F%20Offload%5D%2C%20Axes-%3ETrue%2C%20PlotRange-%3E%7B%7B0%2C6%7D%2C%20%7B-7%2C7%7D%7D%5D"}),"\n",(0,r.jsx)(o.EB,{display:"codemirror",nid:"3741c885-c738-4115-abf5-14f91ebf0527",id:"f0356e83-f2d8-4fde-8e05-67b0f936439a",type:"Output",opts:{},children:"%28%2AVB%5B%2A%29%28FrontEndRef%5B%22f2c5929e-c921-4106-917b-1c74a3b074fd%22%5D%29%28%2A%2C%2A%29%28%2A%221%3AeJxTTMoPSmNkYGAoZgESHvk5KRCeEJBwK8rPK3HNS3GtSE0uLUlMykkNVgEKpxklm1oaWabqJlsaGeqaGBqY6VoamifpGiabmyQaJxmYm6SlAAB7XBVD%22%2A%29%28%2A%5DVB%2A%29"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:"Note: Line, Rectangle, Disk, Circle, Sphere, and other primitives support Offload. You cannot put an arbitary expression into Offload"})}),"\n",(0,r.jsx)(t.p,{children:"Now try to evaluate this cell"}),"\n",(0,r.jsx)(o.EB,{display:"codemirror",nid:"3741c885-c738-4115-abf5-14f91ebf0527",id:"381f9dde-9b46-45fd-aed9-e76afba63c82",type:"Input",opts:{},children:"dyn%20%3D%20Table%5B%7Bt%2C%20generate%5B3.%2C%20t%5D%7D%2C%20%7Bt%2C%200%2C%202Pi%2C%200.04%7D%5D%3B"}),"\n",(0,r.jsxs)(t.p,{children:["The graph above should be updated automatically, since the dynamic link between ",(0,r.jsx)(t.strong,{children:"Line"})," and ",(0,r.jsx)(t.strong,{children:"dyn"})," symbols is created."]}),"\n",(0,r.jsx)(t.h2,{id:"adding-sliders",children:"Adding sliders"}),"\n",(0,r.jsx)(t.p,{children:"Of course we need element for a user to interact with"}),"\n",(0,r.jsx)(o.EB,{display:"codemirror",nid:"3741c885-c738-4115-abf5-14f91ebf0527",id:"8c2444b2-d6a1-4e4d-82fa-bda868daf0d0",type:"Input",opts:{},children:"slider%20%3D%20InputRange%5B0%2C%2010%2C%201%2C%20%22Label%22-%3E%22Frequency%22%5D%3B%0Aslider"}),"\n",(0,r.jsx)(o.EB,{display:"codemirror",nid:"3741c885-c738-4115-abf5-14f91ebf0527",id:"61a2042d-6380-49c8-998d-54506f7499ca",type:"Output",opts:{},children:"%28%2AVB%5B%2A%29%28EventObject%5B%3C%7C%22Id%22%20-%3E%20%22a613de31-6810-4712-a709-c1954e17a01a%22%2C%20%22Initial%22%20-%3E%205%2C%20%22View%22%20-%3E%20%22f35d9e88-9ed4-4119-9f79-14a93457c684%22%7C%3E%5D%29%28%2A%2C%2A%29%28%2A%221%3AeJxTTMoPSmNkYGAoZgESHvk5KRCeEJBwK8rPK3HNS3GtSE0uLUlMykkNVgEKpxmbplimWljoWqammOiaGBpa6lqmmVvqGpokWhqbmJonm1mYAACAnRUO%22%2A%29%28%2A%5DVB%2A%29"}),"\n",(0,r.jsx)(t.p,{children:"In order to read the input, we need to assign a handler function. Let it be this one"}),"\n",(0,r.jsx)(o.EB,{display:"codemirror",nid:"3741c885-c738-4115-abf5-14f91ebf0527",id:"8dfc9fdf-c0a3-4837-be76-02dff6a6dac6",type:"Input",opts:{},children:"EventHandler%5Bslider%2C%20Function%5Bfreq%2C%20%0A%20%20dyn%20%3D%20Table%5B%7Bt%2C%20generate%5Bfreq%2C%20t%5D%7D%2C%20%7Bt%2C%200%2C%202Pi%2C%200.04%7D%5D%3B%0A%5D%5D%3B"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:"Note: by dragging a slider above, our dynamic plot should be updated"})}),"\n",(0,r.jsx)(t.h2,{id:"wrapping-up",children:"Wrapping up"}),"\n",(0,r.jsxs)(t.p,{children:["It is better not to litter the global scope and use ",(0,r.jsx)(t.code,{children:"Module"})," or ",(0,r.jsx)(t.code,{children:"LeakyModule"})," to scope our variables"]}),"\n",(0,r.jsx)(o.EB,{display:"codemirror",nid:"3741c885-c738-4115-abf5-14f91ebf0527",id:"f3093185-0204-469f-af9a-eaa5f215bd0c",type:"Input",opts:{},children:"generate%5B%CF%89_%2C%20t_%5D%20%3A%3D%20Sum%5BSin%5Bi%20%CF%89%20t%5D%2C%20%7Bi%2C%2010%7D%5D%3B%0A%0ALeakyModule%5B%7Bdata%2C%20slider%7D%2C%0A%20%20slider%20%3D%20InputRange%5B0%2C%2010%2C%201%2C%20%22Label%22-%3E%22Frequency%22%5D%3B%0A%20%20EventHandler%5Bslider%2C%20Function%5Bfreq%2C%0A%20%20%20%20data%20%3D%20Table%5B%7Bt%2C%20generate%5Bfreq%2C%20t%5D%7D%2C%20%7Bt%2C%200%2C%202Pi%2C%200.04%7D%5D%3B%0A%20%20%5D%5D%3B%0A%0A%20%20slider%20%2F%2F%20EventFire%3B%20%28%2A%20just%20to%20initialize%20%2A%29%0A%0A%20%20%7B%0A%20%20%20%20Graphics%5B%7BColorData%5B97%5D%5B2%5D%2C%20Line%5Bdata%20%2F%2F%20Offload%5D%7D%2C%20Axes-%3ETrue%2C%20PlotRange-%3E%7B%7B0%2C6%7D%2C%20%7B-7%2C7%7D%7D%5D%2C%0A%20%20%20%20slider%0A%20%20%7D%20%2F%2F%20Row%20%0A%5D"}),"\n",(0,r.jsx)(o.EB,{display:"codemirror",nid:"3741c885-c738-4115-abf5-14f91ebf0527",id:"6767c27f-0a4c-4144-9e46-6dbfe4f2ca0a",type:"Output",opts:{},children:"%28%2AGB%5B%2A%29%7B%7B%28%2AVB%5B%2A%29%28FrontEndRef%5B%22bf57a6c2-24ca-45c7-a5be-4fa92bd1d8f6%22%5D%29%28%2A%2C%2A%29%28%2A%221%3AeJxTTMoPSmNkYGAoZgESHvk5KRCeEJBwK8rPK3HNS3GtSE0uLUlMykkNVgEKJ6WZmieaJRvpGpkkJ%2BqamCab6yaaJqXqmqQlWholpRimWKSZAQCQzxZi%22%2A%29%28%2A%5DVB%2A%29%28%2A%7C%2A%29%2C%28%2A%7C%2A%29%28%2AVB%5B%2A%29%28EventObject%5B%3C%7C%22Id%22%20-%3E%20%221f013588-a60b-4b42-a6fd-fa6a85996415%22%2C%20%22Initial%22%20-%3E%205%2C%20%22View%22%20-%3E%20%22ccb79ad0-7d52-45e8-adc3-6856c779f875%22%7C%3E%5D%29%28%2A%2C%2A%29%28%2A%221%3AeJxTTMoPSmNkYGAoZgESHvk5KRCeEJBwK8rPK3HNS3GtSE0uLUlMykkNVgEKJycnmVsmphjomqeYGumamKZa6CamJBvrmlmYmiWbm1umWZibAgCPBRXA%22%2A%29%28%2A%5DVB%2A%29%7D%7D%28%2A%5DGB%2A%29"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:"try to drag a slider"})})]})}function f(e={}){const{wrapper:t}={...(0,a.M)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},46880:(e,t,n)=>{"use strict";n.d(t,{EB:()=>p,gL:()=>l,Af:()=>c});var r,a=n(11504);n(93391),n(28264);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}const i=e=>{let{title:t,titleId:n,...i}=e;return a.createElement("svg",o({xmlns:"http://www.w3.org/2000/svg",fill:"none",className:"w-5 h-5 ml-auto",viewBox:"0 0 24 24","aria-labelledby":n},i),t?a.createElement("title",{id:n},t):null,r||(r=a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",d:"M17 17h.01m.39-3h.6c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C21 15.602 21 16.068 21 17s0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C19.398 20 18.932 20 18 20H6c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C3 18.398 3 17.932 3 17s0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C4.602 14 5.068 14 6 14h.6m5.4 1V4m0 11-3-3m3 3 3-3"})))};var s=n(66528),d=(n(98684),n(52964),n(93664),n(17624));function c(e){let{json:t,notebook:n,kernel:r}=e;const{colorMode:o,setColorMode:c}=(0,s.U)();return(0,a.useEffect)((()=>{console.warn("Create store"),console.warn(t);const e={},n={},a=[],o=new Deferred;let i=async()=>{i=async()=>{},fetch(t).then((t=>{console.warn("Store loaded!"),t.json().then((t=>{interpretate(t.objects,{hold:!0}).then((t=>{console.warn("Objects loaded!"),Object.keys(t).forEach((e=>{const n=new ObjectStorage(e);n.cache=t[e],n.cached=!0})),Object.keys(e).forEach((n=>{Array.isArray(e[n])?e[n].forEach((e=>e.resolve(t[n]))):e[n].resolve(t[n])}))})),interpretate(t.symbols,{hold:!0}).then((e=>{console.warn("Symbols loaded!"),Object.keys(e).forEach((t=>{core[t]=async(e,n)=>await interpretate(core[t].data,n),core[t].data=e[t],core[t]=async(e,n)=>{console.log("IE: calling our symbol...");const r=await interpretate(core[t].data,n);return n.root&&!n.novirtual&&(core[t].instances[n.root.uid]=n.root),r},core[t].update=async(e,n)=>{if(n.useCache)return core[t].cached&&core[t].currentData==core[t].data||(core[t].cached=await interpretate(core[t].data,n),core[t].currentData=core[t].data),core[t].cached;return await interpretate(core[t].data,n)},core[t].destroy=async(e,n)=>{delete core[t].instances[n.root.uid],console.warn(n.root.uid+" was destroyed"),console.warn("external symbol was destoryed")},core[t].data=e[t],core[t].virtual=!0,core[t].instances={}})),Object.keys(n).forEach((t=>{console.warn(t),n[t].resolve(e[t])})),o.resolve()}))}))}))};core.Offload=(e,t)=>{if(e.length>1)if("'Static'"===e[1][1]){if(e[1][2])return interpretate(e[0],{...t,static:!0})}else if(e.length>2&&"'Static'"===e[2][1]&&e[2][2])return interpretate(e[0],{...t,static:!0});return interpretate(e[0],t)},core.Offload.update=(e,t)=>{if(e.length>1)if("'Volatile'"===e[1][1]){if(!e[1][2])return void console.log("Update was rejected (Nonvolatile)")}else if(e.length>2&&"'Volatile'"===e[2][1]&&!e[2][2])return void console.log("Update was rejected (Nonvolatile)");return interpretate(e[0],t)},window.server={kernel:{}},window.server.ask=t=>{const n=new Deferred;return t.length<42?(console.error("Unknown command"),console.error(t),!1):(Array.isArray(e[t.slice(42,-2)])?e[t.slice(42,-2)].push(n):e[t.slice(42,-2)]=[n],i(),n.promise)},window.server.getSymbol=e=>{const t=new Deferred;return console.warn("Asking for symbol"+e),n[e]=t,t.promise},window.server.kernel.emitt=function(e,t,n){void 0===n&&(n="Default"),a.push({uid:e,data:t,type:n})},interpretate.anonymous=async(e,t)=>{let r,a;if(console.log("Anonimous symbol: "+JSON.stringify(e)),e instanceof Array)throw console.error(e),"unknown WL expression. Error at "+e[0];r=e;const o=new Deferred;return console.warn("Asking for symbol"+r),n[r]=o,a=await o.promise,core[r]=async(e,t)=>{console.log("IE: calling our symbol...");const n=await interpretate(core[r].data,t);return t.root&&!t.novirtual&&(core[r].instances[t.root.uid]=t.root),n},core[r].update=async(e,t)=>{if(t.useCache)return core[r].cached&&core[r].currentData==core[r].data||(core[r].cached=await interpretate(core[r].data,t),core[r].currentData=core[r].data),core[r].cached;return await interpretate(core[r].data,t)},core[r].destroy=async(e,t)=>{delete core[r].instances[t.root.uid],console.warn(t.root.uid+" was destroyed"),console.warn("external symbol was destoryed")},core[r].data=a,core[r].virtual=!0,core[r].instances={},interpretate(e,t)},(async()=>{if(console.warn("Kernel"),r){if(console.warn("KERNEL"),!interpretate.unzlib64String){const e=new Deferred,t=document.createElement("script");t.src="https://cdn.jsdelivr.net/gh/JerryI/wljs-export-html@main/dist/zip.min.js",t.addEventListener("load",(()=>e.resolve())),document.head.appendChild(t),await e.promise,console.warn("ZIP loaded!")}if(!window.KernelState){const e=new Deferred,t=document.createElement("script");t.src="https://cdn.jsdelivr.net/gh/JerryI/wljs-export-html@main/dist/decoder.min.js",t.addEventListener("load",(()=>e.resolve())),document.head.appendChild(t),await e.promise,console.warn("KernelState lib loaded!")}fetch(r).then((e=>{console.log(e),e.json().then((async e=>{let t=e;t=t.map((e=>interpretate.unzlib64String(e))),t=t.map(KernelMesh.unpack),console.warn("Mesh loaded!"),window.server.kernel.emitt=function(e,n,r){void 0===r&&(r="Default"),setTimeout((()=>{const a={type:"event",uid:e,pattern:r,data:n},o=t;for(let e=0;e<o.length;++e)if(o[e].test(a)){if(o[e].state)o[e].state=new KernelState(o[e].state,a,!0);else{if(o[e].database.has("$initialization")){o[e].database.get("$initialization").forEach((t=>o[e].state=new KernelState(o[e].state,t,!0)))}o[e].state=new KernelState(o[e].state,a,!0)}o[e].state.exec(o[e].database,(e=>{for(const t of Object.keys(e))if("$state"!==t)if(1===e[t].set.length){core[t].data=e[t].set[0];for(const e of Object.values(core[t].instances))e.update()}else{e[t].i+=1,e[t].i>=e[t].set.length&&(e[t].i=0),core[t].data=e[t].set[e[t].i];for(const e of Object.values(core[t].instances))e.update()}}))}}),2)},a.forEach((e=>window.server.kernel.emitt(e.uid,e.data,e.type)))}))}))}})()})),(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("a",{href:n,className:"dark"==o?"p-2 text-xs w-full flex ring-1 ring-inset shadow ring-gray-300 text-gray-300 my-2":"p-2 text-xs w-full flex ring-1 ring-inset text-gray-600 shadow ring-gray-300 bg-gray-300 my-2",children:["Download original notebook ",(0,d.jsx)(i,{})]})})}function l(e){let{children:t,data:n}=e;const r={__html:decodeURIComponent(t)};return(0,d.jsx)("div",{dangerouslySetInnerHTML:r})}function p(e){let{children:t,nid:n,id:r,type:o,display:i,opts:c}=e;const l=(0,a.useRef)(null),{colorMode:p,setColorMode:f}=(0,s.U)(),u=decodeURIComponent(t),[m,h]=(0,a.useState)(c.Fade),[C,b]=(0,a.useState)(!1);return(0,a.useEffect)((()=>{const e=l.current;let t;if(console.warn("Create Codemirror"),console.warn(i),console.log(u),b(!0),console.warn("Created: "+i),"print"!=i){if(window.SupportedCells[i])return window.SupportedCells[i].view&&(t=new window.SupportedCells[i].view({element:e},u)),t.editor&&c.Fade&&(l.current.addEventListener("focusin",(()=>{h(!1)})),l.current.addEventListener("focusout",(()=>{h(!0)}))),()=>{t&&t.dispose()};console.warn("Not found: "+i)}}),[]),(0,d.jsx)("div",{style:{filter:"dark"==p?"invert(1) contrast(0.8) hue-rotate(-185deg)":"none"},className:"language-mathematica codeBlockContainer_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-Container-styles-module theme-code-block",children:(0,d.jsx)("div",{className:m?"h-fade-20 codeBlockContent_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-Content-styles-module":"codeBlockContent_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-Content-styles-module",children:(0,d.jsxs)("pre",{tabIndex:"0",className:"prism-code language-mathematica codeBlock_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-Content-styles-module thin-scrollbar",style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)"},children:[!C&&(0,d.jsx)("code",{style:{whiteSpace:"pre-wrap"},className:"codeBlockLines_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-Content-styles-module",children:u}),(0,d.jsx)("code",{ref:l,className:"codeBlockLines_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-Content-styles-module"})]})})})}},43084:(e,t,n)=>{"use strict";n.d(t,{c:()=>r});const r=n.p+"30c62f1354937da73254b7830e92da4d.txt"},98412:(e,t,n)=>{"use strict";n.d(t,{c:()=>r});const r=n.p+"a26ff800ebbff528a0f3a6a7fd9756af.txt"},11934:(e,t,n)=>{"use strict";n.d(t,{c:()=>r});const r=n.p+"057873ed69b8ac1f38878b003c6ea2d1.wln"},47944:()=>{},73223:()=>{}}]);