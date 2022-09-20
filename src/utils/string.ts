import jwt from 'jwt-decode';
import { isEmpty, isNull, isNumber, isString, isUndefined } from './object';

/**
 * Joins multiple classes
 * @param classes String to join
 * @returns final string
 */
export function joinClasses(...classes: Array<string | any>): string {
  return classes.filter((v) => !isEmpty(v) && v !== false).join(' | ');
}

/**
 * Joins 2 strings
 * @param str1
 * @param str2
 * @returns final string
 */
export function joinStrings(str1: any = '', str2: any = ''): string {
  const s1 = _makeString(str1);
  const s2 = _makeString(str2);

  return `${s1}${s2 ? ` ${s2}` : ''}`;
}

/**
 * Joins name and last name
 * @param name Name
 * @param lastName Last name
 * @returns final string
 */
export function getFullname(name: any = '', lastName: any = ''): string {
  return joinStrings(name, lastName);
}

/**
 * Checks if a string is a valid hex color
 * @param str #FFF000
 * @returns It is hex or not
 */
export function isHexColor(str: string): boolean {
  return /^#([0-9A-F]{3}){1,2}$/i.test(str);
}

/**
 * Compares the equality of 2 strings
 * @param str1 String 1
 * @param str2 String 2
 * @param isSensitive Sensitive or insensitive comparison
 */
export function isSameText(
  str1: string | null,
  str2: string | null,
  isSensitive: boolean = false
): boolean {
  if (isNull(str1) || isNull(str2)) {
    return str1 === str2;
  }
  if (isUndefined(str1) || isUndefined(str2)) {
    return str1 === str2;
  }

  const t1 = trim(str1);
  const t2 = trim(str2);

  const s1 = isSensitive ? t1 : t1.toLowerCase();
  const s2 = isSensitive ? t2 : t2.toLowerCase();

  return s1 === s2;
}

export function isEmail(str: string | null | undefined): boolean {
  const regex = /^[A-Z0-9._-]+@[A-Z0-9-_.]+\.[A-Z]{2,}$/gi;
  return regex.test(_makeString(str));
}

/**
 * Get initial letters of name and last name
 * @param name Name
 * @param lastName Last name
 * @returns final string
 */
export function getInitialLetters(name: any = '', lastName: any = ''): string {
  const n = _makeString(name);
  const l = _makeString(lastName);

  return `${n[0]}${l ? `${l[0]}` : ''}`.toUpperCase();
}

/**
 * Decodes a JWT token
 * @param token
 * @returns object
 */
export function decodeJWT(token: string | null | undefined): any {
  const t = _makeString(token).replaceAll('Bearer ', '');
  try {
    return jwt(t);
  } catch (e) {
    return null;
  }
}

/**
 * Converts underscored or dasherized string to a camelized one. Begins with a lower case letter
 * unless it starts with an underscore, dash or an upper case letter.
 * camelize("moz-transform"); => "mozTransform"
 * camelize("-moz-transform"); => "MozTransform"
 * camelize("_moz_transform"); => "MozTransform"
 * camelize("Moz-transform"); => "MozTransform"
 * camelize("-moz-transform", true); => "mozTransform"
 * @param str String to transform
 * @param decapitalize Not capitalize first letter
 */
export function camelize(str: string, isDecapitalize: boolean = false): string {
  str = trim(str).replace(/[-_\s]+(.)?/g, (match, c) => {
    return c ? c.toUpperCase() : '';
  });
  if (isDecapitalize) {
    return decapitalize(str);
  }
  return str;
}

/**
 * Converts first letter of the string to uppercase. If true is passed as second argument the rest of the
 * string will be converted to lower case.
 * capitalize("foo Bar"); => "Foo Bar"
 * capitalize("FOO Bar", true); => "Foo bar"
 * @param str String to transform
 * @param lowercaseRest Lower case the rest
 */
export function capitalize(
  str: string,
  lowercaseRest: boolean = false
): string {
  str = _makeString(str);
  const remainingChars = !lowercaseRest
    ? str.slice(1)
    : str.slice(1).toLowerCase();
  return str.charAt(0).toUpperCase() + remainingChars;
}

/**
 * Get array of chars
 * chars("Hello"); => ["H", "e", "l", "l", "o"]
 * @param str String to transform
 */
export function chars(str: string): string[] {
  return _makeString(str).split('');
}

/**
 *  Get array of chars
 * chop("whitespace", 3); => ["whi", "tes", "pac", "e"]
 * @param str String to tranform
 * @param step Every step character
 */
