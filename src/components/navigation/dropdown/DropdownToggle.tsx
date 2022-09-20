import { DropdownToggleProps } from './constants';
import { DropdownToggleStyled } from './styled';
import { ChevronIcon } from '../../general/icons';

export function DropdownToggle({
  caret = false,
  position = 'bottom',
  children,
  caretClassName,
  ...rest
}: DropdownToggleProps) {
  return (
    <DropdownToggleStyled {...rest}>
      {caret ? (
        <>
          {children}{' '}
          <ChevronIcon
            direction={position === 'bottom' ? 'down' : 'up'}
            className={caretClassName}
          />
        </>
      ) : (
        children
      )}
    </DropdownToggleStyled>
  );
}
