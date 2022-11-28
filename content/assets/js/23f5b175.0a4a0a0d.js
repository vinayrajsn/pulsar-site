"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[78399],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=p(a),u=r,h=d["".concat(s,".").concat(u)]||d[u]||c[u]||l;return a?n.createElement(h,i(i({ref:t},m),{},{components:a})):n.createElement(h,i({ref:t},m))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(86010);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>u});var n=a(87462),r=a(67294),l=a(86010),i=a(72389),o=a(67392),s=a(7094),p=a(12466);const m="tabList__CuJ",c="tabItem_LNqP";function d(e){const{lazy:t,block:a,defaultValue:i,values:d,groupId:u,className:h}=e,k=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),N=d??k.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),g=(0,o.l)(N,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===i?i:i??k.find((e=>e.props.default))?.props.value??k[0].props.value;if(null!==b&&!N.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${N.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:f,setTabGroupChoices:v}=(0,s.U)(),[y,C]=(0,r.useState)(b),w=[],{blockElementScrollPositionUntilNextRender:S}=(0,p.o5)();if(null!=u){const e=f[u];null!=e&&e!==y&&N.some((t=>t.value===e))&&C(e)}const A=e=>{const t=e.currentTarget,a=w.indexOf(t),n=N[a].value;n!==y&&(S(t),C(n),null!=u&&v(u,String(n)))},T=e=>{let t=null;switch(e.key){case"Enter":A(e);break;case"ArrowRight":{const a=w.indexOf(e.currentTarget)+1;t=w[a]??w[0];break}case"ArrowLeft":{const a=w.indexOf(e.currentTarget)-1;t=w[a]??w[w.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",m)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},h)},N.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,key:t,ref:e=>w.push(e),onKeyDown:T,onClick:A},i,{className:(0,l.Z)("tabs__item",c,i?.className,{"tabs__item--active":y===t})}),a??t)}))),t?(0,r.cloneElement)(k.filter((e=>e.props.value===y))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}function u(e){const t=(0,i.Z)();return r.createElement(d,(0,n.Z)({key:String(t)},e))}},25354:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));a(65488),a(85162);const l={id:"schema-understand",title:"Understand schema",sidebar_label:"Understand schema"},i=void 0,o={unversionedId:"schema-understand",id:"schema-understand",title:"Understand schema",description:"This section explains the basic concepts of Pulsar schema and provides additional reference.",source:"@site/docs/schema-understand.md",sourceDirName:".",slug:"/schema-understand",permalink:"/docs/next/schema-understand",draft:!1,editUrl:"https://github.com/apache/pulsar/edit/master/site2/docs/schema-understand.md",tags:[],version:"current",frontMatter:{id:"schema-understand",title:"Understand schema",sidebar_label:"Understand schema"},sidebar:"docsSidebar",previous:{title:"Overview",permalink:"/docs/next/schema-overview"},next:{title:"Get started",permalink:"/docs/next/schema-get-started"}},s={},p=[{value:"Schema definition",id:"schema-definition",level:2},{value:"Schema type",id:"schema-type",level:2},{value:"Primitive type",id:"primitive-type",level:3},{value:"Complex type",id:"complex-type",level:3},{value:"<code>KeyValue</code> schema",id:"keyvalue-schema",level:4},{value:"<code>Struct</code> schema",id:"struct-schema",level:4},{value:"Auto Schema",id:"auto-schema",level:3},{value:"Native Avro Schema",id:"native-avro-schema",level:3},{value:"Schema versioning",id:"schema-versioning",level:2},{value:"Schema AutoUpdate",id:"schema-autoupdate",level:2},{value:"AutoUpdate for producer",id:"autoupdate-for-producer",level:3},{value:"AutoUpdate for consumer",id:"autoupdate-for-consumer",level:3}],m={toc:p};function c(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This section explains the basic concepts of Pulsar schema and provides additional reference."),(0,r.kt)("h2",{id:"schema-definition"},"Schema definition"),(0,r.kt)("p",null,"Pulsar schema is defined in a data structure called ",(0,r.kt)("inlineCode",{parentName:"p"},"SchemaInfo"),". It is stored and enforced on a per-topic basis and cannot be stored at the namespace or tenant level."),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"SchemaInfo")," consists of the following fields:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"name")),(0,r.kt)("td",{parentName:"tr",align:null},"Schema name (a string).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"type")),(0,r.kt)("td",{parentName:"tr",align:null},"Schema type, which determines how to interpret the schema data. ",(0,r.kt)("li",null,"Predefined schema: see ",(0,r.kt)("a",{parentName:"td",href:"#schema-type"},"here"),". "),(0,r.kt)("li",null,"Customized schema: it is left as an empty string. "))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"schema"),"\uff08",(0,r.kt)("inlineCode",{parentName:"td"},"payload"),")"),(0,r.kt)("td",{parentName:"tr",align:null},"Schema data, which is a sequence of 8-bit unsigned bytes and schema-type specific.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"properties")),(0,r.kt)("td",{parentName:"tr",align:null},"It is a user-defined property as a string/string map. Applications can use this bag for carrying any application-specific logics. Possible properties might be the Git hash associated with the schema, and an environment string like ",(0,r.kt)("inlineCode",{parentName:"td"},"dev")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"prod"),".")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("p",null,"This is the ",(0,r.kt)("inlineCode",{parentName:"p"},"SchemaInfo")," of a string."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "test-string-schema",\n    "type": "STRING",\n    "schema": "",\n    "properties": {}\n}\n')),(0,r.kt)("h2",{id:"schema-type"},"Schema type"),(0,r.kt)("p",null,"Pulsar supports various schema types, which are mainly divided into two categories: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#primitive-type"},"Primitive type")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#complex-type"},"Complex type"))),(0,r.kt)("h3",{id:"primitive-type"},"Primitive type"),(0,r.kt)("p",null,"The following table outlines the primitive types that Pulsar schema supports, and the conversions between ",(0,r.kt)("strong",{parentName:"p"},"schema types")," and ",(0,r.kt)("strong",{parentName:"p"},"language-specific primitive types"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Primitive Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Java Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Python Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Go Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"BOOLEAN")),(0,r.kt)("td",{parentName:"tr",align:null},"A binary value"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"bool")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"INT8")),(0,r.kt)("td",{parentName:"tr",align:null},"A 8-bit signed integer"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"int8")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"INT16")),(0,r.kt)("td",{parentName:"tr",align:null},"A 16-bit signed integer"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"int16")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"INT32")),(0,r.kt)("td",{parentName:"tr",align:null},"A 32-bit signed integer"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"int32")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"INT64")),(0,r.kt)("td",{parentName:"tr",align:null},"A 64-bit signed integer"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"int64")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"FLOAT")),(0,r.kt)("td",{parentName:"tr",align:null},"A single precision (32-bit) IEEE 754 floating-point number"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"float32")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DOUBLE")),(0,r.kt)("td",{parentName:"tr",align:null},"A double-precision (64-bit) IEEE 754 floating-point number"),(0,r.kt)("td",{parentName:"tr",align:null},"double"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"float64")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"BYTES")),(0,r.kt)("td",{parentName:"tr",align:null},"A sequence of 8-bit unsigned bytes"),(0,r.kt)("td",{parentName:"tr",align:null},"byte[], ByteBuffer, ByteBuf"),(0,r.kt)("td",{parentName:"tr",align:null},"bytes"),(0,r.kt)("td",{parentName:"tr",align:null},"[]byte")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"STRING")),(0,r.kt)("td",{parentName:"tr",align:null},"A Unicode character sequence"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TIMESTAMP")," (",(0,r.kt)("inlineCode",{parentName:"td"},"DATE"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"TIME"),")"),(0,r.kt)("td",{parentName:"tr",align:null},"A logic type represents a specific instant in time with millisecond precision. ",(0,r.kt)("br",null),"It stores the number of milliseconds since ",(0,r.kt)("inlineCode",{parentName:"td"},"January 1, 1970, 00:00:00 GMT")," as an ",(0,r.kt)("inlineCode",{parentName:"td"},"INT64")," value"),(0,r.kt)("td",{parentName:"tr",align:null},"java.sql.Timestamp (java.sql.Time, java.util.Date)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"INSTANT"),(0,r.kt)("td",{parentName:"tr",align:null},"A single instantaneous point on the time-line with nanoseconds precision"),(0,r.kt)("td",{parentName:"tr",align:null},"java.time.Instant"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LOCAL_DATE"),(0,r.kt)("td",{parentName:"tr",align:null},"An immutable date-time object that represents a date, often viewed as year-month-day"),(0,r.kt)("td",{parentName:"tr",align:null},"java.time.LocalDate"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LOCAL_TIME"),(0,r.kt)("td",{parentName:"tr",align:null},"An immutable date-time object that represents a time, often viewed as hour-minute-second. Time is represented to nanosecond precision."),(0,r.kt)("td",{parentName:"tr",align:null},"java.time.LocalDateTime"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LOCAL_DATE_TIME"),(0,r.kt)("td",{parentName:"tr",align:null},"An immutable date-time object that represents a date-time, often viewed as year-month-day-hour-minute-second"),(0,r.kt)("td",{parentName:"tr",align:null},"java.time.LocalTime"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,"For primitive types, Pulsar does not store any schema data in ",(0,r.kt)("inlineCode",{parentName:"p"},"SchemaInfo"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"SchemaInfo")," determines how to serialize and deserialize the data. "),(0,r.kt)("p",null,"Some of the primitive schema implementations can use ",(0,r.kt)("inlineCode",{parentName:"p"},"properties")," to store implementation-specific tunable settings. For example, a ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," schema can use ",(0,r.kt)("inlineCode",{parentName:"p"},"properties")," to store the encoding charset to serialize and deserialize strings."),(0,r.kt)("p",null,"For more instructions, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/schema-get-started#construct-a-string-schema"},"Construct a string schema"),"."),(0,r.kt)("h3",{id:"complex-type"},"Complex type"),(0,r.kt)("p",null,"Currently, Pulsar supports the following complex types:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Complex Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"KeyValue")),(0,r.kt)("td",{parentName:"tr",align:null},"Represents a complex type of a key/value pair.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Struct")),(0,r.kt)("td",{parentName:"tr",align:null},"Handles structured data. It supports ",(0,r.kt)("inlineCode",{parentName:"td"},"AvroBaseStructSchema")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"ProtobufNativeSchema"),".")))),(0,r.kt)("h4",{id:"keyvalue-schema"},(0,r.kt)("inlineCode",{parentName:"h4"},"KeyValue")," schema"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"KeyValue")," schema helps applications define schemas for both key and value. Pulsar stores the ",(0,r.kt)("inlineCode",{parentName:"p"},"SchemaInfo")," of key schema and the value schema together."),(0,r.kt)("p",null,"You can choose the encoding type when constructing the key/value schema.\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"INLINE")," - Key/value pairs are encoded together in the message payload."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SEPARATED")," - see ",(0,r.kt)("a",{parentName:"li",href:"/docs/next/schema-get-started#construct-a-keyvalue-schema"},"Construct a key/value schema"),".")),(0,r.kt)("h4",{id:"struct-schema"},(0,r.kt)("inlineCode",{parentName:"h4"},"Struct")," schema"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Struct")," schema supports ",(0,r.kt)("inlineCode",{parentName:"p"},"AvroBaseStructSchema")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ProtobufNativeSchema"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"AvroBaseStructSchema")),(0,r.kt)("td",{parentName:"tr",align:null},"Pulsar uses ",(0,r.kt)("a",{parentName:"td",href:"http://avro.apache.org/docs/current/spec.html"},"Avro Specification")," to declare the schema definition for ",(0,r.kt)("inlineCode",{parentName:"td"},"AvroBaseStructSchema"),", which supports  ",(0,r.kt)("inlineCode",{parentName:"td"},"AvroSchema"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"JsonSchema"),", and ",(0,r.kt)("inlineCode",{parentName:"td"},"ProtobufSchema"),". ",(0,r.kt)("br",null),(0,r.kt)("br",null),"This allows Pulsar:",(0,r.kt)("br",null),"- to use the same tools to manage schema definitions",(0,r.kt)("br",null),"- to use different serialization or deserialization methods to handle data")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ProtobufNativeSchema")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ProtobufNativeSchema")," is based on protobuf native Descriptor. ",(0,r.kt)("br",null),(0,r.kt)("br",null),"This allows Pulsar:",(0,r.kt)("br",null),"- to use native protobuf-v3 to serialize or deserialize data",(0,r.kt)("br",null),"- to use ",(0,r.kt)("inlineCode",{parentName:"td"},"AutoConsume")," to deserialize data.")))),(0,r.kt)("p",null,"Pulsar provides the following methods to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"struct")," schema. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"static")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"generic")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SchemaDefinition"))),(0,r.kt)("p",null,"For more examples, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/schema-get-started#construct-a-struct-schema"},"Construct a struct schema"),"."),(0,r.kt)("h3",{id:"auto-schema"},"Auto Schema"),(0,r.kt)("p",null,"If you don't know the schema type of a Pulsar topic in advance, you can use AUTO schema to produce or consume generic records to or from brokers."),(0,r.kt)("p",null,"Auto schema contains two categories:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AUTO_PRODUCE")," transfers data from a producer to a Pulsar topic that has a schema and helps the producer validate whether the out-bound bytes are compatible with the schema of the topic. For more instructions, see ",(0,r.kt)("a",{parentName:"li",href:"/docs/next/schema-get-started#construct-an-auto_produce-schema"},"Construct an AUTO_PRODUCE schema"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AUTO_CONSUME")," transfers data from a Pulsar topic that has a schema to a consumer and helps the topic validate whether the out-bound bytes are compatible with the consumer. In other words, the topic deserializes messages into language-specific objects ",(0,r.kt)("inlineCode",{parentName:"li"},"GenericRecord")," using the ",(0,r.kt)("inlineCode",{parentName:"li"},"SchemaInfo")," retrieved from brokers. Currently, ",(0,r.kt)("inlineCode",{parentName:"li"},"AUTO_CONSUME")," supports AVRO, JSON and ProtobufNativeSchema schemas. For more instructions, see ",(0,r.kt)("a",{parentName:"li",href:"/docs/next/schema-get-started#construct-an-auto_consume-schema"},"Construct an AUTO_CONSUME schema"),".")),(0,r.kt)("h3",{id:"native-avro-schema"},"Native Avro Schema"),(0,r.kt)("p",null,"When migrating or ingesting event or message data from external systems (such as Kafka and Cassandra), the events are often already serialized in Avro format. The applications producing the data typically have validated the data against their schemas (including compatibility checks) and stored them in a database or a dedicated service (such as a schema registry). The schema of each serialized data record is usually retrievable by some metadata attached to that record. In such cases, a Pulsar producer doesn't need to repeat the schema validation step when sending the ingested events to a topic. All it needs to do is passing each message or event with its schema to Pulsar."),(0,r.kt)("p",null,"Hence, we provide ",(0,r.kt)("inlineCode",{parentName:"p"},"Schema.NATIVE_AVRO")," to wrap a native Avro schema of type ",(0,r.kt)("inlineCode",{parentName:"p"},"org.apache.avro.Schema"),". The result is a schema instance of Pulsar that accepts a serialized Avro payload without validating it against the wrapped Avro schema. See for more details."),(0,r.kt)("h2",{id:"schema-versioning"},"Schema versioning"),(0,r.kt)("p",null,"Each ",(0,r.kt)("inlineCode",{parentName:"p"},"SchemaInfo")," stored with a topic has a version. The schema version manages schema changes happening within a topic. "),(0,r.kt)("p",null,"Messages produced with a given ",(0,r.kt)("inlineCode",{parentName:"p"},"SchemaInfo")," is tagged with a schema version, so when a message is consumed by a Pulsar client, the Pulsar client can use the schema version to retrieve the corresponding ",(0,r.kt)("inlineCode",{parentName:"p"},"SchemaInfo")," and then use the ",(0,r.kt)("inlineCode",{parentName:"p"},"SchemaInfo")," to deserialize data."),(0,r.kt)("p",null,"Schemas are versioned in succession. Schema storage happens in a broker that handles the associated topics so that version assignments can be made. "),(0,r.kt)("p",null,"Once a version is assigned/fetched to/for a schema, all subsequent messages produced by that producer are tagged with the appropriate version."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("p",null,"The following example illustrates how the schema version works."),(0,r.kt)("p",null,"Suppose that a Pulsar ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/client-libraries-java"},"Java client")," created using the code below attempts to connect to Pulsar and begins to send messages:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'PulsarClient client = PulsarClient.builder()\n        .serviceUrl("pulsar://localhost:6650")\n        .build();\n\nProducer<SensorReading> producer = client.newProducer(JSONSchema.of(SensorReading.class))\n        .topic("sensor-data")\n        .sendTimeout(3, TimeUnit.SECONDS)\n        .create();\n')),(0,r.kt)("p",null,"The table below lists the possible scenarios when this connection attempt occurs and what happens in each scenario:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Scenario"),(0,r.kt)("th",{parentName:"tr",align:null},"What happens"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("li",null,"No schema exists for the topic. ")),(0,r.kt)("td",{parentName:"tr",align:null},"(1) The producer is created using the given schema. (2) Since no existing schema is compatible with the ",(0,r.kt)("inlineCode",{parentName:"td"},"SensorReading")," schema, the schema is transmitted to the broker and stored. (3) Any consumer created using the same schema or topic can consume messages from the ",(0,r.kt)("inlineCode",{parentName:"td"},"sensor-data")," topic.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("li",null,"A schema already exists. "),(0,r.kt)("li",null,"The producer connects using the same schema that is already stored. ")),(0,r.kt)("td",{parentName:"tr",align:null},"(1) The schema is transmitted to the broker. (2) The broker determines that the schema is compatible. (3) The broker attempts to store the schema in ",(0,r.kt)("a",{parentName:"td",href:"/docs/next/concepts-architecture-overview#persistent-storage"},"BookKeeper")," but then determines that it's already stored, so it is used to tag produced messages.")))),(0,r.kt)("h2",{id:"schema-autoupdate"},"Schema AutoUpdate"),(0,r.kt)("p",null,"If a schema passes the schema compatibility check, Pulsar producer automatically updates this schema to the topic it produces by default. "),(0,r.kt)("h3",{id:"autoupdate-for-producer"},"AutoUpdate for producer"),(0,r.kt)("p",null,"For a producer, the ",(0,r.kt)("inlineCode",{parentName:"p"},"AutoUpdate")," happens in the following cases:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If a ",(0,r.kt)("strong",{parentName:"p"},"topic doesn\u2019t have a schema"),", Pulsar registers a schema automatically.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If a ",(0,r.kt)("strong",{parentName:"p"},"topic has a schema"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If a ",(0,r.kt)("strong",{parentName:"p"},"producer doesn\u2019t carry a schema"),":")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If ",(0,r.kt)("inlineCode",{parentName:"p"},"isSchemaValidationEnforced")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"schemaValidationEnforced")," is ",(0,r.kt)("strong",{parentName:"p"},"disabled")," in the namespace to which the topic belongs, the producer is allowed to connect to the topic and produce data. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If ",(0,r.kt)("inlineCode",{parentName:"p"},"isSchemaValidationEnforced")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"schemaValidationEnforced")," is ",(0,r.kt)("strong",{parentName:"p"},"enabled")," in the namespace to which the topic belongs, the producer is rejected and disconnected.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If a ",(0,r.kt)("strong",{parentName:"p"},"producer carries a schema"),":"))),(0,r.kt)("p",{parentName:"li"},"A broker performs the compatibility check based on the configured compatibility check strategy of the namespace to which the topic belongs."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If the schema is registered, a producer is connected to a broker. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If the schema is not registered:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If ",(0,r.kt)("inlineCode",{parentName:"p"},"isAllowAutoUpdateSchema")," sets to ",(0,r.kt)("strong",{parentName:"p"},"false"),", the producer is rejected to connect to a broker.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If ",(0,r.kt)("inlineCode",{parentName:"p"},"isAllowAutoUpdateSchema")," sets to ",(0,r.kt)("strong",{parentName:"p"},"true"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If the schema passes the compatibility check, then the broker registers a new schema automatically for the topic and the producer is connected.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If the schema does not pass the compatibility check, then the broker does not register a schema and the producer is rejected to connect to a broker."))))))))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"AutoUpdate Producer",src:a(20849).Z,width:"1278",height:"1228"})),(0,r.kt)("h3",{id:"autoupdate-for-consumer"},"AutoUpdate for consumer"),(0,r.kt)("p",null,"For a consumer, the ",(0,r.kt)("inlineCode",{parentName:"p"},"AutoUpdate")," happens in the following cases:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If a ",(0,r.kt)("strong",{parentName:"p"},"consumer connects to a topic without a schema")," (which means the consumer receiving raw bytes), the consumer can connect to the topic successfully without doing any compatibility check.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If a ",(0,r.kt)("strong",{parentName:"p"},"consumer connects to a topic with a schema"),"."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If a topic does not have all of them (a schema/data/a local consumer and a local producer):"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If ",(0,r.kt)("inlineCode",{parentName:"li"},"isAllowAutoUpdateSchema")," sets to ",(0,r.kt)("strong",{parentName:"li"},"true"),", then the consumer registers a schema and it is connected to a broker."),(0,r.kt)("li",{parentName:"ul"},"If ",(0,r.kt)("inlineCode",{parentName:"li"},"isAllowAutoUpdateSchema")," sets to ",(0,r.kt)("strong",{parentName:"li"},"false"),", then the consumer is rejected to connect to a broker."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If a topic has one of them (a schema/data/a local consumer and a local producer), then the schema compatibility check is performed."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If the schema passes the compatibility check, then the consumer is connected to the broker."),(0,r.kt)("li",{parentName:"ul"},"If the schema does not pass the compatibility check, then the consumer is rejected to connect to the broker.")))))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"AutoUpdate Consumer",src:a(5578).Z,width:"1404",height:"1298"})))}c.isMDXComponent=!0},5578:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/schema-consumer-436361129cf2d37ee3764960fb377789.png"},20849:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/schema-producer-2682d94503cecdc1dd96dd54bbca105d.png"}}]);