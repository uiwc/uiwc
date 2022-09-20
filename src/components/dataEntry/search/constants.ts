import React from 'react';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { IBaseProps } from '../../IBaseProps';

export interface SearchProps extends IBaseProps {
  type?: 'email' | 'password' | 'search' | 'tel' | 'text' | 'url';
  value?: any;
  label?: string;
  placeholder?: string;
  name: string;
  disabled?: boolean;
  readOnly?: boolean;
  loading?: boolean;
  required?: boolean;
  maxLength?: number;
  minLength?: number;
  helpText?: string;
  validators?: { [key: string]: any };
  allowEmptySearch?: boolean;
  icon?: React.ReactNode;
  floatingLabel?: boolean;
  clearAfterSubmit?: boolean;
  onSubmit: SubmitHandler<FieldValues>;
  onChange?: (e: { [key: string]: any }) => void;
}
