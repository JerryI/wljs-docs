(self.webpackChunkwlx_docs=self.webpackChunkwlx_docs||[]).push([[54976],{9452:(e,t,n)=>{"use strict";n.d(t,{c:()=>j});var a=n(11504),s=n(65456),r=n(3180),i=n(11432),o=n(10867),l=n(33456),c=n(55592),d=n(13376);function m(e){const{pathname:t}=(0,c.IT)();return(0,a.useMemo)((()=>e.filter((e=>function(e,t){return!(e.unlisted&&!(0,d.Sc)(e.permalink,t))}(e,t)))),[e,t])}const u={sidebar:"sidebar_re4s",sidebarItemTitle:"sidebarItemTitle_pO2u",sidebarItemList:"sidebarItemList_Yudw",sidebarItem:"sidebarItem__DBe",sidebarItemLink:"sidebarItemLink_mo7H",sidebarItemLinkActive:"sidebarItemLinkActive_I1ZP"};var g=n(17624);function h(e){let{sidebar:t}=e;const n=m(t.items);return(0,g.jsx)("aside",{className:"col col--3",children:(0,g.jsxs)("nav",{className:(0,s.c)(u.sidebar,"thin-scrollbar"),"aria-label":(0,l.G)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,g.jsx)("div",{className:(0,s.c)(u.sidebarItemTitle,"margin-bottom--md"),children:t.title}),(0,g.jsx)("ul",{className:(0,s.c)(u.sidebarItemList,"clean-list"),children:n.map((e=>(0,g.jsx)("li",{className:u.sidebarItem,children:(0,g.jsx)(o.c,{isNavLink:!0,to:e.permalink,className:u.sidebarItemLink,activeClassName:u.sidebarItemLinkActive,children:e.title})},e.permalink)))})]})})}var p=n(45168);function x(e){let{sidebar:t}=e;const n=m(t.items);return(0,g.jsx)("ul",{className:"menu__list",children:n.map((e=>(0,g.jsx)("li",{className:"menu__list-item",children:(0,g.jsx)(o.c,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active",children:e.title})},e.permalink)))})}function b(e){return(0,g.jsx)(p.Mx,{component:x,props:e})}function f(e){let{sidebar:t}=e;const n=(0,i.U)();return t?.items.length?"mobile"===n?(0,g.jsx)(b,{sidebar:t}):(0,g.jsx)(h,{sidebar:t}):null}function j(e){const{sidebar:t,toc:n,children:a,...i}=e,o=t&&t.items.length>0;return(0,g.jsx)(r.c,{...i,children:(0,g.jsx)("div",{className:"container margin-vert--lg",children:(0,g.jsxs)("div",{className:"row",children:[(0,g.jsx)(f,{sidebar:t}),(0,g.jsx)("main",{className:(0,s.c)("col",{"col--7":o,"col--9 col--offset-1":!o}),children:a}),n&&(0,g.jsx)("div",{className:"col col--2",children:n})]})})})}},16960:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>b});n(11504);var a=n(65456),s=n(28264),r=n(68900),i=n(45864),o=n(9452),l=n(22687),c=n(48712),d=n(60992),m=n(56952),u=n(35388),g=n(17624);function h(e){const t=(0,u.Q)(e);return(0,g.jsx)(m.c,{children:(0,g.jsx)("script",{type:"application/ld+json",children:JSON.stringify(t)})})}function p(e){const{metadata:t}=e,{siteConfig:{title:n}}=(0,s.c)(),{blogDescription:a,blogTitle:i,permalink:o}=t,l="/"===o?n:i;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(r.U7,{title:l,description:a}),(0,g.jsx)(c.c,{tag:"blog_posts_list"})]})}function x(e){const{metadata:t,items:n,sidebar:a}=e;return(0,g.jsxs)(o.c,{sidebar:a,children:[(0,g.jsx)(d.c,{items:n}),(0,g.jsx)(l.c,{metadata:t})]})}function b(e){return(0,g.jsxs)(r.cr,{className:(0,a.c)(i.W.wrapper.blogPages,i.W.page.blogListPage),children:[(0,g.jsx)(p,{...e}),(0,g.jsx)(h,{...e}),(0,g.jsx)(x,{...e})]})}},22687:(e,t,n)=>{"use strict";n.d(t,{c:()=>i});n(11504);var a=n(33456),s=n(70308),r=n(17624);function i(e){const{metadata:t}=e,{previousPage:n,nextPage:i}=t;return(0,r.jsxs)("nav",{className:"pagination-nav","aria-label":(0,a.G)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[n&&(0,r.jsx)(s.c,{permalink:n,title:(0,r.jsx)(a.c,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer Entries"})}),i&&(0,r.jsx)(s.c,{permalink:i,title:(0,r.jsx)(a.c,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older Entries"}),isNext:!0})]})}},60992:(e,t,n)=>{"use strict";n.d(t,{c:()=>i});n(11504);var a=n(83152),s=n(20060),r=n(17624);function i(e){let{items:t,component:n=s.c}=e;return(0,r.jsx)(r.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,r.jsx)(a.E,{content:t,children:(0,r.jsx)(n,{children:(0,r.jsx)(t,{})})},t.metadata.permalink)}))})}},70308:(e,t,n)=>{"use strict";n.d(t,{c:()=>i});n(11504);var a=n(65456),s=n(10867),r=n(17624);function i(e){const{permalink:t,title:n,subLabel:i,isNext:o}=e;return(0,r.jsxs)(s.c,{className:(0,a.c)("pagination-nav__link",o?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[i&&(0,r.jsx)("div",{className:"pagination-nav__sublabel",children:i}),(0,r.jsx)("div",{className:"pagination-nav__label",children:n})]})}},83020:(e,t,n)=>{"use strict";n.d(t,{c:()=>o});n(11504);var a=n(65456),s=n(10867);const r={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var i=n(17624);function o(e){let{permalink:t,label:n,count:o}=e;return(0,i.jsxs)(s.c,{href:t,className:(0,a.c)(r.tag,o?r.tagWithCount:r.tagRegular),children:[n,o&&(0,i.jsx)("span",{children:o})]})}},1096:(e,t,n)=>{"use strict";n.d(t,{c:()=>l});n(11504);var a=n(65456),s=n(33456),r=n(83020);const i={tags:"tags_jXut",tag:"tag_QGVx"};var o=n(17624);function l(e){let{tags:t}=e;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("b",{children:(0,o.jsx)(s.c,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,o.jsx)("ul",{className:(0,a.c)(i.tags,"padding--none","margin-left--sm"),children:t.map((e=>{let{label:t,permalink:n}=e;return(0,o.jsx)("li",{className:i.tag,children:(0,o.jsx)(r.c,{label:t,permalink:n})},n)}))})]})}},83152:(e,t,n)=>{"use strict";n.d(t,{E:()=>o,g:()=>l});var a=n(11504),s=n(91100),r=n(17624);const i=a.createContext(null);function o(e){let{children:t,content:n,isBlogPostPage:s=!1}=e;const o=function(e){let{content:t,isBlogPostPage:n}=e;return(0,a.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:n})),[t,n])}({content:n,isBlogPostPage:s});return(0,r.jsx)(i.Provider,{value:o,children:t})}function l(){const e=(0,a.useContext)(i);if(null===e)throw new s.AH("BlogPostProvider");return e}},35388:(e,t,n)=>{"use strict";n.d(t,{Q:()=>d,C:()=>m});var a=n(70964),s=n(28264),r=n(85308);var i=n(83152);const o=e=>new Date(e).toISOString();function l(e){const t=e.map(u);return{author:1===t.length?t[0]:t}}function c(e,t,n){return e?{image:g({imageUrl:t(e,{absolute:!0}),caption:`title image for the blog post: ${n}`})}:{}}function d(e){const{siteConfig:t}=(0,s.c)(),{withBaseUrl:n}=(0,a.E)(),{metadata:{blogDescription:r,blogTitle:i,permalink:d}}=e,m=`${t.url}${d}`;return{"@context":"https://schema.org","@type":"Blog","@id":m,mainEntityOfPage:m,headline:i,description:r,blogPost:e.items.map((e=>function(e,t,n){const{assets:a,frontMatter:s,metadata:r}=e,{date:i,title:d,description:m,lastUpdatedAt:u}=r,g=a.image??s.image,h=s.keywords??[],p=`${t.url}${r.permalink}`,x=u?o(u):void 0;return{"@type":"BlogPosting","@id":p,mainEntityOfPage:p,url:p,headline:d,name:d,description:m,datePublished:i,...x?{dateModified:x}:{},...l(r.authors),...c(g,n,d),...h?{keywords:h}:{}}}(e.content,t,n)))}}function m(){const e=function(){const e=(0,r.c)(),t=e?.data?.blogMetadata;if(!t)throw new Error("useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context");return t}(),{assets:t,metadata:n}=(0,i.g)(),{siteConfig:d}=(0,s.c)(),{withBaseUrl:m}=(0,a.E)(),{date:u,title:g,description:h,frontMatter:p,lastUpdatedAt:x}=n,b=t.image??p.image,f=p.keywords??[],j=x?o(x):void 0,v=`${d.url}${n.permalink}`;return{"@context":"https://schema.org","@type":"BlogPosting","@id":v,mainEntityOfPage:v,url:v,headline:g,name:g,description:h,datePublished:u,...j?{dateModified:j}:{},...l(n.authors),...c(b,m,g),...f?{keywords:f}:{},isPartOf:{"@type":"Blog","@id":`${d.url}${e.blogBasePath}`,name:e.blogTitle}}}function u(e){return{"@type":"Person",...e.name?{name:e.name}:{},...e.title?{description:e.title}:{},...e.url?{url:e.url}:{},...e.email?{email:e.email}:{},...e.imageURL?{image:e.imageURL}:{}}}function g(e){let{imageUrl:t,caption:n}=e;return{"@type":"ImageObject","@id":t,url:t,contentUrl:t,caption:n}}},95944:(e,t,n)=>{"use strict";n.d(t,{A:()=>c});var a=n(11504),s=n(28264);const r=["zero","one","two","few","many","other"];function i(e){return r.filter((t=>e.includes(t)))}const o={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function l(){const{i18n:{currentLocale:e}}=(0,s.c)();return(0,a.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),o}}),[e])}function c(){const e=l();return{selectMessage:(t,n)=>function(e,t,n){const a=e.split("|");if(1===a.length)return a[0];a.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${a.length}: ${e}`);const s=n.select(t),r=n.pluralForms.indexOf(s);return a[Math.min(r,a.length-1)]}(n,t,e)}}},20060:(e,t,n)=>{"use strict";n.d(t,{c:()=>U});var a=n(11504),s=n(65456),r=n(83152),i=n(70964),o=n(17624);function l(e){let{children:t,className:n}=e;const{frontMatter:a,assets:s}=(0,r.g)(),{withBaseUrl:l}=(0,i.E)(),c=s.image??a.image;return(0,o.jsxs)("article",{className:n,itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting",children:[c&&(0,o.jsx)("meta",{itemProp:"image",content:l(c,{absolute:!0})}),t]})}var c=n(10867);const d={title:"title_xvU1"};function m(e){let{className:t}=e;const{metadata:n,isBlogPostPage:a}=(0,r.g)(),{permalink:i,title:l}=n,m=a?"h2":"h3";return(0,o.jsx)(m,{className:(0,s.c)(d.title,t),itemProp:"headline",children:a?l:(0,o.jsx)(c.c,{itemProp:"url",to:i,children:l})})}var u=n(33456),g=n(95944);const h={container:"container_iJTo"};function p(e){let{readingTime:t}=e;const n=function(){const{selectMessage:e}=(0,g.A)();return t=>{const n=Math.ceil(t);return e(n,(0,u.G)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:n}))}}();return(0,o.jsx)(o.Fragment,{children:n(t)})}function x(e){let{date:t,formattedDate:n}=e;return(0,o.jsx)("time",{dateTime:t,itemProp:"datePublished",children:n})}function b(){return(0,o.jsx)(o.Fragment,{children:" \xb7 "})}function f(e){let{className:t}=e;const{metadata:n}=(0,r.g)(),{date:a,formattedDate:i,readingTime:l}=n;return(0,o.jsxs)("div",{className:(0,s.c)(h.container,"margin-vert--md",t),children:[(0,o.jsx)(x,{date:a,formattedDate:i}),void 0!==l&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(b,{}),(0,o.jsx)(p,{readingTime:l})]})]})}function j(e){return e.href?(0,o.jsx)(c.c,{...e}):(0,o.jsx)(o.Fragment,{children:e.children})}function v(e){let{author:t,className:n}=e;const{name:a,title:r,url:i,imageURL:l,email:c}=t,d=i||c&&`mailto:${c}`||void 0;return(0,o.jsxs)("div",{className:(0,s.c)("avatar margin-bottom--sm",n),children:[l&&(0,o.jsx)(j,{href:d,className:"avatar__photo-link",children:(0,o.jsx)("img",{className:"avatar__photo",src:l,alt:a})}),a&&(0,o.jsxs)("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person",children:[(0,o.jsx)("div",{className:"avatar__name",children:(0,o.jsx)(j,{href:d,itemProp:"url",children:(0,o.jsx)("span",{itemProp:"name",children:a})})}),r&&(0,o.jsx)("small",{className:"avatar__subtitle",itemProp:"description",children:r})]})]})}const P={authorCol:"authorCol_q4o9",imageOnlyAuthorRow:"imageOnlyAuthorRow_lXe7",imageOnlyAuthorCol:"imageOnlyAuthorCol_cxD5"};function _(e){let{className:t}=e;const{metadata:{authors:n},assets:a}=(0,r.g)();if(0===n.length)return null;const i=n.every((e=>{let{name:t}=e;return!t}));return(0,o.jsx)("div",{className:(0,s.c)("margin-top--md margin-bottom--sm",i?P.imageOnlyAuthorRow:"row",t),children:n.map(((e,t)=>(0,o.jsx)("div",{className:(0,s.c)(!i&&"col col--6",i?P.imageOnlyAuthorCol:P.authorCol),children:(0,o.jsx)(v,{author:{...e,imageURL:a.authorsImageUrls[t]??e.imageURL}})},t)))})}function k(){return(0,o.jsxs)("header",{children:[(0,o.jsx)(m,{}),(0,o.jsx)(f,{}),(0,o.jsx)(_,{})]})}var N=n(15684),w=n(62824);function y(e){let{children:t,className:n}=e;const{isBlogPostPage:a}=(0,r.g)();return(0,o.jsx)("div",{id:a?N.blogPostContainerID:void 0,className:(0,s.c)("markdown",n),itemProp:"articleBody",children:(0,o.jsx)(w.c,{children:t})})}var C=n(47790),I=n(1096);function M(){return(0,o.jsx)("b",{children:(0,o.jsx)(u.c,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read More"})})}function B(e){const{blogPostTitle:t,...n}=e;return(0,o.jsx)(c.c,{"aria-label":(0,u.G)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...n,children:(0,o.jsx)(M,{})})}const T={blogPostFooterDetailsFull:"blogPostFooterDetailsFull_Wr5y"};function L(){const{metadata:e,isBlogPostPage:t}=(0,r.g)(),{tags:n,title:a,editUrl:i,hasTruncateMarker:l}=e,c=!t&&l,d=n.length>0;return d||c||i?(0,o.jsxs)("footer",{className:(0,s.c)("row docusaurus-mt-lg",t&&T.blogPostFooterDetailsFull),children:[d&&(0,o.jsx)("div",{className:(0,s.c)("col",{"col--9":c}),children:(0,o.jsx)(I.c,{tags:n})}),t&&i&&(0,o.jsx)("div",{className:"col margin-top--sm",children:(0,o.jsx)(C.c,{editUrl:i})}),c&&(0,o.jsx)("div",{className:(0,s.c)("col text--right",{"col--3":d}),children:(0,o.jsx)(B,{blogPostTitle:a,to:e.permalink})})]}):null}function A({id:e,host:t,repo:s,repoId:r,category:i,categoryId:l,mapping:c,term:d,strict:m,reactionsEnabled:u,emitMetadata:g,inputPosition:h,theme:p,lang:x,loading:b}){const[f,j]=(0,a.useState)(!1);return(0,a.useEffect)((()=>{f||(n.e(90908).then(n.bind(n,90908)),j(!0))}),[]),f?(0,o.jsx)("giscus-widget",{id:e,host:t,repo:s,repoid:r,category:i,categoryid:l,mapping:c,term:d,strict:m,reactionsenabled:u,emitmetadata:g,inputposition:h,theme:p,lang:x,loading:b}):null}var E=n(66528);function F(){const{colorMode:e}=(0,E.U)();return(0,o.jsx)(A,{repo:"JerryI/wljs-docs",repoId:"R_kgDOJt0OyA",category:"General",categoryId:"DIC_kwDOJt0OyM4CX4n6",mapping:"url",term:"Welcome to @giscus/react component!",strict:"0",reactionsEnabled:"1",emitMetadata:"1",inputPosition:"top",theme:e,lang:"en",loading:"lazy",crossorigin:"anonymous",async:!0})}function U(e){let{children:t,className:n}=e;const{metadata:a,isBlogPostPage:i}=(0,r.g)(),{frontMatter:c,slug:d,title:m}=a,{enableComments:u}=c,g=function(){const{isBlogPostPage:e}=(0,r.g)();return e?void 0:"margin-bottom--xl"}();return(0,o.jsxs)(l,{className:(0,s.c)(g,n),children:[(0,o.jsx)(k,{}),(0,o.jsx)(y,{children:t}),(0,o.jsx)(L,{}),u&&i&&(0,o.jsx)(F,{})]})}},37872:(e,t,n)=>{"use strict";n.d(t,{c:()=>c});var a=n(11504),s=n(35340),r=n(93391),i=n(28264),o=n(66528),l=(n(98684),n(52964),n(93664),n(17624));const c={...s.c,Wl:function(e){let{children:t,data:n}=e;const s=(0,a.useRef)(null),{siteConfig:o}=(0,i.c)(),{baseUrl:c,url:d}=o;return(0,a.useEffect)((()=>{console.warn("Loading component...");const e=s.current;let n=document.createElement("div");n.classList.add("frontend-object"),n.setAttribute("data-object","loading..."),e.appendChild(n);let a={global:{call:Date.now()+Math.floor(100*Math.random())},element:n};console.warn("decrypting...");try{console.log(d),c.length<3?(console.log(d+"/expressions/"+(0,r.md5)(t.trim())+".json"),fetch(d+"/expressions/"+(0,r.md5)(t.trim())+".json").then((e=>{e.json().then((e=>{interpretate(["FrontEndVirtual",e],a)}))}))):(console.log(c+"/expressions/"+(0,r.md5)(t.trim())+".json"),fetch(c+"/expressions/"+(0,r.md5)(t.trim())+".json").then((e=>{e.json().then((e=>{interpretate(["FrontEndVirtual",e],a)}))})))}catch(i){console.warn("Error!"),console.warn(i)}}),[]),(0,l.jsx)("main",{id:"frontend-editor",className:"main-container styles-container-editor",children:(0,l.jsx)("div",{id:"frontend-editor-content",className:"group-container",children:(0,l.jsx)("div",{ref:s})})})},CodeMirror:function(e){let{children:t,data:n}=e;const s=(0,a.useRef)(null),{colorMode:r,setColorMode:i}=(0,o.U)();return(0,a.useEffect)((()=>{const e=s.current;console.log("Create Codemirror"),window.CMInitialized=!0,window.CMInitialized;const n=new window.SupportedCells.codemirror.view({element:e},t);return()=>{n&&console.log("Remove Codemirror")}}),[]),(0,l.jsx)("div",{style:{filter:"dark"==r?"invert(1) contrast(0.8) hue-rotate(-185deg)":"none"},className:"language-mathematica codeBlockContainer_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-Container-styles-module theme-code-block",children:(0,l.jsx)("div",{className:"codeBlockContent_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-Content-styles-module",children:(0,l.jsx)("pre",{tabIndex:"0",className:"prism-code language-mathematica codeBlock_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-Content-styles-module thin-scrollbar",style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)"},children:(0,l.jsx)("code",{ref:s,className:"codeBlockLines_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-Content-styles-module"})})})})}}},47944:()=>{},73223:()=>{}}]);