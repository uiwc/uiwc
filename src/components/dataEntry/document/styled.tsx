import styled, { css } from 'styled-components';
import { DocumentProps } from './constants';

export const DocumentWrapperStyled = styled.div<DocumentProps>`
  border-radius: 4px;
  align-items: center;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${({ theme }) => theme.getSpacer(5)};
  position: relative;
  border: 10px solid ${({ theme }) => theme.getColor('cultured')};
  outline: 1px dashed
    ${({ theme, status }) =>
      theme.getColor(
        status === 'rejected'
          ? 'error'
          : status === 'approved'
          ? 'success'
          : 'spanish'
      )};
  margin-left: 2px;
  width: calc(100% - 4px);
  margin-bottom: 0.8rem;
  height: ${({ height }) => height}px;
  text-align: center;

  ${({ src }) =>
    src &&
    css`
      background-image: url('${src}');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: ${({ theme }) => theme.getColor('black', 0.6)};
        border-radius: 4px;
      }
    `}

  button.btn-open {
    z-index: 2;
    padding: 0;
    line-height: 1;
    border: none;
    height: auto;
    font-weight: normal;
    appearance: none;
    border: none;
    background-color: transparent;
    color: #fff;
    font-size: 1rem;
    font-weight: 500;
    outline: none;
    transition: all 0.15s ease-in-out;
    text-decoration: none;
    white-space: nowrap;
    vertical-align: middle;
    user-select: none;
    text-align: center;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }

  &.uploading {
    background-color: ${({ theme }) => theme.getColor('cultured')};
  }

  &.over {
    outline-color: ${({ theme }) => theme.getColor('primary')};
    border-color: ${({ theme }) => theme.getColor('powder')};
    background-color: ${({ theme }) => theme.getColor('powder', 0.4)};
  }

  &.has-error {
    outline-color: ${({ theme }) => theme.getColor('error')};
    border-color: ${({ theme }) => theme.getColor('platinium')};
  }
`;

export const FileChooserStyled = styled.div<DocumentProps>`
  z-index: 1;

  input {
    z-index: 0;
    cursor: pointer;
    height: 100%;
    left: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    width: 100%;

    &:focus {
      outline: none;
    }
  }

  &.filled {
    button {
      /* appearance: none;
      border: none;
      background-color: transparent;
      color: #fff;
      border-radius: 4px;
      cursor: pointer;
      font-size: 1rem;
      font-weight: 500;
      height: 45px;
      outline: none;
      padding: 0.6rem 1rem 0.656rem;
      transition: all 0.15s ease-in-out;
      text-decoration: none;
      line-height: 1.5;
      white-space: nowrap;
      vertical-align: middle;
      user-select: none;
      text-align: center;
      border: solid 2px #fff; */
    }

    button.btn-open {
      font-weight: normal;
      font-size: 0.85rem;
      position: absolute;
      left: 50%;
      bottom: 15px;
      transform: translateX(-50%);
    }
  }
`;