export function chop(str: string, step: number = 3): string[] | null {
  if (str == null) {
    return [];
  }
  str = String(str);
  step = ~~step;
  return step > 0 ? str.match(new RegExp('.{1,' + step + '}', 'g')) : [str];
}

/**
 * Converts string to camelized class name. First letter is always upper case
 * classify("some_class_name"); => "SomeClassName"
 * @param str String to transform
 */
export function classify(str: string): string {
  str = _makeString(str);
  return capitalize(camelize(str.replace(/[\W_]/g, ' ')).replace(/\s/g, ''));
}

/**
 * Trim and replace multiple spaces with a single space.
 * clean(" foo    bar   "); => "foo bar"
 * @param str String to transform
 */
export function clean(str: string): string {
  return trim(str).replace(/\s\s+/g, ' ');
}

/**
 * Returns number of occurrences of substring in string.
 * count("Hello world", "l"); => 3
 * @param str String to transform
 * @param substr String to count
 */
export function count(str: string, substr: string): number {
  str = _makeString(str);
  substr = _makeString(substr);

  if (str.length === 0 || substr.length === 0) {
    return 0;
  }
  return str.split(substr).length - 1;
}

/**
 * Converts a underscored or camelized string into an dasherized one
 * dasherize("MozTransform"); => "-moz-transform"
 * @param str String to transform
 */
export function dasherize(str: string): string {
  return trim(str)
    .replace(/([A-Z])/g, '-$1')
    .replace(/[-_\s]+/g, '-')
    .toLowerCase();
}

/**
 * Converts first letter of the string to lowercase.
 * decapitalize("Foo Bar"); => "foo Bar"
 * @param str String to transform
 */
export function decapitalize(str: string): string {
  str = _makeString(str);
  return str.charAt(0).toLowerCase() + str.slice(1);
}

/**
 * This method checks whether the string ends with ends at position (default: string.length).
 * endsWith("image.gif", "gif"); => true
 * endsWith("image.old.gif", "old", 9); => true
 * @param str String to transform
 * @param ends Sub string to find
 * @param position [default: string.length]
 */
export function endsWith(
  str: string,
  ends: string,
  position?: number
): boolean {
  str = _makeString(str);
  ends = '' + ends;
  if (isUndefined(position)) {
    position = str.length - ends.length;
  } else {
    position = Math.min(_toPositive(position), str.length) - ends.length;
  }
  return position >= 0 && str.indexOf(ends, position) === position;
}

/**
 * Converts an underscored, camelized, or dasherized string into a humanized one. Also removes beginning
 * and ending whitespace, and removes the postfix '_id'.
 * humanize("  capitalize dash-CamelCase_underscore trim  "); => "Capitalize dash camel case underscore trim"
 * @param str String to transform
 */
export function humanize(str: string): string {
  return capitalize(
    trim(underscored(str).replace(/_id$/, '').replace(/_/g, ' '))
  );
}

/**
 * Tests if string contains a substring.
 * include("foobar", "ob"); => true
 * @param str String to transform
 * @param needle Substring to check if it's include
 */
export function include(
  str: string,
  needle: string,
  isSensitive: boolean = false,
  ignoreAccents: boolean = true
): boolean {
  if (needle === '') {
    return true;
  }

  let s1 = isSensitive ? str : str.toLowerCase();
  let s2 = isSensitive ? needle : needle.toLowerCase();

  if (ignoreAccents) {
    s1 = s1.replaceAll(/[á]/gi, 'a');
    s1 = s1.replaceAll(/[é]/gi, 'e');
    s1 = s1.replaceAll(/[í]/gi, 'i');
    s1 = s1.replaceAll(/[ó]/gi, 'o');
    s1 = s1.replaceAll(/[ú]/gi, 'u');

    s2 = s2.replaceAll(/[á]/gi, 'a');
    s2 = s2.replaceAll(/[é]/gi, 'e');
    s2 = s2.replaceAll(/[í]/gi, 'i');
    s2 = s2.replaceAll(/[ó]/gi, 'o');
    s2 = s2.replaceAll(/[ú]/gi, 'u');
  }

  return _makeString(s1).indexOf(s2) !== -1;
}

/**
 * Insert a string in the given position
 * insert("Hellworld", 4, "o "); => "Hello world"
 * @param str String to transform
 * @param index Position to insert
 * @param substr String to insert
 */
export function insert(str: string, index: number, substr: string): string {
  return splice(str, index, 0, substr);
}

/**
 * Check if the string is empty
 * isBlank(""); => true
 * isBlank("\n"); => true
 * isBlank(" "); => true
 * isBlank("a"); => false
 * @param str String to transform
 */
