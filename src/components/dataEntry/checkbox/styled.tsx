import styled from 'styled-components';

export const CheckboxStyled = styled.input.attrs({
  type: 'checkbox',
})`
  border-radius: 2px;
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
    background-size: 80% 80%;
    border-color: ${({ theme }) => theme.getColor('primary')};
    background-color: ${({ theme }) => theme.getColor('primary')};
    background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTEiIHZpZXdCb3g9IjAgMCAxNSAxMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik02LjE5NzUgMTAuMDRMMSA0Ljg0MjVMMi4wNTUgMy43ODc1TDYuMTk3NSA3Ljg1NUwxMy4wNTM3IDFMMTQuMTA4OCAyLjA1NUw2LjE5NzUgMTAuMDRaIiBmaWxsPSJ3aGl0ZSIgc3Ryb2tlPSJ3aGl0ZSIvPg0KPC9zdmc+DQo=');
  }

  &:indeterminate {
    background-size: 60% 60%;
    background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMyIgdmlld0JveD0iMCAwIDE0IDMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8bGluZSB5MT0iMS41IiB4Mj0iMTQiIHkyPSIxLjUiIHN0cm9rZT0iIzk3OTc5NyIgc3Ryb2tlLXdpZHRoPSIzIi8+DQo8L3N2Zz4NCg==');
  }

  &.has-error {
    border-color: ${({ theme }) => theme.getColor('error')};

    &:checked {
      background-color: ${({ theme }) => theme.getColor('error')};
    }
  }

  &.loading,
  &[disabled] {
    pointer-events: none;
    cursor: default;
    border-color: ${({ theme }) => theme.getColor('spanish')};

    &:checked {
      background-color: ${({ theme }) => theme.getColor('spanish')};
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
  color: ${({ theme }) => theme.getColor('spanish')};

  &.filled {
    color: ${({ theme }) => theme.getColor('text')};

    &.has-error {
      color: ${({ theme }) => theme.getColor('error')};
    }
  }

  &.disabled,
  &.disabled.has-error,
  &.loading,
  &.loading.has-error {
    color: ${({ theme }) => theme.getColor('spanish')};
  }
`;
