"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[9671],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),h=a,m=u["".concat(i,".").concat(h)]||u[h]||f[h]||o;return r?n.createElement(m,s(s({ref:t},p),{},{components:r})):n.createElement(m,s({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=h;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:a,s[1]=l;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},61244:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={id:"clients",title:"Pulsar Clients Release Notes",sidebar_label:"Pulsar Clients Release Notes"},s=void 0,l={unversionedId:"clients",id:"clients",title:"Pulsar Clients Release Notes",description:"The code repos of Java and WebSocket clients are hosted in the Pulsar main repo. These clients are released simultaneously with Pulsar.",source:"@site/release-notes/clients.mdx",sourceDirName:".",slug:"/clients",permalink:"/release-notes/clients",draft:!1,tags:[],version:"current",frontMatter:{id:"clients",title:"Pulsar Clients Release Notes",sidebar_label:"Pulsar Clients Release Notes"},sidebar:"releaseNote",previous:{title:"Pulsar Release Notes",permalink:"/release-notes/"},next:{title:"Java Client",permalink:"/release-notes/client-java"}},i={},c=[],p={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The code repos of Java and WebSocket clients are hosted in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar"},"Pulsar main repo"),". These clients are released simultaneously with Pulsar."),(0,a.kt)("p",null,"The code repos of ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar-client-cpp"},"C++"),", ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar-client-python"},"Python"),", ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar-client-go"},"Go"),", ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar-client-node"},"Node.js"),", and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar-dotpulsar"},"C#")," clients are hosted outside the Pulsar main repo. These clients are released independently with Pulsar."))}u.isMDXComponent=!0}}]);