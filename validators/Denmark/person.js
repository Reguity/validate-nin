module.exports = {
  country: 'dk',
  type: 'person',
  isValidNinFn: nin => { // "CPR-nummer"
    if (!/^[0-9]{6}[\-\+]?[0-9]{4}?$/.test(nin)) { return false; }
    nin = nin.replace(/\D/g,'');
    if (nin.length !== 10) { return false; }
    let sum = '4327654321'.split('')
      .reduce((s,c,i) => s + nin[i] * c, 0);
    if (sum % 11 !== 0) { return false; }
    let [ d, m, y ] = nin.split(/(.{2})/).filter(c => c).slice(0, 3);
    return [ 19, 20 ].some(p => {
      let date = new Date(`${p}${y}-${m}-${d}`);
      return Boolean(+date) && date.getDate() == d;
    });
  },
  normalizeNinFn: nin => nin.replace(/\D/g,'')
};
