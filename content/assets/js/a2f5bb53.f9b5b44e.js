"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[13293],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=d(a),m=i,k=c["".concat(s,".").concat(m)]||c[m]||u[m]||r;return a?n.createElement(k,l(l({ref:t},p),{},{components:a})):n.createElement(k,l({ref:t},p))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var d=2;d<r;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),i=a(86010);const r="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,i.Z)(r,l),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(87462),i=a(67294),r=a(86010),l=a(72389),o=a(67392),s=a(7094),d=a(12466);const p="tabList__CuJ",u="tabItem_LNqP";function c(e){const{lazy:t,block:a,defaultValue:l,values:c,groupId:m,className:k}=e,b=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=c??b.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),h=(0,o.l)(f,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===l?l:l??b.find((e=>e.props.default))?.props.value??b[0].props.value;if(null!==g&&!f.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:N}=(0,s.U)(),[y,C]=(0,i.useState)(g),w=[],{blockElementScrollPositionUntilNextRender:T}=(0,d.o5)();if(null!=m){const e=v[m];null!=e&&e!==y&&f.some((t=>t.value===e))&&C(e)}const P=e=>{const t=e.currentTarget,a=w.indexOf(t),n=f[a].value;n!==y&&(T(t),C(n),null!=m&&N(m,String(n)))},E=e=>{let t=null;switch(e.key){case"Enter":P(e);break;case"ArrowRight":{const a=w.indexOf(e.currentTarget)+1;t=w[a]??w[0];break}case"ArrowLeft":{const a=w.indexOf(e.currentTarget)-1;t=w[a]??w[w.length-1];break}}t?.focus()};return i.createElement("div",{className:(0,r.Z)("tabs-container",p)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},k)},f.map((e=>{let{value:t,label:a,attributes:l}=e;return i.createElement("li",(0,n.Z)({role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,key:t,ref:e=>w.push(e),onKeyDown:E,onClick:P},l,{className:(0,r.Z)("tabs__item",u,l?.className,{"tabs__item--active":y===t})}),a??t)}))),t?(0,i.cloneElement)(b.filter((e=>e.props.value===y))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}function m(e){const t=(0,l.Z)();return i.createElement(c,(0,n.Z)({key:String(t)},e))}},458:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>d,toc:()=>u});var n=a(87462),i=(a(67294),a(3905)),r=a(65488),l=a(85162);const o={id:"cookbooks-deduplication",title:"Message deduplication",sidebar_label:"Message deduplication",original_id:"cookbooks-deduplication"},s=void 0,d={unversionedId:"cookbooks-deduplication",id:"version-2.10.x/cookbooks-deduplication",title:"Message deduplication",description:"When Message deduplication is enabled, it ensures that each message produced on Pulsar topics is persisted to disk only once, even if the message is produced more than once. Message deduplication is handled automatically on the server side.",source:"@site/versioned_docs/version-2.10.x/cookbooks-deduplication.md",sourceDirName:".",slug:"/cookbooks-deduplication",permalink:"/docs/2.10.x/cookbooks-deduplication",draft:!1,editUrl:"https://github.com/apache/pulsar/edit/master/site2/docs/cookbooks-deduplication.md",tags:[],version:"2.10.x",frontMatter:{id:"cookbooks-deduplication",title:"Message deduplication",sidebar_label:"Message deduplication",original_id:"cookbooks-deduplication"},sidebar:"version-2.10.x/docsSidebar",previous:{title:"Topic compaction",permalink:"/docs/2.10.x/cookbooks-compaction"},next:{title:"Non-persistent messaging",permalink:"/docs/2.10.x/cookbooks-non-persistent"}},p={},u=[{value:"How it works",id:"how-it-works",level:2},{value:"Configure message deduplication",id:"configure-message-deduplication",level:2},{value:"Set default value at the broker-level",id:"set-default-value-at-the-broker-level",level:3},{value:"Enable message deduplication",id:"enable-message-deduplication",level:3},{value:"Disable message deduplication",id:"disable-message-deduplication",level:3},{value:"Pulsar clients",id:"pulsar-clients",level:2}],c={toc:u};function m(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"When ",(0,i.kt)("strong",{parentName:"p"},"Message deduplication")," is enabled, it ensures that each message produced on Pulsar topics is persisted to disk ",(0,i.kt)("em",{parentName:"p"},"only once"),", even if the message is produced more than once. Message deduplication is handled automatically on the server side. "),(0,i.kt)("p",null,"To use message deduplication in Pulsar, you need to configure your Pulsar brokers and clients."),(0,i.kt)("h2",{id:"how-it-works"},"How it works"),(0,i.kt)("p",null,"You can enable or disable message deduplication at the namespace level or the topic level. By default, it is disabled on all namespaces or topics. You can enable it in the following ways:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Enable deduplication for all namespaces/topics at the broker-level."),(0,i.kt)("li",{parentName:"ul"},"Enable deduplication for a specific namespace with the ",(0,i.kt)("inlineCode",{parentName:"li"},"pulsar-admin namespaces")," interface."),(0,i.kt)("li",{parentName:"ul"},"Enable deduplication for a specific topic with the ",(0,i.kt)("inlineCode",{parentName:"li"},"pulsar-admin topics")," interface.")),(0,i.kt)("h2",{id:"configure-message-deduplication"},"Configure message deduplication"),(0,i.kt)("p",null,"You can configure message deduplication in Pulsar using the ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.10.x/reference-configuration#broker"},(0,i.kt)("inlineCode",{parentName:"a"},"broker.conf"))," configuration file. The following deduplication-related parameters are available."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"brokerDeduplicationEnabled")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Sets the default behavior for message deduplication in the Pulsar broker. If it is set to ",(0,i.kt)("inlineCode",{parentName:"td"},"true"),", message deduplication is enabled on all namespaces/topics. If it is set to ",(0,i.kt)("inlineCode",{parentName:"td"},"false"),", you have to enable or disable deduplication at the namespace level or the topic level."),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"false"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"brokerDeduplicationMaxNumberOfProducers")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The maximum number of producers for which information is stored for deduplication purposes."),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"10000"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"brokerDeduplicationEntriesInterval")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The number of entries after which a deduplication informational snapshot is taken. A larger interval leads to fewer snapshots being taken, though this lengthens the topic recovery time (the time required for entries published after the snapshot to be replayed)."),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"1000"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"brokerDeduplicationSnapshotIntervalSeconds")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The time period after which a deduplication informational snapshot is taken. It runs simultaneously with ",(0,i.kt)("inlineCode",{parentName:"td"},"brokerDeduplicationEntriesInterval"),"."),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"120"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"brokerDeduplicationProducerInactivityTimeoutMinutes")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The time of inactivity (in minutes) after which the broker discards deduplication information related to a disconnected producer."),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"360")," (6 hours)")))),(0,i.kt)("h3",{id:"set-default-value-at-the-broker-level"},"Set default value at the broker-level"),(0,i.kt)("p",null,"By default, message deduplication is ",(0,i.kt)("em",{parentName:"p"},"disabled")," on all Pulsar namespaces/topics. To enable it on all namespaces/topics, set the ",(0,i.kt)("inlineCode",{parentName:"p"},"brokerDeduplicationEnabled")," parameter to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," and re-start the broker."),(0,i.kt)("p",null,"Even if you set the value for ",(0,i.kt)("inlineCode",{parentName:"p"},"brokerDeduplicationEnabled"),", enabling or disabling via Pulsar admin CLI overrides the default settings at the broker-level."),(0,i.kt)("h3",{id:"enable-message-deduplication"},"Enable message deduplication"),(0,i.kt)("p",null,"Though message deduplication is disabled by default at the broker level, you can enable message deduplication for a specific namespace or topic using the ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.10.x/pulsar-admin#namespace-set-deduplication"},(0,i.kt)("inlineCode",{parentName:"a"},"pulsar-admin namespaces set-deduplication"))," or the ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.10.x/pulsar-admin#topic-set-deduplication"},(0,i.kt)("inlineCode",{parentName:"a"},"pulsar-admin topics set-deduplication"))," command. You can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"--enable"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"-e")," flag and specify the namespace/topic. "),(0,i.kt)("p",null,"The following example shows how to enable message deduplication at the namespace level."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar-admin namespaces set-deduplication \\\n  public/default \\\n  --enable # or just -e\n\n")),(0,i.kt)("h3",{id:"disable-message-deduplication"},"Disable message deduplication"),(0,i.kt)("p",null,"Even if you enable message deduplication at the broker level, you can disable message deduplication for a specific namespace or topic using the ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.10.x/pulsar-admin#namespace-set-deduplication"},(0,i.kt)("inlineCode",{parentName:"a"},"pulsar-admin namespace set-deduplication"))," or the ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.10.x/pulsar-admin#topic-set-deduplication"},(0,i.kt)("inlineCode",{parentName:"a"},"pulsar-admin topics set-deduplication"))," command. Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"--disable"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"-d")," flag and specify the namespace/topic."),(0,i.kt)("p",null,"The following example shows how to disable message deduplication at the namespace level."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar-admin namespaces set-deduplication \\\n  public/default \\\n  --disable # or just -d\n\n")),(0,i.kt)("h2",{id:"pulsar-clients"},"Pulsar clients"),(0,i.kt)("p",null,"If you enable message deduplication in Pulsar brokers, you need complete the following tasks for your client producers:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Specify a name for the producer."),(0,i.kt)("li",{parentName:"ol"},"Set the message timeout to ",(0,i.kt)("inlineCode",{parentName:"li"},"0")," (namely, no timeout).")),(0,i.kt)("p",null,"The instructions for Java, Python, and C++ clients are different."),(0,i.kt)(r.Z,{defaultValue:"Java clients",values:[{label:"Java clients",value:"Java clients"},{label:"Python clients",value:"Python clients"},{label:"C++ clients",value:"C++ clients"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"Java clients",mdxType:"TabItem"},(0,i.kt)("p",null,"To enable message deduplication on a ",(0,i.kt)("a",{parentName:"p",href:"client-libraries-java.md#producers"},"Java producer"),", set the producer name using the ",(0,i.kt)("inlineCode",{parentName:"p"},"producerName")," setter, and set the timeout to ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," using the ",(0,i.kt)("inlineCode",{parentName:"p"},"sendTimeout")," setter. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'\nimport org.apache.pulsar.client.api.Producer;\nimport org.apache.pulsar.client.api.PulsarClient;\nimport java.util.concurrent.TimeUnit;\n\nPulsarClient pulsarClient = PulsarClient.builder()\n        .serviceUrl("pulsar://localhost:6650")\n        .build();\nProducer producer = pulsarClient.newProducer()\n        .producerName("producer-1")\n        .topic("persistent://public/default/topic-1")\n        .sendTimeout(0, TimeUnit.SECONDS)\n        .create();\n\n'))),(0,i.kt)(l.Z,{value:"Python clients",mdxType:"TabItem"},(0,i.kt)("p",null,"To enable message deduplication on a ",(0,i.kt)("a",{parentName:"p",href:"client-libraries-python.md#producers"},"Python producer"),", set the producer name using ",(0,i.kt)("inlineCode",{parentName:"p"},"producer_name"),", and set the timeout to ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," using ",(0,i.kt)("inlineCode",{parentName:"p"},"send_timeout_millis"),". "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'\nimport pulsar\n\nclient = pulsar.Client("pulsar://localhost:6650")\nproducer = client.create_producer(\n    "persistent://public/default/topic-1",\n    producer_name="producer-1",\n    send_timeout_millis=0)\n\n'))),(0,i.kt)(l.Z,{value:"C++ clients",mdxType:"TabItem"},(0,i.kt)("p",null,"To enable message deduplication on a ",(0,i.kt)("a",{parentName:"p",href:"client-libraries-cpp.md#producer"},"C++ producer"),", set the producer name using ",(0,i.kt)("inlineCode",{parentName:"p"},"producer_name"),", and set the timeout to ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," using ",(0,i.kt)("inlineCode",{parentName:"p"},"send_timeout_millis"),". "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'\n#include <pulsar/Client.h>\n\nstd::string serviceUrl = "pulsar://localhost:6650";\nstd::string topic = "persistent://some-tenant/ns1/topic-1";\nstd::string producerName = "producer-1";\n\nClient client(serviceUrl);\n\nProducerConfiguration producerConfig;\nproducerConfig.setSendTimeout(0);\nproducerConfig.setProducerName(producerName);\n\nProducer producer;\n\nResult result = client.createProducer(topic, producerConfig, producer);\n\n')))))}m.isMDXComponent=!0}}]);