# Data replacer

This module makes it easier to replace words in a string.

## Usage

- Create a new instance of DataReplacer class  
  Options :

| PARAMETER        | TYPE    | OPTIONAL | DEFAULT | DESCRIPTION                            |
| ---------------- | ------- | -------- | ------- | -------------------------------------- |
| caseInsensitive  | boolean | ✓        | true    | Replacement with case insensitive      |
| required         | boolean | ✓        | false   | Throw an error if string missing field |
| multipleReplaces | boolean | ✓        | true    | Multiple words replacement             |

### replace

Replace word(s) in a string.

#### Params

- text : The text to replace. (`string`)
- replace : The object with the string to be replaced in key and the new value in value. (`Object`)

#### Return

The text with the replaced values. (`string`)

```js
const text = "Hello {{missingWord}}";
const replace = {
  "{{missingWord}}": "world !",
};
const result = Replacer.replace(text, replace);

console.log(result);
```

## Example

```js
const { DataReplacer } = require("data-replacer");

const Replacer = new DataReplacer({
  caseInsensitive: true,
  multipleReplaces: true,
  required: false,
});

const str = `
  Hi {{username}} ! 
  Welcome to the website {{domain}}
  You can access to your account with the login page :
  {{domain}}/login
  `;
const replace = {
  "{{username}}": "Smaug",
  "{{website}}": "https://exemple-website.com",
  "{{domain}}": "https://exemple-website.com",
};

const replacedStr = Replacer.replace(str, replace);
console.log(replacedStr);
```
