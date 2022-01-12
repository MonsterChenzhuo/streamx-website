"use strict";(self.webpackChunkstreamx_website=self.webpackChunkstreamx_website||[]).push([[777],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return c}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=s(t),c=r,k=u["".concat(p,".").concat(c)]||u[c]||d[c]||l;return t?a.createElement(k,o(o({ref:n},m),{},{components:t})):a.createElement(k,o({ref:n},m))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=u;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6533:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return m},default:function(){return u}});var a=t(7462),r=t(3366),l=(t(7294),t(3905)),o=["components"],i={id:"development",title:"\u5f00\u53d1\u73af\u5883",sidebar_position:3},p=void 0,s={unversionedId:"user-guide/development",id:"user-guide/development",title:"\u5f00\u53d1\u73af\u5883",description:"StreamX \u9075\u5faa Apache-2.0 \u5f00\u6e90\u534f\u8bae\uff0c\u5c06\u4f1a\u662f\u4e2a\u957f\u671f\u66f4\u65b0\u7684\u6d3b\u8dc3\u9879\u76ee\uff0c\u6b22\u8fce\u5927\u5bb6\u63d0\u4ea4 PR \u6216 ISSUE \u559c\u6b22\u8bf7\u7ed9\u4e2a Star \u60a8\u7684\u652f\u6301\u662f\u6211\u4eec\u6700\u5927\u7684\u52a8\u529b\u3002 \u8be5\u9879\u76ee\u81ea\u5f00\u6e90\u4ee5\u6765\u5c31\u53d7\u5230\u4e0d\u5c11\u670b\u53cb\u7684\u5173\u6ce8\u548c\u8ba4\u53ef\uff0c\u8868\u793a\u611f\u8c22\u3002\u5df2\u9646\u7eed\u6709\u6765\u81ea\u91d1\u878d\uff0c\u6570\u636e\u5206\u6790\uff0c\u8f66\u8054\u7f51\uff0c\u667a\u80fd\u5e7f\u544a\uff0c\u5730\u4ea7\u7b49\u516c\u53f8\u7684\u670b\u53cb\u5728\u4f7f\u7528\uff0c\u4e5f\u4e0d\u4e4f\u6765\u81ea\u4e00\u7ebf\u5927\u5382\u7684\u670b\u53cb\u5728\u4f7f\u7528\u3002",source:"@site/docs/user-guide/development.md",sourceDirName:"user-guide",slug:"/user-guide/development",permalink:"/docs/user-guide/development",editUrl:"https://github.com/streamxhub/streamx-website/edit/dev/docs/user-guide/development.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"development",title:"\u5f00\u53d1\u73af\u5883",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u5feb\u901f\u5f00\u59cb",permalink:"/docs/user-guide/quick-start"},next:{title:"\u7f16\u7a0b\u6a21\u578b",permalink:"/docs/development/dev-model"}},m=[{value:"\u5b89\u88c5 Hadoop\uff08\u53ef\u9009\uff0cYARN Runtime\uff09",id:"\u5b89\u88c5-hadoop\u53ef\u9009yarn-runtime",children:[{value:"\u672c\u5730\u5b89\u88c5 Hadoop \u73af\u5883",id:"\u672c\u5730\u5b89\u88c5-hadoop-\u73af\u5883",children:[],level:3},{value:"\u4f7f\u7528\u5df2\u6709 Hadoop \u96c6\u7fa4",id:"\u4f7f\u7528\u5df2\u6709-hadoop-\u96c6\u7fa4",children:[],level:3}],level:2},{value:"\u5b89\u88c5 Kubernetes \uff08\u53ef\u9009\uff0cK8s Runtime\uff09",id:"\u5b89\u88c5-kubernetes-\u53ef\u9009k8s-runtime",children:[],level:2},{value:"\u5b89\u88c5 Flink\uff08\u53ef\u9009\uff0cStandalone Runtime\uff09",id:"\u5b89\u88c5-flink\u53ef\u9009standalone-runtime",children:[],level:2},{value:"\u5b89\u88c5 Maven",id:"\u5b89\u88c5-maven",children:[],level:2},{value:"\u5b89\u88c5 MySQL",id:"\u5b89\u88c5-mysql",children:[],level:2},{value:"\u5b89\u88c5 Nodejs",id:"\u5b89\u88c5-nodejs",children:[],level:2},{value:"\u5b89\u88c5\u914d\u7f6e StreamX",id:"\u5b89\u88c5\u914d\u7f6e-streamx",children:[{value:"\u540e\u7aef",id:"\u540e\u7aef",children:[{value:"\u7f16\u8bd1",id:"\u7f16\u8bd1",children:[],level:4},{value:"\u89e3\u5305",id:"\u89e3\u5305",children:[],level:4},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",children:[],level:4},{value:"\u542f\u52a8",id:"\u542f\u52a8",children:[{value:"VM options",id:"vm-options",children:[],level:5},{value:"Environment variables",id:"environment-variables",children:[],level:5}],level:4}],level:3},{value:"\u524d\u7aef",id:"\u524d\u7aef",children:[{value:"\u4fee\u6539\u8bf7\u6c42 URL",id:"\u4fee\u6539\u8bf7\u6c42-url",children:[],level:4},{value:"\u7f16\u8bd1\u9879\u76ee",id:"\u7f16\u8bd1\u9879\u76ee",children:[],level:4},{value:"\u542f\u52a8\u9879\u76ee",id:"\u542f\u52a8\u9879\u76ee",children:[],level:4}],level:3}],level:2}],d={toc:m};function u(e){var n=e.components,t=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://github.com/streamxhub/streamx"},"StreamX")," \u9075\u5faa Apache-2.0 \u5f00\u6e90\u534f\u8bae\uff0c\u5c06\u4f1a\u662f\u4e2a\u957f\u671f\u66f4\u65b0\u7684\u6d3b\u8dc3\u9879\u76ee\uff0c\u6b22\u8fce\u5927\u5bb6\u63d0\u4ea4 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/streamxhub/streamx/pulls"},"PR")," \u6216 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/streamxhub/streamx/issues/new/choose"},"ISSUE")," \u559c\u6b22\u8bf7\u7ed9\u4e2a ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/streamxhub/streamx/stargazers"},"Star")," \u60a8\u7684\u652f\u6301\u662f\u6211\u4eec\u6700\u5927\u7684\u52a8\u529b\u3002 \u8be5\u9879\u76ee\u81ea\u5f00\u6e90\u4ee5\u6765\u5c31\u53d7\u5230\u4e0d\u5c11\u670b\u53cb\u7684\u5173\u6ce8\u548c\u8ba4\u53ef\uff0c\u8868\u793a\u611f\u8c22\u3002\u5df2\u9646\u7eed\u6709\u6765\u81ea\u91d1\u878d\uff0c\u6570\u636e\u5206\u6790\uff0c\u8f66\u8054\u7f51\uff0c\u667a\u80fd\u5e7f\u544a\uff0c\u5730\u4ea7\u7b49\u516c\u53f8\u7684\u670b\u53cb\u5728\u4f7f\u7528\uff0c\u4e5f\u4e0d\u4e4f\u6765\u81ea\u4e00\u7ebf\u5927\u5382\u7684\u670b\u53cb\u5728\u4f7f\u7528\u3002\n\u540c\u65f6 StreamX \u793e\u533a\u662f\u4e00\u4e2a\u975e\u5e38\u5f00\u653e,\u76f8\u4e92\u534f\u52a9,\u5c0a\u91cd\u4eba\u624d\u7684\u793e\u533a\u3002\u6211\u4eec\u4e5f\u975e\u5e38\u6b22\u8fce\u66f4\u591a\u7684\u5f00\u53d1\u8005\u52a0\u5165\u4e00\u5757\u8d21\u732e\uff0c\u4e0d\u53ea\u662f\u4ee3\u7801\u7684\u8d21\u732e\uff0c\u8fd8\u5bfb\u6c42\u4f7f\u7528\u6587\u6863\uff0c\u4f53\u9a8c\u62a5\u544a\uff0c\u95ee\u7b54\u7b49\u65b9\u9762\u7684\u8d21\u732e\u3002")),(0,l.kt)("p",null,"\u8d8a\u6765\u8d8a\u591a\u7684\u5f00\u53d1\u8005\u5df2\u7ecf\u4e0d\u6ee1\u8db3\u7b80\u5355\u7684\u5b89\u88c5\u4f7f\u7528\uff0c\u9700\u8981\u8fdb\u4e00\u6b65\u7814\u7a76\u6216\u57fa\u4e8e\u5176\u6e90\u7801\u4e8c\u5f00\u6216\u6269\u5c55\u76f8\u5173\u529f\u80fd\uff0c\u8fd9\u5c31\u9700\u8981\u8fdb\u4e00\u6b65\u7684\u5bf9 StreamX \u6df1\u5165\u4e86\u89e3\u3002 \u672c\u7ae0\u8282\u5177\u4f53\u8bb2\u8bb2\u5982\u4f55\u5728\u672c\u5730\u642d\u5efa ",(0,l.kt)("inlineCode",{parentName:"p"},"streamx-console")," \u6d41\u6279\u4e00\u4f53\u5e73\u53f0\u7684\u5f00\u53d1\u73af\u5883\uff0c\u4e3a\u4e86\u65b9\u4fbf\u8bb2\u89e3\uff0c\u672c\u6587\u4e2d\u6240\u8bf4\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"streamx-console")," \u5747\u6307 ",(0,l.kt)("inlineCode",{parentName:"p"},"streamx-console \u5e73\u53f0"),"\u3002 "),(0,l.kt)("p",null,"StreamX Console \u4ece 1.2.0 \u5f00\u59cb\u5b9e\u73b0\u4e86 Flink-Runtime \u7684\u89e3\u8026\uff0c\u5373",(0,l.kt)("strong",{parentName:"p"},"\u4e0d\u5f3a\u5236\u4f9d\u8d56 Hadoop \u6216 Kubernetes \u73af\u5883"),"\uff0c\u53ef\u4ee5\u6839\u636e\u5b9e\u9645\u5f00\u53d1/\u4f7f\u7528\u9700\u6c42\u81ea\u884c\u5b89\u88c5 Hadoop \u6216 Kubernetes\u3002"),(0,l.kt)("h2",{id:"\u5b89\u88c5-hadoop\u53ef\u9009yarn-runtime"},"\u5b89\u88c5 Hadoop\uff08\u53ef\u9009\uff0cYARN Runtime\uff09"),(0,l.kt)("p",null,"\u5173\u4e8e hadoop \u73af\u5883\u6709\u4e24\u79cd\u65b9\u5f0f\u89e3\u51b3\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"\u672c\u5730\u5b89\u88c5 hadoop \u73af\u5883")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"\u4f7f\u7528\u5df2\u6709\u7684 hadoop \u73af\u5883"),",\u4e0d\u8bba\u662f\u672c\u5730\u5b89\u88c5 hadoop \u73af\u5883\u8fd8\u662f\u4f7f\u7528\u5df2\u6709\u7684 hadoop \u73af\u5883\uff0c\u90fd\u9700\u8981\u786e\u4fdd\u4ee5\u4e0b\u6761\u4ef6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5b89\u88c5\u5e76\u4e14\u914d\u7f6e\u597d ",(0,l.kt)("inlineCode",{parentName:"li"},"hadoop"),",",(0,l.kt)("inlineCode",{parentName:"li"},"yarn")),(0,l.kt)("li",{parentName:"ul"},"\u5df2\u914d\u7f6e ",(0,l.kt)("inlineCode",{parentName:"li"},"HADOOP_HOME")," \u548c ",(0,l.kt)("inlineCode",{parentName:"li"},"HADOOP_CONF_DIR")),(0,l.kt)("li",{parentName:"ul"},"\u5df2\u6210\u529f\u542f\u52a8 ",(0,l.kt)("inlineCode",{parentName:"li"},"hadoop")," \u548c ",(0,l.kt)("inlineCode",{parentName:"li"},"yarn"))),(0,l.kt)("h3",{id:"\u672c\u5730\u5b89\u88c5-hadoop-\u73af\u5883"},"\u672c\u5730\u5b89\u88c5 Hadoop \u73af\u5883"),(0,l.kt)("p",null,"\u5173\u4e8e\u5982\u4f55\u5728\u672c\u5730\u5b89\u88c5 Hadoop \u73af\u5883\u53ef\u81ea\u884c\u67e5\u9605\u76f8\u5173\u8d44\u6599\uff0c\u8fd9\u91cc\u4e0d\u4f5c\u8fc7\u591a\u8bb2\u89e3\u3002"),(0,l.kt)("h3",{id:"\u4f7f\u7528\u5df2\u6709-hadoop-\u96c6\u7fa4"},"\u4f7f\u7528\u5df2\u6709 Hadoop \u96c6\u7fa4"),(0,l.kt)("p",null,"\u63a8\u8350\u4f7f\u7528\u5df2\u6709\u7684 Hadoop \u96c6\u7fa4 ( \u6d4b\u8bd5\u73af\u5883 ) ,\u5982\u4f7f\u7528\u5df2\u6709 hadoop \u96c6\u7fa4\u9700\u8981\u5c06\u4ee5\u4e0b\u914d\u7f6e copy \u5230\u5f00\u53d1\u673a\u5668"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"core-site.xml"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"hdfs-site.xml"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"yarn-site.xml")," \u8fd9\u4e09\u4e2a\u914d\u7f6e\u6587\u4ef6 copy \u5230\u5f00\u53d1\u673a\u5668"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u5f00\u542f\u4e86 kerberos \u8ba4\u8bc1\uff0c\u9700\u8981\u5c06 ",(0,l.kt)("inlineCode",{parentName:"li"},"keytab")," \u6587\u4ef6\u548c ",(0,l.kt)("inlineCode",{parentName:"li"},"krb5.conf")," copy \u5230\u5f00\u53d1\u673a\u5668")),(0,l.kt)("p",null,"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"core-site.xml"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"hdfs-site.xml"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"yarn-site.xml")," \u8fd9\u4e9b\u914d\u7f6e\u6587\u4ef6\u91cc\u7684\u4e00\u7cfb\u5217\u4e3b\u673a\u5730\u5740 ( host ) \u9700\u8981\u5728\u5f53\u524d\u7684\u5f00\u53d1\u673a\u5668\u4e0a\u914d\u7f6e\u51fa\u6765\uff0c\u9700\u8981\u786e\u4fdd\u672c\u673a\u53ef\u4ee5\u8fde\u63a5\u96c6\u7fa4\u91cc\u7684\u673a\u5668\u3002  "),(0,l.kt)("h2",{id:"\u5b89\u88c5-kubernetes-\u53ef\u9009k8s-runtime"},"\u5b89\u88c5 Kubernetes \uff08\u53ef\u9009\uff0cK8s Runtime\uff09"),(0,l.kt)("p",null,"\u672c\u5730\u5f00\u53d1\u53ef\u4ee5\u901a\u8fc7 MiniKube \u6216 KubeSphere \u7b49\u9879\u76ee\u5feb\u901f\u5b89\u88c5 Kubernetes \u73af\u5883\uff0c\u5f53\u7136\u9009\u62e9\u73b0\u6709\u7684 K8s Cluster \u8bbe\u65bd\u66f4\u52a0\u63a8\u8350\u3002\u6b64\u5916\u6309\u65f6\u8ba1\u8d39\u7684\u817e\u8baf\u4e91 TKE / \u963f\u91cc\u4e91 ACK \u4e5f\u662f\u5feb\u901f\u5f00\u53d1\u5f88\u597d\u7684\u9009\u62e9\u3002"),(0,l.kt)("p",null,"\u989d\u5916\u914d\u7f6e\u9700\u6c42\u8bf7\u53c2\u8003\uff1a ",(0,l.kt)("a",{parentName:"p",href:"/docs/flink-k8s/k8s-dev"},(0,l.kt)("strong",{parentName:"a"},"StreamX Flink-K8s \u96c6\u6210\u652f\u6301")),"  "),(0,l.kt)("h2",{id:"\u5b89\u88c5-flink\u53ef\u9009standalone-runtime"},"\u5b89\u88c5 Flink\uff08\u53ef\u9009\uff0cStandalone Runtime\uff09"),(0,l.kt)("p",null,"\u4ece\u5b98\u7f51\u4e0b\u8f7d Flink,\u5e76\u4e14\u542f\u52a8\u6d4b\u8bd5\uff0c\u914d\u7f6e FLINK_HOME"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"wget https://mirrors.bfsu.edu.cn/apache/flink/flink-1.13.1/flink-1.13.1-bin-scala_2.11.tgz\ntar xzf flink-1.13.1-bin-scala_2.11.tgz /opt/\ncd /opt/flink-1.13.1\n")),(0,l.kt)("p",null,"\u542f\u52a8\u672c\u5730 Flink \u7fa4\u96c6\uff0c\u53ef\u4ee5\u68c0\u67e5\u4e0b flink \u662f\u5426\u6b63\u5e38\u542f\u52a8"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"./bin/start-cluster.sh\n")),(0,l.kt)("h2",{id:"\u5b89\u88c5-maven"},"\u5b89\u88c5 Maven"),(0,l.kt)("p",null,"\u6700\u65b0\u7684 Maven \u4e0b\u8f7d\u5730\u5740\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"http://maven.apache.org/download.cgi"),"\uff0c\u6211\u4eec\u521b\u5efa\u4e00\u4e2a\u8fde\u63a5\uff0c\u4ee5\u4fbf mvn \u53ef\u4ee5\u5728\u4efb\u4f55\u5730\u65b9\u8fd0\u884c\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"cd ~\nwget https://mirrors.bfsu.edu.cn/apache/maven/maven-3/3.8.1/binaries/apache-maven-3.8.1-bin.tar.gz\ntar -xzvf apache-maven-3.8.1-bin.tar.gz\nln -s /root/apache-maven-3.8.1/bin/mvn /usr/bin/mvn\n")),(0,l.kt)("h2",{id:"\u5b89\u88c5-mysql"},"\u5b89\u88c5 MySQL"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"console")," \u7528\u5230\u4e86 MySQL,\u56e0\u6b64\u9700\u8981\u51c6\u5907 MySQL \u73af\u5883\uff0c\u4f60\u53ef\u4ee5\u672c\u5730\u5b89\u88c5 MySQL,\u4e5f\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u5df2\u6709\u7684 MySQL,\u5173\u4e8e MySQL \u7684\u5b89\u88c5\u914d\u7f6e\uff0c\u8bf7\u81ea\u884c\u67e5\u9605\u8d44\u6599\uff0c\u8fd9\u91cc\u4e0d\u4f5c\u8fc7\u591a\u8bb2\u89e3"),(0,l.kt)("h2",{id:"\u5b89\u88c5-nodejs"},"\u5b89\u88c5 Nodejs"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"console")," \u524d\u7aef\u90e8\u5206\u91c7\u7528 nodejs \u5f00\u53d1\uff0c\u9700\u8981 nodejs \u73af\u5883\uff0c\u4e0b\u8f7d\u5b89\u88c5\u6700\u65b0\u7684 nodejs \u5373\u53ef"),(0,l.kt)("h2",{id:"\u5b89\u88c5\u914d\u7f6e-streamx"},"\u5b89\u88c5\u914d\u7f6e StreamX"),(0,l.kt)("p",null,"\u5982\u679c\u4ee5\u4e0a\u51c6\u5907\u5de5\u4f5c\u90fd\u5df2\u7ecf\u5c31\u7eea\uff0c\u6b64\u65f6\u5c31\u53ef\u4ee5\u5b89\u88c5\u914d\u7f6e ",(0,l.kt)("inlineCode",{parentName:"p"},"streamx-console")," \u4e86\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"streamx-console")," \u662f\u524d\u540e\u7aef\u5206\u79bb\u7684\u9879\u76ee\uff0c\u5728\u9879\u76ee\u6700\u7ec8\u6253\u5305\u90e8\u7f72\u65f6\u4e3a\u4e86\u65b9\u4fbf\u5feb\u6377\uff0c\u51cf\u5c11\u7528\u6237\u7684\u4f7f\u7528\u548c\u5b66\u4e60\u6210\u672c\uff0c\u4f7f\u7528\u4e86\u524d\u540e\u7aef\u6df7\u5408\u6253\u5305\u90e8\u7f72\u6a21\u5f0f\uff0c\u4f46\u5728\u5f00\u53d1\u9636\u6bb5\u5efa\u8bae\u4f7f\u7528\u524d\u540e\u7aef\u5206\u79bb\u6a21\u5f0f\u8fdb\u884c\u5f00\u53d1\u8c03\u8bd5\uff0c\u5177\u4f53\u6b65\u9aa4\u5982\u4e0b"),(0,l.kt)("h3",{id:"\u540e\u7aef"},"\u540e\u7aef"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"streamx-console")," \u540e\u7aef\u91c7\u7528 springBoot + Mybatis \u5f00\u53d1\uff0c JWT \u6743\u9650\u9a8c\u8bc1\uff0c\u975e\u5e38\u5e38\u89c1\u7684\u540e\u7aef\u6280\u672f\u6808\u3002\u4e0b\u9762\u6765\u770b\u770b\u540e\u7aef\u6309\u7167\u90e8\u7f72\u5177\u4f53\u6d41\u7a0b"),(0,l.kt)("h4",{id:"\u7f16\u8bd1"},"\u7f16\u8bd1"),(0,l.kt)("p",null,"\u9996\u5148\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"StreamX")," \u5de5\u7a0b\u4e0b\u8f7d\u5230\u672c\u5730\u5e76\u4e14\u7f16\u8bd1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/streamxhub/streamx.git\ncd streamx\nmvn clean install -DskipTests -Denv=prod\n")),(0,l.kt)("h4",{id:"\u89e3\u5305"},"\u89e3\u5305"),(0,l.kt)("p",null,"\u5b89\u88c5\u5b8c\u6210\u4e4b\u540e\u5c31\u770b\u5230\u6700\u7ec8\u7684\u5de5\u7a0b\u6587\u4ef6\u89e3\u5305\uff0c\u4f4d\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"streamx/streamx-console/streamx-console-service/target/streamx-console-service-${version}-bin.tar.gz"),",\u89e3\u5305\u4e4b\u540e\u7684\u76ee\u5f55\u5982\u4e0b:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-textmate"},".\nstreamx-console-service-${version}\n\u251c\u2500\u2500 bin\n\u2502    \u251c\u2500\u2500 flame-graph\n\u2502    \u251c\u2500\u2500   \u2514\u2500\u2500 *.py\n\u2502    \u251c\u2500\u2500 startup.sh\n\u2502    \u251c\u2500\u2500 setclasspath.sh\n\u2502    \u251c\u2500\u2500 shutdown.sh\n\u2502    \u251c\u2500\u2500 yaml.sh\n\u251c\u2500\u2500 conf\n\u2502    \u251c\u2500\u2500 application.yaml\n\u2502    \u251c\u2500\u2500 application-prod.yml\n\u2502    \u251c\u2500\u2500 flink-application.template\n\u2502    \u251c\u2500\u2500 logback-spring.xml\n\u2502    \u2514\u2500\u2500 ...\n\u251c\u2500\u2500 lib\n\u2502    \u2514\u2500\u2500 *.jar\n\u251c\u2500\u2500 plugins\n\u2502    \u251c\u2500\u2500 streamx-jvm-profiler-1.0.0.jar\n\u2502    \u2514\u2500\u2500 streamx-flink-sqlclient-1.0.0.jar\n\u251c\u2500\u2500 logs\n\u251c\u2500\u2500 temp\n")),(0,l.kt)("p",null,"\u5c06\u89e3\u5305\u540e\u7684\u6574\u4e2a\u5de5\u7a0b\u6587\u4ef6 copy \u5230 target \u4e4b\u5916\u7684\u5176\u4ed6\u4efb\u610f\u4f4d\u7f6e\u5373\u53ef\u5b8c\u6210\u6b64\u6b65\u9aa4\uff0c\u8be5\u6b65\u4e3b\u8981\u662f\u9632\u6b62\u4e0b\u6b21\u6267\u884c mvn clean \u88ab\u6e05\u7406\uff0c\u5982\u653e\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"/opt/streamx/"),",\u5219\u6b64\u65f6\u8be5\u6587\u4ef6\u7684\u5b8c\u6574\u8def\u5f84\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"/opt/streamx/streamx-console-service-${version}"),",\u8bb0\u4f4f\u8fd9\u4e2a\u8def\u5f84\uff0c\u540e\u9762\u4f1a\u7528\u5230"),(0,l.kt)("h4",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,l.kt)("p",null,"\u7528 IDE \u5bfc\u5165\u521a\u4ece git \u4e0a clone \u4e0b\u6765\u7684 StreamX \u6e90\u7801 ( \u63a8\u8350\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"IntelliJ IDEA")," ) ,\u8fdb\u5165\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"resources")," \u4e0b\uff0c\u7f16\u8f91 application-prod.xml,\u627e\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"datasource"),",\u4fee\u6539\u4e0b jdbc \u7684\u8fde\u63a5\u4fe1\u606f\uff0c\u5177\u4f53\u53ef\u53c2\u8003\u5b89\u88c5\u90e8\u7f72\u7ae0\u8282 ",(0,l.kt)("a",{parentName:"p",href:"http://www.streamxhub.com/zh/doc/console/deploy/#%E4%BF%AE%E6%94%B9%E9%85%8D%E7%BD%AE"},"\u4fee\u6539\u914d\u7f6e")," \u90e8\u5206"),(0,l.kt)("img",{src:"/doc/image/console_conf.jpg"}),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u8981\u8fde\u63a5\u7684\u76ee\u6807\u96c6\u7fa4\u5f00\u542f\u4e86 kerberos \u8ba4\u8bc1\uff0c\u5219\u9700\u8981\u914d\u7f6e kerberos \u4fe1\u606f\uff0c\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"resources")," \u4e0b\u627e\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"kerberos.xml")," \u914d\u7f6e\u4e0a\u76f8\u5173\u4fe1\u606f\u5373\u53ef\uff0c\u9ed8\u8ba4 kerberos \u662f\u5173\u95ed\u72b6\u6001\uff0c\u8981\u542f\u7528\u9700\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"enable")," \u8bbe\u7f6e\u4e3a true, \u5982\u4e0b:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"security:\n  kerberos:\n    login:\n      enable: false\n      principal:\n      krb5:\n      keytab:\njava:\n  security:\n    krb5:\n      conf:\n")),(0,l.kt)("h4",{id:"\u542f\u52a8"},"\u542f\u52a8"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"streamx-console")," \u662f\u57fa\u4e8e springBoot \u5f00\u53d1\u7684 web \u5e94\u7528\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"com.streamxhub.streamx.console.StreamXConsole")," \u4e3a\u4e3b\u7c7b\uff0c \u5728\u542f\u52a8\u4e3b\u7c7b\u4e4b\u524d\uff0c\u9700\u8981\u8bbe\u7f6e\u4e0b ",(0,l.kt)("inlineCode",{parentName:"p"},"VM options")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"Environment variables")),(0,l.kt)("h5",{id:"vm-options"},"VM options"),(0,l.kt)("p",null,"\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"VM options")," \u9700\u8981\u8bbe\u7f6e ",(0,l.kt)("inlineCode",{parentName:"p"},"app.home"),":\u503c\u4e3a\u4e0a\u9762\u89e3\u5305\u540e\u7684 streamx-console \u7684\u5b8c\u6574\u8def\u5f84:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"-Dapp.home=/opt/streamx/streamx-console-service-${version}\n")),(0,l.kt)("br",null),"\u5982\u679c\u5f00\u53d1\u673a\u4f7f\u7528\u7684 jdk \u7248\u672c\u662f jdk1.8 \u4ee5\u4e0a\u7248\u672c\uff0c \u5219\u9700\u8981\u52a0\u4e0a\u5982\u4e0b\u53c2\u6570: ",(0,l.kt)("br",null),"```yaml --add-opens java.base/jdk.internal.loader=ALL-UNNAMED --add-opens jdk.zipfs/jdk.nio.zipfs=ALL-UNNAMED ```",(0,l.kt)("h5",{id:"environment-variables"},"Environment variables"),(0,l.kt)("p",null,"\u5982\u4f7f\u7528\u975e\u672c\u5730\u5b89\u88c5\u7684 hadoop \u96c6\u7fa4 ( \u6d4b\u8bd5 hadoop ) ",(0,l.kt)("inlineCode",{parentName:"p"},"Environment variables")," \u4e2d\u9700\u8981\u914d\u7f6e ",(0,l.kt)("inlineCode",{parentName:"p"},"HADOOP_USER_NAME")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"HADOOP_CONF_DIR"),",\n",(0,l.kt)("inlineCode",{parentName:"p"},"HADOOP_USER_NAME")," \u4e3a hdfs \u6216\u8005\u6709\u8bfb\u5199\u6743\u9650\u7684 hadoop \u7528\u6237\u540d\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"HADOOP_CONF_DIR")," \u4e3a\u4e0a\u9762\u7b2c\u4e00\u6b65\u5b89\u88c5 hadoop \u6b65\u9aa4\u4e2d\u4ece\u6d4b\u8bd5\u96c6\u7fa4 copy \u76f8\u5173\u914d\u7f6e\u6587\u4ef6\u5728\u5f00\u53d1\u673a\u5668\u4e0a\u7684\u5b58\u653e\u4f4d\u7f6e\uff0c\u5982\u679c\u662f\u672c\u5730\u5b89\u88c5\u7684 hadoop \u5219\u4e0d\u9700\u8981\u914d\u7f6e\u8be5\u9879\uff0c"),(0,l.kt)("img",{src:"/doc/image/streamx_ideaopt.jpg"}),(0,l.kt)("p",null,"\u5982\u679c\u4e00\u5207\u51c6\u5047\u5c31\u7eea\uff0c\u5c31\u53ef\u4ee5\u76f4\u63a5\u542f\u52a8 ",(0,l.kt)("inlineCode",{parentName:"p"},"StreamXConsole")," \u4e3b\u7c7b\u542f\u52a8\u9879\u76ee\uff0c\u540e\u7aef\u5c31\u542f\u52a8\u6210\u529f\u4e86\u3002\u4f1a\u770b\u5230\u6709\u76f8\u5173\u7684\u542f\u52a8\u4fe1\u606f\u6253\u5370\u8f93\u51fa"),(0,l.kt)("h3",{id:"\u524d\u7aef"},"\u524d\u7aef"),(0,l.kt)("p",null,"streamx web \u524d\u7aef\u90e8\u5206\u91c7\u7528 nodejs + vue \u5f00\u53d1\uff0c\u56e0\u6b64\u9700\u8981\u5728\u673a\u5668\u4e0a\u6309\u7167 node \u73af\u5883\uff0c\u5b8c\u6574\u6d41\u7a0b\u5982\u4e0b:"),(0,l.kt)("h4",{id:"\u4fee\u6539\u8bf7\u6c42-url"},"\u4fee\u6539\u8bf7\u6c42 URL"),(0,l.kt)("p",null,"\u7531\u4e8e\u662f\u524d\u540e\u7aef\u5206\u79bb\u9879\u76ee\uff0c\u524d\u7aef\u9700\u8981\u77e5\u9053\u540e\u7aef ( streamx-console ) \u7684\u8bbf\u95ee\u5730\u5740\uff0c\u624d\u80fd\u524d\u540e\u914d\u5408\u5de5\u4f5c\uff0c\u56e0\u6b64\u9700\u8981\u540e\u7aef\u7684 URL,\u5177\u4f53\u4f4d\u7f6e\u5728:\n",(0,l.kt)("inlineCode",{parentName:"p"},"streamx-console/streamx-console-webapp/src/api/baseUrl.js")),(0,l.kt)("p",null,"\u914d\u7f6e\u9ed8\u8ba4\u5982\u4e0b:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"export function baseUrl() {\n    let url = ''\n    switch (process.env.NODE_ENV) {\n        //\u6df7\u5408\u6253\u5305 ( production,\u4e0d\u7528\u914d\u7f6e\uff0cmaven \u7f16\u8bd1\u9879\u76ee\u9636\u6bb5-Denv=prod \u81ea\u52a8\u5c06\u73af\u5883\u53c2\u6570\u900f\u4f20\u5230\u8fd9\u91cc )\n        case 'production':\n            url = (arguments[0] || null) ? (location.protocol + '//' + location.host) : '/'\n            break\n        //\u5f00\u53d1\u6d4b\u8bd5\u9636\u6bb5\u91c7\u7528\u524d\u540e\u7aef\u5206\u79bb\uff0c\u8fd9\u91cc\u914d\u7f6e\u540e\u7aef\u7684\u8bf7\u6c42 URI\n        case 'development':\n            url = 'http://localhost:10000'\n            break\n    }\n    return url\n}\n")),(0,l.kt)("p",null,"\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"development")," \u4e0b\u7684 URL \u8fde\u63a5\u6539\u4e3a\u540e\u7aef\u7684 URI \u5373\u53ef"),(0,l.kt)("h4",{id:"\u7f16\u8bd1\u9879\u76ee"},"\u7f16\u8bd1\u9879\u76ee"),(0,l.kt)("p",null,"\u63a5\u4e0b\u6765\u9700\u8981\u7f16\u8bd1\u9879\u76ee\uff0c\u5177\u4f53\u6b65\u9aa4\u5982\u4e0b:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"cd streamx-console/streamx-console-webapp\nnpm install\n")),(0,l.kt)("h4",{id:"\u542f\u52a8\u9879\u76ee"},"\u542f\u52a8\u9879\u76ee"),(0,l.kt)("p",null,"\u4ee5\u4e0a\u6b65\u9aa4\u6267\u884c\u5b8c\u6bd5\u5373\u53ef\u542f\u52a8\u9879\u76ee\u5373\u53ef"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"cd streamx-console/streamx-console-webapp\nnpm run serve\n")))}u.isMDXComponent=!0}}]);