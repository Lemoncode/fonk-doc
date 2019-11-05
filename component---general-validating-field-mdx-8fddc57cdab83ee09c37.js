(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{CwDx:function(e,a,t){e.exports=t.p+"static/validating-field-0137946c4c7ae0e8920d7b0dd491d5b1.gif"},"Rq/C":function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return o})),t.d(a,"default",(function(){return d}));t("5hJT"),t("W1QL"),t("K/PF"),t("t91x"),t("75LO"),t("PJhk");var n=t("SAVP"),l=t("TjRS");t("aD51");function i(){return(i=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var o={};void 0!==o&&o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"general/validating-field.mdx"}});var s={_frontmatter:o},r=l.a;function d(e){var a=e.components,l=function(e,a){if(null==e)return{};var t,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,["components"]);return Object(n.b)(r,i({},s,l,{components:a,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"field-validation"},"Field Validation"),Object(n.b)("p",null,"Once we have our ValidationSchema defined and we have instantiated the ",Object(n.b)("a",i({parentName:"p"},{href:"/fonk-doc/api#formvalidation"}),Object(n.b)("strong",{parentName:"a"},"FormValidation")),", it exposes\na method called ",Object(n.b)("a",i({parentName:"p"},{href:"/fonk-doc/api#validatefield"}),Object(n.b)("strong",{parentName:"a"},"validateField")),", this method allows us to validate a given field, the signature of this\nmethod:"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-typescript"}),"  public validateField(fieldId: string, value: any,values?: any): Promise<ValidationResult>\n")),Object(n.b)("p",null,"In this method we pass as arguments:"),Object(n.b)("p",null,"- The name of the field we want to validate.\n- The current value of the field (usually we get this value for instance from a ",Object(n.b)("em",{parentName:"p"},"OnChange")," ",Object(n.b)("em",{parentName:"p"},"OnBlur")," input event args).\n- Optionally we can feed the whole record values (in some cases you need to feed the current form values, \ne.g. there is a ",Object(n.b)("em",{parentName:"p"},"requiredOnField")," value where a given field is required depending on another record field value)."),Object(n.b)("p",null,"And it returns:"),Object(n.b)("p",null,"- A promise (validateField is async) including the validation result, it can be succeeded if all validations associated to that field passed, or fail in case any of the associated validations\n  fail (in that case you get back an error message and a validation type)."),Object(n.b)("p",null,"The validations associated to a field are executed sequentially, starting from the one defined at index 0, the validation process stops as soon as one of the associated\nfield validations fail."),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"You can find detailed information about this method in the ",Object(n.b)("a",i({parentName:"p"},{href:"/fonk-doc/api#validatefield"}),"api definition"),".")),Object(n.b)("p",null,"Let's get our hands wet:"),Object(n.b)("p",null,"We want to validate a login form, we have the following model:"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-javascript"}),"const loginValues = {\n  user: '',\n  password: '1234',\n};\n")),Object(n.b)("p",null,"Let's define the following ",Object(n.b)("a",i({parentName:"p"},{href:"/fonk-doc/api#validationschema"}),Object(n.b)("strong",{parentName:"a"},"Validation Schema")),":"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-javascript"}),"import { Validators, createFormValidation } from '@lemoncode/fonk';\n\nconst validationSchema = {\n  field: {\n    user: [\n      Validators.required.validator,\n      {\n        validator: Validators.minLength.validator,\n        customArgs: { length: 3 },\n      },\n    ],\n  },\n};\n\nconst formValidation = createFormValidation(validationSchema);\n")),Object(n.b)("p",null,"Let's call ",Object(n.b)("strong",{parentName:"p"},"validateField")," passing the ",Object(n.b)("em",{parentName:"p"},"user")," field and the empty string value:"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-javascript"}),"const loginValues = {\n  user: '',\n  password: '1234',\n};\n\nformValidation\n  .validateField('user', loginValues.user)\n  .then(validationResult => {\n    console.log(validationResult);\n  });\n")),Object(n.b)("p",null,"The result that we get back:"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-javascript"}),'{\n  "succeeded": false,\n  "message": "Please fill in this mandatory field.",\n  "type": "REQUIRED"\n}\n')),Object(n.b)("p",null,"That is: The validation failed, the field is required"),Object(n.b)("p",null,"Now let's try to validate this field passing as value the string 'a'"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-javascript"}),"const loginValues = {\n  user: 'a',\n  password: '1234',\n};\n\nformValidation\n  .validateField('user', loginValues.user)\n  .then(validationResult => {\n    console.log(validationResult);\n  });\n")),Object(n.b)("p",null,"The result that we get back:"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-javascript"}),'{\n  "succeeded": false,\n  "message": "The value provided does not fulfill min length",\n  "type": "MIN_LENGTH"\n}\n')),Object(n.b)("p",null,"In this case ",Object(n.b)("em",{parentName:"p"},"required")," validation passed but ",Object(n.b)("em",{parentName:"p"},"minLength")," validation didn't pass."),Object(n.b)("p",null,"Finally, let' try to validate this field pass as value the string 'abc'."),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-javascript"}),"const loginValues = {\n  user: 'abc',\n  password: '1234',\n};\n\nformValidation\n  .validateField('user', loginValues.user)\n  .then(validationResult => {\n    console.log(validationResult);\n  });\n")),Object(n.b)("p",null,"The result that we get back:"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-javascript"}),'{\n  "succeeded": true,\n  "message": "",\n  "type": "MIN_LENGTH"\n}\n')),Object(n.b)("p",null,"In this case all field associated passed and we get as result validation succeeded."),Object(n.b)("p",null,Object(n.b)("img",{alt:"validating-field",src:t("CwDx")})),Object(n.b)("p",null,"Examples:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"https://codesandbox.io/s/github/lemoncode/fonk/tree/master/examples/docs/general/js/validating-field"}),"Plain Vanilla JS"),"."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"https://codesandbox.io/s/github/lemoncode/fonk/tree/master/examples/docs/general/ts/validating-field"}),"Plain Vanilla TS"),".")),Object(n.b)("p",null,"Now that you know how to validate a field let's jump into adding ",Object(n.b)("a",i({parentName:"p"},{href:"/fonk-doc/validating-record"}),"record validations")))}d&&d===Object(d)&&Object.isExtensible(d)&&!d.hasOwnProperty("__filemeta")&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"general/validating-field.mdx"}}),d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---general-validating-field-mdx-8fddc57cdab83ee09c37.js.map