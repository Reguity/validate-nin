module.exports = {
  country: 'se',
  type: 'organization',
  isValidNinFn: nin => { // "Organisationsnummer"
    if (!/^[0-9]{6}-?[0-9]{4}?$/.test(nin)) { return false; }
    nin = nin.replace(/\D/g,'');
    let sum = '2121212121'.split('')
      .reduce((s,c,i) => s + (nin[i] * c - 1) % 9 + 1, 0);
    if (sum % 10 !== 0) { return false; }
    let [ _, m ] = nin.split(/(.{2})/).filter(c => c);
    return m >= 20;
  },
  normalizeNinFn: nin => nin.replace(/\D/g,'')
};
