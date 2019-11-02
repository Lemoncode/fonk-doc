(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{NmYt:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return l})),t.d(a,"default",(function(){return s}));t("5hJT"),t("W1QL"),t("K/PF"),t("t91x"),t("75LO"),t("PJhk");var n=t("SAVP"),i=t("TjRS");t("aD51");function o(){return(o=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var l={};void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"general/validation-schema.mdx"}});var r={_frontmatter:l},c=i.a;function s(e){var a=e.components,t=function(e,a){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,["components"]);return Object(n.b)(c,o({},r,t,{components:a,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"validation-schema"},"Validation Schema"),Object(n.b)("p",null,"A Validation Schema allows us to define in a declarative way:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"All the validations that apply to each field of a form."),Object(n.b)("li",{parentName:"ul"},"All the record validations that apply to a given form.")),Object(n.b)("p",null,"Let's learn how it works by following an example:"),Object(n.b)("p",null,"We have the following form record:"),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"const myFormValues = {\n  product: 'shoes',\n  discount: 5,\n  price: 20,\n  isPrime: false,\n};\n")),Object(n.b)("p",null,"And we want to set the following rules:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Product must be a required field."),Object(n.b)("li",{parentName:"ul"},"Discount must be a required field."),Object(n.b)("li",{parentName:"ul"},"Price must be a required field."),Object(n.b)("li",{parentName:"ul"},"FreeShipping can be true if the total amount (",Object(n.b)("em",{parentName:"li"},"price - discount"),") is greater than 20 USD, or if the field ",Object(n.b)("em",{parentName:"li"},"isPrime")," is true. We want to trigger\nthis validation when the user hits on submit button.")),Object(n.b)("h2",{id:"defining-field-validations"},"Defining field validations"),Object(n.b)("p",null,"Let's start by defining a validation schema that includes the field validations:"),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"import { createFormValidation, Validators } from '@lemoncode/fonk';\n\nconst validationSchema = {\n  field: {\n    product: [Validators.required.validator],\n    discount: [Validators.required.validator],\n    price: [Validators.required.validator],\n  },\n};\n\nexport const formValidation = createFormValidation(validationSchema);\n")),Object(n.b)("p",null,"Dissecting the previous code snippet:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"We have just added a section into the schema called 'field'."),Object(n.b)("li",{parentName:"ul"},"Inside 'field' object we have created new keys one per each form field that we want to validate (this keys have the same name as the field we want to validate)."),Object(n.b)("li",{parentName:"ul"},"Each field key will contain an array indicating the fields validation to be sequentially executed when triggering a field validation or full form validation."),Object(n.b)("li",{parentName:"ul"},"Given that validation schema we create a ",Object(n.b)("a",o({parentName:"li"},{href:"/fonk-doc/api#formvalidation"}),Object(n.b)("strong",{parentName:"a"},"FormValidation"))," object using the ",Object(n.b)("a",o({parentName:"li"},{href:"/fonk-doc/api#createformvalidation"}),Object(n.b)("strong",{parentName:"a"},"createFormValidation"))," factory method, this will allow us to call the ",Object(n.b)("a",o({parentName:"li"},{href:"https://github.com/Lemoncode/fonk"}),Object(n.b)("strong",{parentName:"a"},"Fonk")),"\nengine to trigger a field, form or record validation associated to the ",Object(n.b)("a",o({parentName:"li"},{href:"/fonk-doc/api#validationschema"}),Object(n.b)("strong",{parentName:"a"},"Validation Schema")),"\nwe have previously created.")),Object(n.b)("p",null,"If we want to fire a field validation we can run the following code:"),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"// We pass here the Id of the field to validate, and the new value for that field\nformValidation\n  .validateField('product', 'my new product name')\n  .then(validationResult => {\n    console.log(result);\n  });\n")),Object(n.b)("p",null,"More information about Fonk ",Object(n.b)("a",o({parentName:"p"},{href:"/fonk-doc/validating-field"}),"validateField"),"."),Object(n.b)("h2",{id:"defining-record-validations"},"Defining record validations"),Object(n.b)("p",null,"Record validations are global validations that are not tied up to a given specific field, they\nare just the type of validations you want to trigger once the user hits on the submit button."),Object(n.b)("p",null,"Continuing with the case we have define previously, we want to define the following record validation rule:"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Free shipping costs can only be true if user is subscribed to prime services or if the total cost\n(price - discount) is greater than 20 USD.")),Object(n.b)("p",null,"Let's define the record validator (since is custom login we will define it from scratch,\nand attach it to the Validation Schema we have created before)."),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-diff"}),"import { createFormValidation, Validators } from \"@lemoncode/fonk\";\n\n+ // A record validator receives in the args an object with\n+ // all the record values and optionally the custom message\n+ const freeShippingRecordValidator = ({ values }) => {\n+   const succeeded = values.isPrime || values.price - values.discount > 20;\n\n+   return {\n+     succeeded,\n+     message: succeeded\n+       ? ''\n+       : 'Subscribe to prime service or total must be greater than 20USD',\n+     type: 'RECORD_FREE_SHIPPING',\n+   };\n+ };\n\nconst validationSchema = {\n  field: {\n    product: [Validators.required.validator],\n    discount: [Validators.required.validator],\n    price: [Validators.required.validator]\n  },\n+ record: {\n+   freeShipping: [freeShippingRecordValidator],\n+ },\n};\n\nexport const formValidation = createFormValidation(validationSchema);\n")),Object(n.b)("p",null,"Now we can fire this record validation using ",Object(n.b)("strong",{parentName:"p"},"Fonk")," engine ",Object(n.b)("a",o({parentName:"p"},{href:"/fonk-doc/api#validaterecord"}),"validateRecord"),", and this validation\nwill be triggered when we fire the ",Object(n.b)("strong",{parentName:"p"},"Fonk")," engine method ",Object(n.b)("a",o({parentName:"p"},{href:"/fonk-doc/api#validateform"}),"validateForm")),Object(n.b)("p",null,"If we want to fire a record validation we can run the following code:"),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"// We pass all the values information\nformValidation.validateRecord(myFormValues).then(recordValidationResult => {\n  console.log(result);\n});\n")),Object(n.b)("p",null,"If we want to fire all field and form validations associaged to the form, we can run the following code:"),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"// We pass all the values information\nformValidation.validateForm(myFormValues).then(formValidationResult => {\n  console.log(result);\n});\n")),Object(n.b)("p",null,"More information about Fonk ",Object(n.b)("a",o({parentName:"p"},{href:"/fonk-doc/validating-record"}),"validateRecord")," and ",Object(n.b)("a",o({parentName:"p"},{href:"/fonk-doc/validating-form"}),"validateForm"),"."),Object(n.b)("p",null,"Live demos working example:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"https://codesandbox.io/s/github/lemoncode/fonk/tree/master/examples/vanilla/js/validate-field-record-and-form"}),"Plain Vanilla JS"),"."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"https://codesandbox.io/s/github/lemoncode/fonk/tree/master/examples/vanilla/ts/validate-field-record-and-form"}),"Plain Vanilla TS"),"."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"https://codesandbox.io/s/github/lemoncode/fonk/tree/master/examples/react-final-form/js/validate-field-record-and-form"}),"React + React Final Form JS"),"."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"https://codesandbox.io/s/github/lemoncode/fonk/tree/master/examples/react-final-form/ts/validate-field-record-and-form"}),"React + React Final Form TS"),".")),Object(n.b)("h2",{id:"adding-additional-context-information"},"Adding additional context information"),Object(n.b)("p",null,"What happens if we need to add addional context information to the validator function, for instance passing a custom error message ? The ",Object(n.b)("strong",{parentName:"p"},"ValidationSchema")," supports two signatures whenever we want to add a validation:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"The short definition: the one we have been using, is just adding the validator function we need.")),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"const validationSchema = {\n  field: {\n    product: [validators.required.validator],\n  },\n};\n")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"The long definition: we can create an object where we can inform the validator function, override the default error message(s) and pass custom arguments.")),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"const validationSchema = {\n  field: {\n    product: [\n      {\n        validator: validators.required.validator,\n        message: 'My custom error message',\n      },\n    ],\n  },\n};\n")),Object(n.b)("p",null,"Live demos working example:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"https://codesandbox.io/s/github/lemoncode/fonk/tree/master/examples/vanilla/js/custom-error-message"}),"Plain Vanilla JS"),"."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"https://codesandbox.io/s/github/lemoncode/fonk/tree/master/examples/vanilla/ts/custom-error-message"}),"Plain Vanilla TS"),"."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"https://codesandbox.io/s/github/lemoncode/fonk/tree/master/examples/react-final-form/js/custom-error-message"}),"React + React Final Form JS"),"."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"https://codesandbox.io/s/github/lemoncode/fonk/tree/master/examples/react-final-form/ts/custom-error-message"}),"React + React Final Form TS"),".")),Object(n.b)("h2",{id:"nested-fields"},"Nested fields"),Object(n.b)("p",null,"In this example we have used a plain object that didn't contain any nested property."),Object(n.b)("p",null,"What would happen if we have a richer object? Something like:"),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"const myFormValues = {\n  product: {\n    id: 1245,\n    name: 'shoes',\n  },\n};\n")),Object(n.b)("p",null,"How can we add ",Object(n.b)("em",{parentName:"p"},"product.name")," to my validation schema? It's easy just use ",Object(n.b)("em",{parentName:"p"},"product.name")," as a key, surrounding it with double quotes:"),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-diff"}),'const validationSchema = {\n  field: {\n-    product: [Validators.required.validator],\n+    "product.name": [Validators.required.validator],\n  }\n};\n')),Object(n.b)("p",null,"Live demos working example:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"https://codesandbox.io/s/github/lemoncode/fonk/tree/master/examples/vanilla/js/nested-field"}),"Plain Vanilla JS"),"."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"https://codesandbox.io/s/github/lemoncode/fonk/tree/master/examples/vanilla/ts/nested-field"}),"Plain Vanilla TS"),"."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"https://codesandbox.io/s/github/lemoncode/fonk/tree/master/examples/react-final-form/js/nested-field"}),"React + React Final Form JS"),"."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"https://codesandbox.io/s/github/lemoncode/fonk/tree/master/examples/react-final-form/ts/nested-field"}),"React + React Final Form TS"),".")),Object(n.b)("h2",{id:"asynchronous-validations"},"Asynchronous validations"),Object(n.b)("p",null,"What about asynchronous validations? Under the hood ",Object(n.b)("strong",{parentName:"p"},"fonk")," is fully asynchronous, you can plug an asynchronous validation directly into the validations array."),Object(n.b)("p",null,"Let's create a simple login form, and define a new validation set: the user name must be required, and account name must not exist as a github account\n(we will check against github api)."),Object(n.b)("p",null,"The form values we have:"),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"const myLoginFormValues = {\n  user: 'mojombo',\n  password: '',\n};\n")),Object(n.b)("p",null,"The field validator (check ",Object(n.b)("a",o({parentName:"p"},{href:"/fonk-doc/validators/custom-validators-async"}),"Custom validators asynchronous")," for more info)."),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"const userExistsOnGithubValidator = ({ value }) => {\n  const validationResult = {\n    type: 'GITHUB_USER_EXISTS',\n    succeeded: false,\n    message: 'The username exists on Github',\n  };\n\n  return fetch(`https://api.github.com/users/${value}`).then(response => {\n    // Status 404, User does not exists, the given user is valid\n    // Status 200, meaning user exists, the given user is not valid\n    return response.status === 404\n      ? {\n          ...validationResult,\n          succeeded: true,\n          message: '',\n        }\n      : validationResult;\n  });\n};\n")),Object(n.b)("p",null,"How to setup a validation schema that checks if the user field is informed and is a valid\ngithub account:"),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"import { createFormValidation, Validators } from '@lemoncode/fonk';\n\nconst validationSchema = {\n  field: {\n    user: [Validators.required.validator, userExistsOnGithubValidator],\n  },\n};\n\nexport const formValidation = createFormValidation(validationSchema);\n")),Object(n.b)("p",null,"Live demos working example:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"https://codesandbox.io/s/github/lemoncode/fonk/tree/master/examples/vanilla/js/async-validator"}),"Plain Vanilla JS"),"."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"https://codesandbox.io/s/github/lemoncode/fonk/tree/master/examples/vanilla/ts/async-validator"}),"Plain Vanilla TS"),"."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"https://codesandbox.io/s/github/lemoncode/fonk/tree/master/examples/react-final-form/js/async-validator"}),"React + React Final Form JS"),"."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"https://codesandbox.io/s/github/lemoncode/fonk/tree/master/examples/react-final-form/ts/async-validator"}),"React + React Final Form TS"),".")),Object(n.b)("h2",{id:"next-steps"},"Next Steps"),Object(n.b)("p",null,"Now it's time to learn how to trigger a field validation, follow this ",Object(n.b)("a",o({parentName:"p"},{href:"/fonk-doc/validating-field"}),"link")," to jump into it."),Object(n.b)("h2",{id:"appendix-validation-schema-typescript-definition"},"Appendix: Validation Schema Typescript definition"),Object(n.b)("p",null,"To know the exact api + model exposed, below you will find the typescript definition for\nvalidation schema:"),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-typescript"}),"export interface ValidationSchema {\n  field?: FieldValidationSchema;\n  record?: RecordValidationSchema;\n}\n")),Object(n.b)("p",null,"Field Validation Schema:"),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-typescript"}),"export interface FieldValidationSchema {\n  [fieldId: string]: FieldValidation[];\n}\n\nexport type FieldValidation =\n  | FieldValidationFunctionSyncAsync\n  | FullFieldValidation;\n\nexport type FieldValidationFunctionSyncAsync =\n  | FieldValidationFunctionAsync\n  | FieldValidationFunctionSync;\n\nexport type FieldValidationFunctionSync = (\n  fieldValidatorArgs: FieldValidatorArgs\n) => ValidationResult;\n\nexport type FieldValidationFunctionAsync = (\n  fieldValidatorArgs: FieldValidatorArgs\n) => Promise<ValidationResult>;\n\nexport interface FullFieldValidation {\n  validator: FieldValidationFunctionSyncAsync;\n  customArgs?: any;\n  message?: string | string[];\n}\n")),Object(n.b)("p",null,"Record:"),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-typescript"}),"export interface RecordValidationSchema {\n  [recordId: string]: RecordValidation[];\n}\n\nexport type RecordValidation =\n  | RecordValidationFunctionSyncAsync\n  | FullRecordValidation;\n\nexport type RecordValidationFunctionSyncAsync =\n  | RecordValidationFunctionSync\n  | RecordValidationFunctionAsync;\n\nexport type RecordValidationFunctionSync = (\n  recordValidatorArgs: RecordValidatorArgs\n) => ValidationResult;\n\nexport type RecordValidationFunctionAsync = (\n  recordValidatorArgs: RecordValidatorArgs\n) => Promise<ValidationResult>;\n\nexport interface RecordValidatorArgs {\n  values: any;\n  message?: string | string[];\n}\n\nexport interface FullRecordValidation {\n  validator: RecordValidationFunctionSyncAsync;\n  message?: string | string[];\n}\n")),Object(n.b)("p",null,"ValidationResult:"),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-typescript"}),"export interface ValidationResult {\n  type: string;\n  succeeded: boolean;\n  message: string;\n}\n")))}s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"general/validation-schema.mdx"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---general-validation-schema-mdx-1ec158d2319a8c492ff5.js.map