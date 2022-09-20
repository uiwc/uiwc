import styled from 'styled-components';
import { ClassCardProps, ClassCardThumbnailProps } from './constants';

export const ClassCardStyled = styled.div<ClassCardProps>`
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.161);
  background-color: ${({ theme }) => theme.getColor('white')};
  margin-bottom: ${({ theme }) => theme.getSpacer(4)};

  ${({ theme }) => theme.getMediaQuery('md')} {
    height: calc(100% - ${({ theme }) => theme.getSpacer(4)});
  }
`;

export const ClassCardThumbnailStyled = styled.div<ClassCardThumbnailProps>`
  height: 140px;
  background-color: ${({ theme }) => theme.getColor('powder')};
  background-image: url('${({ src }) => src}');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom: solid 5px ${({ theme }) => theme.getColor('spanish')};
`;

export const ClassCardInfoStyled = styled.div`
  padding: ${({ theme }) => theme.getSpacer(4)};
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${({ theme }) => theme.getMediaQuery('md')} {
    /* height: calc(100% - 145px); */
  }
`;