export function isBlank(str: string): boolean {
  return /^\s*$/.test(_makeString(str));
}

/**
 * Joins strings together with given separator
 * join(" ", "foo", "bar"); => "foo bar"
 */
export function join(): string {
  const slice = [].slice;
  const args = slice.call(arguments),
    separator = args.shift();

  return args.join(_makeString(separator));
}

/**
 * Split lines to an array
 * lines("Hello\nWorld"); => ["Hello", "World"]
 * @param str String to transform
 */
export function lines(str: string): string[] {
  if (str === null) {
    return [];
  }
  return String(str).split(/\r\n?|\n/);
}

/**
 * Pads the str with characters until the total string length is equal to the passed length parameter.
 * By default, pads on the left with the space char (" "). padStr is truncated to a single character if necessary.
 * pad("1", 8); => "       1"
 * pad("1", 8, "0"); => "00000001"
 * pad("1", 8, "0", "right"); => "10000000"
 * pad("1", 8, "0", "both"); => "00001000"
 * pad("1", 8, "bleepblorp", "both"); => "bbbb1bbb"
 * @param str String to transform
 * @param length Padding size
 * @param padStr Padding string
 * @param type left|right|both
 */
export function pad(
  str: string,
  length: number,
  padStr: string = ' ',
  type: 'left' | 'right' | 'both' = 'left'
): string {
  str = _makeString(str);
  length = ~~length;

  let padlen = 0;

  switch (type) {
    case 'right':
      padlen = length - str.length;
      return str + _strRepeat(padStr, padlen);
    case 'both':
      padlen = length - str.length;
      return (
        _strRepeat(padStr, Math.ceil(padlen / 2)) +
        str +
        _strRepeat(padStr, Math.floor(padlen / 2))
      );
    default:
      // 'left'
      padlen = length - str.length;
      return _strRepeat(padStr, padlen) + str;
  }
}

/**
 * left-pad a string. Alias for pad(str, length, padStr, "left")
 * lpad("1", 8, "0"); => "00000001"
 * @param str String to transform
 * @param length Padding size
 * @param padStr Padding string
 */
export function lpad(
  str: string,
  length: number = 2,
  padStr: string = ' '
): string {
  return pad(str, length, padStr);
}

/**
 * left/right-pad a string. Alias for pad(str, length, padStr, "both")
 * lrpad("1", 8, '0'); => "00001000"
 * @param str String to transform
 * @param length Padding size
 * @param padStr Padding string
 */
export function lrpad(
  str: string,
  length: number = 2,
  padStr: string = ' '
): string {
  return pad(str, length, padStr, 'both');
}

/**
 * right-pad a string. Alias for pad(str, length, padStr, "right")
 * rpad("1", 8, "0"); => "10000000"
 * @param str String to transform
 * @param length Padding size
 * @param padStr Padding string
 */
export function rpad(
  str: string,
  length: number = 2,
  padStr: string = ' '
): string {
  return pad(str, length, padStr, 'right');
}

/**
 * Trims defined characters from begining and ending of the string. Defaults to whitespace characters.
 * trim("  foobar   "); => "foobar"
 * trim("_-foobar-_", "_-"); => "foobar"
 * @param str String to transform
 * @param characters Characters to trim
 */
export function trim(str: string | null, characters: any = '\\s'): string {
  str = _makeString(str);
  characters = _defaultToWhiteSpace(characters);
  return str.replace(
    new RegExp('^' + characters + '+|' + characters + '+$', 'g'),
    ''
  );
}

/**
 * Left trim. Similar to trim, but only for left side.
 * @param str String to transform
 * @param characters Characters to trim
 */
export function ltrim(str: string, characters: any = ' '): string {
  str = _makeString(str);
  characters = _defaultToWhiteSpace(characters);
  return str.replace(new RegExp('^' + characters + '+'), '');
}

/**
 * Left trim. Similar to trim, but only for left side.
 * @param str String to transform
 * @param characters Characters to trim
 */
export function rtrim(str: string, characters: any = ' '): string {
  str = _makeString(str);
  characters = _defaultToWhiteSpace(characters);
  return str.replace(new RegExp(characters + '+$'), '');
}

/**
 * Elegant version of truncate. Makes sure the pruned string does not exceed the original length.
 * Avoid half-chopped words when truncating.
 * prune("Hello, world", 5); => "Hello..."
 * prune("Hello, world", 8); => "Hello..."
 * prune("Hello, world", 5, " (read a lot more)"); => "Hello, world"
 * // (as adding "(read a lot more)" would be longer than the original string)
 * prune("Hello, cruel world", 15); => "Hello, cruel..."
 * prune("Hello", 10); => "Hello"
 * @param str String to transform
 * @param length Number of words
 * @param pruneStr '...'
 */
