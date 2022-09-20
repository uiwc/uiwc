import { IBaseProps } from '../../IBaseProps';

export const BACKSPACE_KEY = 8;
export const LEFT_ARROW_KEY = 37;
export const UP_ARROW_KEY = 38;
export const RIGHT_ARROW_KEY = 39;
export const DOWN_ARROW_KEY = 40;

export interface CodeInputProps extends IBaseProps {
  name: string;
  fields?: number;
  disabled?: boolean;
  loading?: boolean;
  value?: string;
  onChange?: (value: any) => void;
  onValidate?: (isValid: boolean) => void;
}
