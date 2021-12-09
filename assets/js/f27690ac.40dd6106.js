"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[58187],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(t),m=i,k=u["".concat(p,".").concat(m)]||u[m]||s[m]||a;return t?r.createElement(k,l(l({ref:n},d),{},{components:t})):r.createElement(k,l({ref:n},d))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=u;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<a;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},10720:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var r=t(83117),i=t(80102),a=(t(67294),t(3905)),l=["components"],o={id:"knex.ForeignKey",title:"Interface: ForeignKey",sidebar_label:"ForeignKey",custom_edit_url:null},p=void 0,c={unversionedId:"api/interfaces/knex.ForeignKey",id:"api/interfaces/knex.ForeignKey",title:"Interface: ForeignKey",description:"knex.ForeignKey",source:"@site/docs/api/interfaces/knex.ForeignKey.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/knex.ForeignKey",permalink:"/docs/next/api/interfaces/knex.ForeignKey",editUrl:null,tags:[],version:"current",frontMatter:{id:"knex.ForeignKey",title:"Interface: ForeignKey",sidebar_label:"ForeignKey",custom_edit_url:null},sidebar:"API",previous:{title:"DeleteQueryBuilder",permalink:"/docs/next/api/interfaces/knex.DeleteQueryBuilder"},next:{title:"ICriteriaNode",permalink:"/docs/next/api/interfaces/knex.ICriteriaNode"}},d=[{value:"Properties",id:"properties",children:[{value:"columnNames",id:"columnnames",children:[{value:"Defined in",id:"defined-in",children:[],level:4}],level:3},{value:"constraintName",id:"constraintname",children:[{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3},{value:"deleteRule",id:"deleterule",children:[{value:"Defined in",id:"defined-in-2",children:[],level:4}],level:3},{value:"localTableName",id:"localtablename",children:[{value:"Defined in",id:"defined-in-3",children:[],level:4}],level:3},{value:"referencedColumnNames",id:"referencedcolumnnames",children:[{value:"Defined in",id:"defined-in-4",children:[],level:4}],level:3},{value:"referencedTableName",id:"referencedtablename",children:[{value:"Defined in",id:"defined-in-5",children:[],level:4}],level:3},{value:"updateRule",id:"updaterule",children:[{value:"Defined in",id:"defined-in-6",children:[],level:4}],level:3}],level:2}],s={toc:d};function u(e){var n=e.components,t=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../modules/knex"},"knex"),".ForeignKey"),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"columnnames"},"columnNames"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"columnNames"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/f7bd236/packages/knex/src/typings.ts#L53"},"packages/knex/src/typings.ts:53")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"constraintname"},"constraintName"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"constraintName"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/f7bd236/packages/knex/src/typings.ts#L54"},"packages/knex/src/typings.ts:54")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"deleterule"},"deleteRule"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"deleteRule"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/f7bd236/packages/knex/src/typings.ts#L59"},"packages/knex/src/typings.ts:59")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"localtablename"},"localTableName"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"localTableName"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/f7bd236/packages/knex/src/typings.ts#L55"},"packages/knex/src/typings.ts:55")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"referencedcolumnnames"},"referencedColumnNames"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"referencedColumnNames"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,a.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/f7bd236/packages/knex/src/typings.ts#L57"},"packages/knex/src/typings.ts:57")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"referencedtablename"},"referencedTableName"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"referencedTableName"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/f7bd236/packages/knex/src/typings.ts#L56"},"packages/knex/src/typings.ts:56")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"updaterule"},"updateRule"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"updateRule"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/f7bd236/packages/knex/src/typings.ts#L58"},"packages/knex/src/typings.ts:58")))}u.isMDXComponent=!0}}]);