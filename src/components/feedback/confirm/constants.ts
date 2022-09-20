import { ModalProps } from '../modal/constants';

export interface ConfirmProps extends ModalProps {
  onConfirm: () => void;
  cancelText?: string;
  confirmText?: string;
}
