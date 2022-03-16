"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[31905],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(r),m=a,k=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(k,o(o({ref:t},c),{},{components:r})):n.createElement(k,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},63055:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],s={id:"pulsar-2.8.1",title:"Apache Pulsar 2.8.1",sidebar_label:"Apache Pulsar 2.8.1"},p=void 0,l={unversionedId:"docs/pulsar-2.8.1",id:"docs/pulsar-2.8.1",title:"Apache Pulsar 2.8.1",description:"security",source:"@site/release-notes/docs/pulsar-2.8.1.md",sourceDirName:"docs",slug:"/docs/pulsar-2.8.1",permalink:"/release-notes/docs/pulsar-2.8.1",tags:[],version:"current",frontMatter:{id:"pulsar-2.8.1",title:"Apache Pulsar 2.8.1",sidebar_label:"Apache Pulsar 2.8.1"}},c={},d=[{value:"security",id:"security",level:2},{value:"broker",id:"broker",level:2},{value:"build",id:"build",level:2},{value:"admin",id:"admin",level:2},{value:"dependency",id:"dependency",level:2},{value:"metrics",id:"metrics",level:2},{value:"topic-policy",id:"topic-policy",level:2},{value:"bookkeeper",id:"bookkeeper",level:2},{value:"connector",id:"connector",level:2},{value:"test",id:"test",level:2},{value:"transaction",id:"transaction",level:2},{value:"storage",id:"storage",level:2},{value:"tieredstorage",id:"tieredstorage",level:2},{value:"stats",id:"stats",level:2},{value:"compaction",id:"compaction",level:2},{value:"config",id:"config",level:2},{value:"tool",id:"tool",level:2}],u={toc:d};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"security"},"security"),(0,i.kt)("p",null,"Forbid to read other topic's data in managedLedger layer #11912",(0,i.kt)("br",{parentName:"p"}),"\n","[Security]"," Upgrade commons-compress to 1.21 #11345",(0,i.kt)("br",{parentName:"p"}),"\n","[Security]"," Bump Netty version to 4.1.66.Final #11344",(0,i.kt)("br",{parentName:"p"}),"\n","[broker]"," fix ",(0,i.kt)("inlineCode",{parentName:"p"},"GetTopicsOfNamespace")," with binary lookup service not check auth #11172",(0,i.kt)("br",{parentName:"p"}),"\n","[Security]"," Use ubuntu:20.04 base image for Pulsar docker images #11026  "),(0,i.kt)("h2",{id:"broker"},"broker"),(0,i.kt)("p",null,"[Broker]"," Refine topic level backlog quota policies warning log #11863",(0,i.kt)("br",{parentName:"p"}),"\n","Fix all web threads will get stuck when deleting the namespace #11596",(0,i.kt)("br",{parentName:"p"}),"\n","[broker]"," Improve error logs in BacklogQuotaManager #11469",(0,i.kt)("br",{parentName:"p"}),"\n","[issue #13351]"," Solving precise rate limiting does not takes effect #11446",(0,i.kt)("br",{parentName:"p"}),"\n","[Broker]"," Fix replicated subscriptions direct memory leak #11396",(0,i.kt)("br",{parentName:"p"}),"\n","expose broker entry metadata and deliverAtTime to peekMessages/getMes\u2026 #11279",(0,i.kt)("br",{parentName:"p"}),"\n","[Issue-11270]"," Change ContextClassLoader to NarClassLoader in ProtocolHandler #11276",(0,i.kt)("br",{parentName:"p"}),"\n","Allow null to be set as namespace level subscription TTL #11253",(0,i.kt)("br",{parentName:"p"}),"\n","[Ledger]"," Fix ledger rollover scheduled task #11116",(0,i.kt)("br",{parentName:"p"}),"\n","fix publish_time not set error when broker entry metadata enable without AppendBrokerTimestampMetadataInterceptor #11014",(0,i.kt)("br",{parentName:"p"}),"\n","fix parseMessageMetadata error cause by not skip broker entry metadata #10968",(0,i.kt)("br",{parentName:"p"}),"\n","[broker]"," Fix issue where Key_Shared consumers could get stuck #10920  "),(0,i.kt)("h2",{id:"build"},"build"),(0,i.kt)("p",null,"Source tarball: apply executable file permissions to shell scripts (fixes #10917)  #11858",(0,i.kt)("br",{parentName:"p"}),"\n","fix java_test_functions build failed #11829",(0,i.kt)("br",{parentName:"p"}),"\n","fix generate javadoc for kafka-connect-adaptor failed #11807",(0,i.kt)("br",{parentName:"p"}),"\n","Fix unnecessary user interactions when building pulsar-standalone image #11623  "),(0,i.kt)("h2",{id:"admin"},"admin"),(0,i.kt)("p",null,"[Issue 11814]"," fix pulsar admin method:getMessageById. #11852",(0,i.kt)("br",{parentName:"p"}),"\n","[pulsar-admin]"," allow create functions with package URL #11666",(0,i.kt)("br",{parentName:"p"}),"\n","Add compacted topic metrics for TopicStats in CLI #11564",(0,i.kt)("br",{parentName:"p"}),"\n","Fix time based backlog quota. #11509",(0,i.kt)("br",{parentName:"p"}),"\n","[Issue 11440]",". Add complete metadata for admin.topics().examineMessages #11443",(0,i.kt)("br",{parentName:"p"}),"\n","Remove duplicate check for replicationClusterSet #11429",(0,i.kt)("br",{parentName:"p"}),"\n","[Issue 11339]"," Pulsar Admin List Subscription lists only subscriptions created for Partition-0 when partition specific subscriptions are created #11355",(0,i.kt)("br",{parentName:"p"}),"\n","[admin]"," Enable peeking encrypted batch messages #11244",(0,i.kt)("br",{parentName:"p"}),"\n","[Broker]"," Fix async response filter #11052  "),(0,i.kt)("h2",{id:"dependency"},"dependency"),(0,i.kt)("p",null,"Upgrade bk version to resolve the BouncyCatle issue #11759  "),(0,i.kt)("h2",{id:"metrics"},"metrics"),(0,i.kt)("p",null,"Expose compaction metrics to Prometheus #11739",(0,i.kt)("br",{parentName:"p"}),"\n","Fix missing replicator metrics #11264  "),(0,i.kt)("h2",{id:"topic-policy"},"topic-policy"),(0,i.kt)("p",null,"Avoid redundant calls for getting the offload policies from the offloader #11629",(0,i.kt)("br",{parentName:"p"}),"\n","Fix some topic policy operation without backoff #11560",(0,i.kt)("br",{parentName:"p"}),"\n","Make getTopicPoliciesAsyncWithRetry as a default method #11518",(0,i.kt)("br",{parentName:"p"}),"\n","Add backoff for setting for getting topic policies. #11487",(0,i.kt)("br",{parentName:"p"}),"\n","Disable replicate system topic across clusters. #11376",(0,i.kt)("br",{parentName:"p"}),"\n","When delete a topic, delete the topic policy together. #11316",(0,i.kt)("br",{parentName:"p"}),"\n","Fix using partitioned topic name to get Policy #11294",(0,i.kt)("br",{parentName:"p"}),"\n","fix replay topic policy message not work #11136",(0,i.kt)("br",{parentName:"p"}),"\n","Fix race condition of the SystemTopicBasedTopicPoliciesService #11097",(0,i.kt)("br",{parentName:"p"}),"\n","fix retention policy in topic policy not work #11021",(0,i.kt)("br",{parentName:"p"}),"\n","Fix potential data lost on the system topic when topic compaction have not triggered yet #11003  "),(0,i.kt)("h2",{id:"bookkeeper"},"bookkeeper"),(0,i.kt)("p",null,"fix getPreviousPosition npe #11621  "),(0,i.kt)("h2",{id:"connector"},"connector"),(0,i.kt)("p",null,"Fix: Cast exception occurs if function/source/sink type is ByteBuffer #11611",(0,i.kt)("br",{parentName:"p"}),"\n","[pulsar-io]"," fix source stats exposing empty exceptions list #11478",(0,i.kt)("br",{parentName:"p"}),"\n","[pulsar io]"," make KafkaSourceRecord ack() non-blocking to avoid deadlock #11435",(0,i.kt)("br",{parentName:"p"}),"\n","Pulsar IO: allow Sinks to use native AVRO and JSON #11322",(0,i.kt)("br",{parentName:"p"}),"\n","[pulsar-io]"," Refine the key in redis sink when key is null #11192  "),(0,i.kt)("h2",{id:"test"},"test"),(0,i.kt)("p",null,"[Tests]"," Fix cpp build not failing when tests fail #11575",(0,i.kt)("br",{parentName:"p"}),"\n","add test for auto-created partitioned system topic #11545",(0,i.kt)("br",{parentName:"p"}),"\n","[Tests]"," Reduce integration test memory usage in CI #11414",(0,i.kt)("br",{parentName:"p"}),"\n","fix flaky test in AdminApiOffloadTest #11028",(0,i.kt)("br",{parentName:"p"}),"\n","[Tests]"," Fix the flaky test in the ManagedLedgerTest #11016",(0,i.kt)("br",{parentName:"p"}),"\n","Make Metadata ZKSessionTest less Flaky #10955",(0,i.kt)("br",{parentName:"p"}),"\n","Fix the unit tests for the websocket and run tests under websocket group #10921  "),(0,i.kt)("h2",{id:"transaction"},"transaction"),(0,i.kt)("p",null,"Pending ack set managed ledger config true #11494",(0,i.kt)("br",{parentName:"p"}),"\n","Add getTxnID method in Transaction.java #11438",(0,i.kt)("br",{parentName:"p"}),"\n","[Transaction]"," Fix direct memory leak related to commit and abort markers #11407",(0,i.kt)("br",{parentName:"p"}),"\n","[Transaction]"," Fix transaction buffer client handle endTxn op when topic or sub have been deleted. #11304",(0,i.kt)("br",{parentName:"p"}),"\n","[Transaction]"," Fix the transaction marker doe not deleted as expect. #11126",(0,i.kt)("br",{parentName:"p"}),"\n","[Transaction]"," Fix delete sub then delete pending ack. #11023",(0,i.kt)("br",{parentName:"p"}),"\n","[Transaction]"," Fix broker init transaction related topic. #11022",(0,i.kt)("br",{parentName:"p"}),"\n","[Transactions]"," Prevent NPE in case of closeAsync() without a successful execution of startAsync() #10948  "),(0,i.kt)("h2",{id:"storage"},"storage"),(0,i.kt)("p",null,"[ManagedLedger]"," Compress managed ledger info #11490  "),(0,i.kt)("h2",{id:"tieredstorage"},"tieredstorage"),(0,i.kt)("p",null,"Add offload ledger info for admin topics stats #11465",(0,i.kt)("br",{parentName:"p"}),"\n","[fix]"," OffloadPoliciesImplBuilder missing method and not implements OffloadPolicies.Builder #11453",(0,i.kt)("br",{parentName:"p"}),"\n","Remove unused listener to reduce creating executor pool #11215  "),(0,i.kt)("h2",{id:"stats"},"stats"),(0,i.kt)("p",null,"[stats]"," Do not expose meaningless stats for publisher #11454",(0,i.kt)("br",{parentName:"p"}),"\n","Add metrics ",(0,i.kt)("inlineCode",{parentName:"p"},"storageLogicalSize")," for the TopicStats and NamespaceStats #11430  "),(0,i.kt)("h2",{id:"compaction"},"compaction"),(0,i.kt)("p",null,"Fixed retention of keys in compaction #11287  "),(0,i.kt)("h2",{id:"config"},"config"),(0,i.kt)("p",null,"remove duplicated configuration #11283  "),(0,i.kt)("h2",{id:"tool"},"tool"),(0,i.kt)("p",null,"Print message metadata when getting message by id #11092"))}m.isMDXComponent=!0}}]);