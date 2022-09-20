import { CalloutProps } from './constants';
import { CalloutStyled } from './styled';

export function Callout({
  children,
  variant = 'default',
  ...rest
}: CalloutProps) {
  return (
    <CalloutStyled variant={variant} {...rest}>
      {children}
    </CalloutStyled>
  );
}
