import { Link } from 'react-router-dom';
import { Headline, Pie, Skeleton } from '../..';
import { useMatchMedia } from '../../../hooks';
import { i18n } from '../../../i18n/language';
import { Utils } from '../../../utils';
import { GradeCardProps } from './constants';
import { GradeCardInfoStyled, GradeCardStyled } from './styled';

export function GradeCard({
  header = null,
  value = 0,
  minGrade = 0,
  maxGrade = 0,
  flat = false,
  loading = false,
  footer = null,
  showLevel = false,
  detailsTo = '',
  ...rest
}: GradeCardProps) {
  const { isMobile } = useMatchMedia();

  const finalPercentage = flat ? value : (value / maxGrade) * 100;

  let variant: any = 'default';
  let level = i18n('ui.components.classroom.none');

  if (flat) {
    if (finalPercentage > 0 && finalPercentage <= 25) {
      level = i18n('ui.components.classroom.aprentice');
      variant = 'error';
    } else if (finalPercentage > 25 && finalPercentage <= 50) {
      level = i18n('ui.components.classroom.basic');
      variant = 'error';
      // variant = 'wrong';
    } else if (finalPercentage > 50 && finalPercentage <= 75) {
      level = i18n('ui.components.classroom.intermediate');
      variant = 'warning';
    } else if (finalPercentage > 75 && finalPercentage <= 100) {
      level = i18n('ui.components.classroom.advanced');
      variant = 'success';
    }
  } else {
    if (value < minGrade) {
      level = i18n('ui.components.classroom.noApproved');
      variant = 'error';
    } else if (value >= minGrade) {
      level = i18n('ui.components.classroom.approved');
      variant = 'success';
    }
  }

  return loading ? (
    <Skeleton.GradeCard />
  ) : (
    <GradeCardStyled {...rest}>
      <GradeCardInfoStyled>
        <Headline size={isMobile ? 3 : 4} className="fw-500 m-0">
          {header}
        </Headline>

        <div
          className={Utils.joinClasses(
            'text-center mt-4',
            (flat || showLevel) && 'mb-4'
          )}
        >
          <Pie
            variant={variant}
            value={finalPercentage}
            text={flat ? '' : `${value}`}
            post={flat ? '%' : `/${maxGrade}`}
            size={flat ? 200 : isMobile ? 200 : 260}
            textSizePercentage={!flat && maxGrade >= 100 ? 2.1 : 2.5}
          />
        </div>

        <div className="fs-small">
          {footer}
          {showLevel ? (
            <div className="fs-0 text-center">
              <div>{level}</div>
              {flat || !detailsTo ? null : (
                <div>
                  <Link to={detailsTo}>Revisar mi evaluación</Link>
                </div>
              )}
            </div>
          ) : null}
        </div>
      </GradeCardInfoStyled>
    </GradeCardStyled>
  );
}
