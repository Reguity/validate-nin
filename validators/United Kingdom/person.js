module.exports = {
  country: 'gb',
  type: 'person',
  isValidNinFn: nin => { // "National Insurance number"
    nin = nin.toUpperCase().replace(/[^A-Z0-9]/, '');
    if (nin.length === 7 && /^[0-9]*$/.test(nin)) { nin = `0${nin}`; }
    if (!/^[A-Z]{2}[0-9]{6}[A-D]{1}$/.test(nin)) { return false; }
    if (/^[DFIQUV]/.test(nin)) { return false; }
    if (/^.[DFIQUVO]/.test(nin)) { return false;}
    return true;
  }
};
