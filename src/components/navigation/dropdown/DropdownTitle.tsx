import { DropdownItemProps } from './constants';
import { ItemTitleStyled, ItemWrapperStyled } from './styled';

export function DropdownTitle({
  children,
  autoWidth = false,
  hidden = false,
  onCloseDropdown = () => {},
  ...rest
}: DropdownItemProps) {
  if (hidden) {
    return null;
  }

  return (
    <ItemWrapperStyled>
      <ItemTitleStyled title={children} autoWidth={autoWidth} {...rest}>
        {children}
      </ItemTitleStyled>
    </ItemWrapperStyled>
  );
}
