import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useClickOutside } from '../../../hooks';
import { Utils } from '../../../utils';
import { DropdownProps } from './constants';
import DropdownCheckbox from './DropdownCheckbox';
import { DropdownCollapsible } from './DropdownCollapsible';
import { DropdownDivider } from './DropdownDivider';
import { DropdownItem } from './DropdownItem';
import { DropdownTitle } from './DropdownTitle';
import { DropdownToggle } from './DropdownToggle';
import {
  DropdownFixedAreaWrapper,
  DropdownMenuStyled,
  DropdownStyled,
} from './styled';

export function Dropdown({
  children,
  toggle,
  caret = false,
  position = 'bottom',
  align = 'left',
  disabled = false,
  toggleClassName,
  caretClassName,
  menuClassName,
  autoWidth = false,
  autoHeight = false,
  keepOpen = false,
  fixed = false,
  fixedArea,
  onOpen = () => {},
  onClose = () => {},
  ...rest
}: DropdownProps) {
  const [open, setOpen] = useState(false);
  const [, setPos] = useState<any>();
  const dropdownRef = useRef<any>();
  const menuRef = useRef<any>();
  const posRef = useRef<any>({ x: 0, y: 0 });
  const clickOutside = useClickOutside(dropdownRef);

  const menuStyles = Utils.joinClasses(
    'dui-dropdown-menu',
    menuClassName,
    position,
    align,
    open && 'opened',
    autoWidth && 'auto-width',
    autoHeight && 'auto-height',
    fixed && 'fixed'
  );

  const toggleStyles = Utils.joinClasses(
    'dui-dropdown-toggle',
    toggleClassName,
    disabled && 'disabled'
  );

  useEffect(() => {
    if (clickOutside) {
      if (open) {
        setOpen(false);
        onClose();
      }
    }
  }, [clickOutside, onClose, open]);

  const setPosition = useCallback(() => {
    const bb = dropdownRef?.current?.getBoundingClientRect();
    const mbb = menuRef?.current?.getBoundingClientRect();

    posRef.current = {
      x: bb.x + (align === 'right' ? bb.width - mbb.width : 0),
      y: bb.y + (position === 'top' ? -mbb.height : bb.height),
    };

    setPos(posRef.current);
  }, [align, position]);

  const handleToggle = useCallback(
    (e: any) => {
      if (fixed) {
        setPosition();
      }
      const newValue = !open;
      setOpen(newValue);

      if (newValue) {
        onOpen();
      } else {
        onClose();
      }
    },
    [fixed, open, setPosition, onOpen, onClose]
  );

  const handleClose = useCallback(() => {
    if (!keepOpen) {
      setOpen(false);
      onClose();
    }
  }, [keepOpen, onClose]);

  useEffect(() => {
    const handleScroll = () => {
      if (open) {
        if (fixed) {
          setTimeout(setPosition, 100);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [align, fixed, open, position, setPosition]);

  return (
    <DropdownStyled ref={dropdownRef} {...rest}>
      <DropdownToggle
        caret={caret}
        position={position}
        onClick={handleToggle}
        className={toggleStyles}
        caretClassName={caretClassName}
      >
        {toggle}
      </DropdownToggle>

      <DropdownMenuStyled
        {...rest}
        ref={menuRef}
        posRef={posRef}
        className={menuStyles}
        fixedArea={fixedArea}
        role="menu"
      >
        {fixedArea ? (
          <DropdownFixedAreaWrapper>{fixedArea}</DropdownFixedAreaWrapper>
        ) : null}

        <div className="menu-wrapper">
          {React.Children.map(children, (child: any) => {
            if (typeof child?.type === 'symbol') {
              return null;
            }

            return React.createElement(child.type, {
              ...{
                ...child.props,
                onCloseDropdown: handleClose,
                autoWidth,
                width: rest.width,
              },
            });
          })}
        </div>
      </DropdownMenuStyled>
    </DropdownStyled>
  );
}

Dropdown.Title = DropdownTitle;
Dropdown.Divider = DropdownDivider;
Dropdown.Item = DropdownItem;
Dropdown.Checkbox = DropdownCheckbox;
Dropdown.Collapsible = DropdownCollapsible;
