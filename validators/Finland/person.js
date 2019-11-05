module.exports = {
  country: 'fi',
  type: 'person',
  isValidNinFn: nin => { // "Personnummer"
    if (!(/^(0[1-9]|[12]\d|3[01])(0[1-9]|1[0-2])([5-9]\d\+|\d\d-|[012]\dA)\d{3}[\dA-Z]$/.test(nin)))
      { return false; }
    const centuryMap = { 'A': 2000, '-': 1900, '+': 1800 };
    const dayOfMonth = parseInt(nin.substring(0, 2), 10)
    const month = nin.substring(2, 4)
    const centuryId = nin.charAt(6)
    const year = parseInt(nin.substring(4, 6), 10) + centuryMap[centuryId];
    const rollingId = nin.substring(7, 10)
    const checksum = nin.substring(10, 11)
    const checksumBase = parseInt(nin.substring(0, 6) + rollingId, 10)
    let date = new Date(year, parseInt(month, 10) - 1, dayOfMonth, 0, 0, 0, 0);
    if (!(Boolean(+date) && date.getDate() == dayOfMonth)) { return false; }
    const checksumTable = '0123456789ABCDEFHJKLMNPRSTUVWXY'.split('');
    return checksum === checksumTable[checksumBase % 31];
  },
  normalizeNinFn: nin => {
    return nin.trim()
  }
};
