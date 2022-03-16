"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[60547],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return r?n.createElement(f,o(o({ref:t},l),{},{components:r})):n.createElement(f,o({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},41408:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],s={id:"client-java-2.5.1",title:"Client Java 2.5.1",sidebar_label:"Client Java 2.5.1"},c=void 0,p={unversionedId:"docs/client-java-2.5.1",id:"docs/client-java-2.5.1",title:"Client Java 2.5.1",description:"Issue 8294Some errors on the official website document of Pulsar Java client #8294 #8296",source:"@site/release-notes/docs/client-java-2.5.1.md",sourceDirName:"docs",slug:"/docs/client-java-2.5.1",permalink:"/release-notes/docs/client-java-2.5.1",tags:[],version:"current",frontMatter:{id:"client-java-2.5.1",title:"Client Java 2.5.1",sidebar_label:"Client Java 2.5.1"}},l={},u=[],m={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"[Issue 8294][docs]","Some errors on the official website document of Pulsar Java client #8294 #8296",(0,i.kt)("br",{parentName:"p"}),"\n","[python client]","Support generate pulsar-client for python3.8 #6741",(0,i.kt)("br",{parentName:"p"}),"\n","Fixed avro schema decode error in functions #6662",(0,i.kt)("br",{parentName:"p"}),"\n","Fix send get raw schema request #6650",(0,i.kt)("br",{parentName:"p"}),"\n","Fix admin getLastMessageId return batchIndex #6511",(0,i.kt)("br",{parentName:"p"}),"\n","[pulsar-client-cpp]"," Fix Redelivery of Messages on UnackedMessageTracker When Ack Messages . #6498",(0,i.kt)("br",{parentName:"p"}),"\n","[pulsar-client]"," remove duplicate cnx method #6490",(0,i.kt)("br",{parentName:"p"}),"\n","[pulsar-client]"," fix deadlock on send failure #6488",(0,i.kt)("br",{parentName:"p"}),"\n","Pulsar Java client: Use System.nanoTime() instead of System.currentTimeMillis() to measure elapsed time #6454",(0,i.kt)("br",{parentName:"p"}),"\n","[Java client]"," MultiTopics discovery is broken due to discovery task scheduled twice instead of pendingBatchRecei\u2026 #6407",(0,i.kt)("br",{parentName:"p"}),"\n","[Issue 3762][Schema]"," Fix wrong avro schema #6406",(0,i.kt)("br",{parentName:"p"}),"\n","Issue-6403: Consumer received duplicated deplayed messages upon restart #6404",(0,i.kt)("br",{parentName:"p"}),"\n","Seek to the first one >= timestamp #6393",(0,i.kt)("br",{parentName:"p"}),"\n","[Reader]"," Should set either start message id or start message from roll back duration. #6392",(0,i.kt)("br",{parentName:"p"}),"\n","[Issue 6168]"," Fix Unacked Message Tracker by Using Time Partition on C++ #6391",(0,i.kt)("br",{parentName:"p"}),"\n","fix duplicate key to send propertys #6390",(0,i.kt)("br",{parentName:"p"}),"\n","Independent schema is set for each consumer generated by topic #6356",(0,i.kt)("br",{parentName:"p"}),"\n","[Java Reader Client]"," Start reader inside batch result in read first message in batch. #6345",(0,i.kt)("br",{parentName:"p"}),"\n","client: make SubscriptionMode a member of ConsumerConfigurationData #6337",(0,i.kt)("br",{parentName:"p"}),"\n","[Fix-6273]"," Flush the potential duplicated message when add messages to a batch. #6326",(0,i.kt)("br",{parentName:"p"}),"\n","Fix get schema version in HttpLookupService. #6193",(0,i.kt)("br",{parentName:"p"}),"\n","Fix available permits may be greater than 1 even though queue size is 0. #6106",(0,i.kt)("br",{parentName:"p"}),"\n","Fix zero queue consumer message redelivery #6076",(0,i.kt)("br",{parentName:"p"}),"\n","[minor]"," make acker in BatchMessageIdImpl transient #6064"))}d.isMDXComponent=!0}}]);