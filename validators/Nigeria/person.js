module.exports = {
  country: 'ng',
  type: 'person',
  isValidNinFn: nin => { // "National Identification Number"
    return /^[0-9]{11}$/.test(nin);
  },
  normalizeNinFn: nin => nin
};
