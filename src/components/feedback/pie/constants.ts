import { IBaseProps } from '../../IBaseProps';

export interface PieProps extends IBaseProps {
  size?: number;
  variant?: 'primary' | 'error' | 'warning' | 'wrong' | 'success';
  value?: number;
  marginPercentage?: number;
  textSizePercentage?: number;
  strokePercentage?: number;
  withoutText?: boolean;
  lineCap?: 'butt' | 'round';
  text?: string;
  pre?: string;
  post?: string;
}
