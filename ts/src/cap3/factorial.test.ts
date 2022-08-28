import { calcFactorial } from './factorial';

describe('Factorial', () => {
  test('should return null if x is negative', () => {
    const factorial = calcFactorial(-1);

    expect(factorial).toBeNull();
  });

  test('should return 1 if x is 0', () => {
    const factorial = calcFactorial(0);

    expect(factorial).toBe(1);
  });
});
