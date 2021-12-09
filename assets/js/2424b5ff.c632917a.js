"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[78293],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return f}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),f=o,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||a;return t?r.createElement(m,i(i({ref:n},c),{},{components:t})):r.createElement(m,i({ref:n},c))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},51006:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var r=t(83117),o=t(80102),a=(t(67294),t(3905)),i=["components"],l={title:"Entity References",sidebar_label:"Entity References and Reference<T> Wrapper"},s=void 0,p={unversionedId:"entity-references",id:"version-4.3/entity-references",title:"Entity References",description:"Every single entity relation is mapped to an entity reference. Reference is an entity that has",source:"@site/versioned_docs/version-4.3/entity-references.md",sourceDirName:".",slug:"/entity-references",permalink:"/docs/4.3/entity-references",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.3/entity-references.md",tags:[],version:"4.3",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1639055630,formattedLastUpdatedAt:"12/9/2021",frontMatter:{title:"Entity References",sidebar_label:"Entity References and Reference<T> Wrapper"},sidebar:"version-4.3/docs",previous:{title:"Identity Map and Request Context",permalink:"/docs/4.3/identity-map"},next:{title:"Collections",permalink:"/docs/4.3/collections"}},c=[{value:"Better Type-safety with <code>Reference&lt;T&gt;</code> Wrapper",id:"better-type-safety-with-referencet-wrapper",children:[{value:"Assigning to Reference Properties",id:"assigning-to-reference-properties",children:[],level:3},{value:"What is IdentifiedReference?",id:"what-is-identifiedreference",children:[],level:3}],level:2}],d={toc:c};function u(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Every single entity relation is mapped to an entity reference. Reference is an entity that has\nonly its identifier. This reference is stored in identity map so you will get the same object\nreference when fetching the same document from database."),(0,a.kt)("p",null,"You can call ",(0,a.kt)("inlineCode",{parentName:"p"},"await entity.init()")," to initialize the entity. This will trigger database call\nand populate itself, keeping the same reference in identity map. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const author = orm.em.getReference('...id...');\nconsole.log(author.id); // accessing the id will not trigger any db call\nconsole.log(author.isInitialized()); // false\nconsole.log(author.name); // undefined\n\nawait author.init(); // this will trigger db call\nconsole.log(author.isInitialized()); // true\nconsole.log(author.name); // defined\n")),(0,a.kt)("h2",{id:"better-type-safety-with-referencet-wrapper"},"Better Type-safety with ",(0,a.kt)("inlineCode",{parentName:"h2"},"Reference<T>")," Wrapper"),(0,a.kt)("p",null,"When you define ",(0,a.kt)("inlineCode",{parentName:"p"},"@ManyToOne")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"@OneToOne")," properties on your entity, TypeScript compiler\nwill think that desired entities are always loaded:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"@Entity()\nexport class Book {\n\n  @PrimaryKey()\n  id!: number;\n\n  @ManyToOne()\n  author!: Author;\n\n  constructor(author: Author) {\n    this.author = author;\n  }\n\n}\n\nconst book = await orm.em.findOne(Book, 1);\nconsole.log(book.author instanceof Author); // true\nconsole.log(book.author.isInitialized()); // false\nconsole.log(book.author.name); // undefined as `Author` is not loaded yet\n")),(0,a.kt)("p",null,"You can overcome this issue by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"Reference<T>")," wrapper. It simply wraps the entity,\ndefining ",(0,a.kt)("inlineCode",{parentName:"p"},"load(): Promise<T>")," method that will first lazy load the association if not already\navailable. You can also use ",(0,a.kt)("inlineCode",{parentName:"p"},"unwrap(): T")," method to access the underlying entity without loading\nit."),(0,a.kt)("p",null,"You can also use ",(0,a.kt)("inlineCode",{parentName:"p"},"load<K extends keyof T>(prop: K): Promise<T[K]>"),", which works like ",(0,a.kt)("inlineCode",{parentName:"p"},"load()"),"\nbut returns the specified property."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Entity, IdentifiedReference, ManyToOne, PrimaryKey, Reference } from '@mikro-orm/core';\n\n@Entity()\nexport class Book {\n\n  @PrimaryKey()\n  id!: number;\n\n  @ManyToOne()\n  author!: IdentifiedReference<Author>;\n\n  constructor(author: Author) {\n    this.author = Reference.create(author);\n  }\n\n}\n\nconst book = await orm.em.findOne(Book, 1);\nconsole.log(book.author instanceof Reference); // true\nconsole.log(book.author.isInitialized()); // false\nconsole.log(book.author.name); // type error, there is no `name` property\nconsole.log(book.author.unwrap().name); // undefined as author is not loaded\nconsole.log((await book.author.load('name'))); // ok, loading the author first\nconsole.log((await book.author.load()).name); // ok, author already loaded\nconsole.log(book.author.unwrap().name); // ok, author already loaded\n")),(0,a.kt)("p",null,"There are also ",(0,a.kt)("inlineCode",{parentName:"p"},"getEntity()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"getProperty()")," methods that are synchronous getters,\nthat will first check if the wrapped entity is initialized, and if not, it will throw\nand error."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const book = await orm.em.findOne(Book, 1);\nconsole.log(book.author instanceof Reference); // true\nconsole.log(book.author.isInitialized()); // false\nconsole.log(book.author.getEntity()); // Error: Reference<Author> 123 not initialized\nconsole.log(book.author.getProperty('name')); // Error: Reference<Author> 123 not initialized\nconsole.log((await book.author.load('name'))); // ok, loading the author first\nconsole.log(book.author.getProperty('name')); // ok, author already loaded\n")),(0,a.kt)("p",null,"If you use different metadata provider than ",(0,a.kt)("inlineCode",{parentName:"p"},"TsMorphMetadataProvider"),"\n(e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"ReflectMetadataProvider"),"), you will also need to explicitly set ",(0,a.kt)("inlineCode",{parentName:"p"},"wrappedReference"),"\nparameter:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"@ManyToOne(() => Author, { wrappedReference: true })\nauthor!: IdentifiedReference<Author>;\n")),(0,a.kt)("h3",{id:"assigning-to-reference-properties"},"Assigning to Reference Properties"),(0,a.kt)("p",null,"When you define the property as ",(0,a.kt)("inlineCode",{parentName:"p"},"Reference")," wrapper, you will need to assign the ",(0,a.kt)("inlineCode",{parentName:"p"},"Reference"),"\nto it instead of the entity. You can create it via ",(0,a.kt)("inlineCode",{parentName:"p"},"Reference.create()")," factory, or use ",(0,a.kt)("inlineCode",{parentName:"p"},"wrapped"),"\nparameter of ",(0,a.kt)("inlineCode",{parentName:"p"},"em.getReference()"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const book = await orm.em.findOne(Book, 1);\nconst repo = orm.em.getRepository(Author);\n\nbook.author = repo.getReference(2, true);\n\n// same as:\nbook.author = Reference.create(repo.getReference(2));\nawait orm.em.flush();\n")),(0,a.kt)("p",null,"Another way is to use ",(0,a.kt)("inlineCode",{parentName:"p"},"toReference()")," method available as part of\n",(0,a.kt)("a",{parentName:"p",href:"/docs/4.3/entity-helper#wrappedentity-and-wrap-helper"},(0,a.kt)("inlineCode",{parentName:"a"},"WrappedEntity")," interface"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const author = new Author(...)\nbook.author = wrap(author).toReference();\n")),(0,a.kt)("p",null,"If the reference already exist, you can also re-assign to it via ",(0,a.kt)("inlineCode",{parentName:"p"},"set()")," method:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"book.author.set(new Author(...));\n")),(0,a.kt)("h3",{id:"what-is-identifiedreference"},"What is IdentifiedReference?"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"IdentifiedReference")," is an intersection type that adds primary key property to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Reference"),"\ninterface. It allows to get the primary key from ",(0,a.kt)("inlineCode",{parentName:"p"},"Reference")," instance directly."),(0,a.kt)("p",null,"By default it defines the PK property as ",(0,a.kt)("inlineCode",{parentName:"p"},"id"),", you can override this via second generic type\nargument."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const book = await orm.em.findOne(Book, 1);\nconsole.log(book.author.id); // ok, returns the PK\n")),(0,a.kt)("p",null,"You can also have non-standard primary key like ",(0,a.kt)("inlineCode",{parentName:"p"},"uuid"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"@Entity()\nexport class Book {\n\n  @PrimaryKey()\n  id!: number;\n\n  @ManyToOne()\n  author!: IdentifiedReference<Author, 'uuid'>;\n\n}\n\nconst book = await orm.em.findOne(Book, 1);\nconsole.log(book.author.uuid); // ok, returns the PK\n")),(0,a.kt)("p",null,"For MongoDB, define the PK generic type argument as ",(0,a.kt)("inlineCode",{parentName:"p"},"'id' | '_id'")," to access both ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"\nand ",(0,a.kt)("inlineCode",{parentName:"p"},"ObjectId")," PK values:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"@Entity()\nexport class Book {\n\n  @PrimaryKey()\n  _id!: ObjectId;\n\n  @SerializedPrimaryKey()\n  id!: string;\n\n  @ManyToOne()\n  author!: IdentifiedReference<Author, 'id' | '_id'>;\n\n}\n\nconst book = await orm.em.findOne(Book, 1);\nconsole.log(book.author.id); // ok, returns string PK\nconsole.log(book.author._id); // ok, returns ObjectId PK\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"As opposed to ",(0,a.kt)("inlineCode",{parentName:"p"},"Entity.init()")," which always refreshes the entity, ",(0,a.kt)("inlineCode",{parentName:"p"},"Reference.load()"),"\nmethod will query the database only if the entity is not already loaded in Identity Map.")))}u.isMDXComponent=!0}}]);