import styled from 'styled-components';
import { AlertProps, alertsTheme } from './constants';

export const AlertStyled = styled.div<AlertProps>`
  background-color: ${({ variant }) => alertsTheme.getBackground(variant)};
  color: ${({ variant }) => alertsTheme.getText(variant)};
  border-radius: 5px;
  padding: ${({ theme }) => theme.getSpacer(3)};

  h5 {
    margin-bottom: 0;
  }

  *:first-child {
    margin-top: 0;
  }

  *:last-child {
    margin-bottom: 0;
  }

  .closing {
    pointer-events: none;
  }
`;
