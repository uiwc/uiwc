import styled from 'styled-components';
import { GradeCardProps } from './constants';

export const GradeCardStyled = styled.div<GradeCardProps>`
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.161);
  background-color: ${({ theme }) => theme.getColor('white')};
  margin-bottom: ${({ theme }) => theme.getSpacer(4)};

  ${({ theme }) => theme.getMediaQuery('md')} {
    height: 100%;
  }
`;

export const GradeCardInfoStyled = styled.div`
  padding: ${({ theme }) => theme.getSpacer(4)};
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${({ theme }) => theme.getMediaQuery('md')} {
    height: calc(100%);
  }
`;
