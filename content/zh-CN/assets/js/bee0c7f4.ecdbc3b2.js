"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[49620],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return c}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),d=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=d(t.components);return a.createElement(o.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),m=d(n),c=r,g=m["".concat(o,".").concat(c)]||m[c]||u[c]||l;return n?a.createElement(g,i(i({ref:e},p),{},{components:n})):a.createElement(g,i({ref:e},p))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=m;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s.mdxType="string"==typeof t?t:r,i[1]=s;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},65367:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return u}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],s={id:"administration-stats",title:"Pulsar stats",sidebar_label:"Pulsar statistics"},o=void 0,d={unversionedId:"administration-stats",id:"administration-stats",title:"Pulsar stats",description:"Partitioned topics",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/administration-stats.md",sourceDirName:".",slug:"/administration-stats",permalink:"/zh-CN/docs/next/administration-stats",editUrl:"https://github.com/apache/pulsar/edit/master/site2/website-next/docs/administration-stats.md",tags:[],version:"current",frontMatter:{id:"administration-stats",title:"Pulsar stats",sidebar_label:"Pulsar statistics"},sidebar:"docsSidebar",previous:{title:"Pulsar Manager",permalink:"/zh-CN/docs/next/administration-pulsar-manager"},next:{title:"Load balance",permalink:"/zh-CN/docs/next/administration-load-balance"}},p={},u=[{value:"Partitioned topics",id:"partitioned-topics",level:2},{value:"Topics",id:"topics",level:2}],m={toc:u};function c(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"partitioned-topics"},"Partitioned topics"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Stat"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"msgRateIn"),(0,l.kt)("td",{parentName:"tr",align:null},"The sum of publish rates of all local and replication publishers in messages per second.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"msgThroughputIn"),(0,l.kt)("td",{parentName:"tr",align:null},"Same as msgRateIn but in bytes per second instead of messages per second.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"msgRateOut"),(0,l.kt)("td",{parentName:"tr",align:null},"The sum of dispatch rates of all local and replication consumers in messages per second.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"msgThroughputOut"),(0,l.kt)("td",{parentName:"tr",align:null},"Same as msgRateOut but in bytes per second instead of messages per second.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"averageMsgSize"),(0,l.kt)("td",{parentName:"tr",align:null},"Average message size, in bytes, from this publisher within the last interval.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"storageSize"),(0,l.kt)("td",{parentName:"tr",align:null},"The sum of storage size of the ledgers for this topic.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"publishers"),(0,l.kt)("td",{parentName:"tr",align:null},"The list of all local publishers into the topic. Publishers can be anywhere from zero to thousands.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"producerId"),(0,l.kt)("td",{parentName:"tr",align:null},"Internal identifier for this producer on this topic.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"producerName"),(0,l.kt)("td",{parentName:"tr",align:null},"Internal identifier for this producer, generated by the client library.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"address"),(0,l.kt)("td",{parentName:"tr",align:null},"IP address and source port for the connection of this producer.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"connectedSince"),(0,l.kt)("td",{parentName:"tr",align:null},"Timestamp this producer is created or last reconnected.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"subscriptions"),(0,l.kt)("td",{parentName:"tr",align:null},"The list of all local subscriptions to the topic.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"my-subscription"),(0,l.kt)("td",{parentName:"tr",align:null},"The name of this subscription (client defined).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"msgBacklog"),(0,l.kt)("td",{parentName:"tr",align:null},"The count of messages in backlog for this subscription.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type"),(0,l.kt)("td",{parentName:"tr",align:null},"This subscription type.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"msgRateExpired"),(0,l.kt)("td",{parentName:"tr",align:null},"The rate at which messages are discarded instead of dispatched from this subscription due to TTL.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"consumers"),(0,l.kt)("td",{parentName:"tr",align:null},"The list of connected consumers for this subscription.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"consumerName"),(0,l.kt)("td",{parentName:"tr",align:null},"Internal identifier for this consumer, generated by the client library.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"availablePermits"),(0,l.kt)("td",{parentName:"tr",align:null},"The number of messages this consumer has space for in the listen queue of client library. A value of 0 means the queue of client library is full and receive() is not being called. A nonzero value means this consumer is ready to be dispatched messages.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"replication"),(0,l.kt)("td",{parentName:"tr",align:null},"This section gives the stats for cross-colo replication of this topic.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"replicationBacklog"),(0,l.kt)("td",{parentName:"tr",align:null},"The outbound replication backlog in messages.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"connected"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether the outbound replicator is connected.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"replicationDelayInSeconds"),(0,l.kt)("td",{parentName:"tr",align:null},"How long the oldest message has been waiting to be sent through the connection, if connected is true.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"inboundConnection"),(0,l.kt)("td",{parentName:"tr",align:null},"The IP and port of the broker in the publisher connection of remote cluster to this broker.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"inboundConnectedSince"),(0,l.kt)("td",{parentName:"tr",align:null},"The TCP connection being used to publish messages to the remote cluster. If no local publishers are connected, this connection is automatically closed after a minute.")))),(0,l.kt)("h2",{id:"topics"},"Topics"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Stat"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"entriesAddedCounter"),(0,l.kt)("td",{parentName:"tr",align:null},"Messages published since this broker loads this topic.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"numberOfEntries"),(0,l.kt)("td",{parentName:"tr",align:null},"Total number of messages being tracked.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"totalSize"),(0,l.kt)("td",{parentName:"tr",align:null},"Total storage size in bytes of all messages.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"currentLedgerEntries"),(0,l.kt)("td",{parentName:"tr",align:null},"Count of messages written to the ledger currently open for writing.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"currentLedgerSize"),(0,l.kt)("td",{parentName:"tr",align:null},"Size in bytes of messages written to ledger currently open for writing.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lastLedgerCreatedTimestamp"),(0,l.kt)("td",{parentName:"tr",align:null},"Time when last ledger is created.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lastLedgerCreationFailureTimestamp"),(0,l.kt)("td",{parentName:"tr",align:null},"Time when last ledger is failed.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"waitingCursorsCount"),(0,l.kt)("td",{parentName:"tr",align:null},"How many cursors are caught up and waiting for a new message to be published.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pendingAddEntriesCount"),(0,l.kt)("td",{parentName:"tr",align:null},"How many messages have (asynchronous) write requests you are waiting on completion.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lastConfirmedEntry"),(0,l.kt)("td",{parentName:"tr",align:null},"The ledgerid:entryid of the last message successfully written. If the entryid is -1, then the ledger is opened or is being currently opened but has no entries written yet.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"state"),(0,l.kt)("td",{parentName:"tr",align:null},"The state of the cursor ledger. Open means you have a cursor ledger for saving updates of the markDeletePosition.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ledgers"),(0,l.kt)("td",{parentName:"tr",align:null},"The ordered list of all ledgers for this topic holding its messages.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cursors"),(0,l.kt)("td",{parentName:"tr",align:null},"The list of all cursors on this topic. Every subscription you saw in the topic stats has one.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"markDeletePosition"),(0,l.kt)("td",{parentName:"tr",align:null},"The ack position: the last message the subscriber acknowledges receiving.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"readPosition"),(0,l.kt)("td",{parentName:"tr",align:null},"The latest position of subscriber for reading message.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"waitingReadOp"),(0,l.kt)("td",{parentName:"tr",align:null},"This is true when the subscription reads the latest message that is published to the topic and waits on new messages to be published.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pendingReadOps"),(0,l.kt)("td",{parentName:"tr",align:null},"The counter for how many outstanding read requests to the BookKeepers you have in progress.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"messagesConsumedCounter"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of messages this cursor acks since this broker loads this topic.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cursorLedger"),(0,l.kt)("td",{parentName:"tr",align:null},"The ledger used to persistently store the current markDeletePosition.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cursorLedgerLastEntry"),(0,l.kt)("td",{parentName:"tr",align:null},"The last entryid used to persistently store the current markDeletePosition.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"individuallyDeletedMessages"),(0,l.kt)("td",{parentName:"tr",align:null},"If Acks are done out of order, shows the ranges of messages Acked between the markDeletePosition and the read-position.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lastLedgerSwitchTimestamp"),(0,l.kt)("td",{parentName:"tr",align:null},"The last time the cursor ledger is rolled over.")))))}c.isMDXComponent=!0}}]);