export function prune(
  str: string,
  length: number,
  pruneStr: string = '...'
): string {
  str = _makeString(str);
  length = ~~length;

  if (str.length <= length) {
    return str;
  }
  const tmpl = (c: string) => {
    return c.toUpperCase() !== c.toLowerCase() ? 'A' : ' ';
  };
  let template = str.slice(0, length + 1).replace(/.(?=\W*\w*$)/g, tmpl); // 'Hello, world' -> 'HellAA AAAAA'

  if (template.slice(template.length - 2).match(/\w\w/)) {
    template = template.replace(/\s*\S+$/, '');
  } else {
    template = rtrim(template.slice(0, template.length - 1));
  }
  return (template + pruneStr).length > str.length
    ? str
    : str.slice(0, template.length) + pruneStr;
}

/**
 * Quotes a string. quoteChar defaults to ".
 * quote("foo", '"'); => '"foo"'
 * @param str String to transform
 * @param quoteChar Quote character to use
 */
export function quote(str: string, quoteChar: string = '"'): string {
  return surround(str, quoteChar);
}

/**
 * Repeats a string count times.
 * repeat("foo", 3); => "foofoofoo"
 * repeat("foo", 3, "bar"); => "foobarfoobarfoo"
 * @param str String to transform
 * @param count Number of repetitions
 * @param separator Optional string separator
 */
export function repeat(str: string, count: number, separator: string = '') {
  str = _makeString(str);
  count = ~~count;
  // using faster implementation if separator is not needed;
  if (separator == null) {
    return _strRepeat(str, count);
  }
  // this one is about 300x slower in Google Chrome
  /* eslint no-empty: 0 */
  let repeat = [];
  for (repeat = []; count > 0; repeat[--count] = str) {}
  return repeat.join(separator);
}

/**
 * Replace all matches inside the string
 * replaceAll("foo", "o", "a"); => "faa"
 * @param str  String to transform
 * @param find Sub-string to find
 * @param replace New sub-string to use
 * @param ignorecase Case sensitive
 */
export function replaceAll(
  str: string,
  find: string,
  replace: string,
  ignorecase: boolean = false
): string {
  const flags = ignorecase ? 'gi' : 'g';
  const reg = new RegExp(find, flags);
  return _makeString(str).replace(reg, replace);
}

/**
 * Return reversed string
 * reverse("foobar"); => "raboof"
 * @param str String to transform
 */
export function reverse(str: string): string {
  return chars(str).reverse().join('');
}

/**
 * Transform text into an ascii slug which can be used in safely in URLs. Replaces whitespaces, accentuated,
 * and special characters with a dash. Limited set of non-ascii characters are transformed to similar
 * versions in the ascii character set such as ä to a.
 * slugify("Un éléphant à l\'orée du bois"); => "un-elephant-a-l-oree-du-bois"
 * @param str String to transform
 */
export function slugify(str: string): string {
  return trim(
    dasherize(
      _cleanDiacritics(str)
        .replace(/[^\w\s-]/g, '-')
        .toLowerCase()
    ),
    '-'
  );
}

/**
 * Like an array splice.
 * splice("https://edtsech@bitbucket.org/edtsech/underscore.strings", 30, 7, "epeli");
 * => "https://edtsech@bitbucket.org/epeli/underscore.strings"
 * @param str String to transform
 * @param index Index to start
 * @param howmany How many characters to take
 * @param substr New sub string
 */
export function splice(
  str: string,
  index: number,
  howmany: number,
  substr: string
): string {
  const arr = chars(str);
  arr.splice(~~index, ~~howmany, substr);
  return arr.join('');
}

/**
 * This method checks whether the string begins with starts at position (default: 0).
 * startsWith("image.gif", "image"); => true
 * startsWith(".vimrc", "vim", 1); => true
 * @param str String to transform
 * @param starts Starts with this string
 * @param position Check from this position
 */
export function startsWith(
  str: string,
  starts: string,
  position: number = 0
): boolean {
  str = _makeString(str);
  starts = '' + starts;
  position = Math.min(_toPositive(position), str.length);
  return str.lastIndexOf(starts, position) === position;
}

/**
 * Searches a string from left to right for a pattern and returns a substring consisting of the
 * characters in the string that are to the left of the pattern or all string if no match found.
 * strLeft("This_is_a_test_string", "_"); => "This";
 * @param str String to transform
 * @param pattern Pattern to find
 */
