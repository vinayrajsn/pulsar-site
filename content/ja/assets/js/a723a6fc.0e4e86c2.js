"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[77874],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=s(t),d=a,m=f["".concat(l,".").concat(d)]||f[d]||p[d]||o;return t?r.createElement(m,i(i({ref:n},u),{},{components:t})):r.createElement(m,i({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},37262:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),i=["components"],c={id:"client-java-2.9.0",title:"Client Java 2.9.0",sidebar_label:"Client Java 2.9.0"},l=void 0,s={unversionedId:"docs/client-java-2.9.0",id:"docs/client-java-2.9.0",title:"Client Java 2.9.0",description:"[Java Client] Use failPendingMessages to ensure proper cleanup #12259",source:"@site/release-notes/docs/client-java-2.9.0.md",sourceDirName:"docs",slug:"/docs/client-java-2.9.0",permalink:"/ja/release-notes/docs/client-java-2.9.0",tags:[],version:"current",frontMatter:{id:"client-java-2.9.0",title:"Client Java 2.9.0",sidebar_label:"Client Java 2.9.0"}},u={},p=[],f={toc:p};function d(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"[Java Client]"," Use failPendingMessages to ensure proper cleanup #12259",(0,o.kt)("br",{parentName:"p"}),"\n","[pulsar-client]"," Fix NPE in pulsar bolt while publishing messages #12106",(0,o.kt)("br",{parentName:"p"}),"\n","[PIP 96]"," Add message payload processor for Pulsar client #12088",(0,o.kt)("br",{parentName:"p"}),"\n","[Client]"," Fix endless receiveAsync loop in MultiTopicsConsumer #12044",(0,o.kt)("br",{parentName:"p"}),"\n","Forget to update memory usage on producer close #11906",(0,o.kt)("br",{parentName:"p"}),"\n","[Client]"," Fix ConcurrentModificationException in sendAsync #11884",(0,o.kt)("br",{parentName:"p"}),"\n","Handle receiveAsync() failures in MultiTopicsConsumer #11843"))}d.isMDXComponent=!0}}]);