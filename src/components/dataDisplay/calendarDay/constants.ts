import { IBaseProps } from '../../IBaseProps';

export interface CalendarDayProps extends IBaseProps {
  date?: any;
}

export interface CalendarSubjectProps extends IBaseProps {
  date?: any;
  subject?: string;
  period?: string;
}

export interface CalendarEntryProps extends IBaseProps {
  name: string;
  date?: any;
  startTime?: any;
  endTime?: any;
  syncWithGoogle?: boolean;
  linkTo?: string;
  author?: string;
  isLast?: boolean;
}
