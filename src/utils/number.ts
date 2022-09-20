import { i18n } from "../i18n/language";
import { isNumber, isUndefined } from "./object";

/**
 * Rounds a decimal
 * @param value Number to be rounded
 * @param decimals Number of decimals (default: 2)
 */
export function round(value: any, decimals: number = 2): number {
  if (isUndefined(value)) {
    return 0;
  }
  return (
    Math.round((value + Number.EPSILON) * Math.pow(10, decimals)) /
    Math.pow(10, decimals)
  );
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 * @param min Min number
 * @param max Max number
 */
export function random(min: number = 0, max: number = 1): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Convert a number into a human-readable string
 * @param bytes amount of bytes
 */
export function toMemorySize(bytes: number): string {
  const thresh = 1024;
  if (Math.abs(bytes) < thresh) {
    return bytes + " B";
  }
  const units = ["kB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  let u = -1;
  do {
    bytes /= thresh;
    ++u;
  } while (Math.abs(bytes) >= thresh && u < units.length - 1);
  return bytes.toFixed(1) + " " + units[u];
}

/**
 * Calculates the cumulative sum from acum and value
 * @param acum Cumulative value
 * @param value Value to be sum
 */
export function acum(acum: any, value: any): number {
  if (!isNumber(acum) && isNumber(value)) {
    return value;
  }
  if (isNumber(acum) && !isNumber(value)) {
    return 0;
  }
  if (!isNumber(acum) && !isNumber(value)) {
    return 0;
  }
  return acum + value;
}

/**
 * Performs division and returns the percentage (0-100%) [or returns 0 on division by 0]
 * @param numerator The dividend or number to divide
 * @param denominator The divisor or number to divide by
 * @param round Number of decimals for rounding
 */
export function percentage(
  numerator: any,
  denominator: any,
  round: any = null
): number {
  const value = division(numerator, denominator) * 100;
  return isNumber(round) ? round(value, round) : value;
}

/**
 * Performs division and returns 0 on division by 0
 * @param numerator The dividend or number to divide
 * @param denominator The divisor or number to divide by
 * @param round Number of decimals for rounding
 */
export function division(
  numerator: any,
  denominator: any,
  round: any = null
): number {
  const ret =
    isNumber(numerator) && isNumber(denominator) && denominator !== 0
      ? numerator / denominator
      : 0;
  return isNumber(round) ? round(ret, round) : ret;
}

/**
 * Returns the smallest value
 * @param value1 First value
 * @param value2 Second value
 */
export function min(value1: any, value2: any): any {
  // value1 = null and value2 = number
  if (!isNumber(value1) && isNumber(value2)) {
    return value2;
  }
  // value1 = number and value2 = null
  if (isNumber(value1) && !isNumber(value2)) {
    return value1;
  }
  // value1 = null and value2 = null
  if (!isNumber(value1) && !isNumber(value2)) {
    return value1;
  }
  // value1 = number and value2 = number
  return Math.min(value1, value2);
}

/**
 * Returns the largest value
 * @param value1 First value
 * @param value2 Seconf value
 */
export function max(value1: any, value2: any): number {
  // value1 = null and value2 = number
  if (!isNumber(value1) && isNumber(value2)) {
    return value2;
  }
  // value1 = number and value2 = null
  if (isNumber(value1) && !isNumber(value2)) {
    return value1;
  }
  // value1 = null and value2 = null
  if (!isNumber(value1) && !isNumber(value2)) {
    return value1;
  }
  // value1 = number and value2 = number
  return Math.max(value1, value2);
}

/**
 * Set Padding
 * @param value Number to be padded
 * @param width Length of final string
 * @param character Pad character, which can be any string
 */
export function pad(
  value: any,
  width: number = 2,
  character: string = "0"
): string {
  const strValue = value + "";
  return strValue.length >= width
    ? strValue
    : new Array(width - strValue.length + 1).join(character) + strValue;
}

/**
 * toCurrency(12345678.9, 2, '.', ',');  // "12.345.678,90"
 * toCurrency(123456.789, 4, ' ', ':');  // "123 456:7890"
 * toCurrency(12345678.9, 0, '-');       // "12-345-679"
 * @param number  value
 * @param number  decimals: length of decimal
 * @param string  intergerSep: sections delimiter
 * @param string  decimalSep: decimal delimiter
 */
export function toCurrency(
  value: any,
  decimals: number = 2,
  intergerSep: string = i18n("ui.components.utils.currency.integerSeparator"),
  decimalSep: string = i18n("ui.components.utils.currency.decimalSeparator")
) {
  if (!isNumber(value)) {
    return value;
  }

  const re = "\\d(?=(\\d{3})+" + (decimals > 0 ? "\\D" : "$") + ")";
  const num = value.toFixed(Math.max(0, ~~decimals));

  return (decimalSep ? num.replace(".", decimalSep) : num).replace(
    new RegExp(re, "g"),
    "$&" + (intergerSep || ",")
  );
}
