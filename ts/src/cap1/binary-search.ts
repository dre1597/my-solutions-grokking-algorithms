export const binarySearch = <T>(list: T[], elem: T): number | null => {
  let start: number = 0;
  let end: number = list.length - 1;

  while (start <= end) {
    let middle: number = Math.floor((start + end) / 2);

    let guess: T = list[middle];

    if (guess === elem) {
      return middle;
    }

    if (guess > elem) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }

  return null;
};
