import { addI18n } from './language';
import es from './es';

export const includeComponentsI18n = () => {
  addI18n({ ui: es }, 'es');
};
