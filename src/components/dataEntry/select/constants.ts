import { FieldValues, UseFormRegister, UseFormSetValue } from 'react-hook-form';
import { IBaseProps } from '../../IBaseProps';

export type SelectOption = {
  label: string;
  value: string;
  disabled: boolean;
};

export interface SelectProps extends IBaseProps {
  value?: any;
  options?: SelectOption[] | any[];
  label?: string;
  error?: string;
  placeholder?: string;
  name: string;
  disabled?: boolean;
  readOnly?: boolean;
  loading?: boolean;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLSelectElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLSelectElement>) => void;
  floatingLabel?: boolean;
  helpText?: string;
  validators?: { [key: string]: any };
  register?: UseFormRegister<FieldValues>;
  onUpdateForm?: UseFormSetValue<FieldValues>;
  mode?: 'onChange' | 'onSubmit';
}
