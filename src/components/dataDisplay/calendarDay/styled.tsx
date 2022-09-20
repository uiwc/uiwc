import styled from 'styled-components';
import { CalendarDayProps, CalendarEntryProps } from './constants';

export const CalendarDayStyled = styled.div<CalendarDayProps>`
  &.past {
    color: ${({ theme }) => theme.getColor('gunmetal')} !important;
    pointer-events: none;
  }
`;

export const CalendarEntryStyled = styled.div<CalendarEntryProps>`
  .time {
    font-weight: 500;

    .time-inner {
      align-items: center !important;

      ${({ theme }) => theme.getMediaQuery('md')} {
        width: 145px;
        align-items: start !important;
        justify-content: center !important;
      }
    }

    ${({ theme }) => theme.getMediaQuery('md')} {
      width: 145px;
    }
  }
`;
