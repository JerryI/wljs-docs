"use strict";(self.webpackChunkwlx_docs=self.webpackChunkwlx_docs||[]).push([[70632],{5972:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var t=a(17624),o=a(4552);const r={title:"RevealJS x WL logo code",tags:["graphics","short"]},s=void 0,i={permalink:"/wljs-docs/blog/2024/10/25/rtx-logo",source:"@site/blog/2024-10-25-rtx-logo.md",title:"RevealJS x WL logo code",description:"A tandem of RevealJS and Wolfram Language made using Graphics3D and Path-tracing",date:"2024-10-25T00:00:00.000Z",tags:[{label:"graphics",permalink:"/wljs-docs/blog/tags/graphics"},{label:"short",permalink:"/wljs-docs/blog/tags/short"}],readingTime:.66,hasTruncateMarker:!0,authors:[],frontMatter:{title:"RevealJS x WL logo code",tags:["graphics","short"]},unlisted:!1,prevItem:{title:"Introducing non indexed geometry",permalink:"/wljs-docs/blog/2024/11/08/non-indexed"},nextItem:{title:"Giant dweller worm",permalink:"/wljs-docs/blog/2024/10/24/worm"}},c={authorsImageUrls:[]},l=[];function d(e){const n={code:"code",img:"img",p:"p",pre:"pre",...(0,o.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["A tandem of RevealJS and Wolfram Language made using ",(0,t.jsx)(n.code,{children:"Graphics3D"})," and Path-tracing"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:a(61140).c+"",width:"800",height:"494"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-mathematica",children:'With[{a = 30, b = 30}, {\n  {\n    {\n      Graphics3D`Materials["Glass"], \n      Directive[\n        "MaterialThickness" -> 0, \n        "Transmission" -> 0.8, \n        "Roughness" -> 0.5\n      ], \n      Orange, \n      GeometricTransformation[\n        Cuboid[{-1.1 a, -1.1 a, -b 0.03}, {1.1 a, 1.1 a, b 0.03}], \n        RotationMatrix[-45 Degree, {0, 1, 0}]\n      ]\n    },\n    {\n      Graphics3D`Materials["Iridescent"], \n      Pink, \n      With[{i = Interpolation[\n        {\n          {0, {-a, -a, b}}, \n          {0.25, {-a, a, b}}, \n          {0.5, {a, a, -b}}, \n          {0.75, {a, -a, -b}}, \n          {1.0, {-a, -a, b}}, \n          {1.2, {-a, -a, b}}\n        }, InterpolationOrder -> 1\n      ]},\n      Tube[Table[i[j], {j, 0, 1.2, 0.01}]]\n      ]\n    }\n  },\n  Red, \n  Directive["Emissive" -> Red], \n  Translate[\n    GeometricTransformation[\n      PolyhedronData["RhombicHexecontahedron", "Faces"] // N, \n      IdentityMatrix[3] * 8\n    ], \n    {40, 0, 0}\n  ]\n}];\n\nGraphics3D[%, \n  ViewProjection -> "Perspective", \n  "Renderer" -> "PathTracing", \n  ImageSize -> 800\n]\n'})})]})}function g(e={}){const{wrapper:n}={...(0,o.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},61140:(e,n,a)=>{a.d(n,{c:()=>t});const t=a.p+"assets/images/5249342723645891565-ca2bc58719c22adfb049bee936ef6261.jpg"},4552:(e,n,a)=>{a.d(n,{I:()=>i,M:()=>s});var t=a(11504);const o={},r=t.createContext(o);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);