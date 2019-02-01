module.exports = {
  country: 'dk',
  type: 'organization',
  isValidNinFn: nin => { // "CVR-nummer"
    if (!/^[0-9]{8}$/.test(nin)) { return false; }
    return '27654321'.split('').reduce((s,c,i) => s + nin[i] * c, 0) % 11 === 0;
  },
  normalizeNinFn: nin => nin
};
