import { findSmallestIndex } from './find-smallest-index';

export const selectionSort = <T>(list: T[]): T[] => {
  const sortedList: T[] = [];
  const listLength = list.length;

  for (let i: number = 0; i < listLength; i++) {
    const smallestIndex: number = findSmallestIndex(list);
    sortedList.push(list.splice(smallestIndex, 1)[0]);
  }

  return sortedList;
};
