import { IBaseProps } from '../../IBaseProps';

export interface SpinnerProps extends IBaseProps {
  variant?: 'dots' | 'circle' | 'pulse';
  size?: number;
  color?: 'white' | 'primary' | 'text' | 'spanish';
}
