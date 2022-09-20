import { LogoProps } from '../../dataDisplay/logo/constants';
import { ButtonProps } from '../../general/button/constants';
import { IBaseProps } from '../../IBaseProps';

export interface SidebarProps extends IBaseProps {
  // When true The modal will show itself.
  open?: boolean;
  // Open and close the Modal with a slide and fade animation.
  animation?: boolean;
  // Callback fired after the Modal closes
  onClose?: (value: boolean) => void;
  // Close the modal when escape key is pressed
  keyboard?: boolean;
  // Add an optional extra class name to content It could end up looking like class="modal-content foo-modal-content in".
  contentClassName?: string;
  // Add an optional extra class name to backdrop It could end up looking like class="modal-backdrop foo-modal-backdrop in".
  backdropClassName?: string;
  // Show close button at the top right position
  closable?: boolean;
  // Close sidebar when an item is clicked
  closeOnClick?: boolean;
}

export interface SidebarProfileProps extends IBaseProps {
  name: string;
  role?: string;
  avatar?: string;
  onCloseSidebar?: () => void;
  loading?: boolean;
}

export interface SidebarItemProps extends IBaseProps {
  icon?: React.ReactNode;
  disabled?: boolean;
  active?: boolean;
  to?: string;
  href?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  hidden?: boolean;
  onClick?: (e: any) => void;
  onCloseSidebar?: () => void;
}

export interface SidebarButtonProps extends ButtonProps {
  onCloseSidebar?: () => void;
}

export interface SidebarLogoProps extends LogoProps {
  onCloseSidebar?: () => void;
}

export interface SidebarCollapsibleProps extends IBaseProps {
  label?: React.ReactNode;
  icon?: React.ReactNode;
  disabled?: boolean;
  hidden?: boolean;
  onClick?: (e: any) => void;
  onCloseSidebar?: () => void;
}
