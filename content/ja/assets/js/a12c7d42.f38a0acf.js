"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[68893],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=u(r),f=a,h=m["".concat(l,".").concat(f)]||m[f]||p[f]||o;return r?n.createElement(h,i(i({ref:t},s),{},{components:r})):n.createElement(h,i({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},72369:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],c={author:"Sijie Guo",authorURL:"https://twitter.com/sijieg",title:"Apache Pulsar 2.1.0-incubating"},l=void 0,u={permalink:"/ja/blog/2018/08/06/Apache-Pulsar-2-1-0",editUrl:"https://github.com/apache/pulsar/edit/master/site2/website-next/blog/2018-08-06-Apache-Pulsar-2-1-0.md",source:"@site/i18n/ja/docusaurus-plugin-content-blog/2018-08-06-Apache-Pulsar-2-1-0.md",title:"Apache Pulsar 2.1.0-incubating",description:"We are glad to present the new 2.1.0-incubating release of Pulsar. This release is the culmination of 2 months of work that have brought multiple new features and improvements to Pulsar.",date:"2018-08-06T00:00:00.000Z",formattedDate:"2018\u5e748\u67086\u65e5",tags:[],readingTime:3.36,truncated:!0,authors:[{name:"Sijie Guo",url:"https://twitter.com/sijieg"}],frontMatter:{author:"Sijie Guo",authorURL:"https://twitter.com/sijieg",title:"Apache Pulsar 2.1.0-incubating"},prevItem:{title:"Apache Pulsar 2.3.0",permalink:"/ja/blog/2019/02/20/Apache-Pulsar-2-3-0"}},s={authorsImageUrls:[void 0]},p=[],m={toc:p};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We are glad to present the new 2.1.0-incubating release of Pulsar. This release is the culmination of 2 months of work that have brought multiple new features and improvements to Pulsar."),(0,o.kt)("p",null,"In Pulsar 2.1 you'll see:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/io-overview"},"Pulsar IO")," connector framework and a list of ",(0,o.kt)("a",{parentName:"li",href:"/docs/io-connectors"},"builtin connectors")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-pulsar/wiki/PIP-17:-Tiered-storage-for-Pulsar-topics"},"PIP-17"),": ",(0,o.kt)("a",{parentName:"li",href:"/docs/concepts-tiered-storage"},"Tiered Storage")),(0,o.kt)("li",{parentName:"ul"},"Pulsar ",(0,o.kt)("a",{parentName:"li",href:"/docs/functions-state"},"Stateful Functions")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/client-libraries-go"},"Go Client")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-pulsar/blob/v2.1.0-incubating/pulsar-client-schema/src/main/java/org/apache/pulsar/client/impl/schema/AvroSchema.java"},"Avro")," and ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-pulsar/blob/v2.1.0-incubating/pulsar-client-schema/src/main/java/org/apache/pulsar/client/impl/schema/ProtobufSchema.java"},"Protobuf")," Schemas")),(0,o.kt)("p",null,"For details information please check the detailed ",(0,o.kt)("a",{parentName:"p",href:"/release-notes/#2.1.0-incubating"},"release notes")," and ",(0,o.kt)("a",{parentName:"p",href:"/versions"},"2.1.0 documentation"),"."))}f.isMDXComponent=!0}}]);