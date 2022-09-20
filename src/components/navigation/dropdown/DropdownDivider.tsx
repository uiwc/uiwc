import { DropdownItemProps } from './constants';
import { ItemDividerStyled } from './styled';

export function DropdownDivider({
  autoWidth = false,
  hidden = false,
  onCloseDropdown = () => {},
  ...rest
}: DropdownItemProps) {
  if (hidden) {
    return null;
  }

  return <ItemDividerStyled autoWidth={autoWidth} {...rest} />;
}
