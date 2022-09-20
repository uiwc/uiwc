import { Avatar, Col, Flex, Headline, Progress, Row, Skeleton } from '../..';
import { useMatchMedia } from '../../../hooks';
import { i18n } from '../../../i18n/language';
import { SubjectCardProps } from './constants';
import {
  SubjectCardInfoStyled,
  SubjectCardStyled,
  SubjectCardThumbnailStyled,
} from './styled';

export function SubjectCard({
  thumbnail,
  title,
  period,
  teacher,
  avatar,
  progress = 0,
  points = 0,
  maxPoints = 0,
  loading = false,
  hideProgress = false,
  footer = null,
  ...rest
}: SubjectCardProps) {
  const { isMobile } = useMatchMedia();

  return loading ? (
    <Skeleton.SubjectCard />
  ) : (
    <SubjectCardStyled {...rest}>
      <SubjectCardThumbnailStyled src={thumbnail}></SubjectCardThumbnailStyled>

      <SubjectCardInfoStyled>
        <Row>
          <Col xs={12}>
            <Headline size={isMobile ? 3 : 4} className="fw-500">
              {title}
            </Headline>
          </Col>
          <Col xs={12} className="mb-3">
            {period}
          </Col>
        </Row>

        <div>
          <Flex align="center" className="mb-3">
            <Flex shrink={false}>
              <Avatar size={30} src={avatar} className="mr-2" />
            </Flex>
            <strong className="fw-400">{teacher}</strong>
          </Flex>

          {/* Progress */}
          {hideProgress ? null : (
            <div className="text-muted">
              <Progress value={progress} className="mb-2" />
              <Flex align="center" justify="between" className="fs-small">
                <Flex>
                  {progress}% {i18n('ui.components.utils.completed')}
                </Flex>
                <Flex className="text-right">
                  {points}/{maxPoints} {i18n('ui.components.utils.accumulated')}
                </Flex>
              </Flex>
            </div>
          )}

          {footer}
        </div>
      </SubjectCardInfoStyled>
    </SubjectCardStyled>
  );
}
