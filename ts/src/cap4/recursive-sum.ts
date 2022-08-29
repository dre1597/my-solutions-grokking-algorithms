export const recursiveSum = (list: number[]) => {
  if (list.length === 0) {
    return null;
  }

  if (list.length === 1) {
    return list[0];
  }

  return list[0] + recursiveSum(list.slice(1));
};
