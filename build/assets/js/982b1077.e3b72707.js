"use strict";(self.webpackChunkwlx_docs=self.webpackChunkwlx_docs||[]).push([[54652],{82896:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var i=t(17624),s=t(4552),r=t(19920);const a={sidebar_position:2},o="Symbols and expressions",l={id:"interpreter/Basics/scripts",title:"Symbols and expressions",description:"It is assumed, you have wljs-graphics-d3 (see Libraries @ syntax) library included in your page. Most examples depend on it.",source:"@site/docs/interpreter/Basics/scripts.md",sourceDirName:"interpreter/Basics",slug:"/interpreter/Basics/scripts",permalink:"/wljs-docs/interpreter/Basics/scripts",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1694725606e3,sidebarPosition:2,frontMatter:{sidebar_position:2}},c={},d=[{value:"Limitations",id:"limitations",level:2},{value:"Implicit data-binding",id:"implicit-data-binding",level:2},{value:"Containers and DOM structure",id:"containers-and-dom-structure",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"symbols-and-expressions",children:"Symbols and expressions"}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["It is assumed, you have ",(0,i.jsx)(n.a,{href:"https://github.com/JerryI/wljs-graphics-d3",children:"wljs-graphics-d3"})," (see Libraries @ ",(0,i.jsx)(n.a,{href:"/wljs-docs/interpreter/Basics/syntax#Libraries",children:"syntax"}),") library included in your page. Most examples depend on it."]})}),"\n",(0,i.jsx)(n.h2,{id:"limitations",children:"Limitations"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"no pattern matching possible"}),"\n",(0,i.jsx)(n.li,{children:"no symbolic computations"}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"UpValue"}),", ",(0,i.jsx)(n.code,{children:"DownValue"})," are not supported"]}),"\n",(0,i.jsx)(n.li,{children:"no WL function definition is possible (for now)"}),"\n",(0,i.jsx)(n.li,{children:"most WL Kernel functions are not implemented"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Despite the fact of those limitations, WLJS intepreter together with graphics extensions can interpret results produced by Wolfram Engine / Mathematica and also is feasible for some simple standalone calculations."}),"\n",(0,i.jsx)(n.p,{children:"The biggest advantage compared to the original Wolfram Kernel is a native integration with Javascript ecosystem, since it is capable to read, write and execute Javascript functions and objects with no overhead complexity under the hood."}),"\n",(0,i.jsx)(n.h2,{id:"implicit-data-binding",children:"Implicit data-binding"}),"\n",(0,i.jsxs)(n.p,{children:["By the default all defined symbols can be considered as ",(0,i.jsx)(n.code,{children:"Dynamic"})," in terms of Wolfram Mathematica. For example, when you define a variable"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-mathematica",children:"a = 1;\n"})}),"\n",(0,i.jsxs)(n.p,{children:["it extends the ",(0,i.jsx)(n.a,{href:"/wljs-docs/interpreter/Advanced/architecture",children:"default context"})," ",(0,i.jsx)(n.code,{children:"core"})," with a corresponding symbol with a ",(0,i.jsx)(n.code,{children:"virtual"})," attribute. It means, if this one enters the any other expressions that support updates"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-mathematica",children:'(* to be able to manipulate DOM elements, we need container *)\nFrontEndVirtual[{\n\t(* attach a dom element to draw by ID *)\n    AttachDOM["canvas"],\n    (* our graphics *)\n    Graphics[{PointSize[0.1], RGBColor[{1.,1.,0}],  Point[{a,0}]}]\n}]; \n'})}),"\n",(0,i.jsxs)(n.p,{children:["It creates a special object called ",(0,i.jsx)(n.a,{href:"/wljs-docs/interpreter/Advanced/containers",children:"Virtual Container"}),", that has its identity, local memory and can be connected to a chain to other functions. More about it you can read in the ",(0,i.jsx)(n.a,{href:"/wljs-docs/interpreter/Advanced/containers",children:"Advanced guide"}),". As well as all functions, which use DOM elements to draw need to be executed inside ",(0,i.jsx)(n.code,{children:"FrontEndVirtual"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Then if one change the variable later"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-mathematica",children:"a = -1;\n"})}),"\n",(0,i.jsx)(n.p,{children:"it will trigger the cascade of update in all expressions, where it is used."}),"\n","\n",(0,i.jsx)(r.c,{code:"('wls!'%241%3BK%7B*_be%20able_animate%20we%20need%20a%20container%23Kf%5B(K%5Ct%7B*%20attach%20a%20dom%20element_draw%236QAttachDOM%5B%5C'canvas%5C'Z6Q%7B*%20our%20gY%236QGY%5B(PointSize%5B0.1Z%20RGBColor%5B(1.%2C1.%2C0)ZQPoint%5B(a%2C0)%5D)%2C%20ImageSize-%3E(500%2C100)%5DK)%5D%3B%20KKWhile%5BTrue%2C8-1%3B81%3BK%5D%3BK'~js!''~includes!%5B'https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2FJerryI%2Fwljs-gY-d3%40latest%2Fdist%2Fkernel.js'%5D~compiled!%5B'Hold'XSet'~a71NfU'4AttachDOM'~%22canvas%22'NGYU'4PointSize70.1NRGBColorU71%2C1%2C094PointU'~a709NRule'~ImageSizeU7500%2C10099NWhile7trueXq-1Nq1Znull9%2Cnull9)4%2C%5B'6KQ7'%2C86Pause%5B2%5D%3B6%249%5D%5DK%5CnN%5D4Q%20%20U'4ListX4CompoundExpression'4YraphicsZ%5D%2C_%20to%20fFrontEndVirtualqPause72NSet'~a7%23%20*%7D%24a%20%3D%20%01%24%23qf_ZYXUQNK98764_",children:"Ball movement"}),"\n",(0,i.jsx)(n.h2,{id:"containers-and-dom-structure",children:"Containers and DOM structure"}),"\n",(0,i.jsxs)(n.p,{children:["Manipulation with DOM is better to do using pure JS functions, however if one needs only to attach a specific graphical element generated by Wolfram Language a procedure ",(0,i.jsx)(n.code,{children:'AttachDOM["element-id"]'})," is provided."]}),"\n",(0,i.jsxs)(n.p,{children:["Since ",(0,i.jsx)(n.code,{children:"Graphics"})," or ",(0,i.jsx)(n.code,{children:"Graphics3D"})," has its own local scope to store event handlers, which are necessary to manipulate with plots, you need to execute them inside so-called container (virtual container)"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-mathematica",children:"FrontEndVirtual[{\n\t...\n}]\n"})}),"\n",(0,i.jsxs)(n.p,{children:["For each call of ",(0,i.jsx)(n.code,{children:"FrontEndVirtual"})," a local memory and id is created, therefore ",(0,i.jsx)(n.code,{children:"Graphics"})," can use it to store its data and have an access to DOM elements attached by ",(0,i.jsx)(n.code,{children:"AttachDOM"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"For example one can create an HTML structure"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<div id="left"  style="display:inline-block"></div>\n<div id="right" style="display:inline-block"></div>\n'})}),"\n",(0,i.jsx)(n.p,{children:"and attach different graphics elements to is"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-mathematica",children:'a = 1;\n\nFrontEndVirtual[{\n\t(* attach a dom element to draw *)\n    AttachDOM["left"],\n    (* our graphics *)\n    Graphics[{PointSize[0.1], RGBColor[{1.,1.,0}],  Point[{a,0}]}, ImageSize->{200,100}]\n}]; \n\nFrontEndVirtual[{\n\t(* attach a dom element to draw *)\n    AttachDOM["right"],  \n    (* our graphics *)\n    Graphics[{PointSize[0.1], RGBColor[{1.,0.,1.}],  Point[{-a,0}]}, ImageSize->{200,100}]\n}]; \n'})}),"\n",(0,i.jsx)(n.p,{children:"Both plots will be updated independently"}),"\n",(0,i.jsx)(r.c,{code:"('wls!'a61%3B9b%3D-1%3B%209%7B*%20to%20be%20able%20to%20animate%20we%20need%20a%20container%20*%7D9%267%60left%5C'q58%2B1.%2C0%7FaQ%267%60right%5C'q%2558%2B0.%2C1.%7FbQWhile%5BTrue%2CXa6-1%3BXb61%3B5a61%3BX5a61%3BXb6-1%3B9%5D%3B9'~js!'const%20el1Y1.id6%5C'left%5C'%3B9el1_const%20el2Y2.id6%5C'right%5C'%3B9el2_%241%7D%3B9%242%7D%3B9'~includes!%5B'https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2FJerryI%2Fwljs-g%7C-d3%40latest%2Fdist%2Fkernel.js'%5D~compiled!%5B'Hold'%3CSet'~aKb'%2C-1%5D4%23lefZolorU%2C1%2C1%2C0%5E4PointU~aN%23righZolorU%2C1%2C0%2C1%5E4PointU~bNWhile'%2Ctrue%3CPauseKa'%2C-%3FbKa'%2C%3Fa'%2C%3Fb'%2C-1qnull%5Dqnull%5E)4%2C%5B'59%256%20%3D%207ual%5B(9%5Ct%7B*%20attach%20a%20dom%20element%20to%20draw%20*%7D5%258%25%7B*%20our%20g%7C%20*%7D5%25G%7C%5B(PointSize%5B0.19%5CnK'%2C1%5D4Set'~N'%2C0%5E%5D4Rule'~ImageSizeU%2C200%2C100%5E%5E%5D4Q%2C0)%5D)%2C%20ImageSize-%3E(200%2C100)%5D9)%5D%3B%2099U'4List'X5Pause%5B1%5D%3B5Y6document.createElement%7B%22div%22%7D%3B9elZt%22'%5D4G%7CU4PointSize'%2C0.1%5D4RGBC_.style.display6%5C'inline-block%5C'%3B99q%5D%2C%23%26ualU4AttachDOM'~%22%24document.body.append%7Bel%25%20%20%26FrontEndVirt%2Bq%20RGBColor%5B(1.%2C%3C4CompoundExpression'4%3F1%5D4PauseK%5E%5D%5D%60AttachDOM%5B%5C'%7Craphics%7F)q%25Point%5B(%01%7F%7C%60%5E%3F%3C%2B%26%25%24%23q_ZYXUQNK987654_",children:"Two divs"})]})}function p(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},19920:(e,n,t)=>{t.d(n,{c:()=>o});var i=t(11504);const s={crush:(e,n=50)=>{let t=[];const i="-_.!~*'()";for(let r=127;--r;)(r>=48&&r<=57||r>=65&&r<=90||r>=97&&r<=122||i.includes(String.fromCharCode(r)))&&t.push(String.fromCharCode(r));for(let r=32;r<255;++r){let e=String.fromCharCode(r);"\\"==e||t.includes(e)||t.unshift(e)}e=e.replace(new RegExp("\x01","g"),"");const s=((e,t)=>{let i=t.length,s="";const r=e=>encodeURI(encodeURIComponent(e)).replace(/%../g,"i").length,a=e=>{let n=e.charCodeAt(0),t=e.charCodeAt(e.length-1);return n>=56320&&n<=57343||t>=55296&&t<=56319};let o={};for(let l=2;l<n;l++)for(let n=0;n<e.length-l;++n){let t=e.substr(n,l);if(o[t])continue;if(a(t))continue;let i=1;for(let s=e.indexOf(t,n+l);s>=0;++i)s=e.indexOf(t,s+l);i>1&&(o[t]=i)}for(;;){for(;i--&&e.includes(t[i]););if(i<0)break;let n,a=t[i],l=0,c=r(a);for(let e in o){let t=o[e],i=(t-1)*r(e)-(t+1)*c;s.length||(i-=r("\x01")),i<=0?delete o[e]:i>l&&(n=e,l=i)}if(!n)break;e=e.split(n).join(a)+a+n,s=a+s;let d={};for(let t in o){let i=t.split(n).join(a),s=0;for(let n=e.indexOf(i);n>=0;++s)n=e.indexOf(i,n+i.length);s>1&&(d[i]=s)}o=d}return{a:e,b:s}})(e=r(e),t);let a=s.a;return s.b.length&&(a+="\x01"+s.b),a+="_",a},uncrush:e=>{const n=(e=e.substring(0,e.length-1)).split("\x01");let t=n[0];if(n.length>1){let e=n[1];for(let n of e){let e=t.split(n);t=e.join(e.pop())}}return r(t,0)}},r=(e,n=1)=>{const t=[['"',"'"],["':","!"],[",'","~"],["}",")","\\","\\"],["{","(","\\","\\"]],i=(e,n)=>{let t=new RegExp(`${(n[2]?n[2]:"")+n[0]}|${(n[3]?n[3]:"")+n[1]}`,"g");return e.replace(t,(e=>e===n[0]?n[1]:n[0]))};if(n)for(let s=0;s<t.length;++s)e=i(e,t[s]);else for(let s=t.length;s--;)e=i(e,t[s]);return e};var a=t(17624);function o(e){let{children:n,code:t,width:r,height:o}=e;(0,i.useRef)();const l=JSON.parse(s.uncrush(decodeURIComponent(t))),c=l.js,d=l.compiled,h=`<html>\n  <head>  \n\n    <script>             \n    function isElement(o){\n      return (\n        typeof HTMLElement === "object" ? o instanceof HTMLElement : //DOM2\n        o && typeof o === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName==="string"\n    );\n    }\n    <\/script>\n \n  </head>\n  <body>\n    <div id="canvas" style="text-align:center"></div>\n\n    \n    <script type="module" src="https://cdn.jsdelivr.net/gh/JerryI/wljs-interpreter@main/dist/interpreter.js"><\/script>\n    <script type="module" src="https://cdn.jsdelivr.net/gh/JerryI/wljs-interpreter@main/dist/core.js"><\/script>\n\n    ${(l.includes||[]).map((e=>`<script type="module" src="${e}"><\/script>`)).join("")}\n    \n\n    <script type="module">\n    console.log('start');\n      let global = {};\n      let env = {global: global};\n\n\n        const $f = async () => {\n          ${c}\n        };\n\n        const r = await $f();\n\n        console.log('js');\n\n        if (isElement(r)) {\n          document.getElementById('canvas').appendChild(r);\n        } else {\n          console.log(r);\n        }\n        console.log('op');\n        await interpretate(${JSON.stringify(d)}, env);\n        console.log('ok');\n\n\n    <\/script>\n  </body>\n  </html>`;return(0,a.jsx)("iframe",{width:r||"100%",height:o||"auto",srcDoc:h})}},4552:(e,n,t)=>{t.d(n,{I:()=>o,M:()=>a});var i=t(11504);const s={},r=i.createContext(s);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);