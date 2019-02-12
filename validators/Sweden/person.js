module.exports = {
  country: 'se',
  type: 'person',
  isValidNinFn: nin => { // "Personnummer"
    if (!/^[0-9]{6,8}[\-\+]?[0-9]{4}?$/.test(nin)) { return false; }
    nin = nin.replace(/\D/g,'');
    let cs;
    if (nin.length === 12) {
      cs = [ nin.substr(0, 2) ];
      nin = nin.substr(2);
    } else { cs = [ 19, 20 ]; }
    let sum = '2121212121'.split('')
      .reduce((s,c,i) => s + (nin[i] * c - 1) % 9 + 1, 0);
    if (sum % 10 !== 0) { return false; }
    let [ y, m, d ] = nin.split(/(.{2})/).filter(c => c);
    return cs.some(p => {
      let date = new Date(`${p}${y}-${m}-${d}`);
      return Boolean(+date) && date.getDate() == d;
    });
  },
  normalizeNinFn: nin => nin.replace(/\D/g,'')
};
