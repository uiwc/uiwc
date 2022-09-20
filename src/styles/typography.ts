import { colors } from './colors';

export const typography = {
  code: {
    fontFamily:
      'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  },
  headings: {
    fontFamily:
      '"IBM Plex Sans", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
  },
  paragraph: {
    marginBottom: '1rem',
  },
  links: {
    color: colors.tertiary,
    decoration: 'none',
    hover: {
      color: colors.brand,
      decoration: 'underline',
    },
  },
};
