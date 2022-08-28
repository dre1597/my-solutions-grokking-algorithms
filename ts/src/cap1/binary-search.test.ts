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
});
