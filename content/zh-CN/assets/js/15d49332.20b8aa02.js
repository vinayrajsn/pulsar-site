"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[70792],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,k=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(k,s(s({ref:t},c),{},{components:n})):r.createElement(k,s({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},58215:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(67294);function a(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(87462),a=n(67294),o=n(72389),s=n(63725),i=n(86010),l="tabItem_LplD";function u(e){var t,n,o,u=e.lazy,c=e.block,p=e.defaultValue,m=e.values,d=e.groupId,k=e.className,f=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=m?m:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,s.lx)(h,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===p?p:null!=(t=null!=p?p:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=f[0])?void 0:o.props.value;if(null!==v&&!h.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,s.UB)(),N=b.tabGroupChoices,y=b.setTabGroupChoices,w=(0,a.useState)(v),C=w[0],E=w[1],O=[],T=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var S=N[d];null!=S&&S!==C&&h.some((function(e){return e.value===S}))&&E(S)}var P=function(e){var t=e.currentTarget,n=O.indexOf(t),r=h[n].value;r!==C&&(T(t),E(r),null!=d&&y(d,r))},x=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=O.indexOf(e.currentTarget)+1;n=O[r]||O[0];break;case"ArrowLeft":var a=O.indexOf(e.currentTarget)-1;n=O[a]||O[O.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":c},k)},h.map((function(e){var t=e.value,n=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return O.push(e)},onKeyDown:x,onFocus:P,onClick:P},o,{className:(0,i.Z)("tabs__item",l,null==o?void 0:o.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),u?(0,a.cloneElement)(f.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function c(e){var t=(0,o.Z)();return a.createElement(u,(0,r.Z)({key:String(t)},e))}},58470:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return d}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),s=n(9877),i=n(58215),l=["components"],u={id:"io-overview",title:"Pulsar connector overview",sidebar_label:"Overview",original_id:"io-overview"},c=void 0,p={unversionedId:"io-overview",id:"version-2.9.1/io-overview",title:"Pulsar connector overview",description:"Messaging systems are most powerful when you can easily use them with external systems like databases and other messaging systems.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.9.1/io-overview.md",sourceDirName:".",slug:"/io-overview",permalink:"/zh-CN/docs/io-overview",editUrl:"https://github.com/apache/pulsar/edit/master/site2/website-next/versioned_docs/version-2.9.1/io-overview.md",tags:[],version:"2.9.1",frontMatter:{id:"io-overview",title:"Pulsar connector overview",sidebar_label:"Overview",original_id:"io-overview"},sidebar:"version-2.9.1/docsSidebar",previous:{title:"Window Functions: Context",permalink:"/zh-CN/docs/window-functions-context"},next:{title:"Get started",permalink:"/zh-CN/docs/io-quickstart"}},m={},d=[{value:"Concept",id:"concept",level:2},{value:"Source",id:"source",level:3},{value:"Sink",id:"sink",level:3},{value:"Processing guarantee",id:"processing-guarantee",level:2},{value:"Set",id:"set",level:3},{value:"Update",id:"update",level:3},{value:"Work with connector",id:"work-with-connector",level:2}],k={toc:d};function f(e){var t=e.components,u=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},k,u,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Messaging systems are most powerful when you can easily use them with external systems like databases and other messaging systems."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Pulsar IO connectors")," enable you to easily create, deploy, and manage connectors that interact with external systems, such as ",(0,o.kt)("a",{parentName:"p",href:"https://cassandra.apache.org"},"Apache Cassandra"),", ",(0,o.kt)("a",{parentName:"p",href:"https://www.aerospike.com"},"Aerospike"),", and many others."),(0,o.kt)("h2",{id:"concept"},"Concept"),(0,o.kt)("p",null,"Pulsar IO connectors come in two types: ",(0,o.kt)("strong",{parentName:"p"},"source")," and ",(0,o.kt)("strong",{parentName:"p"},"sink"),"."),(0,o.kt)("p",null,"This diagram illustrates the relationship between source, Pulsar, and sink:"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Pulsar IO diagram",src:n(63131).Z,title:"Pulsar IO connectors (sources and sinks)",width:"1758",height:"352"})),(0,o.kt)("h3",{id:"source"},"Source"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Sources ",(0,o.kt)("strong",{parentName:"p"},"feed data from external systems into Pulsar"),".")),(0,o.kt)("p",null,"Common sources include other messaging systems and firehose-style data pipeline APIs."),(0,o.kt)("p",null,"For the complete list of Pulsar built-in source connectors, see ",(0,o.kt)("a",{parentName:"p",href:"/zh-CN/docs/io-connectors#source-connector"},"source connector"),"."),(0,o.kt)("h3",{id:"sink"},"Sink"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Sinks ",(0,o.kt)("strong",{parentName:"p"},"feed data from Pulsar into external systems"),".")),(0,o.kt)("p",null,"Common sinks include other messaging systems and SQL and NoSQL databases."),(0,o.kt)("p",null,"For the complete list of Pulsar built-in sink connectors, see ",(0,o.kt)("a",{parentName:"p",href:"/zh-CN/docs/io-connectors#sink-connector"},"sink connector"),"."),(0,o.kt)("h2",{id:"processing-guarantee"},"Processing guarantee"),(0,o.kt)("p",null,"Processing guarantees are used to handle errors when writing messages to Pulsar topics."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Pulsar connectors and Functions use the ",(0,o.kt)("strong",{parentName:"p"},"same")," processing guarantees as below.")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Delivery semantic"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"at-most-once")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Each message sent to a connector is to be ",(0,o.kt)("strong",{parentName:"td"},"processed once")," or ",(0,o.kt)("strong",{parentName:"td"},"not to be processed"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"at-least-once")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Each message sent to a connector is to be ",(0,o.kt)("strong",{parentName:"td"},"processed once")," or ",(0,o.kt)("strong",{parentName:"td"},"more than once"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"effectively-once")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Each message sent to a connector has ",(0,o.kt)("strong",{parentName:"td"},"one output associated")," with it.")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Processing guarantees for connectors not just rely on Pulsar guarantee but also ",(0,o.kt)("strong",{parentName:"p"},"relate to external systems"),", that is, ",(0,o.kt)("strong",{parentName:"p"},"the implementation of source and sink"),".")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Source: Pulsar ensures that writing messages to Pulsar topics respects to the processing guarantees. It is within Pulsar's control.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Sink: the processing guarantees rely on the sink implementation. If the sink implementation does not handle retries in an idempotent way, the sink does not respect to the processing guarantees."))),(0,o.kt)("h3",{id:"set"},"Set"),(0,o.kt)("p",null,"When creating a connector, you can set the processing guarantee with the following semantics:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"ATLEAST_ONCE")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"ATMOST_ONCE")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"EFFECTIVELY_ONCE"))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If ",(0,o.kt)("inlineCode",{parentName:"p"},"--processing-guarantees")," is not specified when creating a connector, the default semantic is ",(0,o.kt)("inlineCode",{parentName:"p"},"ATLEAST_ONCE"),".")),(0,o.kt)("p",null,"Here takes ",(0,o.kt)("strong",{parentName:"p"},"Admin CLI")," as an example. For more information about ",(0,o.kt)("strong",{parentName:"p"},"REST API")," or ",(0,o.kt)("strong",{parentName:"p"},"JAVA Admin API"),", see ",(0,o.kt)("a",{parentName:"p",href:"/zh-CN/docs/io-use#create"},"here"),"."),(0,o.kt)(s.Z,{defaultValue:"Source",values:[{label:"Source",value:"Source"},{label:"Sink",value:"Sink"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"Source",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar-admin sources create \\\n  --processing-guarantees ATMOST_ONCE \\\n  # Other source configs\n\n")),(0,o.kt)("p",null,"For more information about the options of ",(0,o.kt)("inlineCode",{parentName:"p"},"pulsar-admin sources create"),", see ",(0,o.kt)("a",{parentName:"p",href:"reference-connector-admin.md#create"},"here"),".")),(0,o.kt)(i.Z,{value:"Sink",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar-admin sinks create \\\n  --processing-guarantees EFFECTIVELY_ONCE \\\n  # Other sink configs\n\n")),(0,o.kt)("p",null,"For more information about the options of ",(0,o.kt)("inlineCode",{parentName:"p"},"pulsar-admin sinks create"),", see ",(0,o.kt)("a",{parentName:"p",href:"reference-connector-admin.md#create-1"},"here"),"."))),(0,o.kt)("h3",{id:"update"},"Update"),(0,o.kt)("p",null,"After creating a connector, you can update the processing guarantee with the following semantics:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"ATLEAST_ONCE"),(0,o.kt)("li",{parentName:"ul"},"ATMOST_ONCE"),(0,o.kt)("li",{parentName:"ul"},"EFFECTIVELY_ONCE\nHere takes ",(0,o.kt)("strong",{parentName:"li"},"Admin CLI")," as an example. For more information about ",(0,o.kt)("strong",{parentName:"li"},"REST API")," or ",(0,o.kt)("strong",{parentName:"li"},"JAVA Admin API"),", see ",(0,o.kt)("a",{parentName:"li",href:"/zh-CN/docs/io-use#create"},"here"),".")),(0,o.kt)(s.Z,{defaultValue:"Source",values:[{label:"Source",value:"Source"},{label:"Sink",value:"Sink"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"Source",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar-admin sources update \\\n  --processing-guarantees EFFECTIVELY_ONCE \\\n  # Other source configs\n\n")),(0,o.kt)("p",null,"For more information about the options of ",(0,o.kt)("inlineCode",{parentName:"p"},"pulsar-admin sources update"),", see ",(0,o.kt)("a",{parentName:"p",href:"reference-connector-admin.md#update"},"here"),".")),(0,o.kt)(i.Z,{value:"Sink",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar-admin sinks update \\\n  --processing-guarantees ATMOST_ONCE \\\n  # Other sink configs\n\n")),(0,o.kt)("p",null,"For more information about the options of ",(0,o.kt)("inlineCode",{parentName:"p"},"pulsar-admin sinks update"),", see ",(0,o.kt)("a",{parentName:"p",href:"reference-connector-admin.md#update-1"},"here"),"."))),(0,o.kt)("h2",{id:"work-with-connector"},"Work with connector"),(0,o.kt)("p",null,"You can manage Pulsar connectors (for example, create, update, start, stop, restart, reload, delete and perform other operations on connectors) via the ",(0,o.kt)("a",{parentName:"p",href:"reference-connector-admin"},"Connector Admin CLI")," with ",(0,o.kt)("a",{parentName:"p",href:"/zh-CN/docs/io-cli#sources"},"sources")," and ",(0,o.kt)("a",{parentName:"p",href:"/zh-CN/docs/io-cli#sinks"},"sinks")," subcommands."),(0,o.kt)("p",null,"Connectors (sources and sinks) and Functions are components of instances, and they all run on Functions workers. When managing a source, sink or function via ",(0,o.kt)("a",{parentName:"p",href:"/zh-CN/docs/reference-connector-admin"},"Connector Admin CLI")," or ",(0,o.kt)("a",{parentName:"p",href:"functions-cli"},"Functions Admin CLI"),", an instance is started on a worker. For more information, see ",(0,o.kt)("a",{parentName:"p",href:"/zh-CN/docs/functions-worker#run-functions-worker-separately"},"Functions worker"),"."))}f.isMDXComponent=!0},63131:function(e,t,n){t.Z=n.p+"assets/images/pulsar-io-8e834df5eaed9d5b0a7e0ffa162e850a.png"}}]);