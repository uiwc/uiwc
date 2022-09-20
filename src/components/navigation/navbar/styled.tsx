import styled from 'styled-components';
import { MenuIcon } from '../../general/icons';
import { Container } from '../../layout/grid';
import { DropdownToggleStyled } from '../dropdown/styled';
import { NavbarProps } from './constants';

export const NavbarStyled = styled.nav<NavbarProps>`
  height: 70px;
  max-height: 70px;
  font-size: 1rem;
  font-weight: 500;
  background-color: ${({ theme }) => theme.getColor('white')};
  filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.161));
  grid-area: navbar;
  max-width: 100vw;
  /* overflow-x: hidden; */
  /* overflow-y: auto; */
`;

export const ContainerStyled = styled(Container)`
  height: 100%;
`;

export const NavbarWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: inline-flex;
    align-items: center;
  }
`;

export const MenuIconStyled = styled(MenuIcon)`
  font-size: 1.5rem;
  cursor: pointer;
`;

export const NavbarItemStyled = styled.li`
  display: flex;

  > a,
  ${DropdownToggleStyled} {
    padding: 0.7rem 0.8rem 0.656rem;
    border-radius: 4px;
    color: ${({ theme }) => theme.getColor('primary')};
    display: inline-grid;
    grid-auto-flow: column;
    align-items: center;
    justify-content: center;
    grid-gap: ${({ theme }) => theme.getSpacer(2)};

    &:hover {
      background-color: ${({ theme }) => theme.getColor('cultured')};
      text-decoration: none;
    }
  }

  &:last-child {
    margin-right: 0;
  }
`;
