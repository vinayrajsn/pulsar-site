"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[42785],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=l(n),h=r,m=d["".concat(c,".").concat(h)]||d[h]||u[h]||i;return n?a.createElement(m,s(s({ref:t},p),{},{components:n})):a.createElement(m,s({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},28568:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return u}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),s=["components"],o={id:"concepts-clients",title:"Pulsar Clients",sidebar_label:"Clients",original_id:"concepts-clients"},c=void 0,l={unversionedId:"concepts-clients",id:"version-2.9.1/concepts-clients",title:"Pulsar Clients",description:"Pulsar exposes a client API with language bindings for Java, Go, Python, C++ and C#. The client API optimizes and encapsulates Pulsar's client-broker communication protocol and exposes a simple and intuitive API for use by applications.",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/version-2.9.1/concepts-clients.md",sourceDirName:".",slug:"/concepts-clients",permalink:"/zh-TW/docs/concepts-clients",editUrl:"https://github.com/apache/pulsar/edit/master/site2/website-next/versioned_docs/version-2.9.1/concepts-clients.md",tags:[],version:"2.9.1",frontMatter:{id:"concepts-clients",title:"Pulsar Clients",sidebar_label:"Clients",original_id:"concepts-clients"},sidebar:"version-2.9.1/docsSidebar",previous:{title:"Architecture",permalink:"/zh-TW/docs/concepts-architecture-overview"},next:{title:"Geo Replication",permalink:"/zh-TW/docs/concepts-replication"}},p={},u=[{value:"Client setup phase",id:"client-setup-phase",level:2},{value:"Reader interface",id:"reader-interface",level:2}],d={toc:u};function h(e){var t=e.components,o=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Pulsar exposes a client API with language bindings for ",(0,i.kt)("a",{parentName:"p",href:"/zh-TW/docs/client-libraries-java"},"Java"),", ",(0,i.kt)("a",{parentName:"p",href:"/zh-TW/docs/client-libraries-go"},"Go"),", ",(0,i.kt)("a",{parentName:"p",href:"/zh-TW/docs/client-libraries-python"},"Python"),", ",(0,i.kt)("a",{parentName:"p",href:"/zh-TW/docs/client-libraries-cpp"},"C++")," and ",(0,i.kt)("a",{parentName:"p",href:"client-libraries-dotnet"},"C#"),". The client API optimizes and encapsulates Pulsar's client-broker communication protocol and exposes a simple and intuitive API for use by applications."),(0,i.kt)("p",null,"Under the hood, the current official Pulsar client libraries support transparent reconnection and/or connection failover to brokers, queuing of messages until acknowledged by the broker, and heuristics such as connection retries with backoff."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Custom client libraries")," If you'd like to create your own client library, we recommend consulting the documentation on Pulsar's custom ",(0,i.kt)("a",{parentName:"p",href:"developing-binary-protocol"},"binary protocol"),".")),(0,i.kt)("h2",{id:"client-setup-phase"},"Client setup phase"),(0,i.kt)("p",null,"Before an application creates a producer/consumer, the Pulsar client library needs to initiate a setup phase including two steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The client attempts to determine the owner of the topic by sending an HTTP lookup request to the broker. The request could reach one of the active brokers which, by looking at the (cached) zookeeper metadata knows who is serving the topic or, in case nobody is serving it, tries to assign it to the least loaded broker."),(0,i.kt)("li",{parentName:"ol"},"Once the client library has the broker address, it creates a TCP connection (or reuse an existing connection from the pool) and authenticates it. Within this connection, client and broker exchange binary commands from a custom protocol. At this point the client sends a command to create producer/consumer to the broker, which will comply after having validated the authorization policy.")),(0,i.kt)("p",null,"Whenever the TCP connection breaks, the client immediately re-initiates this setup phase and keeps trying with exponential backoff to re-establish the producer or consumer until the operation succeeds."),(0,i.kt)("h2",{id:"reader-interface"},"Reader interface"),(0,i.kt)("p",null,'In Pulsar, the "standard" ',(0,i.kt)("a",{parentName:"p",href:"/zh-TW/docs/concepts-messaging#consumers"},"consumer interface")," involves using consumers to listen on ",(0,i.kt)("a",{parentName:"p",href:"/zh-TW/docs/reference-terminology#topic"},"topics"),", process incoming messages, and finally acknowledge those messages when they are processed. Whenever a new subscription is created, it is initially positioned at the end of the topic (by default), and consumers associated with that subscription begin reading with the first message created afterwards.  Whenever a consumer connects to a topic using a pre-existing subscription, it begins reading from the earliest message un-acked within that subscription. In summary, with the consumer interface, subscription cursors are automatically managed by Pulsar in response to ",(0,i.kt)("a",{parentName:"p",href:"/zh-TW/docs/concepts-messaging#acknowledgement"},"message acknowledgements"),"."),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"reader interface")," for Pulsar enables applications to manually manage cursors. When you use a reader to connect to a topic---rather than a consumer---you need to specify ",(0,i.kt)("em",{parentName:"p"},"which")," message the reader begins reading from when it connects to a topic. When connecting to a topic, the reader interface enables you to begin with:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"earliest")," available message in the topic"),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"latest")," available message in the topic"),(0,i.kt)("li",{parentName:"ul"},'Some other message between the earliest and the latest. If you select this option, you\'ll need to explicitly provide a message ID. Your application will be responsible for "knowing" this message ID in advance, perhaps fetching it from a persistent data store or cache.')),(0,i.kt)("p",null,'The reader interface is helpful for use cases like using Pulsar to provide effectively-once processing semantics for a stream processing system. For this use case, it\'s essential that the stream processing system be able to "rewind" topics to a specific message and begin reading there. The reader interface provides Pulsar clients with the low-level abstraction necessary to "manually position" themselves within a topic.'),(0,i.kt)("p",null,"Internally, the reader interface is implemented as a consumer using an exclusive, non-durable subscription to the topic with a randomly-allocated name."),(0,i.kt)("p",null,"[ ",(0,i.kt)("strong",{parentName:"p"},"IMPORTANT")," ]"),(0,i.kt)("p",null,"Unlike subscription/consumer, readers are non-durable in nature and does not prevent data in a topic from being deleted, thus it is ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"strongly"))," advised that ",(0,i.kt)("a",{parentName:"p",href:"cookbooks-retention-expiry"},"data retention")," be configured. If data retention for a topic is not configured for an adequate amount of time, messages that the reader has not yet read might be deleted .  This causes the readers to essentially skip messages. Configuring the data retention for a topic guarantees the reader with a certain duration to read a message."),(0,i.kt)("p",null,'Please also note that a reader can have a "backlog", but the metric is only used for users to know how behind the reader is. The metric is not considered for any backlog quota calculations.'),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"The Pulsar consumer and reader interfaces",src:n(5286).Z,width:"1289",height:"1720"})),(0,i.kt)("p",null,"Here's a Java example that begins reading from the earliest available message on a topic:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'\nimport org.apache.pulsar.client.api.Message;\nimport org.apache.pulsar.client.api.MessageId;\nimport org.apache.pulsar.client.api.Reader;\n\n// Create a reader on a topic and for a specific message (and onward)\nReader<byte[]> reader = pulsarClient.newReader()\n    .topic("reader-api-test")\n    .startMessageId(MessageId.earliest)\n    .create();\n\nwhile (true) {\n    Message message = reader.readNext();\n\n    // Process the message\n}\n\n')),(0,i.kt)("p",null,"To create a reader that reads from the latest available message:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"\nReader<byte[]> reader = pulsarClient.newReader()\n    .topic(topic)\n    .startMessageId(MessageId.latest)\n    .create();\n\n")),(0,i.kt)("p",null,"To create a reader that reads from some message between the earliest and the latest:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"\nbyte[] msgIdBytes = // Some byte array\nMessageId id = MessageId.fromByteArray(msgIdBytes);\nReader<byte[]> reader = pulsarClient.newReader()\n    .topic(topic)\n    .startMessageId(id)\n    .create();\n\n")))}h.isMDXComponent=!0},5286:function(e,t,n){t.Z=n.p+"assets/images/pulsar-reader-consumer-interfaces-4c838d3fa1b811f2c074087d44b991ea.png"}}]);