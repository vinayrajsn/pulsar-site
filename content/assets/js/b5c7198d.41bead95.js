"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[38994],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return c}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(a),c=r,f=u["".concat(s,".").concat(c)]||u[c]||m[c]||l;return a?n.createElement(f,o(o({ref:t},d),{},{components:a})):n.createElement(f,o({ref:t},d))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},11944:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return m}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),o=["components"],i={id:"tiered-storage-filesystem",title:"Use filesystem offloader with Pulsar",sidebar_label:"Filesystem offloader",original_id:"tiered-storage-filesystem"},s=void 0,p={unversionedId:"tiered-storage-filesystem",id:"version-2.9.1/tiered-storage-filesystem",title:"Use filesystem offloader with Pulsar",description:"This chapter guides you through every step of installing and configuring the filesystem offloader and using it with Pulsar.",source:"@site/versioned_docs/version-2.9.1/tiered-storage-filesystem.md",sourceDirName:".",slug:"/tiered-storage-filesystem",permalink:"/docs/tiered-storage-filesystem",editUrl:"https://github.com/apache/pulsar/edit/master/site2/website-next/versioned_docs/version-2.9.1/tiered-storage-filesystem.md",tags:[],version:"2.9.1",frontMatter:{id:"tiered-storage-filesystem",title:"Use filesystem offloader with Pulsar",sidebar_label:"Filesystem offloader",original_id:"tiered-storage-filesystem"},sidebar:"version-2.9.1/docsSidebar",previous:{title:"GCS offloader",permalink:"/docs/tiered-storage-gcs"},next:{title:"Azure BlobStore offloader",permalink:"/docs/tiered-storage-azure"}},d={},m=[{value:"Installation",id:"installation",level:2},{value:"Prerequisite",id:"prerequisite",level:3},{value:"Step",id:"step",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Configure filesystem offloader driver",id:"configure-filesystem-offloader-driver",level:3},{value:"Offloader driver (required)",id:"offloader-driver-required",level:4},{value:"Connection address (required)",id:"connection-address-required",level:4},{value:"Example",id:"example",level:5},{value:"Hadoop profile path (required)",id:"hadoop-profile-path-required",level:4},{value:"Example",id:"example-1",level:5},{value:"Configure filesystem offloader to run automatically",id:"configure-filesystem-offloader-to-run-automatically",level:3},{value:"Example",id:"example-2",level:4},{value:"Configure filesystem offloader to run manually",id:"configure-filesystem-offloader-to-run-manually",level:3},{value:"Example",id:"example-3",level:4},{value:"Tutorial",id:"tutorial",level:2}],u={toc:m};function c(e){var t=e.components,a=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This chapter guides you through every step of installing and configuring the filesystem offloader and using it with Pulsar."),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)("p",null,"Follow the steps below to install the filesystem offloader."),(0,l.kt)("h3",{id:"prerequisite"},"Prerequisite"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Pulsar: 2.4.2 or later versions")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Hadoop: 3.x.x"))),(0,l.kt)("h3",{id:"step"},"Step"),(0,l.kt)("p",null,"This example uses Pulsar 2.5.1."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Download the Pulsar tarball using one of the following ways:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Download from the ",(0,l.kt)("a",{parentName:"p",href:"https://archive.apache.org/dist/pulsar/pulsar-2.5.1/apache-pulsar-2.5.1-bin.tar.gz"},"Apache mirror"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Download from the Pulsar ",(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/download"},"download page"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Use ",(0,l.kt)("a",{parentName:"p",href:"https://www.gnu.org/software/wget"},"wget")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\nwget https://archive.apache.org/dist/pulsar/pulsar-2.5.1/apache-pulsar-2.5.1-bin.tar.gz\n\n"))))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Download and untar the Pulsar offloaders package. "),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\nwget https://downloads.apache.org/pulsar/pulsar-2.5.1/apache-pulsar-offloaders-2.5.1-bin.tar.gz\n\ntar xvfz apache-pulsar-offloaders-2.5.1-bin.tar.gz\n\n")),(0,l.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"If you are running Pulsar in a bare metal cluster, make sure that ",(0,l.kt)("inlineCode",{parentName:"li"},"offloaders")," tarball is unzipped in every broker's Pulsar directory."),(0,l.kt)("li",{parentName:"ul"},"If you are running Pulsar in Docker or deploying Pulsar using a Docker image (such as K8S and DCOS), you can use the ",(0,l.kt)("inlineCode",{parentName:"li"},"apachepulsar/pulsar-all")," image instead of the ",(0,l.kt)("inlineCode",{parentName:"li"},"apachepulsar/pulsar")," image. ",(0,l.kt)("inlineCode",{parentName:"li"},"apachepulsar/pulsar-all")," image has already bundled tiered storage offloaders."))))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Copy the Pulsar offloaders as ",(0,l.kt)("inlineCode",{parentName:"p"},"offloaders")," in the Pulsar directory."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"\nmv apache-pulsar-offloaders-2.5.1/offloaders apache-pulsar-2.5.1/offloaders\n\nls offloaders\n\n")),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Output")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"\ntiered-storage-file-system-2.5.1.nar\ntiered-storage-jcloud-2.5.1.nar\n\n")),(0,l.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"If you are running Pulsar in a bare metal cluster, make sure that ",(0,l.kt)("inlineCode",{parentName:"li"},"offloaders")," tarball is unzipped in every broker's Pulsar directory."),(0,l.kt)("li",{parentName:"ul"},"If you are running Pulsar in Docker or deploying Pulsar using a Docker image (such as K8s and DCOS), you can use the ",(0,l.kt)("inlineCode",{parentName:"li"},"apachepulsar/pulsar-all")," image instead of the ",(0,l.kt)("inlineCode",{parentName:"li"},"apachepulsar/pulsar")," image. ",(0,l.kt)("inlineCode",{parentName:"li"},"apachepulsar/pulsar-all")," image has already bundled tiered storage offloaders.")))))),(0,l.kt)("h2",{id:"configuration"},"Configuration"),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Before offloading data from BookKeeper to filesystem, you need to configure some properties of the filesystem offloader driver. "))),(0,l.kt)("p",null,"Besides, you can also configure the filesystem offloader to run it automatically or trigger it manually."),(0,l.kt)("h3",{id:"configure-filesystem-offloader-driver"},"Configure filesystem offloader driver"),(0,l.kt)("p",null,"You can configure filesystem offloader driver in the configuration file ",(0,l.kt)("inlineCode",{parentName:"p"},"broker.conf")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"standalone.conf"),"."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Required")," configurations are as below."),(0,l.kt)("table",{parentName:"li"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Required configuration"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Example value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"managedLedgerOffloadDriver")),(0,l.kt)("td",{parentName:"tr",align:null},"Offloader driver name, which is case-insensitive."),(0,l.kt)("td",{parentName:"tr",align:null},"filesystem")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"fileSystemURI")),(0,l.kt)("td",{parentName:"tr",align:null},"Connection address"),(0,l.kt)("td",{parentName:"tr",align:null},"hdfs://127.0.0.1:9000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"fileSystemProfilePath")),(0,l.kt)("td",{parentName:"tr",align:null},"Hadoop profile path"),(0,l.kt)("td",{parentName:"tr",align:null},"../conf/filesystem_offload_core_site.xml"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Optional")," configurations are as below."),(0,l.kt)("table",{parentName:"li"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Optional configuration"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Example value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"managedLedgerMinLedgerRolloverTimeMinutes")),(0,l.kt)("td",{parentName:"tr",align:null},"Minimum time between ledger rollover for a topic",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Note"),": it is not recommended that you set this configuration in the production environment."),(0,l.kt)("td",{parentName:"tr",align:null},"2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"managedLedgerMaxEntriesPerLedger")),(0,l.kt)("td",{parentName:"tr",align:null},"Maximum number of entries to append to a ledger before triggering a rollover.",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Note"),": it is not recommended that you set this configuration in the production environment."),(0,l.kt)("td",{parentName:"tr",align:null},"5000")))))),(0,l.kt)("h4",{id:"offloader-driver-required"},"Offloader driver (required)"),(0,l.kt)("p",null,"Offloader driver name, which is case-insensitive."),(0,l.kt)("p",null,"This example sets the offloader driver name as ",(0,l.kt)("em",{parentName:"p"},"filesystem"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-conf"},"\nmanagedLedgerOffloadDriver=filesystem\n\n")),(0,l.kt)("h4",{id:"connection-address-required"},"Connection address (required)"),(0,l.kt)("p",null,"Connection address is the URI to access the default Hadoop distributed file system. "),(0,l.kt)("h5",{id:"example"},"Example"),(0,l.kt)("p",null,"This example sets the connection address as ",(0,l.kt)("em",{parentName:"p"},"hdfs://127.0.0.1:9000"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-conf"},"\nfileSystemURI=hdfs://127.0.0.1:9000\n\n")),(0,l.kt)("h4",{id:"hadoop-profile-path-required"},"Hadoop profile path (required)"),(0,l.kt)("p",null,"The configuration file is stored in the Hadoop profile path. It contains various settings for Hadoop performance tuning."),(0,l.kt)("h5",{id:"example-1"},"Example"),(0,l.kt)("p",null,"This example sets the Hadoop profile path as ",(0,l.kt)("em",{parentName:"p"},"../conf/filesystem_offload_core_site.xml"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-conf"},"\nfileSystemProfilePath=../conf/filesystem_offload_core_site.xml\n\n")),(0,l.kt)("p",null,"You can set the following configurations in the ",(0,l.kt)("em",{parentName:"p"},"filesystem_offload_core_site.xml")," file."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\n<property>\n    <name>fs.defaultFS</name>\n    <value></value>\n</property>\n\n<property>\n    <name>hadoop.tmp.dir</name>\n    <value>pulsar</value>\n</property>\n\n<property>\n    <name>io.file.buffer.size</name>\n    <value>4096</value>\n</property>\n\n<property>\n    <name>io.seqfile.compress.blocksize</name>\n    <value>1000000</value>\n</property>\n<property>\n\n    <name>io.seqfile.compression.type</name>\n    <value>BLOCK</value>\n</property>\n\n<property>\n    <name>io.map.index.interval</name>\n    <value>128</value>\n</property>\n\n")),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"For more information about the Hadoop HDFS, see ",(0,l.kt)("a",{parentName:"p",href:"https://hadoop.apache.org/docs/current/"},"here"),"."))),(0,l.kt)("h3",{id:"configure-filesystem-offloader-to-run-automatically"},"Configure filesystem offloader to run automatically"),(0,l.kt)("p",null,"Namespace policy can be configured to offload data automatically once a threshold is reached. The threshold is based on the size of data that a topic has stored on a Pulsar cluster. Once the topic reaches the threshold, an offload operation is triggered automatically. "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Threshold value"),(0,l.kt)("th",{parentName:"tr",align:null},"Action"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"> 0"),(0,l.kt)("td",{parentName:"tr",align:null},"It triggers the offloading operation if the topic storage reaches its threshold.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"= 0"),(0,l.kt)("td",{parentName:"tr",align:null},"It causes a broker to offload data as soon as possible.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"< 0"),(0,l.kt)("td",{parentName:"tr",align:null},"It disables automatic offloading operation.")))),(0,l.kt)("p",null,"Automatic offload runs when a new segment is added to a topic log. If you set the threshold on a namespace, but few messages are being produced to the topic, offloader does not work until the current segment is full."),(0,l.kt)("p",null,"You can configure the threshold size using CLI tools, such as pulsar-admin."),(0,l.kt)("h4",{id:"example-2"},"Example"),(0,l.kt)("p",null,"This example sets the filesystem offloader threshold size to 10 MB using pulsar-admin."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\npulsar-admin namespaces set-offload-threshold --size 10M my-tenant/my-namespace\n\n")),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"For more information about the ",(0,l.kt)("inlineCode",{parentName:"p"},"pulsar-admin namespaces set-offload-threshold options")," command, including flags, descriptions, default values, and shorthands, see ",(0,l.kt)("a",{parentName:"p",href:"/docs/pulsar-admin#set-offload-threshold"},"here"),". "))),(0,l.kt)("h3",{id:"configure-filesystem-offloader-to-run-manually"},"Configure filesystem offloader to run manually"),(0,l.kt)("p",null,"For individual topics, you can trigger filesystem offloader manually using one of the following methods:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Use REST endpoint.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Use CLI tools (such as pulsar-admin). "))),(0,l.kt)("p",null,"To trigger via CLI tools, you need to specify the maximum amount of data (threshold) that should be retained on a Pulsar cluster for a topic. If the size of the topic data on the Pulsar cluster exceeds this threshold, segments from the topic are offloaded to the filesystem until the threshold is no longer exceeded. Older segments are offloaded first."),(0,l.kt)("h4",{id:"example-3"},"Example"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"This example triggers the filesystem offloader to run manually using pulsar-admin."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\npulsar-admin topics offload --size-threshold 10M persistent://my-tenant/my-namespace/topic1\n\n")),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Output")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\nOffload triggered for persistent://my-tenant/my-namespace/topic1 for messages before 2:0:-1\n\n")),(0,l.kt)("div",{parentName:"li",className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"For more information about the ",(0,l.kt)("inlineCode",{parentName:"p"},"pulsar-admin topics offload options")," command, including flags, descriptions, default values, and shorthands, see ",(0,l.kt)("a",{parentName:"p",href:"/docs/pulsar-admin#offload"},"here"),". ")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"This example checks filesystem offloader status using pulsar-admin."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\npulsar-admin topics offload-status persistent://my-tenant/my-namespace/topic1\n\n")),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Output")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\nOffload is currently running\n\n")),(0,l.kt)("p",{parentName:"li"},"To wait for the filesystem to complete the job, add the ",(0,l.kt)("inlineCode",{parentName:"p"},"-w")," flag."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\npulsar-admin topics offload-status -w persistent://my-tenant/my-namespace/topic1\n\n")),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Output")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"\nOffload was a success\n\n")),(0,l.kt)("p",{parentName:"li"},"If there is an error in the offloading operation, the error is propagated to the ",(0,l.kt)("inlineCode",{parentName:"p"},"pulsar-admin topics offload-status")," command."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\npulsar-admin topics offload-status persistent://my-tenant/my-namespace/topic1\n\n")),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Output")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"\nError in offload\nnull\n\nReason: Error offloading: org.apache.bookkeeper.mledger.ManagedLedgerException: java.util.concurrent.CompletionException: com.amazonaws.services.s3.model.AmazonS3Exception: Anonymous users cannot initiate multipart uploads.  Please authenticate. (Service: Amazon S3; Status Code: 403; Error Code: AccessDenied; Request ID: 798758DE3F1776DF; S3 Extended Request ID: dhBFz/lZm1oiG/oBEepeNlhrtsDlzoOhocuYMpKihQGXe6EG8puRGOkK6UwqzVrMXTWBxxHcS+g=), S3 Extended Request ID: dhBFz/lZm1oiG/oBEepeNlhrtsDlzoOhocuYMpKihQGXe6EG8puRGOkK6UwqzVrMXTWBxxHcS+g=\n\n")))),(0,l.kt)("p",null,"`"),(0,l.kt)("p",null,"  :::tip"),(0,l.kt)("p",null,"  For more information about the ",(0,l.kt)("inlineCode",{parentName:"p"},"pulsar-admin topics offload-status options")," command, including flags, descriptions, default values, and shorthands, see ",(0,l.kt)("a",{parentName:"p",href:"/docs/pulsar-admin#offload-status"},"here"),". "),(0,l.kt)("p",null,"  :::"),(0,l.kt)("h2",{id:"tutorial"},"Tutorial"),(0,l.kt)("p",null,"For the complete and step-by-step instructions on how to use the filesystem offloader with Pulsar, see ",(0,l.kt)("a",{parentName:"p",href:"https://hub.streamnative.io/offloaders/filesystem/2.5.1"},"here"),"."))}c.isMDXComponent=!0}}]);