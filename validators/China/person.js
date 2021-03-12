module.exports = {
  country: 'cn',
  type: 'person',
  isValidNinFn: nin => { // "Identity card number"
    if (!/^[0-9]{17}[0-9X]$/.test(nin)) { return false; }
    let s = [7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2]
      .reduce((s,c,i) => s + nin[i] * c, 0);
    let l = nin.slice(-1);
    if (l === 'X') { l = 10; }
    if (((12 - s % 11) % 11) != l) { return false; }
    let [ y, m, d ] = nin.substr(8,8).split(/(.{2})/).filter(c => c);
    const date = new Date(`${nin.substr(6,2) + y}-${m}-${d}`);
    return (Boolean(+date) && date.getDate() == d);
  },
  normalizeNinFn: nin => nin,
  formatNinFn: normalized => normalized
};
