"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[35395],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},73766:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={id:"client-java-2.6.2",title:"Client Java 2.6.2",sidebar_label:"Client Java 2.6.2"},c=void 0,p={unversionedId:"docs/client-java-2.6.2",id:"docs/client-java-2.6.2",title:"Client Java 2.6.2",description:"[C++] Fix message id error when subscribing a single partition #8341",source:"@site/release-notes/docs/client-java-2.6.2.md",sourceDirName:"docs",slug:"/docs/client-java-2.6.2",permalink:"/release-notes/docs/client-java-2.6.2",tags:[],version:"current",frontMatter:{id:"client-java-2.6.2",title:"Client Java 2.6.2",sidebar_label:"Client Java 2.6.2"}},l={},u=[],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"[C++]"," Fix message id error when subscribing a single partition #8341",(0,o.kt)("br",{parentName:"p"}),"\n","Increasing timeout for pulsar client io threads to shutdown #8316",(0,o.kt)("br",{parentName:"p"}),"\n","[Issue 8294][docs]","Some errors on the official website document of Pulsar Java client #8294 #8296",(0,o.kt)("br",{parentName:"p"}),"\n","[C++]"," Fix some pending requests may never complete when broker's down #8232",(0,o.kt)("br",{parentName:"p"}),"\n","[Client]","Fix AutoUpdatePartitionsInterval setting problem #8227",(0,o.kt)("br",{parentName:"p"}),"\n","add epoch for C++ client HandleBase to handle create producer timeout #8191",(0,o.kt)("br",{parentName:"p"}),"\n","[client]"," Fix issue where paused consumer receives new message when reconnecting #8165",(0,o.kt)("br",{parentName:"p"}),"\n","[Issue 8138][pulsar-client]"," Improve timeout handling in ClientCnx to cover all remaining request types (GetLastMessageId, GetTopics, GetSchema, GetOrCreateSchema) #8149",(0,o.kt)("br",{parentName:"p"}),"\n","[pulsar-client]"," Fix: avoid resolving address for sni-host + thread-safe connection creation #8062",(0,o.kt)("br",{parentName:"p"}),"\n","pulsar-perf support setting message key #7989",(0,o.kt)("br",{parentName:"p"}),"\n","[Client]","Add autoPartitionsUpdateInterval for producer and consumer #7840",(0,o.kt)("br",{parentName:"p"}),"\n","[pulsar-client]"," Avoid subscribing the same topic again #7823",(0,o.kt)("br",{parentName:"p"}),"\n","Implement toString() method for TopicMessageIdImpl class #7807",(0,o.kt)("br",{parentName:"p"}),"\n","[pulsar-client]"," support input-stream for trustStore cert #7442",(0,o.kt)("br",{parentName:"p"}),"\n","[C++]"," Wait for all seek operations completed #7216",(0,o.kt)("br",{parentName:"p"}),"\n","[Issue 6282][Issue 2793]","[Doc]","--add schema example to Cgo and CPP clients docs. #7191"))}d.isMDXComponent=!0}}]);