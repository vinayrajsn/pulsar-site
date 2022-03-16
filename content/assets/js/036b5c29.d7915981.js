"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[39050],{3905:function(t,e,a){a.d(e,{Zo:function(){return m},kt:function(){return c}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),s=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),d=s(a),c=r,g=d["".concat(p,".").concat(c)]||d[c]||u[c]||l;return a?n.createElement(g,i(i({ref:e},m),{},{components:a})):n.createElement(g,i({ref:e},m))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},44425:function(t,e,a){a.r(e),a.d(e,{assets:function(){return m},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=["components"],o={id:"performance-pulsar-perf",title:"Pulsar Perf",sidebar_label:"Pulsar Perf",original_id:"performance-pulsar-perf"},p=void 0,s={unversionedId:"performance-pulsar-perf",id:"version-2.9.1/performance-pulsar-perf",title:"Pulsar Perf",description:"The Pulsar Perf is a built-in performance test tool for Apache Pulsar. You can use the Pulsar Perf to test message writing or reading performance. For detailed information about performance tuning, see here.",source:"@site/versioned_docs/version-2.9.1/performance-pulsar-perf.md",sourceDirName:".",slug:"/performance-pulsar-perf",permalink:"/docs/performance-pulsar-perf",editUrl:"https://github.com/apache/pulsar/edit/master/site2/website-next/versioned_docs/version-2.9.1/performance-pulsar-perf.md",tags:[],version:"2.9.1",frontMatter:{id:"performance-pulsar-perf",title:"Pulsar Perf",sidebar_label:"Pulsar Perf",original_id:"performance-pulsar-perf"},sidebar:"version-2.9.1/docsSidebar",previous:{title:"Bouncy Castle Providers",permalink:"/docs/security-bouncy-castle"},next:{title:"Overview",permalink:"/docs/client-libraries"}},m={},u=[{value:"Produce messages",id:"produce-messages",level:2},{value:"Configuration options for <code>pulsar-perf produce</code>",id:"configuration-options-for-pulsar-perf-produce",level:3},{value:"Consume messages",id:"consume-messages",level:2},{value:"Configuration options for <code>pulsar-perf consume</code>",id:"configuration-options-for-pulsar-perf-consume",level:3},{value:"Configurations",id:"configurations",level:2},{value:"HdrHistogram Plotter",id:"hdrhistogram-plotter",level:2}],d={toc:u};function c(t){var e=t.components,o=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},d,o,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The Pulsar Perf is a built-in performance test tool for Apache Pulsar. You can use the Pulsar Perf to test message writing or reading performance. For detailed information about performance tuning, see ",(0,l.kt)("a",{parentName:"p",href:"https://streamnative.io/en/blog/tech/2021-01-14-pulsar-architecture-performance-tuning"},"here"),"."),(0,l.kt)("h2",{id:"produce-messages"},"Produce messages"),(0,l.kt)("p",null,"This example shows how the Pulsar Perf produces messages with default options. For all configuration options available for the ",(0,l.kt)("inlineCode",{parentName:"p"},"pulsar-perf produce")," command, see ",(0,l.kt)("a",{parentName:"p",href:"#configuration-options-for-pulsar-perf-produce"},"configuration options"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\nbin/pulsar-perf produce my-topic\n\n")),(0,l.kt)("p",null,"After the command is executed, the test data is continuously output on the Console."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Output")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\n19:53:31.459 [pulsar-perf-producer-exec-1-1] INFO  org.apache.pulsar.testclient.PerformanceProducer - Created 1 producers\n19:53:31.482 [pulsar-timer-5-1] WARN  com.scurrilous.circe.checksum.Crc32cIntChecksum - Failed to load Circe JNI library. Falling back to Java based CRC32c provider\n19:53:40.861 [main] INFO  org.apache.pulsar.testclient.PerformanceProducer - Throughput produced:     93.7  msg/s ---      0.7 Mbit/s --- failure      0.0 msg/s --- Latency: mean:   3.575 ms - med:   3.460 - 95pct:   4.790 - 99pct:   5.308 - 99.9pct:   5.834 - 99.99pct:   6.609 - Max:   6.609\n19:53:50.909 [main] INFO  org.apache.pulsar.testclient.PerformanceProducer - Throughput produced:    100.0  msg/s ---      0.8 Mbit/s --- failure      0.0 msg/s --- Latency: mean:   3.437 ms - med:   3.328 - 95pct:   4.656 - 99pct:   5.071 - 99.9pct:   5.519 - 99.99pct:   5.588 - Max:   5.588\n19:54:00.926 [main] INFO  org.apache.pulsar.testclient.PerformanceProducer - Throughput produced:    100.0  msg/s ---      0.8 Mbit/s --- failure      0.0 msg/s --- Latency: mean:   3.376 ms - med:   3.276 - 95pct:   4.520 - 99pct:   4.939 - 99.9pct:   5.440 - 99.99pct:   5.490 - Max:   5.490\n19:54:10.940 [main] INFO  org.apache.pulsar.testclient.PerformanceProducer - Throughput produced:    100.0  msg/s ---      0.8 Mbit/s --- failure      0.0 msg/s --- Latency: mean:   3.298 ms - med:   3.220 - 95pct:   4.474 - 99pct:   4.926 - 99.9pct:   5.645 - 99.99pct:   5.654 - Max:   5.654\n19:54:20.956 [main] INFO  org.apache.pulsar.testclient.PerformanceProducer - Throughput produced:    100.1  msg/s ---      0.8 Mbit/s --- failure      0.0 msg/s --- Latency: mean:   3.308 ms - med:   3.199 - 95pct:   4.532 - 99pct:   4.871 - 99.9pct:   5.291 - 99.99pct:   5.323 - Max:   5.323\n19:54:30.972 [main] INFO  org.apache.pulsar.testclient.PerformanceProducer - Throughput produced:    100.0  msg/s ---      0.8 Mbit/s --- failure      0.0 msg/s --- Latency: mean:   3.249 ms - med:   3.144 - 95pct:   4.437 - 99pct:   4.970 - 99.9pct:   5.329 - 99.99pct:   5.414 - Max:   5.414\n19:54:40.987 [main] INFO  org.apache.pulsar.testclient.PerformanceProducer - Throughput produced:    100.0  msg/s ---      0.8 Mbit/s --- failure      0.0 msg/s --- Latency: mean:   3.435 ms - med:   3.361 - 95pct:   4.772 - 99pct:   5.150 - 99.9pct:   5.373 - 99.99pct:   5.837 - Max:   5.837\n^C19:54:44.325 [Thread-1] INFO  org.apache.pulsar.testclient.PerformanceProducer - Aggregated throughput stats --- 7286 records sent --- 99.140 msg/s --- 0.775 Mbit/s\n19:54:44.336 [Thread-1] INFO  org.apache.pulsar.testclient.PerformanceProducer - Aggregated latency stats --- Latency: mean:   3.383 ms - med:   3.293 - 95pct:   4.610 - 99pct:   5.059 - 99.9pct:   5.588 - 99.99pct:   5.837 - 99.999pct:   6.609 - Max:   6.609\n\n")),(0,l.kt)("p",null,"From the above test data, you can get the throughput statistics and the write latency statistics. The aggregated statistics is printed when the Pulsar Perf is stopped. You can press ",(0,l.kt)("strong",{parentName:"p"},"Ctrl"),"+",(0,l.kt)("strong",{parentName:"p"},"C")," to stop the Pulsar Perf. If you specify a filename with the ",(0,l.kt)("inlineCode",{parentName:"p"},"--histogram-file")," parameter, a file with the ",(0,l.kt)("a",{parentName:"p",href:"http://hdrhistogram.github.io/HdrHistogram/"},"HdrHistogram")," formatted test result appears under your directory after Pulsar Perf is stopped. You can also check the test result through ",(0,l.kt)("a",{parentName:"p",href:"https://hdrhistogram.github.io/HdrHistogram/plotFiles.html"},"HdrHistogram Plotter"),". For details about how to check the test result through ",(0,l.kt)("a",{parentName:"p",href:"https://hdrhistogram.github.io/HdrHistogram/plotFiles.html"},"HdrHistogram Plotter"),", see ",(0,l.kt)("a",{parentName:"p",href:"#hdrhistogram-plotter"},"HdrHistogram Plotter"),"."),(0,l.kt)("h3",{id:"configuration-options-for-pulsar-perf-produce"},"Configuration options for ",(0,l.kt)("inlineCode",{parentName:"h3"},"pulsar-perf produce")),(0,l.kt)("p",null,"You can get all options by executing the ",(0,l.kt)("inlineCode",{parentName:"p"},"bin/pulsar-perf produce -h")," command. Therefore, you can modify these options as required."),(0,l.kt)("p",null,"The following table lists configuration options available for the ",(0,l.kt)("inlineCode",{parentName:"p"},"pulsar-perf produce")," command."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"access-mode"),(0,l.kt)("td",{parentName:"tr",align:null},"Set the producer access mode. Valid values are ",(0,l.kt)("inlineCode",{parentName:"td"},"Shared"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"Exclusive")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"WaitForExclusive"),"."),(0,l.kt)("td",{parentName:"tr",align:null},"Shared")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"admin-url"),(0,l.kt)("td",{parentName:"tr",align:null},"Set the Pulsar admin URL."),(0,l.kt)("td",{parentName:"tr",align:null},"N/A")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"auth-params"),(0,l.kt)("td",{parentName:"tr",align:null},"Set the authentication parameters, whose format is determined by the implementation of the ",(0,l.kt)("inlineCode",{parentName:"td"},"configure"),' method in the authentication plugin class, such as "key1:val1,key2:val2" or "{"key1":"val1","key2":"val2"}".'),(0,l.kt)("td",{parentName:"tr",align:null},"N/A")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"auth-plugin"),(0,l.kt)("td",{parentName:"tr",align:null},"Set the authentication plugin class name."),(0,l.kt)("td",{parentName:"tr",align:null},"N/A")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"listener-name"),(0,l.kt)("td",{parentName:"tr",align:null},"Set the listener name for the broker."),(0,l.kt)("td",{parentName:"tr",align:null},"N/A")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"batch-max-bytes"),(0,l.kt)("td",{parentName:"tr",align:null},"Set the maximum number of bytes for each batch."),(0,l.kt)("td",{parentName:"tr",align:null},"4194304")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"batch-max-messages"),(0,l.kt)("td",{parentName:"tr",align:null},"Set the maximum number of messages for each batch."),(0,l.kt)("td",{parentName:"tr",align:null},"1000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"batch-time-window"),(0,l.kt)("td",{parentName:"tr",align:null},"Set a window for a batch of messages."),(0,l.kt)("td",{parentName:"tr",align:null},"1 ms")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"busy-wait"),(0,l.kt)("td",{parentName:"tr",align:null},"Enable or disable Busy-Wait on the Pulsar client."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"chunking"),(0,l.kt)("td",{parentName:"tr",align:null},"Configure whether to split the message and publish in chunks if message size is larger than allowed max size."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"compression"),(0,l.kt)("td",{parentName:"tr",align:null},"Compress the message payload."),(0,l.kt)("td",{parentName:"tr",align:null},"N/A")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"conf-file"),(0,l.kt)("td",{parentName:"tr",align:null},"Set the configuration file."),(0,l.kt)("td",{parentName:"tr",align:null},"N/A")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"delay"),(0,l.kt)("td",{parentName:"tr",align:null},"Mark messages with a given delay."),(0,l.kt)("td",{parentName:"tr",align:null},"0s")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"encryption-key-name"),(0,l.kt)("td",{parentName:"tr",align:null},"Set the name of the public key used to encrypt the payload."),(0,l.kt)("td",{parentName:"tr",align:null},"N/A")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"encryption-key-value-file"),(0,l.kt)("td",{parentName:"tr",align:null},"Set the file which contains the public key used to encrypt the payload."),(0,l.kt)("td",{parentName:"tr",align:null},"N/A")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"exit-on-failure"),(0,l.kt)("td",{parentName:"tr",align:null},"Configure whether to exit from the process on publish failure."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"format-class"),(0,l.kt)("td",{parentName:"tr",align:null},"Set the custom formatter class name."),(0,l.kt)("td",{parentName:"tr",align:null},"org.apache.pulsar.testclient.DefaultMessageFormatter")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"format-payload"),(0,l.kt)("td",{parentName:"tr",align:null},"Configure whether to format %i as a message index in the stream from producer and/or %t as the timestamp nanoseconds."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"help"),(0,l.kt)("td",{parentName:"tr",align:null},"Configure the help message."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"histogram-file"),(0,l.kt)("td",{parentName:"tr",align:null},"HdrHistogram output file"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"max-connections"),(0,l.kt)("td",{parentName:"tr",align:null},"Set the maximum number of TCP connections to a single broker."),(0,l.kt)("td",{parentName:"tr",align:null},"100")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"max-outstanding"),(0,l.kt)("td",{parentName:"tr",align:null},"Set the maximum number of outstanding messages."),(0,l.kt)("td",{parentName:"tr",align:null},"1000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"max-outstanding-across-partitions"),(0,l.kt)("td",{parentName:"tr",align:null},"Set the maximum number of outstanding messages across partitions."),(0,l.kt)("td",{parentName:"tr",align:null},"50000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"message-key-generation-mode"),(0,l.kt)("td",{parentName:"tr",align:null},"Set the generation mode of message key. Valid options are ",(0,l.kt)("inlineCode",{parentName:"td"},"autoIncrement"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"random"),"."),(0,l.kt)("td",{parentName:"tr",align:null},"N/A")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"num-io-threads"),(0,l.kt)("td",{parentName:"tr",align:null},"Set the number of threads to be used for handling connections to brokers."),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"num-messages"),(0,l.kt)("td",{parentName:"tr",align:null},"Set the number of messages to be published in total. If it is set to 0, it keeps publishing messages."),(0,l.kt)("td",{parentName:"tr",align:null},"0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"num-producers"),(0,l.kt)("td",{parentName:"tr",align:null},"Set the number of producers for each topic."),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"num-test-threads"),(0,l.kt)("td",{parentName:"tr",align:null},"Set the number of test threads."),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"num-topic"),(0,l.kt)("td",{parentName:"tr",align:null},"Set the number of topics."),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"partitions"),(0,l.kt)("td",{parentName:"tr",align:null},"Configure whether to create partitioned topics with the given number of partitions."),(0,l.kt)("td",{parentName:"tr",align:null},"N/A")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"payload-delimiter"),(0,l.kt)("td",{parentName:"tr",align:null},"Set the delimiter used to split lines when using payload from a file."),(0,l.kt)("td",{parentName:"tr",align:null},"\\n")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"payload-file"),(0,l.kt)("td",{parentName:"tr",align:null},"Use the payload from an UTF-8 encoded text file and a payload is randomly selected when messages are published."),(0,l.kt)("td",{parentName:"tr",align:null},"N/A")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"producer-name"),(0,l.kt)("td",{parentName:"tr",align:null},"Set the producer name."),(0,l.kt)("td",{parentName:"tr",align:null},"N/A")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"rate"),(0,l.kt)("td",{parentName:"tr",align:null},"Set the publish rate of messages across topics."),(0,l.kt)("td",{parentName:"tr",align:null},"100")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"send-timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"Set the sendTimeout."),(0,l.kt)("td",{parentName:"tr",align:null},"0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"separator"),(0,l.kt)("td",{parentName:"tr",align:null},"Set the separator between the topic and topic number."),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"service-url"),(0,l.kt)("td",{parentName:"tr",align:null},"Set the Pulsar service URL."),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"size"),(0,l.kt)("td",{parentName:"tr",align:null},"Set the message size."),(0,l.kt)("td",{parentName:"tr",align:null},"1024 bytes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"stats-interval-seconds"),(0,l.kt)("td",{parentName:"tr",align:null},"Set the statistics interval. If it is set to 0, statistics is disabled."),(0,l.kt)("td",{parentName:"tr",align:null},"0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"test-duration"),(0,l.kt)("td",{parentName:"tr",align:null},"Set the test duration. If it is set to 0, it keeps publishing tests."),(0,l.kt)("td",{parentName:"tr",align:null},"0s")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"trust-cert-file"),(0,l.kt)("td",{parentName:"tr",align:null},"Set the path for the trusted TLS certificate file."),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"warmup-time"),(0,l.kt)("td",{parentName:"tr",align:null},"Set the warm-up time."),(0,l.kt)("td",{parentName:"tr",align:null},"1s")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tls-allow-insecure"),(0,l.kt)("td",{parentName:"tr",align:null},"Set the allowed insecure TLS connection."),(0,l.kt)("td",{parentName:"tr",align:null},"N/A")))),(0,l.kt)("h2",{id:"consume-messages"},"Consume messages"),(0,l.kt)("p",null,"This example shows how the Pulsar Perf consumes messages with default options."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\nbin/pulsar-perf consume my-topic\n\n")),(0,l.kt)("p",null,"After the command is executed, the test data is continuously output on the Console."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Output")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\n20:35:37.071 [main] INFO  org.apache.pulsar.testclient.PerformanceConsumer - Start receiving from 1 consumers on 1 topics\n20:35:41.150 [pulsar-client-io-1-9] WARN  com.scurrilous.circe.checksum.Crc32cIntChecksum - Failed to load Circe JNI library. Falling back to Java based CRC32c provider\n20:35:47.092 [main] INFO  org.apache.pulsar.testclient.PerformanceConsumer - Throughput received: 59.572  msg/s -- 0.465 Mbit/s --- Latency: mean: 11.298 ms - med: 10 - 95pct: 15 - 99pct: 98 - 99.9pct: 137 - 99.99pct: 152 - Max: 152\n20:35:57.104 [main] INFO  org.apache.pulsar.testclient.PerformanceConsumer - Throughput received: 99.958  msg/s -- 0.781 Mbit/s --- Latency: mean: 9.176 ms - med: 9 - 95pct: 15 - 99pct: 16 - 99.9pct: 17 - 99.99pct: 18 - Max: 18\n20:36:07.115 [main] INFO  org.apache.pulsar.testclient.PerformanceConsumer - Throughput received: 100.006  msg/s -- 0.781 Mbit/s --- Latency: mean: 9.316 ms - med: 9 - 95pct: 15 - 99pct: 16 - 99.9pct: 17 - 99.99pct: 17 - Max: 17\n20:36:17.125 [main] INFO  org.apache.pulsar.testclient.PerformanceConsumer - Throughput received: 100.085  msg/s -- 0.782 Mbit/s --- Latency: mean: 9.327 ms - med: 9 - 95pct: 15 - 99pct: 16 - 99.9pct: 17 - 99.99pct: 17 - Max: 17\n20:36:27.136 [main] INFO  org.apache.pulsar.testclient.PerformanceConsumer - Throughput received: 99.900  msg/s -- 0.780 Mbit/s --- Latency: mean: 9.404 ms - med: 9 - 95pct: 15 - 99pct: 16 - 99.9pct: 17 - 99.99pct: 17 - Max: 17\n20:36:37.147 [main] INFO  org.apache.pulsar.testclient.PerformanceConsumer - Throughput received: 99.985  msg/s -- 0.781 Mbit/s --- Latency: mean: 8.998 ms - med: 9 - 95pct: 15 - 99pct: 16 - 99.9pct: 17 - 99.99pct: 17 - Max: 17\n^C20:36:42.755 [Thread-1] INFO  org.apache.pulsar.testclient.PerformanceConsumer - Aggregated throughput stats --- 6051 records received --- 92.125 msg/s --- 0.720 Mbit/s\n20:36:42.759 [Thread-1] INFO  org.apache.pulsar.testclient.PerformanceConsumer - Aggregated latency stats --- Latency: mean: 9.422 ms - med: 9 - 95pct: 15 - 99pct: 16 - 99.9pct: 98 - 99.99pct: 137 - 99.999pct: 152 - Max: 152\n\n")),(0,l.kt)("p",null,"From the output test data, you can get the throughput statistics and the end-to-end latency statistics. The aggregated statistics is printed after the Pulsar Perf is stopped. You can press ",(0,l.kt)("strong",{parentName:"p"},"Ctrl"),"+",(0,l.kt)("strong",{parentName:"p"},"C")," to stop the Pulsar Perf."),(0,l.kt)("h3",{id:"configuration-options-for-pulsar-perf-consume"},"Configuration options for ",(0,l.kt)("inlineCode",{parentName:"h3"},"pulsar-perf consume")),(0,l.kt)("p",null,"You can get all options by executing the ",(0,l.kt)("inlineCode",{parentName:"p"},"bin/pulsar-perf consume -h")," command. Therefore, you can modify these options as required."),(0,l.kt)("p",null,"The following table lists configuration options available for the ",(0,l.kt)("inlineCode",{parentName:"p"},"pulsar-perf consume")," command."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"acks-delay-millis"),(0,l.kt)("td",{parentName:"tr",align:null},"Set the acknowledgment grouping delay in milliseconds."),(0,l.kt)("td",{parentName:"tr",align:null},"100 ms")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"auth-params"),(0,l.kt)("td",{parentName:"tr",align:null},"Set the authentication parameters, whose format is determined by the implementation of the ",(0,l.kt)("inlineCode",{parentName:"td"},"configure"),' method in the authentication plugin class, such as "key1:val1,key2:val2" or "{"key1":"val1","key2":"val2"}".'),(0,l.kt)("td",{parentName:"tr",align:null},"N/A")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"auth-plugin"),(0,l.kt)("td",{parentName:"tr",align:null},"Set the authentication plugin class name."),(0,l.kt)("td",{parentName:"tr",align:null},"N/A")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"auto_ack_chunk_q_full"),(0,l.kt)("td",{parentName:"tr",align:null},"Configure whether to automatically ack for the oldest message in receiver queue if the queue is full."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"listener-name"),(0,l.kt)("td",{parentName:"tr",align:null},"Set the listener name for the broker."),(0,l.kt)("td",{parentName:"tr",align:null},"N/A")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"batch-index-ack"),(0,l.kt)("td",{parentName:"tr",align:null},"Enable or disable the batch index acknowledgment."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"busy-wait"),(0,l.kt)("td",{parentName:"tr",align:null},"Enable or disable Busy-Wait on the Pulsar client."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"conf-file"),(0,l.kt)("td",{parentName:"tr",align:null},"Set the configuration file."),(0,l.kt)("td",{parentName:"tr",align:null},"N/A")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"encryption-key-name"),(0,l.kt)("td",{parentName:"tr",align:null},"Set the name of the public key used to encrypt the payload."),(0,l.kt)("td",{parentName:"tr",align:null},"N/A")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"encryption-key-value-file"),(0,l.kt)("td",{parentName:"tr",align:null},"Set the file which contains the public key used to encrypt the payload."),(0,l.kt)("td",{parentName:"tr",align:null},"N/A")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"help"),(0,l.kt)("td",{parentName:"tr",align:null},"Configure the help message."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"histogram-file"),(0,l.kt)("td",{parentName:"tr",align:null},"HdrHistogram output file"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"expire_time_incomplete_chunked_messages"),(0,l.kt)("td",{parentName:"tr",align:null},"Set the expiration time for incomplete chunk messages (in milliseconds)."),(0,l.kt)("td",{parentName:"tr",align:null},"0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"max-connections"),(0,l.kt)("td",{parentName:"tr",align:null},"Set the maximum number of TCP connections to a single broker."),(0,l.kt)("td",{parentName:"tr",align:null},"100")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"max_chunked_msg"),(0,l.kt)("td",{parentName:"tr",align:null},"Set the max pending chunk messages."),(0,l.kt)("td",{parentName:"tr",align:null},"0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"num-consumers"),(0,l.kt)("td",{parentName:"tr",align:null},"Set the number of consumers for each topic."),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"num-io-threads"),(0,l.kt)("td",{parentName:"tr",align:null},"Set the number of threads to be used for handling connections to brokers."),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"num-subscriptions"),(0,l.kt)("td",{parentName:"tr",align:null},"Set the number of subscriptions (per topic)."),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"num-topic"),(0,l.kt)("td",{parentName:"tr",align:null},"Set the number of topics."),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pool-messages"),(0,l.kt)("td",{parentName:"tr",align:null},"Configure whether to use the pooled message."),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"rate"),(0,l.kt)("td",{parentName:"tr",align:null},"Simulate a slow message consumer (rate in msg/s)."),(0,l.kt)("td",{parentName:"tr",align:null},"0.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"receiver-queue-size"),(0,l.kt)("td",{parentName:"tr",align:null},"Set the size of the receiver queue."),(0,l.kt)("td",{parentName:"tr",align:null},"1000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"receiver-queue-size-across-partitions"),(0,l.kt)("td",{parentName:"tr",align:null},"Set the max total size of the receiver queue across partitions."),(0,l.kt)("td",{parentName:"tr",align:null},"50000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"replicated"),(0,l.kt)("td",{parentName:"tr",align:null},"Configure whether the subscription status should be replicated."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"service-url"),(0,l.kt)("td",{parentName:"tr",align:null},"Set the Pulsar service URL."),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"stats-interval-seconds"),(0,l.kt)("td",{parentName:"tr",align:null},"Set the statistics interval. If it is set to 0, statistics is disabled."),(0,l.kt)("td",{parentName:"tr",align:null},"0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"subscriber-name"),(0,l.kt)("td",{parentName:"tr",align:null},"Set the subscriber name prefix."),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"subscription-position"),(0,l.kt)("td",{parentName:"tr",align:null},"Set the subscription position. Valid values are ",(0,l.kt)("inlineCode",{parentName:"td"},"Latest"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"Earliest"),"."),(0,l.kt)("td",{parentName:"tr",align:null},"Latest")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"subscription-type"),(0,l.kt)("td",{parentName:"tr",align:null},"Set the subscription type. ",(0,l.kt)("li",null," Exclusive "),(0,l.kt)("li",null," Shared "),(0,l.kt)("li",null," Failover "),(0,l.kt)("li",null," Key_Shared ")),(0,l.kt)("td",{parentName:"tr",align:null},"Exclusive")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"test-duration"),(0,l.kt)("td",{parentName:"tr",align:null},"Set the test duration (in seconds). If the value is 0 or smaller than 0, it keeps consuming messages."),(0,l.kt)("td",{parentName:"tr",align:null},"0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tls-allow-insecure"),(0,l.kt)("td",{parentName:"tr",align:null},"Set the allowed insecure TLS connection."),(0,l.kt)("td",{parentName:"tr",align:null},"N/A")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"trust-cert-file"),(0,l.kt)("td",{parentName:"tr",align:null},"Set the path for the trusted TLS certificate file."),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h2",{id:"configurations"},"Configurations"),(0,l.kt)("p",null,"By default, the Pulsar Perf uses ",(0,l.kt)("inlineCode",{parentName:"p"},"conf/client.conf")," as the default configuration and uses ",(0,l.kt)("inlineCode",{parentName:"p"},"conf/log4j2.yaml")," as the default Log4j configuration. If you want to connect to other Pulsar clusters, you can update the ",(0,l.kt)("inlineCode",{parentName:"p"},"brokerServiceUrl")," in the client configuration."),(0,l.kt)("p",null,"You can use the following commands to change the configuration file and the Log4j configuration file."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\nexport PULSAR_CLIENT_CONF=<your-config-file>\nexport PULSAR_LOG_CONF=<your-log-config-file>\n\n")),(0,l.kt)("p",null,"In addition, you can use the following command to configure the JVM configuration through environment variables:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\nexport PULSAR_EXTRA_OPTS='-Xms4g -Xmx4g -XX:MaxDirectMemorySize=4g'\n\n")),(0,l.kt)("h2",{id:"hdrhistogram-plotter"},"HdrHistogram Plotter"),(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"https://hdrhistogram.github.io/HdrHistogram/plotFiles.html"},"HdrHistogram Plotter")," is a visualization tool for checking Pulsar Perf test results, which makes it easier to observe the test results."),(0,l.kt)("p",null,"To check test results through the HdrHistogram Plotter, follow these steps:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Clone the HdrHistogram repository from GitHub to the local."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"\ngit clone https://github.com/HdrHistogram/HdrHistogram.git\n\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Switch to the HdrHistogram folder."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"\ncd HdrHistogram\n\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Install the HdrHistogram Plotter."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"\nmvn clean install -DskipTests\n\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Transform the file generated by the Pulsar Perf."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"\n./HistogramLogProcessor -i <hgrm file path that pulsar-perf generated> -o <output file>\n\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"You will get two output files. Upload the output file with the filename extension of .hgrm to the ",(0,l.kt)("a",{parentName:"p",href:"https://hdrhistogram.github.io/HdrHistogram/plotFiles.html"},"HdrHistogram Plotter"),".")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Check the test result through the Graphical User Interface of the HdrHistogram Plotter, as shown blow."),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{loading:"lazy",src:a(905).Z,width:"3356",height:"1328"})))))}c.isMDXComponent=!0},905:function(t,e,a){e.Z=a.p+"assets/images/perf-produce-493b74d7a0a3ecb764cb21cabd8746b5.png"}}]);