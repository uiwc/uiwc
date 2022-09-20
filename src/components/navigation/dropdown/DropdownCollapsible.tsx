import React from 'react';
import { useCollapse } from '../../../hooks/useCollapse';
import { Icons } from '../../general/icons';
import { DropdownCollapsibleProps } from './constants';
import { ItemCollapsibleButtonStyled, ItemWrapperStyled } from './styled';

export function DropdownCollapsible({
  label,
  children,
  autoWidth,
  disabled,
  icon,
  hidden = false,
  onCloseDropdown = () => {},
  ...rest
}: DropdownCollapsibleProps) {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  if (hidden) {
    return null;
  }

  return (
    <ItemWrapperStyled>
      <ItemWrapperStyled>
        <ItemCollapsibleButtonStyled
          autoWidth={autoWidth}
          {...rest}
          {...getToggleProps()}
        >
          <span title={label}>
            {icon ? icon : null} {label}{' '}
          </span>
          <div className="dui-dd-chevron">
            <Icons.Chevron direction={isExpanded ? 'up' : 'down'} />
          </div>
        </ItemCollapsibleButtonStyled>
      </ItemWrapperStyled>

      <div className="dui-dd-submenu" {...getCollapseProps()}>
        {React.Children.map(children, (child: any) => {
          return React.createElement(child.type, {
            ...{
              ...child.props,
              onCloseDropdown,
              autoWidth,
              width: rest.width,
            },
          });
        })}
      </div>
    </ItemWrapperStyled>
  );
}
