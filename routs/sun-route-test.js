const { sum, resultIsOk } = require('./sun-route.js');

test('Cinco mais dois resultado sete', () => {
  const params = { num1: 5, num2: 2 };
  
  expect(sum(params)).toBe(7);
});

test('Sum result is ok', () => {
  expect(resultIsOk(0)).toBe(true);
  expect(resultIsOk(5)).toBe(true);
  expect(resultIsOk(-5)).toBe(true);
});

test('Sum result is not ok', () => {
  expect(resultIsOk('')).toBe(false);
  expect(resultIsOk('a')).toBe(false);
  expect(resultIsOk(NaN)).toBe(false);
});
