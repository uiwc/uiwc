import styled from 'styled-components';

export const CollapserStyled = styled.div`
  div[type='button'] {
    appearance: none;
    background-color: white;
    background: white;
    border-radius: 0;
    outline: none;
    box-shadow: none;
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.getColor('light')};

    &:focus,
    &:active,
    &:hover {
      outline: none;
      box-shadow: none;
    }
  }
`;

export const CollapserContentStyled = styled.div`
  *:last-child {
    margin-bottom: 0;
  }
`;
