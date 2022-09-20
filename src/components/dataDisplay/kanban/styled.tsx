import styled from 'styled-components';
import { KanbanProps, KanbantCardThumbnailProps } from './constants';

export const KanbanStyled = styled.div<KanbanProps>`
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  padding: ${({ theme }) => theme.getSpacer(2)};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.161);
`;

export const KanbanColumnStyled = styled.div`
  margin-right: ${({ theme }) => theme.getSpacer(2)};
  border-radius: 4px;
  flex: 1 1 100%;
  display: flex;
  flex-direction: column;
  min-width: 200px;
  max-width: 230px;

  :last-child {
    margin-right: 0;
  }
`;

export const KanbanColumnContentStyled = styled.div`
  padding: ${({ theme }) => theme.getSpacer(2)};
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.getColor('cultured')};
  border-radius: 4px;
  min-height: 280px;
  height: 100%;
`;

export const KanbanColumnHeaderStyled = styled.div`
  padding: ${({ theme }) => theme.getSpacer(2)};
  text-align: center;
  border-radius: 4px;
  margin-bottom: ${({ theme }) => theme.getSpacer(2)};
  background-color: ${({ theme }) => theme.getColor('primary')};
  color: ${({ theme }) => theme.getColor('white')};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.161);
`;

export const KanbanCardStyled = styled.div`
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.161);
  background-color: ${({ theme }) => theme.getColor('white')};
  margin-bottom: ${({ theme }) => theme.getSpacer(3)};

  :last-child {
    margin-bottom: 0;
  }
`;

export const KanbantCardThumbnailStyled = styled.div<KanbantCardThumbnailProps>`
  height: 120px;
  background-color: ${({ theme }) => theme.getColor('powder')};
  background-image: url('${({ src }) => src}');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom: solid 5px ${({ theme }) => theme.getColor('spanish')};
`;

export const KanbanCardInfoStyled = styled.div`
  padding: ${({ theme }) => theme.getSpacer(3)};
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 150px;
`;

export const GridStyled = styled.div`
  background-color: ${({ theme }) => theme.getColor('cultured')};
  padding: ${({ theme }) => theme.getSpacer(3)};
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 0.25em 0.15em;
  align-items: center;
  justify-items: center;
`;
