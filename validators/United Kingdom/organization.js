module.exports = {
  country: 'gb',
  type: 'organization',
  isValidNinFn: nin => { // "Companies house number"
    return /^([A-Z]{2})?[0-9]{8}$/.test(nin);
  }
};
