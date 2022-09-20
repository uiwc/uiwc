import styled from 'styled-components';
import { position } from './helpers';

export const TooltipStyled = styled.div`
  background-color: #343a40;
  border-radius: 4px;
  color: ${({ theme }) => theme.getColor('white')};
  display: inline-block;
  font-size: 0.8rem;
  top: ${({ posRef, show }: any) => (show ? posRef?.current?.y : -9999)}px;
  left: ${({ posRef, show }: any) => (show ? posRef?.current?.x : -9999)}px;
  opacity: ${({ show }: any) => (show ? 1 : 0)};
  padding: 0.5rem 0.7rem;
  pointer-events: none;
  position: fixed;
  z-index: ${({ theme }) => theme.getZIndex('TOOLTIP')};
  max-width: 220px;
  transition-property: transform, opacity;
  transition-duration: 0.06s;
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
  transition-delay: ${({ show, delay }: any) => (show ? delay : 0.02)}s;
  transform-origin: ${({ placement }: any) => position(placement).negate()};
  transform: scale(${({ show }: any) => (show ? 1 : 0.7)});

  &.inside-popover {
    z-index: ${({ theme }) => theme.getZIndex('POPOVER') + 1} !important;
  }
`;
