const { route } = require('./sum-route.js');

test('Cinco mais dois resultado sete', () => {
  const params = { num1: 5, num2: 2 };
  
  expect(route(params)).toBe(7);
});
