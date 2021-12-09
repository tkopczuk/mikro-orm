"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[68628],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return s}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),k=p(n),s=r,N=k["".concat(d,".").concat(s)]||k[s]||c[s]||i;return n?a.createElement(N,l(l({ref:t},m),{},{components:n})):a.createElement(N,l({ref:t},m))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=k;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},42187:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return m},default:function(){return k}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),l=["components"],o={id:"core.Connection",title:"Class: Connection",sidebar_label:"Connection",custom_edit_url:null},d=void 0,p={unversionedId:"api/classes/core.Connection",id:"api/classes/core.Connection",title:"Class: Connection",description:"core.Connection",source:"@site/docs/api/classes/core.Connection.md",sourceDirName:"api/classes",slug:"/api/classes/core.Connection",permalink:"/docs/next/api/classes/core.Connection",editUrl:null,tags:[],version:"current",frontMatter:{id:"core.Connection",title:"Class: Connection",sidebar_label:"Connection",custom_edit_url:null},sidebar:"API",previous:{title:"Configuration",permalink:"/docs/next/api/classes/core.Configuration"},next:{title:"ConnectionException",permalink:"/docs/next/api/classes/core.ConnectionException"}},m=[{value:"Hierarchy",id:"hierarchy",children:[],level:2},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[{value:"Parameters",id:"parameters",children:[],level:4},{value:"Defined in",id:"defined-in",children:[],level:4}],level:3}],level:2},{value:"Methods",id:"methods",children:[{value:"begin",id:"begin",children:[{value:"Parameters",id:"parameters-1",children:[],level:4},{value:"Returns",id:"returns",children:[],level:4},{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3},{value:"close",id:"close",children:[{value:"Parameters",id:"parameters-2",children:[],level:4},{value:"Returns",id:"returns-1",children:[],level:4},{value:"Defined in",id:"defined-in-2",children:[],level:4}],level:3},{value:"commit",id:"commit",children:[{value:"Parameters",id:"parameters-3",children:[],level:4},{value:"Returns",id:"returns-2",children:[],level:4},{value:"Defined in",id:"defined-in-3",children:[],level:4}],level:3},{value:"connect",id:"connect",children:[{value:"Returns",id:"returns-3",children:[],level:4},{value:"Defined in",id:"defined-in-4",children:[],level:4}],level:3},{value:"execute",id:"execute",children:[{value:"Type parameters",id:"type-parameters",children:[],level:4},{value:"Parameters",id:"parameters-4",children:[],level:4},{value:"Returns",id:"returns-4",children:[],level:4},{value:"Defined in",id:"defined-in-5",children:[],level:4}],level:3},{value:"getClientUrl",id:"getclienturl",children:[{value:"Returns",id:"returns-5",children:[],level:4},{value:"Defined in",id:"defined-in-6",children:[],level:4}],level:3},{value:"getConnectionOptions",id:"getconnectionoptions",children:[{value:"Returns",id:"returns-6",children:[],level:4},{value:"Defined in",id:"defined-in-7",children:[],level:4}],level:3},{value:"getDefaultClientUrl",id:"getdefaultclienturl",children:[{value:"Returns",id:"returns-7",children:[],level:4},{value:"Defined in",id:"defined-in-8",children:[],level:4}],level:3},{value:"getPlatform",id:"getplatform",children:[{value:"Returns",id:"returns-8",children:[],level:4},{value:"Defined in",id:"defined-in-9",children:[],level:4}],level:3},{value:"isConnected",id:"isconnected",children:[{value:"Returns",id:"returns-9",children:[],level:4},{value:"Defined in",id:"defined-in-10",children:[],level:4}],level:3},{value:"rollback",id:"rollback",children:[{value:"Parameters",id:"parameters-5",children:[],level:4},{value:"Returns",id:"returns-10",children:[],level:4},{value:"Defined in",id:"defined-in-11",children:[],level:4}],level:3},{value:"setMetadata",id:"setmetadata",children:[{value:"Parameters",id:"parameters-6",children:[],level:4},{value:"Returns",id:"returns-11",children:[],level:4},{value:"Defined in",id:"defined-in-12",children:[],level:4}],level:3},{value:"setPlatform",id:"setplatform",children:[{value:"Parameters",id:"parameters-7",children:[],level:4},{value:"Returns",id:"returns-12",children:[],level:4},{value:"Defined in",id:"defined-in-13",children:[],level:4}],level:3},{value:"transactional",id:"transactional",children:[{value:"Type parameters",id:"type-parameters-1",children:[],level:4},{value:"Parameters",id:"parameters-8",children:[],level:4},{value:"Returns",id:"returns-13",children:[],level:4},{value:"Defined in",id:"defined-in-14",children:[],level:4}],level:3}],level:2}],c={toc:m};function k(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../modules/core"},"core"),".Connection"),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Connection"))),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("a",{parentName:"p",href:"knex.AbstractSqlConnection"},(0,i.kt)("inlineCode",{parentName:"a"},"AbstractSqlConnection"))))),(0,i.kt)("h2",{id:"constructors"},"Constructors"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"new Connection"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"config"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"options?"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"type?"),")"),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"config")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"core.Configuration"},(0,i.kt)("inlineCode",{parentName:"a"},"Configuration")),"<",(0,i.kt)("a",{parentName:"td",href:"../interfaces/core.IDatabaseDriver"},(0,i.kt)("inlineCode",{parentName:"a"},"IDatabaseDriver")),"<",(0,i.kt)("a",{parentName:"td",href:"core.Connection"},(0,i.kt)("inlineCode",{parentName:"a"},"Connection")),">",">"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"options?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../interfaces/core.ConnectionOptions"},(0,i.kt)("inlineCode",{parentName:"a"},"ConnectionOptions"))),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"type")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},'"read"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},'"write"')),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"'write'"))))),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/f7bd236/packages/core/src/connections/Connection.ts#L18"},"packages/core/src/connections/Connection.ts:18")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"begin"},"begin"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"begin"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"options?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"options?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Object"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"options.ctx?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"any"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"options.eventBroadcaster?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"core.TransactionEventBroadcaster"},(0,i.kt)("inlineCode",{parentName:"a"},"TransactionEventBroadcaster")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"options.isolationLevel?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../enums/core.IsolationLevel"},(0,i.kt)("inlineCode",{parentName:"a"},"IsolationLevel")))))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/f7bd236/packages/core/src/connections/Connection.ts#L60"},"packages/core/src/connections/Connection.ts:60")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"close"},"close"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"close"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"force?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,i.kt)("p",null,"Closes the database connection (aka disconnect)"),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"force?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean"))))),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/f7bd236/packages/core/src/connections/Connection.ts#L45"},"packages/core/src/connections/Connection.ts:45")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"commit"},"commit"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"commit"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"ctx"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"eventBroadcaster?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,i.kt)("h4",{id:"parameters-3"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"ctx")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"any"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"eventBroadcaster?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"core.TransactionEventBroadcaster"},(0,i.kt)("inlineCode",{parentName:"a"},"TransactionEventBroadcaster")))))),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/f7bd236/packages/core/src/connections/Connection.ts#L64"},"packages/core/src/connections/Connection.ts:64")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"connect"},"connect"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Abstract")," ",(0,i.kt)("strong",{parentName:"p"},"connect"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,i.kt)("p",null,"Establishes connection to database"),(0,i.kt)("h4",{id:"returns-3"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/f7bd236/packages/core/src/connections/Connection.ts#L35"},"packages/core/src/connections/Connection.ts:35")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"execute"},"execute"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Abstract")," ",(0,i.kt)("strong",{parentName:"p"},"execute"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"T"),">","(",(0,i.kt)("inlineCode",{parentName:"p"},"query"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"params?"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"method?"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ctx?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,i.kt)("h4",{id:"type-parameters"},"Type parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"T"))))),(0,i.kt)("h4",{id:"parameters-4"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"query")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"params?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"any"),"[]")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"method?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},'"get"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},'"all"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},'"run"'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"ctx?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"any"))))),(0,i.kt)("h4",{id:"returns-4"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/f7bd236/packages/core/src/connections/Connection.ts#L72"},"packages/core/src/connections/Connection.ts:72")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getclienturl"},"getClientUrl"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getClientUrl"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"returns-5"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/f7bd236/packages/core/src/connections/Connection.ts#L86"},"packages/core/src/connections/Connection.ts:86")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getconnectionoptions"},"getConnectionOptions"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getConnectionOptions"),"(): ",(0,i.kt)("a",{parentName:"p",href:"../interfaces/core.ConnectionConfig"},(0,i.kt)("inlineCode",{parentName:"a"},"ConnectionConfig"))),(0,i.kt)("h4",{id:"returns-6"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../interfaces/core.ConnectionConfig"},(0,i.kt)("inlineCode",{parentName:"a"},"ConnectionConfig"))),(0,i.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/f7bd236/packages/core/src/connections/Connection.ts#L74"},"packages/core/src/connections/Connection.ts:74")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getdefaultclienturl"},"getDefaultClientUrl"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Abstract")," ",(0,i.kt)("strong",{parentName:"p"},"getDefaultClientUrl"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Returns default client url for given driver (e.g. mongodb://127.0.0.1:27017 for mongodb)"),(0,i.kt)("h4",{id:"returns-7"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/f7bd236/packages/core/src/connections/Connection.ts#L54"},"packages/core/src/connections/Connection.ts:54")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getplatform"},"getPlatform"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getPlatform"),"(): ",(0,i.kt)("a",{parentName:"p",href:"core.Platform"},(0,i.kt)("inlineCode",{parentName:"a"},"Platform"))),(0,i.kt)("h4",{id:"returns-8"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"core.Platform"},(0,i.kt)("inlineCode",{parentName:"a"},"Platform"))),(0,i.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/f7bd236/packages/core/src/connections/Connection.ts#L101"},"packages/core/src/connections/Connection.ts:101")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"isconnected"},"isConnected"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Abstract")," ",(0,i.kt)("strong",{parentName:"p"},"isConnected"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),">"),(0,i.kt)("p",null,"Are we connected to the database"),(0,i.kt)("h4",{id:"returns-9"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),">"),(0,i.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/f7bd236/packages/core/src/connections/Connection.ts#L40"},"packages/core/src/connections/Connection.ts:40")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"rollback"},"rollback"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"rollback"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"ctx"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"eventBroadcaster?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,i.kt)("h4",{id:"parameters-5"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"ctx")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"any"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"eventBroadcaster?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"core.TransactionEventBroadcaster"},(0,i.kt)("inlineCode",{parentName:"a"},"TransactionEventBroadcaster")))))),(0,i.kt)("h4",{id:"returns-10"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,i.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/f7bd236/packages/core/src/connections/Connection.ts#L68"},"packages/core/src/connections/Connection.ts:68")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"setmetadata"},"setMetadata"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"setMetadata"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"metadata"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"parameters-6"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"metadata")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"core.MetadataStorage"},(0,i.kt)("inlineCode",{parentName:"a"},"MetadataStorage")))))),(0,i.kt)("h4",{id:"returns-11"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/f7bd236/packages/core/src/connections/Connection.ts#L93"},"packages/core/src/connections/Connection.ts:93")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"setplatform"},"setPlatform"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"setPlatform"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"platform"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"parameters-7"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"platform")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"core.Platform"},(0,i.kt)("inlineCode",{parentName:"a"},"Platform")))))),(0,i.kt)("h4",{id:"returns-12"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/f7bd236/packages/core/src/connections/Connection.ts#L97"},"packages/core/src/connections/Connection.ts:97")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"transactional"},"transactional"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"transactional"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"T"),">","(",(0,i.kt)("inlineCode",{parentName:"p"},"cb"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"options?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"T"),">"),(0,i.kt)("h4",{id:"type-parameters-1"},"Type parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"T"))))),(0,i.kt)("h4",{id:"parameters-8"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"cb")),(0,i.kt)("td",{parentName:"tr",align:"left"},"(",(0,i.kt)("inlineCode",{parentName:"td"},"trx"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"any"),") => ",(0,i.kt)("inlineCode",{parentName:"td"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"T"),">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"options?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Object"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"options.ctx?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"any"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"options.eventBroadcaster?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"core.TransactionEventBroadcaster"},(0,i.kt)("inlineCode",{parentName:"a"},"TransactionEventBroadcaster")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"options.isolationLevel?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../enums/core.IsolationLevel"},(0,i.kt)("inlineCode",{parentName:"a"},"IsolationLevel")))))),(0,i.kt)("h4",{id:"returns-13"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"T"),">"),(0,i.kt)("h4",{id:"defined-in-14"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/f7bd236/packages/core/src/connections/Connection.ts#L56"},"packages/core/src/connections/Connection.ts:56")))}k.isMDXComponent=!0}}]);