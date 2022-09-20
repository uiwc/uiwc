import styled from 'styled-components';
import { BackButtonStyled } from '../backButton/styled';
import { BreadcrumbsProps } from './constants';

export const BreadcrumbsStyled = styled.div<BreadcrumbsProps>`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  font-size: 0.875rem;
  display: flex;
  margin-bottom: ${({ theme }) => theme.getSpacer(2)};
  line-height: 1.75;

  ${BackButtonStyled} {
    font-size: 0.875rem;
    margin-bottom: 0;
  }
`;

export const BreadcrumbStyled = styled.a`
  color: ${({ theme }) => theme.getColor('spanish')};
  cursor: pointer;

  svg {
    margin-right: ${({ theme }) => theme.getSpacer(1)};
  }

  &:hover {
    color: ${({ theme }) => theme.getColor('primary')};
  }

  &[disabled],
  &.disabled {
    color: ${({ theme }) => theme.getColor('spanish')};
    pointer-events: none;
  }
`;

export const SeparatorStyled = styled.span`
  color: ${({ theme }) => theme.getColor('spanish')};
  display: inline-block;
  margin: 0 ${({ theme }) => theme.getSpacer(2)};
`;

export const TextStyled = styled.span`
  color: ${({ theme }) => theme.getColor('text')};
`;
