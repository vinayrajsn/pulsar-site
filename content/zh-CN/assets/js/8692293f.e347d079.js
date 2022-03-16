"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[14496],{3905:function(t,n,e){e.d(n,{Zo:function(){return d},kt:function(){return s}});var l=e(67294);function a(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function r(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,l)}return e}function i(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?r(Object(e),!0).forEach((function(n){a(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function u(t,n){if(null==t)return{};var e,l,a=function(t,n){if(null==t)return{};var e,l,a={},r=Object.keys(t);for(l=0;l<r.length;l++)e=r[l],n.indexOf(e)>=0||(a[e]=t[e]);return a}(t,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(l=0;l<r.length;l++)e=r[l],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(a[e]=t[e])}return a}var o=l.createContext({}),p=function(t){var n=l.useContext(o),e=n;return t&&(e="function"==typeof t?t(n):i(i({},n),t)),e},d=function(t){var n=p(t.components);return l.createElement(o.Provider,{value:n},t.children)},k={inlineCode:"code",wrapper:function(t){var n=t.children;return l.createElement(l.Fragment,{},n)}},m=l.forwardRef((function(t,n){var e=t.components,a=t.mdxType,r=t.originalType,o=t.parentName,d=u(t,["components","mdxType","originalType","parentName"]),m=p(e),s=a,g=m["".concat(o,".").concat(s)]||m[s]||k[s]||r;return e?l.createElement(g,i(i({ref:n},d),{},{components:e})):l.createElement(g,i({ref:n},d))}));function s(t,n){var e=arguments,a=n&&n.mdxType;if("string"==typeof t||a){var r=e.length,i=new Array(r);i[0]=m;var u={};for(var o in n)hasOwnProperty.call(n,o)&&(u[o]=n[o]);u.originalType=t,u.mdxType="string"==typeof t?t:a,i[1]=u;for(var p=2;p<r;p++)i[p]=e[p];return l.createElement.apply(null,i)}return l.createElement.apply(null,e)}m.displayName="MDXCreateElement"},12125:function(t,n,e){e.r(n),e.d(n,{assets:function(){return d},contentTitle:function(){return o},default:function(){return s},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return k}});var l=e(87462),a=e(63366),r=(e(67294),e(3905)),i=["components"],u={id:"io-influxdb-sink",title:"InfluxDB sink connector",sidebar_label:"InfluxDB sink connector"},o=void 0,p={unversionedId:"io-influxdb-sink",id:"io-influxdb-sink",title:"InfluxDB sink connector",description:"The InfluxDB sink connector pulls messages from Pulsar topics and persists the messages to InfluxDB.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/io-influxdb-sink.md",sourceDirName:".",slug:"/io-influxdb-sink",permalink:"/zh-CN/docs/next/io-influxdb-sink",editUrl:"https://github.com/apache/pulsar/edit/master/site2/website-next/docs/io-influxdb-sink.md",tags:[],version:"current",frontMatter:{id:"io-influxdb-sink",title:"InfluxDB sink connector",sidebar_label:"InfluxDB sink connector"}},d={},k=[{value:"Configuration",id:"configuration",level:2},{value:"Property",id:"property",level:3},{value:"InfluxDBv2",id:"influxdbv2",level:4},{value:"InfluxDBv1",id:"influxdbv1",level:4},{value:"Example",id:"example",level:3},{value:"InfluxDBv2",id:"influxdbv2-1",level:4},{value:"InfluxDBv1",id:"influxdbv1-1",level:4}],m={toc:k};function s(t){var n=t.components,e=(0,a.Z)(t,i);return(0,r.kt)("wrapper",(0,l.Z)({},m,e,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The InfluxDB sink connector pulls messages from Pulsar topics and persists the messages to InfluxDB."),(0,r.kt)("p",null,"The InfluxDB sink provides different configurations for InfluxDBv1 and v2 respectively."),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"The configuration of the InfluxDB sink connector has the following properties."),(0,r.kt)("h3",{id:"property"},"Property"),(0,r.kt)("h4",{id:"influxdbv2"},"InfluxDBv2"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"influxdbUrl")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,r.kt)("td",{parentName:"tr",align:null},"The URL of the InfluxDB instance.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"token")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,r.kt)("td",{parentName:"tr",align:null},"The authentication token used to authenticate to InfluxDB.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"organization")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,r.kt)("td",{parentName:"tr",align:null},"The InfluxDB organization to write to.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bucket")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,r.kt)("td",{parentName:"tr",align:null},"The InfluxDB bucket to write to.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"precision")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"ns"),(0,r.kt)("td",{parentName:"tr",align:null},"The timestamp precision for writing data to InfluxDB. ",(0,r.kt)("br",null),(0,r.kt)("br",null),"Below are the available options:",(0,r.kt)("li",null,"ns",(0,r.kt)("br",null)),(0,r.kt)("li",null,"us",(0,r.kt)("br",null)),(0,r.kt)("li",null,"ms",(0,r.kt)("br",null)),(0,r.kt)("li",null,"s"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"logLevel")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"NONE"),(0,r.kt)("td",{parentName:"tr",align:null},"The log level for InfluxDB request and response. ",(0,r.kt)("br",null),(0,r.kt)("br",null),"Below are the available options:",(0,r.kt)("li",null,"NONE",(0,r.kt)("br",null)),(0,r.kt)("li",null,"BASIC",(0,r.kt)("br",null)),(0,r.kt)("li",null,"HEADERS",(0,r.kt)("br",null)),(0,r.kt)("li",null,"FULL"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"gzipEnable")),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to enable gzip or not.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"batchTimeMs")),(0,r.kt)("td",{parentName:"tr",align:null},"long"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"1000L"),(0,r.kt)("td",{parentName:"tr",align:null},"The InfluxDB operation time in milliseconds.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"batchSize")),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"200"),(0,r.kt)("td",{parentName:"tr",align:null},"The batch size of writing to InfluxDB.")))),(0,r.kt)("h4",{id:"influxdbv1"},"InfluxDBv1"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"influxdbUrl")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,r.kt)("td",{parentName:"tr",align:null},"The URL of the InfluxDB instance.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"username")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,r.kt)("td",{parentName:"tr",align:null},"The username used to authenticate to InfluxDB.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"password")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,r.kt)("td",{parentName:"tr",align:null},"The password used to authenticate to InfluxDB.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"database")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,r.kt)("td",{parentName:"tr",align:null},"The InfluxDB to which write messages.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"consistencyLevel")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"ONE"),(0,r.kt)("td",{parentName:"tr",align:null},"The consistency level for writing data to InfluxDB. ",(0,r.kt)("br",null),(0,r.kt)("br",null),"Below are the available options:",(0,r.kt)("li",null,"ALL",(0,r.kt)("br",null)),(0,r.kt)("li",null," ANY",(0,r.kt)("br",null)),(0,r.kt)("li",null,"ONE",(0,r.kt)("br",null)),(0,r.kt)("li",null,"QUORUM "))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"logLevel")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"NONE"),(0,r.kt)("td",{parentName:"tr",align:null},"The log level for InfluxDB request and response. ",(0,r.kt)("br",null),(0,r.kt)("br",null),"Below are the available options:",(0,r.kt)("li",null,"NONE",(0,r.kt)("br",null)),(0,r.kt)("li",null,"BASIC",(0,r.kt)("br",null)),(0,r.kt)("li",null,"HEADERS",(0,r.kt)("br",null)),(0,r.kt)("li",null,"FULL"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"retentionPolicy")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"autogen"),(0,r.kt)("td",{parentName:"tr",align:null},"The retention policy for InfluxDB.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"gzipEnable")),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to enable gzip or not.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"batchTimeMs")),(0,r.kt)("td",{parentName:"tr",align:null},"long"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"1000L"),(0,r.kt)("td",{parentName:"tr",align:null},"The InfluxDB operation time in milliseconds.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"batchSize")),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"200"),(0,r.kt)("td",{parentName:"tr",align:null},"The batch size of writing to InfluxDB.")))),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("p",null,"Before using the InfluxDB sink connector, you need to create a configuration file through one of the following methods."),(0,r.kt)("h4",{id:"influxdbv2-1"},"InfluxDBv2"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"JSON"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'\n{\n   "configs": {\n      "influxdbUrl": "http://localhost:9999",\n      "organization": "example-org",\n      "bucket": "example-bucket",\n      "token": "xxxx",\n      "precision": "ns",\n      "logLevel": "NONE",\n      "gzipEnable": false,\n      "batchTimeMs": 1000,\n      "batchSize": 100\n   }\n}\n\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"YAML"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'\nconfigs:\n    influxdbUrl: "http://localhost:9999"\n    organization: "example-org"\n    bucket: "example-bucket"\n    token: "xxxx"\n    precision: "ns"\n    logLevel: "NONE"\n    gzipEnable: false\n    batchTimeMs: 1000\n    batchSize: 100\n\n')))),(0,r.kt)("h4",{id:"influxdbv1-1"},"InfluxDBv1"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"JSON"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'\n{\n   "configs": {\n      "influxdbUrl": "http://localhost:8086",\n      "database": "test_db",\n      "consistencyLevel": "ONE",\n      "logLevel": "NONE",\n      "retentionPolicy": "autogen",\n      "gzipEnable": false,\n      "batchTimeMs": 1000,\n      "batchSize": 100\n   }\n}\n\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"YAML"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'\nconfigs:\n    influxdbUrl: "http://localhost:8086"\n    database: "test_db"\n    consistencyLevel: "ONE"\n    logLevel: "NONE"\n    retentionPolicy: "autogen"\n    gzipEnable: false\n    batchTimeMs: 1000\n    batchSize: 100\n\n')))))}s.isMDXComponent=!0}}]);