import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import {
  DropdownItemProps,
  DropdownProps,
  DropdownToggleProps,
} from './constants';

export const DropdownStyled = styled.div<DropdownProps>`
  position: relative;
  display: inline-block;
`;

export const DropdownToggleStyled = styled.div<DropdownToggleProps>`
  cursor: pointer;
  display: inline-block;

  &.disabled {
    pointer-events: none;
    color: ${({ theme }) => theme.getColor('spanish')};
    opacity: 1;

    svg {
      color: ${({ theme }) => theme.getColor('spanish')} !important;
    }
  }
`;

export const ItemWrapperStyled = styled.div`
  flex: 1 1 auto;
  min-width: 0;
`;

export const ItemDividerStyled = styled.div<DropdownItemProps>`
  max-width: ${({ autoWidth, width = '250px' }) =>
    autoWidth ? 'none' : width};
  overflow: hidden;
  padding: 0;
  height: 0;
  margin: 0.5rem 0;
  border-top: 1px solid ${({ theme }) => theme.getColor('platinium')};
`;

export const ItemTitleStyled = styled.div<DropdownItemProps>`
  max-width: ${({ autoWidth, width = '250px' }) =>
    autoWidth ? 'none' : width};
  padding: 1rem 1rem 0.35rem;
  color: ${({ theme }) => theme.getColor('muted')};
  line-height: ${({ theme }: any) => theme.body.lineHeight};
  font-size: 0.835rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const ItemCheckboxStyled = styled.div<DropdownItemProps>`
  max-width: ${({ autoWidth, width = '250px' }) =>
    autoWidth ? 'none' : width};
  padding: 0.6rem 1rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.getColor('text')};
  text-align: left;

  > div {
    margin: 0;
    float: left;
    margin-right: ${({ theme }) => theme.getSpacer(2)};
  }

  &:hover {
    background-color: ${({ theme }) => theme.getColor('powder')};
  }

  &.active {
    background-color: ${({ theme }) => theme.getColor('powder')};
  }

  &.disabled,
  &[disabled] {
    pointer-events: none;
    color: ${({ theme }) => theme.getColor('spanish')};
    opacity: 1;
  }
`;

export const ItemButtonStyled = styled.button<DropdownItemProps>`
  max-width: ${({ autoWidth, width = '250px' }) =>
    autoWidth ? 'none' : width};
  cursor: pointer;
  padding: 0.6rem 1rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.getColor('text')};
  border: none;
  display: block;
  width: 100%;
  text-align: left;
  background-color: ${({ theme, active }) =>
    theme.getColor(active ? 'powder' : 'white')};
  line-height: ${({ theme }: any) => theme.body.lineHeight};

  svg {
    margin-right: ${({ theme }) => theme.getSpacer(2)};
  }

  &:hover {
    background-color: ${({ theme }) => theme.getColor('powder')};
  }

  &.active {
    background-color: ${({ theme }) => theme.getColor('powder')};
  }

  &.disabled,
  &[disabled] {
    pointer-events: none;
    color: ${({ theme }) => theme.getColor('spanish')};
    opacity: 1;
  }
`;

export const ItemAnchorStyled = styled.a<DropdownItemProps>`
  max-width: ${({ autoWidth, width = '250px' }) =>
    autoWidth ? 'none' : width};
  cursor: pointer;
  padding: 0.6rem 1rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.getColor('text')};
  border: none;
  display: block;
  width: 100%;
  text-align: left;
  background-color: ${({ theme }) => theme.getColor('white')};
  text-decoration: none;
  font-weight: normal;

  svg {
    margin-right: ${({ theme }) => theme.getSpacer(2)};
  }

  &:hover {
    background-color: ${({ theme }) => theme.getColor('powder')};
    text-decoration: none;
    color: ${({ theme }) => theme.getColor('text')};
  }

  &.active {
    background-color: ${({ theme }) => theme.getColor('powder')};
  }

  &.disabled,
  &[disabled] {
    pointer-events: none;
    color: ${({ theme }) => theme.getColor('spanish')};
    opacity: 1;
  }
