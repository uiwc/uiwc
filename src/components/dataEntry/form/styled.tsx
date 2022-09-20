import styled from 'styled-components';

export const FormStyled = styled.form`
  .input-container {
    margin-bottom: ${({ theme }) => theme.getSpacer(4)};
  }
`;
