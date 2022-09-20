import { IBaseProps } from '../../IBaseProps';

export interface ModalProps extends IBaseProps {
  // Show close button at the top right position
  closable?: boolean;
  // Footer elements you want to display
  footer?: React.ReactNode;
  // Title of the modal
  title?: any;
  // Icon
  type?: 'success' | 'error' | 'warning' | 'info' | 'email';
  // When true The modal will show itself.
  open: boolean;
  // Callback fired after the Modal closes
  onClose?: (value: boolean) => void;
  // Include a backdrop component. Specify 'static' for a backdrop that doesn't trigger an "onHide" when clicked.
  backdrop?: 'static' | true;
  // Add an optional extra class name to backdrop It could end up looking like class="modal-backdrop foo-modal-backdrop in".
  backdropClassName?: string;
  // Add an optional extra class name to content It could end up looking like class="modal-content foo-modal-content in".
  contentClassName?: string;
  // Close the modal when escape key is pressed
  keyboard?: boolean;
  // Open and close the Modal with a slide and fade animation.
  animation?: boolean;
}