`;

export const ItemLinkStyled = styled(Link)<DropdownItemProps>`
  max-width: ${({ autoWidth, width = '250px' }) =>
    autoWidth ? 'none' : width};
  cursor: pointer;
  padding: 0.6rem 1rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.getColor('text')};
  border: none;
  display: block;
  width: 100%;
  text-align: left;
  background-color: ${({ theme }) => theme.getColor('white')};
  text-decoration: none;
  font-weight: normal;

  svg {
    margin-right: ${({ theme }) => theme.getSpacer(2)};
  }

  &:hover {
    background-color: ${({ theme }) => theme.getColor('powder')};
    text-decoration: none;
    color: ${({ theme }) => theme.getColor('text')};
  }

  &.active {
    background-color: ${({ theme }) => theme.getColor('powder')};
  }

  &.disabled,
  &[disabled] {
    pointer-events: none;
    color: ${({ theme }) => theme.getColor('spanish')};
    opacity: 1;
  }
`;

export const ItemCollapsibleButtonStyled = styled.button<DropdownItemProps>`
  max-width: ${({ autoWidth, width = '250px' }) =>
    autoWidth ? 'none' : width};
  cursor: pointer;
  padding: 0.6rem 1rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.getColor('text')};
  border: none;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto;
  align-items: center;
  width: 100%;
  text-align: left;
  background-color: ${({ theme, active }) =>
    theme.getColor(active ? 'powder' : 'white')};
  line-height: ${({ theme }: any) => theme.body.lineHeight};

  span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-right: ${({ theme }) => theme.getSpacer(2)};

    svg {
      margin-right: ${({ theme }) => theme.getSpacer(2)};
    }
  }

  .dui-dd-chevron {
    color: ${({ theme }) => theme.getColor('primary')};
    text-align: right;
  }

  &:hover {
    background-color: ${({ theme }) => theme.getColor('powder')};
  }

  &.disabled,
  &[disabled] {
    pointer-events: none;
    color: ${({ theme }) => theme.getColor('spanish')};
    opacity: 1;
  }
`;

const regularOverflow = css<DropdownProps>`
  overflow-x: hidden;
  overflow-y: auto;
  text-align: left;
  max-height: ${({ height = '360px' }) => height};
`;

const fixedAreaOverflow = css<DropdownProps>`
  > div.menu-wrapper {
    overflow-x: hidden;
    overflow-y: auto;
    text-align: left;
    max-height: ${({ height = '360px' }) => height};
  }
`;

export const DropdownMenuStyled = styled.div<DropdownProps>`
  margin: 0.35rem 0;
  padding: ${({ theme }) => theme.getSpacer(2)} 0;
  display: none;
  background: ${({ theme }) => theme.getColor('white')};
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.16), 0px 2px 4px rgba(0, 0, 0, 0.12),
    0px 1px 8px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  position: absolute;
  min-width: ${({ width = 'max-content' }) => width};
  z-index: ${({ theme }) => theme.getZIndex('DROPDOWN')};

  ${({ fixedArea }) => (fixedArea ? fixedAreaOverflow : regularOverflow)};

  .dui-dd-submenu {
    background-color: ${({ theme }) => theme.getColor('cultured')};

    ${ItemButtonStyled},
    ${ItemCheckboxStyled},
    ${ItemAnchorStyled},
    ${ItemLinkStyled} {
      background-color: ${({ theme }) => theme.getColor('cultured')};

      &.active,
      &:hover {
        background-color: ${({ theme }) => theme.getColor('powder')};
      }
    }

    > div > * {
      padding-left: 2rem;
    }
  }

  &.opened {
    display: flex;
    flex-direction: column;

    &.auto-width {
      min-width: 0;
      width: 100%;
    }

    &.auto-height {
      max-height: none;
    }

    &.top:not(.fixed) {
      bottom: 100%;
    }

    &.right:not(.fixed) {
      right: 0%;
    }
  }

  &.fixed {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: -99999px;
    left: -99999px;
    opacity: 0;

    &.opened {
      opacity: 1;
      top: ${({ posRef }: any) => posRef?.current?.y}px;
      left: ${({ posRef }: any) => posRef?.current?.x}px;
      transform-origin: bottom;
    }
  }
`;

export const DropdownFixedAreaWrapper = styled.div<DropdownItemProps>`
  padding: 0.6rem 1rem 1rem;
  width: 100%;
  background-color: ${({ theme }) => theme.getColor('white')};
  border-bottom: 1px solid ${({ theme }) => theme.getColor('platinium')};
`;
