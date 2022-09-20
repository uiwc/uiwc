import { colors } from '../../../styles/colors';
import { Utils } from '../../../utils';
import { IBaseProps } from '../../IBaseProps';

export interface ProgressWrapperProps extends IBaseProps {
  width?: number | string;
}

export interface ProgressProps extends IBaseProps {
  pre?: React.ReactNode;
  post?: React.ReactNode;
  variant?:
    | 'default'
    | 'primary'
    | 'error'
    | 'success'
    | 'info'
    | 'warning'
    | 'wrong';
  min?: number;
  max?: number;
  value?: number;
  width?: number | string;
  barClassName?: string;
  showProgress?: boolean;
  loading?: boolean;
  onComplete?: () => void;
}

export interface ProgressValueProps extends IBaseProps {
  variant?:
    | 'default'
    | 'primary'
    | 'error'
    | 'success'
    | 'info'
    | 'warning'
    | 'wrong';
  perc?: number;
}

export const progressTheme = {
  default: {
    color: colors.spanish,
    bg: colors.light,
  },
  primary: {
    color: colors.primary,
    bg: colors.powder,
  },
  error: {
    color: colors.error,
    bg: Utils.convertHexToRGBA(colors.error, 0.15),
  },
  success: {
    color: colors.success,
    bg: Utils.convertHexToRGBA(colors.success, 0.25),
  },
  info: {
    color: colors.evaluation,
    bg: Utils.convertHexToRGBA(colors.evaluation, 0.2),
  },
  warning: {
    color: colors.warning,
    bg: Utils.convertHexToRGBA(colors.warning, 0.2),
  },
  wrong: {
    color: colors.wrong,
    bg: Utils.convertHexToRGBA(colors.wrong, 0.2),
  },
};
