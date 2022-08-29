import { sum } from './sum';

const emptyList = [];
const oneElementList = [1];
const list1 = [1, 2, 3];
const list2 = [-1, -2, -3];
const list3 = [-1, 1, 0];

describe('Sum', () => {
  test('should return null if its called with a empty list', () => {
    const result = sum(emptyList);
    expect(result).toBeNull();
  });

  test('should return the only element if its called with a list with just one element', () => {
    const result = sum(oneElementList);
    expect(result).toBe(1);
  });

  test('should return the sum of the elements of the list', () => {
    const result1 = sum(list1);
    expect(result1).toBe(6);

    const result2 = sum(list2);
    expect(result2).toBe(-6);

    const result3 = sum(list3);
    expect(result3).toBe(0);
  });
});
