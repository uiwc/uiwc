import styled from 'styled-components';

export const StepperStyled = styled.ul`
  --ruleWidth: 60px;
  --negRuleWidth: var(--ruleWidth) * -1;
  --circleWidth: 32px;
  --lineWidth: 2px;

  position: relative;
  padding-left: var(--ruleWidth);
  list-style: none;
`;

export const StepStyled = styled.li`
  position: relative;
  counter-increment: list;
  min-height: var(--ruleWidth);

  .stepper-title {
    font-weight: 500;
    font-size: 1.3rem;
    margin-top: 0;
    margin-bottom: ${({ theme }) => theme.getSpacer(2)};
    cursor: pointer;
    color: ${({ theme }) => theme.getColor('spanish')};
    transition: all 0.5s ease;
  }

  .stepper-summary {
    cursor: pointer;
  }

  &:not(:last-child) {
    padding-bottom: ${({ theme }) => theme.getSpacer(4)};
  }

  &:last-child {
    &::before {
      border-color: transparent !important;
    }
  }

  &::before {
    display: inline-block;
    content: '';
    position: absolute;
    left: calc(
      var(--negRuleWidth) + ((var(--circleWidth) - var(--lineWidth)) / 2)
    );
    height: 100%;
    width: var(--lineWidth);
    border-left: var(--lineWidth) solid
      ${({ theme }) => theme.getColor('platinium')};
    transition: all 0.5s ease;
  }

  &::after {
    content: counter(list);
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: calc(var(--negRuleWidth));
    width: var(--circleWidth);
    height: var(--circleWidth);
    border-radius: 50%;
    background-color: ${({ theme }) => theme.getColor('platinium')};
    color: ${({ theme }) => theme.getColor('primary')};
    font-weight: 500;
    font-size: 90%;
    box-shadow: 0 0 0 4px #fff;
    transition: all 0.5s ease;
  }

  &.active {
    .stepper-title {
      color: ${({ theme }) => theme.getColor('text')};
      pointer-events: none;
    }

    .stepper-summary {
      pointer-events: none;
    }

    &::before {
      border-color: ${({ theme }) => theme.getColor('primary')};
    }

    &::after {
      color: ${({ theme }) => theme.getColor('white')};
      background-color: ${({ theme }) => theme.getColor('primary')};
    }
  }
`;
