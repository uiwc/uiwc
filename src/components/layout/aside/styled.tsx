import styled from 'styled-components';
import { Utils } from '../../../utils';
import { AsideProps } from './constants';

export const AsideWrapperStyled = styled.div<AsideProps>`
  height: ${({ height }) => (Utils.isNumber(height) ? `${height}px` : height)};
  position: fixed;
  top: ${({ topOffset }) =>
    Utils.isNumber(topOffset) ? `${topOffset}px` : topOffset};
  bottom: 0;
  ${({ position }) => `${position}: 0`};
  width: ${({ width }) => (Utils.isNumber(width) ? `${width}px` : width)};
  min-width: ${({ minWidth }) =>
    Utils.isNumber(minWidth) ? `${minWidth}px` : minWidth};
  max-width: ${({ maxWidth }) =>
    Utils.isNumber(maxWidth) ? `${maxWidth}px` : maxWidth};
  z-index: ${({ theme }) => theme.getZIndex('ASIDE')};

  transform: translate3d(0px, 0px, 0px);
  visibility: visible;
  transition: transform 0.5s ease 0s, visibility 0.5s ease 0s;

  &.closed {
    transform: ${({ position }) =>
      position === 'left'
        ? 'translate3d(-100%, 0px, 0px)'
        : 'translate3d(100%, 0px, 0px)'};
    visibility: hidden;
  }
`;

export const AsideContentStyled = styled.div<AsideProps>`
  height: 100%;
  overflow-y: auto;
  background: ${({ theme }) => theme.getColor('white')};
  position: relative;
  box-shadow: 0px 10px 20px rgba(32, 37, 38, 0.1),
    0px 20px 50px rgba(32, 37, 38, 0.1) !important;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: ${({ theme }) => theme.getZIndex('ASIDE')};
`;

export const AsidePickStyled = styled.div<AsideProps>`
  position: fixed;
  top: ${({ topOffset, pickerTopOffset }) =>
    `calc(${Utils.isNumber(topOffset) ? `${topOffset}px` : topOffset} + ${
      Utils.isNumber(pickerTopOffset) ? `${pickerTopOffset}px` : pickerTopOffset
    })`};

  ${({ position, width, minWidth, maxWidth }) =>
    `${position}: clamp(${
      Utils.isNumber(minWidth) ? `${minWidth}px` : minWidth
    }, ${Utils.isNumber(width) ? `${width}px` : width}, ${
      Utils.isNumber(maxWidth) ? `${maxWidth}px` : maxWidth
    })`};

  z-index: ${({ theme }) => theme.getZIndex('ASIDE') - 1};
  ${({ position }) => `transition: ${position} 0.5s ease 0s`};

  &.closed {
    ${({ position }) => `${position}: 0`};
  }
`;
