import React from 'react';
import { ButtonGroupProps } from './constants';
import { ButtonGroupStyled } from './styled';

export function ButtonGroup({
  children,
  justify = false,
  ...rest
}: ButtonGroupProps) {
  return (
    <ButtonGroupStyled justify={justify} {...rest}>
      {children}
    </ButtonGroupStyled>
  );
}
