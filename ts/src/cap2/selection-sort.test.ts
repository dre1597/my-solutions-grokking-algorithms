import { selectionSort } from './selection-sort';

describe('Selection Sort', () => {
  test('should return an empty array if its called with one', () => {
    const result = selectionSort([]);
    expect(result).toEqual([]);
  });
});
