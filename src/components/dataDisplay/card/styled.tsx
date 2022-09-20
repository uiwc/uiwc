import styled from 'styled-components';
import { CardProps } from './constants';

export const CardStyled = styled.div<CardProps>`
  background-color: ${({ theme }) => theme.getColor('white')};
  border-radius: 4px;
  overflow: hidden;
  box-shadow: ${({ shadow }) =>
    shadow ? '0px 2px 4px rgba(0, 0, 0, 0.161)' : 'none'};

  *:last-child {
    margin-bottom: 0;
  }
`;

export const CardHeaderStyled = styled.div`
  background-color: ${({ theme }) => theme.getColor('year1')};
  padding: ${({ theme }) => theme.getSpacer(4)};
`;

export const CardBodyStyled = styled.div`
  padding: ${({ theme }) => theme.getSpacer(4)};
`;

export const CardFooterStyled = styled.div`
  background-color: ${({ theme }) => theme.getColor('light')};
  padding: ${({ theme }) => theme.getSpacer(4)};
`;
