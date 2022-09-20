import { IBaseProps } from '../../IBaseProps';

export interface DropdownProps extends IBaseProps {
  toggle: React.ReactNode;
  caret?: boolean;
  position?: 'top' | 'bottom';
  align?: 'left' | 'right';
  toggleClassName?: string;
  caretClassName?: string;
  menuClassName?: string;
  disabled?: boolean;
  autoWidth?: boolean;
  autoHeight?: boolean;
  keepOpen?: boolean;
  fixed?: boolean;
  width?: string | null;
  height?: string | null;
  fixedArea?: React.ReactNode;
  onOpen?: () => void;
  onClose?: () => void;
}

export interface DropdownToggleProps extends IBaseProps {
  caret?: boolean;
  position?: 'top' | 'bottom';
  caretClassName?: string;
}

export interface DropdownItemProps extends IBaseProps {
  icon?: React.ReactNode;
  disabled?: boolean;
  active?: boolean;
  autoWidth?: boolean;
  to?: string;
  href?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  value?: any;
  width?: string | null;
  hidden?: boolean;
  onClick?: (e: any) => void;
  onCloseDropdown?: () => void;
}

export interface DropdownCheckboxProps extends IBaseProps {
  icon?: React.ReactNode;
  disabled?: boolean;
  checked?: boolean;
  autoWidth?: boolean;
  value?: any;
  width?: string | null;
  hidden?: boolean;
  onChange?: (e: any) => void;
  onCloseDropdown?: () => void;
}

export interface DropdownCollapsibleProps extends IBaseProps {
  label?: React.ReactNode | any;
  icon?: React.ReactNode;
  disabled?: boolean;
  autoWidth?: boolean;
  width?: string | null;
  hidden?: boolean;
  onCloseDropdown?: () => void;
}
