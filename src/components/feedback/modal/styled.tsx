import styled from 'styled-components';
import { CloseIcon } from '../../general/icons';
import { ModalProps } from './constants';

export const BackdropStyled = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.55);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: ${({ theme }) => theme.getSpacer(5)};
  z-index: ${({ theme }) => theme.getZIndex('BACKDROP')};
  backdrop-filter: blur(3px);
  overflow-y: auto;

  > div {
    margin: 0 auto;
    max-width: 520px;
  }
`;

export const ModalWrapperStyled = styled.div<ModalProps>`
  position: relative;
  z-index: ${({ theme }) => theme.getZIndex('MODAL')};
  outline: none;
`;

export const ModalContentStyled = styled.div`
  background-color: #fff;
  padding: ${({ theme }) => theme.getSpacer(5)} !important;
  height: auto;
  overflow: auto;
  border-radius: 6px;
  box-shadow: 0px 10px 20px rgba(32, 37, 38, 0.1),
    0px 20px 50px rgba(32, 37, 38, 0.1) !important;
  z-index: ${({ theme }) => theme.getZIndex('MODAL_CONTENT')};

  .dw-ui-modal-footer {
    display: flex;
    flex-direction: column;
    margin-top: ${({ theme }) => theme.getSpacer(4)};

    ${({ theme }) => theme.getMediaQuery('md')} {
      flex-direction: row;
    }

    * {
      margin-bottom: ${({ theme }) => theme.getSpacer(2)};

      &:first-child {
        margin-bottom: 0;
      }

      ${({ theme }) => theme.getMediaQuery('md')} {
        margin-right: ${({ theme }) => theme.getSpacer(2)};
        margin-bottom: 0;

        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
`;

export const CloseButtonStyled = styled(CloseIcon)`
  color: ${({ theme }) => theme.getColor('primary')};
  position: absolute;
  right: ${({ theme }) => theme.getSpacer(5)};
  transform: scale(1.4);
  cursor: pointer;
`;
