const validateNin = require('./index');


describe('Denmark', () => {
  test('Person', async () => {
    let isValid = validateNin.getValidator({ country: 'dk', type: 'person' });
    // TODO
  });
  test('Organization', async () => {
    let isValid = validateNin.getValidator({ country: 'dk', type: 'organization' });
    // TODO
  });
});

describe('Norway', () => {
  test('Person', async () => {
    let isValid = validateNin.getValidator({ country: 'no', type: 'person' });
    // TODO
  });
  test('Organization', async () => {
    let isValid = validateNin.getValidator({ country: 'no', type: 'organization' });
    // TODO
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
  });
});

describe('United Kingdom', () => {
  test('Person', async () => {
    let isValid = validateNin.getValidator({ country: 'gb', type: 'person' });
    // TODO
  });
  test('Organization', async () => {
    let isValid = validateNin.getValidator({ country: 'gb', type: 'organization' });
    // TODO
  });
});

describe('United States', () => {
  test('Person', async () => {
    let isValid = validateNin.getValidator({ country: 'us', type: 'person' });
    // TODO
  });
  test('Organization', async () => {
    let isValid = validateNin.getValidator({ country: 'us', type: 'organization' });
    // TODO
  });
});
