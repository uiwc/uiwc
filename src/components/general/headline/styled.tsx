import styled from 'styled-components';
import { HeadlineProps, headlinesTheme } from './constants';

export const HeadlineStyled = styled.h1<HeadlineProps>`
  font-family: ${({ theme }) => theme.typography.headings.fontFamily};
  font-size: ${({ size }) => headlinesTheme.getFontSize(size)};
  line-height: ${({ size }) => headlinesTheme.getLineHeight(size)};
  color: ${({ variant, theme }) => theme.getColor(variant)};
  font-weight: ${({ size }) => headlinesTheme.getFontWeight(size)};
  margin: 0 0 0.5rem;

  ${({ theme }) => theme.getMediaQuery('md')} {
    font-size: ${({ size }) => headlinesTheme.getFontSize(size, 'md')};
    line-height: ${({ size }) => headlinesTheme.getLineHeight(size, 'md')};
  }

  ${({ theme }) => theme.getMediaQuery('lg')} {
    font-size: ${({ size }) => headlinesTheme.getFontSize(size, 'lg')};
    line-height: ${({ size }) => headlinesTheme.getLineHeight(size, 'lg')};
  }
`;
