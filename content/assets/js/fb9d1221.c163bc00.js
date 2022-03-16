"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[44701],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return d}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=p(a),d=r,m=h["".concat(s,".").concat(d)]||h[d]||u[d]||o;return a?n.createElement(m,i(i({ref:t},c),{},{components:a})):n.createElement(m,i({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},86486:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=["components"],l={author:"Bo Cong, Anonymitaet",title:"Apache Pulsar 2.7.3"},s="What\u2019s New in Apache Pulsar 2.7.3",p={permalink:"/blog/2021/08/11/Apache-Pulsar-2-7-3",editUrl:"https://github.com/apache/pulsar/edit/master/site2/website-next/blog/2021-08-11-Apache-Pulsar-2-7-3.md",source:"@site/blog/2021-08-11-Apache-Pulsar-2-7-3.md",title:"Apache Pulsar 2.7.3",description:"The Apache Pulsar community releases version 2.7.3! 34 contributors provided improvements and bug fixes that delivered 79 commits.",date:"2021-08-11T00:00:00.000Z",formattedDate:"August 11, 2021",tags:[],readingTime:5.72,truncated:!0,authors:[{name:"Bo Cong, Anonymitaet"}],frontMatter:{author:"Bo Cong, Anonymitaet",title:"Apache Pulsar 2.7.3"},prevItem:{title:"Announcing Pulsar Summit Asia 2021: CFP Is Open!",permalink:"/blog/2021/08/18/asia-cfp"},nextItem:{title:"Apache Pulsar 2.8.0",permalink:"/blog/2021/06/12/Apache-Pulsar-2-8-0"}},c={authorsImageUrls:[void 0]},u=[{value:"Highlights",id:"highlights",level:2},{value:"Broker",id:"broker",level:2},{value:"Cursor reads adhere to the dispatch byte rate limiter setting. PR-9826",id:"cursor-reads-adhere-to-the-dispatch-byte-rate-limiter-setting-pr-9826",level:3},{value:"The ledger rollover scheduled task runs as expected. PR-11226",id:"the-ledger-rollover-scheduled-task-runs-as-expected-pr-11226",level:3},{value:"The topic-level retention policy works correctly when restarting a broker. PR-11136",id:"the-topic-level-retention-policy-works-correctly-when-restarting-a-broker-pr-11136",level:3},{value:"The lastMessageId API call no longer causes a memory leak. PR-10977",id:"the-lastmessageid-api-call-no-longer-causes-a-memory-leak-pr-10977",level:3},{value:"ZooKeeper reads are cached by brokers. PR-10594",id:"zookeeper-reads-are-cached-by-brokers-pr-10594",level:3},{value:"Monitoring threads that call <code>LeaderService.isLeader()</code> are no longer blocked. PR-10512",id:"monitoring-threads-that-call-leaderserviceisleader-are-no-longer-blocked-pr-10512",level:3},{value:"<code>hasMessageAvailable</code> can read messages successfully. PR-10414",id:"hasmessageavailable-can-read-messages-successfully-pr-10414",level:3},{value:"Proxy",id:"proxy",level:2},{value:"Proxy supports creating partitioned topics automatically. PR-8048",id:"proxy-supports-creating-partitioned-topics-automatically-pr-8048",level:3},{value:"Pulsar admin",id:"pulsar-admin",level:2},{value:"Flag added to indicate whether or not to create a metadata path on replicated clusters. PR-11140",id:"flag-added-to-indicate-whether-or-not-to-create-a-metadata-path-on-replicated-clusters-pr-11140",level:3},{value:"A topic policy can no longer be set for a non-existent topic. PR-11131",id:"a-topic-policy-can-no-longer-be-set-for-a-non-existent-topic-pr-11131",level:3},{value:"Discovery service no longer hard codes the topic domain as persistent. PR-10806",id:"discovery-service-no-longer-hard-codes-the-topic-domain-as-persistent-pr-10806",level:3},{value:"Other connectors can now use the Kinesis <code>Backoff</code> class. PR-10744",id:"other-connectors-can-now-use-the-kinesis-backoff-class-pr-10744",level:3},{value:"Client",id:"client",level:2},{value:"A <code>FLOW</code> request with zero permits can not be sent. PR-10506",id:"a-flow-request-with-zero-permits-can-not-be-sent-pr-10506",level:3},{value:"Function and connector",id:"function-and-connector",level:2},{value:"The Kinesis sink connector acknowledges successful messages. PR-10769",id:"the-kinesis-sink-connector-acknowledges-successful-messages-pr-10769",level:3},{value:"Docker",id:"docker",level:2},{value:"Function name length cannot exceed 52 characters when using Kubernetes runtime. PR-10531",id:"function-name-length-cannot-exceed-52-characters-when-using-kubernetes-runtime-pr-10531",level:3},{value:"Dependency",id:"dependency",level:2},{value:"<code>pulsar-admin</code> connection to proxy is stable when TLS is enabled. PR-10907",id:"pulsar-admin-connection-to-proxy-is-stable-when-tls-is-enabled-pr-10907",level:3}],h={toc:u};function d(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Apache Pulsar community releases version 2.7.3! 34 contributors provided improvements and bug fixes that delivered 79 commits."),(0,o.kt)("h2",{id:"highlights"},"Highlights"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Cursor reads adhere to the dispatch byte rate limiter setting and no longer cause unexpected results. ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11249"},"PR-11249"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The ledger rollover scheduled task runs as expected. ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/11226"},"PR-11226")))),(0,o.kt)("p",null,"This blog walks through the most noteworthy changes. For the complete list including all enhancements and bug fixes, check out the ",(0,o.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/release-notes/#273-mdash-2021-07-27-a-id273a"},"Pulsar 2.7.3 Release Notes"),"."),(0,o.kt)("h1",{id:"notable-bug-fixes-and-enhancements"},"Notable bug fixes and enhancements"),(0,o.kt)("h2",{id:"broker"},"Broker"),(0,o.kt)("h3",{id:"cursor-reads-adhere-to-the-dispatch-byte-rate-limiter-setting-pr-9826"},"Cursor reads adhere to the dispatch byte rate limiter setting. ",(0,o.kt)("a",{parentName:"h3",href:"https://github.com/apache/pulsar/pull/9826"},"PR-9826")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Issue"),": When using byte rates, the dispatch rates were not respected (regardless\nof being a namespace or topic policy). ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Resolution"),": Fixed behavior of dispatch byte rate limiter setting. Cursor reads adhere to the setting and no longer cause unexpected results. "))),(0,o.kt)("h3",{id:"the-ledger-rollover-scheduled-task-runs-as-expected-pr-11226"},"The ledger rollover scheduled task runs as expected. ",(0,o.kt)("a",{parentName:"h3",href:"https://github.com/apache/pulsar/pull/11226"},"PR-11226")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Issue"),": Previously, the ledger rollover scheduled task was executed before reaching the ledger maximum rollover time, which caused the ledger not to roll over in time. ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Resolution"),": Fixed the timing of the ledger rollover schedule, so the task runs only after the ledger is created successfully. "))),(0,o.kt)("h3",{id:"the-topic-level-retention-policy-works-correctly-when-restarting-a-broker-pr-11136"},"The topic-level retention policy works correctly when restarting a broker. ",(0,o.kt)("a",{parentName:"h3",href:"https://github.com/apache/pulsar/pull/11136"},"PR-11136")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Issue"),": Previously, when setting a topic-level retention policy for a topic and then restarting the broker, the topic-level retention policy did not work.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Resolution"),": Fixed behavior of the policy so it replays all policy messages after initiating ",(0,o.kt)("inlineCode",{parentName:"p"},"policyCacheInitMap")," and added a retention policy check test when restarting the broker."))),(0,o.kt)("h3",{id:"the-lastmessageid-api-call-no-longer-causes-a-memory-leak-pr-10977"},"The lastMessageId API call no longer causes a memory leak. ",(0,o.kt)("a",{parentName:"h3",href:"https://github.com/apache/pulsar/pull/10977"},"PR-10977")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Issue"),": Previously, there was a memory leak when calling the ",(0,o.kt)("inlineCode",{parentName:"p"},"lastMessageId")," API, which caused the broker process to be stopped by Kubernetes. ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Resolution"),": Added the missing entry.release() call to PersistentTopic.getLastMessageId to ensure the broker does not run out of memory. "))),(0,o.kt)("h3",{id:"zookeeper-reads-are-cached-by-brokers-pr-10594"},"ZooKeeper reads are cached by brokers. ",(0,o.kt)("a",{parentName:"h3",href:"https://github.com/apache/pulsar/pull/10594"},"PR-10594")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Issue"),": When performing the admin operation to get the namespace of a tenant, ZooKeeper reads were issued on the ZooKeeper client and not getting cached by the brokers.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Resolution"),": Fixed ZooKeeper caching when fetching a list of namespaces for a tenant."))),(0,o.kt)("h3",{id:"monitoring-threads-that-call-leaderserviceisleader-are-no-longer-blocked-pr-10512"},"Monitoring threads that call ",(0,o.kt)("inlineCode",{parentName:"h3"},"LeaderService.isLeader()")," are no longer blocked. ",(0,o.kt)("a",{parentName:"h3",href:"https://github.com/apache/pulsar/pull/10512"},"PR-10512")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Issue"),":  When ",(0,o.kt)("inlineCode",{parentName:"li"},"LeaderService")," changed leadership status, it was locked with a ",(0,o.kt)("inlineCode",{parentName:"li"},"synchronized")," block, which also blocked other threads calling ",(0,o.kt)("inlineCode",{parentName:"li"},"LeaderService.isLeader()"),". "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Resolution"),": Fixed the deadlock condition on the monitoring thread so it is not blocked by ",(0,o.kt)("inlineCode",{parentName:"li"},"LeaderService.isLeader() by modifying "),"ClusterServiceCoordinator",(0,o.kt)("inlineCode",{parentName:"li"},"and"),"WorkerStatsManager",(0,o.kt)("inlineCode",{parentName:"li"},"to check if it is a leader from"),"MembershipManager`. ")),(0,o.kt)("h3",{id:"hasmessageavailable-can-read-messages-successfully-pr-10414"},(0,o.kt)("inlineCode",{parentName:"h3"},"hasMessageAvailable")," can read messages successfully. ",(0,o.kt)("a",{parentName:"h3",href:"https://github.com/apache/pulsar/pull/10414"},"PR-10414")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Issue"),": When ",(0,o.kt)("inlineCode",{parentName:"p"},"hasMessageAvailableAsync")," returned ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", it could not read messages because messages were filtered by ",(0,o.kt)("inlineCode",{parentName:"p"},"acknowledgmentsGroupingTracker"),". ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Resolution"),": Fixed the race conditions by modifying ",(0,o.kt)("inlineCode",{parentName:"p"},"acknowledgmentsGroupingTracker")," to filter duplicate messages, and then cleanup the messages when the connection is open."))),(0,o.kt)("h2",{id:"proxy"},"Proxy"),(0,o.kt)("h3",{id:"proxy-supports-creating-partitioned-topics-automatically-pr-8048"},"Proxy supports creating partitioned topics automatically. ",(0,o.kt)("a",{parentName:"h3",href:"https://github.com/apache/pulsar/pull/8048"},"PR-8048")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Issue"),": Proxies were not creating partitions because they were using the current ZooKeeper metadata.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Resolution"),": Changed the proxy to handle ",(0,o.kt)("inlineCode",{parentName:"p"},"PartitionMetadataRequest")," by selecting and fetching from an available broker instead of using current ZooKeeper metadata."))),(0,o.kt)("h2",{id:"pulsar-admin"},"Pulsar admin"),(0,o.kt)("h3",{id:"flag-added-to-indicate-whether-or-not-to-create-a-metadata-path-on-replicated-clusters-pr-11140"},"Flag added to indicate whether or not to create a metadata path on replicated clusters. ",(0,o.kt)("a",{parentName:"h3",href:"https://github.com/apache/pulsar/pull/11140"},"PR-11140")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Issue"),": When creating a partitioned topic in a replicated namespace, it did not\ncreate a metadata path ",(0,o.kt)("inlineCode",{parentName:"p"},"/managed-ledgers")," on replicated clusters.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Resolution"),": Added a flag (createLocalTopicOnly) to indicate whether or not to create a metadata path for a partitioned topic in replicated clusters."))),(0,o.kt)("h3",{id:"a-topic-policy-can-no-longer-be-set-for-a-non-existent-topic-pr-11131"},"A topic policy can no longer be set for a non-existent topic. ",(0,o.kt)("a",{parentName:"h3",href:"https://github.com/apache/pulsar/pull/11131"},"PR-11131")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Issue"),": Due to a redirect loop in a topic policy, you can set a policy for a non-existing topic or a partition of a partitioned topic. ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Resolution"),": The fix added an authoritative flag for a topic policy to avoid a redirect loop. You can not set a topic policy for a non-existent topic or a partition of a partitioned topic. If you set a topic policy for a partition of a 0-partition topic, it redirects to the broker. "))),(0,o.kt)("h3",{id:"discovery-service-no-longer-hard-codes-the-topic-domain-as-persistent-pr-10806"},"Discovery service no longer hard codes the topic domain as persistent. ",(0,o.kt)("a",{parentName:"h3",href:"https://github.com/apache/pulsar/pull/10806"},"PR-10806")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Issue"),": When using the lookup discovery service for a partitioned non-persistent topic, it returned zero rather than the number of partitions. The Pulsar client tried to connect to the topic as if it were a normal topic.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Resolution"),": Implemented ",(0,o.kt)("inlineCode",{parentName:"p"},"topicName.getDomain().value()")," rather than hard coding ",(0,o.kt)("inlineCode",{parentName:"p"},"persistent.")," Now you can use the discovery service for a partitioned, non-persistent topic successfully."))),(0,o.kt)("h3",{id:"other-connectors-can-now-use-the-kinesis-backoff-class-pr-10744"},"Other connectors can now use the Kinesis ",(0,o.kt)("inlineCode",{parentName:"h3"},"Backoff")," class. ",(0,o.kt)("a",{parentName:"h3",href:"https://github.com/apache/pulsar/pull/10744"},"PR-10744")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Issue"),": The Kinesis sink connector ",(0,o.kt)("inlineCode",{parentName:"p"},"Backoff")," class in the Pulsar client implementation project in combination  with the dependency ",(0,o.kt)("inlineCode",{parentName:"p"},"org.apache.pulsar:pulsar-client-original")," increased the connector size. ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Resolution"),": Added a new class ",(0,o.kt)("inlineCode",{parentName:"p"},"Backoff")," in the function io-core project so that the Kinesis sink connector and other connectors can use the class."))),(0,o.kt)("h2",{id:"client"},"Client"),(0,o.kt)("h3",{id:"a-flow-request-with-zero-permits-can-not-be-sent-pr-10506"},"A ",(0,o.kt)("inlineCode",{parentName:"h3"},"FLOW")," request with zero permits can not be sent. ",(0,o.kt)("a",{parentName:"h3",href:"https://github.com/apache/pulsar/pull/10506"},"PR-10506")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Issue"),": When a broker received a ",(0,o.kt)("inlineCode",{parentName:"li"},"FLOW")," request with zero permits, an exception was thrown and then the connection was closed. This triggered frequent reconnections and caused duplicate or out-of-order messages. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Resolution"),": Added a validation that verifies the permits of a ",(0,o.kt)("inlineCode",{parentName:"li"},"FLOW")," request before sending it. If the permit is zero, the ",(0,o.kt)("inlineCode",{parentName:"li"},"FLOW")," request can not be sent.")),(0,o.kt)("h2",{id:"function-and-connector"},"Function and connector"),(0,o.kt)("h3",{id:"the-kinesis-sink-connector-acknowledges-successful-messages-pr-10769"},"The Kinesis sink connector acknowledges successful messages. ",(0,o.kt)("a",{parentName:"h3",href:"https://github.com/apache/pulsar/pull/10769"},"PR-10769")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Issue"),": The Kinesis sink connector did not acknowledge messages after they were sent successfully. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Resolution"),": Added acknowledgement for the Kinesis sink connector once a message is sent successfully. ")),(0,o.kt)("h2",{id:"docker"},"Docker"),(0,o.kt)("h3",{id:"function-name-length-cannot-exceed-52-characters-when-using-kubernetes-runtime-pr-10531"},"Function name length cannot exceed 52 characters when using Kubernetes runtime. ",(0,o.kt)("a",{parentName:"h3",href:"https://github.com/apache/pulsar/pull/10531"},"PR-10531")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Issue"),": When using Kubernetes runtime, if a function was submitted with a valid length (less than 55 characters), a StatefulSet was created but it was unable to spawn pods. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Resolution"),": Changed the maximum length of a function name from 55 to 53 characters for Kubernetes runtime. With this fix, the length of a function name can not exceed 52 characters. ")),(0,o.kt)("h2",{id:"dependency"},"Dependency"),(0,o.kt)("h3",{id:"pulsar-admin-connection-to-proxy-is-stable-when-tls-is-enabled-pr-10907"},(0,o.kt)("inlineCode",{parentName:"h3"},"pulsar-admin")," connection to proxy is stable when TLS is enabled. ",(0,o.kt)("a",{parentName:"h3",href:"https://github.com/apache/pulsar/pull/10907"},"PR-10907")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Issue"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"pulsar-admin")," was unstable over the TLS connection because of the Jetty bug in SSL buffering introduced in Jetty 9.4.39. It caused large function jar uploads to fail frequently."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Resolution"),": Upgraded Jetty to 9.4.42.v20210604, so that ",(0,o.kt)("inlineCode",{parentName:"li"},"pulsar-admin")," connection to proxy is stable when TLS is enabled.")),(0,o.kt)("h1",{id:"what-is-next"},"What is Next?"),(0,o.kt)("p",null,"If you are interested in learning more about Pulsar 2.7.3, you can ",(0,o.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/en/versions/"},"download 2.7.3")," and try it out now! "),(0,o.kt)("p",null,"The first-ever Pulsar Virtual Summit Europe 2021 will take place in October. ",(0,o.kt)("a",{parentName:"p",href:"https://hopin.com/events/pulsar-summit-europe-2021"},"Register now")," and help us make it an even bigger success by spreading the word on social!"),(0,o.kt)("p",null,"For more information about the Apache Pulsar project and the progress, visit\nthe ",(0,o.kt)("a",{parentName:"p",href:"https://pulsar.apache.org"},"Pulsar website"),", follow the project on Twitter ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/apache_pulsar"},"@apache_pulsar"),", and join ",(0,o.kt)("a",{parentName:"p",href:"https://apache-pulsar.herokuapp.com/"},"Pulsar Slack"),"!"))}d.isMDXComponent=!0}}]);