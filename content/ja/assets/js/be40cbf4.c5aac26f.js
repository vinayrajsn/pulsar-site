"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[83598],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=p(n),d=a,m=f["".concat(l,".").concat(d)]||f[d]||s[d]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},67612:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return s}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],c={id:"client-java-2.7.2",title:"Client Java 2.7.2",sidebar_label:"Client Java 2.7.2"},l=void 0,p={unversionedId:"docs/client-java-2.7.2",id:"docs/client-java-2.7.2",title:"Client Java 2.7.2",description:"apiAdd get version command for pulsar rest api, pulsar-admin, pulsar-client #9975",source:"@site/release-notes/docs/client-java-2.7.2.md",sourceDirName:"docs",slug:"/docs/client-java-2.7.2",permalink:"/ja/release-notes/docs/client-java-2.7.2",tags:[],version:"current",frontMatter:{id:"client-java-2.7.2",title:"Client Java 2.7.2",sidebar_label:"Client Java 2.7.2"}},u={},s=[],f={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"[api][pulsar-client]","Add get version command for pulsar rest api, pulsar-admin, pulsar-client #9975",(0,o.kt)("br",{parentName:"p"}),"\n","Fix batch size not set when deserializing from byte array #9855",(0,o.kt)("br",{parentName:"p"}),"\n","Fix ensure single-topic consumer can be closed #9849",(0,o.kt)("br",{parentName:"p"}),"\n","[pulsar-client]"," Handle NPE while receiving ack for closed producer #8979",(0,o.kt)("br",{parentName:"p"}),"\n","[PIP-60]"," Add TLS SNI support for cpp and python clients #8957"))}d.isMDXComponent=!0}}]);