import {
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabProps,
  TabPanelProps,
  TabsProps,
} from 'react-tabs';
import styled, { css } from 'styled-components';
import { TabListProps } from './constants';

export const TabsStyled = styled(Tabs)<TabsProps>`
  -webkit-tap-highlight-color: transparent;
`;

export const TabListStyled = styled(TabList)<TabListProps>`
  display: flex;
  margin: 0;
  padding: 0;
  overflow: hidden;
  overflow-x: auto;
  white-space: nowrap;

  ${({ justify = false }) =>
    justify
      ? css`
          width: 100%;

          li {
            flex: 1 1 100%;
          }
        `
      : css`
          max-width: fit-content;
        `}

  ${({ scrollable = false }) =>
    scrollable
      ? ''
      : css`
          li {
            overflow: hidden;
            text-overflow: ellipsis;
          }
        `}

  ${({ type, theme }) =>
    type === 'pills' &&
    css`
      border-radius: 4px;
      border-bottom: none;
      background-color: ${theme.getColor('platinium')};

      li {
        height: 45px;
        padding: 0.7rem 1rem 0.656rem;
        color: ${theme.getColor('primary')};

        &:hover {
          background-color: ${theme.getColor('powder')};
        }

        &.selected {
          background-color: ${theme.getColor('primary')};
          color: ${theme.getColor('white')};
          border-radius: 4px;
        }

        &.disabled {
          background-color: ${theme.getColor('platinium')};
          color: ${theme.getColor('spanish')};
        }

        &:before {
          display: none !important;
        }
      }
    `}
`;

export const TabStyled = styled(Tab).attrs({
  selectedClassName: 'selected',
  disabledClassName: 'disabled',
})<TabProps>`
  color: ${({ theme }) => theme.getColor('spanish')};
  display: inline-block;
  align-items: center;
  justify-content: center;
  border: none;
  list-style: none;
  height: 45px;
  padding: 0.6rem 1rem 0.656rem;
  text-align: center;
  font-weight: 500;
  cursor: default;
  white-space: nowrap;

  &:hover {
    background-color: ${({ theme }) => theme.getColor('cultured')};
  }

  &.selected {
    color: ${({ theme }) => theme.getColor('primary')};
    position: relative;

    &:before {
      content: '';
      position: absolute;
      bottom: 0;
      height: 3px;
      width: calc(100% - 2rem);
      border-bottom: solid 3px ${({ theme }) => theme.getColor('primary')};
      right: 50%;
      transform: translate(50%, -50%);
    }
  }

  &.disabled {
    pointer-events: none;
    color: ${({ theme }) => theme.getColor('platinium')};
  }
`;

export const TabPanelStyled = styled(TabPanel).attrs({
  selectedClassName: 'selected',
})<TabPanelProps>`
  display: none;

  &.selected {
    display: block;
  }
`;
