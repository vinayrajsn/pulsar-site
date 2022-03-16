"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[58360],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=u(n),m=a,d=f["".concat(s,".").concat(m)]||f[m]||p[m]||o;return n?r.createElement(d,i(i({ref:t},l),{},{components:n})):r.createElement(d,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},45598:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],c={id:"client-java-2.8.1",title:"Client Java 2.8.1",sidebar_label:"Client Java 2.8.1"},s=void 0,u={unversionedId:"docs/client-java-2.8.1",id:"docs/client-java-2.8.1",title:"Client Java 2.8.1",description:"Handle receiveAsync() failures in MultiTopicsConsumer #11843",source:"@site/release-notes/docs/client-java-2.8.1.md",sourceDirName:"docs",slug:"/docs/client-java-2.8.1",permalink:"/zh-TW/release-notes/docs/client-java-2.8.1",tags:[],version:"current",frontMatter:{id:"client-java-2.8.1",title:"Client Java 2.8.1",sidebar_label:"Client Java 2.8.1"}},l={},p=[],f={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Handle receiveAsync() failures in MultiTopicsConsumer #11843",(0,o.kt)("br",{parentName:"p"}),"\n","Fixed accessing MessageImpl after it was enqueued on user queue #11824",(0,o.kt)("br",{parentName:"p"}),"\n","Forget to update memory usage on message send timeout #11761",(0,o.kt)("br",{parentName:"p"}),"\n","[pulsar-client]"," remove consumer reference from PulsarClient on subscription failure #11758",(0,o.kt)("br",{parentName:"p"}),"\n","[pulsar-client]"," clean up MultiTopicsConsumerImpl reference on consumer creation failure #11754",(0,o.kt)("br",{parentName:"p"}),"\n","Fix null MessageId may be passed to its compareTo() method #11607",(0,o.kt)("br",{parentName:"p"}),"\n","Use sendRequestWithId to add timeout to hasMessageAvailable #11600",(0,o.kt)("br",{parentName:"p"}),"\n","[C++/Python]"," Fix bugs that were not exposed by broken C++ CI before #11557",(0,o.kt)("br",{parentName:"p"}),"\n","[Issue 11493]"," Fix #11493. Simple implementation of getting number of references from C++ client #11535",(0,o.kt)("br",{parentName:"p"}),"\n","Fix Consumer listener does not respect receiver queue size #11455",(0,o.kt)("br",{parentName:"p"}),"\n","Avoid infinite waiting for consumer close #11347",(0,o.kt)("br",{parentName:"p"}),"\n","[C++]"," Use same regex code at ZTSClient #11323"))}m.isMDXComponent=!0}}]);