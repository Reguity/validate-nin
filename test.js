const validateNin = require('./index');

describe('China', () => {
  test('Person', async () => {
    let validator = validateNin.getValidator({ country: 'cn', type: 'person' });
    expect(validator.isValid('11010120170210193X')).toBeTruthy();
    expect(validator.isValid('120103198806018241')).toBeTruthy();
    expect(validator.isValid('310101200001013948')).toBeTruthy();
    expect(validator.isValid('110101188606258888')).toBeTruthy();
    expect(validator.isValid('110101201701018886')).toBeTruthy();
    expect(validator.isValid('98765432101234567')).toBeFalsy();
    expect(validator.isValid('9876543210123456789')).toBeFalsy();
    expect(validator.isValid('110102YYYYMMDD888X')).toBeFalsy();
    expect(validator.isValid('98765432101234567A')).toBeFalsy();
    expect(validator.isValid('A87654321012345678')).toBeFalsy();
    expect(validator.isValid('110102197810272321')).toBeFalsy();
    expect(validator.isValid(' 11010120170210193X')).toBeFalsy();
    expect(validator.isValid('11010120170210193X ')).toBeFalsy();
    expect(validator.normalize('11010120170210193X')).toEqual('11010120170210193X');
    expect(validator.normalize('120103198806018241')).toEqual('120103198806018241');
  });
});

describe('India', () => {
  test('Person', async () => {
    let validator = validateNin.getValidator({ country: 'in', type: 'person' });
    expect(validator.isValid('234523452343')).toBeTruthy();
    expect(validator.isValid('234123412346')).toBeTruthy();
    expect(validator.isValid('123412341234')).toBeFalsy();
    expect(validator.isValid('023412341233')).toBeFalsy();
    expect(validator.isValid('2345234523436')).toBeFalsy();
  });
});

describe('Denmark', () => {
  test('Person', async () => {
    let validator = validateNin.getValidator({ country: 'dk', type: 'person' });
    expect(validator.isValid('130889-0240')).toBeTruthy();
    expect(validator.isValid('1308890240')).toBeTruthy();
    expect(validator.isValid('150373-4431')).toBeTruthy();
    expect(validator.isValid('1503734431')).toBeTruthy();
    expect(validator.isValid('130889 0240')).toBeFalsy();
    expect(validator.isValid('130889--0240')).toBeFalsy();
    expect(validator.isValid('-1308890240')).toBeFalsy();
    expect(validator.isValid('130889A0240')).toBeFalsy();
    expect(validator.isValid('130889-0240 ')).toBeFalsy();
    expect(validator.isValid(' 130889-0240')).toBeFalsy();
    expect(validator.normalize('130889-0240')).toEqual('1308890240');
    expect(validator.normalize('1308890240')).toEqual('1308890240');
    expect(validator.isValid('020569-4250')).toBeTruthy();
    expect(validator.isValid('0205694250')).toBeTruthy();
  });
  test('Organization', async () => {
    let validator = validateNin.getValidator({ country: 'dk', type: 'organization' });
    expect(validator.isValid('11111114')).toBeTruthy();
    expect(validator.isValid('46265831')).toBeTruthy();
    expect(validator.isValid('10674859')).toBeTruthy();
    expect(validator.isValid('11111110')).toBeFalsy();
    expect(validator.isValid('11111111')).toBeFalsy();
    expect(validator.isValid('11111112')).toBeFalsy();
    expect(validator.isValid('11111113')).toBeFalsy();
    expect(validator.isValid('11111115')).toBeFalsy();
    expect(validator.isValid('11111116')).toBeFalsy();
    expect(validator.isValid('11111117')).toBeFalsy();
    expect(validator.isValid('11111118')).toBeFalsy();
    expect(validator.isValid('11111119')).toBeFalsy();
    expect(validator.isValid('111111-14')).toBeFalsy();
    expect(validator.isValid('11111114 ')).toBeFalsy();
    expect(validator.isValid(' 11111114')).toBeFalsy();
    expect(validator.normalize('11111114')).toEqual('11111114');
  });
});

describe('Nigeria', () => {
  test('Person', async () => {
    let validator = validateNin.getValidator({ country: 'ng', type: 'person' });
    expect(validator.isValid('12345678901')).toBeTruthy();
    expect(validator.isValid('123456789014')).toBeFalsy();
    expect(validator.isValid('12345678901 ')).toBeFalsy();
    expect(validator.isValid(' 12345678901')).toBeFalsy();
    expect(validator.normalize('12345678901')).toEqual('12345678901');
  });
});

