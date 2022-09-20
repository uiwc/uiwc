import styled from 'styled-components';
import { Utils } from '../../..';
import {
  ProgressProps,
  progressTheme,
  ProgressValueProps,
  ProgressWrapperProps,
} from './constants';

export const ProgressWrapperStyled = styled.div<ProgressWrapperProps>`
  display: flex;
  align-items: center;
  width: ${({ width }) => (Utils.isString(width) ? width : `${width}px`)};

  > span {
    display: inline-block;
  }
`;

export const ProgressStyled = styled.div<ProgressProps>`
  height: 10px;
  width: 100%;
  background-color: ${({ variant = 'primary' }) => progressTheme[variant].bg};
  border-radius: 5px;
  overflow: hidden;
`;

export const InnerProgressStyled = styled.div<ProgressValueProps>`
  height: 100%;
  color: ${({ theme }) => theme.getColor('white')};
  background-color: ${({ variant = 'primary' }) =>
    progressTheme[variant].color};
  width: ${({ perc = 0 }) => `${perc}%`};
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6rem;
`;
