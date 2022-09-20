import { isNull, isString, isUndefined } from '../utils/object';

// As suggested on: https://stackoverflow.com/questions/56457935/typescript-error-property-x-does-not-exist-on-type-window
declare const window: any;

// TODO: Refactor all this...
let language = 'es-US,es';

export const LOCAL_STORAGE_LANGUAGE_KEY = 'dw-lang';

export const iso2ToLang = (countryIso2: string): string =>
  `es-${(countryIso2 ?? 'us').toUpperCase()},es`;

export const langToIso2 = (language: string): string => {
  if (language.includes('-')) {
    const r = /-([a-z]{2}),/i.exec(language);

    if (r) {
      return r[1].toLowerCase();
    }

    return 'na';
  }
  return 'us';
};

export const getLocalStorageIso2 = () =>
  JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_LANGUAGE_KEY));

export const getLocalStorageLanguage = () => iso2ToLang(getLocalStorageIso2());

export const setLanguage = (l: string) => {
  language = l;
  window.localStorage.setItem(LOCAL_STORAGE_LANGUAGE_KEY, `"${langToIso2(l)}"`);
};

export const getCurrentLanguage = (): string => language;

export const i18n = (key: string, params: any = {}): string => {
  if (!window.locales) {
    // console.error("Couldn't access locales.");
    return `≪${key}≫`;
  }

  // Split locale into two (locale, lang)
  const [locale, lang] = language.split(',');
  // locale.replace('-', '_')

  let value = null;

  // Check if locale exists
  if (window.locales[locale]) {
    // Use locale
    value = __getValue(window.locales[locale], key);
  }

  if (window.locales[lang] && (isNull(value) || isUndefined(value))) {
    // Use language
    value = __getValue(window.locales[lang], key);
  }

  if (isNull(value) || isUndefined(value)) {
    // Use stored
    value = __getValue(window.locales[getCurrentLanguage()], key);
  }

  if (isNull(value) || isUndefined(value)) {
    // Use stored
    value = __getValue(window.locales.default, key);
  }

  if (!isNull(value) && !isUndefined(value)) {
    // Replace params
    return __replaceParams(value, params);
  } else {
    const commonsRoute = 'ui.commons';

    // Retry with commons
    if (
      key?.toLocaleLowerCase().indexOf(commonsRoute.toLocaleLowerCase()) === -1
    ) {
      // deconstruct route from end to start
      let keys = key.split('.').reverse();
      let newKey: any = '';

      while (keys.length) {
        newKey = newKey.length ? `${keys.shift()}.${newKey}` : keys.shift();
        let commonsResult = i18n(`${commonsRoute}.${newKey}`, params);

        if (!!commonsResult.length && commonsResult.indexOf('≪') === -1) {
          return commonsResult;
        }
      }
    }

    return `≪${key}≫`;
  }
};

export const initI18n = () => {
  if (!window.locales) {
    window.locales = {
      default: {},
      es: {},
      en: {},
    };
  }
};

export const setDefaultI18n = (translations: any) => {
  initI18n();

  window.locales = {
    ...window.locales,
    default: translations,
  };
};

export const addI18n = (translations: any, language: string) => {
  initI18n();

  window.locales = {
    ...window.locales,
    [language]: {
      ...window.locales[language],
      ...translations,
    },
  };
};

/**
 *
 * @param str Message with params to be replaced
 * @param params An object containing the params to be replaced
 *
 * @example __replaceParams('foo {{bar}}', { bar: 'baz' }) ---> 'foo baz'
 */
const __replaceParams = (str: any, params: any): string => {
  if (!params || typeof params !== 'object' || !!!str.length) {
    return str;
  }

  return str.replace(/({{[a-z]+}})/gi, (m: any) => {
    return params[m.match(/[a-z]+/i)[0]] || m;
  });
};

/**
 *
 * @param obj The object which contains translations. Could be locale, language or default
 * @param key The key with the route to the property using object notation as string or array of properties.
 *
 * @example __getValue({ foo: { bar: 'baz' } }, 'foo.bar') ---> 'baz'
 * @example __getValue({ foo: { bar: 'baz' } }, ['foo', 'bar']) ---> 'baz'
 */
const __getValue = (obj: any, key: any): string | null => {
  try {
    if (isString(key)) {
      return __getValue(obj, key.split('.'));
    }

    if (key.length === 1) {
      return obj[key.shift()];
    }

    return __getValue(obj[key.shift()], key);
  } catch (ex) {
    return null;
  }
};

window.i18n = i18n;
