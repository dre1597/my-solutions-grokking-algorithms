import { binary_search } from './binary-search';

describe('Binary Search', () => {
  test('should return null if the list is empty', () => {
    const list = [];
    const elem = 1;

    const result = binary_search(list, elem);
    expect(result).toBe(null);
  });

  test('should return null if not found the element', () => {
    const list = [1, 2, 3];
    const elem = 5;

    const result = binary_search(list, elem);
    expect(result).toBe(null);
  });

  test('should return the index of the element if its on the list', () => {
    const list = [1, 2, 3, 4, 5];
    const elem1 = 1;
    const elem2 = 5;

    const result1 = binary_search(list, elem1);
    const result2 = binary_search(list, elem2);

    expect(result1).toBe(0);
    expect(result2).toBe(4);
  });
});
