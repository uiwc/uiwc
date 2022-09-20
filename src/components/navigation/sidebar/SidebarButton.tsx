import { useCallback } from 'react';
import { Button } from '../../general/button';
import { SidebarButtonProps } from './constants';

export function SidebarButton({
  children,
  onClick = () => {},
  onCloseSidebar = () => {},
  ...rest
}: SidebarButtonProps) {
  const handleClick = useCallback(
    (e: any) => {
      onClick(e);
      onCloseSidebar();
    },
    [onClick, onCloseSidebar]
  );

  return (
    <div className="p-2">
      <Button block onClick={handleClick} {...rest}>
        {children}
      </Button>
    </div>
  );
}
