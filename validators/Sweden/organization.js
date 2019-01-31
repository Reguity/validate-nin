module.exports = {
  country: 'se',
  type: 'organization',
  isValidNinFn: nin => {
    nin = nin.replace(/\D/g,'');
    if (nin.length !== 10) { return false; }
    let sum = '2121212121'.split('')
      .reduce((s,c,i) => s + (nin[i] * c - 1) % 9 + 1, 0);
    return sum % 10 === 0;
  }
};
