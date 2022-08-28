import { recursiveBinarySearch } from './recursive-binary-search';

describe('Binary Search Recursive', () => {
  test('should return null if the list is empty', () => {
    const result = recursiveBinarySearch([], 1);
    expect(result).toBe(null);
  });

  test('should return null if the element is not on the list', () => {
    const result1 = recursiveBinarySearch([1, 2, 3], 5);
    const result2 = recursiveBinarySearch(['a', 'b', 'c'], 'd');

    expect(result1).toBe(null);
    expect(result2).toBe(null);
  });

  test('should return the index of the element if its on the list', () => {
    const result1 = recursiveBinarySearch([1, 2, 3, 4, 5], 1);
    const result2 = recursiveBinarySearch([1, 2, 3, 4, 5], 5);
    const result3 = recursiveBinarySearch([1, 2, 3, 4, 5], 3);
    const result4 = recursiveBinarySearch(['a', 'b', 'c', 'd', 'e'], 'a');
    const result5 = recursiveBinarySearch(['a', 'b', 'c', 'd', 'e'], 'e');
    const result6 = recursiveBinarySearch(['a', 'b', 'c', 'd', 'e'], 'c');

    expect(result1).toBe(0);
    expect(result2).toBe(4);
    expect(result3).toBe(2);
    expect(result4).toBe(0);
    expect(result5).toBe(4);
    expect(result6).toBe(2);
  });
});
