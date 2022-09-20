import styled from 'styled-components';
import { BaseInputStyle } from '../common';

export const SelectStyled = styled(BaseInputStyle).attrs({
  as: 'select',
})`
  padding: 0 16px;
  width: 100%;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 16px 12px;
  appearance: none;

  option {
    color: ${({ theme }) => theme.getColor('text')};

    &:not([value]),
    &[value=''],
    &[disabled] {
      color: ${({ theme }) => theme.getColor('spanish')};
    }
  }
`;

export const SelectWrapperStyled = styled.div`
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

  &.focused label {
    color: ${({ theme }) => theme.getColor('primary')};

    &.has-error {
      color: ${({ theme }) => theme.getColor('error')};
    }
  }
`;
