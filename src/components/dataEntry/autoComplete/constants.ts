import { FieldValues, UseFormRegister, UseFormSetValue } from 'react-hook-form';
import { IBaseProps } from '../../IBaseProps';

export interface AutoCompleteProps extends IBaseProps {
  name: string;
  options?: any[];
  value?: any;
  label?: string;
  error?: string;
  helpText?: string;
  disabled?: boolean;
  loading?: boolean;
  required?: boolean;
  placeholder?: string;
  creatable?: boolean;
  clearable?: boolean;
  searchable?: boolean;
  multiple?: boolean;
  customOption?: any;
  customSingleValue?: any;
  customMultiValue?: any;
  minMenuHeight?: number;
  maxMenuHeight?: number;
  menuPlacement?: 'auto' | 'bottom' | 'top';
  menuPosition?: 'absolute' | 'fixed';
  onChange?: (e: any | any[]) => void;
  onCreate?: (e: any | any[]) => void;
  onIsNewValue?: (inputValue: string, options: any[]) => boolean;

  validators?: { [key: string]: any };
  register?: UseFormRegister<FieldValues>;
  onUpdateForm?: UseFormSetValue<FieldValues>;
  mode?: 'onChange' | 'onSubmit';
}
