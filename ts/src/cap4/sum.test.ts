import { sum } from './sum';

const emptyList = [];
const oneElementList = [1];

describe('Sum', () => {
  test('should return null if its called with a empty list', () => {
    const result = sum(emptyList);
    expect(result).toBeNull();
  });

  test('Should return the only element if its called with a list with just one element', () => {
    const result = sum(oneElementList);
    expect(result).toBe(1);
  });
});
