import { isArray } from './object';

export function flatten(arr: any[]): any[] {
  return arr.reduce(
    (acc, val) => (isArray(val) ? acc.concat(flatten(val)) : acc.concat(val)),
    []
  );
}

export function shuffle(arr: any[]): any[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = copy[i];
    copy[i] = copy[j];
    copy[j] = temp;
  }
  return copy;
}

export function first(arr: any[]): any {
  return [...arr].shift();
}

export function last(arr: any[]): any {
  return [...arr].pop();
}

export function range(start: number, end: number): number[] {
  return Array(end - start + 1)
    .fill({})
    .map((_, idx) => start + idx);
}

export function groupBy(
  list: any[],
  keyGetter: any = () => {},
  returnMap = false
) {
  const map = new Map();
  list.forEach((item: any) => {
    const key = keyGetter(item);
    const collection = map.get(key);
    if (!collection) {
      map.set(key, [item]);
    } else {
      collection.push(item);
    }
  });
  return returnMap ? map : Object.fromEntries(map);
}
