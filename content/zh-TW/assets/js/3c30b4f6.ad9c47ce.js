"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[99453],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,f=d["".concat(p,".").concat(m)]||d[m]||s[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6138:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],c={id:"client-java-2.8.2",title:"Client Java 2.8.2",sidebar_label:"Client Java 2.8.2"},p=void 0,l={unversionedId:"docs/client-java-2.8.2",id:"docs/client-java-2.8.2",title:"Client Java 2.8.2",description:"[Java Client] Fix producer data race to get cnx #13176",source:"@site/release-notes/docs/client-java-2.8.2.md",sourceDirName:"docs",slug:"/docs/client-java-2.8.2",permalink:"/zh-TW/release-notes/docs/client-java-2.8.2",tags:[],version:"current",frontMatter:{id:"client-java-2.8.2",title:"Client Java 2.8.2",sidebar_label:"Client Java 2.8.2"}},u={},s=[],d={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"[Java Client]"," Fix producer data race to get cnx #13176",(0,o.kt)("br",{parentName:"p"}),"\n","[Java Client]"," Send CloseProducer on timeout #13161",(0,o.kt)("br",{parentName:"p"}),"\n","[Java Client]"," Let producer reconnect for state RegisteringSchema #12781",(0,o.kt)("br",{parentName:"p"}),"\n","[Java Client]"," Use epoch to version producer's cnx to prevent early delivery of messages #12779",(0,o.kt)("br",{parentName:"p"}),"\n","Pulsar Client: restore SchemaInfo.builder() API #12673",(0,o.kt)("br",{parentName:"p"}),"\n","[Java Client]"," Remove invalid call to Thread.currentThread().interrupt(); #12652",(0,o.kt)("br",{parentName:"p"}),"\n","Add additional error handling in auto partition update task MultiTopicsConsumerImpl #12620",(0,o.kt)("br",{parentName:"p"}),"\n","Fix invalid firstSentAt in log message when timeout first time #12588",(0,o.kt)("br",{parentName:"p"}),"\n","Update producer stats when producer close #12500",(0,o.kt)("br",{parentName:"p"}),"\n","Fix a typo in UnAckedMessageTracker #12467",(0,o.kt)("br",{parentName:"p"}),"\n","Fix the retry topic's ",(0,o.kt)("inlineCode",{parentName:"p"},"REAL_TOPIC")," & ",(0,o.kt)("inlineCode",{parentName:"p"},"ORIGIN_MESSAGE_ID")," property #12451",(0,o.kt)("br",{parentName:"p"}),"\n","Change the producer fence error log to debug level #12447",(0,o.kt)("br",{parentName:"p"}),"\n","[ISSUE-12291][Client]","  'StartMessageId' and 'RollbackDuration' not working in MultiTopicsReader for non-partitioned topics #12308",(0,o.kt)("br",{parentName:"p"}),"\n","[Java Client]"," Use failPendingMessages to ensure proper cleanup #12259",(0,o.kt)("br",{parentName:"p"}),"\n","[Java Client]"," Fixed the producer OOM if got exception while add message to batch container #12170",(0,o.kt)("br",{parentName:"p"}),"\n","[Client]"," Fix endless receiveAsync loop in MultiTopicsConsumer #12044",(0,o.kt)("br",{parentName:"p"}),"\n","[Java Client]"," Make Audience Field Optional in OAuth2 Client Credentials #11988",(0,o.kt)("br",{parentName:"p"}),"\n","Forget to update memory usage on producer close #11906",(0,o.kt)("br",{parentName:"p"}),"\n","[Client]"," Fix ConcurrentModificationException in sendAsync #11884",(0,o.kt)("br",{parentName:"p"}),"\n","fix seek at batchIndex level receive duplicated messages #11826",(0,o.kt)("br",{parentName:"p"}),"\n","[Client]"," Reduce redundant FLOW requests for non-durable multi-topics consumer #11802"))}m.isMDXComponent=!0}}]);