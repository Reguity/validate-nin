module.exports = {
  country: 'gb',
  type: 'organization',
  isValidNinFn: nin => { // "Companies house number"
    nin = nin.replace(/[^A-Z0-9]/, '');
    return /^([A-Z]{2})?[0-9]{8}$/.test(nin);
  }
};
