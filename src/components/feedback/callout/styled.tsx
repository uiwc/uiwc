import styled from 'styled-components';
import { CalloutProps, calloutsTheme } from './constants';

export const CalloutStyled = styled.div<CalloutProps>`
  background-color: ${({ variant }) => calloutsTheme.getBackground(variant)};
  color: ${({ variant }) => calloutsTheme.getText(variant)};
  border-radius: 5px;
  padding: ${({ theme }) => theme.getSpacer(4)};

  *:first-child {
    margin-top: 0;
  }

  *:last-child {
    margin-bottom: 0;
  }
`;
