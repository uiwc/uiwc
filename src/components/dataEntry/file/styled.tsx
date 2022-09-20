import styled from 'styled-components';
import { FileProps } from './constants';

export const UploadStyled = styled.div<FileProps>`
  border-radius: 4px;
  align-items: center;
  background-color: transparent;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  height: ${({ height }) => height}px;
  justify-content: center;
  padding: ${({ theme }) => theme.getSpacer(5)};
  position: relative;
  border: 10px solid ${({ theme }) => theme.getColor('cultured')};
  outline: 1px dashed ${({ theme }) => theme.getColor('spanish')};
  margin-left: 2px;
  width: calc(100% - 4px);
  margin-bottom: 0.8rem;

  .remove-button {
    align-items: center;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    padding: 0;
    position: absolute;
    right: 20px;
    top: -25px;
    height: 40px;
    width: 40px;
    z-index: 2;
  }

  input {
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
    border-style: solid;
    outline: 1px solid ${({ theme }) => theme.getColor('text')};
    border-color: ${({ theme }) => theme.getColor('white')};
  }

  &.over {
    outline-color: ${({ theme }) => theme.getColor('primary')};
    border-color: ${({ theme }) => theme.getColor('powder')};
    background-color: ${({ theme }) => theme.getColor('powderer', 0.5)};
  }

  &.has-error {
    outline-color: ${({ theme }) => theme.getColor('error')};
    border-color: ${({ theme }) => theme.getColor('platinium')};
  }
`;
