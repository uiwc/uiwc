import { Checkbox } from '../../dataEntry/checkbox';
import { DropdownCheckboxProps } from './constants';
import { ItemCheckboxStyled, ItemWrapperStyled } from './styled';

export default function DropdownCheckbox({
  children,
  icon,
  disabled = false,
  checked = false,
  autoWidth = false,
  value,
  hidden = false,
  onChange = () => {},
  onCloseDropdown = () => {},
  ...rest
}: DropdownCheckboxProps) {
  if (hidden) {
    return null;
  }

  return (
    <ItemWrapperStyled>
      <ItemCheckboxStyled
        title={children}
        disabled={disabled}
        autoWidth={autoWidth}
        {...rest}
      >
        <Checkbox
          name="checkbox"
          disabled={disabled}
          value={checked}
          onChange={({ target }: any) =>
            onChange({ value, checked: target.checked })
          }
        />
        {icon ? icon : null} {children}
      </ItemCheckboxStyled>
    </ItemWrapperStyled>
  );
}
