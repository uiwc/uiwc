import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import styled from 'styled-components';

export const AccordionStyled = styled(Accordion)``;

export const AccordionItemStyled = styled(AccordionItem)`
  & + & {
  }
`;

export const AccordionItemHeadingStyled = styled(AccordionItemHeading)``;

export const AccordionItemButtonStyled = styled(AccordionItemButton)`
  background-color: ${({ theme }) => theme.getColor('primary')};
  color: ${({ theme }) => theme.getColor('white')};
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-weight: 500;
  cursor: pointer;
  min-height: 50px;
  width: 100%;
  text-align: left;
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 13px 16px;
  margin-bottom: ${({ theme }) => theme.getSpacer(3)};
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.getColor('brand')};
  }

  &:after {
    display: inline-block;
    content: '';
    min-height: 25px;
    min-width: 25px;
    background-color: ${({ theme }) => theme.getColor('white')};
    border-radius: 100%;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%232E7977' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: center 0.45rem;
    background-size: 16px 12px;
    appearance: none;
    transition: all 0.5s ease;
    margin-left: 16px;

    ${({ theme }) => theme.getMediaQuery('lg')} {
      background-color: transparent;
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23ffffff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");
      background-repeat: no-repeat;
    }
  }

  &[aria-expanded='true']::after,
  &[aria-selected='true']::after {
    transform: rotate(180deg);
  }
`;

export const AccordionItemPanelStyled = styled(AccordionItemPanel)`
  padding: ${({ theme }) => theme.getSpacer(1)} 0;
`;
