module.exports = {
  country: 'us',
  type: 'organization',
  isValidNinFn: nin => { // "Employer Identification number"
    if (!/^\d{2}[- ]{0,1}\d{7}$/.test(nin))
      { return false; }
    let p = parseInt(nin.substr(0,2),10);
    return [[1,6],[10,16],[20,27],[30,48],[50,68],[71,77],[80,88],[90,95],[98,99]]
      .some(([a,b]) => p >= a && p <= b);
  },
  normalizeNinFn: nin => nin.replace(/\D/g,'')
};
