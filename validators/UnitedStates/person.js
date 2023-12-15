module.exports = {
  country: 'us',
  type: 'person',
  isValidNinFn: nin => { // "Social security number"
    if (!/^(?!666|000|9\d{2})\d{3}[- ]{0,1}(?!00)\d{2}[- ]{0,1}(?!0{4})\d{4}$/.test(nin))
    //if (!/?!219-09-9999|078-05-1120)(?!666|000|9\d{2})d{3}-(?!00)\d{2}-(?!0{4})\d{4}/.test(nin))
      { return false; }
    return ['078051120','219099999','457555462'].indexOf(nin.replace(/\D/g, '')) === -1;
  },
  normalizeNinFn: nin => nin.replace(/\D/g,''),
  formatNinFn: normalized => {
    return `${normalized.substr(0, 3)}-${normalized.substr(3, 2)}-${normalized.substr(5, 4)}`;
  }
};
