"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[43701],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(r),m=a,b=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(b,i(i({ref:t},s),{},{components:r})):n.createElement(b,i({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},89827:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return d}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],p={id:"pulsar-2.7.4",title:"Apache Pulsar 2.7.4",sidebar_label:"Apache Pulsar 2.7.4"},c=void 0,l={unversionedId:"docs/pulsar-2.7.4",id:"docs/pulsar-2.7.4",title:"Apache Pulsar 2.7.4",description:"security",source:"@site/release-notes/docs/pulsar-2.7.4.md",sourceDirName:"docs",slug:"/docs/pulsar-2.7.4",permalink:"/zh-TW/release-notes/docs/pulsar-2.7.4",tags:[],version:"current",frontMatter:{id:"pulsar-2.7.4",title:"Apache Pulsar 2.7.4",sidebar_label:"Apache Pulsar 2.7.4"}},s={},d=[{value:"security",id:"security",level:2},{value:"broker",id:"broker",level:2},{value:"dashboard",id:"dashboard",level:2},{value:"build",id:"build",level:2},{value:"tieredstorage",id:"tieredstorage",level:2},{value:"connect",id:"connect",level:2},{value:"topic-policy",id:"topic-policy",level:2},{value:"storage",id:"storage",level:2},{value:"connector",id:"connector",level:2},{value:"admin",id:"admin",level:2},{value:"compaction",id:"compaction",level:2},{value:"test",id:"test",level:2}],u={toc:d};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"security"},"security"),(0,o.kt)("p",null,"Bump log4j to 2.15.0 #13226",(0,o.kt)("br",{parentName:"p"}),"\n","[security]"," Upgrade netty to 4.1.68.Final #12218",(0,o.kt)("br",{parentName:"p"}),"\n","[Branch-2.7]","Forbid to read other topic's data in managedLedger layer #11913",(0,o.kt)("br",{parentName:"p"}),"\n","Forbid to read other topic's data in managedLedger layer #11912",(0,o.kt)("br",{parentName:"p"}),"\n","[Broker]"," Support disabling non-TLS service ports #11681",(0,o.kt)("br",{parentName:"p"}),"\n","[Security]"," Upgrade Jetty to 9.4.43.v20210629 #11660",(0,o.kt)("br",{parentName:"p"}),"\n","[Branch-2.7]"," Fixes function api can not use authdata to check superuser #11418",(0,o.kt)("br",{parentName:"p"}),"\n","[Security]"," Upgrade commons-compress to 1.21 #11345",(0,o.kt)("br",{parentName:"p"}),"\n","[broker]"," fix ",(0,o.kt)("inlineCode",{parentName:"p"},"GetTopicsOfNamespace")," with binary lookup service not check auth #11172  "),(0,o.kt)("h2",{id:"broker"},"broker"),(0,o.kt)("p",null,"[Broker]"," Optimize ManagedLedger Ledger Ownership Check #13222",(0,o.kt)("br",{parentName:"p"}),"\n","Do not reuse the Failed OpAddEntry object which lead bundle unloading timeout. #12993",(0,o.kt)("br",{parentName:"p"}),"\n","Allow to configure schema compatibility policy for system topics #12598",(0,o.kt)("br",{parentName:"p"}),"\n","[ML]"," Add OpAddEntry to pendingAddEntries after the state check #12570",(0,o.kt)("br",{parentName:"p"}),"\n","[broker]"," Cancel scheduled tasks when deleting ManagedLedgerImpl #12565",(0,o.kt)("br",{parentName:"p"}),"\n","[managedledger]"," NPE on OpAddEntry while ManagedLedger is closing #12364",(0,o.kt)("br",{parentName:"p"}),"\n","Optimize the memory usage of Cache Eviction #12045",(0,o.kt)("br",{parentName:"p"}),"\n","Fix update ledger list to znode version mismatch failed, ledger not delete #12015",(0,o.kt)("br",{parentName:"p"}),"\n","[Broker]"," Refine topic level backlog quota policies warning log #11863",(0,o.kt)("br",{parentName:"p"}),"\n","[Broker]"," Remove RateLimiter constructors and replace with builder usage #11599",(0,o.kt)("br",{parentName:"p"}),"\n","[issue #13351]"," Solving precise rate limiting does not takes effect #11446",(0,o.kt)("br",{parentName:"p"}),"\n","[Broker]"," Fix replicated subscriptions direct memory leak #11396",(0,o.kt)("br",{parentName:"p"}),"\n","[Broker]"," Fix set-publish-rate when using preciseTopicPublishRateLimiterEnable=true #10384",(0,o.kt)("br",{parentName:"p"}),"\n","[Issue 8599]"," Fix DispatchRateLimiter does not take effect #8611  "),(0,o.kt)("h2",{id:"dashboard"},"dashboard"),(0,o.kt)("p",null,"[Branch-2.7]","Remove pulsar-dashboard from the publish process of images #12534  "),(0,o.kt)("h2",{id:"build"},"build"),(0,o.kt)("p",null,"[Branch-2-7]"," Roll back to using Java 8 for docker images #12357",(0,o.kt)("br",{parentName:"p"}),"\n","[Branch-2.7][Build]"," Fix docker image install python3.7-dev problem #11943",(0,o.kt)("br",{parentName:"p"}),"\n","Fix expired tls certs for cpp tests #9607  "),(0,o.kt)("h2",{id:"tieredstorage"},"tieredstorage"),(0,o.kt)("p",null,"Fix the potential race condition in the BlobStore readhandler #12123  "),(0,o.kt)("h2",{id:"connect"},"connect"),(0,o.kt)("p",null,"Remove the deprecated api usage in hdfs #12080  "),(0,o.kt)("h2",{id:"topic-policy"},"topic-policy"),(0,o.kt)("p",null,"[Branch-2.7][Broker]"," Fix using partitioned topic name to get topic policies #11897",(0,o.kt)("br",{parentName:"p"}),"\n","Avoid redundant calls for getting the offload policies from the offloader #11629",(0,o.kt)("br",{parentName:"p"}),"\n","[Cherry-pick]"," Add backoff for setting for getting topic policies to branch-2.7 #11574",(0,o.kt)("br",{parentName:"p"}),"\n","Fix some topic policy operation without backoff #11560",(0,o.kt)("br",{parentName:"p"}),"\n","Add backoff for setting for getting topic policies. #11487",(0,o.kt)("br",{parentName:"p"}),"\n","Disable replicate system topic across clusters. #11376",(0,o.kt)("br",{parentName:"p"}),"\n","Fix using partitioned topic name to get Policy #11294",(0,o.kt)("br",{parentName:"p"}),"\n","fix retention policy in topic policy not work #11021  "),(0,o.kt)("h2",{id:"storage"},"storage"),(0,o.kt)("p",null,"[ManagedLedger]"," Compress managed ledger info #11490  "),(0,o.kt)("h2",{id:"connector"},"connector"),(0,o.kt)("p",null,"[pulsar-io]"," fix source stats exposing empty exceptions list #11478  "),(0,o.kt)("h2",{id:"admin"},"admin"),(0,o.kt)("p",null,"[Issue 11339]"," Pulsar Admin List Subscription lists only subscriptions created for Partition-0 when partition specific subscriptions are created #11355  "),(0,o.kt)("h2",{id:"compaction"},"compaction"),(0,o.kt)("p",null,"Fixed retention of keys in compaction #11287  "),(0,o.kt)("h2",{id:"test"},"test"),(0,o.kt)("p",null,"fix flaky test in AdminApiOffloadTest #11028",(0,o.kt)("br",{parentName:"p"}),"\n","[Test]"," Upgrade Testcontainers version to 1.15.3 and use bom #10321",(0,o.kt)("br",{parentName:"p"}),"\n","Upgrade TestContainers to 1.15.1 #9120"))}m.isMDXComponent=!0}}]);