import { IBaseProps } from '../../IBaseProps';

export interface PopoverProps extends IBaseProps {
  content: React.ReactNode;
  width?: string | number;
  maxWidth?: number;
  fixedWidth?: boolean;
  placement?: 'bottom' | 'top' | 'left' | 'right';
  offset?: number;
  delay?: number;
  closeable?: boolean;
}
