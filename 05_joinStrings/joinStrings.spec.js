const values = require('./joinStrings')

describe('step 2', () => {
  test('firstName is Nala', () => {
    expect(values.firstName).toEqual('Nala');
  });
  test('lastName is Dog', () => {
    expect(values.lastName).toEqual('Dog');
  });
  test('thisYear is 2025', () => {
    expect(values.thisYear).toEqual(2025);
  });
  test('birthYear is 2016', () => {
    expect(values.birthYear).toEqual(2016);
  });
  test('greeting is properly output', () => {
    expect(values.greeting).toEqual('Hello! My name is Nala Dog and I am 9 years old.');
  });
});

describe('step 3', () => {
  test('fullName is Nala Dog', () => {
    expect(values.fullName).toEqual('Nala Dog');
  });
  test('age is 9', () => {
    expect(values.age).toEqual(9);
  });
});
