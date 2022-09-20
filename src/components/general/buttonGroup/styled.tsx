import styled from 'styled-components';
import { ButtonGroupProps } from './constants';

export const ButtonGroupStyled = styled.div<ButtonGroupProps>`
  display: ${({ justify }) => (justify ? 'flex' : 'inline-flex')};

  * {
    border-radius: 0;
    margin-left: -2px;
    ${({ justify }) => (justify ? 'flex: 1 1 100%;' : '')};

    &:hover {
      z-index: 1;
    }

    &:first-child {
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }

    &:last-child {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  }
`;
