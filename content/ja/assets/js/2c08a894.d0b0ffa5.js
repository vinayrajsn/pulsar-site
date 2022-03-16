"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[58349],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return d}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(a),d=r,k=m["".concat(i,".").concat(d)]||m[d]||u[d]||l;return a?n.createElement(k,o(o({ref:t},c),{},{components:a})):n.createElement(k,o({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},36804:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),o=["components"],s={id:"io-canal-source",title:"Canal source connector",sidebar_label:"Canal source connector"},i=void 0,p={unversionedId:"io-canal-source",id:"io-canal-source",title:"Canal source connector",description:"The Canal source connector pulls messages from MySQL to Pulsar topics.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/io-canal-source.md",sourceDirName:".",slug:"/io-canal-source",permalink:"/ja/docs/next/io-canal-source",editUrl:"https://github.com/apache/pulsar/edit/master/site2/website-next/docs/io-canal-source.md",tags:[],version:"current",frontMatter:{id:"io-canal-source",title:"Canal source connector",sidebar_label:"Canal source connector"}},c={},u=[{value:"Configuration",id:"configuration",level:2},{value:"Property",id:"property",level:3},{value:"Example",id:"example",level:3},{value:"Usage",id:"usage",level:2}],m={toc:u};function d(e){var t=e.components,a=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The Canal source connector pulls messages from MySQL to Pulsar topics."),(0,l.kt)("h2",{id:"configuration"},"Configuration"),(0,l.kt)("p",null,"The configuration of Canal source connector has the following properties."),(0,l.kt)("h3",{id:"property"},"Property"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"username")),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"Canal server account (not MySQL).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"password")),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"Canal server password (not MySQL).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"destination")),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"Source destination that Canal source connector connects to.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"singleHostname")),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"Canal server address.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"singlePort")),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"Canal server port.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"cluster")),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to enable cluster mode based on Canal server configuration or not.",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("li",null,"true: ",(0,l.kt)("strong",{parentName:"td"},"cluster")," mode.",(0,l.kt)("br",null),"If set to true, it talks to ",(0,l.kt)("inlineCode",{parentName:"td"},"zkServers")," to figure out the actual database host.",(0,l.kt)("br",null),(0,l.kt)("br",null)),(0,l.kt)("li",null,"false: ",(0,l.kt)("strong",{parentName:"td"},"standalone")," mode.",(0,l.kt)("br",null),"If set to false, it connects to the database specified by ",(0,l.kt)("inlineCode",{parentName:"td"},"singleHostname")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"singlePort"),". "))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"zkServers")),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"Address and port of the Zookeeper that Canal source connector talks to figure out the actual database host.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"batchSize")),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"1000"),(0,l.kt)("td",{parentName:"tr",align:null},"Batch size to fetch from Canal.")))),(0,l.kt)("h3",{id:"example"},"Example"),(0,l.kt)("p",null,"Before using the Canal connector, you can create a configuration file through one of the following methods."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"JSON"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-json"},'\n{\n    "zkServers": "127.0.0.1:2181",\n    "batchSize": "5120",\n    "destination": "example",\n    "username": "",\n    "password": "",\n    "cluster": false,\n    "singleHostname": "127.0.0.1",\n    "singlePort": "11111",\n}\n\n'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"YAML"),(0,l.kt)("p",{parentName:"li"},"You can create a YAML file and copy the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-io/canal/src/main/resources/canal-mysql-source-config.yaml"},"contents")," below to your YAML file."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'\nconfigs:\n    zkServers: "127.0.0.1:2181"\n    batchSize: 5120\n    destination: "example"\n    username: ""\n    password: ""\n    cluster: false\n    singleHostname: "127.0.0.1"\n    singlePort: 11111\n\n')))),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("p",null,"Here is an example of storing MySQL data using the configuration file as above."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Start a MySQL server."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ docker pull mysql:5.7\n$ docker run -d -it --rm --name pulsar-mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=canal -e MYSQL_USER=mysqluser -e MYSQL_PASSWORD=mysqlpw mysql:5.7\n\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Create a configuration file ",(0,l.kt)("inlineCode",{parentName:"p"},"mysqld.cnf"),"."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\n[mysqld]\npid-file    = /var/run/mysqld/mysqld.pid\nsocket      = /var/run/mysqld/mysqld.sock\ndatadir     = /var/lib/mysql\n#log-error  = /var/log/mysql/error.log\n# By default we only accept connections from localhost\n#bind-address   = 127.0.0.1\n# Disabling symbolic-links is recommended to prevent assorted security risks\nsymbolic-links=0\nlog-bin=mysql-bin\nbinlog-format=ROW\nserver_id=1\n\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Copy the configuration file ",(0,l.kt)("inlineCode",{parentName:"p"},"mysqld.cnf")," to MySQL server."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ docker cp mysqld.cnf pulsar-mysql:/etc/mysql/mysql.conf.d/\n\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Restart the MySQL server."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ docker restart pulsar-mysql\n\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Create a test database in MySQL server."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ docker exec -it pulsar-mysql /bin/bash\n$ mysql -h 127.0.0.1 -uroot -pcanal -e 'create database test;'\n\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Start a Canal server and connect to MySQL server."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"\n$ docker pull canal/canal-server:v1.1.2\n$ docker run -d -it --link pulsar-mysql -e canal.auto.scan=false -e canal.destinations=test -e canal.instance.master.address=pulsar-mysql:3306 -e canal.instance.dbUsername=root -e canal.instance.dbPassword=canal -e canal.instance.connectionCharset=UTF-8 -e canal.instance.tsdb.enable=true -e canal.instance.gtidon=false --name=pulsar-canal-server -p 8000:8000 -p 2222:2222 -p 11111:11111 -p 11112:11112 -m 4096m canal/canal-server:v1.1.2\n\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Start Pulsar standalone."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ docker pull apachepulsar/pulsar:2.3.0\n$ docker run -d -it --link pulsar-canal-server -p 6650:6650 -p 8080:8080 -v $PWD/data:/pulsar/data --name pulsar-standalone apachepulsar/pulsar:2.3.0 bin/pulsar standalone\n\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Modify the configuration file ",(0,l.kt)("inlineCode",{parentName:"p"},"canal-mysql-source-config.yaml"),"."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'\nconfigs:\n    zkServers: ""\n    batchSize: "5120"\n    destination: "test"\n    username: ""\n    password: ""\n    cluster: false\n    singleHostname: "pulsar-canal-server"\n    singlePort: "11111"\n\n'))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Create a consumer file ",(0,l.kt)("inlineCode",{parentName:"p"},"pulsar-client.py"),"."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-python"},"\nimport pulsar\n\nclient = pulsar.Client('pulsar://localhost:6650')\nconsumer = client.subscribe('my-topic',\n                            subscription_name='my-sub')\n\nwhile True:\n    msg = consumer.receive()\n    print(\"Received message: '%s'\" % msg.data())\n    consumer.acknowledge(msg)\n\nclient.close()\n\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Copy the configuration file ",(0,l.kt)("inlineCode",{parentName:"p"},"canal-mysql-source-config.yaml")," and the consumer file  ",(0,l.kt)("inlineCode",{parentName:"p"},"pulsar-client.py")," to Pulsar server."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ docker cp canal-mysql-source-config.yaml pulsar-standalone:/pulsar/conf/\n$ docker cp pulsar-client.py pulsar-standalone:/pulsar/\n\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Download a Canal connector and start it."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ docker exec -it pulsar-standalone /bin/bash\n$ wget https://archive.apache.org/dist/pulsar/pulsar-2.3.0/connectors/pulsar-io-canal-2.3.0.nar -P connectors\n$ ./bin/pulsar-admin source localrun \\\n--archive ./connectors/pulsar-io-canal-2.3.0.nar \\\n--classname org.apache.pulsar.io.canal.CanalStringSource \\\n--tenant public \\\n--namespace default \\\n--name canal \\\n--destination-topic-name my-topic \\\n--source-config-file /pulsar/conf/canal-mysql-source-config.yaml \\\n--parallelism 1\n\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Consume data from MySQL."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ docker exec -it pulsar-standalone /bin/bash\n$ python pulsar-client.py\n\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Open another window to log in MySQL server."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ docker exec -it pulsar-mysql /bin/bash\n$ mysql -h 127.0.0.1 -uroot -pcanal\n\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Create a table, and insert, delete, and update data in MySQL server."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\nmysql> use test;\nmysql> show tables;\nmysql> CREATE TABLE IF NOT EXISTS `test_table`(`test_id` INT UNSIGNED AUTO_INCREMENT,`test_title` VARCHAR(100) NOT NULL,\n`test_author` VARCHAR(40) NOT NULL,\n`test_date` DATE,PRIMARY KEY ( `test_id` ))ENGINE=InnoDB DEFAULT CHARSET=utf8;\nmysql> INSERT INTO test_table (test_title, test_author, test_date) VALUES(\"a\", \"b\", NOW());\nmysql> UPDATE test_table SET test_title='c' WHERE test_title='a';\nmysql> DELETE FROM test_table WHERE test_title='c';\n\n")))))}d.isMDXComponent=!0}}]);