export function strLeft(str: string, pattern: string): string {
  str = _makeString(str);
  pattern = _makeString(pattern);
  const pos = !pattern ? -1 : str.indexOf(pattern);
  return ~pos ? str.slice(0, pos) : str;
}

/**
 * Searches a string from right to left for a pattern and returns a substring consisting of the
 * characters in the string that are to the left of the pattern or all string if no match found.
 * strLeftBack("This_is_a_test_string", "_"); => "This_is_a_test"
 * @param str String to transform
 * @param pattern Pattern to find
 */
export function strLeftBack(str: string, pattern: string): string {
  str = _makeString(str);
  pattern = _makeString(pattern);
  const pos = str.lastIndexOf(pattern);
  return ~pos ? str.slice(0, pos) : str;
}

/**
 * Searches a string from left to right for a pattern and returns a substring consisting of the
 * characters in the string that are to the right of the pattern or all string if no match found.
 * strRight("This_is_a_test_string", "_"); => "is_a_test_string"
 * @param str String to transform
 * @param pattern Pattern to find
 */
export function strRight(str: string, pattern: string): string {
  str = _makeString(str);
  pattern = _makeString(pattern);
  const pos = !pattern ? -1 : str.indexOf(pattern);
  return ~pos ? str.slice(pos + pattern.length, str.length) : str;
}

/**
 * Searches a string from right to left for a pattern and returns a substring consisting of the
 * characters in the string that are to the right of the pattern or all string if no match found.
 * strRightBack("This_is_a_test_string", "_"); => "string"
 * @param str String to transform
 * @param pattern Pattern to find
 */
export function strRightBack(str: string, pattern: string): string {
  str = _makeString(str);
  pattern = _makeString(pattern);
  const pos = !pattern ? -1 : str.lastIndexOf(pattern);
  return ~pos ? str.slice(pos + pattern.length, str.length) : str;
}

/**
 * Removes all html tags from string.
 * stripTags("a <a href=\"#\">link</a>");
 * => "a link"
 * stripTags("a <a href=\"#\">link</a><script>alert(\"hello world!\")</script>");
 * => "a linkalert("hello world!")"
 * @param str String to transform
 */
export function stripTags(str: string): string {
  return _makeString(str).replace(/<\/?[^>]+>/g, '');
}

/**
 * Surround a string with another string.
 * surround("foo", "ab"); => "abfooab"
 * @param str String to transform
 * @param wrapper String to use as wrapper
 */
export function surround(str: string, wrapper: string): string {
  return [wrapper, str, wrapper].join('');
}

/**
 * Returns a copy of the string in which all the case-based characters have had their case swapped.
 * swapCase("hELLO"); => "Hello"
 * @param str String to transform
 */
export function swapCase(str: string): string {
  return _makeString(str).replace(/\S/g, (c) => {
    return c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase();
  });
}

/**
 * Capitalize the first letter of each word
 * titleize("my name is epeli"); => "My Name Is Epeli"
 * @param str String to transform
 */
export function titleize(str: string): string {
  return _makeString(str)
    .toLowerCase()
    .replace(/(?:^|\s|-)\S/g, (c) => {
      return c.toUpperCase();
    });
}

/**
 * Turn strings that can be commonly considered as booleas to real booleans. Such as "true", "false",
 * "1" and "0". This function is case insensitive.
 * toBoolean("true"); => true
 * toBoolean("FALSE"); => false
 * toBoolean("random"); => undefined
 * @param str String to transform
 * @param trueValues True values
 * @param falseValues Falsy values
 */
export function toBoolean(
  str: string,
  trueValues: string[] = ['true', '1'],
  falseValues: string[] = ['false', '0']
): boolean {
  if (isNumber(str)) {
    str = '' + str;
  }
  if (!isString(str)) {
    return !!str;
  }
  str = trim(str);
  if (_boolMatch(str, trueValues)) {
    return true;
  }
  if (_boolMatch(str, falseValues)) {
    return false;
  }
  return false;
}

/**
 * Parse string to number. Returns NaN if string can't be parsed to number.
 * toNumber("2.556"); => 3
 * toNumber("2.556", 1); => 2.6
 * toNumber("999.999", -1); => 990
 * @param num Number to transform
 * @param precision Decimals
 */
export function toNumber(num: any, precision: number = 0): number {
  if (num == null) {
    return 0;
  }
  const factor = Math.pow(10, isFinite(precision) ? precision : 0);
  return Math.round(num * factor) / factor;
}

