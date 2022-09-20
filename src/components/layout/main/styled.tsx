import styled from 'styled-components';
import { MainProps } from './constants';

export const MainStyled = styled.main.attrs({
  id: 'dui-main',
})<MainProps>`
  grid-area: main;
  max-width: 100vw;

  > section {
    &:nth-child(odd) {
      ${({ theme, striped, inverse }) =>
        striped
          ? `background-color: ${
              inverse ? '#f8f9fa' : theme.getColor('white')
            } !important`
          : ''};
    }
    &:nth-child(even) {
      ${({ theme, striped, inverse }) =>
        striped
          ? `background-color: ${
              inverse ? theme.getColor('white') : '#f8f9fa'
            } !important`
          : ''};
    }
  }
`;
