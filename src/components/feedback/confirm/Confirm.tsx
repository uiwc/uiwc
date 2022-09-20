import { i18n } from '../../../i18n/language';
import React, { useCallback } from 'react';
import { Button } from '../../general/button';
import { Modal } from '../modal';
import { ConfirmProps } from './constants';

export function Confirm({
  children,
  closable = true,
  open = false,
  title,
  backdropClassName,
  contentClassName,
  keyboard = true,
  backdrop = 'static',
  animation = true,
  type,
  onClose = (value: boolean) => {},
  onConfirm,
  cancelText,
  confirmText,
  ...rest
}: ConfirmProps) {
  const handleConfirm = useCallback(() => {
    onConfirm();
    onClose(false);
  }, [onClose, onConfirm]);

  return (
    <Modal
      {...rest}
      open={open}
      onClose={onClose}
      closable={closable}
      title={title}
      backdropClassName={backdropClassName}
      contentClassName={contentClassName}
      keyboard={keyboard}
      backdrop={backdrop}
      animation={animation}
      type={type}
      footer={
        <>
          <Button variant="secondary" block onClick={() => onClose(false)}>
            {cancelText || i18n('ui.components.confirm.cancelText')}
          </Button>
          <Button
            block
            onClick={handleConfirm}
            className="order-first order-md-last"
          >
            {confirmText || i18n('ui.components.confirm.confirmText')}
          </Button>
        </>
      }
    >
      {children}
    </Modal>
  );
}
