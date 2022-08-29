import { sum } from './sum';

const emptyList = [];

describe('Sum', () => {
  test('should return null if its called with a empty list', () => {
    const result = sum(emptyList);
    expect(result).toBeNull();
  });
});
