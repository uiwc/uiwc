import { IBaseProps } from '../../IBaseProps';

export interface TooltipProps extends IBaseProps {
  text: React.ReactNode;
  placement?: 'bottom' | 'top' | 'left' | 'right';
  offset?: number;
  delay?: number;
  inPopover?: boolean;
}
