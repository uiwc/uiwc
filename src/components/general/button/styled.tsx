import styled from 'styled-components';
import { Utils } from '../../..';
import { ButtonProps, buttonsTheme } from './constants';

export const ButtonStyled = styled.button<ButtonProps>`
  background-color: ${({ variant }) => buttonsTheme.getBackground(variant)};
  color: ${({ variant }) => buttonsTheme.getText(variant)};
  border: solid 2px ${({ variant }) => buttonsTheme.getBorder(variant)};
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  height: 48px;
  outline: none;
  padding: 0.7rem 1rem 0.656rem;
  transition: all 0.15s ease-in-out;

  display: inline-grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: center;
  grid-gap: ${({ theme }) => theme.getSpacer(2)};

  text-decoration: none;
  line-height: 1.5;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  text-align: center;

  &.circle {
    border-radius: 50%;
    height: ${({ size }) => (Utils.isNumber(size) ? `${size}px` : size)};
    width: ${({ size }) => (Utils.isNumber(size) ? `${size}px` : size)};
    padding: 0;

    svg {
      font-size: 1.5em;
    }
  }

  &.loading {
    opacity: 0.8;
    pointer-events: none;
  }

  &.block {
    width: 100%;
  }

  &:focus {
    outline: none;
  }

  &:hover {
    color: ${({ variant }) => buttonsTheme.getText(variant)};
    background-color: ${({ variant }) => buttonsTheme.getHover(variant)};
    box-shadow: ${({ variant }) => buttonsTheme.getShadow(variant)};
    opacity: 1;
    text-decoration: none;
  }

  &:active,
  &.active {
    background-color: ${({ variant }) => buttonsTheme.getActive(variant)};
    opacity: 1;
  }

  &[disabled],
  &:disabled,
  &.disabled {
    pointer-events: none;
    color: ${({ variant }) => buttonsTheme.getText(variant, true)};
    background-color: ${({ variant }) =>
      buttonsTheme.getBackground(variant, true)};
    border-color: ${({ variant }) => buttonsTheme.getBorder(variant, true)};
    opacity: 1;

    svg {
      color: ${({ theme }) => theme.getColor('spanish')} !important;
    }
  }

  &.link-variant {
    color: ${({ theme }) => theme.getColor('primary')};
    padding: 0;
    height: auto;
    font-weight: normal;

    &:hover {
      color: ${({ theme }) => theme.getColor('brand')};
      background-color: ${({ variant }) => buttonsTheme.getHover(variant)};
      opacity: 1;
      text-decoration: underline;
    }

    &[disabled],
    &:disabled,
    &.disabled {
      color: ${({ variant }) => buttonsTheme.getText(variant, true)};
    }
  }
`;
