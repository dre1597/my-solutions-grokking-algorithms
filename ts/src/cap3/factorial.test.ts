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

  test('should calculate factorial if x > 0', () => {
    const factorial1 = calcFactorial(1);
    expect(factorial1).toBe(1);

    const factorial2 = calcFactorial(2);
    expect(factorial2).toBe(2);

    const factorial5 = calcFactorial(5);
    expect(factorial5).toBe(120);

    const factorial10 = calcFactorial(10);
    expect(factorial10).toBe(3628800);
  });
});
