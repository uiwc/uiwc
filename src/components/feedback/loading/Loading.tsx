import { i18n } from '../../../i18n/language';
import { Utils } from '../../../utils';
import { Flex } from '../../layout/flex';
import { LoadingProps } from './constants';

export function Loading({ className, ...rest }: LoadingProps) {
  const styles = Utils.joinClasses(className, 'h-100 p-4');

  return (
    <Flex align="center" justify="center" className={styles} {...rest}>
      {i18n('ui.commons.loading')}
    </Flex>
  );
}
