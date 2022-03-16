"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[35239],{3905:function(e,a,t){t.d(a,{Zo:function(){return m},kt:function(){return d}});var n=t(67294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=n.createContext({}),p=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},m=function(e){var a=p(e.components);return n.createElement(s.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=p(t),d=l,k=c["".concat(s,".").concat(d)]||c[d]||u[d]||i;return t?n.createElement(k,r(r({ref:a},m),{},{components:t})):n.createElement(k,r({ref:a},m))}));function d(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var i=t.length,r=new Array(i);r[0]=c;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var p=2;p<i;p++)r[p]=t[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},58215:function(e,a,t){t.d(a,{Z:function(){return l}});var n=t(67294);function l(e){var a=e.children,t=e.hidden,l=e.className;return n.createElement("div",{role:"tabpanel",hidden:t,className:l},a)}},9877:function(e,a,t){t.d(a,{Z:function(){return m}});var n=t(87462),l=t(67294),i=t(72389),r=t(63725),o=t(86010),s="tabItem_LplD";function p(e){var a,t,i,p=e.lazy,m=e.block,u=e.defaultValue,c=e.values,d=e.groupId,k=e.className,g=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=c?c:g.map((function(e){var a=e.props;return{value:a.value,label:a.label,attributes:a.attributes}})),v=(0,r.lx)(h,(function(e,a){return e.value===a.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===u?u:null!=(a=null!=u?u:null==(t=g.find((function(e){return e.props.default})))?void 0:t.props.value)?a:null==(i=g[0])?void 0:i.props.value;if(null!==b&&!h.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var f=(0,r.UB)(),y=f.tabGroupChoices,N=f.setTabGroupChoices,T=(0,l.useState)(b),w=T[0],x=T[1],I=[],E=(0,r.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var C=y[d];null!=C&&C!==w&&h.some((function(e){return e.value===C}))&&x(C)}var P=function(e){var a=e.currentTarget,t=I.indexOf(a),n=h[t].value;n!==w&&(E(a),x(n),null!=d&&N(d,n))},S=function(e){var a,t=null;switch(e.key){case"ArrowRight":var n=I.indexOf(e.currentTarget)+1;t=I[n]||I[0];break;case"ArrowLeft":var l=I.indexOf(e.currentTarget)-1;t=I[l]||I[I.length-1]}null==(a=t)||a.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":m},k)},h.map((function(e){var a=e.value,t=e.label,i=e.attributes;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===a?0:-1,"aria-selected":w===a,key:a,ref:function(e){return I.push(e)},onKeyDown:S,onFocus:P,onClick:P},i,{className:(0,o.Z)("tabs__item",s,null==i?void 0:i.className,{"tabs__item--active":w===a})}),null!=t?t:a)}))),p?(0,l.cloneElement)(g.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},g.map((function(e,a){return(0,l.cloneElement)(e,{key:a,hidden:e.props.value!==w})}))))}function m(e){var a=(0,i.Z)();return l.createElement(p,(0,n.Z)({key:String(a)},e))}},72475:function(e,a,t){t.r(a),t.d(a,{assets:function(){return c},contentTitle:function(){return m},default:function(){return g},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return d}});var n=t(87462),l=t(63366),i=(t(67294),t(3905)),r=t(9877),o=t(58215),s=["components"],p={id:"cookbooks-retention-expiry",title:"Message retention and expiry",sidebar_label:"Message retention and expiry"},m=void 0,u={unversionedId:"cookbooks-retention-expiry",id:"cookbooks-retention-expiry",title:"Message retention and expiry",description:"Pulsar brokers are responsible for handling messages that pass through Pulsar, including persistent storage of messages. By default, for each topic, brokers only retain messages that are in at least one backlog. A backlog is the set of unacknowledged messages for a particular subscription. As a topic can have multiple subscriptions, a topic can have multiple backlogs.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/cookbooks-retention-expiry.md",sourceDirName:".",slug:"/cookbooks-retention-expiry",permalink:"/fr/docs/next/cookbooks-retention-expiry",editUrl:"https://github.com/apache/pulsar/edit/master/site2/website-next/docs/cookbooks-retention-expiry.md",tags:[],version:"current",frontMatter:{id:"cookbooks-retention-expiry",title:"Message retention and expiry",sidebar_label:"Message retention and expiry"},sidebar:"docsSidebar",previous:{title:"Non-persistent messaging",permalink:"/fr/docs/next/cookbooks-non-persistent"},next:{title:"Encryption",permalink:"/fr/docs/next/cookbooks-encryption"}},c={},d=[{value:"Retention policies",id:"retention-policies",level:2},{value:"Defaults",id:"defaults",level:3},{value:"Set retention policy",id:"set-retention-policy",level:3},{value:"Get retention policy",id:"get-retention-policy",level:3},{value:"Example",id:"example",level:5},{value:"Backlog quotas",id:"backlog-quotas",level:2},{value:"Set size/time thresholds and backlog retention policies",id:"set-sizetime-thresholds-and-backlog-retention-policies",level:3},{value:"Example",id:"example-1",level:5},{value:"Get backlog threshold and backlog retention policy",id:"get-backlog-threshold-and-backlog-retention-policy",level:3},{value:"Remove backlog quotas",id:"remove-backlog-quotas",level:3},{value:"Clear backlog",id:"clear-backlog",level:3},{value:"pulsar-admin",id:"pulsar-admin",level:4},{value:"Example",id:"example-2",level:5},{value:"Time to live (TTL)",id:"time-to-live-ttl",level:2},{value:"Set the TTL for a namespace",id:"set-the-ttl-for-a-namespace",level:3},{value:"Example",id:"example-3",level:5},{value:"Get the TTL configuration for a namespace",id:"get-the-ttl-configuration-for-a-namespace",level:3},{value:"Example",id:"example-4",level:5},{value:"Remove the TTL configuration for a namespace",id:"remove-the-ttl-configuration-for-a-namespace",level:3},{value:"Example",id:"example-5",level:5},{value:"Delete messages from namespaces",id:"delete-messages-from-namespaces",level:2}],k={toc:d};function g(e){var a=e.components,t=(0,l.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},k,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Pulsar brokers are responsible for handling messages that pass through Pulsar, including ",(0,i.kt)("a",{parentName:"p",href:"/fr/docs/next/concepts-architecture-overview#persistent-storage"},"persistent storage")," of messages. By default, for each topic, brokers only retain messages that are in at least one backlog. A backlog is the set of unacknowledged messages for a particular subscription. As a topic can have multiple subscriptions, a topic can have multiple backlogs."),(0,i.kt)("p",null,"As a consequence, no messages are retained (by default) on a topic that has not had any subscriptions created for it."),(0,i.kt)("p",null,"(Note that messages that are no longer being stored are not necessarily immediately deleted, and may in fact still be accessible until the next ledger rollover. Because clients cannot predict when rollovers may happen, it is not wise to rely on a rollover not happening at an inconvenient point in time.)"),(0,i.kt)("p",null,"In Pulsar, you can modify this behavior, with namespace granularity, in two ways:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You can persistently store messages that are not within a backlog (because they've been acknowledged by on every existing subscription, or because there are no subscriptions) by setting ",(0,i.kt)("a",{parentName:"li",href:"#retention-policies"},"retention policies"),"."),(0,i.kt)("li",{parentName:"ul"},"Messages that are not acknowledged within a specified timeframe can be automatically acknowledged, by specifying the ",(0,i.kt)("a",{parentName:"li",href:"#time-to-live-ttl"},"time to live")," (TTL).")),(0,i.kt)("p",null,"Pulsar's ",(0,i.kt)("a",{parentName:"p",href:"admin-api-overview"},"admin interface")," enables you to manage both retention policies and TTL with namespace granularity (and thus within a specific tenant and either on a specific cluster or in the ",(0,i.kt)("a",{parentName:"p",href:"/fr/docs/next/concepts-architecture-overview#global-cluster"},(0,i.kt)("inlineCode",{parentName:"a"},"global"))," cluster)."),(0,i.kt)("blockquote",null,(0,i.kt)("h4",{parentName:"blockquote",id:"retention-and-ttl-solve-two-different-problems"},"Retention and TTL solve two different problems"),(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},"Message retention: Keep the data for at least X hours (even if acknowledged)"),(0,i.kt)("li",{parentName:"ul"},"Time-to-live: Discard data after some time (by automatically acknowledging)")),(0,i.kt)("p",{parentName:"blockquote"},"Most applications will want to use at most one of these.")),(0,i.kt)("h2",{id:"retention-policies"},"Retention policies"),(0,i.kt)("p",null,"By default, when a Pulsar message arrives at a broker, the message is stored until it has been acknowledged on all subscriptions, at which point it is marked for deletion. You can override this behavior and retain messages that have already been acknowledged on all subscriptions by setting a ",(0,i.kt)("em",{parentName:"p"},"retention policy")," for all topics in a given namespace. Retention is based on both a ",(0,i.kt)("em",{parentName:"p"},"size limit")," and a ",(0,i.kt)("em",{parentName:"p"},"time limit"),"."),(0,i.kt)("p",null,"Retention policies are useful when you use the Reader interface. The Reader interface does not use acknowledgements, and messages do not exist within backlogs. It is required to configure retention for Reader-only use cases."),(0,i.kt)("p",null,"When you set a retention policy on topics in a namespace, you must set ",(0,i.kt)("strong",{parentName:"p"},"both")," a ",(0,i.kt)("em",{parentName:"p"},"size limit")," (via ",(0,i.kt)("inlineCode",{parentName:"p"},"defaultRetentionSizeInMB"),") and a ",(0,i.kt)("em",{parentName:"p"},"time limit")," (via ",(0,i.kt)("inlineCode",{parentName:"p"},"defaultRetentionTimeInMinutes"),") . You can refer to the following table to set retention policies in ",(0,i.kt)("inlineCode",{parentName:"p"},"pulsar-admin")," and Java."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Time limit"),(0,i.kt)("th",{parentName:"tr",align:null},"Size limit"),(0,i.kt)("th",{parentName:"tr",align:null},"Message retention"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"-1"),(0,i.kt)("td",{parentName:"tr",align:null},"-1"),(0,i.kt)("td",{parentName:"tr",align:null},"Infinite retention")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"-1"),(0,i.kt)("td",{parentName:"tr",align:null},">0"),(0,i.kt)("td",{parentName:"tr",align:null},"Based on the size limit")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},">0"),(0,i.kt)("td",{parentName:"tr",align:null},"-1"),(0,i.kt)("td",{parentName:"tr",align:null},"Based on the time limit")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0"),(0,i.kt)("td",{parentName:"tr",align:null},"0"),(0,i.kt)("td",{parentName:"tr",align:null},"Disable message retention (by default)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0"),(0,i.kt)("td",{parentName:"tr",align:null},">0"),(0,i.kt)("td",{parentName:"tr",align:null},"Invalid")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},">0"),(0,i.kt)("td",{parentName:"tr",align:null},"0"),(0,i.kt)("td",{parentName:"tr",align:null},"Invalid")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},">0"),(0,i.kt)("td",{parentName:"tr",align:null},">0"),(0,i.kt)("td",{parentName:"tr",align:null},"Acknowledged messages or messages with no active subscription will not be retained when either time or size reaches the limit.")))),(0,i.kt)("p",null,"The retention settings apply to all messages on topics that do not have any subscriptions, or to messages that have been acknowledged by all subscriptions. The retention policy settings do not affect unacknowledged messages on topics with subscriptions. The unacknowledged messages are controlled by the backlog quota."),(0,i.kt)("p",null,"When a retention limit on a topic is exceeded, the oldest message is marked for deletion until the set of retained messages falls within the specified limits again."),(0,i.kt)("h3",{id:"defaults"},"Defaults"),(0,i.kt)("p",null,"You can set message retention at instance level with the following two parameters: ",(0,i.kt)("inlineCode",{parentName:"p"},"defaultRetentionTimeInMinutes")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"defaultRetentionSizeInMB"),". Both parameters are set to ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," by default."),(0,i.kt)("p",null,"For more information of the two parameters, refer to the ",(0,i.kt)("a",{parentName:"p",href:"/fr/docs/next/reference-configuration#broker"},(0,i.kt)("inlineCode",{parentName:"a"},"broker.conf"))," configuration file."),(0,i.kt)("h3",{id:"set-retention-policy"},"Set retention policy"),(0,i.kt)("p",null,"You can set a retention policy for a namespace by specifying the namespace, a size limit and a time limit in ",(0,i.kt)("inlineCode",{parentName:"p"},"pulsar-admin"),", REST API and Java."),(0,i.kt)(r.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,i.kt)("p",null,"You can use the ",(0,i.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md#namespaces-set-retention"},(0,i.kt)("inlineCode",{parentName:"a"},"set-retention"))," subcommand and specify a namespace, a size limit using the ",(0,i.kt)("inlineCode",{parentName:"p"},"-s"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"--size")," flag, and a time limit using the ",(0,i.kt)("inlineCode",{parentName:"p"},"-t"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"--time")," flag. "),(0,i.kt)("p",null,"In the following example, the size limit is set to 10 GB and the time limit is set to 3 hours for each topic within the ",(0,i.kt)("inlineCode",{parentName:"p"},"my-tenant/my-ns")," namespace. "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"When the size of messages reaches 10 GB on a topic within 3 hours, the acknowledged messages will not be retained. "),(0,i.kt)("li",{parentName:"ul"},"After 3 hours, even if the message size is less than 10 GB, the acknowledged messages will not be retained. ")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin namespaces set-retention my-tenant/my-ns \\\n  --size 10G \\\n  --time 3h\n\n")),(0,i.kt)("p",null,"In the following example, the time is not limited and the size limit is set to 1 TB. The size limit determines the retention."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin namespaces set-retention my-tenant/my-ns \\\n  --size 1T \\\n  --time -1\n\n")),(0,i.kt)("p",null,"In the following example, the size is not limited and the time limit is set to 3 hours. The time limit determines the retention."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin namespaces set-retention my-tenant/my-ns \\\n  --size -1 \\\n  --time 3h\n\n")),(0,i.kt)("p",null,"To achieve infinite retention, set both values to ",(0,i.kt)("inlineCode",{parentName:"p"},"-1"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin namespaces set-retention my-tenant/my-ns \\\n  --size -1 \\\n  --time -1\n\n")),(0,i.kt)("p",null,"To disable the retention policy, set both values to ",(0,i.kt)("inlineCode",{parentName:"p"},"0"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin namespaces set-retention my-tenant/my-ns \\\n  --size 0 \\\n  --time 0\n\n"))),(0,i.kt)(o.Z,{value:"REST API",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#operation/setRetention?version=@pulsar:version_number@&apiVersion=v2"},"POST /admin/v2/namespaces/:tenant/:namespace/retention")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"To disable the retention policy, you need to set both the size and time limit to ",(0,i.kt)("inlineCode",{parentName:"p"},"0"),". Set either size or time limit to ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," is invalid.")))),(0,i.kt)(o.Z,{value:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"\nint retentionTime = 10; // 10 minutes\nint retentionSize = 500; // 500 megabytes\nRetentionPolicies policies = new RetentionPolicies(retentionTime, retentionSize);\nadmin.namespaces().setRetention(namespace, policies);\n\n")))),(0,i.kt)("h3",{id:"get-retention-policy"},"Get retention policy"),(0,i.kt)("p",null,"You can fetch the retention policy for a namespace by specifying the namespace. The output will be a JSON object with two keys: ",(0,i.kt)("inlineCode",{parentName:"p"},"retentionTimeInMinutes")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"retentionSizeInMB"),"."),(0,i.kt)(r.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md#namespaces"},(0,i.kt)("inlineCode",{parentName:"a"},"get-retention"))," subcommand and specify the namespace."),(0,i.kt)("h5",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'\n$ pulsar-admin namespaces get-retention my-tenant/my-ns\n{\n  "retentionTimeInMinutes": 10,\n  "retentionSizeInMB": 500\n}\n\n'))),(0,i.kt)(o.Z,{value:"REST API",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#operation/getRetention?version=@pulsar:version_number@&apiVersion=v2"},"GET /admin/v2/namespaces/:tenant/:namespace/retention"))),(0,i.kt)(o.Z,{value:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.namespaces().getRetention(namespace);\n\n")))),(0,i.kt)("h2",{id:"backlog-quotas"},"Backlog quotas"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Backlogs")," are sets of unacknowledged messages for a topic that have been stored by bookies. Pulsar stores all unacknowledged messages in backlogs until they are processed and acknowledged.\nYou can control the allowable size and/or time of backlogs, at the namespace level, using ",(0,i.kt)("em",{parentName:"p"},"backlog quotas"),". Setting a backlog quota involves setting:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"an allowable ",(0,i.kt)("em",{parentName:"li"},"size and/or time threshold")," for each topic in the namespace"),(0,i.kt)("li",{parentName:"ul"},"a ",(0,i.kt)("em",{parentName:"li"},"retention policy")," that determines which action the ",(0,i.kt)("a",{parentName:"li",href:"/fr/docs/next/reference-terminology#broker"},"broker")," takes if the threshold is exceeded.\nThe following retention policies are available:\n| Policy                      | Action                                                              |\n|:--------------------------- |:------------------------------------------------------------------- |\n| ",(0,i.kt)("inlineCode",{parentName:"li"},"producer_request_hold"),"     | The broker will hold and not persist produce request payload        |\n| ",(0,i.kt)("inlineCode",{parentName:"li"},"producer_exception"),"        | The broker will disconnect from the client by throwing an exception |\n| ",(0,i.kt)("inlineCode",{parentName:"li"},"consumer_backlog_eviction")," | The broker will begin discarding backlog messages                   |",(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("h4",{parentName:"blockquote",id:"beware-the-distinction-between-retention-policy-types"},"Beware the distinction between retention policy types"),(0,i.kt)("p",{parentName:"blockquote"},'As you may have noticed, there are two definitions of the term "retention policy" in Pulsar, one that applies to persistent storage of messages not in backlogs, and one that applies to messages within backlogs.\nBacklog quotas are handled at the namespace level. They can be managed via:')))),(0,i.kt)("h3",{id:"set-sizetime-thresholds-and-backlog-retention-policies"},"Set size/time thresholds and backlog retention policies"),(0,i.kt)("p",null,"You can set a size and/or time threshold and backlog retention policy for all of the topics in a ",(0,i.kt)("a",{parentName:"p",href:"/fr/docs/next/reference-terminology#namespace"},"namespace")," by specifying the namespace, a size limit and/or a time limit in second, and a policy by name."),(0,i.kt)(r.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md#namespaces"},(0,i.kt)("inlineCode",{parentName:"a"},"set-backlog-quota"))," subcommand and specify a namespace, a size limit using the ",(0,i.kt)("inlineCode",{parentName:"p"},"-l"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"--limit")," , ",(0,i.kt)("inlineCode",{parentName:"p"},"-lt"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"--limitTime")," flag to limit backlog, a retention policy using the ",(0,i.kt)("inlineCode",{parentName:"p"},"-p"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"--policy")," flag and a policy type using ",(0,i.kt)("inlineCode",{parentName:"p"},"-t"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"--type")," (default is destination_storage)."),(0,i.kt)("h5",{id:"example-1"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin namespaces set-backlog-quota my-tenant/my-ns \\\n  --limit 2G \\\n  --policy producer_request_hold\n\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin namespaces set-backlog-quota my-tenant/my-ns/my-topic \\\n--limitTime 3600 \\\n--policy producer_request_hold \\\n--type message_age\n\n"))),(0,i.kt)(o.Z,{value:"REST API",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#operation/getBacklogQuotaMap?version=@pulsar:version_number@&apiVersion=v2"},"POST /admin/v2/namespaces/:tenant/:namespace/backlogQuota"))),(0,i.kt)(o.Z,{value:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"\nlong sizeLimit = 2147483648L;\nBacklogQuota.RetentionPolicy policy = BacklogQuota.RetentionPolicy.producer_request_hold;\nBacklogQuota quota = new BacklogQuota(sizeLimit, policy);\nadmin.namespaces().setBacklogQuota(namespace, quota);\n\n")))),(0,i.kt)("h3",{id:"get-backlog-threshold-and-backlog-retention-policy"},"Get backlog threshold and backlog retention policy"),(0,i.kt)("p",null,"You can see which size threshold and backlog retention policy has been applied to a namespace."),(0,i.kt)(r.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md#pulsar-admin-namespaces-get-backlog-quotas"},(0,i.kt)("inlineCode",{parentName:"a"},"get-backlog-quotas"))," subcommand and specify a namespace. Here's an example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'\n$ pulsar-admin namespaces get-backlog-quotas my-tenant/my-ns\n{\n  "destination_storage": {\n    "limit" : 2147483648,\n    "policy" : "producer_request_hold"\n  }\n}\n\n'))),(0,i.kt)(o.Z,{value:"REST API",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#operation/getBacklogQuotaMap?version=@pulsar:version_number@&apiVersion=v2"},"GET /admin/v2/namespaces/:tenant/:namespace/backlogQuotaMap"))),(0,i.kt)(o.Z,{value:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"\nMap<BacklogQuota.BacklogQuotaType,BacklogQuota> quotas =\n  admin.namespaces().getBacklogQuotas(namespace);\n\n")))),(0,i.kt)("h3",{id:"remove-backlog-quotas"},"Remove backlog quotas"),(0,i.kt)(r.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md#pulsar-admin-namespaces-remove-backlog-quota"},(0,i.kt)("inlineCode",{parentName:"a"},"remove-backlog-quota"))," subcommand and specify a namespace, use ",(0,i.kt)("inlineCode",{parentName:"p"},"t"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"--type")," to specify backlog type to remove(default is destination_storage). Here's an example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin namespaces remove-backlog-quota my-tenant/my-ns\n\n"))),(0,i.kt)(o.Z,{value:"REST API",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#operation/removeBacklogQuota?version=@pulsar:version_number@&apiVersion=v2"},"DELETE /admin/v2/namespaces/:tenant/:namespace/backlogQuota"))),(0,i.kt)(o.Z,{value:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.namespaces().removeBacklogQuota(namespace);\n\n")))),(0,i.kt)("h3",{id:"clear-backlog"},"Clear backlog"),(0,i.kt)("h4",{id:"pulsar-admin"},"pulsar-admin"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"/fr/docs/next/pulsar-admin#pulsar-admin-namespaces-clear-backlog"},(0,i.kt)("inlineCode",{parentName:"a"},"clear-backlog"))," subcommand."),(0,i.kt)("h5",{id:"example-2"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin namespaces clear-backlog my-tenant/my-ns\n\n")),(0,i.kt)("p",null,"By default, you will be prompted to ensure that you really want to clear the backlog for the namespace. You can override the prompt using the ",(0,i.kt)("inlineCode",{parentName:"p"},"-f"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"--force")," flag."),(0,i.kt)("h2",{id:"time-to-live-ttl"},"Time to live (TTL)"),(0,i.kt)("p",null,"By default, Pulsar stores all unacknowledged messages forever. This can lead to heavy disk space usage in cases where a lot of messages are going unacknowledged. If disk space is a concern, you can set a time to live (TTL) that determines how long unacknowledged messages will be retained."),(0,i.kt)("h3",{id:"set-the-ttl-for-a-namespace"},"Set the TTL for a namespace"),(0,i.kt)(r.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md#pulsar-admin-namespaces-set-message-ttl"},(0,i.kt)("inlineCode",{parentName:"a"},"set-message-ttl"))," subcommand and specify a namespace and a TTL (in seconds) using the ",(0,i.kt)("inlineCode",{parentName:"p"},"-ttl"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"--messageTTL")," flag."),(0,i.kt)("h5",{id:"example-3"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin namespaces set-message-ttl my-tenant/my-ns \\\n  --messageTTL 120 # TTL of 2 minutes\n\n"))),(0,i.kt)(o.Z,{value:"REST API",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#operation/setNamespaceMessageTTL?version=@pulsar:version_number@&apiVersion=v2"},"POST /admin/v2/namespaces/:tenant/:namespace/messageTTL"))),(0,i.kt)(o.Z,{value:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.namespaces().setNamespaceMessageTTL(namespace, ttlInSeconds);\n\n")))),(0,i.kt)("h3",{id:"get-the-ttl-configuration-for-a-namespace"},"Get the TTL configuration for a namespace"),(0,i.kt)(r.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md#pulsar-admin-namespaces-get-message-ttl"},(0,i.kt)("inlineCode",{parentName:"a"},"get-message-ttl"))," subcommand and specify a namespace."),(0,i.kt)("h5",{id:"example-4"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin namespaces get-message-ttl my-tenant/my-ns\n60\n\n"))),(0,i.kt)(o.Z,{value:"REST API",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#operation/getNamespaceMessageTTL?version=@pulsar:version_number@&apiVersion=v2"},"GET /admin/v2/namespaces/:tenant/:namespace/messageTTL"))),(0,i.kt)(o.Z,{value:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.namespaces().getNamespaceMessageTTL(namespace)\n\n")))),(0,i.kt)("h3",{id:"remove-the-ttl-configuration-for-a-namespace"},"Remove the TTL configuration for a namespace"),(0,i.kt)(r.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"reference-pulsar-admin.md#pulsar-admin-namespaces-remove-message-ttl"},(0,i.kt)("inlineCode",{parentName:"a"},"remove-message-ttl"))," subcommand and specify a namespace."),(0,i.kt)("h5",{id:"example-5"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin namespaces remove-message-ttl my-tenant/my-ns\n\n"))),(0,i.kt)(o.Z,{value:"REST API",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#operation/removeNamespaceMessageTTL?version=@pulsar:version_number@&apiVersion=v2"},"DELETE /admin/v2/namespaces/:tenant/:namespace/messageTTL"))),(0,i.kt)(o.Z,{value:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.namespaces().removeNamespaceMessageTTL(namespace)\n\n")))),(0,i.kt)("h2",{id:"delete-messages-from-namespaces"},"Delete messages from namespaces"),(0,i.kt)("p",null,"If you do not have any retention period and that you never have much of a backlog, the upper limit for retaining messages, which are acknowledged, equals to the Pulsar segment rollover period + entry log rollover period + (garbage collection interval * garbage collection ratios)."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Segment rollover period"),": basically, the segment rollover period is how often a new segment is created. Once a new segment is created, the old segment will be deleted. By default, this happens either when you have written 50,000 entries (messages) or have waited 240 minutes. You can tune this in your broker.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Entry log rollover period"),": multiple ledgers in BookKeeper are interleaved into an ",(0,i.kt)("a",{parentName:"p",href:"https://bookkeeper.apache.org/docs/4.11.1/getting-started/concepts/#entry-logs"},"entry log"),". In order for a ledger that has been deleted, the entry log must all be rolled over. The entry log rollover period is configurable, but is purely based on the entry log size. For details, see ",(0,i.kt)("a",{parentName:"p",href:"https://bookkeeper.apache.org/docs/4.11.1/reference/config/#entry-log-settings"},"here"),". Once the entry log is rolled over, the entry log can be garbage collected.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Garbage collection interval"),": because entry logs have interleaved ledgers, to free up space, the entry logs need to be rewritten. The garbage collection interval is how often BookKeeper performs garbage collection. which is related to minor compaction and major compaction of entry logs. For details, see ",(0,i.kt)("a",{parentName:"p",href:"https://bookkeeper.apache.org/docs/4.11.1/reference/config/#entry-log-compaction-settings"},"here"),"."))))}g.isMDXComponent=!0}}]);