module.exports = {
  country: 'se',
  type: 'person',
  isValidNinFn: nin => { // "Personnummer"
    if (!/^[0-9]{6}[\-\+]?[0-9]{4}?$/.test(nin)) { return false; }
    nin = nin.replace(/\D/g,'');
    let sum = '2121212121'.split('')
      .reduce((s,c,i) => s + (nin[i] * c - 1) % 9 + 1, 0);
    if (sum % 10 !== 0) { return false; }
    let [ y, m, d ] = nin.split(/(.{2})/).filter(c => c);
    return [ 19, 20 ].some(p => {
      let date = new Date(`${p}${y}-${m}-${d}`);
      return Boolean(+date) && date.getDate() == d;
    });
  },
  normalizeNinFn: nin => nin.replace(/\D/g,'')
};
