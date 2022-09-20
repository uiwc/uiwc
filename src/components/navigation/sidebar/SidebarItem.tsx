import { useCallback } from 'react';
import { Utils } from '../../../utils';
import { SidebarItemProps } from './constants';
import {
  SidebarItemAnchorStyled,
  SidebarItemButtonStyled,
  SidebarItemLinkStyled,
} from './styled';

export function SidebarItem({
  children,
  className,
  icon,
  disabled = false,
  active = false,
  to,
  href,
  target,
  hidden = false,
  onClick = () => {},
  onCloseSidebar = () => {},
  ...rest
}: SidebarItemProps) {
  const isLink = !Utils.isEmpty(to);
  const isAnchor = !Utils.isEmpty(href);
  const styles = Utils.joinClasses(className, active && 'active');

  const handleClick = useCallback(
    (e: any) => {
      onClick(e);
      onCloseSidebar();
    },
    [onClick, onCloseSidebar]
  );

  if (hidden) {
    return null;
  }

  if (isLink) {
    return (
      <SidebarItemLinkStyled
        to={to || '/'}
        onClick={handleClick}
        className={styles}
        disabled={disabled}
        {...rest}
      >
        {icon ? icon : null} {children}
      </SidebarItemLinkStyled>
    );
  }

  if (isAnchor) {
    return (
      <SidebarItemAnchorStyled
        href={href}
        target={target}
        onClick={handleClick}
        className={styles}
        disabled={disabled}
        {...rest}
      >
        {icon ? icon : null} {children}
      </SidebarItemAnchorStyled>
    );
  }

  return (
    <SidebarItemButtonStyled
      type="button"
      onClick={handleClick}
      className={styles}
      disabled={disabled}
      {...rest}
    >
      {icon ? icon : null} {children}
    </SidebarItemButtonStyled>
  );
}
