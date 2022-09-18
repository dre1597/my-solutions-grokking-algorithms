import { max } from './max';
import { recursiveMax } from './recursive-max';

const emptyList: number[] = [];
const uniqueElementList: number[] = [1];
const list: number[] = [1, 5, 2, 4, 6, 3];

describe('Max', () => {
  test('Should return null if the list is empty', () => {
    const result = max(emptyList);
    expect(result).toBeNull();
  });

  test('Should return the only element that they list have, if there is just one', () => {
    const result = max(uniqueElementList);
    expect(result).toBe(uniqueElementList[0]);
  });

  test('Should return the max element on the list', () => {
    const result = max(list);
    expect(result).toBe(6);
  });
});

describe('Recursive Max', () => {
  test('Should return null if the list is empty', () => {
    const result = recursiveMax(emptyList);
    expect(result).toBeNull();
  });

  test('Should return the only element that they list have, if there is just one', () => {
    const result = recursiveMax(uniqueElementList);
    expect(result).toBe(uniqueElementList[0]);
  });

  test('Should return the max element on the list', () => {
    const result = recursiveMax(list);
    expect(result).toBe(6);
  });
});