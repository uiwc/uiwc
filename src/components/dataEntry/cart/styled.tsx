import styled from 'styled-components';
import { BaseInputStyle } from '../common';
import { InputProps } from '../input/constants';
import { CartItemProps } from './constants';

export const ShoppingRowStyled = styled.div<CartItemProps>`
  background-color: ${({ theme }) => theme.getColor('white')};
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.161);
  padding: ${({ theme }) => theme.getSpacer(3)}
    ${({ theme }) => theme.getSpacer(4)};
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.getSpacer(2)};

  input {
    max-width: 75px;
    text-align: center;
  }

  &.checked {
    background-color: ${({ theme }) => theme.getColor('powderer')};
  }

  ${({ theme }) => theme.getMediaQuery('md')} {
    padding: 0 ${({ theme }) => theme.getSpacer(4)};
  }
`;

export const InputStyled = styled(BaseInputStyle).attrs({
  as: 'input',
})<InputProps>``;
