"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[40083],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=l(n),d=a,m=f["".concat(u,".").concat(d)]||f[d]||s[d]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},30084:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],c={id:"client-java-2.6.1",title:"Client Java 2.6.1",sidebar_label:"Client Java 2.6.1"},u=void 0,l={unversionedId:"docs/client-java-2.6.1",id:"docs/client-java-2.6.1",title:"Client Java 2.6.1",description:"Issue 8294Some errors on the official website document of Pulsar Java client #8294 #8296",source:"@site/release-notes/docs/client-java-2.6.1.md",sourceDirName:"docs",slug:"/docs/client-java-2.6.1",permalink:"/zh-TW/release-notes/docs/client-java-2.6.1",tags:[],version:"current",frontMatter:{id:"client-java-2.6.1",title:"Client Java 2.6.1",sidebar_label:"Client Java 2.6.1"}},p={},s=[],f={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"[Issue 8294][docs]","Some errors on the official website document of Pulsar Java client #8294 #8296",(0,o.kt)("br",{parentName:"p"}),"\n","cpp: fix reference leak when reader create #7793",(0,o.kt)("br",{parentName:"p"}),"\n","Make OAuth2 auth plugin to use AsyncHttpClient #7615",(0,o.kt)("br",{parentName:"p"}),"\n","[oauth2 cpp]"," add support to read credentials from file #7606",(0,o.kt)("br",{parentName:"p"}),"\n","[CPP]"," Fix segment crashes that caused by race condition of timer in cpp client #7572",(0,o.kt)("br",{parentName:"p"}),"\n","Ensure the create subscription can be completed when the operation timeout happens #7522",(0,o.kt)("br",{parentName:"p"}),"\n","[client]"," Fix issue where HTTP header used in Athenz authentication can not be renamed #7311"))}d.isMDXComponent=!0}}]);