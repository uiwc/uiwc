import React, {
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { Utils } from '../../..';
import { PopoverProps } from './constants';
import { getPoint } from './helpers';
import { Portal } from './Portal';
import { CloseButtonStyled, PopoverStyled } from './styled';

export type PopoverHandler = {
  close: () => void;
};

export const Popover = React.forwardRef<PopoverHandler, PopoverProps>(
  (
    {
      content,
      width = 'auto',
      maxWidth = 300,
      fixedWidth = false,
      placement = 'bottom',
      offset = 5,
      delay = 0.1,
      closeable = false,
      children,
      className,
      ...rest
    }: PopoverProps,
    ref
  ) => {
    const [show, setShow] = useState(false);
    const posRef = useRef({ x: 0, y: 0 });
    const popoverRef = useRef<any>();
    const styles = Utils.joinClasses(className, closeable && 'closeable');

    const handleClick = useCallback(
      (e: MouseEvent) => {
        if (!content) {
          return;
        }
        posRef.current = getPoint(
          e.currentTarget,
          popoverRef.current,
          placement,
          offset
        );
        setShow(true);
      },
      [content, placement, offset]
    );

    const handleClose = useCallback(() => {
      if (show) {
        setShow(false);
      }
    }, [show]);

    useImperativeHandle(ref, () => ({
      close: handleClose,
    }));

    useEffect(() => {
      function handleClickOutside(event: any) {
        if (popoverRef.current && !popoverRef.current.contains(event.target)) {
          if (show && !closeable) {
            setShow(false);
          }
        }
      }
      // Bind the event listener
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [closeable, popoverRef, show]);

    return (
      <>
        {React.Children.map(children, (child: any) => {
          return React.createElement(child.type, {
            ...{
              ...child.props,
              onClick: handleClick,
            },
          });
        })}

        <Portal>
          <PopoverStyled
            ref={popoverRef}
            posRef={posRef}
            show={show}
            delay={delay}
            width={width}
            maxWidth={maxWidth}
            fixedWidth={fixedWidth}
            placement={placement}
            className={styles}
            {...rest}
          >
            {closeable ? <CloseButtonStyled onClick={handleClose} /> : null}
            {content}
          </PopoverStyled>
        </Portal>
      </>
    );
  }
);
