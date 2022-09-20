import styled from 'styled-components';
import { CalendarIcon } from '../../general/icons';
import { BaseInputStyle } from '../common';
import { InputProps } from '../input/constants';

export const DatePickerStyled = styled.div`
  .react-datepicker {
    font-family: ${({ theme }: any) => theme.body.fontFamily};
    background-color: ${({ theme }) => theme.getColor('white')};
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    border: none;

    .react-datepicker__header {
      background-color: ${({ theme }) => theme.getColor('white')};
      border: none;
      padding: 0 0 ${({ theme }) => theme.getSpacer(2)};

      .react-datepicker__current-month {
        margin: ${({ theme }) => theme.getSpacer(4)};
        text-align: left;
      }

      .react-datepicker__day-names .react-datepicker__day-name {
        color: ${({ theme }) => theme.getColor('muted')};
        text-transform: uppercase;
      }
    }

    .react-datepicker__month {
      margin: ${({ theme }) => theme.getSpacer(3)};
      margin-top: 0;
    }

    .react-datepicker__triangle {
      display: none;
    }

    .react-datepicker__day-name,
    .react-datepicker__day,
    .react-datepicker__time-name {
      display: inline-block;
      width: 27px;
      line-height: 1.7rem;
      text-align: center;
      margin: 0.2rem;
    }

    .react-datepicker__day,
    .react-datepicker__month-text,
    .react-datepicker__quarter-text,
    .react-datepicker__year-text {
      color: ${({ theme }) => theme.getColor('black')};
      width: 27px;
      border-radius: 100%;

      &.react-datepicker__day--outside-month {
        color: ${({ theme }) => theme.getColor('muted')};
      }

      &:hover {
        border-radius: 100%;
      }
    }

    .react-datepicker__day--selected,
    .react-datepicker__day--in-range,
    .react-datepicker__month-text--selected,
    .react-datepicker__month-text--in-range,
    .react-datepicker__quarter-text--selected,
    .react-datepicker__quarter-text--in-range,
    .react-datepicker__year-text--selected,
    .react-datepicker__year-text--in-range {
      border-radius: 100%;
      background-color: ${({ theme }) => theme.getColor('primary')};
      color: ${({ theme }) => theme.getColor('white')};
      font-weight: normal;
    }

    .react-datepicker__day--keyboard-selected,
    .react-datepicker__month-text--keyboard-selected,
    .react-datepicker__quarter-text--keyboard-selected,
    .react-datepicker__year-text--keyboard-selected {
      border-radius: 100%;
      font-weight: normal;
      background-color: ${({ theme }) => theme.getColor('white')};
      color: ${({ theme }) => theme.getColor('black')};

      &.react-datepicker__day--outside-month {
        border: none;
      }
    }

    .react-datepicker__day--in-selecting-range,
    .react-datepicker__month-text--in-selecting-range,
    .react-datepicker__quarter-text--in-selecting-range,
    .react-datepicker__year-text--in-selecting-range {
      background-color: ${({ theme }) => theme.getColor('primary')} !important;
      color: ${({ theme }) => theme.getColor('white')} !important;
    }

    .react-datepicker__navigation {
      top: 1.3rem;

      &.react-datepicker__navigation--previous {
        left: calc(100% - 64px - 1.1rem);
      }

      &.react-datepicker__navigation--next {
        right: 1.1rem;
      }
    }

    .react-datepicker__year-read-view--down-arrow,
    .react-datepicker__month-read-view--down-arrow,
    .react-datepicker__month-year-read-view--down-arrow,
    .react-datepicker__navigation-icon::before {
      border-color: ${({ theme }) => theme.getColor('muted')};
      border-width: 2px 2px 0 0;
    }

    .react-datepicker__day--in-range {
      color: inherit;
      background-color: ${({ theme }) => theme.getColor('powder')};

      &.react-datepicker__day--range-start,
      &.react-datepicker__day--range-end {
        color: ${({ theme }) => theme.getColor('white')};
        background-color: ${({ theme }) => theme.getColor('primary')};
      }
    }

    .react-datepicker__day--in-range.react-datepicker__day--outside-month {
      background-color: ${({ theme }) => theme.getColor('light')};
    }

    .react-datepicker__day--today {
      font-weight: 500;
    }
  }
`;

export const DatePickerHeaderStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: ${({ theme }) => theme.getSpacer(4)};
  margin-bottom: ${({ theme }) => theme.getSpacer(2)};
  padding-bottom: ${({ theme }) => theme.getSpacer(2)};
  border-bottom: 2px solid ${({ theme }) => theme.getColor('primary')};

  .duic-dp-selects {
    font-size: 1.1rem;
    font-weight: 500;

    select {
      font-weight: 500;
      border: none;
      appearance: none;
      outline: none;
      cursor: pointer;
    }
  }

  .duic-dp-actions {
    button {
      appearance: none;
      border: none;
      outline: none;
      background-color: transparent;
      cursor: pointer;

      span {
        position: relative;
        top: -1 px;
        font-size: 20px;
        display: block;

        height: 9px;
        width: 9px;

        ::before {
          border-style: solid;

          content: '';
          display: block;
          height: 9px;
          width: 9px;
          position: absolute;

          border-color: #8d9092;
          border-width: 2px 2px 0 0;
          transform: rotate(45deg);

          /*
        left: -7 px; */
        }
      }

      &.prev {
        span::before {
          transform: rotate(225deg);
        }
      }
    }
  }
`;

export const DatePickerWrapperStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  label {
    color: ${({ theme }) => theme.getColor('text')};
    transform: translate(-7px, -6px) scale(0.8);
    padding: 0 10px;

    &.has-error {
      color: ${({ theme }) => theme.getColor('error')};
    }
  }

  &.focused label,
  :focus-within label {
    color: ${({ theme }) => theme.getColor('primary')};

    &.has-error {
      color: ${({ theme }) => theme.getColor('error')};
    }
  }
`;

export const CalendarIconStyled = styled(CalendarIcon)`
  font-size: 20px;
  position: absolute;
  top: 14px;
  right: 16px;
  background-color: #fff;
  cursor: pointer;
  color: ${({ theme }) => theme.getColor('primary')};

  &.has-error {
    color: ${({ theme }) => theme.getColor('error')};
  }

  &.disabled {
    color: ${({ theme }) => theme.getColor('muted')};
  }
`;

export const InputStyled = styled(BaseInputStyle).attrs({
  as: 'input',
})<InputProps>`
  &[readOnly] {
    color: ${({ theme }) => theme.getColor('spanish')};
    border-color: ${({ theme }) => theme.getColor('text')};

    :focus {
      color: ${({ theme }) => theme.getColor('text')};
      border-color: ${({ theme }) => theme.getColor('primary')};
    }

    &.has-error {
      border-color: ${({ theme }) => theme.getColor('error')};
      color: ${({ theme }) => theme.getColor('error')};
    }
  }
`;
