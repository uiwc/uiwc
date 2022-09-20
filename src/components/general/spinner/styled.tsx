import styled from 'styled-components';
import { SpinnerProps } from './constants';

export const DotsSpinnerStyled = styled.div<SpinnerProps>`
  display: inline-block;

  > div {
    width: ${({ size = 1 }) => size}em;
    height: ${({ size = 1 }) => size}em;
    background-color: ${({ theme, color }) => theme.getColor(color)};
    border-radius: 100%;
    display: inline-block;
    animation: bounce 1.4s infinite ease-in-out both;
    margin-left: 5px;

    :first-child {
      margin-left: 0;
    }
  }

  .bounce1 {
    animation-delay: -0.32s;
  }

  .bounce2 {
    animation-delay: -0.16s;
  }

  @keyframes bounce {
    0%,
    80%,
    100% {
      transform: scale(0);
    }
    40% {
      transform: scale(1);
    }
  }
`;

export const CircleSpinnerStyled = styled.div<SpinnerProps>`
  width: ${({ size = 1 }) => size}em;
  height: ${({ size = 1 }) => size}em;
  position: relative;
  display: inline-block;

  .child {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }

  .child:before {
    content: '';
    display: block;
    margin: 0 auto;
    width: 15%;
    height: 15%;
    background-color: ${({ theme, color }) => theme.getColor(color)};
    border-radius: 100%;
    animation: bounce 1.2s infinite ease-in-out both;
  }

  .circle2 {
    transform: rotate(30deg);
  }
  .circle3 {
    transform: rotate(60deg);
  }
  .circle4 {
    transform: rotate(90deg);
  }
  .circle5 {
    transform: rotate(120deg);
  }
  .circle6 {
    transform: rotate(150deg);
  }
  .circle7 {
    transform: rotate(180deg);
  }
  .circle8 {
    transform: rotate(210deg);
  }
  .circle9 {
    transform: rotate(240deg);
  }
  .circle10 {
    transform: rotate(270deg);
  }
  .circle11 {
    transform: rotate(300deg);
  }
  .circle12 {
    transform: rotate(330deg);
  }
  .circle2:before {
    animation-delay: -1.1s;
  }
  .circle3:before {
    animation-delay: -1s;
  }
  .circle4:before {
    animation-delay: -0.9s;
  }
  .circle5:before {
    animation-delay: -0.8s;
  }
  .circle6:before {
    animation-delay: -0.7s;
  }
  .circle7:before {
    animation-delay: -0.6s;
  }
  .circle8:before {
    animation-delay: -0.5s;
  }
  .circle9:before {
    animation-delay: -0.4s;
  }
  .circle10:before {
    animation-delay: -0.3s;
  }
  .circle11:before {
    animation-delay: -0.2s;
  }
  .circle12:before {
    animation-delay: -0.1s;
  }

  @keyframes bounce {
    0%,
    80%,
    100% {
      transform: scale(0);
    }
    40% {
      transform: scale(1);
    }
  }
`;

export const PulseSpinnerStyled = styled.div<SpinnerProps>`
  width: ${({ size = 1 }) => size}em;
  height: ${({ size = 1 }) => size}em;
  position: relative;
  display: inline-block;

  .double-bounce1,
  .double-bounce2 {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: ${({ theme, color }) => theme.getColor(color)};
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    animation: bounce 2s infinite ease-in-out;
  }

  .double-bounce2 {
    animation-delay: -1s;
  }

  @keyframes bounce {
    0%,
    100% {
      transform: scale(0);
    }
    50% {
      transform: scale(1);
    }
  }
`;
