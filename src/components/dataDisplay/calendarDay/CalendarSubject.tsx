import { Utils } from '../../../utils';
import { Headline } from '../../general';
import { Divider } from '../../layout';
import { CalendarSubjectProps } from './constants';

export function CalendarSubject({
  date,
  subject,
  period,
  children,
  ...rest
}: CalendarSubjectProps) {
  const isToday =
    Utils.formatDate(date, 'dd/mmm/yyyy') ===
    Utils.formatDate(new Date(), 'dd/mmm/yyyy');

  const isPast = Utils.isDateBefore(date, new Date()) && !isToday;

  return (
    <>
      <Headline
        size={4}
        className={Utils.joinClasses(
          'mb-2 mt-2',
          isPast ? 'text-gunmetal' : 'text-primary'
        )}
      >
        {subject}: {period}
      </Headline>

      {children}

      <Divider className="my-4" />
    </>
  );
}
