import { recursiveBinarySearch } from './recursive-binary-search';

describe('Binary Search Recursive', () => {
  test('should return null if the list is empty', () => {
    const list = [];
    const elem = 1;

    const result = recursiveBinarySearch(list, elem);
    expect(result).toBe(null);
  });

  test('should return null if the element is not on the list', () => {
    const list = [1, 2, 3];
    const elem = 5;

    const result = recursiveBinarySearch(list, elem);
    expect(result).toBe(null);
  });
});
