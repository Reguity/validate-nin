const validateNin = require('./index');


describe('Denmark', () => {
  test('Person', async () => {
    let isValid = validateNin.getValidator({ country: 'dk', type: 'person' });
    expect(isValid('130889-0240')).toBeTruthy();
    expect(isValid('1308890240')).toBeTruthy();
    expect(isValid('150373-4431')).toBeTruthy();
    expect(isValid('1503734431')).toBeTruthy();
    expect(isValid('130889 0240')).toBeFalsy();
    expect(isValid('130889--0240')).toBeFalsy();
    expect(isValid('-1308890240')).toBeFalsy();
    expect(isValid('130889A0240')).toBeFalsy();
    expect(isValid('130889-0240 ')).toBeFalsy();
    expect(isValid(' 130889-0240')).toBeFalsy();
  });
  test('Organization', async () => {
    let isValid = validateNin.getValidator({ country: 'dk', type: 'organization' });
    expect(isValid('11111114')).toBeTruthy();
    expect(isValid('46265831')).toBeTruthy();
    expect(isValid('10674859')).toBeTruthy();
    expect(isValid('11111110')).toBeFalsy();
    expect(isValid('11111111')).toBeFalsy();
    expect(isValid('11111112')).toBeFalsy();
    expect(isValid('11111113')).toBeFalsy();
    expect(isValid('11111115')).toBeFalsy();
    expect(isValid('11111116')).toBeFalsy();
    expect(isValid('11111117')).toBeFalsy();
    expect(isValid('11111118')).toBeFalsy();
    expect(isValid('11111119')).toBeFalsy();
    expect(isValid('111111-14')).toBeFalsy();
    expect(isValid('11111114 ')).toBeFalsy();
    expect(isValid(' 11111114')).toBeFalsy();
  });
});

describe('Norway', () => {
  test('Person', async () => {
    let isValid = validateNin.getValidator({ country: 'no', type: 'person' });
    expect(isValid('29029600013')).toBeTruthy();
    expect(isValid('29029600012 ')).toBeFalsy();
    expect(isValid(' 29029600013')).toBeFalsy();
    expect(isValid('29029600013 ')).toBeFalsy();
    expect(isValid('290296-00013')).toBeFalsy();
  });
  test('Organization', async () => {
    let isValid = validateNin.getValidator({ country: 'no', type: 'organization' });
    expect(isValid('988077917')).toBeTruthy();
    expect(isValid('988 077 917')).toBeTruthy();
    expect(isValid('988077918')).toBeFalsy();
    expect(isValid('988077-917')).toBeFalsy();
  });
});

describe('Sweden', () => {
  test('Person', async () => {
    let isValid = validateNin.getValidator({ country: 'se', type: 'person' });
    expect(isValid('560120-5635')).toBeTruthy();
    expect(isValid('5601205635')).toBeTruthy();
    expect(isValid('560120+5635')).toBeTruthy();
    expect(isValid('560120 5635')).toBeFalsy();
    expect(isValid('560120--5635')).toBeFalsy();
    expect(isValid('560120++5635')).toBeFalsy();
    expect(isValid('560120+-5635')).toBeFalsy();
    expect(isValid('560120-+5635')).toBeFalsy();
    expect(isValid('-5601205635')).toBeFalsy();
    expect(isValid('560120A5635')).toBeFalsy();
    expect(isValid('56012056351')).toBeFalsy();
    expect(isValid('5601205636')).toBeFalsy();
    expect(isValid('560120-5636')).toBeFalsy();
    expect(isValid('560120-5635 ')).toBeFalsy();
    expect(isValid(' 560120-5635')).toBeFalsy();
  });
  test('Organization', async () => {
    let isValid = validateNin.getValidator({ country: 'se', type: 'organization' });
    expect(isValid('212000-0142')).toBeTruthy();
    expect(isValid('2120000142')).toBeTruthy();
    expect(isValid('212000+01421')).toBeFalsy();
    expect(isValid('212000 0142')).toBeFalsy();
    expect(isValid('212000--0142')).toBeFalsy();
    expect(isValid('-2120000142')).toBeFalsy();
    expect(isValid('212000-0141')).toBeFalsy();
    expect(isValid('2120000143')).toBeFalsy();
    expect(isValid('212000-0142 ')).toBeFalsy();
    expect(isValid(' 212000-0142')).toBeFalsy();
  });
});

