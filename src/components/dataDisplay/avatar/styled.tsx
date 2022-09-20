import styled from 'styled-components';
import { Utils } from '../../../utils';
import { ButtonStyled } from '../../general/button/styled';
import { AvatarProps } from './constants';

const getResponsive = (responsive: any = {}, mq: string) => {
  return `
    width: ${Utils.isNumber(responsive[mq]) ? `${responsive[mq]}px` : ''};
    height: ${Utils.isNumber(responsive[mq]) ? `${responsive[mq]}px` : ''};
    font-size: ${
      Utils.isNumber(responsive[mq]) ? `${responsive[mq] * 0.35}px` : ''
    };

    svg {
      width: ${
        Utils.isNumber(responsive[mq]) ? `calc(${responsive[mq]}px - 50%)` : ''
      };
      height:${
        Utils.isNumber(responsive[mq]) ? `calc(${responsive[mq]}px - 50%)` : ''
      };
    }
  `;
};

export const AvatarStyled = styled.span<AvatarProps>`
  width: ${({ size = 24 }) => `${size}px`};
  height: ${({ size = 24 }) => `${size}px`};
  background-color: ${({ theme }) => theme.getColor('primary')};
  color: ${({ theme }) => theme.getColor('white')};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ size = 24 }) => `${+size * 0.35}px`};
  cursor: default;

  &.active {
    /* filter: sepia(86%) hue-rotate(129deg) brightness(1.13) saturate(0.62); */
    z-index: 2;
  }

  svg {
    width: ${({ size = 24 }) => `calc(${size}px - 50%)`};
    height: ${({ size = 24 }) => `calc(${size}px - 50%)`};

    &.default-icon {
      width: 100%;
      height: 100%;
      background-color: ${({ theme }) => theme.getColor('white')};
      color: ${({ theme }) => theme.getColor('primary')};
    }
  }

  > span {
    width: 100% !important;
    height: 100% !important;
  }

  ${({ theme }) => theme.getMediaQuery('sm')} {
    ${({ responsive }) => getResponsive(responsive, 'sm')};
  }

  ${({ theme }) => theme.getMediaQuery('md')} {
    ${({ responsive }) => getResponsive(responsive, 'md')};
  }

  ${({ theme }) => theme.getMediaQuery('lg')} {
    ${({ responsive }) => getResponsive(responsive, 'lg')};
  }

  ${({ theme }) => theme.getMediaQuery('xl')} {
    ${({ responsive }) => getResponsive(responsive, 'xl')};
  }

  ${({ theme }) => theme.getMediaQuery('xxl')} {
    ${({ responsive }) => getResponsive(responsive, 'xxl')};
  }
`;

export const AvatarGroupStyled = styled.div`
  display: flex;
  margin-left: 0.3em;

  ${AvatarStyled} {
    margin-left: -0.75em;
    border: solid 2px ${({ theme }) => theme.getColor('white')};
    z-index: 1;
    position: relative;
    transition: all 0.3s ease;

    :hover {
      z-index: 3;
      transform: scale(1.25);
    }

    &.active {
      border-color: ${({ theme }) => theme.getColor('secondary')};
      overflow: hidden;

      /* ::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: ${({ theme }) => theme.getColor('secondary')};
        opacity: 0.5;
      } */
    }
  }

  ${ButtonStyled} {
    position: relative;
    margin-left: -0.75em;
    z-index: 1;
    font-size: 0.8em;
    /* border: solid 2px ${({ theme }) => theme.getColor('white')}; */
  }
`;
