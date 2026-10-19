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

const { modulo, power, squareRoot } = require('../calculator');

describe('modulo', () => {
  test('5 % 2 = 1', () => expect(modulo(5, 2)).toBe(1));
  test('modulo by zero throws', () => expect(() => modulo(5, 0)).toThrow());
});
describe('power', () => {
  test('2 ^ 3 = 8', () => expect(power(2, 3)).toBe(8));
  test('x ^ 0 = 1', () => expect(power(7, 0)).toBe(1));
});
describe('square root', () => {
  test('sqrt(16) = 4', () => expect(squareRoot(16)).toBe(4));
  test('square root of negative throws', () => expect(() => squareRoot(-1)).toThrow());
});
