import { colors } from '../../../styles/colors';
import { IBaseProps } from '../../IBaseProps';

type CalloutTypes =
  | 'primary'
  | 'white'
  | 'secondary'
  | 'error'
  | 'default'
  | 'warning'
  | 'powder'
  | 'powderer';

export interface CalloutProps extends IBaseProps {
  variant?:
    | 'primary'
    | 'white'
    | 'secondary'
    | 'error'
    | 'default'
    | 'warning'
    | 'powder'
    | 'powderer';
}

const config = {
  primary: {
    bg: colors.primary,
    text: colors.white,
  },
  secondary: {
    bg: colors.secondary,
    text: colors.text,
  },
  white: {
    bg: colors.white,
    text: colors.text,
  },
  error: {
    bg: colors.error,
    text: colors.white,
  },
  default: {
    bg: '#f8f9fa',
    text: colors.text,
  },
  warning: {
    bg: '#fffdd9',
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

export const calloutsTheme = {
  getBackground(variant: CalloutTypes = 'default') {
    return config[variant].bg;
  },
  getText(variant: CalloutTypes = 'default') {
    return config[variant].text;
  },
};
