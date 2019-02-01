module.exports = {
  country: 'za',
  type: 'person',
  isValidNinFn: nin => { // "SAID"
    if(!/^[0-9]{13}$/.test(nin)) { return false };
    let a = 0, b = '', c, i;
    for (i = 0; i < 12; i += 2) {
      a += +nin.charAt(i);
      b += nin.charAt(i + 1);
    }
    b = '' + b * 2;
    for (i = 0; c = b.charAt(i); i++) { a += +c; }
    a = 10 - ('' + a).charAt(1);
    if (('' + a).slice(-1) !== nin.slice(-1)) { return false; }
    let [ y, m, d ] = nin.split(/(.{2})/).filter(c => c);
    const date = new Date(`${y}-${m}-${d}`);
    return (Boolean(+date) && date.getDate() == d);
  },
  normalizeNinFn: nin => nin
};