describe('South Africa', () => {
  test('Person', async () => {
    let validator = validateNin.getValidator({ country: 'za', type: 'person' });
    expect(validator.isValid('8001015009087')).toBeTruthy();
    expect(validator.isValid('800101500908')).toBeFalsy();
    expect(validator.isValid('80010150090874')).toBeFalsy();
    expect(validator.isValid('8001015009087 ')).toBeFalsy();
    expect(validator.isValid(' 8001015009087')).toBeFalsy();
    expect(validator.normalize('8001015009087')).toEqual('8001015009087');
  });
});

describe('Norway', () => {
  test('Person', async () => {
    let validator = validateNin.getValidator({ country: 'no', type: 'person' });
    expect(validator.isValid('29029600013')).toBeTruthy();
    expect(validator.isValid('29029600012 ')).toBeFalsy();
    expect(validator.isValid(' 29029600013')).toBeFalsy();
    expect(validator.isValid('29029600013 ')).toBeFalsy();
    expect(validator.isValid('290296-00013')).toBeFalsy();
    expect(validator.normalize('29029600013')).toEqual('29029600013');
  });
  test('Organization', async () => {
    let validator = validateNin.getValidator({ country: 'no', type: 'organization' });
    expect(validator.isValid('988077917')).toBeTruthy();
    expect(validator.isValid('988 077 917')).toBeTruthy();
    expect(validator.isValid('988077918')).toBeFalsy();
    expect(validator.isValid('988077-917')).toBeFalsy();
    expect(validator.normalize('988 077 917')).toEqual('988077917');
    expect(validator.normalize('988077917')).toEqual('988077917');
  });
});

describe('Finland', () => {
  test('Person', async () => {
    let validator = validateNin.getValidator({ country: 'fi', type: 'person' });
    expect(validator.isValid('010101-100X')).toBeTruthy();
    expect(validator.isValid('010101-100Å')).toBeFalsy();
    expect(validator.isValid('290296-7808')).toBeTruthy();
    expect(validator.isValid('2902967808')).toBeFalsy();
    expect(validator.isValid('010198-1000')).toBeFalsy();
    expect(validator.isValid('0101981000')).toBeFalsy();
  });
});

describe('Sweden', () => {
  test('Person', async () => {
    let validator = validateNin.getValidator({ country: 'se', type: 'person' });
    expect(validator.isValid('560120-5635')).toBeTruthy();
    expect(validator.isValid('5601205635')).toBeTruthy();
    expect(validator.isValid('560120+5635')).toBeTruthy();
    expect(validator.isValid('560120 5635')).toBeFalsy();
    expect(validator.isValid('560120--5635')).toBeFalsy();
    expect(validator.isValid('560120++5635')).toBeFalsy();
    expect(validator.isValid('560120+-5635')).toBeFalsy();
    expect(validator.isValid('560120-+5635')).toBeFalsy();
    expect(validator.isValid('-5601205635')).toBeFalsy();
    expect(validator.isValid('560120A5635')).toBeFalsy();
    expect(validator.isValid('56012056351')).toBeFalsy();
    expect(validator.isValid('5601205636')).toBeFalsy();
    expect(validator.isValid('560120-5636')).toBeFalsy();
    expect(validator.isValid('560120-5635 ')).toBeFalsy();
    expect(validator.isValid(' 560120-5635')).toBeFalsy();
    expect(validator.normalize('560120-5635')).toEqual('5601205635');
    expect(validator.normalize('19560120-5635')).toEqual('5601205635');
    expect(validator.normalize('5601205635')).toEqual('5601205635');
  });
  test('Organization', async () => {
    let validator = validateNin.getValidator({ country: 'se', type: 'organization' });
    expect(validator.isValid('212000-0142')).toBeTruthy();
    expect(validator.isValid('2120000142')).toBeTruthy();
    expect(validator.isValid('212000+01421')).toBeFalsy();
    expect(validator.isValid('212000 0142')).toBeFalsy();
    expect(validator.isValid('212000--0142')).toBeFalsy();
    expect(validator.isValid('-2120000142')).toBeFalsy();
    expect(validator.isValid('212000-0141')).toBeFalsy();
    expect(validator.isValid('2120000143')).toBeFalsy();
    expect(validator.isValid('212000-0142 ')).toBeFalsy();
    expect(validator.isValid(' 212000-0142')).toBeFalsy();
    expect(validator.normalize('212000-0142')).toEqual('2120000142');
    expect(validator.normalize('2120000142')).toEqual('2120000142');
  });
});

