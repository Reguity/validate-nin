module.exports = {
  country: 'gb',
  type: 'person',
  isValidNinFn: nin => { // "National Insurance number"
    return /^(?!BG|GB|NK|KN|TN|NT|ZZ)((?![DFIQUV])([A-Z])(?![DFIQUVO])([A-Z]))[0-9]{6}[A-D ]$/.test(nin);
  }
};
