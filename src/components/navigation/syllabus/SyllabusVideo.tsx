import { i18n } from '../../../i18n/language';
import { Utils } from '../../../utils';
import { Headline } from '../../general/headline';
import { Icons } from '../../general/icons';
import { Flex } from '../../layout/flex';
import { SyllabusVideoProps } from './constants';
import {
  SyllabusCheckIconStyled,
  SyllabusSubItemStyled,
  SyllabusVideoIconStyled,
} from './styled';

export function SyllabusVideo({
  id,
  vertical = false,
  checked = false,
  active = false,
  title = '',
  time = 0,
  number = 1,
  onClick = (id: any) => {},
  className,
  ...rest
}: SyllabusVideoProps) {
  const styles = Utils.joinClasses(className, active && 'active');
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
          <SyllabusVideoIconStyled vertical={vertical}>
            <Icons.Play alone />
          </SyllabusVideoIconStyled>
        )}
      </Flex>
      <Flex direction="column">
        <Headline size={4} className="mb-1 mt-0">
          <strong>
            {i18n('ui.components.classroom.video', { number })}
            {title ? ':' : ''}
          </strong>{' '}
          {title ? <span className="text-muted">{title}</span> : ''}
        </Headline>
        <span
          className={Utils.joinClasses(
            'text-muted text-nowrap',
            vertical ? 'fs-small' : 'fs-small fs-md-0'
          )}
        >
          {Utils.convertMinutesToString(time)}
        </span>
      </Flex>
    </SyllabusSubItemStyled>
  );
}
