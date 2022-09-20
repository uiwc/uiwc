export function getMinMax(pageIndex: number = 0, pageCount: number = 1) {
  const T = 2;
  let min = Math.max(0, pageIndex - 1);
  let max = Math.min(pageIndex + 1, pageCount - 1);
  const diff = max - min;

  if (diff !== T) {
    if (min === 0) {
      max = Math.min(pageIndex + T, pageCount - 1);
    }
    if (max === pageCount - 1) {
      min = Math.max(0, pageIndex - T);
    }
  }

  return { min, max };
}
