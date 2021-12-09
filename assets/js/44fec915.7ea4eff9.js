"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[79050],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return k}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),m=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},s=function(e){var t=m(e.components);return r.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=m(a),k=n,N=c["".concat(o,".").concat(k)]||c[k]||d[k]||i;return a?r.createElement(N,p(p({ref:t},s),{},{components:a})):r.createElement(N,p({ref:t},s))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,p=new Array(i);p[0]=c;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,p[1]=l;for(var m=2;m<i;m++)p[m]=a[m];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},45343:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return m},toc:function(){return s},default:function(){return c}});var r=a(83117),n=a(80102),i=(a(67294),a(3905)),p=["components"],l={id:"core.serializationcontext",title:"Class: SerializationContext<T>",sidebar_label:"SerializationContext",custom_edit_url:null,hide_title:!0},o="Class: SerializationContext<T>",m={unversionedId:"api/classes/core.serializationcontext",id:"version-4.5/api/classes/core.serializationcontext",title:"Class: SerializationContext<T>",description:"core.SerializationContext",source:"@site/versioned_docs/version-4.5/api/classes/core.serializationcontext.md",sourceDirName:"api/classes",slug:"/api/classes/core.serializationcontext",permalink:"/docs/api/classes/core.serializationcontext",editUrl:null,tags:[],version:"4.5",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1639055630,formattedLastUpdatedAt:"12/9/2021",frontMatter:{id:"core.serializationcontext",title:"Class: SerializationContext<T>",sidebar_label:"SerializationContext",custom_edit_url:null,hide_title:!0},sidebar:"version-4.5/API",previous:{title:"RequestContext",permalink:"/docs/api/classes/core.requestcontext"},next:{title:"ServerException",permalink:"/docs/api/classes/core.serverexception"}},s=[{value:"Type parameters",id:"type-parameters",children:[],level:2},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[{value:"Type parameters:",id:"type-parameters-1",children:[],level:4},{value:"Parameters:",id:"parameters",children:[],level:4}],level:3}],level:2},{value:"Properties",id:"properties",children:[{value:"path",id:"path",children:[],level:3}],level:2},{value:"Methods",id:"methods",children:[{value:"isMarkedAsPopulated",id:"ismarkedaspopulated",children:[{value:"Parameters:",id:"parameters-1",children:[],level:4}],level:3},{value:"leave",id:"leave",children:[{value:"Type parameters:",id:"type-parameters-2",children:[],level:4},{value:"Parameters:",id:"parameters-2",children:[],level:4}],level:3},{value:"visit",id:"visit",children:[{value:"Parameters:",id:"parameters-3",children:[],level:4}],level:3},{value:"propagate",id:"propagate",children:[{value:"Parameters:",id:"parameters-4",children:[],level:4}],level:3}],level:2}],d={toc:s};function c(e){var t=e.components,a=(0,n.Z)(e,p);return(0,i.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"class-serializationcontextt"},"Class: SerializationContext<T",">"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/core"},"core"),".SerializationContext"),(0,i.kt)("p",null,"Helper that allows to keep track of where we are currently at when serializing complex entity graph with cycles.\nBefore we process a property, we call ",(0,i.kt)("inlineCode",{parentName:"p"},"visit")," that checks if it is not a cycle path (but allows to pass cycles that\nare defined in populate hint). If not, we proceed and call ",(0,i.kt)("inlineCode",{parentName:"p"},"leave")," afterwards."),(0,i.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"T")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/modules/core#anyentity"},(0,i.kt)("em",{parentName:"a"},"AnyEntity")),"<T",">")))),(0,i.kt)("h2",{id:"constructors"},"Constructors"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("p",null,"+"," ",(0,i.kt)("strong",{parentName:"p"},"new SerializationContext"),"<T",">","(",(0,i.kt)("inlineCode",{parentName:"p"},"populate"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/core#populateoptions"},(0,i.kt)("em",{parentName:"a"},"PopulateOptions")),"<T",">","[]): ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.serializationcontext"},(0,i.kt)("em",{parentName:"a"},"SerializationContext")),"<T",">"),(0,i.kt)("h4",{id:"type-parameters-1"},"Type parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"T")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/modules/core#anyentity"},(0,i.kt)("em",{parentName:"a"},"AnyEntity")),"<T",">")))),(0,i.kt)("h4",{id:"parameters"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"populate")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/modules/core#populateoptions"},(0,i.kt)("em",{parentName:"a"},"PopulateOptions")),"<T",">","[]")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.serializationcontext"},(0,i.kt)("em",{parentName:"a"},"SerializationContext")),"<T",">"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/entity/EntityTransformer.ts#L15"},"packages/core/src/entity/EntityTransformer.ts:15")),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"path"},"path"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"path"),": ","[",(0,i.kt)("em",{parentName:"p"},"string"),", ",(0,i.kt)("em",{parentName:"p"},"string"),"][]"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/entity/EntityTransformer.ts#L15"},"packages/core/src/entity/EntityTransformer.ts:15")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"ismarkedaspopulated"},"isMarkedAsPopulated"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Private"),(0,i.kt)("strong",{parentName:"p"},"isMarkedAsPopulated"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"prop"),": ",(0,i.kt)("em",{parentName:"p"},"string"),"): ",(0,i.kt)("em",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"prop")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"string"))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/entity/EntityTransformer.ts#L63"},"packages/core/src/entity/EntityTransformer.ts:63")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"leave"},"leave"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"leave"),"<U",">","(",(0,i.kt)("inlineCode",{parentName:"p"},"entityName"),": ",(0,i.kt)("em",{parentName:"p"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"prop"),": ",(0,i.kt)("em",{parentName:"p"},"string"),"): ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"type-parameters-2"},"Type parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"U"))))),(0,i.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"entityName")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"prop")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"string"))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/entity/EntityTransformer.ts#L34"},"packages/core/src/entity/EntityTransformer.ts:34")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"visit"},"visit"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"visit"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"entityName"),": ",(0,i.kt)("em",{parentName:"p"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"prop"),": ",(0,i.kt)("em",{parentName:"p"},"string"),"): ",(0,i.kt)("em",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"entityName")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"prop")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"string"))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/entity/EntityTransformer.ts#L19"},"packages/core/src/entity/EntityTransformer.ts:19")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"propagate"},"propagate"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Static"),(0,i.kt)("strong",{parentName:"p"},"propagate"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"root"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/core.serializationcontext"},(0,i.kt)("em",{parentName:"a"},"SerializationContext")),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/core#anyentity"},(0,i.kt)("em",{parentName:"a"},"AnyEntity")),"<any",">",">",", ",(0,i.kt)("inlineCode",{parentName:"p"},"entity"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/core#anyentity"},(0,i.kt)("em",{parentName:"a"},"AnyEntity")),"<any",">","): ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("p",null,"When initializing new context, we need to propagate it to the whole entity graph recursively."),(0,i.kt)("h4",{id:"parameters-4"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"root")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/classes/core.serializationcontext"},(0,i.kt)("em",{parentName:"a"},"SerializationContext")),"<",(0,i.kt)("a",{parentName:"td",href:"/docs/api/modules/core#anyentity"},(0,i.kt)("em",{parentName:"a"},"AnyEntity")),"<any",">",">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"entity")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/modules/core#anyentity"},(0,i.kt)("em",{parentName:"a"},"AnyEntity")),"<any",">")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"void")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/entity/EntityTransformer.ts#L46"},"packages/core/src/entity/EntityTransformer.ts:46")))}c.isMDXComponent=!0}}]);