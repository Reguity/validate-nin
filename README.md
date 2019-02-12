# validate-nin

validate-nin consists of pure functions to validate and normalize national identity numbers of people and/or organizations in
countries that use such well-recognized identity number systems.

# Current support
- **China**:
  - People ("Identity card number")
- **Denmark**:
  - People ("CPR-nummer")
  - Organizations ("CVR-nummer")
- **India**:
  - People ("Adhaar")
- **Nigeria**:
  - People ("National Identification Number")
- **Norway**:
  - People ("Fødselsnummer")
  - Organizations ("Organisasjonsnummer")
- **South Africa**:
  - People ("Said")
- **Sweden**:
  - People ("Personnummer")
  - Organizations ("Organisationsnummer")
- **United Kingdom**:
  - People ("National insurance number")
  - Organizations ("Companies house number")
- **United States**:
  - People ("Social security number")
  - Organizations ("Employer Identification number")

# Installation
```
$ npm install validate-nin --save
```

# Usage
This example shows you how to validate Swedish Nin's ("Personnummer").
```js
const validateNin = require('validate-nin');
let swedishPersonValidator = validateNin.getValidator({ country: 'se', type: 'person'});
let okResult = swedishPersonValidator.isValidNiN("811218-9876"); // -> true
let notOkResult = swedishPersonValidator.isValidNiN("811218-9877"); // -> false
let normalized = swedishPersonValidator.normalizeNin("811218-9876"); // -> 8112189876
```

# Contribute
You can easily extend validate-nin with additional validators for (country, type) tuples in the following manner
```js
validateNin.addValidator({
  country: 'xx', // ISO 3166-1 alpha-2 code
  type: 'yy', // Either "person" or "organization"
  isValidNinFn: nin => { /* return true if valid */ },
  normalizeNin: nin => { /* return normalized form */ }
});
```

We encourage you to put the argument of `addValidator` as a module export in a js file in an appropriate location within the `validators` directory of this repository and create a pull request.
