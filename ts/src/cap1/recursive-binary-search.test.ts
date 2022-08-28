import { recursiveBinarySearch } from './recursive-binary-search';

const emptyList = [];
const numbersList = [1, 2, 3, 4, 5];
const charsList = ['a', 'b', 'c', 'd', 'e'];

describe('Binary Search Recursive', () => {
  test('should return null if the list is empty', () => {
    const result = recursiveBinarySearch(emptyList, 1);
    expect(result).toBe(null);
  });

  test('should return null if the element is not on the list', () => {
    const result1 = recursiveBinarySearch(numbersList, 0);
    const result2 = recursiveBinarySearch(charsList, 'z');

    expect(result1).toBe(null);
    expect(result2).toBe(null);
  });

  test('should return the index of the element if its on the list', () => {
    const result1 = recursiveBinarySearch(numbersList, 1);
    const result2 = recursiveBinarySearch(numbersList, 5);
    const result3 = recursiveBinarySearch(numbersList, 3);
    const result4 = recursiveBinarySearch(charsList, 'a');
    const result5 = recursiveBinarySearch(charsList, 'e');
    const result6 = recursiveBinarySearch(charsList, 'c');

    expect(result1).toBe(0);
    expect(result2).toBe(4);
    expect(result3).toBe(2);
    expect(result4).toBe(0);
    expect(result5).toBe(4);
    expect(result6).toBe(2);
  });
});
