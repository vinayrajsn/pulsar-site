"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[71648],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},99009:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=["components"],o={id:"develop-plugin",title:"Pulsar plugin development",sidebar_label:"Plugin"},p=void 0,s={unversionedId:"develop-plugin",id:"develop-plugin",title:"Pulsar plugin development",description:"You can develop various plugins for Pulsar, such as entry filters, protocol handlers, interceptors, and so on.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/develop-plugin.md",sourceDirName:".",slug:"/develop-plugin",permalink:"/fr/docs/next/develop-plugin",editUrl:"https://github.com/apache/pulsar/edit/master/site2/website-next/docs/develop-plugin.md",tags:[],version:"current",frontMatter:{id:"develop-plugin",title:"Pulsar plugin development",sidebar_label:"Plugin"},sidebar:"docsSidebar",previous:{title:"Modular load manager",permalink:"/fr/docs/next/develop-load-manager"},next:{title:"Terminology",permalink:"/fr/docs/next/reference-terminology"}},c={},u=[{value:"Entry filter",id:"entry-filter",level:2},{value:"What is an entry filter?",id:"what-is-an-entry-filter",level:3},{value:"How to use an entry filter?",id:"how-to-use-an-entry-filter",level:3},{value:"Step 1: Create a Maven project",id:"step-1-create-a-maven-project",level:4},{value:"Step 2: Implement the <code>EntryFilter</code> interface",id:"step-2-implement-the-entryfilter-interface",level:4},{value:"Step 3: package implementation class of entry filter into a NAR file",id:"step-3-package-implementation-class-of-entry-filter-into-a-nar-file",level:4},{value:"Step 4: configure and restart broker",id:"step-4-configure-and-restart-broker",level:4}],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"You can develop various plugins for Pulsar, such as entry filters, protocol handlers, interceptors, and so on."),(0,i.kt)("h2",{id:"entry-filter"},"Entry filter"),(0,i.kt)("p",null,"This chapter describes what the entry filter is and shows how to use the entry filter."),(0,i.kt)("h3",{id:"what-is-an-entry-filter"},"What is an entry filter?"),(0,i.kt)("p",null,"The entry filter is an extension point for implementing a custom message entry strategy. With an entry filter, you can decide ",(0,i.kt)("strong",{parentName:"p"},"whether to send messages to consumers")," (brokers can use the return values of entry filters to determine whether the messages need to be sent or discarded) or ",(0,i.kt)("strong",{parentName:"p"},"send messages to specific consumers.")),(0,i.kt)("p",null,"To implement features such as tagged messages or custom delayed messages, use ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/ec0a44058d249a7510bb3d05685b2ee5e0874eb6/pulsar-client-api/src/main/java/org/apache/pulsar/client/api/ConsumerBuilder.java?_pjax=%23js-repo-pjax-container%2C%20div%5Bitemtype%3D%22http%3A%2F%2Fschema.org%2FSoftwareSourceCode%22%5D%20main%2C%20%5Bdata-pjax-container%5D#L174"},(0,i.kt)("inlineCode",{parentName:"a"},"subscriptionProperties")),", ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/ec0a44058d249a7510bb3d05685b2ee5e0874eb6/pulsar-client-api/src/main/java/org/apache/pulsar/client/api/ConsumerBuilder.java?_pjax=%23js-repo-pjax-container%2C%20div%5Bitemtype%3D%22http%3A%2F%2Fschema.org%2FSoftwareSourceCode%22%5D%20main%2C%20%5Bdata-pjax-container%5D#L533"},(0,i.kt)("inlineCode",{parentName:"a"},"\u200b\u200bproperties")),", and entry filters."),(0,i.kt)("h3",{id:"how-to-use-an-entry-filter"},"How to use an entry filter?"),(0,i.kt)("p",null,"Follow the steps below:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a Maven project.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Implement the ",(0,i.kt)("inlineCode",{parentName:"p"},"EntryFilter")," interface.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Package the implementation class into a NAR file.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Configure the ",(0,i.kt)("inlineCode",{parentName:"p"},"broker.conf")," file (or the ",(0,i.kt)("inlineCode",{parentName:"p"},"standalone.conf")," file) and restart your broker."))),(0,i.kt)("h4",{id:"step-1-create-a-maven-project"},"Step 1: Create a Maven project"),(0,i.kt)("p",null,"For how to create a Maven project, see ",(0,i.kt)("a",{parentName:"p",href:"https://maven.apache.org/guides/getting-started/maven-in-five-minutes.html"},"here"),"."),(0,i.kt)("h4",{id:"step-2-implement-the-entryfilter-interface"},"Step 2: Implement the ",(0,i.kt)("inlineCode",{parentName:"h4"},"EntryFilter")," interface"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add a dependency for Pulsar broker in the ",(0,i.kt)("inlineCode",{parentName:"p"},"pom.xml")," file to display. Otherwise, you can not find the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-broker/src/main/java/org/apache/pulsar/broker/service/plugin/EntryFilter.java"},(0,i.kt)("inlineCode",{parentName:"a"},"EntryFilter")," interface"),"."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"\n<dependency>\n<groupId>org.apache.pulsar</groupId>\n<artifactId>pulsar-broker</artifactId>\n<version>${pulsar.version}</version>\n<scope>provided</scope>\n</dependency>\n\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Implement the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/2adb6661d5b82c5705ee00ce3ebc9941c99635d5/pulsar-broker/src/main/java/org/apache/pulsar/broker/service/plugin/EntryFilter.java#L34"},(0,i.kt)("inlineCode",{parentName:"a"},"FilterResult filterEntry(Entry entry, FilterContext context);")," method"),"."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If the method returns ",(0,i.kt)("inlineCode",{parentName:"p"},"ACCEPT")," or NULL, this message is sent to consumers.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If the method returns ",(0,i.kt)("inlineCode",{parentName:"p"},"REJECT"),", this message is filtered out and it does not consume message permits.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If there are multiple entry filters, this message passes through all filters in the pipeline in a round-robin manner. If any entry filter returns ",(0,i.kt)("inlineCode",{parentName:"p"},"REJECT"),", this message is discarded."))),(0,i.kt)("p",{parentName:"li"},"You can get entry metadata, subscriptions, and other information through ",(0,i.kt)("inlineCode",{parentName:"p"},"FilterContext"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Describe a NAR file."),(0,i.kt)("p",{parentName:"li"},"Create an ",(0,i.kt)("inlineCode",{parentName:"p"},"entry_filter.yaml")," file in the ",(0,i.kt)("inlineCode",{parentName:"p"},"resources/META-INF/services")," directory to describe a NAR file."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-conf"},"\n# Entry filter name, which should be configured in the broker.conf file later\nname: entryFilter\n# Entry filter description\ndescription: entry filter\n# Implementation class name of entry filter \nentryFilterClass: com.xxxx.xxxx.xxxx.DefaultEntryFilterImpl\n\n")))),(0,i.kt)("h4",{id:"step-3-package-implementation-class-of-entry-filter-into-a-nar-file"},"Step 3: package implementation class of entry filter into a NAR file"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add the compiled plugin of the NAR file to your ",(0,i.kt)("inlineCode",{parentName:"p"},"pom.xml")," file."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"\n<build>\n        <finalName>${project.artifactId}</finalName>\n        <plugins>\n            <plugin>\n                <groupId>org.apache.nifi</groupId>\n                <artifactId>nifi-nar-maven-plugin</artifactId>\n                <version>1.2.0</version>\n                <extensions>true</extensions>\n                <configuration>\n                    <finalName>${project.artifactId}-${project.version}</finalName>\n                </configuration>\n                <executions>\n                    <execution>\n                        <id>default-nar</id>\n                        <phase>package</phase>\n                        <goals>\n                            <goal>nar</goal>\n                        </goals>\n                    </execution>\n                </executions>\n            </plugin>\n        </plugins>\n    </build>\n\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Generate a NAR file in the ",(0,i.kt)("inlineCode",{parentName:"p"},"target")," directory."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-script"},"\nmvn clean install\n\n")))),(0,i.kt)("h4",{id:"step-4-configure-and-restart-broker"},"Step 4: configure and restart broker"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Configure the following parameters in the ",(0,i.kt)("inlineCode",{parentName:"p"},"broker.conf")," file (or the ",(0,i.kt)("inlineCode",{parentName:"p"},"standalone.conf")," file)."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-conf"},"\n# Class name of pluggable entry filters\n# Multiple classes need to be separated by commas.\nentryFilterNames=entryFilter1,entryFilter2,entryFilter3\n# The directory for all entry filter implementations\nentryFiltersDirectory=tempDir\n\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Restart your broker."),(0,i.kt)("p",{parentName:"li"},"You can see the following broker log if the plug-in is successfully loaded."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\nSuccessfully loaded entry filter for name `{name of your entry filter}`\n\n")))))}d.isMDXComponent=!0}}]);