export const findSmallestIndex = <T>(list: T[]): number => {
  if (list.length === 0) {
    return null;
  }

  let smallestIndex: number = 0;
  let smallestElement: T = list[smallestIndex];

  for (const index in list) {
    if (list[index] < smallestElement) {
      smallestElement = list[index];
      smallestIndex = +index;
    }
  }

  return smallestIndex;
};
