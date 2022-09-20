import { i18n } from '../../../i18n/language';
import { Children } from 'react';
import { Link } from 'react-router-dom';
import { Utils } from '../../../utils';
import { Badge } from '../../dataDisplay';
import { Skeleton } from '../../feedback/skeleton/Skeleton';
import { Button } from '../../general/button';
import { Headline } from '../../general/headline';
import { Flex } from '../../layout/flex';
import { Col, Row } from '../../layout/grid/Grid';
import {
  SyllabusPisaOpportunitiesWrapperProps,
  SyllabusPisaOpportunityProps,
} from './constants';
import { SyllabusPisaOpportunityStyled } from './styled';

export function SyllabusPisaOpportunity({
  number = 0,
  total = 0,
  minGrade = 0,
  maxGrade = 0,
  grade = 0,
  date,
  isExpired = false,
  inProgress = false,
  itemsPerRow = 3,
  redirectTo = '/',
  continueTo = '/',
  detailsTo = '',
}: SyllabusPisaOpportunityProps) {
  let variant = 'text-text bg-warning';
  let level = i18n('ui.components.classroom.running');

  if (!inProgress) {
    if (grade < minGrade) {
      level = i18n('ui.components.classroom.noApproved');
      variant = 'text-white bg-error';
    } else {
      level = i18n('ui.components.classroom.approved');
      variant = 'text-white bg-success';
    }
  }

  return (
    <Col md={12 / itemsPerRow} className="mb-2">
      <SyllabusPisaOpportunityStyled>
        <div className="cs-title">
          <small className="d-block">
            {i18n('ui.components.classroom.opportunity')}{' '}
          </small>
          <Headline size={4} className="mb-0 fw-500">
            {number}/{total}
          </Headline>
        </div>

        <Flex direction="column" className="cs-level">
          <div>
            <strong>
              {i18n(
                `ui.components.classroom.${
                  isExpired
                    ? 'expired'
                    : inProgress
                    ? 'inProgress'
                    : 'presented'
                }`
              )}
              :
            </strong>{' '}
            {Utils.formatDate(date, 'dd/mmm/yyyy')}
          </div>

          {inProgress ? (
            <div className="mb-2">
              <Button
                as={Link}
                to={continueTo}
                className="fw-500"
                variant="link"
              >
                Continuar
              </Button>
            </div>
          ) : (
            <div className="mb-2">
              <div className="fw-500">
                Calificación obtenida:{' '}
                {isExpired ? (
                  <>
                    {grade}/{maxGrade}
                  </>
                ) : (
                  <Link to={redirectTo}>
                    {grade}/{maxGrade}
                  </Link>
                )}
              </div>

              <div className="fw-500">
                {isExpired || !detailsTo ? null : (
                  <Link to={detailsTo}>Ver detalles</Link>
                )}
              </div>
            </div>
          )}

          <div>
            <Badge pilled className={variant}>
              {level}
            </Badge>
          </div>
        </Flex>
      </SyllabusPisaOpportunityStyled>
    </Col>
  );
}

export function SyllabusPisaOpportunitiesWrapper({
  children,
  loading = false,
  ...rest
}: SyllabusPisaOpportunitiesWrapperProps) {
  if (loading) {
    return (
      <>
        <Skeleton.Title />

        <Row gutterWidth={7} {...rest}>
          {Array(3)
            .fill(0)
            .map((_, index: number) => (
              <Col key={index} md={12 / 3} className="mb-2">
                <Skeleton.Image height={120} />
              </Col>
            ))}
        </Row>
      </>
    );
  }

  return Children.count(children) ? (
    <Row gutterWidth={7} {...rest}>
      <Col xs={12}>
        <Headline size={4} className="mb-3">
          Oportunidades
        </Headline>
      </Col>

      {children}
    </Row>
  ) : null;
}
