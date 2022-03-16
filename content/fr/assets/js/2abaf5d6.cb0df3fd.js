"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[33759],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return f}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),u=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=u(e.components);return n.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(t),f=a,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||o;return t?n.createElement(m,i(i({ref:r},c),{},{components:t})):n.createElement(m,i({ref:r},c))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},57645:function(e,r,t){t.r(r),t.d(r,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var n=t(87462),a=t(63366),o=(t(67294),t(3905)),i=["components"],l={id:"pulsar-2.7.2",title:"Apache Pulsar 2.7.2",sidebar_label:"Apache Pulsar 2.7.2"},s=void 0,u={unversionedId:"docs/pulsar-2.7.2",id:"docs/pulsar-2.7.2",title:"Apache Pulsar 2.7.2",description:"schemaregistry",source:"@site/release-notes/docs/pulsar-2.7.2.md",sourceDirName:"docs",slug:"/docs/pulsar-2.7.2",permalink:"/fr/release-notes/docs/pulsar-2.7.2",tags:[],version:"current",frontMatter:{id:"pulsar-2.7.2",title:"Apache Pulsar 2.7.2",sidebar_label:"Apache Pulsar 2.7.2"}},c={},p=[{value:"schemaregistry",id:"schemaregistry",level:2},{value:"build",id:"build",level:2},{value:"security",id:"security",level:2},{value:"broker",id:"broker",level:2},{value:"storage",id:"storage",level:2},{value:"deploy",id:"deploy",level:2},{value:"admin",id:"admin",level:2},{value:"connector",id:"connector",level:2},{value:"sql",id:"sql",level:2},{value:"tieredstorage",id:"tieredstorage",level:2}],d={toc:p};function f(e){var r=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"schemaregistry"},"schemaregistry"),(0,o.kt)("p",null,"Fix primitive schema upload for ALWAYS_COMPATIBLE strategy. #10386",(0,o.kt)("br",{parentName:"p"}),"\n","Fix schema ledger deletion when deleting topic with delete schema. #10383",(0,o.kt)("br",{parentName:"p"}),"\n","Fix error OutOfMemoryError while using KeyValue<GenericRecord, GenericRecord> #9981",(0,o.kt)("br",{parentName:"p"}),"\n","Fix schema not added when subscribe an empty topic without schema #9853",(0,o.kt)("br",{parentName:"p"}),"\n","[Issue 9602]"," Add schema type validation #9797  "),(0,o.kt)("h2",{id:"build"},"build"),(0,o.kt)("p",null,"fix docker standalone image error #10359",(0,o.kt)("br",{parentName:"p"}),"\n","Fix possible name mismatch bugs when build wheel files within docker #10051",(0,o.kt)("br",{parentName:"p"}),"\n","Pass envirnoment variables to the docker container when building whee\u2026 #10043",(0,o.kt)("br",{parentName:"p"}),"\n","[Build]"," Python-client build script use wrong path for root dir #9961",(0,o.kt)("br",{parentName:"p"}),"\n","[Build]"," RPM build script use wrong path for root dir #9890",(0,o.kt)("br",{parentName:"p"}),"\n","Allow DockerImage to be built from source tarball #9846  "),(0,o.kt)("h2",{id:"security"},"security"),(0,o.kt)("p",null,"[Security]"," Upgrade commons-io to address CVE-2021-29425 #10287",(0,o.kt)("br",{parentName:"p"}),"\n","Upgrade Jetty libraries to 9.4.39.v20210325 #10177",(0,o.kt)("br",{parentName:"p"}),"\n","Upgrade Netty version to 4.1.60.final #10073",(0,o.kt)("br",{parentName:"p"}),"\n","Upgrade Bouncy Castle to 1.68 #9199  "),(0,o.kt)("h2",{id:"broker"},"broker"),(0,o.kt)("p",null,"[Broker]",' Suppress printing of "skip Processing" lines in startup scripts #10275',(0,o.kt)("br",{parentName:"p"}),"\n","[broker]"," Continue graceful shutdown even if web service closing fails #9835",(0,o.kt)("br",{parentName:"p"}),"\n","Add NPE check for PulsarService#getAdminClient #9782  "),(0,o.kt)("h2",{id:"storage"},"storage"),(0,o.kt)("p",null,"[Cursor]"," add return statement to exit asyncMarkDelete early on failure #10272",(0,o.kt)("br",{parentName:"p"}),"\n","[BUG]","fix zkBookieRackAffinityMapping bug to support for bookkeeper dnsResolver  #9894  "),(0,o.kt)("h2",{id:"deploy"},"deploy"),(0,o.kt)("p",null,"[Issue 10058]",":apply-config-from-env.py to commented default values #10060",(0,o.kt)("br",{parentName:"p"}),"\n","[Bookie]"," Fallback to PULSAR_GC if BOOKIE_GC is not defined #9621  "),(0,o.kt)("h2",{id:"admin"},"admin"),(0,o.kt)("p",null,"Add underReplicate state in the topic internal stats #10013  "),(0,o.kt)("h2",{id:"connector"},"connector"),(0,o.kt)("p",null,"[Issue-9926][Pulsar Functions]"," Pass through record properties from Pulsar Sources #9943  "),(0,o.kt)("h2",{id:"sql"},"sql"),(0,o.kt)("p",null,"[Pulsar-sql]","Using pulsar SQL query messages will appear `NoSuchLedger\u2026 #9910  "),(0,o.kt)("h2",{id:"tieredstorage"},"tieredstorage"),(0,o.kt)("p",null,"[Tiered Storage]"," Prevent Class Loader Leak; Restore Offloader Directory Override #9878",(0,o.kt)("br",{parentName:"p"}),"\n","[Tiered Storage]"," Add logs for cleanup offloaded data operation #9852"))}f.isMDXComponent=!0}}]);