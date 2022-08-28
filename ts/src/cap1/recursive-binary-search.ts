export const recursiveBinarySearch = <T>(
  list: T[],
  elem: T,
  start: number = 0,
  end: number = list.length - 1
): number | null => {
  if (start <= end) {
    let middle: number = Math.floor((start + end) / 2);

    let guess: T = list[middle];

    if (guess === elem) {
      return middle;
    }

    if (guess > elem) {
      return recursiveBinarySearch(list, elem, start, middle - 1);
    } else {
      return recursiveBinarySearch(list, elem, middle + 1, end);
    }
  }

  return null;
};