/**
 * Join an array into a human readable sentence.
 * toSentence(["jQuery", "Mootools", "Prototype"]);
 * => "jQuery, Mootools and Prototype"
 * toSentence(["jQuery", "Mootools", "Prototype"], ", ", " unt ");
 * => "jQuery, Mootools unt Prototype"
 * @param array Array to transform
 * @param separator Separator (default: ', ')
 * @param lastSeparator Last separator (default: ' and ')
 * @param isSerial Is a series
 */
export function toSentence(
  array: string[],
  separator: string = ', ',
  lastSeparator: string = ' and ',
  isSerial: boolean = false
): string | undefined {
  separator = separator || ', ';
  lastSeparator = lastSeparator || ' and ';
  const a = array.slice(),
    lastMember = a.pop();

  if (array.length > 2 && isSerial) {
    lastSeparator = rtrim(separator) + lastSeparator;
  }
  return a.length ? a.join(separator) + lastSeparator + lastMember : lastMember;
}

/**
 * The same as toSentence, but adjusts delimeters to use Serial comma.
 * toSentenceSerial(["jQuery", "Mootools"]);
 * => "jQuery and Mootools"
 * toSentenceSerial(["jQuery", "Mootools", "Prototype"]);
 * => "jQuery, Mootools, and Prototype"
 * toSentenceSerial(["jQuery", "Mootools", "Prototype"], ", ", " unt ");
 * => "jQuery, Mootools, unt Prototype"
 * @param array Array to transform
 * @param separator Separator (default: ', ')
 * @param lastSeparator Last separator (default: ' and ')
 * @param isSerial Is a series
 */
export function toSentenceSerial(
  array: string[],
  separator: string = ', ',
  lastSeparator: string = ' and '
): string | undefined {
  return toSentence(array, separator, lastSeparator, true);
}

/**
 * Truncates a string
 * truncate("Hello world", 5); => "Hello..."
 * truncate("Hello", 10); => "Hello"
 * @param str String to transform
 * @param length Max characters
 * @param truncateStr Trucate string (default: '...')
 */
export function truncate(
  str: string,
  length: number,
  truncateStr: string = '...'
): string {
  str = _makeString(str);
  length = ~~length;
  return str.length > length ? str.slice(0, length) + truncateStr : str;
}

/**
 * Converts a camelized or dasherized string into an underscored one
 * underscored("MozTransform"); => "moz_transform"
 * @param str String to transform
 */
export function underscored(str: string): string {
  return trim(str)
    .replace(/([a-z\d])([A-Z]+)/g, '$1_$2')
    .replace(/[-\s]+/g, '_')
    .toLowerCase();
}

/**
 * Converts HTML special characters to their entity equivalents. This function supports cent, yen, euro,
 * pound, lt, gt, copy, reg, quote, amp, apos.
 * escapeHTML("<div>Blah blah blah</div>");
 * => "&lt;div&gt;Blah blah blah&lt;/div&gt;"
 * @param str String to transform
 */
export function escapeHTML(str: string): string {
  const escapeChars: any = {
    '¢': 'cent',
    '£': 'pound',
    '¥': 'yen',
    '€': 'euro',
    '©': 'copy',
    '®': 'reg',
    '<': 'lt',
    '>': 'gt',
    '"': 'quot',
    '&': 'amp',
    // tslint:disable-next-line:quotemark
    "'": '#39',
  };
  let regexString = '[';
  for (const key in escapeChars) {
    if (escapeChars.hasOwnProperty(key)) {
      regexString += key;
    }
  }
  regexString += ']';
  const regex = new RegExp(regexString, 'g');
  return _makeString(str).replace(regex, (m) => {
    return '&' + escapeChars[m] + ';';
  });
}

/**
 * Converts entity characters to HTML equivalents. This function supports cent, yen, euro, pound,
 * lt, gt, copy, reg, quote, amp, apos, nbsp.
 * unescapeHTML("&lt;div&gt;Blah&nbsp;blah blah&lt;/div&gt;");
 * => "<div>Blah blah blah</div>"
 * @param str String to transform
 */
