module.exports = {
  country: 'dk',
  type: 'person',
  isValidNinFn: nin => { // "CPR-nummer"
    nin = nin.replace(/\D/g,'');
    if (nin.length !== 10) { return false; }
    let sum = '4327654321'.split('')
      .reduce((s,c,i) => s + nin[i] * c, 0);
    if (sum % 11 !== 0) { return false; }
    let [ d, m, y ] = nin.split(/(.{2})/).filter(c => c).slice(0,3);
    const date = new Date(`${y}-${m}-${d}`);
    return (Boolean(+date) && date.getDate() == d);
  }
};