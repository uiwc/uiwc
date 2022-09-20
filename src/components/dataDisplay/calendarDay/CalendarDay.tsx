import { Flex, Utils } from '../../..';
import { i18n } from '../../../i18n/language';
import { Badge } from '../../dataDisplay/badge';
import { Headline } from '../../general';
import { CalendarEntry } from './CalendarEntry';
import { CalendarSubject } from './CalendarSubject';
import { CalendarDayProps } from './constants';
import { CalendarDayStyled } from './styled';

export function CalendarDay({ date, children, ...rest }: CalendarDayProps) {
  const isToday =
    Utils.formatDate(date, 'dd/mmm/yyyy') ===
    Utils.formatDate(new Date(), 'dd/mmm/yyyy');

  const isPast = Utils.isDateBefore(date, new Date()) && !isToday;

  return (
    <CalendarDayStyled
      className={Utils.joinClasses(isToday && 'today', isPast && 'past')}
      {...rest}
    >
      <Flex align="center">
        <Headline
          size={3}
          className={Utils.joinClasses('m-0', isPast && 'text-gunmetal')}
        >
          {Utils.formatDate(date, 'dddd dd/mmm/yyyy')}{' '}
        </Headline>

        {isToday ? (
          <Badge className="bg-warning ml-3">{i18n('ui.commons.today')}</Badge>
        ) : null}
      </Flex>

      {children}
    </CalendarDayStyled>
  );
}

CalendarDay.Subject = CalendarSubject;
CalendarDay.Entry = CalendarEntry;
