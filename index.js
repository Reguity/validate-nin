const fs = require('fs');
const path = require('path');

const validateNin = (() => {
  const validators = {};
  return {
    addValidator: ({ country, type, isValidNinFn }) => {
      if (country in validators) { validators[country][type] = isValidNinFn; }
      else { validators[country] = { [type]: isValidNinFn }; }
    },
    getValidator: ({ country, type }) => {
      if (!(country in validators && type in validators[country]))
        { throw new Error(`Validator not registered: [${country}, ${type}]`); }
      return validators[country][type];
    }
  };
})();

const getAllJsFiles = (() => {
  const cache = {};
  return dir => {
    if (!(dir in cache)) {
      if (!fs.existsSync(dir)) { cache[dir] = []; }
      else cache[dir] = fs.readdirSync(dir).reduce((files, file) => {
        const name = path.join(dir, file);
        const isDirectory = fs.statSync(name).isDirectory();
        if (isDirectory) {
          return [ ...files, ...getAllJsFiles(name) ];
        } else {
          if (file.indexOf('.js') !== -1) { return [ ...files, name ]; }
          else { return files; }
        }
      }, []);
    }
    return cache[dir];
  }
})();

getAllJsFiles(`${ __dirname}/validators`).forEach(file => {
  validateNin.addValidator(require(file));
});

module.exports = validateNin;
