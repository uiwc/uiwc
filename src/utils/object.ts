export const getValueFrom = (
  index: string,
  source: object,
  defaultValue: any = null
) => {
  if (index in source) {
    // @ts-ignore
    return source[index];
  }

  return defaultValue;
};

function _baseExtend(destination: any, source: any[], deep = true) {
  for (let i = 0, ii = source.length; i < ii; ++i) {
    const obj = source[i];
    if (!isObject(obj) && !isFunction(obj)) {
      continue;
    }
    const keys = Object.keys(obj);
    for (let j = 0, jj = keys.length; j < jj; j++) {
      const key = keys[j];
      const src = obj[key];

      if (deep && isObject(src)) {
        if (isDate(src)) {
          destination[key] = new Date(src.valueOf());
        } else if (isRegExp(src)) {
          destination[key] = new RegExp(src);
        } else {
          if (!isObject(destination[key])) {
            destination[key] = isArray(src) ? [] : {};
          }
          _baseExtend(destination[key], [src], true);
        }
      } else {
        destination[key] = src;
      }
    }
  }
  return destination;
}

/**
 * Merges destination and source in one final object
 * @param destination Object
 * @param source Object
 */
export function merge(destination: any, source: any): any {
  return _baseExtend(destination, [source], true);
}

export function copy(source: any): any {
  return JSON.parse(JSON.stringify(source));
}

export function clone(source: any): any {
  return copy(source);
}

export const isNull = (i: any): boolean => {
  return i === null;
};

export const isUndefined = (i: any): boolean => {
  return i === undefined;
};

export const isObject = (i: any): boolean => {
  return typeof i === 'object' && i !== null;
};

export const isFunction = (i: any) => {
  return i && {}.toString.call(i) === '[object Function]';
};

export const isArray = (i: any) => {
  return i && Array.isArray(i);
};

export const isString = (s: any): boolean => {
  return typeof s === 'string';
};

export const isRegExp = (i: any): boolean => {
  return i && {}.toString.call(i) === '[object RegExp]';
};

export const isBoolean = (i: any): boolean => {
  return (
    i === true || i === false || {}.toString.call(i) === '[object Boolean]'
  );
};

export const isDate = (i: any): boolean => {
  return i && {}.toString.call(i) === '[object Date]';
};

export const isNumber = (i: any): boolean => {
  return typeof i === 'number' && isFinite(i) && !isNaN(i);
};

export const has = (i: any, prop: string): boolean => {
  return isObject(i) && i.hasOwnProperty(prop);
};

export const isEmpty = (i: any): boolean => {
  // test results
  //---------------
  // []        true, empty array
  // {}        true, empty object
  // null      true
  // undefined true
  // ""        true, empty string
  // ''        true, empty string
  // 0         false, number
  // true      false, boolean
  // false     false, boolean
  // Date      false
  // function  false

  if (isUndefined(i)) {
    return true;
  }

  if (isFunction(i) || isNumber(i) || isBoolean(i) || isDate(i)) {
    return false;
  }

  if (i == null || i.length === 0) {
    // null or 0 length array
    return true;
  }

  if (isObject(i)) {
    // empty object
    return Object.entries(i).length === 0;
  }

  return false;
};

export const isExactlySame = (a: any, b: any) => {
  return JSON.stringify(a) === JSON.stringify(b);
};
