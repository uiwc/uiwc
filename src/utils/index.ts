import * as arrays from './arrays';
import * as color from './color';
import * as date from './date';
import * as file from './file';
import * as guid from './guid';
import * as number from './number';
import * as object from './object';
import * as storage from './storage';
import * as string from './string';
import * as time from './time';

export const Utils = {
  ...date,
  ...guid,
  ...number,
  ...object,
  ...storage,
  ...string,
  ...time,
  ...arrays,
  ...file,
  ...color,
};

export {
  date as DateUtils,
  guid as GuidUtils,
  number as NumberUtils,
  object as ObjectUtils,
  storage as StorageUtils,
  string as StringUtils,
  time as TimeUtils,
  arrays as ArrayUtils,
  file as FileUtils,
  color as ColorUtils,
};
