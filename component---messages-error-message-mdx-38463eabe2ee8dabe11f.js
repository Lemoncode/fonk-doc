(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{965:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return i})),t.d(a,"default",(function(){return c}));t(11),t(6),t(5),t(3),t(7),t(4),t(9);var n=t(77),r=t(959);function o(){return(o=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"messages/error-message.mdx"}});var l={_frontmatter:i},s=r.a;function c(e){var a=e.components,t=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,["components"]);return Object(n.b)(s,o({},l,t,{components:a,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"customizing-error-messages"},"Customizing error messages"),Object(n.b)("p",null,"When a given validation fails, a Fonk validator returns a default error message, this messages can be overriden\nin two ways:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"You can customize the error message(s) returned by a single validator in a global way (any validation\nschema using this validator will just use this new error message).")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"You can customize the error message for a single field or record validation in a given validation schema."))),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"Additionally ",Object(n.b)("em",{parentName:"p"},"Validators")," return the TYPE of validator executed (TYPE is a unique identifier) and whether it succeed or not.")),Object(n.b)("p",null,"In which scenarios you will choose whether to globally or locally?"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},'Globally customizing a validator error message can be quite useful to provide multilanguage support, e.g.: a\ngiven user changes the language from English to Spanish, then you want RequiredFieldValidator error message\nto be updated from "This Field is required" to "Debe informar el campo", this should be applied to all\nvalidationSchemas field entries that are using this validator.')),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Setting up a field level validation can be useful for wide validators like ",Object(n.b)("em",{parentName:"p"},"Pattern")," validators: this validator\nvalidates the entered text against a regular expression, let's say you use this validator to validate an\nIBAN number, and in another field you just validate a BIC number, you don't want to display a generic\n'Pattern is not valid' message, you want to display a message like \"Invalid IBAN number\" and \"Invalid BIC number\"\nfor each of the fields."))),Object(n.b)("h1",{id:"global-error-message-customization"},"Global error message customization"),Object(n.b)("p",null,"We will take as example ",Object(n.b)("em",{parentName:"p"},"required validator"),", at the entry point of our application we need to add the following\ncode:"),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"import { Validators, createFormValidation } from '@lemoncode/fonk';\n\nconst validationSchema = {\n  field: {\n    // The default error message is:\n    // \"Please fill in this mandatory field.\"\n    user: [Validators.required.validator],\n  },\n};\n\nconst formValidation = createFormValidation(validationSchema);\n")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Update error message using globally way:")),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-diff"}),'import { Validators, createFormValidation } from \'@lemoncode/fonk\';\n\n+ // Spanish message\n+ Validators.required.setErrorMessage("Debe informar el campo");\n\nconst validationSchema = {\n  field: {\n    // The default error message is:\n    // "Please fill in this mandatory field."\n    user: [Validators.required.validator],\n  },\n};\n\nconst formValidation = createFormValidation(validationSchema);\n')),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"https://codesandbox.io/s/github/lemoncode/fonk/tree/master/examples/docs/messages/js/vanilla/global-error-message"}),"Plain Vanilla JS"),"."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"https://codesandbox.io/s/github/lemoncode/fonk/tree/master/examples/docs/messages/ts/vanilla/global-error-message"}),"Plain Vanilla TS"),"."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"https://codesandbox.io/s/github/lemoncode/fonk/tree/master/examples/docs/messages/js/react-final-form/global-error-message"}),"React + React Final Form JS"),"."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"https://codesandbox.io/s/github/lemoncode/fonk/tree/master/examples/docs/messages/ts/react-final-form/global-error-message"}),"React + React Final Form TS"),".")),Object(n.b)("h1",{id:"validationschema-field-validation-customization"},"ValidationSchema field validation customization"),Object(n.b)("p",null,"We will take as example ",Object(n.b)("em",{parentName:"p"},"pattern validator"),", we will setup a validation schema and customize the error\nmessage for the ",Object(n.b)("em",{parentName:"p"},"IBAN")," field and the ",Object(n.b)("em",{parentName:"p"},"BIC")," field"),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"import { Validators, createFormValidation } from '@lemoncode/fonk';\n\nconst validationSchema = {\n  field: {\n    ibanAccount: [\n      {\n        validator: Validators.pattern.validator,\n        customArgs: { pattern: /^ES\\d*$/ },\n      },\n    ],\n    bicAccount: [\n      {\n        validator: Validators.pattern.validator,\n        customArgs: { pattern: /^BIC\\d*$/ },\n      },\n    ],\n  },\n};\n\nconst formValidation = createFormValidation(validationSchema);\n")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Update error message using locally way:")),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-diff"}),"import { Validators, createFormValidation } from '@lemoncode/fonk';\n\nconst validationSchema = {\n  field: {\n    ibanAccount: [\n      {\n        validator: Validators.pattern.validator,\n        customArgs: { pattern: /^ES\\d*$/ },\n+       message: 'Invalid IBAN number',\n      },\n    ],\n    bicAccount: [\n      {\n        validator: Validators.pattern.validator,\n        customArgs: { pattern: /^BIC\\d*$/ },\n+       message: 'Invalid BIC number',\n      },\n    ],\n  },\n};\n\nconst formValidation = createFormValidation(validationSchema);\n")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"https://codesandbox.io/s/github/lemoncode/fonk/tree/master/examples/docs/messages/js/vanilla/local-error-message"}),"Plain Vanilla JS"),"."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"https://codesandbox.io/s/github/lemoncode/fonk/tree/master/examples/docs/messages/ts/vanilla/local-error-message"}),"Plain Vanilla TS"),"."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"https://codesandbox.io/s/github/lemoncode/fonk/tree/master/examples/docs/messages/js/react-final-form/local-error-message"}),"React + React Final Form JS"),"."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"https://codesandbox.io/s/github/lemoncode/fonk/tree/master/examples/docs/messages/ts/react-final-form/local-error-message"}),"React + React Final Form TS"),".")),Object(n.b)("h1",{id:"building-a-custom-validator-that-support-error-messages-customization"},"Building a custom validator that support error messages customization."),Object(n.b)("p",null,"Check the sections ",Object(n.b)("a",o({parentName:"p"},{href:"/fonk-doc/validators/custom-validators-sync"}),"Custom Validators"),", to find how to customize error message."),Object(n.b)("p",null,"Check the ",Object(n.b)("a",o({parentName:"p"},{href:"/fonk-doc/api"}),"api"),", for more information"))}c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"messages/error-message.mdx"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---messages-error-message-mdx-38463eabe2ee8dabe11f.js.map