"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[93021],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(t),d=r,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||l;return t?a.createElement(h,i(i({ref:n},c),{},{components:t})):a.createElement(h,i({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=u;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},58215:function(e,n,t){t.d(n,{Z:function(){return r}});var a=t(67294);function r(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},9877:function(e,n,t){t.d(n,{Z:function(){return c}});var a=t(87462),r=t(67294),l=t(72389),i=t(63725),o=t(86010),s="tabItem_LplD";function p(e){var n,t,l,p=e.lazy,c=e.block,m=e.defaultValue,u=e.values,d=e.groupId,h=e.className,k=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=u?u:k.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),y=(0,i.lx)(g,(function(e,n){return e.value===n.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var f=null===m?m:null!=(n=null!=m?m:null==(t=k.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(l=k[0])?void 0:l.props.value;if(null!==f&&!g.some((function(e){return e.value===f})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,i.UB)(),b=N.tabGroupChoices,v=N.setTabGroupChoices,x=(0,r.useState)(f),C=x[0],S=x[1],w=[],P=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var _=b[d];null!=_&&_!==C&&g.some((function(e){return e.value===_}))&&S(_)}var T=function(e){var n=e.currentTarget,t=w.indexOf(n),a=g[t].value;a!==C&&(P(n),S(a),null!=d&&v(d,a))},E=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=w.indexOf(e.currentTarget)+1;t=w[a]||w[0];break;case"ArrowLeft":var r=w.indexOf(e.currentTarget)-1;t=w[r]||w[w.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":c},h)},g.map((function(e){var n=e.value,t=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===n?0:-1,"aria-selected":C===n,key:n,ref:function(e){return w.push(e)},onKeyDown:E,onFocus:T,onClick:T},l,{className:(0,o.Z)("tabs__item",s,null==l?void 0:l.className,{"tabs__item--active":C===n})}),null!=t?t:n)}))),p?(0,r.cloneElement)(k.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==C})}))))}function c(e){var n=(0,l.Z)();return r.createElement(p,(0,a.Z)({key:String(n)},e))}},20950:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return k},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return d}});var a=t(87462),r=t(63366),l=(t(67294),t(3905)),i=t(9877),o=t(58215),s=["components"],p={id:"client-libraries-python",title:"Pulsar Python client",sidebar_label:"Python"},c=void 0,m={unversionedId:"client-libraries-python",id:"client-libraries-python",title:"Pulsar Python client",description:"Pulsar Python client library is a wrapper over the existing C++ client library and exposes all of the same features. You can find the code in the Python directory of the C++ client code.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/client-libraries-python.md",sourceDirName:".",slug:"/client-libraries-python",permalink:"/ko/docs/next/client-libraries-python",editUrl:"https://github.com/apache/pulsar/edit/master/site2/website-next/docs/client-libraries-python.md",tags:[],version:"current",frontMatter:{id:"client-libraries-python",title:"Pulsar Python client",sidebar_label:"Python"},sidebar:"docsSidebar",previous:{title:"Go",permalink:"/ko/docs/next/client-libraries-go"},next:{title:"C++",permalink:"/ko/docs/next/client-libraries-cpp"}},u={},d=[{value:"Install",id:"install",level:2},{value:"Install using pip",id:"install-using-pip",level:3},{value:"Optional dependencies",id:"optional-dependencies",level:3},{value:"Install from source",id:"install-from-source",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Examples",id:"examples",level:2},{value:"Producer example",id:"producer-example",level:3},{value:"Consumer example",id:"consumer-example",level:3},{value:"Reader interface example",id:"reader-interface-example",level:3},{value:"Multi-topic subscriptions",id:"multi-topic-subscriptions",level:3},{value:"Schema",id:"schema",level:2},{value:"Supported schema types",id:"supported-schema-types",level:3},{value:"Schema definition reference",id:"schema-definition-reference",level:3},{value:"Fields parameters",id:"fields-parameters",level:4},{value:"Schema definition examples",id:"schema-definition-examples",level:4},{value:"Simple definition",id:"simple-definition",level:5},{value:"Using enums",id:"using-enums",level:5},{value:"Complex types",id:"complex-types",level:5},{value:"Set namespace for Avro schema",id:"set-namespace-for-avro-schema",level:5},{value:"Declare and validate schema",id:"declare-and-validate-schema",level:3},{value:"Method 1: Record",id:"method-1-record",level:4},{value:"Method 2: JSON definition",id:"method-2-json-definition",level:4},{value:"Record",id:"record",level:4},{value:"End-to-end encryption",id:"end-to-end-encryption",level:2},{value:"Configuration",id:"configuration",level:3},{value:"Tutorial",id:"tutorial",level:3}],h={toc:d};function k(e){var n=e.components,t=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,a.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Pulsar Python client library is a wrapper over the existing ",(0,l.kt)("a",{parentName:"p",href:"client-libraries-cpp"},"C++ client library")," and exposes all of the ",(0,l.kt)("a",{parentName:"p",href:"/api/cpp"},"same features"),". You can find the code in the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/tree/master/pulsar-client-cpp/python"},"Python directory")," of the C++ client code."),(0,l.kt)("p",null,"All the methods in producer, consumer, and reader of a Python client are thread-safe."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/BurntSushi/pdoc"},"pdoc"),"-generated API docs for the Python client are available ",(0,l.kt)("a",{parentName:"p",href:"/api/python"},"here"),"."),(0,l.kt)("h2",{id:"install"},"Install"),(0,l.kt)("p",null,"You can install the ",(0,l.kt)("a",{parentName:"p",href:"https://pypi.python.org/pypi/pulsar-client"},(0,l.kt)("inlineCode",{parentName:"a"},"pulsar-client"))," library either via ",(0,l.kt)("a",{parentName:"p",href:"https://pypi.python.org/pypi"},"PyPi"),", using ",(0,l.kt)("a",{parentName:"p",href:"#installation-using-pip"},"pip"),", or by building the library from ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/tree/master/pulsar-client-cpp"},"source"),"."),(0,l.kt)("h3",{id:"install-using-pip"},"Install using pip"),(0,l.kt)("p",null,"To install the ",(0,l.kt)("inlineCode",{parentName:"p"},"pulsar-client")," library as a pre-built package using the ",(0,l.kt)("a",{parentName:"p",href:"https://pip.pypa.io/en/stable/"},"pip")," package manager:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pip install pulsar-client==@pulsar:version_number@\n\n")),(0,l.kt)("h3",{id:"optional-dependencies"},"Optional dependencies"),(0,l.kt)("p",null,"If you install the client libraries on Linux to support services like Pulsar functions or Avro serialization, you can install optional components alongside the  ",(0,l.kt)("inlineCode",{parentName:"p"},"pulsar-client")," library."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\n# avro serialization\n$ pip install pulsar-client[avro]=='@pulsar:version_number@'\n\n# functions runtime\n$ pip install pulsar-client[functions]=='@pulsar:version_number@'\n\n# all optional components\n$ pip install pulsar-client[all]=='@pulsar:version_number@'\n\n")),(0,l.kt)("p",null,"Installation via PyPi is available for the following Python versions:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Platform"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Supported Python versions"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"MacOS ",(0,l.kt)("br",null),"  10.13 (High Sierra), 10.14 (Mojave) ",(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:"left"},"2.7, 3.7, 3.8, 3.9")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Linux"),(0,l.kt)("td",{parentName:"tr",align:"left"},"2.7, 3.4, 3.5, 3.6, 3.7, 3.8, 3.9")))),(0,l.kt)("h3",{id:"install-from-source"},"Install from source"),(0,l.kt)("p",null,"To install the ",(0,l.kt)("inlineCode",{parentName:"p"},"pulsar-client")," library by building from source, follow ",(0,l.kt)("a",{parentName:"p",href:"/ko/docs/next/client-libraries-cpp#compilation"},"instructions")," and compile the Pulsar C++ client library. That builds the Python binding for the library."),(0,l.kt)("p",null,"To install the built Python bindings:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ git clone https://github.com/apache/pulsar\n$ cd pulsar/pulsar-client-cpp/python\n$ sudo python setup.py install\n\n")),(0,l.kt)("h2",{id:"api-reference"},"API Reference"),(0,l.kt)("p",null,"The complete Python API reference is available at ",(0,l.kt)("a",{parentName:"p",href:"/api/python"},"api/python"),"."),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("p",null,"You can find a variety of Python code examples for the ",(0,l.kt)("a",{parentName:"p",href:"/pulsar-client-cpp/python"},"pulsar-client")," library."),(0,l.kt)("h3",{id:"producer-example"},"Producer example"),(0,l.kt)("p",null,"The following example creates a Python producer for the ",(0,l.kt)("inlineCode",{parentName:"p"},"my-topic")," topic and sends 10 messages on that topic:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"\nimport pulsar\n\nclient = pulsar.Client('pulsar://localhost:6650')\n\nproducer = client.create_producer('my-topic')\n\nfor i in range(10):\n    producer.send(('Hello-%d' % i).encode('utf-8'))\n\nclient.close()\n\n")),(0,l.kt)("h3",{id:"consumer-example"},"Consumer example"),(0,l.kt)("p",null,"The following example creates a consumer with the ",(0,l.kt)("inlineCode",{parentName:"p"},"my-subscription")," subscription name on the ",(0,l.kt)("inlineCode",{parentName:"p"},"my-topic")," topic, receives incoming messages, prints the content and ID of messages that arrive, and acknowledges each message to the Pulsar broker."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"\nimport pulsar\n\nclient = pulsar.Client('pulsar://localhost:6650')\n\nconsumer = client.subscribe('my-topic', 'my-subscription')\n\nwhile True:\n    msg = consumer.receive()\n    try:\n        print(\"Received message '{}' id='{}'\".format(msg.data(), msg.message_id()))\n        # Acknowledge successful processing of the message\n        consumer.acknowledge(msg)\n    except Exception:\n        # Message failed to be processed\n        consumer.negative_acknowledge(msg)\n\nclient.close()\n\n")),(0,l.kt)("p",null,"This example shows how to configure negative acknowledgement."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"\nfrom pulsar import Client, schema\nclient = Client('pulsar://localhost:6650')\nconsumer = client.subscribe('negative_acks','test',schema=schema.StringSchema())\nproducer = client.create_producer('negative_acks',schema=schema.StringSchema())\nfor i in range(10):\n    print('send msg \"hello-%d\"' % i)\n    producer.send_async('hello-%d' % i, callback=None)\nproducer.flush()\nfor i in range(10):\n    msg = consumer.receive()\n    consumer.negative_acknowledge(msg)\n    print('receive and nack msg \"%s\"' % msg.data())\nfor i in range(10):\n    msg = consumer.receive()\n    consumer.acknowledge(msg)\n    print('receive and ack msg \"%s\"' % msg.data())\ntry:\n    # No more messages expected\n    msg = consumer.receive(100)\nexcept:\n    print(\"no more msg\")\n    pass\n\n")),(0,l.kt)("h3",{id:"reader-interface-example"},"Reader interface example"),(0,l.kt)("p",null,"You can use the Pulsar Python API to use the Pulsar ",(0,l.kt)("a",{parentName:"p",href:"/ko/docs/next/concepts-clients#reader-interface"},"reader interface"),". Here's an example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"\n# MessageId taken from a previously fetched message\nmsg_id = msg.message_id()\n\nreader = client.create_reader('my-topic', msg_id)\n\nwhile True:\n    msg = reader.read_next()\n    print(\"Received message '{}' id='{}'\".format(msg.data(), msg.message_id()))\n    # No acknowledgment\n\n")),(0,l.kt)("h3",{id:"multi-topic-subscriptions"},"Multi-topic subscriptions"),(0,l.kt)("p",null,"In addition to subscribing a consumer to a single Pulsar topic, you can also subscribe to multiple topics simultaneously. To use multi-topic subscriptions, you can supply a regular expression (regex) or a ",(0,l.kt)("inlineCode",{parentName:"p"},"List")," of topics. If you select topics via regex, all topics must be within the same Pulsar namespace."),(0,l.kt)("p",null,"The following is an example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"\nimport re\nconsumer = client.subscribe(re.compile('persistent://public/default/topic-*'), 'my-subscription')\nwhile True:\n    msg = consumer.receive()\n    try:\n        print(\"Received message '{}' id='{}'\".format(msg.data(), msg.message_id()))\n        # Acknowledge successful processing of the message\n        consumer.acknowledge(msg)\n    except Exception:\n        # Message failed to be processed\n        consumer.negative_acknowledge(msg)\nclient.close()\n\n")),(0,l.kt)("h2",{id:"schema"},"Schema"),(0,l.kt)("h3",{id:"supported-schema-types"},"Supported schema types"),(0,l.kt)("p",null,"You can use different builtin schema types in Pulsar. All the definitions are in the ",(0,l.kt)("inlineCode",{parentName:"p"},"pulsar.schema")," package."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Schema"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"BytesSchema")),(0,l.kt)("td",{parentName:"tr",align:null},"Get the raw payload as a ",(0,l.kt)("inlineCode",{parentName:"td"},"bytes")," object. No serialization/deserialization are performed. This is the default schema mode")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"StringSchema")),(0,l.kt)("td",{parentName:"tr",align:null},"Encode/decode payload as a UTF-8 string. Uses ",(0,l.kt)("inlineCode",{parentName:"td"},"str")," objects")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"JsonSchema")),(0,l.kt)("td",{parentName:"tr",align:null},"Require record definition. Serializes the record into standard JSON payload")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"AvroSchema")),(0,l.kt)("td",{parentName:"tr",align:null},"Require record definition. Serializes in AVRO format")))),(0,l.kt)("h3",{id:"schema-definition-reference"},"Schema definition reference"),(0,l.kt)("p",null,"The schema definition is done through a class that inherits from ",(0,l.kt)("inlineCode",{parentName:"p"},"pulsar.schema.Record"),"."),(0,l.kt)("p",null,"This class has a number of fields which can be of either ",(0,l.kt)("inlineCode",{parentName:"p"},"pulsar.schema.Field")," type or another nested ",(0,l.kt)("inlineCode",{parentName:"p"},"Record"),". All the fields are specified in the ",(0,l.kt)("inlineCode",{parentName:"p"},"pulsar.schema")," package. The fields are matching the AVRO fields types."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Python Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"bool")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Integer")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"int")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Long")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"int")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Float")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"float")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Double")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"float")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Bytes")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"bytes")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"str")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Array")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"list")),(0,l.kt)("td",{parentName:"tr",align:null},"Need to specify record type for items.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Map")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"dict")),(0,l.kt)("td",{parentName:"tr",align:null},"Key is always ",(0,l.kt)("inlineCode",{parentName:"td"},"String"),". Need to specify value type.")))),(0,l.kt)("p",null,"Additionally, any Python ",(0,l.kt)("inlineCode",{parentName:"p"},"Enum")," type can be used as a valid field type."),(0,l.kt)("h4",{id:"fields-parameters"},"Fields parameters"),(0,l.kt)("p",null,"When adding a field, you can use these parameters in the constructor."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Argument"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"default")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"None")),(0,l.kt)("td",{parentName:"tr",align:null},"Set a default value for the field. Eg: ",(0,l.kt)("inlineCode",{parentName:"td"},"a = Integer(default=5)"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"required")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"False")),(0,l.kt)("td",{parentName:"tr",align:null},'Mark the field as "required". It is set in the schema accordingly.')))),(0,l.kt)("h4",{id:"schema-definition-examples"},"Schema definition examples"),(0,l.kt)("h5",{id:"simple-definition"},"Simple definition"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"\nclass Example(Record):\n    a = String()\n    b = Integer()\n    c = Array(String())\n    i = Map(String())\n\n")),(0,l.kt)("h5",{id:"using-enums"},"Using enums"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"\nfrom enum import Enum\n\nclass Color(Enum):\n    red = 1\n    green = 2\n    blue = 3\n\nclass Example(Record):\n    name = String()\n    color = Color\n\n")),(0,l.kt)("h5",{id:"complex-types"},"Complex types"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"\nclass MySubRecord(Record):\n    x = Integer()\n    y = Long()\n    z = String()\n\nclass Example(Record):\n    a = String()\n    sub = MySubRecord()\n\n")),(0,l.kt)("h5",{id:"set-namespace-for-avro-schema"},"Set namespace for Avro schema"),(0,l.kt)("p",null,"Set the namespace for Avro Record schema using the special field ",(0,l.kt)("inlineCode",{parentName:"p"},"_avro_namespace"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"\nclass NamespaceDemo(Record):\n   _avro_namespace = 'xxx.xxx.xxx'\n   x = String()\n   y = Integer()\n\n")),(0,l.kt)("p",null,"The schema definition is like this."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\n{\n  'name': 'NamespaceDemo', 'namespace': 'xxx.xxx.xxx', 'type': 'record', 'fields': [\n    {'name': 'x', 'type': ['null', 'string']}, \n    {'name': 'y', 'type': ['null', 'int']}\n  ]\n}\n\n")),(0,l.kt)("h3",{id:"declare-and-validate-schema"},"Declare and validate schema"),(0,l.kt)("p",null,"You can send messages using ",(0,l.kt)("inlineCode",{parentName:"p"},"BytesSchema"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"StringSchema"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"AvroSchema"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"JsonSchema"),"."),(0,l.kt)("p",null,"Before the producer is created, the Pulsar broker validates that the existing topic schema is the correct type and that the format is compatible with the schema definition of a class. If the format of the topic schema is incompatible with the schema definition, an exception occurs in the producer creation."),(0,l.kt)("p",null,"Once a producer is created with a certain schema definition, it only accepts objects that are instances of the declared schema class."),(0,l.kt)("p",null,"Similarly, for a consumer or reader, the consumer returns an object (which is an instance of the schema record class) rather than raw bytes."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"\nconsumer = client.subscribe(\n                  topic='my-topic',\n                  subscription_name='my-subscription',\n                  schema=AvroSchema(Example) )\n\nwhile True:\n    msg = consumer.receive()\n    ex = msg.value()\n    try:\n        print(\"Received message a={} b={} c={}\".format(ex.a, ex.b, ex.c))\n        # Acknowledge successful processing of the message\n        consumer.acknowledge(msg)\n    except Exception:\n        # Message failed to be processed\n        consumer.negative_acknowledge(msg)\n\n")),(0,l.kt)(i.Z,{defaultValue:"BytesSchema",values:[{label:"BytesSchema",value:"BytesSchema"},{label:"StringSchema",value:"StringSchema"},{label:"AvroSchema",value:"AvroSchema"},{label:"JsonSchema",value:"JsonSchema"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"BytesSchema",mdxType:"TabItem"},(0,l.kt)("p",null,"You can send byte data using a ",(0,l.kt)("inlineCode",{parentName:"p"},"BytesSchema"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"\nproducer = client.create_producer(\n                'bytes-schema-topic',\n                schema=BytesSchema())\nproducer.send(b\"Hello\")\n\nconsumer = client.subscribe(\n                'bytes-schema-topic',\n                'sub',\n                schema=BytesSchema())\nmsg = consumer.receive()\ndata = msg.value()\n\n"))),(0,l.kt)(o.Z,{value:"StringSchema",mdxType:"TabItem"},(0,l.kt)("p",null,"You can send string data using a ",(0,l.kt)("inlineCode",{parentName:"p"},"StringSchema"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"\nproducer = client.create_producer(\n                'string-schema-topic',\n                schema=StringSchema())\nproducer.send(\"Hello\")\n\nconsumer = client.subscribe(\n                'string-schema-topic',\n                'sub',\n                schema=StringSchema())\nmsg = consumer.receive()\nstr = msg.value()\n\n"))),(0,l.kt)(o.Z,{value:"AvroSchema",mdxType:"TabItem"},(0,l.kt)("p",null,"You can declare an ",(0,l.kt)("inlineCode",{parentName:"p"},"AvroSchema")," using one of the following methods."),(0,l.kt)("h4",{id:"method-1-record"},"Method 1: Record"),(0,l.kt)("p",null,"You can declare an ",(0,l.kt)("inlineCode",{parentName:"p"},"AvroSchema")," by passing a class that inherits\nfrom ",(0,l.kt)("inlineCode",{parentName:"p"},"pulsar.schema.Record")," and defines the fields as\nclass variables. "),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"\nclass Example(Record):\n    a = Integer()\n    b = Integer()\n\nproducer = client.create_producer(\n                'avro-schema-topic',\n                schema=AvroSchema(Example))\nr = Example(a=1, b=2)\nproducer.send(r)\n\nconsumer = client.subscribe(\n                'avro-schema-topic',\n                'sub',\n                schema=AvroSchema(Example))\nmsg = consumer.receive()\ne = msg.value()\n\n")),(0,l.kt)("h4",{id:"method-2-json-definition"},"Method 2: JSON definition"),(0,l.kt)("p",null,"You can declare an ",(0,l.kt)("inlineCode",{parentName:"p"},"AvroSchema")," using JSON. In this case, Avro schemas are defined using JSON."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("p",null,"Below is an ",(0,l.kt)("inlineCode",{parentName:"p"},"AvroSchema")," defined using a JSON file (",(0,l.kt)("em",{parentName:"p"},"company.avsc"),"). "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'\n{\n    "doc": "this is doc",\n    "namespace": "example.avro",\n    "type": "record",\n    "name": "Company",\n    "fields": [\n        {"name": "name", "type": ["null", "string"]},\n        {"name": "address", "type": ["null", "string"]},\n        {"name": "employees", "type": ["null", {"type": "array", "items": {\n            "type": "record",\n            "name": "Employee",\n            "fields": [\n                {"name": "name", "type": ["null", "string"]},\n                {"name": "age", "type": ["null", "int"]}\n            ]\n        }}]},\n        {"name": "labels", "type": ["null", {"type": "map", "values": "string"}]}\n    ]\n}\n\n')),(0,l.kt)("p",null,"You can load a schema definition from file by using ","[",(0,l.kt)("inlineCode",{parentName:"p"},"avro.schema"),"]","((",(0,l.kt)("a",{parentName:"p",href:"http://avro.apache.org/docs/current/gettingstartedpython.html"},"http://avro.apache.org/docs/current/gettingstartedpython.html"),") or ",(0,l.kt)("a",{parentName:"p",href:"https://fastavro.readthedocs.io/en/latest/schema.html#fastavro._schema_py.load_schema"},(0,l.kt)("inlineCode",{parentName:"a"},"fastavro.schema")),"."),(0,l.kt)("p",null,'If you use the "JSON definition" method to declare an ',(0,l.kt)("inlineCode",{parentName:"p"},"AvroSchema"),", pay attention to the following points:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"You need to use ",(0,l.kt)("a",{parentName:"p",href:"https://developers.google.com/edu/python/dict-files"},"Python dict"),' to produce and consume messages, which is different from using the "Record" method.')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"When generating an ",(0,l.kt)("inlineCode",{parentName:"p"},"AvroSchema")," object, set ",(0,l.kt)("inlineCode",{parentName:"p"},"_record_cls")," parameter to ",(0,l.kt)("inlineCode",{parentName:"p"},"None"),"."))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'\nfrom fastavro.schema import load_schema\nfrom pulsar.schema import *\nschema_definition = load_schema("examples/company.avsc")\navro_schema = AvroSchema(None, schema_definition=schema_definition)\nproducer = client.create_producer(\n    topic=topic,\n    schema=avro_schema)\nconsumer = client.subscribe(topic, \'test\', schema=avro_schema)\ncompany = {\n    "name": "company-name" + str(i),\n    "address": \'xxx road xxx street \' + str(i),\n    "employees": [\n        {"name": "user" + str(i), "age": 20 + i},\n        {"name": "user" + str(i), "age": 30 + i},\n        {"name": "user" + str(i), "age": 35 + i},\n    ],\n    "labels": {\n        "industry": "software" + str(i),\n        "scale": ">100",\n        "funds": "1000000.0"\n    }\n}\nproducer.send(company)\nmsg = consumer.receive()\n# Users could get a dict object by `value()` method.\nmsg.value()\n\n'))),(0,l.kt)(o.Z,{value:"JsonSchema",mdxType:"TabItem"},(0,l.kt)("h4",{id:"record"},"Record"),(0,l.kt)("p",null,"You can declare a ",(0,l.kt)("inlineCode",{parentName:"p"},"JsonSchema")," by passing a class that inherits\nfrom ",(0,l.kt)("inlineCode",{parentName:"p"},"pulsar.schema.Record")," and defines the fields as class variables. This is similar to using ",(0,l.kt)("inlineCode",{parentName:"p"},"AvroSchema"),". The only difference is to use  ",(0,l.kt)("inlineCode",{parentName:"p"},"JsonSchema")," instead of ",(0,l.kt)("inlineCode",{parentName:"p"},"AvroSchema")," when defining schema type as shown below. For how to use ",(0,l.kt)("inlineCode",{parentName:"p"},"AvroSchema")," via record, see ",(0,l.kt)("a",{parentName:"p",href:"client-libraries-python.md#method-1-record"},"here"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\nproducer = client.create_producer(\n                'avro-schema-topic',\n                schema=JsonSchema(Example))\n\nconsumer = client.subscribe(\n                'avro-schema-topic',\n                'sub',\n                schema=JsonSchema(Example))\n\n")))),(0,l.kt)("h2",{id:"end-to-end-encryption"},"End-to-end encryption"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/docs/en/next/cookbooks-encryption/#docsNav"},"End-to-end encryption")," allows applications to encrypt messages at producers and decrypt messages at consumers."),(0,l.kt)("h3",{id:"configuration"},"Configuration"),(0,l.kt)("p",null,"To use the end-to-end encryption feature in the Python client, you need to configure ",(0,l.kt)("inlineCode",{parentName:"p"},"publicKeyPath")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"privateKeyPath")," for both producer and consumer."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'\npublicKeyPath: "./public.pem"\nprivateKeyPath: "./private.pem"\n\n')),(0,l.kt)("h3",{id:"tutorial"},"Tutorial"),(0,l.kt)("p",null,"This section provides step-by-step instructions on how to use the end-to-end encryption feature in the Python client.\n",(0,l.kt)("strong",{parentName:"p"},"Prerequisite")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Pulsar Python client 2.7.1 or later\n",(0,l.kt)("strong",{parentName:"li"},"Step"))),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Create both public and private key pairs.\n",(0,l.kt)("strong",{parentName:"p"},"Input")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\nopenssl genrsa -out private.pem 2048\nopenssl rsa -in private.pem -pubout -out public.pem\n\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Create a producer to send encrypted messages."),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Input")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-python"},"\nimport pulsar\n\npublicKeyPath = \"./public.pem\"\nprivateKeyPath = \"./private.pem\"\ncrypto_key_reader = pulsar.CryptoKeyReader(publicKeyPath, privateKeyPath)\nclient = pulsar.Client('pulsar://localhost:6650')\nproducer = client.create_producer(topic='encryption', encryption_key='encryption', crypto_key_reader=crypto_key_reader)\nproducer.send('encryption message'.encode('utf8'))\nprint('sent message')\nproducer.close()\nclient.close()\n\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Create a consumer to receive encrypted messages."),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Input")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-python"},"\nimport pulsar\n\npublicKeyPath = \"./public.pem\"\nprivateKeyPath = \"./private.pem\"\ncrypto_key_reader = pulsar.CryptoKeyReader(publicKeyPath, privateKeyPath)\nclient = pulsar.Client('pulsar://localhost:6650')\nconsumer = client.subscribe(topic='encryption', subscription_name='encryption-sub', crypto_key_reader=crypto_key_reader)\nmsg = consumer.receive()\nprint(\"Received msg '{}' id = '{}'\".format(msg.data(), msg.message_id()))\nconsumer.close()\nclient.close()\n\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Run the consumer to receive encrypted messages."),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Input")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\npython consumer.py\n\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"In a new terminal tab, run the producer to produce encrypted messages."),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Input")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\npython producer.py\n\n")),(0,l.kt)("p",{parentName:"li"},"Now you can see the producer sends messages and the consumer receives messages successfully."),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Output")),(0,l.kt)("p",{parentName:"li"},"This is from the producer side."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"\nsent message\n\n")),(0,l.kt)("p",{parentName:"li"},"This is from the consumer side."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"\nReceived msg 'encryption message' id = '(0,0,-1,-1)'\n\n")))))}k.isMDXComponent=!0}}]);