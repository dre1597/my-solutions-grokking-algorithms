import { calcFactorial } from './factorial';

describe('Factorial', () => {
  test('should return null if x is negative', () => {
    const factorial = calcFactorial(-1);

    expect(factorial).toBeNull();
  });
});
