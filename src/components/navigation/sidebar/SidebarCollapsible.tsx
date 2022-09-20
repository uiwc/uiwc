import { useCallback, useState } from 'react';
import { Icons } from '../..';
import { useCollapse } from '../../../hooks';
import { SidebarCollapsibleProps } from './constants';
import { SidebarCollapsibleStyled } from './styled';

export function SidebarCollapsible({
  label = '',
  icon,
  children,
  hidden = false,
  onClick = () => {},
  onCloseSidebar = () => {},
  ...rest
}: SidebarCollapsibleProps) {
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

  const handleClick = useCallback(
    (e: any) => {
      onClick(e);
    },
    [onClick]
  );

  if (hidden) {
    return null;
  }

  return (
    <>
      <SidebarCollapsibleStyled
        block
        {...getToggleProps({
          onClick: (e: any) => {
            setExpanded((prevExpanded) => !prevExpanded);
            handleClick(e);
          },
        })}
        {...rest}
      >
        <span>
          {icon ? icon : null} {label}
        </span>
        <div className="dui-sb-chevron">
          <Icons.Chevron direction={isExpanded ? 'up' : 'down'} />
        </div>
      </SidebarCollapsibleStyled>

      <div className="dui-sb-submenu" {...getCollapseProps()}>
        {children}
      </div>
    </>
  );
}
