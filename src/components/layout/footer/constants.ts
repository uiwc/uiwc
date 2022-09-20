import { ReactNode } from 'react';
import { IBaseProps } from '../../IBaseProps';

export interface FooterProps extends IBaseProps {
  gutterWidth?: number;
  bottomSection?: ReactNode;
}
