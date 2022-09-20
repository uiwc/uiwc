import { useCallback } from 'react';
import { Utils } from '../../../utils';
import { DropdownItemProps } from './constants';
import {
  ItemAnchorStyled,
  ItemButtonStyled,
  ItemLinkStyled,
  ItemWrapperStyled,
} from './styled';

export function DropdownItem({
  children,
  className,
  icon,
  disabled = false,
  active = false,
  autoWidth = false,
  to,
  href,
  target,
  value,
  hidden = false,
  onClick = (value: any) => {},
  onCloseDropdown = () => {},
  ...rest
}: DropdownItemProps) {
  const isLink = !Utils.isEmpty(to);
  const isAnchor = !Utils.isEmpty(href);
  const styles = Utils.joinClasses(className, active && 'active');

  const handleClick = useCallback(
    (e: any) => {
      onClick(value);
      onCloseDropdown();
    },
    [onClick, onCloseDropdown, value]
  );

  if (hidden) {
    return null;
  }

  if (isLink) {
    return (
      <ItemWrapperStyled>
        <ItemLinkStyled
          title={children}
          to={to || '/'}
          onClick={handleClick}
          className={styles}
          disabled={disabled}
          autoWidth={autoWidth}
          {...rest}
        >
          {icon ? icon : null} {children}
        </ItemLinkStyled>
      </ItemWrapperStyled>
    );
  }

  if (isAnchor) {
    return (
      <ItemWrapperStyled>
        <ItemAnchorStyled
          title={children}
          href={href}
          target={target}
          onClick={handleClick}
          className={styles}
          disabled={disabled}
          autoWidth={autoWidth}
          {...rest}
        >
          {icon ? icon : null} {children}
        </ItemAnchorStyled>
      </ItemWrapperStyled>
    );
  }

  return (
    <ItemWrapperStyled>
      <ItemButtonStyled
        title={Utils.isString(children) ? children : ''}
        type="button"
        onClick={handleClick}
        className={styles}
        disabled={disabled}
        autoWidth={autoWidth}
        {...rest}
      >
        {icon ? icon : null} {children}
      </ItemButtonStyled>
    </ItemWrapperStyled>
  );
}
