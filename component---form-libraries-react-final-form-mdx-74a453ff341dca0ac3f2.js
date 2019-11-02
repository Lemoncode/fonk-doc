(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{TcjF:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return c}));a("5hJT"),a("W1QL"),a("K/PF"),a("t91x"),a("75LO"),a("PJhk");var r=a("SAVP"),n=a("TjRS");a("aD51");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var l={};void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"form-libraries/react-final-form.mdx"}});var i={_frontmatter:l},b=n.a;function c(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,["components"]);return Object(r.b)(b,o({},i,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"integrating-fonk-with-react-final-form"},"Integrating Fonk with React Final Form"),Object(r.b)("p",null,Object(r.b)("a",o({parentName:"p"},{href:"https://github.com/final-form/react-final-form"}),"React Final Form")," is a great library to manage forms."),Object(r.b)("p",null,"Adding ",Object(r.b)("strong",{parentName:"p"},"Fonk")," to ",Object(r.b)("strong",{parentName:"p"},"React Final Form")," allows you to seamlessly add validation capabilities to ",Object(r.b)("strong",{parentName:"p"},"React Final Form"),"."),Object(r.b)("p",null,"In order to use ",Object(r.b)("strong",{parentName:"p"},"Fonk")," with ",Object(r.b)("strong",{parentName:"p"},"React Final Form")," you will have to install ",Object(r.b)("strong",{parentName:"p"},"fonk-final-form")," adaptor:"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-bash"}),"npm install @lemoncode/fonk @lemoncode/fonk-final-form --save\n")),Object(r.b)("p",null,"The only difference when using ",Object(r.b)("strong",{parentName:"p"},"fonk-final-form")," is: instead of invoking the ",Object(r.b)("em",{parentName:"p"},"createFomValidation")," method\nto create a validation schema, you will need to invoke ",Object(r.b)("em",{parentName:"p"},"createFinalFormValidation"),", example:"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-diff"}),"- import { createFormValidation, Validators } from '@lemoncode/fonk';\n+ import { Validators } from '@lemoncode/fonk';\n+ import { createFinalFormValidation } from '@lemoncode/fonk-final-form';\nimport { isNumber } from '@lemoncode/fonk-is-number-validator';\nimport { minNumberValidator } from './custom-validators';\n\nconst validationSchema = {\n  field: {\n    firstName: [\n      {\n        validator: Validators.required.validator,\n        message: 'Required',\n      },\n    ],\n    lastName: [\n      {\n        validator: Validators.required.validator,\n        message: 'Required',\n      },\n    ],\n    age: [\n      {\n        validator: Validators.required.validator,\n        message: 'Required',\n      },\n      isNumber.validator,\n      {\n        validator: minNumberValidator,\n        customArgs: { min: 18 },\n      },\n    ],\n  },\n};\n\n- export const formValidation = createFormValidation(validationSchema);\n+ export const formValidation = createFinalFormValidation(validationSchema);\n")),Object(r.b)("p",null,"Under the hood, what the adaptor does is just return ",Object(r.b)("em",{parentName:"p"},"null")," when a validation succeeds (that's the result\n",Object(r.b)("strong",{parentName:"p"},"React Final Form"),")"),Object(r.b)("p",null,"In this page you will find a set of examples showing wide range of use cases."),Object(r.b)("h2",{id:"validate-field"},"Validate Field"),Object(r.b)("p",null,"How to apply field level validations. This example applies ",Object(r.b)("strong",{parentName:"p"},"required")," and ",Object(r.b)("strong",{parentName:"p"},"isNumber")," validator"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Javascript")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",o({parentName:"li"},{href:"https://codesandbox.io/s/github/lemoncode/fonk/tree/master/examples/react-final-form/js/validate-field"}),"CodeSandbox")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",o({parentName:"li"},{href:"https://github.com/Lemoncode/fonk/tree/master/examples/react-final-form/js/validate-field"}),"SourceCode"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Typescript")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",o({parentName:"li"},{href:"https://codesandbox.io/s/github/lemoncode/fonk/tree/master/examples/react-final-form/ts/validate-field"}),"CodeSandbox")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",o({parentName:"li"},{href:"https://github.com/Lemoncode/fonk/tree/master/examples/react-final-form/ts/validate-field"}),"SourceCode"))),Object(r.b)("h2",{id:"validate-record"},"Validate Record"),Object(r.b)("p",null,"How to fire record validations on React Final Form."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Javascript")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",o({parentName:"li"},{href:"https://codesandbox.io/s/github/lemoncode/fonk/tree/master/examples/react-final-form/js/validate-record"}),"CodeSandbox")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",o({parentName:"li"},{href:"https://github.com/Lemoncode/fonk/tree/master/examples/react-final-form/js/validate-record"}),"SourceCode"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Typescript")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",o({parentName:"li"},{href:"https://codesandbox.io/s/github/lemoncode/fonk/tree/master/examples/react-final-form/ts/validate-record"}),"CodeSandbox")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",o({parentName:"li"},{href:"https://github.com/Lemoncode/fonk/tree/master/examples/react-final-form/ts/validate-record"}),"SourceCode"))),Object(r.b)("h2",{id:"validate-form"},"Validate Form"),Object(r.b)("p",null,"How to fire all form field validations when pressing submit."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Javascript")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",o({parentName:"li"},{href:"https://codesandbox.io/s/github/lemoncode/fonk/tree/master/examples/react-final-form/js/validate-form"}),"CodeSandbox")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",o({parentName:"li"},{href:"https://github.com/Lemoncode/fonk/tree/master/examples/react-final-form/js/validate-form"}),"SourceCode"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Typescript")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",o({parentName:"li"},{href:"https://codesandbox.io/s/github/lemoncode/fonk/tree/master/examples/react-final-form/ts/validate-form"}),"CodeSandbox")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",o({parentName:"li"},{href:"https://github.com/Lemoncode/fonk/tree/master/examples/react-final-form/ts/validate-form"}),"SourceCode"))),Object(r.b)("h2",{id:"validate-field-record-and-form"},"Validate Field Record and Form"),Object(r.b)("p",null,"This example covers three validation scenarios:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"How to validate a single field."),Object(r.b)("li",{parentName:"ul"},"How to fire a record validation."),Object(r.b)("li",{parentName:"ul"},"How to fire both field + record validations when hitting submit.")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Javascript")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",o({parentName:"li"},{href:"https://codesandbox.io/s/github/lemoncode/fonk/tree/master/examples/react-final-form/js/validate-field-record-and-form"}),"CodeSandbox")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",o({parentName:"li"},{href:"https://github.com/Lemoncode/fonk/tree/master/examples/react-final-form/js/validate-field-record-and-form"}),"SourceCode"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Typescript")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",o({parentName:"li"},{href:"https://codesandbox.io/s/github/lemoncode/fonk/tree/master/examples/react-final-form/ts/validate-field-record-and-form"}),"CodeSandbox")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",o({parentName:"li"},{href:"https://github.com/Lemoncode/fonk/tree/master/examples/react-final-form/ts/validate-field-record-and-form"}),"SourceCode"))),Object(r.b)("h2",{id:"integrating-custom-validators"},"Integrating custom validators"),Object(r.b)("p",null,"Creating a custom validator (is-number, min-number) and integrating it with ",Object(r.b)("strong",{parentName:"p"},"Fonk")," + ",Object(r.b)("strong",{parentName:"p"},"React Final Form")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"You can find this validators already implemented as pluggable micro-libraries, check the following ",Object(r.b)("a",o({parentName:"p"},{href:"/fonk-doc/validators/third-party-validators"}),"section"),".")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Javascript")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",o({parentName:"li"},{href:"https://codesandbox.io/s/github/lemoncode/fonk/tree/master/examples/react-final-form/js/custom-validators"}),"CodeSandbox")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",o({parentName:"li"},{href:"https://github.com/Lemoncode/fonk/tree/master/examples/react-final-form/js/custom-validators"}),"SourceCode"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Typescript")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",o({parentName:"li"},{href:"https://codesandbox.io/s/github/lemoncode/fonk/tree/master/examples/react-final-form/ts/custom-validators"}),"CodeSandbox")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",o({parentName:"li"},{href:"https://github.com/Lemoncode/fonk/tree/master/examples/react-final-form/ts/custom-validators"}),"SourceCode"))),Object(r.b)("h2",{id:"async-validators"},"Async Validators"),Object(r.b)("p",null,"How to create a custom validator (users exists on Github, hitting Github rest-api) + React Final Form integration."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Javascript")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",o({parentName:"li"},{href:"https://codesandbox.io/s/github/lemoncode/fonk/tree/master/examples/react-final-form/js/async-validator"}),"CodeSandbox")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",o({parentName:"li"},{href:"https://github.com/Lemoncode/fonk/tree/master/examples/react-final-form/js/async-validator"}),"SourceCode"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Typescript")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",o({parentName:"li"},{href:"https://codesandbox.io/s/github/lemoncode/fonk/tree/master/examples/react-final-form/ts/async-validator"}),"CodeSandbox")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",o({parentName:"li"},{href:"https://github.com/Lemoncode/fonk/tree/master/examples/react-final-form/ts/async-validator"}),"SourceCode"))),Object(r.b)("h2",{id:"customizing-error-messages"},"Customizing error messages"),Object(r.b)("p",null,"Overriding validators default message."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Javascript")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",o({parentName:"li"},{href:"https://codesandbox.io/s/github/lemoncode/fonk/tree/master/examples/react-final-form/js/custom-error-message"}),"CodeSandbox")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",o({parentName:"li"},{href:"https://github.com/Lemoncode/fonk/tree/master/examples/react-final-form/js/custom-error-message"}),"SourceCode"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Typescript")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",o({parentName:"li"},{href:"https://codesandbox.io/s/github/lemoncode/fonk/tree/master/examples/react-final-form/ts/custom-error-message"}),"CodeSandbox")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",o({parentName:"li"},{href:"https://github.com/Lemoncode/fonk/tree/master/examples/react-final-form/js/custom-error-message"}),"SourceCode"))),Object(r.b)("h2",{id:"nested-fields"},"Nested fields"),Object(r.b)("p",null,"Right now we have covered just plain form models, what if we have a more complex structure? something like:"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"{\n  id: 1,\n  name: 'Foo',\n  product: {\n    name: 'bar'\n  }\n}\n")),Object(r.b)("p",null,"We can define the validation for the ",Object(r.b)("em",{parentName:"p"},"product.name")," nested property by using the string dot notation: 'product.name'."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Javascript")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",o({parentName:"li"},{href:"https://codesandbox.io/s/github/lemoncode/fonk/tree/master/examples/react-final-form/js/nested-field"}),"CodeSandbox")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",o({parentName:"li"},{href:"https://github.com/Lemoncode/fonk/tree/master/examples/react-final-form/js/nested-field"}),"SourceCode"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Typescript")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",o({parentName:"li"},{href:"https://codesandbox.io/s/github/lemoncode/fonk/tree/master/examples/react-final-form/ts/nested-field"}),"CodeSandbox")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",o({parentName:"li"},{href:"https://github.com/Lemoncode/fonk/tree/master/examples/react-final-form/ts/nested-field"}),"SourceCode"))))}c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"form-libraries/react-final-form.mdx"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---form-libraries-react-final-form-mdx-74a453ff341dca0ac3f2.js.map