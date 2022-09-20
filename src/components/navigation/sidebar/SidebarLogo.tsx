import { useCallback } from 'react';
import { Logo } from '../../dataDisplay/logo';
import { SidebarLogoProps } from './constants';
import { SidebarLogoWrapperStyled } from './styled';

export function SidebarLogo({
  onClick = () => {},
  onCloseSidebar = () => {},
  ...rest
}: SidebarLogoProps) {
  const handleClick = useCallback(
    (e: any) => {
      onCloseSidebar();
    },
    [onCloseSidebar]
  );

  return (
    <SidebarLogoWrapperStyled onClick={handleClick} className="p-3">
      <Logo {...rest} />
    </SidebarLogoWrapperStyled>
  );
}
