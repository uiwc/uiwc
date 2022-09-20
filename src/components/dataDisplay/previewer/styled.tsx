import styled, { css } from 'styled-components';
import { PreviewerProps } from './constants';

export const PreviewerStyled = styled.div<PreviewerProps>`
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
  min-height: 200px;
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
        background-color: rgba(0, 0, 0, 0.6);
        border-radius: 4px;
      }
    `}

  button {
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
`;
