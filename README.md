# validate-nin

validate-nin consists of pure functions to validate national identity numbers of people and organizations in various countries

# Current support
- Sweden: People and organizations

# Installation
```
$ npm install validate-nin --save
```

# Usage
This example shows you how to create a small service with an `add` action which can add two numbers and how to call it.
```js
const validateNin = require('validate-nin');
let isSwedishPersonNinValid = validateNin.getValidator({ country: 'se', type: 'person'});
let okResult = isSwedishPersonNinValid("8112189876");
// -> true
let notOkResult = isSwedishPersonNinValid("8112189877");
// -> false
```

# Contribute
You can easily extend validate-nin with additional validators for (country, type) tuples in the following manner
```js
validateNin.addValidator({
  country: 'xx', // ISO 3166-1 alpha-2 code
  type: 'yy', // Either "person" or "organization"
  isValidNinFn: nin => { /* return true if valid */ }
});
```

We encourage you to put the argument to `addValidator` a module in an appropriate location within the `validators`
directory of this repository and create a pull request.
