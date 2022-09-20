import ReactDOM from 'react-dom';

import { SidebarProps } from './constants';
import { PortalSidebar } from './PortalSidebar';
import { SidebarButton } from './SidebarButton';
import { SidebarCollapsible } from './SidebarCollapsible';
import { SidebarDivider } from './SidebarDivider';
import { SidebarItem } from './SidebarItem';
import { SidebarLogo } from './SidebarLogo';
import { SidebarProfile } from './SidebarProfile';

export const Sidebar = (props: SidebarProps) => {
  let el: HTMLElement | null = document.getElementById('dui-sidebar-root');

  if (!el) {
    el = document.createElement('div');
    el.setAttribute('id', 'dui-sidebar-root');
    // Append it to the body
    const body: HTMLElement = document.getElementsByTagName('body')[0];
    body.appendChild(el);
  }

  return ReactDOM.createPortal(<PortalSidebar {...props} />, el);
};

Sidebar.Logo = SidebarLogo;
Sidebar.Button = SidebarButton;
Sidebar.Divider = SidebarDivider;
Sidebar.Profile = SidebarProfile;
Sidebar.Item = SidebarItem;
Sidebar.Collapsible = SidebarCollapsible;
