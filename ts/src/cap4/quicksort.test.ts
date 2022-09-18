import { quickSort } from './quicksort';

const emptyList = [];
const orderedNumbersList = [1, 2, 3];
const unorderedNumbersList = [3, 2, 1];
const orderedCharsList = ['a', 'b', 'c'];
const unorderedCharsList = ['c', 'b', 'a'];

describe('Quicksort', () => {
  test('should return an empty list if its called with one', () => {
    const result = quickSort(emptyList);
    expect(result).toEqual(emptyList);
  });

  test('should return an ordered list if its called with one', () => {
    const orderedList1 = quickSort(orderedNumbersList);
    expect(orderedList1).toEqual(expect.arrayContaining(orderedNumbersList));

    const orderedList2 = quickSort(orderedCharsList);
    expect(orderedList2).toEqual(expect.arrayContaining(orderedCharsList));
  });

  test('should sort a list', () => {
    const orderedList1 = quickSort(unorderedNumbersList);
    expect(orderedList1).toEqual(expect.arrayContaining(orderedNumbersList));

    const orderedList2 = quickSort(unorderedCharsList);
    expect(orderedList2).toEqual(expect.arrayContaining(orderedCharsList));
  });
});