module.exports = {
  country: 'no',
  type: 'person',
  isValidNinFn: nin => { // "Fødselsnummer"
    nin = nin.replace(/\D/g,'');
    if (nin.length !== 10) { return false; }
    if ([ "3761894521", "54327654321" ].some(magicNumber =>
      magicNumber.split('').reduce((s,c,i) => s + nin[i] * c, 0) % 11 !== 0
    )) { return false; }
    let [ d, m, y ] = nin.split(/(.{2})/).filter(c => c).slice(0,3);
    const date = new Date(`${y}-${m}-${d}`);
    return (Boolean(+date) && date.getDate() == d);
  }
};
