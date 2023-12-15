const validators = require('./validators');

const validateNin = (() => {
  const validators = {};
  return {
    addValidator: ({ country, type, isValidNinFn, normalizeNinFn, formatNinFn }) => {
      const resolverMap = {
        isValid: isValidNinFn,
        normalize: normalizeNinFn,
        format: formatNinFn
      }
      if (country in validators) {
        validators[country][type] = resolverMap;
      } else {
        validators[country] = { [type]: resolverMap };
      }
    },
    getValidator: ({ country, type }) => {
      if (!(country in validators && type in validators[country])) { return undefined; }
      return validators[country][type];
    }
  };
})();

validators.forEach((validator) => {
  validateNin.addValidator(validator);
});

module.exports = validateNin;
