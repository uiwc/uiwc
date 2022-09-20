import { colors } from '../../../styles/colors';
import { IBaseProps } from '../../IBaseProps';

type AlertTypes = 'default' | 'warning' | 'powder' | 'powderer';

export interface AlertProps extends IBaseProps {
  title?: string;
  variant?: 'default' | 'warning' | 'powder' | 'powderer';
  icon?: 'none' | 'info' | 'info-fill' | 'warning' | 'error' | 'wrong';
  closable?: boolean;
  isOpen?: boolean;
  align?: 'stretch' | 'center' | 'start' | 'end' | 'baseline';
  layout?: 'vertical' | 'horizontal';
  actions?: React.ReactNode;
  closing?: boolean;
  onClose?: () => void;
}

const config = {
  warning: {
    bg: '#fffdd9',
    text: colors.text,
  },
  default: {
    bg: '#f8f9fa',
    text: colors.text,
  },
  powder: {
    bg: colors.powder,
    text: colors.text,
  },
  powderer: {
    bg: colors.powderer,
    text: colors.text,
  },
};

export const alertsTheme = {
  getBackground(variant: AlertTypes = 'default') {
    return config[variant].bg;
  },
  getText(variant: AlertTypes = 'default') {
    return config[variant].text;
  },
};
