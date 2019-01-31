module.exports = {
  country: 'se',
  type: 'person',
  isValidNinFn: nin => {
    nin = nin.replace(/\D/g,'');
    if (nin.length !== 10) { return false; }
    let sum = '2121212121'.split('')
      .reduce((s,c,i) => s + (nin[i] * c - 1) % 9 + 1, 0);
    if (sum % 10 !== 0) { return false; }
    let d = nin.split(/(.{2})/).filter(c => c).slice(0,3);
    const date = new Date(d.join('-'))
    return (Boolean(+date) && date.getDate() == d.slice(-1));
  }
};
