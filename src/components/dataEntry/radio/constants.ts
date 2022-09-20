import React from 'react';
import { FieldValues, UseFormRegister, UseFormSetValue } from 'react-hook-form';
import { IBaseProps } from '../../IBaseProps';

export interface RadioProps extends IBaseProps {
  value: any;
  name: string;
  groupValue?: any;
  label?: React.ReactNode;
  error?: string;
  disabled?: boolean;
  readOnly?: boolean;
  loading?: boolean;
  required?: boolean;
  optionWrapperClassName?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChecked?: (e: any) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  helpText?: string;
  validators?: { [key: string]: any };
  register?: UseFormRegister<FieldValues>;
  onUpdateForm?: UseFormSetValue<FieldValues>;
  mode?: 'onChange' | 'onSubmit';
}

export interface RadioGroupProps extends IBaseProps {
  value?: any;
  onChange?: (e: any) => void;
  validators?: { [key: string]: any };
}
