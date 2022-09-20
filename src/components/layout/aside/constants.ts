import { ReactNode } from 'react';
import { IBaseProps } from '../../IBaseProps';

export interface AsideProps extends IBaseProps {
  open?: boolean;
  width?: string | number;
  height?: string | number;
  minWidth?: string | number;
  maxWidth?: string | number;
  position?: 'left' | 'right';
  topOffset?: string | number;
  onToggle?: (value: boolean) => void;
  picker?: ReactNode;
  pickerTopOffset?: string | number;
}
