import styled from 'styled-components';

export const BadgeStyled = styled.div`
  display: inline-block;
  background-color: ${({ theme }) => theme.getColor('powderer')};
  border-radius: 4px;
  padding: 0.25em 0.5em;
  white-space: nowrap;
  margin-right: ${({ theme }) => theme.getSpacer(1)};
  margin-bottom: ${({ theme }) => theme.getSpacer(1)};

  &:last-child {
    margin-right: 0;
    margin-bottom: 0;
  }

  &:hover {
    background-color: ${({ theme }) => theme.getColor('powder')};
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      font-weight: 500;
    }

    svg {
      margin-left: ${({ theme }) => theme.getSpacer(2)};
      cursor: pointer;

      &:hover {
        color: ${({ theme }) => theme.getColor('primary')};
      }
    }
  }

  &.rounded-pill {
    padding: 0.25em ${({ theme }) => theme.getSpacer(3)};
    background-color: ${({ theme }) => theme.getColor('spanish')};
    color: ${({ theme }) => theme.getColor('white')};
  }

  &.disabled {
    background-color: ${({ theme }) => theme.getColor('light')};
    pointer-events: none;
  }
`;
