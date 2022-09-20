import { IBaseProps } from '../../IBaseProps';

export interface BlockProps extends IBaseProps {
  highlight?: boolean;
  narrow?: boolean;
  container?: boolean;
  fluid?: boolean;
  align?: 'normal' | 'start' | 'center' | 'end' | 'stretch';
  gutterWidth?: number;
  containerClassName?: string;
  rowClassName?: string;
}
