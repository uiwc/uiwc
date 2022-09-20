import styled from 'styled-components';

export const RadioStyled = styled.input.attrs({
  type: 'radio',
})`
  border-radius: 100%;
  width: 24px;
  height: 24px;
  vertical-align: top;
  background-color: ${({ theme }) => theme.getColor('white')};
  background-repeat: no-repeat;
  background-position: center;
  border: 2px solid ${({ theme }) => theme.getColor('light')};
  appearance: none;
  -webkit-print-color-adjust: exact;
  color-adjust: exact;
  flex: 0 0 auto;

  &:checked {
    border-color: ${({ theme }) => theme.getColor('primary')};

    &:after {
      content: '';
      display: block;
      width: 12px;
      height: 12px;
      border-radius: 100%;
      background-color: ${({ theme }) => theme.getColor('primary')};
      position: relative;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  &.has-error {
    border-color: ${({ theme }) => theme.getColor('error')};

    &:checked {
      &:after {
        background-color: ${({ theme }) => theme.getColor('error')};
      }
    }
  }

  &.loading,
  &[disabled] {
    pointer-events: none;
    cursor: default;
    border-color: ${({ theme }) => theme.getColor('spanish')};

    &:checked {
      &:after {
        background-color: ${({ theme }) => theme.getColor('spanish')};
      }
    }
  }

  &[required] {
  }
`;

export const OptionWrapperStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  z-index: 1;

  :focus-within label {
    &.has-error {
      color: ${({ theme }) => theme.getColor('error')};
    }
  }
`;

export const OptionLabelStyled = styled.label`
  pointer-events: none;
  color: ${({ theme }) => theme.getColor('text')};

  &.has-error {
    color: ${({ theme }) => theme.getColor('error')} !important;
  }

  &.disabled,
  &.disabled.has-error,
  &.loading,
  &.loading.has-error {
    color: ${({ theme }) => theme.getColor('spanish')};
  }
`;
