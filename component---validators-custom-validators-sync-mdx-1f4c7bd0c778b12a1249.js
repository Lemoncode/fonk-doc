(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{SiVQ:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return i})),t.d(a,"default",(function(){return d}));var n=t("Fcif"),o=t("+I+c"),s=t("/FXl"),l=t("TjRS"),i=(t("aD51"),{});void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"validators/custom-validators-sync.mdx"}});var r={_frontmatter:i},c=l.a;function d(e){var a=e.components,l=Object(o.a)(e,["components"]);return Object(s.b)(c,Object(n.a)({},r,l,{components:a,mdxType:"MDXLayout"}),Object(s.b)("h1",{id:"custom-validators-synchronous"},"Custom validators synchronous"),Object(s.b)("p",null,"Once you have checked that a given field or record validation is not available in the base or\nthird parties list of validators, it's time to create your own validator."),Object(s.b)("h2",{id:"field-validator"},"Field Validator"),Object(s.b)("p",null,"A field synchronous validator is just a function that expects one argument (this argument is an object that contains\nseveral fields), and return a validation result."),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"What do we mean by synchronous? That is any validation that executes some code and returns a result straightforward,\nif your validation needs to make a request to a server, it cannot provide a straightdforward result and probably\nyou will have to manage it using promises, in that case you have to use asynchronous validations, this is covered in the following\n",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"/fonk-doc/validators/custom-validators-async"}),"link"),".")),Object(s.b)("p",null,"Usually a Field Validator can be a perfect piece of code to be reused across the application and even to be included\nin a common library."),Object(s.b)("h3",{id:"disecting-a-validator"},"Disecting a validator"),Object(s.b)("p",null,"The definition of a synchronous field validator:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"FieldValidationArgs"),": This is passed as a single argument in the validator",Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"value"),": current field value."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"values"),": form / record values (all fields)."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"customArgs"),": we can pass custom arguments to our validator, this allow us to create flexible and configurable\nvalidators (e.g. in a min-length validator we can pass as customArgument a number indicating the minlength allowed,\nor if we have a password / repeat password validator we can pass the id of the password field to the repeat password\nfield)."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"message"),": you can override here the error message that the validator returns in case of failure. You can inject\nin a message ",Object(s.b)("em",{parentName:"li"},"parameter")," to be interpolated by the validator (e.g. 'string must be at least {{minlength}}'),\nin some validators there may be more than one error message defined, in that case we can pass an array of strings."))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"ValidationResult"),": once the validator has been executed it returns a ",Object(s.b)("em",{parentName:"li"},"ValidationResult"),":",Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"If the validation succeeds, you get as return value a ",Object(s.b)("em",{parentName:"li"},"ValidationResult")," where it's ",Object(s.b)("em",{parentName:"li"},"succeeded")," field value is true."),Object(s.b)("li",{parentName:"ul"},"If the validation fails, you get as return value a ",Object(s.b)("em",{parentName:"li"},"ValidationResult")," where it's ",Object(s.b)("em",{parentName:"li"},"succeeded")," field value is false,\nand a ",Object(s.b)("em",{parentName:"li"},"message")," where you get a user friendly error message and a ",Object(s.b)("em",{parentName:"li"},"type")," field that indicates the validator that\nfailed.")))),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"export interface FieldValidatorArgs {\n  value: any;\n  values?: any;\n  customArgs?: any;\n  message?: string | string[];\n}\n\nexport interface ValidationResult {\n  type: string;\n  succeeded: boolean;\n  message: string;\n}\n\nexport type FieldValidationFunctionSync = (\n  fieldValidatorArgs: FieldValidatorArgs\n) => ValidationResult;\n")),Object(s.b)("h3",{id:"learning-by-example"},"Learning by example"),Object(s.b)("p",null,"The best way to learn how to implement a validator is just by building one."),Object(s.b)("p",null,"Let's get started: we want to validate that an ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/International_Bank_Account_Number"}),"IBAN"),"\n(International Bank Account) field belongs to Spain (that is first two characters must be equal to ",Object(s.b)("em",{parentName:"p"},"ES"),")."),Object(s.b)("p",null,"We will start simple, in order to perform the validation we only need use the current field ",Object(s.b)("em",{parentName:"p"},"value")," we\ndon't need other optional params: ",Object(s.b)("em",{parentName:"p"},"values"),", ",Object(s.b)("em",{parentName:"p"},"customArgs"),", ",Object(s.b)("em",{parentName:"p"},"message"),", we will follow a TDD like approach\nwe will create the validator always faling (returning a failed validation result)."),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"const validatorType = 'MY_IBAN_VALIDATOR';\n\nexport const myValidator = fieldValidatorArgs => {\n  const validationResult = {\n    succeeded: false,\n    type: validatorType,\n    message: 'IBAN does not belong to Spain',\n  };\n\n  return validationResult;\n};\n")),Object(s.b)("p",null,"Let's got for the next step, we got a validator that always fails, now is time to inject our logic; we just want to validate\nthat the IBAN belongs to spain (first two characters must be ",Object(s.b)("em",{parentName:"p"},"ES"),")."),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-diff"}),"const validatorType = 'MY_IBAN_VALIDATOR';\n\nexport const myValidator = fieldValidatorArgs => {\n+ const { value } = fieldValidatorArgs;\n  const validationResult = {\n    succeeded: false,\n    type: validatorType,\n    message: 'IBAN does not belong to Spain',\n  };\n\n+ if (value && value[0] === 'E' && value[1] === 'S') {\n+   validationResult.succeeded = true;\n+   validationResult.message = '';\n+ }\n\n  return validationResult;\n}\n")),Object(s.b)("p",null,"Now we got our simple validator working, if you enter an IBAN that belongs to spain it will pass\nthe validation if not it will fail."),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"Watch out... what if we pass a null/undefined/empty string?")," Validation will succeed in this case, ",Object(s.b)("em",{parentName:"p"},"but is\nnot a valid IBAN isn't it?")," Usually is a good practice to delegate this validation to a prior validator like\nthe built-in ",Object(s.b)("strong",{parentName:"p"},"required")," validator, ",Object(s.b)("em",{parentName:"p"},"why?:")," maybe the field you want to validate is optional hence the\nIBAN validator should not fail, by doing that we are following the single responsibility principle."),Object(s.b)("p",null,"The validator was fine but what happens if we need to override the validation message? For instance you\nneed give support to multiple languages (english, spanish, french...), you can override the\nmessage(s) validators in two ways:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"You can setup the validator message(s) globally for any ValidationSchema instance (for instance you\njust change from english to french language and you want that ",Object(s.b)("em",{parentName:"p"},"MyValidator")," shows the error message\nin french in all the application forms where it's being used).")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"You can override the validation message just for a given ValidationSchema (for instance if you use\nthe built in ",Object(s.b)("em",{parentName:"p"},"pattern")," (regex) validator you may want for an specific field in a validation schema to return\n",Object(s.b)("em",{parentName:"p"},"invalid credit card")," and for other cases ",Object(s.b)("em",{parentName:"p"},"invalid shield number"),")."))),Object(s.b)("p",null,"Let's start by adding implementation into our validator to allow the developer consuming the validator change the error message globally:"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-diff"}),"const validatorType = 'MY_IBAN_VALIDATOR';\n\n+ let defaultMessage = 'IBAN does not belong to Spain';\n+ export const setErrorMessage = message => (defaultMessage = message);\n\nexport const myValidator = fieldValidatorArgs => {\n  const { value } = fieldValidatorArgs;\n\n  const validationResult = {\n    succeeded: false,\n    type: validatorType,\n-   message: 'IBAN does not belong to Spain',\n+   message: defaultMessage,\n  };\n\n  if (value && value[0] === 'E' && value[1] === 'S') {\n    validationResult.succeeded = true;\n    validationResult.message = '';\n  }\n\n  return validationResult;\n};\n")),Object(s.b)("p",null,"Now let's go for the specific override (just only customize the message for a given field on a given\nvalidation schema):"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-diff"}),"const validatorType = 'MY_IBAN_VALIDATOR';\n\nlet defaultMessage = 'IBAN does not belong to Spain';\nexport const setErrorMessage = message => (defaultMessage = message);\n\nexport const myValidator = fieldValidatorArgs => {\n- const { value } = fieldValidatorArgs;\n+ const { value, message = defaultMessage } = fieldValidatorArgs;\n\n  const validationResult = {\n    succeeded: false,\n    type: validatorType,\n-   message: defaultMessage,\n+   message,\n  };\n\n  if (value && value[0] === 'E' && value[1] === 'S') {\n    validationResult.succeeded = true;\n    validationResult.message = '';\n  }\n\n  return validationResult;\n};\n")),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"If you want to learn more about how to customize error message + internationalization you can jump\nto the following ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"/fonk-doc/messages/error-message"}),"section"),".")),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"That was awesome, but I need to implement the same validation for country entries like france (FR), germany (DE), and others, is there a way to make this validator more generic?"),"\nYes, we can make use of ",Object(s.b)("em",{parentName:"p"},"customArgs")," and pass the ",Object(s.b)("em",{parentName:"p"},"country")," prefix to validate (in a real case you could opt in to implement this inside the validator using a switch\nstatement but the goal of this example is to show you how to deal with ",Object(s.b)("em",{parentName:"p"},"customArgs"),")."),Object(s.b)("p",null,"We can assume the consumer of this validator will pass the country code in the ",Object(s.b)("em",{parentName:"p"},"customArgs")," something like:"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"{\n  countryCode: 'ES',\n}\n")),Object(s.b)("p",null,"Let's further enhance the validator (we will add support for that custom arg in our validator):"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-diff"}),"const validatorType = 'MY_IBAN_VALIDATOR';\n\nlet defaultMessage = 'IBAN does not belong to Spain';\nexport const setErrorMessage = message => (defaultMessage = message);\n\n+ const hasValidCountryCode = (value, customArgs) =>\n+   value &&\n+   value[0] === customArgs.countryCode[0] &&\n+   value[1] === customArgs.countryCode[1];\n\nexport const myValidator = fieldValidatorArgs => {\n- const { value, message = defaultMessage } = fieldValidatorArgs;\n+ const { value, customArgs, message = defaultMessage } = fieldValidatorArgs;\n\n+ // Depending in your case you may feed default values to customArgs or throw\n+ // an exception or a console.log error\n+ if (!customArgs.countryCode || customArgs.countryCode.length !== 2) {\n+   throw `${validatorType}: error you should inform customArgs countryCode prefix (2 characters length)`;\n+ }\n\n  const validationResult = {\n    succeeded: false,\n    type: validatorType,\n    message,\n  };\n\n- if (value && value[0] === 'E' && value[1] === 'S') {\n+ if (hasValidCountryCode(value, customArgs)) {\n    validationResult.succeeded = true;\n    validationResult.message = '';\n  }\n\n  return validationResult;\n};\n")),Object(s.b)("p",null,"That was great, but there's something going wrong, the validation error message still says:"),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"'IBAN does not belong to Spain'")),Object(s.b)("p",null,"We could just go the easy way and change the validation message to something more generic:"),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"'IBAN country code not valid'")),Object(s.b)("p",null,"But we want to use a more elegant solution, why not building a message like:"),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"IBAN country code prefix must be {{countryCode}}")),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},Object(s.b)("em",{parentName:"p"},"countryCode")," is just the name of the customArg we added previously.")),Object(s.b)("p",null,"Let's implement this:"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-diff"}),"+ import { parseMessageWithCustomArgs } from '@lemoncode/fonk';\nconst validatorType = 'MY_IBAN_VALIDATOR';\n\n- let defaultMessage = 'IBAN does not belong to Spain';\n+ let defaultMessage = 'IBAN does not belong to {{countryCode}}';\nexport const setErrorMessage = message => (defaultMessage = message);\n...\n\n  const validationResult = {\n    succeeded: false,\n    type: validatorType,\n-   message,\n+   message: parseMessageWithCustomArgs(message, customArgs),\n  };\n\n")),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"Wow ! That was awesome ! but how can I customize this message if I need internationalization?")," You can\noverride the message and just use the same interpolation sequence ",Object(s.b)("em",{parentName:"p"},"{{countryCode}}")," where applies."),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"Note down: you have to document this in your validator so consumers of your validator are aware of this params.")),Object(s.b)("p",null,Object(s.b)("img",{alt:"iban-custom-sync-validator",src:t("hGIX")})),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"So far so good, but what happens if I need another form field value to execute my field validator?")," Let's say for\ninstance I got a signUp form where the user has to enter his password, then reenter it in a different field\nto avoid him introducing any typo by mistake. That's a great use case, let's dig into that:"),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"This validator is already available as a third party plugin, you can find it in the following ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Lemoncode/fonk-iban-validator"}),"link"),".")),Object(s.b)("p",null,"We've got the following form:"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"const mySignupFormData = {\n  email: 'john.doe@mydomain.com'\n  password : '123',\n  repeatPassword: '124',\n}\n")),Object(s.b)("p",null,"First we will implement a validator specific for that form, we will access ",Object(s.b)("em",{parentName:"p"},"customArgs.values")," field to get other form field value:"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"const validatorType = 'FIELDS_MATCH_VALIDATOR';\n\n let defaultMessage = 'Fields does not match';\n export const setErrorMessage = message => (defaultMessage = message);\n\nexport const fieldMatchValidator = (fieldValidatorArgs) {\n  // All form/record data is passed in the fieldValidatorArgs.values field\n  const {value, values, message = defaultMessage} = fieldValidatorArgs\n  const validationResult = {\n    succeeded: false,\n    type: validatorType,\n    message,\n  };\n\n  // Now we can acces the 'password' field from the values field\n  if (value === values.password) {\n    validationResult.succeeded = true;\n    validationResult.message = '';\n  }\n\n  return validationResult;\n}\n")),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"Fine, we managed to build to the validator, but is too tied up to the form, couldn't it be possible to create a reusable validator?"),"\nthe answer is yes if we combine togheter ",Object(s.b)("em",{parentName:"p"},"fieldValidationArgs.values")," and ",Object(s.b)("em",{parentName:"p"},"fieldValidationArgs.customArgs")," (in customArgs we will\npass the name of the field to compare with)."),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("strong",{parentName:"p"},"customArgs"),": here we will pass the id of the field to check (in this case the ",Object(s.b)("em",{parentName:"p"},"password")," field).")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("strong",{parentName:"p"},"values"),": here we get all the form/record values, we can use the following approach to access\nthe ",Object(s.b)("em",{parentName:"p"},"password")," field:"))),Object(s.b)("p",null,"Let's see how to combine this both together:"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-diff"}),"const validatorType = 'FIELDS_MATCH_VALIDATOR';\n\n let defaultMessage = 'Fields does not match';\n export const setErrorMessage = message => (defaultMessage = message);\n\nexport const fieldMatchValidator = (fieldValidatorArgs) {\n  // All form/record data is passed in the fieldValidatorArgs.values field\n+ // We will make use of customArgs\n-  const {value, values, message = defaultMessage} = fieldValidatorArgs\n+   const {value, values, customArgs, message = defaultMessage} = fieldValidatorArgs\n  const validationResult = {\n    succeeded: false,\n    type: validatorType,\n    message,\n  };\n\n+  // Depending in your case you may feed default values to customArgs or throw\n+  // an exception or a console.log error\n+  if(!customArgs.fieldToCompareName) {\n+    throw(`${validatorType}: you need to inform the fieldToCompareName`)\n+  }\n\n-  // Now we can acces the 'password' field from the values field\n+  We just grab the value of the field using the bracket accesor\n+  more info:\n+  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors\n-  if (value === values.password) {\n+  if(value === value[customArgs.fieldToCompareName])\n    validationResult.succeeded = true;\n    validationResult.message = '';\n  }\n\n  return validationResult;\n}\n")),Object(s.b)("p",null,"Check here:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"https://codesandbox.io/s/github/lemoncode/fonk/tree/master/examples/docs/validators/js/vanilla/iban-custom-sync-validator"}),"Plain Vanilla JS"),"."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"https://codesandbox.io/s/github/lemoncode/fonk/tree/master/examples/docs/validators/ts/vanilla/iban-custom-sync-validator"}),"Plain Vanilla TS"),"."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"https://codesandbox.io/s/github/lemoncode/fonk/tree/master/examples/docs/validators/js/react-final-form/iban-custom-sync-validator"}),"React + React Final Form JS"),"."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"https://codesandbox.io/s/github/lemoncode/fonk/tree/master/examples/docs/validators/ts/react-final-form/iban-custom-sync-validator"}),"React + React Final Form TS"),".")),Object(s.b)("h2",{id:"record-validator"},"Record Validator"),Object(s.b)("p",null,"A record validator is a validation that is not tied up to an specific field, is usually something that we trigger\nwhen the user hits submit, and before sending the information to the server."),Object(s.b)("p",null,"Record validations usually are not highly reusable functions, they are tied up to the domain of the form to be validated."),Object(s.b)("h3",{id:"disecting-a-record-validator"},"Disecting a record validator"),Object(s.b)("p",null,"The definition of a synchronous field validator:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"RecordValidationArgs"),": This is passed as a single argument in the validator",Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"values"),": form / record values (all fields)."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"message"),": you can override here the error message that the validator returns in case of failure. You can inject\nin a message ",Object(s.b)("em",{parentName:"li"},"parameter")," to be interpolated by the validator (e.g. 'string must be at least {{minlength}}'),\nin some validators there may be more than one error message defined, in that case we can pass an array of strings."))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"ValidationResult"),": once the validator has been executed it returns a ",Object(s.b)("em",{parentName:"li"},"ValidationResult"),":",Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"If the validation succeeds, you get as return value a ",Object(s.b)("em",{parentName:"li"},"ValidationResult")," where it's field ",Object(s.b)("em",{parentName:"li"},"succeeded")," is true."),Object(s.b)("li",{parentName:"ul"},"If the validation fails, you get as return value a ",Object(s.b)("em",{parentName:"li"},"ValidationResult")," where it's field ",Object(s.b)("em",{parentName:"li"},"succeeded")," is false,\nand a ",Object(s.b)("em",{parentName:"li"},"message")," where you get a user friendly error message and a ",Object(s.b)("em",{parentName:"li"},"type")," field that indicates the validator id that\ngenerated the error.")))),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"export interface RecordValidatorArgs {\n  values: any;\n  message?: string | string[];\n}\n\nexport interface ValidationResult {\n  type: string;\n  succeeded: boolean;\n  message: string;\n}\n\nexport type RecordValidationFunctionSync = (\n  recordValidatorArgs: RecordValidatorArgs\n) => ValidationResult;\n")),Object(s.b)("h3",{id:"learning-by-example-1"},"Learning by example"),Object(s.b)("p",null,"We got a form that displays the total monetary amount of a given shopping order:"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"const myFormValues = {\n  product: 'shoes',\n  discount: 5,\n  price: 20,\n  isPrime: false,\n};\n")),Object(s.b)("p",null,"Once the user hits on submit order and before sending the request to the server we want to check the following rule: FreeShipping\ncan be true if the total amount (price - discount) is greater than 20 USD, or if the field ",Object(s.b)("em",{parentName:"p"},"isPrime")," is true."),Object(s.b)("p",null,"A validator to implement this:"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"// A record validator receives in the args an object with\n// all the record values and optionally the custom message\nconst freeShippingRecordValidator = ({ values }) => {\n  const succeeded = values.isPrime || values.price - values.discount > 20;\n\n  return {\n    succeeded,\n    message: succeeded\n      ? ''\n      : 'Subscribe to prime service or total must be greater than 20USD',\n    type: 'RECORD_FREE_SHIPPING',\n  };\n};\n")),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"If you need to implement internationalization or customize messages you can follow the same approach\nas the described for the field record validations.")),Object(s.b)("p",null,Object(s.b)("img",{alt:"validate-record",src:t("awue")})),Object(s.b)("p",null,"Full example implemented:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"https://codesandbox.io/s/github/lemoncode/fonk/tree/master/examples/vanilla/js/validate-record"}),"Plain Vanilla JS"),"."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"https://codesandbox.io/s/github/lemoncode/fonk/tree/master/examples/vanilla/ts/validate-record"}),"Plain Vanilla TS"),"."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"https://codesandbox.io/s/github/lemoncode/fonk/tree/master/examples/react-final-form/js/validate-record"}),"React + React Final Form JS"),"."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"https://codesandbox.io/s/github/lemoncode/fonk/tree/master/examples/react-final-form/ts/validate-record"}),"React + React Final Form TS"),"."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"https://codesandbox.io/s/github/Lemoncode/fonk/tree/master/examples/vue/js/validate-record"}),"Vuejs"))),Object(s.b)("h1",{id:"next-section"},"Next section"),Object(s.b)("p",null,"Now that you have learn how to build synchronous custom validators is time to learn how to implement ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"/fonk-doc/validators/custom-validators-async"}),"asynchronous custom validators"),"."))}void 0!==d&&d&&d===Object(d)&&Object.isExtensible(d)&&!d.hasOwnProperty("__filemeta")&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"validators/custom-validators-sync.mdx"}}),d.isMDXComponent=!0},awue:function(e,a,t){e.exports=t.p+"static/validate-record-2ed0fb7daf0f2685a52e5a0fa9a776ee.gif"},hGIX:function(e,a,t){e.exports=t.p+"static/iban-custom-sync-validator-1c7399ede0c6bcae0a154f3344188c23.gif"}}]);
//# sourceMappingURL=component---validators-custom-validators-sync-mdx-1f4c7bd0c778b12a1249.js.map