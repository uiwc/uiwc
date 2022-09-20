import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import { useCallback, useEffect, useMemo, useRef } from 'react';
import { useLockBodyScroll } from '../../../hooks';
import { Utils } from '../../../utils';
import { Headline } from '../../general/headline';
import { Icons } from '../../general/icons';
import { ModalProps } from './constants';
import {
  BackdropStyled,
  CloseButtonStyled,
  ModalContentStyled,
  ModalWrapperStyled,
} from './styled';

export const PortalModal = ({
  children,
  closable = true,
  footer,
  open = false,
  title,
  backdropClassName,
  contentClassName,
  keyboard = true,
  backdrop = true,
  animation = true,
  type,
  onClose = (value: boolean) => {},
  ...rest
}: ModalProps) => {
  const backdropRef = useRef<any>();
  const controls = useAnimation();

  useLockBodyScroll(open);

  const backdropStyles = Utils.joinClasses(backdropClassName);

  const modalAnimation = useMemo(
    () =>
      animation
        ? {
            initial: { opacity: 0, y: '-100%' },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, scale: 0.25 },
          }
        : null,
    [animation]
  );

  const backdropAnimation = useMemo(
    () =>
      animation
        ? {
            // initial: { opacity: 0 },
            // animate: { opacity: 1 },
            // exit: { opacity: 0 },
          }
        : null,
    [animation]
  );

  const closeModal = useCallback(
    async (e: any) => {
      if (backdropRef.current === e.target) {
        if (backdrop !== 'static') {
          onClose(false);
        } else {
          await controls.start({
            scale: 1.05,
          });
          await controls.start({
            scale: 1,
          });
        }
      }
    },
    [backdrop, controls, onClose]
  );

  const keyPress = useCallback(
    (e) => {
      if (e.key === 'Escape' && open && keyboard) {
        onClose(false);
      }
    },
    [open, keyboard, onClose]
  );

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);

  const types: any = useMemo(
    () => ({
      success: <Icons.Check success className="mb-3 fs-4" />,
      error: <Icons.Cancel className="text-error mb-3 fs-4" />,
      warning: <Icons.Alert warning className="mb-3 fs-4" />,
      info: <Icons.Info filled className="mb-3 fs-4" />,
      email: <Icons.Email className="mb-3 fs-4" />,
    }),
    []
  );

  const renderModal = useCallback(() => {
    return (
      <motion.div
        key="modal-wrapper"
        transition={{ delay: 0.15 }}
        {...modalAnimation}
      >
        <ModalWrapperStyled open={open} {...rest}>
          <motion.div key="modal-content" animate={controls}>
            <ModalContentStyled className={contentClassName}>
              {closable ? (
                <CloseButtonStyled
                  aria-label="Close"
                  onClick={() => onClose(false)}
                />
              ) : null}
              {type ? types[type] : null}
              {title ? (
                <Headline size={4} className="mb-4">
                  {title}
                </Headline>
              ) : null}
              {children}
              {footer ? (
                <div className="dw-ui-modal-footer">{footer}</div>
              ) : null}
            </ModalContentStyled>
          </motion.div>
        </ModalWrapperStyled>
      </motion.div>
    );
  }, [
    children,
    closable,
    contentClassName,
    controls,
    footer,
    modalAnimation,
    onClose,
    open,
    rest,
    title,
    type,
    types,
  ]);

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {open ? (
          <motion.div key="modal-backdrop" {...backdropAnimation}>
            <BackdropStyled
              onClick={closeModal}
              ref={backdropRef}
              className={backdropStyles}
            >
              {renderModal()}
            </BackdropStyled>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
};
