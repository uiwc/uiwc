import { FieldValues, UseFormRegister, UseFormSetValue } from 'react-hook-form';
import { IBaseProps } from '../../IBaseProps';

export interface PhoneProps extends IBaseProps {
  value?: any;
  defaultCountry?: string;
  codeValue?: string;
  label?: string;
  error?: string;
  placeholder?: string;
  name: string;
  disabled?: boolean;
  readOnly?: boolean;
  loading?: boolean;
  required?: boolean;
  onChange?: (e: any) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  floatingLabel?: boolean;
  helpText?: string;
  validators?: { [key: string]: any };
  register?: UseFormRegister<FieldValues>;
  onUpdateForm?: UseFormSetValue<FieldValues>;
  mode?: 'onChange' | 'onSubmit';
  searchable?: boolean;
}
