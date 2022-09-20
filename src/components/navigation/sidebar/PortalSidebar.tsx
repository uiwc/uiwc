import { AnimatePresence, motion } from 'framer-motion';
import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import { useClickOutside, useLockBodyScroll } from '../../../hooks';
import { SidebarProps } from './constants';
import {
  CloseButtonStyled,
  SidebarBackdropStyled,
  SidebarContentStyled,
  SidebarWrapperStyled,
} from './styled';

export const PortalSidebar = ({
  children,
  open = false,
  animation = true,
  backdropClassName,
  keyboard = true,
  closable = true,
  contentClassName,
  closeOnClick = true,
  onClose = (value: boolean) => {},
  ...rest
}: SidebarProps) => {
  const sidebarRef = useRef<any>();
  const isOutside = useClickOutside(sidebarRef);

  useLockBodyScroll(open);

  const sidebarAnimation = useMemo(
    () =>
      animation
        ? {
            initial: { opacity: 0, x: '-100%' },
            animate: { opacity: 1, x: 0 },
            exit: { opacity: 0, x: '-100%' },
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

  const closeSidebar = useCallback(
    (e: any) => {
      if (isOutside) {
        onClose(false);
      }
    },
    [isOutside, onClose]
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

  const handleClose = useCallback(() => {
    if (closeOnClick) {
      onClose(false);
    }
  }, [closeOnClick, onClose]);

  const renderSidebar = useCallback(() => {
    return (
      <motion.div
        key="sidebar-wrapper"
        transition={{ stiffness: 100, delay: 0.08 }}
        {...sidebarAnimation}
      >
        <SidebarWrapperStyled open={open} {...rest}>
          <motion.div key="sidebar-content">
            <SidebarContentStyled className={contentClassName} ref={sidebarRef}>
              {closable ? (
                <CloseButtonStyled
                  aria-label="Close"
                  onClick={() => onClose(false)}
                />
              ) : null}

              {React.Children.map(children, (child: any) => {
                if (typeof child?.type === 'symbol') {
                  return null;
                }

                return React.createElement(child.type, {
                  ...{
                    ...child.props,
                    onCloseSidebar: handleClose,
                  },
                });
              })}
            </SidebarContentStyled>
          </motion.div>
        </SidebarWrapperStyled>
      </motion.div>
    );
  }, [
    children,
    closable,
    contentClassName,
    handleClose,
    onClose,
    open,
    rest,
    sidebarAnimation,
  ]);

  return (
    <AnimatePresence exitBeforeEnter>
      {open ? (
        <motion.div key="sidebar-backdrop" {...backdropAnimation}>
          <SidebarBackdropStyled
            onClick={closeSidebar}
            className={backdropClassName}
          >
            {renderSidebar()}
          </SidebarBackdropStyled>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};
