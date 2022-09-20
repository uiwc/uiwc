import styled from 'styled-components';
import { BaseInputStyle } from '../common';

export const PhoneStyled = styled(BaseInputStyle).attrs({
  as: 'input',
})`
  padding: 0 16px 0 12px;
  width: 100%;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-left: none;
`;

export const PhoneSearchStyled = styled(BaseInputStyle).attrs({
  as: 'input',
})`
  width: 100%;
`;

export const PhoneWrapperStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  label {
    color: ${({ theme }) => theme.getColor('text')};
    transform: translate(-7px, -6px) scale(0.8);
    padding: 0 10px;

    &.has-error {
      color: ${({ theme }) => theme.getColor('error')};
    }
  }

  &.focused label,
  :focus-within label {
    color: ${({ theme }) => theme.getColor('primary')};

    &.has-error {
      color: ${({ theme }) => theme.getColor('error')};
    }
  }
`;

export const FlagStyled = styled.div`
  position: absolute;
  top: 12px;
  left: 14px;
  padding-right: ${({ theme }) => theme.getSpacer(2)};
  border-right: 1px solid ${({ theme }) => theme.getColor('platinium')};
`;

export const FullPhoneWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.getColor('white')};
`;

export const CodeStyled = styled.div`
  padding: 2px 0 0 80px;
  height: 48px;
  border-radius: 2px;
  display: flex;
  align-items: center;
  border: solid 1px ${({ theme }) => theme.getColor('text')};
  border-right: 0;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;

  &.focused {
    border-color: ${({ theme }) => theme.getColor('primary')};
  }

  &.has-error {
    color: ${({ theme }) => theme.getColor('error')};
    border-color: ${({ theme }) => theme.getColor('error')};
  }

  &.loading,
  &.disabled {
    color: ${({ theme }) => theme.getColor('spanish')};
    border-color: ${({ theme }) => theme.getColor('spanish')};
  }
`;
