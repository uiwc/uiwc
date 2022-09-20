import { FieldValues, UseFormRegister, UseFormSetValue } from 'react-hook-form';
import { IBaseProps } from '../../IBaseProps';

export interface InputProps extends IBaseProps {
  type?:
    | 'color'
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'file'
    | 'hidden'
    | 'month'
    | 'number'
    | 'password'
    | 'range'
    | 'search'
    | 'tel'
    | 'text'
    | 'time'
    | 'url'
    | 'week';
  value?: any;
  label?: string;
  error?: string;
  placeholder?: string;
  name: string;
  disabled?: boolean;
  readOnly?: boolean;
  loading?: boolean;
  required?: boolean;
  maxLength?: number;
  minLength?: number;
  max?: number;
  min?: number;
  autoFocus?: boolean;
  showErrorFeedback?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  floatingLabel?: boolean;
  helpText?: string;
  validators?: { [key: string]: any };
  register?: UseFormRegister<FieldValues>;
  onUpdateForm?: UseFormSetValue<FieldValues>;
  mode?: 'onChange' | 'onSubmit';
  cleanable?: boolean;
  preventCut?: boolean;
  preventPaste?: boolean;
  preventCopy?: boolean;
}
