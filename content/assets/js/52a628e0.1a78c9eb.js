"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[12425],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,h=d["".concat(s,".").concat(u)]||d[u]||m[u]||l;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(86010);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(87462),r=n(67294),l=n(86010),i=n(72389),o=n(67392),s=n(7094),p=n(12466);const c="tabList__CuJ",m="tabItem_LNqP";function d(e){const{lazy:t,block:n,defaultValue:i,values:d,groupId:u,className:h}=e,k=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=d??k.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),y=(0,o.l)(g,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const N=null===i?i:i??k.find((e=>e.props.default))?.props.value??k[0].props.value;if(null!==N&&!g.some((e=>e.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:f,setTabGroupChoices:b}=(0,s.U)(),[v,x]=(0,r.useState)(N),C=[],{blockElementScrollPositionUntilNextRender:S}=(0,p.o5)();if(null!=u){const e=f[u];null!=e&&e!==v&&g.some((t=>t.value===e))&&x(e)}const P=e=>{const t=e.currentTarget,n=C.indexOf(t),a=g[n].value;a!==v&&(S(t),x(a),null!=u&&b(u,String(a)))},w=e=>{let t=null;switch(e.key){case"Enter":P(e);break;case"ArrowRight":{const n=C.indexOf(e.currentTarget)+1;t=C[n]??C[0];break}case"ArrowLeft":{const n=C.indexOf(e.currentTarget)-1;t=C[n]??C[C.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},h)},g.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,key:t,ref:e=>C.push(e),onKeyDown:w,onClick:P},i,{className:(0,l.Z)("tabs__item",m,i?.className,{"tabs__item--active":v===t})}),n??t)}))),t?(0,r.cloneElement)(k.filter((e=>e.props.value===v))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==v})))))}function u(e){const t=(0,i.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},96715:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>m});var a=n(87462),r=(n(67294),n(3905)),l=n(65488),i=n(85162);const o={id:"client-libraries-python",title:"Pulsar Python client",sidebar_label:"Python",original_id:"client-libraries-python"},s=void 0,p={unversionedId:"client-libraries-python",id:"version-2.10.x/client-libraries-python",title:"Pulsar Python client",description:"Pulsar Python client library is a wrapper over the existing C++ client library and exposes all of the same features. You can find the code in the Python directory of the C++ client code.",source:"@site/versioned_docs/version-2.10.x/client-libraries-python.md",sourceDirName:".",slug:"/client-libraries-python",permalink:"/docs/2.10.x/client-libraries-python",draft:!1,editUrl:"https://github.com/apache/pulsar/edit/master/site2/docs/client-libraries-python.md",tags:[],version:"2.10.x",frontMatter:{id:"client-libraries-python",title:"Pulsar Python client",sidebar_label:"Python",original_id:"client-libraries-python"},sidebar:"version-2.10.x/docsSidebar",previous:{title:"Go",permalink:"/docs/2.10.x/client-libraries-go"},next:{title:"C++",permalink:"/docs/2.10.x/client-libraries-cpp"}},c={},m=[{value:"Install",id:"install",level:2},{value:"Install using pip",id:"install-using-pip",level:3},{value:"Optional dependencies",id:"optional-dependencies",level:3},{value:"Install from source",id:"install-from-source",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Examples",id:"examples",level:2},{value:"Producer example",id:"producer-example",level:3},{value:"Consumer example",id:"consumer-example",level:3},{value:"Reader interface example",id:"reader-interface-example",level:3},{value:"Multi-topic subscriptions",id:"multi-topic-subscriptions",level:3},{value:"Schema",id:"schema",level:2},{value:"Supported schema types",id:"supported-schema-types",level:3},{value:"Schema definition reference",id:"schema-definition-reference",level:3},{value:"Fields parameters",id:"fields-parameters",level:4},{value:"Schema definition examples",id:"schema-definition-examples",level:4},{value:"Simple definition",id:"simple-definition",level:5},{value:"Using enums",id:"using-enums",level:5},{value:"Complex types",id:"complex-types",level:5},{value:"Set namespace for Avro schema",id:"set-namespace-for-avro-schema",level:5},{value:"Declare and validate schema",id:"declare-and-validate-schema",level:3},{value:"Method 1: Record",id:"method-1-record",level:4},{value:"Method 2: JSON definition",id:"method-2-json-definition",level:4},{value:"Record",id:"record",level:4},{value:"End-to-end encryption",id:"end-to-end-encryption",level:2},{value:"Configuration",id:"configuration",level:3},{value:"Tutorial",id:"tutorial",level:3}],d={toc:m};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Pulsar Python client library is a wrapper over the existing ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.10.x/client-libraries-cpp"},"C++ client library")," and exposes all of the ",(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/api/cpp/2.10.2"},"same features"),". You can find the code in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar-client-python"},"Python directory")," of the C++ client code."),(0,r.kt)("p",null,"All the methods in producer, consumer, and reader of a Python client are thread-safe."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/BurntSushi/pdoc"},"pdoc"),"-generated API docs for the Python client are available ",(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/api/python/2.10.2"},"here"),"."),(0,r.kt)("h2",{id:"install"},"Install"),(0,r.kt)("p",null,"You can install the ",(0,r.kt)("a",{parentName:"p",href:"https://pypi.python.org/pypi/pulsar-client"},(0,r.kt)("inlineCode",{parentName:"a"},"pulsar-client"))," library either via ",(0,r.kt)("a",{parentName:"p",href:"https://pypi.python.org/pypi"},"PyPi"),", using ",(0,r.kt)("a",{parentName:"p",href:"#installation-using-pip"},"pip"),", or by building the library from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar-client-cpp"},"source"),"."),(0,r.kt)("h3",{id:"install-using-pip"},"Install using pip"),(0,r.kt)("p",null,"To install the ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar-client")," library as a pre-built package using the ",(0,r.kt)("a",{parentName:"p",href:"https://pip.pypa.io/en/stable/"},"pip")," package manager:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pip install pulsar-client==2.10.2\n\n")),(0,r.kt)("h3",{id:"optional-dependencies"},"Optional dependencies"),(0,r.kt)("p",null,"If you install the client libraries on Linux to support services like Pulsar functions or Avro serialization, you can install optional components alongside the  ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar-client")," library."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n# avro serialization\n$ pip install pulsar-client[avro]=='2.10.2'\n\n# functions runtime\n$ pip install pulsar-client[functions]=='2.10.2'\n\n# all optional components\n$ pip install pulsar-client[all]=='2.10.2'\n\n")),(0,r.kt)("p",null,"Installation via PyPi is available for the following Python versions:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Platform"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Supported Python versions"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"MacOS ",(0,r.kt)("br",null),"  10.13 (High Sierra), 10.14 (Mojave) ",(0,r.kt)("br",null)),(0,r.kt)("td",{parentName:"tr",align:"left"},"2.7, 3.7, 3.8, 3.9")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Linux"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2.7, 3.4, 3.5, 3.6, 3.7, 3.8, 3.9")))),(0,r.kt)("h3",{id:"install-from-source"},"Install from source"),(0,r.kt)("p",null,"To install the ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar-client")," library by building from source, follow ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.10.x/client-libraries-cpp#compilation"},"instructions")," and compile the Pulsar C++ client library. That builds the Python binding for the library."),(0,r.kt)("p",null,"To install the built Python bindings:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ git clone https://github.com/apache/pulsar\n$ cd pulsar/pulsar-client-cpp/python\n$ sudo python setup.py install\n\n")),(0,r.kt)("h2",{id:"api-reference"},"API Reference"),(0,r.kt)("p",null,"The complete Python API reference is available at ",(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/api/python/2.10.2"},"(https://pulsar.apache.org/api/python/2.10.2)"),"."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"You can find a variety of Python code examples for the ",(0,r.kt)("a",{parentName:"p",href:"/pulsar-client-cpp/python"},"pulsar-client")," library."),(0,r.kt)("h3",{id:"producer-example"},"Producer example"),(0,r.kt)("p",null,"The following example creates a Python producer for the ",(0,r.kt)("inlineCode",{parentName:"p"},"my-topic")," topic and sends 10 messages on that topic:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"\nimport pulsar\n\nclient = pulsar.Client('pulsar://localhost:6650')\n\nproducer = client.create_producer('my-topic')\n\nfor i in range(10):\n    producer.send(('Hello-%d' % i).encode('utf-8'))\n\nclient.close()\n\n")),(0,r.kt)("h3",{id:"consumer-example"},"Consumer example"),(0,r.kt)("p",null,"The following example creates a consumer with the ",(0,r.kt)("inlineCode",{parentName:"p"},"my-subscription")," subscription name on the ",(0,r.kt)("inlineCode",{parentName:"p"},"my-topic")," topic, receives incoming messages, prints the content and ID of messages that arrive, and acknowledges each message to the Pulsar broker."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"\nimport pulsar\n\nclient = pulsar.Client('pulsar://localhost:6650')\n\nconsumer = client.subscribe('my-topic', 'my-subscription')\n\nwhile True:\n    msg = consumer.receive()\n    try:\n        print(\"Received message '{}' id='{}'\".format(msg.data(), msg.message_id()))\n        # Acknowledge successful processing of the message\n        consumer.acknowledge(msg)\n    except Exception:\n        # Message failed to be processed\n        consumer.negative_acknowledge(msg)\n\nclient.close()\n\n")),(0,r.kt)("p",null,"This example shows how to configure negative acknowledgement."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"\nfrom pulsar import Client, schema\nclient = Client('pulsar://localhost:6650')\nconsumer = client.subscribe('negative_acks','test',schema=schema.StringSchema())\nproducer = client.create_producer('negative_acks',schema=schema.StringSchema())\nfor i in range(10):\n    print('send msg \"hello-%d\"' % i)\n    producer.send_async('hello-%d' % i, callback=None)\nproducer.flush()\nfor i in range(10):\n    msg = consumer.receive()\n    consumer.negative_acknowledge(msg)\n    print('receive and nack msg \"%s\"' % msg.data())\nfor i in range(10):\n    msg = consumer.receive()\n    consumer.acknowledge(msg)\n    print('receive and ack msg \"%s\"' % msg.data())\ntry:\n    # No more messages expected\n    msg = consumer.receive(100)\nexcept:\n    print(\"no more msg\")\n    pass\n\n")),(0,r.kt)("h3",{id:"reader-interface-example"},"Reader interface example"),(0,r.kt)("p",null,"You can use the Pulsar Python API to use the Pulsar ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.10.x/concepts-clients#reader-interface"},"reader interface"),". Here's an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"\n# MessageId taken from a previously fetched message\nmsg_id = msg.message_id()\n\nreader = client.create_reader('my-topic', msg_id)\n\nwhile True:\n    msg = reader.read_next()\n    print(\"Received message '{}' id='{}'\".format(msg.data(), msg.message_id()))\n    # No acknowledgment\n\n")),(0,r.kt)("h3",{id:"multi-topic-subscriptions"},"Multi-topic subscriptions"),(0,r.kt)("p",null,"In addition to subscribing a consumer to a single Pulsar topic, you can also subscribe to multiple topics simultaneously. To use multi-topic subscriptions, you can supply a regular expression (regex) or a ",(0,r.kt)("inlineCode",{parentName:"p"},"List")," of topics. If you select topics via regex, all topics must be within the same Pulsar namespace."),(0,r.kt)("p",null,"The following is an example: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"\nimport re\nconsumer = client.subscribe(re.compile('persistent://public/default/topic-*'), 'my-subscription')\nwhile True:\n    msg = consumer.receive()\n    try:\n        print(\"Received message '{}' id='{}'\".format(msg.data(), msg.message_id()))\n        # Acknowledge successful processing of the message\n        consumer.acknowledge(msg)\n    except Exception:\n        # Message failed to be processed\n        consumer.negative_acknowledge(msg)\nclient.close()\n\n")),(0,r.kt)("h2",{id:"schema"},"Schema"),(0,r.kt)("h3",{id:"supported-schema-types"},"Supported schema types"),(0,r.kt)("p",null,"You can use different builtin schema types in Pulsar. All the definitions are in the ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar.schema")," package."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Schema"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"BytesSchema")),(0,r.kt)("td",{parentName:"tr",align:null},"Get the raw payload as a ",(0,r.kt)("inlineCode",{parentName:"td"},"bytes")," object. No serialization/deserialization are performed. This is the default schema mode")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"StringSchema")),(0,r.kt)("td",{parentName:"tr",align:null},"Encode/decode payload as a UTF-8 string. Uses ",(0,r.kt)("inlineCode",{parentName:"td"},"str")," objects")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"JsonSchema")),(0,r.kt)("td",{parentName:"tr",align:null},"Require record definition. Serializes the record into standard JSON payload")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"AvroSchema")),(0,r.kt)("td",{parentName:"tr",align:null},"Require record definition. Serializes in AVRO format")))),(0,r.kt)("h3",{id:"schema-definition-reference"},"Schema definition reference"),(0,r.kt)("p",null,"The schema definition is done through a class that inherits from ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar.schema.Record"),"."),(0,r.kt)("p",null,"This class has a number of fields which can be of either\n",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar.schema.Field")," type or another nested ",(0,r.kt)("inlineCode",{parentName:"p"},"Record"),". All the\nfields are specified in the ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar.schema")," package. The fields\nare matching the AVRO fields types."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Python Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Integer")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Long")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Float")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"float")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Double")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"float")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Bytes")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bytes")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"str")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Array")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"list")),(0,r.kt)("td",{parentName:"tr",align:null},"Need to specify record type for items.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Map")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"dict")),(0,r.kt)("td",{parentName:"tr",align:null},"Key is always ",(0,r.kt)("inlineCode",{parentName:"td"},"String"),". Need to specify value type.")))),(0,r.kt)("p",null,"Additionally, any Python ",(0,r.kt)("inlineCode",{parentName:"p"},"Enum")," type can be used as a valid field type."),(0,r.kt)("h4",{id:"fields-parameters"},"Fields parameters"),(0,r.kt)("p",null,"When adding a field, you can use these parameters in the constructor."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Argument"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"default")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"None")),(0,r.kt)("td",{parentName:"tr",align:null},"Set a default value for the field. Eg: ",(0,r.kt)("inlineCode",{parentName:"td"},"a = Integer(default=5)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"required")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"False")),(0,r.kt)("td",{parentName:"tr",align:null},'Mark the field as "required". It is set in the schema accordingly.')))),(0,r.kt)("h4",{id:"schema-definition-examples"},"Schema definition examples"),(0,r.kt)("h5",{id:"simple-definition"},"Simple definition"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"\nclass Example(Record):\n    a = String()\n    b = Integer()\n    c = Array(String())\n    i = Map(String())\n\n")),(0,r.kt)("h5",{id:"using-enums"},"Using enums"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"\nfrom enum import Enum\n\nclass Color(Enum):\n    red = 1\n    green = 2\n    blue = 3\n\nclass Example(Record):\n    name = String()\n    color = Color\n\n")),(0,r.kt)("h5",{id:"complex-types"},"Complex types"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"\nclass MySubRecord(Record):\n    x = Integer()\n    y = Long()\n    z = String()\n\nclass Example(Record):\n    a = String()\n    sub = MySubRecord()\n\n")),(0,r.kt)("h5",{id:"set-namespace-for-avro-schema"},"Set namespace for Avro schema"),(0,r.kt)("p",null,"Set the namespace for Avro Record schema using the special field ",(0,r.kt)("inlineCode",{parentName:"p"},"_avro_namespace"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"\nclass NamespaceDemo(Record):\n   _avro_namespace = 'xxx.xxx.xxx'\n   x = String()\n   y = Integer()\n\n")),(0,r.kt)("p",null,"The schema definition is like this."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\n{\n  'name': 'NamespaceDemo', 'namespace': 'xxx.xxx.xxx', 'type': 'record', 'fields': [\n    {'name': 'x', 'type': ['null', 'string']}, \n    {'name': 'y', 'type': ['null', 'int']}\n  ]\n}\n\n")),(0,r.kt)("h3",{id:"declare-and-validate-schema"},"Declare and validate schema"),(0,r.kt)("p",null,"You can send messages using ",(0,r.kt)("inlineCode",{parentName:"p"},"BytesSchema"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"StringSchema"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"AvroSchema"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"JsonSchema"),"."),(0,r.kt)("p",null,"Before the producer is created, the Pulsar broker validates that the existing topic schema is the correct type and that the format is compatible with the schema definition of a class. If the format of the topic schema is incompatible with the schema definition, an exception occurs in the producer creation."),(0,r.kt)("p",null,"Once a producer is created with a certain schema definition, it only accepts objects that are instances of the declared schema class."),(0,r.kt)("p",null,"Similarly, for a consumer or reader, the consumer returns an object (which is an instance of the schema record class) rather than raw bytes."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"\nconsumer = client.subscribe(\n                  topic='my-topic',\n                  subscription_name='my-subscription',\n                  schema=AvroSchema(Example) )\n\nwhile True:\n    msg = consumer.receive()\n    ex = msg.value()\n    try:\n        print(\"Received message a={} b={} c={}\".format(ex.a, ex.b, ex.c))\n        # Acknowledge successful processing of the message\n        consumer.acknowledge(msg)\n    except Exception:\n        # Message failed to be processed\n        consumer.negative_acknowledge(msg)\n\n")),(0,r.kt)(l.Z,{defaultValue:"BytesSchema",values:[{label:"BytesSchema",value:"BytesSchema"},{label:"StringSchema",value:"StringSchema"},{label:"AvroSchema",value:"AvroSchema"},{label:"JsonSchema",value:"JsonSchema"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"BytesSchema",mdxType:"TabItem"},(0,r.kt)("p",null,"You can send byte data using a ",(0,r.kt)("inlineCode",{parentName:"p"},"BytesSchema"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"\nproducer = client.create_producer(\n                'bytes-schema-topic',\n                schema=BytesSchema())\nproducer.send(b\"Hello\")\n\nconsumer = client.subscribe(\n                'bytes-schema-topic',\n                'sub',\n                schema=BytesSchema())\nmsg = consumer.receive()\ndata = msg.value()\n\n"))),(0,r.kt)(i.Z,{value:"StringSchema",mdxType:"TabItem"},(0,r.kt)("p",null,"You can send string data using a ",(0,r.kt)("inlineCode",{parentName:"p"},"StringSchema"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"\nproducer = client.create_producer(\n                'string-schema-topic',\n                schema=StringSchema())\nproducer.send(\"Hello\")\n\nconsumer = client.subscribe(\n                'string-schema-topic',\n                'sub',\n                schema=StringSchema())\nmsg = consumer.receive()\nstr = msg.value()\n\n"))),(0,r.kt)(i.Z,{value:"AvroSchema",mdxType:"TabItem"},(0,r.kt)("p",null,"You can declare an ",(0,r.kt)("inlineCode",{parentName:"p"},"AvroSchema")," using one of the following methods."),(0,r.kt)("h4",{id:"method-1-record"},"Method 1: Record"),(0,r.kt)("p",null,"You can declare an ",(0,r.kt)("inlineCode",{parentName:"p"},"AvroSchema")," by passing a class that inherits\nfrom ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar.schema.Record")," and defines the fields as\nclass variables. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"\nclass Example(Record):\n    a = Integer()\n    b = Integer()\n\nproducer = client.create_producer(\n                'avro-schema-topic',\n                schema=AvroSchema(Example))\nr = Example(a=1, b=2)\nproducer.send(r)\n\nconsumer = client.subscribe(\n                'avro-schema-topic',\n                'sub',\n                schema=AvroSchema(Example))\nmsg = consumer.receive()\ne = msg.value()\n\n")),(0,r.kt)("h4",{id:"method-2-json-definition"},"Method 2: JSON definition"),(0,r.kt)("p",null,"You can declare an ",(0,r.kt)("inlineCode",{parentName:"p"},"AvroSchema")," using JSON. In this case, Avro schemas are defined using JSON."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("p",null,"Below is an ",(0,r.kt)("inlineCode",{parentName:"p"},"AvroSchema")," defined using a JSON file (",(0,r.kt)("em",{parentName:"p"},"company.avsc"),"). "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'\n{\n    "doc": "this is doc",\n    "namespace": "example.avro",\n    "type": "record",\n    "name": "Company",\n    "fields": [\n        {"name": "name", "type": ["null", "string"]},\n        {"name": "address", "type": ["null", "string"]},\n        {"name": "employees", "type": ["null", {"type": "array", "items": {\n            "type": "record",\n            "name": "Employee",\n            "fields": [\n                {"name": "name", "type": ["null", "string"]},\n                {"name": "age", "type": ["null", "int"]}\n            ]\n        }}]},\n        {"name": "labels", "type": ["null", {"type": "map", "values": "string"}]}\n    ]\n}\n\n')),(0,r.kt)("p",null,"You can load a schema definition from file by using ",(0,r.kt)("a",{parentName:"p",href:"https://avro.apache.org/docs/current/getting-started-python/"},(0,r.kt)("inlineCode",{parentName:"a"},"avro.schema"))," or ",(0,r.kt)("a",{parentName:"p",href:"https://fastavro.readthedocs.io/en/latest/schema.html#fastavro._schema_py.load_schema"},(0,r.kt)("inlineCode",{parentName:"a"},"fastavro.schema")),"."),(0,r.kt)("p",null,'If you use the "JSON definition" method to declare an ',(0,r.kt)("inlineCode",{parentName:"p"},"AvroSchema"),", pay attention to the following points:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You need to use ",(0,r.kt)("a",{parentName:"p",href:"https://developers.google.com/edu/python/dict-files"},"Python dict"),' to produce and consume messages, which is different from using the "Record" method.')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When generating an ",(0,r.kt)("inlineCode",{parentName:"p"},"AvroSchema")," object, set ",(0,r.kt)("inlineCode",{parentName:"p"},"_record_cls")," parameter to ",(0,r.kt)("inlineCode",{parentName:"p"},"None"),"."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'\nfrom fastavro.schema import load_schema\nfrom pulsar.schema import *\nschema_definition = load_schema("examples/company.avsc")\navro_schema = AvroSchema(None, schema_definition=schema_definition)\nproducer = client.create_producer(\n    topic=topic,\n    schema=avro_schema)\nconsumer = client.subscribe(topic, \'test\', schema=avro_schema)\ncompany = {\n    "name": "company-name" + str(i),\n    "address": \'xxx road xxx street \' + str(i),\n    "employees": [\n        {"name": "user" + str(i), "age": 20 + i},\n        {"name": "user" + str(i), "age": 30 + i},\n        {"name": "user" + str(i), "age": 35 + i},\n    ],\n    "labels": {\n        "industry": "software" + str(i),\n        "scale": ">100",\n        "funds": "1000000.0"\n    }\n}\nproducer.send(company)\nmsg = consumer.receive()\n# Users could get a dict object by `value()` method.\nmsg.value()\n\n'))),(0,r.kt)(i.Z,{value:"JsonSchema",mdxType:"TabItem"},(0,r.kt)("h4",{id:"record"},"Record"),(0,r.kt)("p",null,"You can declare a ",(0,r.kt)("inlineCode",{parentName:"p"},"JsonSchema")," by passing a class that inherits\nfrom ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar.schema.Record")," and defines the fields as class variables. This is similar to using ",(0,r.kt)("inlineCode",{parentName:"p"},"AvroSchema"),". The only difference is to use  ",(0,r.kt)("inlineCode",{parentName:"p"},"JsonSchema")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"AvroSchema")," when defining schema type as shown below. For how to use ",(0,r.kt)("inlineCode",{parentName:"p"},"AvroSchema")," via record, see ",(0,r.kt)("a",{parentName:"p",href:"client-libraries-python.md#method-1-record"},"here"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\nproducer = client.create_producer(\n                'avro-schema-topic',\n                schema=JsonSchema(Example))\n\nconsumer = client.subscribe(\n                'avro-schema-topic',\n                'sub',\n                schema=JsonSchema(Example))\n\n")))),(0,r.kt)("h2",{id:"end-to-end-encryption"},"End-to-end encryption"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/2.10.x/cookbooks-encryption#docsNav"},"End-to-end encryption")," allows applications to encrypt messages at producers and decrypt messages at consumers."),(0,r.kt)("h3",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"To use the end-to-end encryption feature in the Python client, you need to configure ",(0,r.kt)("inlineCode",{parentName:"p"},"publicKeyPath")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"privateKeyPath")," for both producer and consumer."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'\npublicKeyPath: "./public.pem"\nprivateKeyPath: "./private.pem"\n\n')),(0,r.kt)("h3",{id:"tutorial"},"Tutorial"),(0,r.kt)("p",null,"This section provides step-by-step instructions on how to use the end-to-end encryption feature in the Python client."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Prerequisite")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Pulsar Python client 2.7.1 or later ")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create both public and private key pairs."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Input")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\nopenssl genrsa -out private.pem 2048\nopenssl rsa -in private.pem -pubout -out public.pem\n\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a producer to send encrypted messages."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Input")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},"\nimport pulsar\n\npublicKeyPath = \"./public.pem\"\nprivateKeyPath = \"./private.pem\"\ncrypto_key_reader = pulsar.CryptoKeyReader(publicKeyPath, privateKeyPath)\nclient = pulsar.Client('pulsar://localhost:6650')\nproducer = client.create_producer(topic='encryption', encryption_key='encryption', crypto_key_reader=crypto_key_reader)\nproducer.send('encryption message'.encode('utf8'))\nprint('sent message')\nproducer.close()\nclient.close()\n\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a consumer to receive encrypted messages."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Input")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},"\nimport pulsar\n\npublicKeyPath = \"./public.pem\"\nprivateKeyPath = \"./private.pem\"\ncrypto_key_reader = pulsar.CryptoKeyReader(publicKeyPath, privateKeyPath)\nclient = pulsar.Client('pulsar://localhost:6650')\nconsumer = client.subscribe(topic='encryption', subscription_name='encryption-sub', crypto_key_reader=crypto_key_reader)\nmsg = consumer.receive()\nprint(\"Received msg '{}' id = '{}'\".format(msg.data(), msg.message_id()))\nconsumer.close()\nclient.close()\n\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the consumer to receive encrypted messages."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Input")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\npython consumer.py\n\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In a new terminal tab, run the producer to produce encrypted messages."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Input")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\npython producer.py\n\n")),(0,r.kt)("p",{parentName:"li"},"Now you can see the producer sends messages and the consumer receives messages successfully."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Output")),(0,r.kt)("p",{parentName:"li"},"This is from the producer side."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"\nsent message\n\n")),(0,r.kt)("p",{parentName:"li"},"This is from the consumer side."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"\nReceived msg 'encryption message' id = '(0,0,-1,-1)'\n\n")))))}u.isMDXComponent=!0}}]);