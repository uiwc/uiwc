import { IBaseProps } from '../../IBaseProps';

export interface CartProps extends IBaseProps {
  onChange?: (data: any) => void;
}

export interface CartItemProps extends IBaseProps {
  id: string;
  title?: string;
  price?: number;
  quantity?: number;
  checked?: boolean;
  currency?: string;
  onChange?: (data: any) => void;
}

export interface CartTotalProps extends IBaseProps {
  total?: number;
  currency?: string;
}
