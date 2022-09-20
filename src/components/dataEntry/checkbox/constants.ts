import React from 'react';
import { FieldValues, UseFormRegister, UseFormSetValue } from 'react-hook-form';
import { IBaseProps } from '../../IBaseProps';

export interface CheckboxProps extends IBaseProps {
  value?: boolean;
  label?: React.ReactNode;
  error?: string;
  name: string;
  disabled?: boolean;
  readOnly?: boolean;
  loading?: boolean;
  required?: boolean;
  optionWrapperClassName?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  helpText?: string;
  validators?: { [key: string]: any };
  register?: UseFormRegister<FieldValues>;
  onUpdateForm?: UseFormSetValue<FieldValues>;
  mode?: 'onChange' | 'onSubmit';
}
