(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1118:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(9157)}])},3991:function(e,t){"use strict";var n,r;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{PrefetchKind:function(){return n},ACTION_REFRESH:function(){return i},ACTION_NAVIGATE:function(){return o},ACTION_RESTORE:function(){return l},ACTION_SERVER_PATCH:function(){return a},ACTION_PREFETCH:function(){return s},ACTION_FAST_REFRESH:function(){return c},ACTION_SERVER_ACTION:function(){return u}});let i="refresh",o="navigate",l="restore",a="server-patch",s="prefetch",c="fast-refresh",u="server-action";(r=n||(n={})).AUTO="auto",r.FULL="full",r.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1516:function(e,t){"use strict";function n(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return n}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5569:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return b}});let r=n(8754),i=r._(n(7294)),o=n(4532),l=n(3353),a=n(1410),s=n(9064),c=n(370),u=n(9955),f=n(4224),d=n(508),h=n(1516),p=n(4266),x=n(3991),m=new Set;function g(e,t,n,r,i,o){if(!o&&!(0,l.isLocalURL)(t))return;if(!r.bypassPrefetchedCheck){let i=void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0,o=t+"%"+n+"%"+i;if(m.has(o))return;m.add(o)}let a=o?e.prefetch(t,i):e.prefetch(t,n,r);Promise.resolve(a).catch(e=>{})}function j(e){return"string"==typeof e?e:(0,a.formatUrl)(e)}let v=i.default.forwardRef(function(e,t){let n,r;let{href:a,as:m,children:v,prefetch:b=null,passHref:w,replace:y,shallow:_,scroll:k,locale:C,onClick:P,onMouseEnter:O,onTouchStart:E,legacyBehavior:N=!1,...A}=e;n=v,N&&("string"==typeof n||"number"==typeof n)&&(n=i.default.createElement("a",null,n));let M=i.default.useContext(u.RouterContext),T=i.default.useContext(f.AppRouterContext),R=null!=M?M:T,S=!M,L=!1!==b,I=null===b?x.PrefetchKind.AUTO:x.PrefetchKind.FULL,{href:U,as:H}=i.default.useMemo(()=>{if(!M){let e=j(a);return{href:e,as:m?j(m):e}}let[e,t]=(0,o.resolveHref)(M,a,!0);return{href:e,as:m?(0,o.resolveHref)(M,m):t||e}},[M,a,m]),B=i.default.useRef(U),Z=i.default.useRef(H);N&&(r=i.default.Children.only(n));let z=N?r&&"object"==typeof r&&r.ref:t,[F,G,K]=(0,d.useIntersection)({rootMargin:"200px"}),V=i.default.useCallback(e=>{(Z.current!==H||B.current!==U)&&(K(),Z.current=H,B.current=U),F(e),z&&("function"==typeof z?z(e):"object"==typeof z&&(z.current=e))},[H,z,U,K,F]);i.default.useEffect(()=>{R&&G&&L&&g(R,U,H,{locale:C},{kind:I},S)},[H,U,G,C,L,null==M?void 0:M.locale,R,S,I]);let D={ref:V,onClick(e){N||"function"!=typeof P||P(e),N&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),R&&!e.defaultPrevented&&function(e,t,n,r,o,a,s,c,u,f){let{nodeName:d}=e.currentTarget,h="A"===d.toUpperCase();if(h&&(function(e){let t=e.currentTarget,n=t.getAttribute("target");return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!u&&!(0,l.isLocalURL)(n)))return;e.preventDefault();let p=()=>{let e=null==s||s;"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:a,locale:c,scroll:e}):t[o?"replace":"push"](r||n,{forceOptimisticNavigation:!f,scroll:e})};u?i.default.startTransition(p):p()}(e,R,U,H,y,_,k,C,S,L)},onMouseEnter(e){N||"function"!=typeof O||O(e),N&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),R&&(L||!S)&&g(R,U,H,{locale:C,priority:!0,bypassPrefetchedCheck:!0},{kind:I},S)},onTouchStart(e){N||"function"!=typeof E||E(e),N&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),R&&(L||!S)&&g(R,U,H,{locale:C,priority:!0,bypassPrefetchedCheck:!0},{kind:I},S)}};if((0,s.isAbsoluteUrl)(H))D.href=H;else if(!N||w||"a"===r.type&&!("href"in r.props)){let e=void 0!==C?C:null==M?void 0:M.locale,t=(null==M?void 0:M.isLocaleDomain)&&(0,h.getDomainLocale)(H,e,null==M?void 0:M.locales,null==M?void 0:M.domainLocales);D.href=t||(0,p.addBasePath)((0,c.addLocale)(H,e,null==M?void 0:M.defaultLocale))}return N?i.default.cloneElement(r,D):i.default.createElement("a",{...A,...D},n)}),b=v;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},508:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return s}});let r=n(7294),i=n(29),o="function"==typeof IntersectionObserver,l=new Map,a=[];function s(e){let{rootRef:t,rootMargin:n,disabled:s}=e,c=s||!o,[u,f]=(0,r.useState)(!1),d=(0,r.useRef)(null),h=(0,r.useCallback)(e=>{d.current=e},[]);(0,r.useEffect)(()=>{if(o){if(c||u)return;let e=d.current;if(e&&e.tagName){let r=function(e,t,n){let{id:r,observer:i,elements:o}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=a.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=l.get(r)))return t;let i=new Map,o=new IntersectionObserver(e=>{e.forEach(e=>{let t=i.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:o,elements:i},a.push(n),l.set(n,t),t}(n);return o.set(e,t),i.observe(e),function(){if(o.delete(e),i.unobserve(e),0===o.size){i.disconnect(),l.delete(r);let e=a.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&a.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:n});return r}}else if(!u){let e=(0,i.requestIdleCallback)(()=>f(!0));return()=>(0,i.cancelIdleCallback)(e)}},[c,n,t,u,d.current]);let p=(0,r.useCallback)(()=>{f(!1)},[]);return[h,u,p]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9961:function(){},6745:function(){},613:function(){},8674:function(){},2623:function(){},9008:function(e,t,n){e.exports=n(2636)},1664:function(e,t,n){e.exports=n(5569)},2589:function(e,t,n){"use strict";n.d(t,{_y:function(){return l},zt:function(){return o}});var r=n(7294);let i=(0,r.createContext)([{},()=>{}]),o=i.Provider;i.Consumer;let l=i},573:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=JSON.parse('{"author":{"name":"Brian Holt","company":"Snowflake"},"title":"Complete Intro to Product Management","subtitle":"Learn to Become a Better PM","frontendMastersLink":"https://frontendmasters.com/workshops/product-management/","social":{"linkedin":"btholt","github":"btholt","twitter":"holtbt"},"description":"Learn with an experienced product manager how you can become a product manager. Useful for anyone who wants to become but particularly for current software engineers looking to branch out.","keywords":["product manager","pm","program manager","tech","software","tech hiring"],"csvPath":"./out/lessons.csv"}');let i={author:{name:"An Author",company:"An Author's Company"},title:"A Superb Course",subtitle:"That Teaches Nice Things",frontendMastersLink:"",description:"A nice course for nice people.",keywords:["a nice course","for people","to learn","nice things"],social:{linkedin:"btholt",github:"btholt",twitter:"holtbt"},productionBaseUrl:"/"};function o(){return Object.assign({},i,r)}},9157:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return j}});var r=n(5893),i=n(9008);n(9961),n(6745),n(2623),n(8674),n(613);var o=n(7294);function l(){return(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:"32",height:"32",viewBox:"0 0 32 32",children:[(0,r.jsx)("defs",{children:(0,r.jsx)("clipPath",{id:"clip-github-social",children:(0,r.jsx)("rect",{width:"32",height:"32"})})}),(0,r.jsx)("g",{id:"github-social",clipPath:"url(#clip-github-social)",children:(0,r.jsxs)("g",{id:"Group_272","data-name":"Group 272",transform:"translate(13522.5 -6994)",children:[(0,r.jsx)("path",{id:"Subtraction_33","data-name":"Subtraction 33",d:"M-24967.5,8041a15.9,15.9,0,0,1-11.312-4.688A15.893,15.893,0,0,1-24983.5,8025a15.893,15.893,0,0,1,4.689-11.315A15.894,15.894,0,0,1-24967.5,8009a15.894,15.894,0,0,1,11.313,4.686A15.893,15.893,0,0,1-24951.5,8025a15.893,15.893,0,0,1-4.689,11.313A15.9,15.9,0,0,1-24967.5,8041Zm-3.781-4.571h0v3.918h7.895v-6.665a1.836,1.836,0,0,0-1.2-1.718c5.1-.617,7.467-2.975,7.467-7.424a7.176,7.176,0,0,0-1.637-4.728,6.74,6.74,0,0,0,.275-1.812,4.34,4.34,0,0,0-.52-2.452.574.574,0,0,0-.359-.1c-1.061,0-3.465,1.411-3.936,1.694a16.644,16.644,0,0,0-4.2-.489,16.379,16.379,0,0,0-3.969.445c-.846-.5-2.91-1.649-3.859-1.649a.566.566,0,0,0-.354.095,4.3,4.3,0,0,0-.521,2.452,6.7,6.7,0,0,0,.244,1.718,7.346,7.346,0,0,0-1.6,4.822,7.263,7.263,0,0,0,1.533,4.985c1.193,1.359,3.115,2.165,5.871,2.464a1.826,1.826,0,0,0-1.129,1.693v.5h0l-.006,0a7.121,7.121,0,0,1-2.033.363,2.608,2.608,0,0,1-.965-.158,4.438,4.438,0,0,1-1.836-1.881,2.361,2.361,0,0,0-1.248-1.091,3.472,3.472,0,0,0-1.217-.3.584.584,0,0,0-.545.224.282.282,0,0,0,.027.367,1.875,1.875,0,0,0,.447.307,4.732,4.732,0,0,1,.561.355,10.726,10.726,0,0,1,1.682,2.755c.043.092.078.163.105.217a3.876,3.876,0,0,0,2.42,1.185,6.036,6.036,0,0,0,.607.025c.875,0,1.988-.124,2-.125Z",transform:"translate(11461 -1015)",fill:"var(--footer-icons)"}),(0,r.jsxs)("g",{id:"Ellipse_670","data-name":"Ellipse 670",transform:"translate(-13522.5 6994)",fill:"none",stroke:"var(--footer-icons)",strokeWidth:"1",children:[(0,r.jsx)("circle",{cx:"16",cy:"16",r:"16",stroke:"none"}),(0,r.jsx)("circle",{cx:"16",cy:"16",r:"15.5",fill:"none"})]})]})})]})}function a(){return(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:"40",height:"32",viewBox:"0 0 40 32",children:[(0,r.jsx)("defs",{children:(0,r.jsx)("clipPath",{id:"clip-twitter-social",children:(0,r.jsx)("rect",{width:"40",height:"32"})})}),(0,r.jsx)("g",{id:"twitter-social",clipPath:"url(#clip-twitter-social)",children:(0,r.jsx)("g",{id:"Group_269","data-name":"Group 269",transform:"translate(-230.23 -1140.849)",children:(0,r.jsx)("path",{id:"Path_419","data-name":"Path 419",d:"M266.12,1148.861v1.035a23.092,23.092,0,0,1-1.507,8.1,24.08,24.08,0,0,1-4.475,7.381,22.175,22.175,0,0,1-7.306,5.4,24.129,24.129,0,0,1-10,2.07,23.7,23.7,0,0,1-6.667-.945,22.83,22.83,0,0,1-5.936-2.655q.959.091,1.963.09a16.518,16.518,0,0,0,5.434-.9,17.111,17.111,0,0,0,4.749-2.52,8.275,8.275,0,0,1-4.749-1.643,7.8,7.8,0,0,1-2.877-3.983,8.268,8.268,0,0,0,1.507.135,8.58,8.58,0,0,0,2.146-.27,8.16,8.16,0,0,1-5.685-4.344,8.326,8.326,0,0,1-.89-3.578v-.135a7.775,7.775,0,0,0,3.744,1.035,8.183,8.183,0,0,1-2.671-2.9,7.817,7.817,0,0,1-.982-3.848,7.948,7.948,0,0,1,1.1-4.05,23.53,23.53,0,0,0,16.895,8.46,9.221,9.221,0,0,1-.183-1.845,7.787,7.787,0,0,1,1.1-4.05,8.216,8.216,0,0,1,2.991-2.948,7.991,7.991,0,0,1,4.087-1.1,8.184,8.184,0,0,1,5.982,2.566,16.087,16.087,0,0,0,5.205-1.98,7.784,7.784,0,0,1-1.393,2.588,8.4,8.4,0,0,1-2.215,1.913,16.856,16.856,0,0,0,4.749-1.305A17.032,17.032,0,0,1,266.12,1148.861Z",fill:"var(--footer-icons)"})})})]})}function s(){return(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:"32",height:"32",viewBox:"0 0 32 32",children:[(0,r.jsx)("defs",{children:(0,r.jsx)("clipPath",{id:"clip-linkedin-social",children:(0,r.jsx)("rect",{width:"32",height:"32"})})}),(0,r.jsx)("g",{id:"linkedin-social",clipPath:"url(#clip-linkedin-social)",children:(0,r.jsx)("g",{id:"Group_270","data-name":"Group 270",transform:"translate(-86.349 -633.073)",children:(0,r.jsx)("path",{id:"Path_375","data-name":"Path 375",d:"M115.789,633.073a2.324,2.324,0,0,1,1.682.676,2.194,2.194,0,0,1,.695,1.627V662.8a2.131,2.131,0,0,1-.695,1.609,2.314,2.314,0,0,1-1.646.659H88.69a2.307,2.307,0,0,1-1.646-.659,2.128,2.128,0,0,1-.695-1.609V635.376a2.19,2.19,0,0,1,.695-1.627,2.322,2.322,0,0,1,1.682-.676h27.063Zm-20.224,9.672a2.561,2.561,0,0,0,0-3.584,2.658,2.658,0,0,0-1.938-.712,2.724,2.724,0,0,0-1.957.712,2.371,2.371,0,0,0-.75,1.792,2.4,2.4,0,0,0,.731,1.792,2.605,2.605,0,0,0,1.9.713h.037A2.7,2.7,0,0,0,95.565,642.745ZM96,645.434H91.213V659.88H96Zm17.3,6.144a7.007,7.007,0,0,0-1.573-4.9,5.68,5.68,0,0,0-6.839-.769,5.663,5.663,0,0,0-1.426,1.573v-2.048H98.674q.036.841,0,7.717v6.728h4.791V651.8a3.592,3.592,0,0,1,.146-1.17,2.913,2.913,0,0,1,.878-1.206,2.429,2.429,0,0,1,1.609-.549,2.108,2.108,0,0,1,1.865.914,4.265,4.265,0,0,1,.549,2.341v7.752H113.3Z",fill:"var(--footer-icons)"})})})]})}function c(e){let{twitter:t,linkedin:n,github:i}=e;return(0,r.jsx)("footer",{className:"footer",children:(0,r.jsxs)("ul",{className:"socials",children:[t?(0,r.jsx)("li",{className:"social",children:(0,r.jsx)("a",{href:"https://twitter.com/".concat(t),children:(0,r.jsx)(a,{})})}):null,i?(0,r.jsx)("li",{className:"social",children:(0,r.jsx)("a",{href:"https://github.com/".concat(i),children:(0,r.jsx)(l,{})})}):null,n?(0,r.jsx)("li",{className:"social",children:(0,r.jsx)("a",{href:"https://linkedin.com/in/".concat(n),children:(0,r.jsx)(s,{})})}):null,(0,r.jsx)("li",{className:"social",children:(0,r.jsxs)("div",{className:"terms",children:[(0,r.jsx)("p",{children:"Content Licensed Under CC-BY-NC-4.0"}),(0,r.jsx)("p",{children:"Code Samples and Exercises Licensed Under Apache 2.0"}),(0,r.jsxs)("p",{children:["Site Designed by"," ",(0,r.jsx)("a",{href:"https://www.alexdanielson.com/",children:"Alex Danielson"})]})]})})]})})}var u=n(1664),f=n(2589);let d=(0,o.createContext)([{},()=>{}]),h=d.Provider;function p(e){let[{section:t,title:n,icon:i}]=(0,o.useContext)(f._y),{frontendMastersLink:l}=(0,o.useContext)(d);return(0,r.jsxs)("header",{className:"navbar",children:[(0,r.jsx)("h1",{className:"navbar-brand",children:(0,r.jsx)(u,{href:"/",children:e.title})}),(0,r.jsxs)("div",{className:"navbar-info",children:[l?(0,r.jsx)("a",{href:l,className:"cta-btn",children:"Watch on Frontend Masters"}):null,t?(0,r.jsxs)("h2",{children:[t," ",(0,r.jsx)("i",{className:"fas fa-".concat(i)})," ",n]}):null]})]})}d.Consumer;var x=n(573);function m(e){let{children:t}=e,n=(0,x.Z)(),i=(0,o.useState)({});return(0,r.jsx)(h,{value:n,children:(0,r.jsxs)(f.zt,{value:i,children:[(0,r.jsxs)("div",{className:"remix-app",children:[(0,r.jsx)(p,{title:n.title}),(0,r.jsx)("div",{className:"content-container",children:(0,r.jsx)("div",{className:"main",children:t})}),(0,r.jsx)(c,{twitter:n.social.twitter,github:n.social.github,linkedin:n.social.linkedin})]}),(0,r.jsx)("script",{async:!0,defer:!0,src:"https://a.holt.courses/latest.js"}),(0,r.jsx)("noscript",{children:(0,r.jsx)("img",{src:"https://a.holt.courses/noscript.gif",alt:"",referrerPolicy:"no-referrer-when-downgrade"})})]})})}function g(e){let{children:t}=e;return(0,r.jsx)(m,{children:t})}function j(e){let{Component:t,pageProps:n}=e;return(0,r.jsxs)(g,{children:[(0,r.jsxs)(i,{children:[(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"".concat("","/images/apple-touch-icon.png")}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"".concat("","/images/favicon-32x32.png")}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"".concat("","/images/favicon-16x16.png")}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"".concat("","/images/favicon-16x16.png")}),(0,r.jsx)("link",{rel:"icon",type:"image/x-icon",href:"".concat("","/images/favicon.ico")})]}),(0,r.jsx)(t,{...n})]})}}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(1118),t(6885)}),_N_E=e.O()}]);