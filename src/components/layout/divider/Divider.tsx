import { DividerProps } from './constants';
import { DividerStyled } from './styled';

export function Divider({ children, ...rest }: DividerProps) {
  return (
    <DividerStyled {...rest}>
      {children ? <span>{children}</span> : null}
    </DividerStyled>
  );
}
