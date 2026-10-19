const { add, subtract, multiply, divide } = require('../calculator');

describe('addition', () => {
  test('2 + 3 = 5', () => expect(add(2, 3)).toBe(5));
  test('negatives', () => expect(add(-1, -1)).toBe(-2));
});
describe('subtraction', () => {
  test('10 - 4 = 6', () => expect(subtract(10, 4)).toBe(6));
});
describe('multiplication', () => {
  test('45 * 2 = 90', () => expect(multiply(45, 2)).toBe(90));
});
describe('division', () => {
  test('20 / 5 = 4', () => expect(divide(20, 5)).toBe(4));
  test('division by zero throws', () => expect(() => divide(1, 0)).toThrow('Division by zero'));
});
