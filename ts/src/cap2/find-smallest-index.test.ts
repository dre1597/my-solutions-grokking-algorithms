import { findSmallestIndex } from './find-smallest-index';

const emptyList = [];
const orderedNumbersList = [1, 2, 3];
const orderedCharsList = ['a', 'b', 'c'];

describe('findSmallestIndex', () => {
  test('should return null if the list passed is empty', () => {
    const result = findSmallestIndex(emptyList);
    expect(result).toBeNull();
  });

  test('should return the smallest index of a list', () => {
    const result1 = findSmallestIndex(orderedNumbersList);

    expect(result1).toBe(0);

    const result2 = findSmallestIndex(orderedCharsList);
    expect(result2).toBe(0);
  });
});
