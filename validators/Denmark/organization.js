module.exports = {
  country: 'dk',
  type: 'organization',
  isValidNinFn: nin => { // "CVR-nummer"
    nin = nin.replace(/\D/g,'');
    if (nin.length !== 8) { return false; }
    let sum = '27654321'.split('')
      .reduce((s,c,i) => s + nin[i] * c, 0);
    return sum % 11 === 0;
  }
};
