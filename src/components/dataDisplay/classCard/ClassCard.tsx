import { Col, Flex, Headline, Row } from '../..';
import { Utils } from '../../../utils';
import { ClassCardProps } from './constants';
import {
  ClassCardInfoStyled,
  ClassCardStyled,
  ClassCardThumbnailStyled,
} from './styled';

export function ClassCard({
  thumbnail,
  title,
  topic,
  duration = 0,
  date,
  ...rest
}: ClassCardProps) {
  return (
    <ClassCardStyled {...rest}>
      <ClassCardThumbnailStyled src={thumbnail}></ClassCardThumbnailStyled>

      <ClassCardInfoStyled>
        <Flex justify="between" className="fs-small text-muted">
          <Flex>{Utils.formatDate(date, 'dddd, dd/mmm/yyyy')}</Flex>
          <Flex className="text-right">
            {Utils.convertMinutesToString(duration)}
          </Flex>
        </Flex>

        <Row className="mt-3">
          <Col xs={12}>
            <Headline size={5} className="fw-500 mb-0">
              {topic}
            </Headline>
            <Headline size={4} className="mb-0">
              {title}
            </Headline>
          </Col>
        </Row>
      </ClassCardInfoStyled>
    </ClassCardStyled>
  );
}
