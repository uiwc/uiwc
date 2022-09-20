import styled from 'styled-components';
import { BaseInputStyle } from '../common';
import { InputProps } from './constants';

export const InputStyled = styled(BaseInputStyle).attrs({
  as: 'input',
})<InputProps>``;
