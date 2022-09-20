import styled from 'styled-components';

export const CodeInputStyled = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  input {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    border: 1px solid #fff;
    outline: none;
    height: 60px;
    width: 60px;
    font-size: 40px;
    text-align: center;
    margin-bottom: ${({ theme }) => theme.getSpacer(1)};
    margin-right: ${({ theme }) => theme.getSpacer(1)};

    &:last-child {
      margin-right: 0;
    }

    &:focus {
      border-color: ${({ theme }) => theme.getColor('primary')};
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
  }
`;
