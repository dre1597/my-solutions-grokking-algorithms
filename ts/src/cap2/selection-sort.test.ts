import { selectionSort } from './selection-sort';

const emptyList = [];
const orderedNumbersList = [1, 2, 3];
const orderedCharsList = ['a', 'b', 'c'];

describe('Selection Sort', () => {
  test('should return an empty list if its called with one', () => {
    const result = selectionSort(emptyList);
    expect(result).toEqual(emptyList);
  });

  test('should return an ordered list if its called with one', () => {
    const orderedList1 = selectionSort(orderedNumbersList);
    expect(orderedList1).toEqual(expect.arrayContaining(orderedNumbersList));

    const orderedList2 = selectionSort(orderedCharsList);
    expect(orderedList2).toEqual(expect.arrayContaining(orderedCharsList));
  });
});
