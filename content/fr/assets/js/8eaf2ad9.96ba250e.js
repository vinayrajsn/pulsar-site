"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[53763],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(k,i(i({ref:t},c),{},{components:r})):n.createElement(k,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},72114:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],l={id:"pulsar-2.9.0",title:"Apache Pulsar 2.9.0",sidebar_label:"Apache Pulsar 2.9.0"},s=void 0,p={unversionedId:"docs/pulsar-2.9.0",id:"docs/pulsar-2.9.0",title:"Apache Pulsar 2.9.0",description:"schema",source:"@site/release-notes/docs/pulsar-2.9.0.md",sourceDirName:"docs",slug:"/docs/pulsar-2.9.0",permalink:"/fr/release-notes/docs/pulsar-2.9.0",tags:[],version:"current",frontMatter:{id:"pulsar-2.9.0",title:"Apache Pulsar 2.9.0",sidebar_label:"Apache Pulsar 2.9.0"}},c={},u=[{value:"schema",id:"schema",level:2},{value:"transaction",id:"transaction",level:2},{value:"broker",id:"broker",level:2},{value:"proxy",id:"proxy",level:2},{value:"connector",id:"connector",level:2},{value:"compaction",id:"compaction",level:2},{value:"security",id:"security",level:2},{value:"key-shared",id:"key-shared",level:2},{value:"test",id:"test",level:2},{value:"cli",id:"cli",level:2},{value:"connect",id:"connect",level:2},{value:"zookeeper",id:"zookeeper",level:2},{value:"go",id:"go",level:2},{value:"tool",id:"tool",level:2},{value:"topic-policy",id:"topic-policy",level:2},{value:"build",id:"build",level:2},{value:"dependency",id:"dependency",level:2},{value:"admin",id:"admin",level:2},{value:"stats",id:"stats",level:2}],d={toc:u};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"schema"},"schema"),(0,o.kt)("p",null,"[Schema]"," Fix pulsar use json or avro primitive schema. #12886  "),(0,o.kt)("h2",{id:"transaction"},"transaction"),(0,o.kt)("p",null,"[Transaction]"," Fix transaction system topic create in loop. #12749",(0,o.kt)("br",{parentName:"p"}),"\n","[Transaction]"," add method to clear up transaction buffer snapshot #11934  "),(0,o.kt)("h2",{id:"broker"},"broker"),(0,o.kt)("p",null,"[#12423]"," allow ",(0,o.kt)("inlineCode",{parentName:"p"},"GetTopicsOfNamespace")," op with ",(0,o.kt)("inlineCode",{parentName:"p"},"consume")," permission #12600",(0,o.kt)("br",{parentName:"p"}),"\n","Allow to configure schema compatibility policy for system topics #12598",(0,o.kt)("br",{parentName:"p"}),"\n","[pulsar-broker]"," Cleanup already deleted namespace topics. #12597",(0,o.kt)("br",{parentName:"p"}),"\n","Disable stats recorder for built-in PulsarClient #12217",(0,o.kt)("br",{parentName:"p"}),"\n","[pulsar-broker]"," support remove-ttl api for V1 namespace #12121",(0,o.kt)("br",{parentName:"p"}),"\n","[pulsar-broker]"," Broker auto refresh bk-client certs to avoid cnx failure after cert refresh #12107",(0,o.kt)("br",{parentName:"p"}),"\n","Optimize the memory usage of Cache Eviction #12045",(0,o.kt)("br",{parentName:"p"}),"\n","Avoid adding duplicated BrokerEntryMetadata #12018",(0,o.kt)("br",{parentName:"p"}),"\n","[PIP-82][pulsar-broker]"," Misc fixes: #11918",(0,o.kt)("br",{parentName:"p"}),"\n","[Broker]"," Refine topic level backlog quota policies warning log #11863  "),(0,o.kt)("h2",{id:"proxy"},"proxy"),(0,o.kt)("p",null,"Fix the batch message ack for WebSocket proxy. #12530",(0,o.kt)("br",{parentName:"p"}),"\n","PIP-99 - Pulsar Proxy Estensions #11838  "),(0,o.kt)("h2",{id:"connector"},"connector"),(0,o.kt)("p",null,"Allow Pulsar Functions localrun to exit on error #12278  "),(0,o.kt)("h2",{id:"compaction"},"compaction"),(0,o.kt)("p",null,"Fix incorrect returned last message ID while the ",(0,o.kt)("inlineCode",{parentName:"p"},"lastConfirmedEntry")," with negative entry ID #12277",(0,o.kt)("br",{parentName:"p"}),"\n","Fix typo of the returned last message ID when the last message ID is from compacted ledger #12237",(0,o.kt)("br",{parentName:"p"}),"\n","Return the last position of the compacted data while the original data been deleted #12161  "),(0,o.kt)("h2",{id:"security"},"security"),(0,o.kt)("p",null,"[security]"," Upgrade netty to 4.1.68.Final #12218",(0,o.kt)("br",{parentName:"p"}),"\n","Forbid to read other topic's data in managedLedger layer #11912  "),(0,o.kt)("h2",{id:"key-shared"},"key-shared"),(0,o.kt)("p",null,"Fix returned wrong hash ranges for the consumer with same consumer name #12212  "),(0,o.kt)("h2",{id:"test"},"test"),(0,o.kt)("p",null,"[unit test]"," use correct line separator instead of \\n #12143",(0,o.kt)("br",{parentName:"p"}),"\n","Force Python CI to use earlier version of Protobuf which supports Python2 #12058",(0,o.kt)("br",{parentName:"p"}),"\n","[Test]"," Fix managed cursor metrics test #11879  "),(0,o.kt)("h2",{id:"cli"},"cli"),(0,o.kt)("p",null,"[pulsar-client]"," Make it possible to disable poolMessages #12108",(0,o.kt)("br",{parentName:"p"}),"\n","[testclient]"," Add total messages when periodic printing throughput #12084",(0,o.kt)("br",{parentName:"p"}),"\n","[cli]"," Fix issue where pulsar-client command cannot consume v2 topics through WebSocket #12000  "),(0,o.kt)("h2",{id:"connect"},"connect"),(0,o.kt)("p",null,"Remove the deprecated api usage in hdfs #12080  "),(0,o.kt)("h2",{id:"zookeeper"},"zookeeper"),(0,o.kt)("p",null,"[Zookeeper Client]"," Fix String formatting conversion in toString method #12006  "),(0,o.kt)("h2",{id:"go"},"go"),(0,o.kt)("p",null,"[pulsar-functions-go]"," support set subscription position #11990",(0,o.kt)("br",{parentName:"p"}),"\n","[pulsar-functions-go]"," sync to the latest function proto #11853  "),(0,o.kt)("h2",{id:"tool"},"tool"),(0,o.kt)("p",null,"[testclient]"," Printing aggregated data when client exit #11985",(0,o.kt)("br",{parentName:"p"}),"\n","[standalone]"," remove noisy log on pulsar standalone startup #11970  "),(0,o.kt)("h2",{id:"topic-policy"},"topic-policy"),(0,o.kt)("p",null,"Fix messages in TopicPolicies will never be cleaned up #11928  "),(0,o.kt)("h2",{id:"build"},"build"),(0,o.kt)("p",null,"Fixed merge conflict on MetadataStoreTest #11921",(0,o.kt)("br",{parentName:"p"}),"\n","Source tarball: apply executable file permissions to shell scripts (fixes #10917)  #11858  "),(0,o.kt)("h2",{id:"dependency"},"dependency"),(0,o.kt)("p",null,"Upgrade Netty to 4.1.67.Final #11875  "),(0,o.kt)("h2",{id:"admin"},"admin"),(0,o.kt)("p",null,"[Issue 11814]"," fix pulsar admin method:getMessageById. #11852",(0,o.kt)("br",{parentName:"p"}),"\n","[pulsar-admin]"," add option to get precise backlog on v1 topic #8927  "),(0,o.kt)("h2",{id:"stats"},"stats"),(0,o.kt)("p",null,"[stats]"," Add Key_Shared metadata to topic stats #11839"))}m.isMDXComponent=!0}}]);