import React, { useCallback, useRef, useState } from 'react';
import { Utils } from '../../..';
import { TooltipProps } from './constants';
import { getPoint } from './helpers';
import { Portal } from './Portal';
import { TooltipStyled } from './styled';

export function Tooltip({
  text,
  inPopover = false,
  className,
  placement = 'bottom',
  offset = 10,
  delay = 0.1,
  children,
  ...rest
}: TooltipProps) {
  const [show, setShow] = useState(false);
  const posRef = useRef({ x: 0, y: 0 });
  const tooltipRef = useRef();
  const styles = Utils.joinClasses(className, inPopover && 'inside-popover');

  const handleMouseOver = useCallback(
    (e: MouseEvent) => {
      if (text === '') {
        return;
      }
      posRef.current = getPoint(
        e.currentTarget,
        tooltipRef.current,
        placement,
        offset
      );
      setShow(true);
    },
    [text, placement, offset]
  );

  const handleMouseOut = useCallback(() => {
    setShow(false);
  }, []);

  return (
    <>
      {React.Children.map(children, (child: any) => {
        return React.createElement(child.type, {
          ...{
            ...child.props,
            onMouseOver: handleMouseOver,
            onMouseOut: handleMouseOut,
          },
        });
      })}

      <Portal>
        <TooltipStyled
          ref={tooltipRef}
          posRef={posRef}
          show={show}
          delay={delay}
          placement={placement}
          className={styles}
          {...rest}
        >
          {text}
        </TooltipStyled>
      </Portal>
    </>
  );
}
