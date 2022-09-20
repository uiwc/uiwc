import styled from 'styled-components';
import { EmptyProps } from './constants';

export const EmptyStyled = styled.div<EmptyProps>`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  color: ${({ theme }) => theme.getColor('muted')};
  padding: ${({ theme }) => theme.getSpacer('5')};

  .dw-empty-img {
    img {
      width: 100%;
      height: auto;
    }

    + div {
      margin-top: ${({ theme }) => theme.getSpacer('3')};
    }

    ${({ theme }) => theme.getMediaQuery('md')} {
      img {
        width: ${({ size }) => {
          switch (size) {
            case 'xsmall':
              return '250px';
            case 'small':
              return '350px';
            case 'large':
              return '600px';
            case 'full':
              return '100%';
            default:
              // medium
              return '450px';
          }
        }};
        height: auto;
      }
    }
  }
`;
