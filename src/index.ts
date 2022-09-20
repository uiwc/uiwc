import * as components from './components';
import * as styles from './styles';
import * as hooks from './hooks';
import * as providers from './providers';
import { Utils } from './utils';
import { includeComponentsI18n } from './i18n';

export * from './components';
export * from './styles';
export * from './utils';
export * from './hooks';
export * from './providers';
export * from './i18n';

export const Dawere = {
  Utils,
  ...components,
  ...styles,
  ...hooks,
  ...providers,
  includeComponentsI18n,
};
