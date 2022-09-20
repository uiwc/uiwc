import { ReactNode } from 'react';
import { IBaseProps } from '../../IBaseProps';

export interface NavbarProps extends IBaseProps {
  burger?: boolean;
  fluid?: boolean;
  logo?: ReactNode;
  sticky?: boolean;
  onToggle?: (status: boolean) => void;
}
