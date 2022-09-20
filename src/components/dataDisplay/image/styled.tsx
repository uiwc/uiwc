import styled from 'styled-components';
import { Utils } from '../../../utils';
import { ImageProps } from './constants';

export const ImageWrapperStyled = styled.span<ImageProps>`
  position: relative;
  display: inline-block;
  width: ${({ width }) => (Utils.isNumber(width) ? `${width}px` : width)};
  height: ${({ height }) => (Utils.isNumber(height) ? `${height}px` : height)};

  &.square {
    width: ${({ width }) => (Utils.isNumber(width) ? `${width}px` : width)};
    height: ${({ width }) => (Utils.isNumber(width) ? `${width}px` : width)};
  }
`;

export const ImageStyled = styled.img<ImageProps>`
  display: block;
  width: 100%;
  height: ${({ height }) => (Utils.isNumber(height) ? `${height}px` : height)};

  &.square {
    object-fit: cover;
    height: ${({ width }) => (Utils.isNumber(width) ? `${width}px` : width)};
  }
`;
