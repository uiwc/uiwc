import { i18n } from '../../../i18n/language';
import { Utils } from '../../../utils';
import { Button, Icons } from '../../general';
import { Visible } from '../../layout';
import { Flex } from '../../layout/flex';
import { Badge } from '../badge/Badge';
import { CalendarEntryProps } from './constants';
import { CalendarEntryStyled } from './styled';

export function CalendarEntry({
  name,
  linkTo = '',
  author = '',
  isLast = false,
  syncWithGoogle = false,
  startTime,
  endTime,
  ...rest
}: CalendarEntryProps) {
  const isLive =
    !Utils.isEmpty(startTime) &&
    !Utils.isEmpty(endTime) &&
    Utils.isDateBetween(new Date(), startTime, endTime);

  return (
    <CalendarEntryStyled {...rest}>
      <Flex className="flex-column flex-md-row">
        <Flex shrink={false} className="time pt-3">
          <Flex className="time-inner">
            <div className="fs-2 fs-md-0">
              {Utils.formatDate(startTime, 'HH:MM', false)}
              {endTime ? (
                <> a {Utils.formatDate(endTime, 'HH:MM', false)}</>
              ) : null}
            </div>

            <Visible xs sm>
              {isLive ? (
                <span className="ml-2">
                  <Badge className="bg-success text-white fs-small">
                    <Icons.Sensor className="m-0 fs-1 mr-2" />
                    {i18n('ui.commons.live')}
                  </Badge>
                </span>
              ) : null}
            </Visible>
          </Flex>
        </Flex>

        <Flex
          direction="column"
          basis={100}
          className={Utils.joinClasses(
            'pt-3',
            isLast ? '' : 'border-bottom pb-3'
          )}
        >
          <div>
            <span className="d-binline-block mr-3">{name}</span>
            <Visible md lg xl xxl>
              {isLive ? (
                <Badge className="bg-success text-white fs-small">
                  <Icons.Sensor className="m-0 fs-1 mr-2" />
                  {i18n('ui.commons.live')}
                </Badge>
              ) : null}
            </Visible>
          </div>

          {author ? (
            <div>
              {i18n('ui.commons.teacher')}: {author}
            </div>
          ) : null}

          {isLive && linkTo ? (
            <div className="mt-2">
              <Button href={linkTo} target="_blank">
                {i18n('ui.components.calendarEntry.seeClass')}
              </Button>
            </div>
          ) : null}

          <Visible xs sm>
            {syncWithGoogle ? (
              <div className="mt-3">
                <Button variant="link">
                  {i18n('ui.components.calendarEntry.sync')}
                </Button>
              </div>
            ) : null}
          </Visible>
        </Flex>

        <Visible md lg xl xxl>
          {syncWithGoogle ? (
            <Flex
              shrink={false}
              className={Utils.joinClasses(
                'pt-3',
                isLast ? '' : 'border-bottom'
              )}
            >
              <div>
                <Button variant="link" className="ml-3">
                  {i18n('ui.components.calendarEntry.sync')}
                </Button>
              </div>
            </Flex>
          ) : null}
        </Visible>
      </Flex>
    </CalendarEntryStyled>
  );
}
