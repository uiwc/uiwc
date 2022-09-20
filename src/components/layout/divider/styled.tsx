import styled from 'styled-components';

export const DividerStyled = styled.div`
  margin: ${({ theme }) => theme.getSpacer(5)} 0;
  text-align: center;
  border-bottom: solid 1px #c4c4c4;
  height: 2px;

  span {
    background-color: ${({ theme }) => theme.getColor('white')};
    padding: 2px 16px;
    position: relative;
    top: -12px;
    color: #c4c4c4;
  }
`;