describe('United Kingdom', () => {
  test('Person', async () => {
    let validator = validateNin.getValidator({ country: 'gb', type: 'person' });
    expect(validator.isValid('AB123456C')).toBeTruthy();
    expect(validator.isValid('TX999999D')).toBeTruthy();
    expect(validator.isValid('NB010101 ')).toBeTruthy();
    expect(validator.isValid('LM938322B')).toBeTruthy();
    expect(validator.isValid('AB111111A')).toBeTruthy();
    expect(validator.isValid('XY111111A')).toBeTruthy();
    expect(validator.isValid('CE111111A')).toBeTruthy();
    expect(validator.isValid('NY111111A')).toBeTruthy();
    expect(validator.isValid('OX111111A')).toBeTruthy();
    expect(validator.isValid('ZA111111A')).toBeTruthy();
    expect(validator.isValid('AB111111B')).toBeTruthy();
    expect(validator.isValid('AB111111C')).toBeTruthy();
    expect(validator.isValid('AB111111D')).toBeTruthy();
    expect(validator.isValid('AB12345678C')).toBeFalsy();
    expect(validator.isValid('BG111111A')).toBeFalsy();
    expect(validator.isValid('NT111111A')).toBeFalsy();
    expect(validator.isValid('ABC111111A')).toBeFalsy();
    expect(validator.isValid('DA111111A')).toBeFalsy();
    expect(validator.isValid('FA111111A')).toBeFalsy();
    expect(validator.isValid('IA111111A')).toBeFalsy();
    expect(validator.isValid('QA111111A')).toBeFalsy();
    expect(validator.isValid('UA111111A')).toBeFalsy();
    expect(validator.isValid('VA111111A')).toBeFalsy();
    expect(validator.isValid('AD111111A')).toBeFalsy();
    expect(validator.isValid('AF111111A')).toBeFalsy();
    expect(validator.isValid('AI111111A')).toBeFalsy();
    expect(validator.isValid('AQ111111A')).toBeFalsy();
    expect(validator.isValid('AU111111A')).toBeFalsy();
    expect(validator.isValid('AV111111A')).toBeFalsy();
    expect(validator.isValid('AO111111A')).toBeFalsy();
    expect(validator.isValid('AB111111E')).toBeFalsy();
    expect(validator.isValid('AB111111X')).toBeFalsy();
    expect(validator.isValid('AB1111115')).toBeFalsy();
    expect(validator.isValid('AB111111L')).toBeFalsy();
    expect(validator.isValid('AB1111110')).toBeFalsy();
    expect(validator.isValid('AB111111J')).toBeFalsy();
    expect(validator.normalize('AB123456C')).toEqual('AB123456C');
    expect(validator.normalize('NB010101 ')).toEqual('NB010101 ');
  });
  test('Organization', async () => {
    let validator = validateNin.getValidator({ country: 'gb', type: 'organization' });
    expect(validator.isValid('AA12345678')).toBeTruthy();
    expect(validator.isValid('ZZ12345678')).toBeTruthy();
    expect(validator.isValid('DT12345678')).toBeTruthy();
    expect(validator.isValid('AA00000000')).toBeTruthy();
    expect(validator.isValid('Aa12345678')).toBeFalsy();
    expect(validator.isValid('AA1234567')).toBeFalsy();
    expect(validator.isValid('AA123456789')).toBeFalsy();
    expect(validator.isValid(' AA12345678')).toBeFalsy();
    expect(validator.isValid('AA12345678 ')).toBeFalsy();
    expect(validator.normalize('AA12345678')).toEqual('AA12345678');
  });
});

describe('United States', () => {
  test('Person', async () => {
    let validator = validateNin.getValidator({ country: 'us', type: 'person' });
    expect(validator.isValid('011-23-4567')).toBeTruthy();
    expect(validator.isValid('011-23 4567')).toBeTruthy();
    expect(validator.isValid('011 23 4567')).toBeTruthy();
    expect(validator.isValid('011234567')).toBeTruthy();
    expect(validator.isValid('011-234-567')).toBeFalsy();
    expect(validator.isValid('011#23#4567')).toBeFalsy();
    expect(validator.isValid('011  23--4567')).toBeFalsy();
    expect(validator.isValid('0-1-1    234567')).toBeFalsy();
    expect(validator.isValid('078051120')).toBeFalsy();
    expect(validator.isValid('219099999')).toBeFalsy();
    expect(validator.isValid('457555462')).toBeFalsy();
    expect(validator.normalize('011-23-4567')).toEqual('011234567');
    expect(validator.normalize('011234567')).toEqual('011234567');
  });
  test('Organization', async () => {
    let validator = validateNin.getValidator({ country: 'us', type: 'organization' });
    expect(validator.isValid('01-1234567')).toBeTruthy();
    expect(validator.isValid('01 1234567')).toBeTruthy();
    expect(validator.isValid('011234567')).toBeTruthy();
    expect(validator.isValid('0-11234567')).toBeFalsy();
    expect(validator.isValid('01#1234567')).toBeFalsy();
    expect(validator.isValid('01  1234567')).toBeFalsy();
    expect(validator.isValid('01 1234 567')).toBeFalsy();
    expect(validator.normalize('01-1234567')).toEqual('011234567');
    expect(validator.normalize('011234567')).toEqual('011234567');
    expect(validator.normalize('01 1234567')).toEqual('011234567');
  });
});
