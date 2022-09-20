import styled from 'styled-components';
import { BackButtonProps } from './constants';

export const BackButtonStyled = styled.a<BackButtonProps>`
  display: inline-block;
  font-size: 0.875rem;
  margin-bottom: ${({ theme }) => theme.getSpacer(2)};

  div {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
`;
