import styled from 'styled-components';
import { Utils } from '../../../utils';
import { CloseIcon } from '../../general/icons';
import { position } from './helpers';

export const PopoverStyled = styled.div`
  background-color: #fbfbfb;
  border-radius: 4px;
  display: inline-block;
  top: ${({ posRef, show }: any) => (show ? posRef?.current?.y : -9999)}px;
  left: ${({ posRef, show }: any) => (show ? posRef?.current?.x : -9999)}px;
  opacity: ${({ show }: any) => (show ? 1 : 0)};
  padding: ${({ theme }) => theme.getSpacer(4)};
  position: fixed;
  z-index: ${({ theme }) => theme.getZIndex('POPOVER')};
  max-width: ${({ maxWidth = 300 }: any) => `${maxWidth}px`};
  width: ${({ width, maxWidth = 300, fixedWidth = false }: any) =>
    fixedWidth
      ? `${maxWidth}px`
      : Utils.isString(width)
      ? width
      : `${width}px`};
  transition-property: transform, opacity;
  transition-duration: 0.06s;
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
  transition-delay: ${({ show, delay }: any) => (show ? delay : 0.02)}s;
  transform-origin: ${({ placement }: any) => position(placement).negate()};
  transform: scale(${({ show }: any) => (show ? 1 : 0.7)});
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.161);

  &.closeable {
    z-index: ${({ theme }) => theme.getZIndex('POPOVER') - 1};
    padding-top: ${({ theme }) => theme.getSpacer(6)};
  }
`;

export const CloseButtonStyled = styled(CloseIcon)`
  color: ${({ theme }) => theme.getColor('primary')};
  position: absolute;
  top: ${({ theme }) => theme.getSpacer(3)};
  right: ${({ theme }) => theme.getSpacer(3)};
  transform: scale(1.3);
  cursor: pointer;
`;
