import { ButtonProps } from '../button/constants';

export interface FabProps extends ButtonProps {
  icon?: React.ReactNode;
  fixed?: boolean;
  position?:
    | 'top-left'
    | 'top'
    | 'top-right'
    | 'middle-left'
    | 'middle'
    | 'middle-right'
    | 'bottom-left'
    | 'bottom'
    | 'bottom-right';
  offset?: number;
}
