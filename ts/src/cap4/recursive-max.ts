export const recursiveMax = (list: number[]): number => {
  if (list.length === 0) {
    return null;
  }

  if (list.length === 1) {
    return list[0];
  }

  const maxNumber = recursiveMax(list.slice(1));

  return list[0] > maxNumber ? list[0] : maxNumber;
};