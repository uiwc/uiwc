import { IBaseProps } from '../../IBaseProps';

export interface BackButtonProps extends IBaseProps {
  text?: string;
  to?: string;
  variant?: 'link' | 'button';
  withoutIcon?: boolean;
}
