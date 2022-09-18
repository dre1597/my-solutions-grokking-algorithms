export const quickSort = <T>(list: T[]): T[] => {
  if (list.length < 2) {
    return list;
  }

  const pivot = list[0];
  const less = list.slice(1).filter((elem) => elem <= pivot);
  const greater = list.slice(1).filter((elem) => elem > pivot);

  return quickSort(less).concat(pivot, quickSort(greater));
};