import { i18n } from '../../../i18n/language';
import { Children } from 'react';
import { Utils } from '../../../utils';
import { Skeleton } from '../../feedback';
import { Progress } from '../../feedback/progress';
import { Headline } from '../../general/headline';
import { Col, Row } from '../../layout/grid/Grid';
import {
  SyllabusPisaTopicProps,
  SyllabusPisaTopicsWrapperProps,
} from './constants';
import { SyllabusPisaTopicStyled } from './styled';

export function SyllabusPisaTopic({
  title,
  number = 0,
  progress = 0,
  itemsPerRow = 4,
  loading = false,
}: SyllabusPisaTopicProps) {
  let variant: any = 'default';
  let level = i18n('ui.components.classroom.none');

  if (progress > 0 && progress <= 25) {
    level = i18n('ui.components.classroom.aprentice');
    variant = 'error';
  } else if (progress > 25 && progress <= 50) {
    level = i18n('ui.components.classroom.basic');
    variant = 'error';
  } else if (progress > 50 && progress <= 75) {
    level = i18n('ui.components.classroom.intermediate');
    variant = 'warning';
  } else if (progress > 75) {
    level = i18n('ui.components.classroom.advanced');
    variant = 'success';
  }

  return (
    <Col md={12 / itemsPerRow} className="mb-2">
      <SyllabusPisaTopicStyled>
        <div className="cs-title">
          <Headline size={4} className="mb-2 fw-500">
            {i18n('ui.components.classroom.topic', {
              number: Utils.pad(number.toString(), 2, '0'),
            })}
          </Headline>
          <p>{title}</p>
        </div>
        <div className="cs-level">
          <strong className="d-block fs-small">{level}</strong>
          <Progress
            loading={loading}
            variant={variant}
            value={progress}
            post={<>{progress}%</>}
          />
        </div>
      </SyllabusPisaTopicStyled>
    </Col>
  );
}

export function SyllabusPisaTopicsWrapper({
  children,
  loading = false,
  ...rest
}: SyllabusPisaTopicsWrapperProps) {
  if (loading) {
    return (
      <>
        <Skeleton.Title />

        <Row gutterWidth={7} {...rest}>
          {Array(4)
            .fill(0)
            .map((_, index: number) => (
              <Col key={index} md={12 / 4} className="mb-2">
                <Skeleton.Image height={150} />
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
          Temas a evaluar
        </Headline>
      </Col>

      {children}
    </Row>
  ) : null;
}