describe('United Kingdom', () => {
  test('Person', async () => {
    let isValid = validateNin.getValidator({ country: 'gb', type: 'person' });
    expect(isValid('AB123456C')).toBeTruthy();
    expect(isValid('TX999999D')).toBeTruthy();
    expect(isValid('NB010101 ')).toBeTruthy();
    expect(isValid('LM938322B')).toBeTruthy();
    expect(isValid('AB111111A')).toBeTruthy();
    expect(isValid('XY111111A')).toBeTruthy();
    expect(isValid('CE111111A')).toBeTruthy();
    expect(isValid('NY111111A')).toBeTruthy();
    expect(isValid('OX111111A')).toBeTruthy();
    expect(isValid('ZA111111A')).toBeTruthy();
    expect(isValid('AB111111B')).toBeTruthy();
    expect(isValid('AB111111C')).toBeTruthy();
    expect(isValid('AB111111D')).toBeTruthy();
    expect(isValid('AB12345678C')).toBeFalsy();
    expect(isValid('BG111111A')).toBeFalsy();
    expect(isValid('NT111111A')).toBeFalsy();
    expect(isValid('ABC111111A')).toBeFalsy();
    expect(isValid('DA111111A')).toBeFalsy();
    expect(isValid('FA111111A')).toBeFalsy();
    expect(isValid('IA111111A')).toBeFalsy();
    expect(isValid('QA111111A')).toBeFalsy();
    expect(isValid('UA111111A')).toBeFalsy();
    expect(isValid('VA111111A')).toBeFalsy();
    expect(isValid('AD111111A')).toBeFalsy();
    expect(isValid('AF111111A')).toBeFalsy();
    expect(isValid('AI111111A')).toBeFalsy();
    expect(isValid('AQ111111A')).toBeFalsy();
    expect(isValid('AU111111A')).toBeFalsy();
    expect(isValid('AV111111A')).toBeFalsy();
    expect(isValid('AO111111A')).toBeFalsy();
    expect(isValid('AB111111E')).toBeFalsy();
    expect(isValid('AB111111X')).toBeFalsy();
    expect(isValid('AB1111115')).toBeFalsy();
    expect(isValid('AB111111L')).toBeFalsy();
    expect(isValid('AB1111110')).toBeFalsy();
    expect(isValid('AB111111J')).toBeFalsy();
  });
  test('Organization', async () => {
    let isValid = validateNin.getValidator({ country: 'gb', type: 'organization' });
    expect(isValid('AA12345678')).toBeTruthy();
    expect(isValid('ZZ12345678')).toBeTruthy();
    expect(isValid('DT12345678')).toBeTruthy();
    expect(isValid('AA00000000')).toBeTruthy();

    expect(isValid('Aa12345678')).toBeFalsy();
    expect(isValid('AA1234567')).toBeFalsy();
    expect(isValid('AA123456789')).toBeFalsy();
    expect(isValid(' AA12345678')).toBeFalsy();
    expect(isValid('AA12345678 ')).toBeFalsy();
  });
});

describe('United States', () => {
  test('Person', async () => {
    let isValid = validateNin.getValidator({ country: 'us', type: 'person' });
    expect(isValid('011-23-4567')).toBeTruthy();
    expect(isValid('011-23 4567')).toBeTruthy();
    expect(isValid('011 23 4567')).toBeTruthy();
    expect(isValid('011234567')).toBeTruthy();
    expect(isValid('011-234-567')).toBeFalsy();
    expect(isValid('011#23#4567')).toBeFalsy();
    expect(isValid('011  23--4567')).toBeFalsy();
    expect(isValid('0-1-1    234567')).toBeFalsy();
    expect(isValid('078051120')).toBeFalsy();
    expect(isValid('219099999')).toBeFalsy();
    expect(isValid('457555462')).toBeFalsy();
  });
  test('Organization', async () => {
    let isValid = validateNin.getValidator({ country: 'us', type: 'organization' });
    expect(isValid('01-1234567')).toBeTruthy();
    expect(isValid('01 1234567')).toBeTruthy();
    expect(isValid('011234567')).toBeTruthy();
    expect(isValid('0-11234567')).toBeFalsy();
    expect(isValid('01#1234567')).toBeFalsy();
    expect(isValid('01  1234567')).toBeFalsy();
    expect(isValid('01 1234 567')).toBeFalsy();
  });
});
