import { i18n } from '../../../i18n/language';
import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Utils } from '../../../utils';
import { Badge, Tooltip } from '../../dataDisplay';
import { Collapser } from '../../dataDisplay/collapser';
import { Button, Icons } from '../../general';
import { Headline } from '../../general/headline';
import { Flex } from '../../layout/flex';
import { Visible } from '../../layout/grid';
import { SyllabusPisaProps } from './constants';
import {
  SyllabusCheckIconStyled,
  SyllabusPisaClickeableStyled,
  SyllabusPisaIconStyled,
  SyllabusWrongIconStyled,
} from './styled';

export function SyllabusPisa({
  id = '',
  vertical = false,
  open = false,
  title = '',
  time = 0,
  weight = 0,
  minGrade,
  maxGrade = 0,
  grade,
  numberOfQuestions = 0,
  limitDate,
  initDate,
  totalOpportunities = 0,
  opportunityNumber = 0,
  children,
  active = false,
  closed = false,
  inProgress = false,
  startAvailable = false,
  took = false,
  onClick = (id: string) => {},
  continueTo = '/',
  redirectTo = '/',
  isBestGrade = false,
  ...rest
}: SyllabusPisaProps) {
  const isApproved =
    grade !== undefined && minGrade !== undefined && grade >= minGrade;

  const getLabel = useCallback(
    (forceVertical = false) => {
      if (vertical || forceVertical) {
        return (
          <Flex align="center" justify="between">
            <Flex align="center">
              <Flex shrink={false}>
                {took ? (
                  isApproved ? (
                    <SyllabusCheckIconStyled vertical={vertical}>
                      <Icons.Check alone />
                    </SyllabusCheckIconStyled>
                  ) : (
                    <SyllabusWrongIconStyled vertical={vertical}>
                      <Icons.Minus alone />
                    </SyllabusWrongIconStyled>
                  )
                ) : (
                  <SyllabusPisaIconStyled vertical={vertical}>
                    <Icons.SchoolTablet />
                  </SyllabusPisaIconStyled>
                )}
              </Flex>

              <Headline size={2} className="mb-0">
                {title}
              </Headline>
            </Flex>

            {closed ? (
              <Badge
                pilled
                className={Utils.joinClasses(
                  'fs-small',
                  'ml-3',
                  'text-white',
                  isApproved ? 'bg-success' : 'bg-error'
                )}
              >
                {grade}/{maxGrade}
              </Badge>
            ) : startAvailable ? (
              <div className="ml-3">
                <Tooltip
                  placement="left"
                  text={i18n('ui.components.classroom.pisaExpiredTooltip', {
                    date: Utils.formatDate(limitDate, 'dd/mmm/yyyy'),
                  })}
                >
                  <span>
                    <Icons.Alert warning className="fs-2" />
                  </span>
                </Tooltip>
              </div>
            ) : inProgress ? (
              <div className="ml-3">
                <Tooltip
                  placement="left"
                  text={i18n('ui.components.classroom.pisaInProgress')}
                >
                  <Badge pilled className="fs-small ml-3 text-text bg-warning">
                    {i18n('ui.components.classroom.running')}
                  </Badge>
                </Tooltip>
              </div>
            ) : null}
          </Flex>
        );
      }

      return (
        <>
          <Flex align="center">
            <Flex shrink={false}>
              {took ? (
                isApproved ? (
                  <SyllabusCheckIconStyled vertical={vertical}>
                    <Icons.Check alone />
                  </SyllabusCheckIconStyled>
                ) : (
                  <SyllabusWrongIconStyled vertical={vertical}>
                    <Icons.Minus alone />
                  </SyllabusWrongIconStyled>
                )
              ) : (
                <SyllabusPisaIconStyled vertical={vertical}>
                  <Icons.SchoolTablet />
                </SyllabusPisaIconStyled>
              )}
            </Flex>

            <Headline size={3} className="mb-0 d-flex align-items-center">
              {title}
            </Headline>
          </Flex>

          {closed ? (
            <Badge
              pilled
              className={Utils.joinClasses(
                'ml-3',
                'text-white',
                isApproved ? 'bg-success' : 'bg-error'
              )}
            >
              {grade}/{maxGrade}
            </Badge>
          ) : startAvailable ? (
            <div className="text-muted d-flex align-items-center">
              <Tooltip
                placement="left"
                text={i18n('ui.components.classroom.pisaExpiredTooltip', {
                  date: Utils.formatDate(limitDate, 'dd/mmm/yyyy'),
                })}
              >
                <span>
                  <Icons.Alert warning className="fs-3" />
                </span>
              </Tooltip>
            </div>
          ) : inProgress ? (
            <div className="text-muted d-flex align-items-center">
              <Tooltip
                placement="left"
                text={i18n('ui.components.classroom.pisaInProgress')}
              >
                <Badge pilled className="ml-3 text-text bg-warning">
                  {i18n('ui.components.classroom.running')}
                </Badge>
              </Tooltip>
            </div>
          ) : null}
        </>
      );
    },
    [
      vertical,
      took,
      isApproved,
      title,
      closed,
      grade,
      maxGrade,
      startAvailable,
      limitDate,
      inProgress,
    ]
  );

  if (vertical) {
    return (
      <SyllabusPisaClickeableStyled
        onClick={() => onClick(id)}
        className={Utils.joinClasses(active && 'active', 'px-3 py-3')}
      >
        {getLabel(true)}
      </SyllabusPisaClickeableStyled>
    );
  }

  return (
    <>
      <Visible xs sm>
        <SyllabusPisaClickeableStyled
          onClick={() => onClick(id)}
          className={Utils.joinClasses(active && 'active', 'px-3 py-3')}
        >
          {getLabel(true)}
        </SyllabusPisaClickeableStyled>
      </Visible>

      <Visible md lg xl xxl>
        <Collapser
          open={open}
          className="px-3"
          contentClassName="p-3 p-md-5"
          label={getLabel()}
        >
          <Flex
            gap={4}
            justify="between"
            className="mb-4 | flex-column flex-md-row"
          >
            <Flex direction="column">
              <p className="mb-1">
                <strong>
                  {i18n('ui.components.classroom.typeEvaluation')}:
                </strong>{' '}
                {i18n('ui.components.classroom.PISA')}
              </p>
              <p className="mb-1">
                <strong>{i18n('ui.components.classroom.limitDate')}:</strong>{' '}
                {Utils.formatDate(limitDate, 'dd/mmm/yyyy')}
              </p>
              <p className="mb-1">
                <strong>{i18n('ui.components.classroom.duration')}:</strong>{' '}
                {Utils.convertMinutesToString(time)}
              </p>
              <p className="mb-1">
                <strong>{i18n('ui.components.classroom.weight')}:</strong>{' '}
                {weight}%
              </p>
              <p className="mb-1">
                <strong>
                  {i18n('ui.components.classroom.numberOfQuestions')}:
                </strong>{' '}
                {numberOfQuestions}
              </p>
              <p className="mb-1">
                <strong>{i18n('ui.components.classroom.minGrade')}:</strong>{' '}
                {minGrade}/{maxGrade}
              </p>
              {Utils.isNumber(grade) ? (
                <p className="mb-1">
                  <strong>{i18n('ui.components.classroom.grade')}:</strong>{' '}
                  {isBestGrade ? (
                    <Link className="fw-500" to={redirectTo}>
                      {grade}/{maxGrade}
                    </Link>
                  ) : (
                    <>
                      {grade}/{maxGrade}
                    </>
                  )}
                </p>
              ) : null}
            </Flex>

            {closed ? null : (
              <Flex
                direction="column"
                align="center"
                className="order-first order-md-last"
                gap={2}
              >
                {inProgress ? (
                  <div>
                    <Button
                      as={Link}
                      to={continueTo}
                      className="w-100 w-md-auto"
                    >
                      {i18n('ui.components.classroom.continue')}
                    </Button>
                  </div>
                ) : (
                  <div>
                    {!startAvailable ? (
                      <Tooltip
                        text={i18n('ui.components.classroom.pisaTooltip', {
                          date: Utils.formatDate(initDate, 'dd/mmm/yyyy'),
                        })}
                      >
                        <span>
                          <Icons.Info filled className="fs-2 mr-2" />
                        </span>
                      </Tooltip>
                    ) : null}

                    <Button
                      className="w-100 w-md-auto"
                      onClick={() => onClick(id)}
                      disabled={!startAvailable}
                    >
                      {i18n('ui.components.classroom.startEvaluation')}
                    </Button>
                  </div>
                )}

                <small className="d-block text-muted">
                  {i18n('ui.components.classroom.opportunity')}{' '}
                  {opportunityNumber}/{totalOpportunities}
                </small>
              </Flex>
            )}
          </Flex>

          {children}
        </Collapser>
      </Visible>
    </>
  );
}
