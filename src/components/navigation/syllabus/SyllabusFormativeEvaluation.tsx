import { i18n } from '../../../i18n/language';
import { Utils } from '../../../utils';
import { Progress } from '../../feedback/progress';
import { Headline } from '../../general/headline';
import { Icons } from '../../general/icons';
import { Flex } from '../../layout/flex';
import { SyllabusFormativeEvaluationProps } from './constants';
import {
  SyllabusCheckIconStyled,
  SyllabusFormativeEvaluationIconStyled,
  SyllabusSubItemStyled,
} from './styled';

export function SyllabusFormativeEvaluation({
  id,
  vertical = false,
  active = false,
  title = '',
  className,
  progress = 0,
  onClick = (id: any) => {},
  ...rest
}: SyllabusFormativeEvaluationProps) {
  const styles = Utils.joinClasses(className, active && 'active');
  let checked = false;
  let level = i18n('ui.components.classroom.none');
  let variant: any = 'default';

  if (progress > 0 && progress <= 25) {
    level = i18n('ui.components.classroom.aprentice');
    variant = 'error';
  } else if (progress > 25 && progress <= 50) {
    level = i18n('ui.components.classroom.basic');
    variant = 'error';
    // variant = 'wrong';
  } else if (progress > 50 && progress <= 75) {
    level = i18n('ui.components.classroom.intermediate');
    variant = 'warning';
  } else if (progress > 75) {
    level = i18n('ui.components.classroom.advanced');
    variant = 'success';
  }

  if (progress >= 75) {
    checked = true;
  }

  return (
    <SyllabusSubItemStyled
      className={styles}
      onClick={() => onClick(id)}
      {...rest}
    >
      <Flex shrink={false}>
        {checked ? (
          <SyllabusCheckIconStyled vertical={vertical}>
            <Icons.Check alone />
          </SyllabusCheckIconStyled>
        ) : (
          <SyllabusFormativeEvaluationIconStyled vertical={vertical}>
            <Icons.StarTablet />
          </SyllabusFormativeEvaluationIconStyled>
        )}
      </Flex>
      <Flex direction="column">
        <Headline size={4} className="mb-1 mt-0">
          <strong>
            {i18n('ui.components.classroom.formativeEvaluation')}
            {title ? ':' : ''}
          </strong>{' '}
          {title ? <span className="text-muted">{title}</span> : ''}
        </Headline>
        <span
          className={Utils.joinClasses(
            'text-muted text-nowrap d-flex',
            vertical ? 'fs-small' : 'fs-small fs-md-0'
          )}
        >
          <span className="mr-2">{progress}%</span>
          <Progress variant={variant} value={progress} width={80} />
          <strong className="ml-2">{level}</strong>
        </span>
      </Flex>
    </SyllabusSubItemStyled>
  );
}
