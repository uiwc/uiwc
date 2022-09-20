import { IBaseProps } from '../../IBaseProps';

export interface EmptyProps extends IBaseProps {
  hideImage?: boolean;
  hideText?: boolean;
  size?: 'small' | 'medium' | 'large' | 'full' | 'xsmall';
}
