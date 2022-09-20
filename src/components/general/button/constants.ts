import { MouseEventHandler } from 'react';
import { colors } from '../../../styles/colors';
import { IBaseProps } from '../../IBaseProps';

type ButtonTypes =
  | 'green'
  | 'orange'
  | 'secondary'
  | 'tertiary'
  | 'dropdown'
  | 'link'
  | 'filter';

export interface ButtonProps extends IBaseProps {
  type?: 'button' | 'submit' | 'reset';
  variant?:
    | 'green'
    | 'orange'
    | 'secondary'
    | 'tertiary'
    | 'dropdown'
    | 'link'
    | 'filter';
  disabled?: boolean;
  loading?: boolean;
  block?: boolean;
  active?: boolean;
  href?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  to?: string | object | (() => void);
  onClick?:
    | (React.MouseEventHandler<HTMLButtonElement> &
        ((e: React.MouseEventHandler<HTMLButtonElement>) => void) &
        MouseEventHandler<HTMLElement>)
    | (() => void)
    | MouseEventHandler<HTMLElement>;
  caret?: boolean;
  caretDirection?: 'up' | 'down' | 'left' | 'right';
  circle?: boolean;
  size?: number | string;
}

const config = {
  green: {
    bg: colors.primary,
    hover: colors.primary,
    shadow:
      '0px 8px 10px rgb(19 92 96 / 14%), 0px 3px 14px rgb(19 92 96 / 12%), 0px 4px 5px rgb(19 92 96 / 20%)',
    active: colors.brand,
    text: colors.white,
    border: colors.transparent,
    disabled: {
      bg: colors.light,
      text: colors.spanish,
      border: colors.transparent,
    },
  },
  orange: {
    bg: colors.secondary,
    hover: colors.secondary,
    shadow:
      '0px 4px 5px rgba(246, 140, 19, 0.2), 0px 3px 14px rgba(246, 140, 19, 0.12), 0px 8px 10px rgba(246, 140, 19, 0.14)',
    active: colors.ochre,
    text: colors.text,
    border: colors.transparent,
    disabled: {
      bg: colors.light,
      text: colors.spanish,
      border: colors.transparent,
    },
  },
  secondary: {
    bg: colors.white,
    hover: colors.white,
    shadow:
      '0px 4px 5px rgba(46, 121, 119, 0.2), 0px 3px 14px rgba(46, 121, 119, 0.12), 0px 8px 10px rgba(46, 121, 119, 0.14)',
    active: colors.powder,
    text: colors.brand,
    border: colors.primary,
    disabled: {
      bg: colors.light,
      text: colors.spanish,
      border: colors.transparent,
    },
  },
  tertiary: {
    bg: colors.transparent,
    hover: colors.white,
    shadow:
      '0px 4px 5px rgba(0, 0, 0, 0.2), 0px 3px 14px rgba(0, 0, 0, 0.12), 0px 8px 10px rgba(0, 0, 0, 0.14)',
    active: colors.powder,
    text: colors.brand,
    border: colors.transparent,
    disabled: {
      bg: colors.transparent,
      text: colors.spanish,
      border: colors.transparent,
    },
  },
  dropdown: {
    bg: colors.white,
    hover: colors.white,
    shadow:
      '0px 4px 5px rgba(19, 92, 96, 0.2), 0px 3px 14px rgba(19, 92, 96, 0.14), 0px 8px 10px rgba(19, 92, 96, 0.14)',
    active: colors.powder,
    text: colors.brand,
    border: colors.primary,
    disabled: {
      bg: colors.white,
      text: colors.spanish,
      border: colors.light,
    },
  },
  link: {
    bg: colors.transparent,
    hover: colors.transparent,
    shadow: 'none',
    active: colors.transparent,
    text: colors.primary,
    border: colors.transparent,
    disabled: {
      bg: colors.transparent,
      text: colors.spanish,
      border: colors.transparent,
    },
  },
  filter: {
    bg: colors.white,
    hover: colors.cultured,
    shadow: 'none',
    active: colors.powder,
    text: colors.text,
    border: colors.transparent,
    disabled: {
      bg: colors.light,
      text: colors.spanish,
      border: colors.transparent,
    },
  },
};

export const buttonsTheme = {
  getBackground(variant: ButtonTypes = 'green', disabled = false) {
    return disabled ? config[variant].disabled.bg : config[variant].bg;
  },
  getHover(variant: ButtonTypes = 'green') {
    return config[variant].hover;
  },
  getShadow(variant: ButtonTypes = 'green') {
    return config[variant].shadow;
  },
  getActive(variant: ButtonTypes = 'green') {
    return config[variant].active;
  },
  getText(variant: ButtonTypes = 'green', disabled = false) {
    return disabled ? config[variant].disabled.text : config[variant].text;
  },
  getBorder(variant: ButtonTypes = 'green', disabled = false) {
    return disabled ? config[variant].disabled.border : config[variant].border;
  },
};
