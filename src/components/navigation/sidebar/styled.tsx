import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CloseIcon } from '../../general/icons';
import {
  SidebarItemProps,
  SidebarLogoProps,
  SidebarProfileProps,
  SidebarProps,
} from './constants';

export const SidebarBackdropStyled = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.55);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: ${({ theme }) => theme.getZIndex('BACKDROP')};
  backdrop-filter: blur(3px);
`;

export const SidebarWrapperStyled = styled.div<SidebarProps>`
  min-width: 275px;
  max-width: 275px;
  position: relative;
  z-index: ${({ theme }) => theme.getZIndex('SIDEBAR')};
  outline: none;
`;

export const CloseButtonStyled = styled(CloseIcon)`
  color: ${({ theme }) => theme.getColor('primary')};
  position: absolute;
  right: ${({ theme }) => theme.getSpacer(3)};
  top: ${({ theme }) => theme.getSpacer(3)};
  transform: scale(1.4);
  cursor: pointer;
`;

export const SidebarProfileStyled = styled.div<SidebarProfileProps>`
  max-width: 275px;
  padding: 0.6rem 1rem;
  cursor: default;

  .dui-profile-info {
    margin-left: ${({ theme }) => theme.getSpacer(3)};
    max-width: 194px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    h3 {
      margin: 0;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
`;

export const SidebarItemDividerStyled = styled.div<SidebarItemProps>`
  max-width: 275px;
  overflow: hidden;
  padding: 0;
  height: 0;
  margin: 0.5rem 0;
  border-top: 1px solid ${({ theme }) => theme.getColor('platinium')};
`;

export const SidebarItemButtonStyled = styled.button<SidebarItemProps>`
  cursor: pointer;
  padding: 0.6rem 1rem;
  max-width: 275px;
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

export const SidebarItemAnchorStyled = styled.a<SidebarItemProps>`
  cursor: pointer;
  padding: 0.6rem 1rem;
  max-width: 275px;
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

export const SidebarItemLinkStyled = styled(Link)<SidebarItemProps>`
  cursor: pointer;
  padding: 0.6rem 1rem;
  max-width: 275px;
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

export const SidebarLogoWrapperStyled = styled.div<SidebarLogoProps>``;

export const SidebarCollapsibleStyled = styled.button<SidebarItemProps>`
  cursor: pointer;
  padding: 0.6rem 1rem;
  max-width: 275px;
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

  .dui-sb-chevron {
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

    .duic-sb-chevron {
      color: ${({ theme }) => theme.getColor('spanish')};
    }
  }
`;

export const SidebarContentStyled = styled.div`
  height: 100vh;
  padding: ${({ theme }) => theme.getSpacer(5)} 0
    ${({ theme }) => theme.getSpacer(3)};
  background: ${({ theme }) => theme.getColor('white')};
  text-align: left;
  position: relative;
  box-shadow: 0px 10px 20px rgba(32, 37, 38, 0.1),
    0px 20px 50px rgba(32, 37, 38, 0.1) !important;
  overflow: auto;
  z-index: ${({ theme }) => theme.getZIndex('SIDEBAR')};

  .dui-sb-submenu {
    background-color: ${({ theme }) => theme.getColor('cultured')};

    ${SidebarItemButtonStyled},
    ${SidebarItemAnchorStyled},
    ${SidebarItemLinkStyled} {
      background-color: ${({ theme }) => theme.getColor('cultured')};

      &.active,
      &:hover {
        background-color: ${({ theme }) => theme.getColor('powder')};
      }
    }

    > * {
      padding-left: 1.6rem;
    }
  }
`;
