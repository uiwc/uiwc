import styled from 'styled-components';
import { TestimonialsProps, TestimonyProps } from './constants';

export const TestimonyStyled = styled.div<TestimonyProps>`
  position: relative;
  padding: ${({ theme }) => theme.getSpacer(2)};
  padding-bottom: ${({ theme }) => theme.getSpacer(5)};
  display: flex;
  height: 100%;

  .testimony-wrapper {
    padding: ${({ theme }) => theme.getSpacer(6)}
      ${({ theme }) => theme.getSpacer(4)} 80px;
    position: relative;
    border: solid 1px #fff;
    background-color: #fff;
    filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.161));
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;

    blockquote {
      margin: 0 0 ${({ theme }) => theme.getSpacer(4)};

      h4 {
        margin: 0;
      }
    }

    small {
      display: block;
      text-align: center;
      margin: 0;
    }
  }

  img {
    border-radius: 100%;
    width: 80px;
    height: 80px;
    position: absolute;
    bottom: 0;
    left: calc(50% - 40px);
    background-color: ${({ theme }) => theme.getColor('primary')};
  }
`;
