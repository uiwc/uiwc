import styled from 'styled-components';
import { BlockProps } from './constants';

export const BlockStyled = styled.section<BlockProps>`
  background-color: ${({ highlight = false }) =>
    highlight ? '#F8F9FA' : '#fff'};
  padding: ${({ narrow = false }) => (narrow ? '25px' : '50px')} 0;

  & > *:first-child {
    margin-top: 0;
  }

  & > *:last-child {
    margin-bottom: 0;
  }

  ${({ theme }) => theme.getMediaQuery('md')} {
    padding: ${({ narrow = false }) => (narrow ? '35px' : '65px')} 0;
  }

  ${({ theme }) => theme.getMediaQuery('lg')} {
    padding: ${({ narrow = false }) => (narrow ? '40px' : '80px')} 0;
  }
`;
