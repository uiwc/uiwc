import styled from 'styled-components';
import { CopierProps } from './constants';

export const CopierStyled = styled.span<CopierProps>`
  svg {
    margin-left: ${({ theme }) => theme.getSpacer(1)};
    display: inline-block;

    &.copy {
      cursor: pointer;

      &:hover {
        color: ${({ theme }) => theme.getColor('primary')};
      }
    }
  }
`;
