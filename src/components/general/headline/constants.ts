import { IBaseProps } from '../../IBaseProps';

export interface HeadlineProps extends IBaseProps {
  size?: 1 | 2 | 3 | 4 | 5;
  variant?: 'primary' | 'brand' | 'tertiary' | 'secondary' | 'spanish';
}

const config: any = {
  h1: {
    fontSize: 2.5,
    lineHeight: 3.25,
    md: {
      fontSize: 3,
      lineHeight: 3.5,
    },
    lg: {
      fontSize: 4.25,
      lineHeight: 5.5,
    },
    fontWeight: 300,
  },
  h2: {
    fontSize: 1.875,
    lineHeight: 2.5,
    md: {
      fontSize: 2.5,
      lineHeight: 3.25,
    },
    lg: {
      fontSize: 3,
      lineHeight: 4,
    },
    fontWeight: 400,
  },
  h3: {
    fontSize: 1.5,
    lineHeight: 2,
    md: {
      fontSize: 2,
      lineHeight: 2.5,
    },
    lg: {
      fontSize: 2.125,
      lineHeight: 3,
    },
    fontWeight: 400,
  },
  h4: {
    fontSize: 1.3,
    lineHeight: 1.75,
    md: {
      fontSize: 1.8,
      lineHeight: 2.2,
    },
    lg: {
      fontSize: 1.5,
      lineHeight: 2,
    },
    fontWeight: 400,
  },
  h5: {
    fontSize: 1.15,
    lineHeight: 1.5,
    md: {
      fontSize: 1.35,
      lineHeight: 1.75,
    },
    lg: {
      fontSize: 1.25,
      lineHeight: 1.8,
    },
    fontWeight: 500,
  },
};

export const headlinesTheme = {
  getFontSize(size: number = 1, media?: 'md' | 'lg') {
    return media
      ? `${config[`h${size}`][media].fontSize}rem`
      : `${config[`h${size}`].fontSize}rem`;
  },
  getLineHeight(size: number = 1, media?: 'md' | 'lg') {
    return media
      ? `${config[`h${size}`][media].lineHeight}rem`
      : `${config[`h${size}`].lineHeight}rem`;
  },
  getFontWeight(size: number = 1) {
    return config[`h${size}`].fontWeight;
  },
};
