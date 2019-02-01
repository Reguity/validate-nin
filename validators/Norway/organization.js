module.exports = {
  country: 'no',
  type: 'organization',
  isValidNinFn: nin => { // "Organisasjonsnummer"
    nin = nin.replace(/\D/g,'');
    if (nin.length !== 9) { return false; }
    let sum = '32765432'.split('').reduce((s,c,i) => s + nin[i] * c, 0);
    return (nin[8] + (sum % 11) - 11) === 0
  }
};
