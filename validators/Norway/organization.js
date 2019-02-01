module.exports = {
  country: 'no',
  type: 'organization',
  isValidNinFn: nin => { // "Organisasjonsnummer"
    if (!/^[0-9 ]+$/.test(nin)) { return false; }
    nin = nin.replace(/\D/g,'');
    if (nin.length !== 9) { return false; }
    return '327654321'.split('').reduce((s,c,i) => s + nin[i] * c, 0) % 11 === 0;
  },
  normalizeNinFn: nin => nin.replace(/\D/g,'')
};
