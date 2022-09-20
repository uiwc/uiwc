import styled from 'styled-components';

export const FooterStyled = styled.footer`
  background-color: ${({ theme }) => theme.getColor('primary')};
  color: ${({ theme }) => theme.getColor('white')};
  font-size: 95%;
  grid-area: footer;
  max-width: 100vw;
  overflow-x: hidden;

  section#dui-footer-section {
    padding: 60px 15px;
  }

  section#dui-sub-footer-section {
    background-color: ${({ theme }) => theme.getColor('text')};
    padding: ${({ theme }) => theme.getSpacer(5)} 15px;
  }

  a {
    color: ${({ theme }: any) => theme.getColor('white')};
  }

  a:hover {
    color: ${({ theme }: any) => theme.getColor('white')};
  }

  a:not([href]):not([class]),
  a:not([href]):not([class]):hover {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin-bottom: ${({ theme }) => theme.getSpacer(3)};

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`;
