import Sticky from 'react-stickynode';
import { AffixProps } from './constants';

export function Affix({
  children,
  enabled = true,
  top = 0,
  ...rest
}: AffixProps) {
  return (
    <Sticky enabled={enabled} top={top} {...rest}>
      {children}
    </Sticky>
  );
}
