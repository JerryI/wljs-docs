"use strict";(self.webpackChunkwljs_docs=self.webpackChunkwljs_docs||[]).push([[7512],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=i,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3e3:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(7294);const i={crush:(e,t=50)=>{let n=[];const r="-_.!~*'()";for(let o=127;--o;)(o>=48&&o<=57||o>=65&&o<=90||o>=97&&o<=122||r.includes(String.fromCharCode(o)))&&n.push(String.fromCharCode(o));for(let o=32;o<255;++o){let e=String.fromCharCode(o);"\\"==e||n.includes(e)||n.unshift(e)}e=e.replace(new RegExp("\x01","g"),"");const i=((e,n)=>{let r=n.length,i="";const o=e=>encodeURI(encodeURIComponent(e)).replace(/%../g,"i").length,a=e=>{let t=e.charCodeAt(0),n=e.charCodeAt(e.length-1);return t>=56320&&t<=57343||n>=55296&&n<=56319};let s={};for(let l=2;l<t;l++)for(let t=0;t<e.length-l;++t){let n=e.substr(t,l);if(s[n])continue;if(a(n))continue;let r=1;for(let i=e.indexOf(n,t+l);i>=0;++r)i=e.indexOf(n,i+l);r>1&&(s[n]=r)}for(;;){for(;r--&&e.includes(n[r]););if(r<0)break;let t,a=n[r],l=0,c=o(a);for(let e in s){let n=s[e],r=(n-1)*o(e)-(n+1)*c;i.length||(r-=o("\x01")),r<=0?delete s[e]:r>l&&(t=e,l=r)}if(!t)break;e=e.split(t).join(a)+a+t,i=a+i;let p={};for(let n in s){let r=n.split(t).join(a),i=0;for(let t=e.indexOf(r);t>=0;++i)t=e.indexOf(r,t+r.length);i>1&&(p[r]=i)}s=p}return{a:e,b:i}})(e=o(e),n);let a=i.a;return i.b.length&&(a+="\x01"+i.b),a+="_",a},uncrush:e=>{const t=(e=e.substring(0,e.length-1)).split("\x01");let n=t[0];if(t.length>1){let e=t[1];for(let t of e){let e=n.split(t);n=e.join(e.pop())}}return o(n,0)}},o=(e,t=1)=>{const n=[['"',"'"],["':","!"],[",'","~"],["}",")","\\","\\"],["{","(","\\","\\"]],r=(e,t)=>{let n=new RegExp(`${(t[2]?t[2]:"")+t[0]}|${(t[3]?t[3]:"")+t[1]}`,"g");return e.replace(n,(e=>e===t[0]?t[1]:t[0]))};if(t)for(let i=0;i<n.length;++i)e=r(e,n[i]);else for(let i=n.length;i--;)e=r(e,n[i]);return e};function a(e){let{children:t,code:n,width:o,height:a}=e;(0,r.useRef)();const s=JSON.parse(i.uncrush(decodeURIComponent(n))),l=s.js,c=s.compiled,p=`<html>\n  <head>  \n\n    <script>             \n    function isElement(o){\n      return (\n        typeof HTMLElement === "object" ? o instanceof HTMLElement : //DOM2\n        o && typeof o === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName==="string"\n    );\n    }\n    <\/script>\n \n  </head>\n  <body>\n    <div id="canvas" style="text-align:center"></div>\n\n    \n    <script type="module" src="https://cdn.jsdelivr.net/gh/JerryI/wljs-interpreter@main/dist/interpreter.js"><\/script>\n    <script type="module" src="https://cdn.jsdelivr.net/gh/JerryI/wljs-interpreter@main/dist/core.js"><\/script>\n\n    ${(s.includes||[]).map((e=>`<script type="module" src="${e}"><\/script>`)).join("")}\n    \n\n    <script type="module">\n    console.log('start');\n      let global = {};\n      let env = {global: global};\n\n\n        const $f = async () => {\n          ${l}\n        };\n\n        const r = await $f();\n\n        console.log('js');\n\n        if (isElement(r)) {\n          document.getElementById('canvas').appendChild(r);\n        } else {\n          console.log(r);\n        }\n        console.log('op');\n        await interpretate(${JSON.stringify(c)}, env);\n        console.log('ok');\n\n\n    <\/script>\n  </body>\n  </html>`;return r.createElement("iframe",{width:o||"100%",height:a||"auto",srcDoc:p})}},8908:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(7462),i=(n(7294),n(3905)),o=n(3e3);const a={sidebar_position:4},s="Working with graphics",l={unversionedId:"interpreter/Basics/graphics",id:"interpreter/Basics/graphics",title:"Working with graphics",description:"Easy animations",source:"@site/docs/interpreter/Basics/graphics.md",sourceDirName:"interpreter/Basics",slug:"/interpreter/Basics/graphics",permalink:"/wljs-docs/docs/interpreter/Basics/graphics",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"interpreterSidebar",previous:{title:"Javascript integration",permalink:"/wljs-docs/docs/interpreter/Basics/js-access"},next:{title:"Advanced",permalink:"/wljs-docs/docs/category/advanced"}},c={},p=[{value:"Easy animations",id:"easy-animations",level:2}],d={toc:p},u="wrapper";function f(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"working-with-graphics"},"Working with graphics"),(0,i.kt)("h2",{id:"easy-animations"},"Easy animations"),(0,i.kt)("p",null,"Since ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/JerryI/wljs-graphics-d3"},"wljs-graphics-d3")," provides transitions on update, it is extremely easy to make some complicated animations"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-mathematica"},'data = RandomReal[{-1,1}, {400,2}];\n\nFrontEndVirtual[{\n    AttachDOM["canvas"];\n    Graphics[{RGBColor[1.0,0.,0.5], Point[data]}, "TransitionDuration"->0];\n}]; \n \nTable[\n  data = (1 - t) RandomReal[{-1,1}, {400,2}] \n            + t Table[{Sin[3i], Cos[2i]}, {i, 0, 6.28, 6.28/400}];\n            \n  Pause[0.1]; \n, {t, 0, 1, 0.025}]; \n')),(0,i.kt)("p",null,"Each time we update ",(0,i.kt)("inlineCode",{parentName:"p"},"data")," variable, the transition between frames happends automatically based on selected ",(0,i.kt)("inlineCode",{parentName:"p"},"TransitionDuration")),(0,i.kt)(o.Z,{code:"('wls!'%3CZYQQ%24%5B(Q77AttachDOM%5B%5C'canvas%5C'YQ77G%26%5B(RGBColor%5B1.q0.%2C0.5%5DKPoint%5Bdata%5D)K%5C'%23%5C'-%3E0YQ)Y%20QQWhile%5BTrue%2CQTable%5BQ7%3C%20%7B1%20-%20t%7DZ%5D%20Q777777%2B%20t%20Table%5B(Sin%5B3i%5DKCos%5B2i%5D)K(iK0K6.28K6.28%2F400)YQ777777Q7Pause%5B0.1Y%20QK(tK0K1K0.025)Y%20QQPause%5B2Y%20QQYQ'~js!''~includes!%5B'https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2FJerryI%2Fwljs-g%26-d3%40latest%2Fdist%2Fkernel.js'~.%2Fcurves.js'%5D~compiled!%5B'Hold'NSe%25U%24'_'NAttachDOM'~%22canvas%22'%5D*G%26'_'*RGBColorX1%2Cq0.5%5D*Poin%259*Rule'~%22%23%22X09z9%5D*WhileXtrueNTable'NSe%25*Plus'*f'*PlusX1*fX-1~t'9Uf'~t'*Table'_'*Sin'*fX3~i'9*Cos'*fX2~i'9%5D_'~iXq6.28*fX6.28*PowerX40q-1999%5D*PauseX0.1%5Dz%5D_'~tXq1%2C0.0259*PauseX2%5Dz9z9)*%2C%5B'7%20%209%5D%5DK%2C%20N*CompoundExpression'*Q%5CnU*%3F'_X-1%2C1%5D_X40q29%5D*X'%2CY%5D%3BZ%20%3F%5B(-1%2C1)K(40q2)_*ListfTimesq0%2Cz%2Cnull%23TransitionDuration%24FrontEndVirtual%25t'~data'%26raphics%3Cdata%20%3D%3FRandomReal%01%3F%3C%26%25%24%23zqf_ZYXUQNK97*_",height:"500",mdxType:"Sandbox"},"Ease"))}f.isMDXComponent=!0}}]);