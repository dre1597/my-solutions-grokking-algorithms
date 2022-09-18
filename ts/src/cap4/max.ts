export const max = (list: number[]): number => {
  if (list.length === 0) {
    return null;
  }

  if (list.length === 1) {
    return list[0];
  }

  let maxNumber = list[0];

  for (const num of list) {
    if (num > maxNumber) {
      maxNumber = num;
    }
  }

  return maxNumber;
};