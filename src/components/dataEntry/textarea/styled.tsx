import styled from 'styled-components';
import { BaseInputStyle } from '../common';
import { TextareaProps } from './constants';

export const TextareaStyled = styled(BaseInputStyle).attrs({
  as: 'textarea',
})<TextareaProps>`
  height: auto;
  min-height: 48px;
  resize: vertical;
  overflow: auto;
  line-height: 1.5;
`;
