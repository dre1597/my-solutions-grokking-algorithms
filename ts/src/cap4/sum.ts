export const sum = (list: number[]) => {
  if (list.length === 0) {
    return null;
  }

  let total = 0;

  for (const elem of list) {
    total += elem;
  }

  return total;
};
