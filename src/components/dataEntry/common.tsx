import styled from 'styled-components';
import { AlertIcon, VisibilityIcon } from '../general/icons';

export const BaseInputStyle = styled.input`
  height: 48px;
  border-radius: 2px;
  padding: 16px;
  font-size: 16px;
  outline: none;
  box-shadow: none;
  line-height: 1;
  transition: all 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  border: solid 1px ${({ theme }) => theme.getColor('text')};

  :focus {
    border-color: ${({ theme }) => theme.getColor('primary')};
  }

  ::placeholder {
    color: ${({ theme }) => theme.getColor('spanish')};
  }

  &.has-error {
    border-color: ${({ theme }) => theme.getColor('error')};
    color: ${({ theme }) => theme.getColor('error')};

    &.show-error-feedback {
      padding-right: 44px;
    }
  }

  &.is-password {
    padding-right: 44px;
  }

  &.loading,
  &.disabled,
  &[disabled] {
    pointer-events: none;
    cursor: default;
    background-color: ${({ theme }) => theme.getColor('white')};
    color: ${({ theme }) => theme.getColor('spanish')};
    border-color: ${({ theme }) => theme.getColor('spanish')};
  }

  &[readOnly] {
    cursor: default;
    background-color: ${({ theme }) => theme.getColor('white')};
    color: ${({ theme }) => theme.getColor('spanish')};
    border-color: ${({ theme }) => theme.getColor('spanish')};
  }

  &[required] {
  }
`;

export const ContainerStyled = styled.div`
  margin-bottom: ${({ theme }) => theme.getSpacer(2)};
`;

export const WrapperStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  :focus-within label {
    color: ${({ theme }) => theme.getColor('primary')};
    transform: translate(-7px, -6px) scale(0.8);
    padding: 0 10px;

    &.has-error {
      color: ${({ theme }) => theme.getColor('error')};
    }

    &.readonly {
      color: ${({ theme }) => theme.getColor('spanish')};
    }
  }
`;

export const LabelStyled = styled.label`
  position: absolute;
  pointer-events: none;
  transform: translate(0, 17px) scale(1);
  transform-origin: top left;
  transition: 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  font-size: 16px;
  line-height: 1;
  left: 16px;
  color: ${({ theme }) => theme.getColor('spanish')};

  span {
    position: relative;
    z-index: 1;
  }

  ::after {
    content: '';
    position: absolute;
    top: calc(50% - 1px);
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.getColor('white')};
    z-index: 0;
  }

  &.filled {
    color: ${({ theme }) => theme.getColor('text')};
    transform: translate(-7px, -6px) scale(0.8);
    padding: 0 10px;

    &.has-error {
      color: ${({ theme }) => theme.getColor('error')};
    }
  }

  &.disabled,
  &.disabled.has-error,
  &.loading,
  &.loading.has-error,
  &.readonly {
    color: ${({ theme }) => theme.getColor('spanish')};
  }
`;

export const ErrorStyled = styled.p`
  color: ${({ theme }) => theme.getColor('error')};
  font-size: 85%;
  line-height: 16px;
  margin-top: ${({ theme }) => theme.getSpacer(2)};
  margin-bottom: 0;
`;

export const AlertIconStyled = styled(AlertIcon)`
  font-size: 20px;
  position: absolute;
  pointer-events: none;
  top: 14px;
  right: 16px;
  color: ${({ theme }) => theme.getColor('error')};

  &.is-select {
    right: 36px;
  }

  &.is-number {
  }
`;

export const VisibilityIconStyled = styled(VisibilityIcon)`
  font-size: 20px;
  position: absolute;
  top: 14px;
  right: 16px;
  cursor: pointer;
  color: ${({ theme }) => theme.getColor('primary')};

  &.has-error {
    color: ${({ theme }) => theme.getColor('error')};
  }
`;

export const HelpTextStyled = styled.small`
  margin-top: ${({ theme }) => theme.getSpacer(2)};
  font-size: 85%;
  display: block;
`;
