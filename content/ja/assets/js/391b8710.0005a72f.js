"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[57776],{3905:function(e,a,t){t.d(a,{Zo:function(){return u},kt:function(){return c}});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),p=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},u=function(e){var a=p(e.components);return n.createElement(s.Provider,{value:a},e.children)},k={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(t),c=r,d=m["".concat(s,".").concat(c)]||m[c]||k[c]||l;return t?n.createElement(d,o(o({ref:a},u),{},{components:t})):n.createElement(d,o({ref:a},u))}));function c(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=m;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},47398:function(e,a,t){t.r(a),t.d(a,{assets:function(){return u},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return k}});var n=t(87462),r=t(63366),l=(t(67294),t(3905)),o=["components"],i={id:"io-kafka-source",title:"Kafka source connector",sidebar_label:"Kafka source connector",original_id:"io-kafka-source"},s=void 0,p={unversionedId:"io-kafka-source",id:"version-2.9.1/io-kafka-source",title:"Kafka source connector",description:"The Kafka source connector pulls messages from Kafka topics and persists the messages to Pulsar topics.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-2.9.1/io-kafka-source.md",sourceDirName:".",slug:"/io-kafka-source",permalink:"/ja/docs/io-kafka-source",editUrl:"https://github.com/apache/pulsar/edit/master/site2/website-next/versioned_docs/version-2.9.1/io-kafka-source.md",tags:[],version:"2.9.1",frontMatter:{id:"io-kafka-source",title:"Kafka source connector",sidebar_label:"Kafka source connector",original_id:"io-kafka-source"}},u={},k=[{value:"Configuration",id:"configuration",level:2},{value:"Property",id:"property",level:3},{value:"Schema Management",id:"schema-management",level:3},{value:"Example",id:"example",level:3},{value:"Usage",id:"usage",level:2}],m={toc:k};function c(e){var a=e.components,t=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The Kafka source connector pulls messages from Kafka topics and persists the messages to Pulsar topics."),(0,l.kt)("p",null,"This guide explains how to configure and use the Kafka source connector."),(0,l.kt)("h2",{id:"configuration"},"Configuration"),(0,l.kt)("p",null,"The configuration of the Kafka source connector has the following properties."),(0,l.kt)("h3",{id:"property"},"Property"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"bootstrapServers")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,l.kt)("td",{parentName:"tr",align:null},"A comma-separated list of host and port pairs for establishing the initial connection to the Kafka cluster.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"groupId")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,l.kt)("td",{parentName:"tr",align:null},"A unique string that identifies the group of consumer processes to which this consumer belongs.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"fetchMinBytes")),(0,l.kt)("td",{parentName:"tr",align:null},"long"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"The minimum byte expected for each fetch response.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"autoCommitEnabled")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"If set to true, the consumer's offset is periodically committed in the background.",(0,l.kt)("br",null),(0,l.kt)("br",null)," This committed offset is used when the process fails as the position from which a new consumer begins.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"autoCommitIntervalMs")),(0,l.kt)("td",{parentName:"tr",align:null},"long"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"5000"),(0,l.kt)("td",{parentName:"tr",align:null},"The frequency in milliseconds that the consumer offsets are auto-committed to Kafka if ",(0,l.kt)("inlineCode",{parentName:"td"},"autoCommitEnabled")," is set to true.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"heartbeatIntervalMs")),(0,l.kt)("td",{parentName:"tr",align:null},"long"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"3000"),(0,l.kt)("td",{parentName:"tr",align:null},"The interval between heartbeats to the consumer when using Kafka's group management facilities. ",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Note: ",(0,l.kt)("inlineCode",{parentName:"strong"},"heartbeatIntervalMs")," must be smaller than ",(0,l.kt)("inlineCode",{parentName:"strong"},"sessionTimeoutMs")),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"sessionTimeoutMs")),(0,l.kt)("td",{parentName:"tr",align:null},"long"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"30000"),(0,l.kt)("td",{parentName:"tr",align:null},"The timeout used to detect consumer failures when using Kafka's group management facility.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"topic")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,l.kt)("td",{parentName:"tr",align:null},"The Kafka topic which sends messages to Pulsar.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"consumerConfigProperties")),(0,l.kt)("td",{parentName:"tr",align:null},"Map"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,l.kt)("td",{parentName:"tr",align:null},"The consumer configuration properties to be passed to consumers. ",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Note: other properties specified in the connector configuration file take precedence over this configuration"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"keyDeserializationClass")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"org.apache.kafka.common.serialization.StringDeserializer"),(0,l.kt)("td",{parentName:"tr",align:null},"The deserializer class for Kafka consumers to deserialize keys.",(0,l.kt)("br",null)," The deserializer is set by a specific implementation of ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/apache/pulsar/blob/master/pulsar-io/kafka/src/main/java/org/apache/pulsar/io/kafka/KafkaAbstractSource.java"},(0,l.kt)("inlineCode",{parentName:"a"},"KafkaAbstractSource")),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"valueDeserializationClass")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"org.apache.kafka.common.serialization.ByteArrayDeserializer"),(0,l.kt)("td",{parentName:"tr",align:null},"The deserializer class for Kafka consumers to deserialize values.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"autoOffsetReset")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},'"earliest"'),(0,l.kt)("td",{parentName:"tr",align:null},"The default offset reset policy.")))),(0,l.kt)("h3",{id:"schema-management"},"Schema Management"),(0,l.kt)("p",null,"This Kafka source connector applies the schema to the topic depending on the data type that is present on the Kafka topic. You can detect the data type from the ",(0,l.kt)("inlineCode",{parentName:"p"},"keyDeserializationClass")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"valueDeserializationClass")," configuration parameters."),(0,l.kt)("p",null,"If the ",(0,l.kt)("inlineCode",{parentName:"p"},"valueDeserializationClass")," is ",(0,l.kt)("inlineCode",{parentName:"p"},"org.apache.kafka.common.serialization.StringDeserializer"),", you can set Schema.STRING() as schema type on the Pulsar topic."),(0,l.kt)("p",null,"If ",(0,l.kt)("inlineCode",{parentName:"p"},"valueDeserializationClass")," is ",(0,l.kt)("inlineCode",{parentName:"p"},"io.confluent.kafka.serializers.KafkaAvroDeserializer"),", Pulsar downloads the AVRO schema from the Confluent Schema Registry\xae and sets it properly on the Pulsar topic."),(0,l.kt)("p",null,"In this case, you need to set ",(0,l.kt)("inlineCode",{parentName:"p"},"schema.registry.url")," inside of the ",(0,l.kt)("inlineCode",{parentName:"p"},"consumerConfigProperties")," configuration entry of the source."),(0,l.kt)("p",null,"If ",(0,l.kt)("inlineCode",{parentName:"p"},"keyDeserializationClass")," is not ",(0,l.kt)("inlineCode",{parentName:"p"},"org.apache.kafka.common.serialization.StringDeserializer"),", it means that you do not have a String as key and the Kafka Source uses the KeyValue schema type with the SEPARATED encoding."),(0,l.kt)("p",null,"Pulsar supports AVRO format for keys."),(0,l.kt)("p",null,"In this case, you can have a Pulsar topic with the following properties:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Schema: KeyValue schema with SEPARATED encoding"),(0,l.kt)("li",{parentName:"ul"},"Key: the content of key of the Kafka message (base64 encoded)"),(0,l.kt)("li",{parentName:"ul"},"Value: the content of value of the Kafka message"),(0,l.kt)("li",{parentName:"ul"},"KeySchema: the schema detected from ",(0,l.kt)("inlineCode",{parentName:"li"},"keyDeserializationClass")),(0,l.kt)("li",{parentName:"ul"},"ValueSchema: the schema detected from ",(0,l.kt)("inlineCode",{parentName:"li"},"valueDeserializationClass"))),(0,l.kt)("p",null,"Topic compaction and partition routing use the Pulsar key, that contains the Kafka key, and so they are driven by the same value that you have on Kafka."),(0,l.kt)("p",null,"When you consume data from Pulsar topics, you can use the ",(0,l.kt)("inlineCode",{parentName:"p"},"KeyValue")," schema. In this way, you can decode the data properly. If you want to access the raw key, you can use the ",(0,l.kt)("inlineCode",{parentName:"p"},"Message#getKeyBytes()")," API."),(0,l.kt)("h3",{id:"example"},"Example"),(0,l.kt)("p",null,"Before using the Kafka source connector, you need to create a configuration file through one of the following methods."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"JSON"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-json"},'\n{\n    "bootstrapServers": "pulsar-kafka:9092",\n    "groupId": "test-pulsar-io",\n    "topic": "my-topic",\n    "sessionTimeoutMs": "10000",\n    "autoCommitEnabled": false\n}\n\n'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"YAML"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'\nconfigs:\n    bootstrapServers: "pulsar-kafka:9092"\n    groupId: "test-pulsar-io"\n    topic: "my-topic"\n    sessionTimeoutMs: "10000"\n    autoCommitEnabled: false\n\n')))),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("p",null,"Here is an example of using the Kafka source connector with the configuration file as shown previously."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Download a Kafka client and a Kafka connector."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ wget https://repo1.maven.org/maven2/org/apache/kafka/kafka-clients/0.10.2.1/kafka-clients-0.10.2.1.jar\n\n$ wget https://archive.apache.org/dist/pulsar/pulsar-2.4.0/connectors/pulsar-io-kafka-2.4.0.nar\n\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Create a network."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ docker network create kafka-pulsar\n\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Pull a ZooKeeper image and start ZooKeeper."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ docker pull wurstmeister/zookeeper\n\n$ docker run -d -it -p 2181:2181 --name pulsar-kafka-zookeeper --network kafka-pulsar wurstmeister/zookeeper\n\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Pull a Kafka image and start Kafka."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ docker pull wurstmeister/kafka:2.11-1.0.2\n\n$ docker run -d -it --network kafka-pulsar -p 6667:6667 -p 9092:9092 -e KAFKA_ADVERTISED_HOST_NAME=pulsar-kafka -e KAFKA_ZOOKEEPER_CONNECT=pulsar-kafka-zookeeper:2181 --name pulsar-kafka wurstmeister/kafka:2.11-1.0.2\n\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Pull a Pulsar image and start Pulsar standalone."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ docker pull apachepulsar/pulsar:@pulsar:version@\n\n$ docker run -d -it --network kafka-pulsar -p 6650:6650 -p 8080:8080 -v $PWD/data:/pulsar/data --name pulsar-kafka-standalone apachepulsar/pulsar:2.4.0 bin/pulsar standalone\n\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Create a producer file ",(0,l.kt)("em",{parentName:"p"},"kafka-producer.py"),"."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-python"},"\nfrom kafka import KafkaProducer\nproducer = KafkaProducer(bootstrap_servers='pulsar-kafka:9092')\nfuture = producer.send('my-topic', b'hello world')\nfuture.get()\n\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Create a consumer file ",(0,l.kt)("em",{parentName:"p"},"pulsar-client.py"),"."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-python"},"\nimport pulsar\n\nclient = pulsar.Client('pulsar://localhost:6650')\nconsumer = client.subscribe('my-topic', subscription_name='my-aa')\n\nwhile True:\n    msg = consumer.receive()\n    print msg\n    print dir(msg)\n    print(\"Received message: '%s'\" % msg.data())\n    consumer.acknowledge(msg)\n\nclient.close()\n\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Copy the following files to Pulsar."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ docker cp pulsar-io-kafka-@pulsar:version@.nar pulsar-kafka-standalone:/pulsar\n$ docker cp kafkaSourceConfig.yaml pulsar-kafka-standalone:/pulsar/conf\n$ docker cp pulsar-client.py pulsar-kafka-standalone:/pulsar/\n$ docker cp kafka-producer.py pulsar-kafka-standalone:/pulsar/\n\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Open a new terminal window and start the Kafka source connector in local run mode."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ docker exec -it pulsar-kafka-standalone /bin/bash\n\n$ ./bin/pulsar-admin source localrun \\\n--archive ./pulsar-io-kafka-@pulsar:version@.nar \\\n--classname org.apache.pulsar.io.kafka.KafkaBytesSource \\\n--tenant public \\\n--namespace default \\\n--name kafka \\\n--destination-topic-name my-topic \\\n--source-config-file ./conf/kafkaSourceConfig.yaml \\\n--parallelism 1\n\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Open a new terminal window and run the consumer."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ docker exec -it pulsar-kafka-standalone /bin/bash\n\n$ pip install kafka-python\n\n$ python3 kafka-producer.py\n\n")),(0,l.kt)("p",{parentName:"li"},"The following information appears on the consumer terminal window."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\nReceived message: 'hello world'\n\n")))))}c.isMDXComponent=!0}}]);