export function unescapeHTML(str: string): string {
  const htmlEntities: any = {
    nbsp: ' ',
    cent: '¢',
    pound: '£',
    yen: '¥',
    euro: '€',
    copy: '©',
    reg: '®',
    lt: '<',
    gt: '>',
    quot: '"',
    amp: '&',
    // tslint:disable-next-line:quotemark
    apos: "'",
  };

  return _makeString(str).replace(/\&([^;]{1,10});/g, (entity, entityCode) => {
    let match;
    if (entityCode in htmlEntities) {
      return htmlEntities[entityCode];
    } else if ((match = entityCode.match(/^#x([\da-fA-F]+)$/))) {
      return String.fromCharCode(parseInt(match[1], 16));
    } else if ((match = entityCode.match(/^#(\d+)$/))) {
      return String.fromCharCode(~~match[1]);
    }
    return entity;
  });
}

/**
 * Unquotes a string. quoteChar defaults to "
 * unquote('"foo"'); => "foo"
 * unquote("'foo'", "'"); => "foo"
 * @param str String to transform
 * @param quoteChar Quote character
 */
export function unquote(str: string, quoteChar: string = '"'): string {
  quoteChar = quoteChar || '"';
  if (str[0] === quoteChar && str[str.length - 1] === quoteChar) {
    return str.slice(1, str.length - 1);
  }
  return str;
}

/**
 * Split string by delimiter (String or RegExp), /\s+/ by default.
 * words("   I   love   you   "); => ["I", "love", "you"]
 * words("I_love_you", "_"); => ["I", "love", "you"]
 * words("I-love-you", /-/); => ["I", "love", "you"]
 * words("   ") => []
 * @param str String to transform
 * @param delimiter String or RegExp, /\s+/ by default.
 */
export function words(str: string, delimiter: any = /\s+/): string[] {
  if (isBlank(str)) {
    return [];
  }
  return trim(str, delimiter).split(delimiter);
}

/**
 * Splits a line str (default '') into several lines of size options.width (default 75) using a
 * options.seperator (default '\n'). If options.trailingSpaces is true, make each line at least
 * width long using trailing spaces. If options.cut is true, create new lines in the middle of words.
 * If options.preserveSpaces is true, preserve the space that should be there at the end of a line
 * (only works if options.cut is false).
 * wrap("Hello World", { width:5 })
 * => "Hello\nWorld"
 * wrap("Hello World", { width:6, seperator:'.', trailingSpaces: true })
 * => "Hello .World "
 * wrap("Hello World", { width:5, seperator:'.', cut:true, trailingSpaces: true })
 * => "Hello. Worl.d    "
 * wrap("Hello World", { width:5, seperator:'.', preserveSpaces: true })
 * => "Hello .World"
 * @param str String to transform
 * @param options Wrap options
 */
export function wrap(str: string, options: any = {}): string {
  str = _makeString(str);
  const width = options.width || 75;
  const seperator = options.seperator || '\n';
  const cut = options.cut || false;
  const preserveSpaces = options.preserveSpaces || false;
  const trailingSpaces = options.trailingSpaces || false;

  let result;

  if (width <= 0) {
    return str;
  } else if (!cut) {
    const words = str.split(' ');
    let current_column = 0;
    result = '';

    while (words.length > 0) {
      // if adding a space and the next word would cause this line to be longer than width...
      if (1 + words[0].length + current_column > width) {
        // start a new line if this line is not already empty
        if (current_column > 0) {
          // add a space at the end of the line is preserveSpaces is true
          if (preserveSpaces) {
            result += ' ';
            current_column++;
          } else if (trailingSpaces) {
            // fill the rest of the line with spaces if trailingSpaces option is true
            while (current_column < width) {
              result += ' ';
              current_column++;
            }
          }
          // start new line
          result += seperator;
          current_column = 0;
        }
      }
      // if not at the begining of the line, add a space in front of the word
      if (current_column > 0) {
        result += ' ';
        current_column++;
      }
      // tack on the next word, update current column, a pop words array
      result += words[0];
      current_column += words[0].length;
      words.shift();
    }
    // fill the rest of the line with spaces if trailingSpaces option is true
    if (trailingSpaces) {
      while (current_column < width) {
        result += ' ';
        current_column++;
      }
    }
    return result;
  } else {
    let index = 0;
    result = '';
    // walk through each character and add seperators where appropriate
    while (index < str.length) {
      if (index % width === 0 && index > 0) {
        result += seperator;
      }
      result += str.charAt(index);
      index++;
    }
    // fill the rest of the line with spaces if trailingSpaces option is true
    if (trailingSpaces) {
      while (index % width > 0) {
        result += ' ';
        index++;
      }
    }
    return result;
  }
}

/**
 * Naturally sort strings like humans would do. None numbers are compared by their ASCII values.
 * Note: this means "a" > "A". Use .toLowerCase if this isn't to be desired.
 * ["foo20", "foo5"].sort(naturalCmp);
 * => ["foo5", "foo20"]
 * @param str1 Firts string
 * @param str2 Second string
 */
export function naturalCmp(str1: any, str2: any) {
  if (str1 === str2) {
    return 0;
  }
  if (!str1) {
    return -1;
  }
  if (!str2) {
    return 1;
  }
  const cmpRegex = /(\.\d+|\d+|\D+)/g,
    tokens1 = String(str1).match(cmpRegex) || [],
    tokens2 = String(str2).match(cmpRegex) || [],
    count = Math.min(tokens1.length, tokens2.length);

  for (let i = 0; i < count; i++) {
    const a = tokens1[i],
      b = tokens2[i];
    if (a !== b) {
      // const num1 = +a;
      // const num2 = +b;
      // if (num1 === num1 && num2 === num2) {
      //   return num1 > num2 ? 1 : -1;
      // }
      return a < b ? -1 : 1;
    }
  }

  if (tokens1.length !== tokens2.length) {
    return tokens1.length - tokens2.length;
  }
  return str1 < str2 ? -1 : 1;
}

/**
 * Calculates [Levenshtein distance][ld] between two strings. http://en.wikipedia.org/wiki/Levenshtein_distance
 * Based on the implementation here: https://github.com/hiddentao/fast-levenshtein
 * levenshtein("kitten", "kittah"); => 2
 * @param str1 Firts string
 * @param str2 Second string
 */
export function levenshtein(
  str1: string | null | undefined,
  str2: string | null | undefined
) {
  str1 = _makeString(str1);
  str2 = _makeString(str2);

  // Short cut cases
  if (str1 === str2) {
    return 0;
  }
  if (!str1 || !str2) {
    return Math.max(str1.length, str2.length);
  }

  // two rows
  const prevRow = new Array(str2.length + 1);
  let i = 0,
    j = 0,
    nextCol = -1;

  // initialise previous row
  for (; i < prevRow.length; ++i) {
    prevRow[i] = i;
  }

  // calculate current row distance from previous row
  for (i = 0; i < str1.length; ++i) {
    nextCol = i + 1;
    for (j = 0; j < str2.length; ++j) {
      const curCol = nextCol;
      // substution
      nextCol = prevRow[j] + (str1.charAt(i) === str2.charAt(j) ? 0 : 1);
      // insertion
      let tmp = curCol + 1;
      if (nextCol > tmp) {
        nextCol = tmp;
      }
      // deletion
      tmp = prevRow[j + 1] + 1;
      if (nextCol > tmp) {
        nextCol = tmp;
      }
      // copy current col value into previous (in preparation for next iteration)
      prevRow[j] = curCol;
    }
    // copy last col value into previous (in preparation for next iteration)
    prevRow[j] = nextCol;
  }
  return nextCol;
}

function _makeString(object: string | null | undefined): string {
  if (object === null || object === undefined) {
    return '';
  }
  return '' + object;
}

function _strRepeat(str: string, qty: number): string {
  if (qty < 1) {
    return '';
  }
  let result = '';
  while (qty > 0) {
    if (qty & 1) {
      result += str;
    }
    qty >>= 1;
    str += str;
  }
  return result;
}

function _defaultToWhiteSpace(characters: any): any {
  if (characters === null) {
    return '\\s';
  } else if (characters.source) {
    return characters.source;
  }
  return '[' + _escapeRegExp(characters) + ']';
}

function _cleanDiacritics(str: string | null | undefined): string {
  let from: any = 'ąàáäâãåæăćčĉęèéëêĝĥìíïîĵłľńňòóöőôõðøśșşšŝťțţŭùúüűûñÿýçżźž',
    to: any = 'aaaaaaaaaccceeeeeghiiiijllnnoooooooossssstttuuuuuunyyczzz';

  from += from.toUpperCase();
  to += to.toUpperCase();
  to = to.split('');

  // for tokens requireing multitoken output
  from += 'ß';
  to.push('ss');

  return _makeString(str).replace(/.{1}/g, (c) => {
    const index = from.indexOf(c);
    return index === -1 ? c : to[index];
  });
}

function _toPositive(number: number | undefined): number {
  if (number === undefined) {
    return 0;
  }
  return number < 0 ? 0 : +number || 0;
}

function _boolMatch(s: string, matchers: any): boolean {
  let i, matcher;
  const down = s.toLowerCase();
  matchers = [].concat(matchers);

  for (i = 0; i < matchers.length; i += 1) {
    matcher = matchers[i];
    if (!matcher) {
      continue;
    }
    if (matcher.test && matcher.test(s)) {
      return true;
    }
    if (matcher.toLowerCase() === down) {
      return true;
    }
  }
  return false;
}

function _escapeRegExp(str: string | null | undefined): string {
  return _makeString(str).replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
}
