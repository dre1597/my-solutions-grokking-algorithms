export const calcFactorial = (x: number): number => {
  if (x < 0) {
    return null;
  }

  if (x === 0) {
    return 1;
  }

  return x * calcFactorial(x - 1);
};
