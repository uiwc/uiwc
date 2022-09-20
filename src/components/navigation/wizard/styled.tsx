import styled, { css } from 'styled-components';
import { BottomNavigationProps, TopNavigationProps } from './constants';

const TopStepsJustifiedStyled = css``;

const TopStepsNotJustifiedStyled = css`
  ${({ theme }) => theme.getMediaQuery('md')} {
    width: 100px;
    flex: 0 1 auto;
  }
`;

export const TopNavigationStyled = styled.div<TopNavigationProps>`
  --circleWidth: 32px;
  --lineWidth: 2px;
  --desktopGap: ${({ theme }) => theme.getSpacer(4)};
  --mobileGap: ${({ theme }) => theme.getSpacer(2)};

  display: flex;
  align-items: start;
  justify-content: ${({ align }) => align || 'space-between'};
  column-gap: var(--mobileGap);
  margin-bottom: ${({ theme }) => theme.getSpacer(4)};
  position: relative;
  overflow: hidden;

  ${({ theme }) => theme.getMediaQuery('md')} {
    column-gap: var(--desktopGap);
  }

  > div {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    cursor: pointer;
    flex: 1 1 0%;
    ${({ align }) =>
      align !== 'space-between'
        ? TopStepsNotJustifiedStyled
        : TopStepsJustifiedStyled};

    span {
      font-weight: 500;
      display: block;
      margin-top: ${({ theme }) => theme.getSpacer(2)};
      text-align: center;
    }

    button {
      appearance: none;
      border: none;
      outline: none;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.getColor('platinium')};
      color: ${({ theme }) => theme.getColor('primary')};
      font-weight: 500;
      font-size: 90%;
      box-shadow: 0 0 0 4px #fff;
      transition: all 0.5s ease;
      cursor: pointer;
      z-index: 1;
    }

    &.disabled {
      color: ${({ theme }) => theme.getColor('spanish')};
      pointer-events: none;

      button {
        background-color: ${({ theme }) => theme.getColor('light')};
        color: ${({ theme }) => theme.getColor('spanish')};
      }
    }

    &::before {
      z-index: 0;
      display: inline-block;
      content: '';
      position: absolute;
      top: calc(((var(--circleWidth) - var(--lineWidth)) / 2));
      width: calc(100% + var(--mobileGap));
      height: var(--lineWidth);
      border-top: var(--lineWidth) solid
        ${({ theme }) => theme.getColor('platinium')};
      transition: all 0.5s ease;
      transform: translateX(50%);

      ${({ theme }) => theme.getMediaQuery('md')} {
        width: calc(100% + var(--desktopGap));
      }
    }

    &.active {
      button {
        background-color: ${({ theme }) => theme.getColor('primary')};
        color: ${({ theme }) => theme.getColor('white')};
      }

      span {
        color: ${({ theme }) => theme.getColor('primary')};
        pointer-events: none;
      }

      &::before {
        border-color: ${({ theme }) => theme.getColor('primary')};
      }
    }

    &:last-child {
      &::before {
        display: none;
        border-color: transparent !important;
      }
    }
  }
`;

export const BottomNavigationStyled = styled.div<BottomNavigationProps>`
  margin-top: ${({ theme }) => theme.getSpacer(4)};
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.getMediaQuery('md')} {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;
