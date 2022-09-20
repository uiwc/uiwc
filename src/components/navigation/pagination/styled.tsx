import styled from 'styled-components';

export const PaginationStyled = styled.div`
  display: flex;
  align-items: center;
  line-height: 1;

  .dropdown {
    display: none;
  }

  &.disabled {
    pointer-events: none;
    opacity: 0.6;
  }

  ${({ theme }) => theme.getMediaQuery('md')} {
    font-size: 0.9rem;

    .dropdown {
      display: inline-block;
      margin-left: ${({ theme }) => theme.getSpacer(3)};
    }
  }
`;

export const PaginationPagerStyled = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;

  ${({ theme }) => theme.getMediaQuery('md')} {
    width: auto;
    justify-content: flex-start;
  }

  li {
    margin: 0 5px;
    border-radius: 4px;
    font-weight: 500;
    color: ${({ theme }) => theme.getColor('primary')};
    cursor: pointer;
    text-align: center;

    &.disabled {
      color: ${({ theme }) => theme.getColor('muted')};
      pointer-events: none;
    }

    &.number {
      padding: 10px 13px;

      ${({ theme }) => theme.getMediaQuery('md')} {
        padding: 3px 5px;
      }

      &.active {
        background-color: ${({ theme }) => theme.getColor('powder')};
        pointer-events: none;
      }

      &:hover {
        background-color: ${({ theme }) => theme.getColor('platinium')};
      }
    }

    &.move-btn {
      span {
        display: none;

        ${({ theme }) => theme.getMediaQuery('md')} {
          display: inline-block;
        }
      }
    }
  }
`;
