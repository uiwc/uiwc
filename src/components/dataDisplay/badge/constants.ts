import { IBaseProps } from '../../IBaseProps';

export interface BadgeProps extends IBaseProps {
  id?: string;
  closable?: boolean;
  disabled?: boolean;
  onClose?: (id: string) => void;
  pilled?: boolean;
}
