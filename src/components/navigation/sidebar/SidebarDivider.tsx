import { SidebarItemProps } from './constants';
import { SidebarItemDividerStyled } from './styled';

export function SidebarDivider({
  hidden = false,
  onCloseSidebar = () => {},
  ...rest
}: SidebarItemProps) {
  if (hidden) {
    return null;
  }

  return <SidebarItemDividerStyled {...rest} />;
}
