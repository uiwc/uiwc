import styled from 'styled-components';
import { Form } from '../form/Form';

export const FormStyled = styled(Form)`
  position: relative;

  input {
    padding-right: 52px;
  }

  &.clear-visible {
    input {
      padding-right: 72px;
    }
  }

  .dui-clear-search {
    cursor: pointer;
    position: absolute;
    z-index: 1;
    background-color: #fff;
    height: 46px;
    top: 1px;
    right: 52px;
  }

  button {
    position: absolute;
    top: 1px;
    right: 1px;
    height: 46px;
    border-radius: 2px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    background-color: #fff;

    &:hover {
      box-shadow: none;
    }
  }
`;
