const fs = require('fs');
const path = require('path');

const validateNin = (() => {
  const validators = {};
  return {
    addValidator: ({ country, type, isValidNinFn, normalizeNinFn }) => {
      if (country in validators) {
        validators[country][type] = { isValid: isValidNinFn, normalize: normalizeNinFn };
      } else {
        validators[country] = { [type]: { isValid: isValidNinFn, normalize: normalizeNinFn } };
      }
    },
    getValidator: ({ country, type }) => {
      if (!(country in validators && type in validators[country])) { return undefined; }
      return validators[country][type];
    }
  };
})();

const getAllJsFiles = dir => fs.readdirSync(dir).reduce((files, file) => {
  const name = path.join(dir, file);
  const isDirectory = fs.statSync(name).isDirectory();
  if (isDirectory) { return [ ...files, ...getAllJsFiles(name) ];
  } else {
    if (file.indexOf('.js') !== -1) { return [ ...files, name ]; }
    else { return files; }
  }s
}, []);

getAllJsFiles(`${ __dirname}/validators`).forEach(file => {
  validateNin.addValidator(require(file));
});

module.exports = validateNin;
