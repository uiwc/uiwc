import { FieldValues, UseFormRegister, UseFormSetValue } from 'react-hook-form';
import { Utils } from '../../../utils';
import { IBaseProps } from '../../IBaseProps';

export interface DatePickerProps extends IBaseProps {
  startDate?: Date | null | undefined;
  endDate?: Date | null | undefined;
  monthsShown?: number;
  selectsRange?: boolean;
  dateFormat?: string;
  customInput?: React.ReactNode;
  // Input
  label?: string;
  error?: string;
  name: string;
  disabled?: boolean;
  loading?: boolean;
  required?: boolean;
  onChange?: (e: any) => void;
  helpText?: string;
  // Form
  validators?: { [key: string]: any };
  register?: UseFormRegister<FieldValues>;
  onUpdateForm?: UseFormSetValue<FieldValues>;
  mode?: 'onChange' | 'onSubmit';
}

export interface DatePickerInputProps extends IBaseProps {
  value?: any;
  label?: string;
  error?: string;
  format?: string;
  name: string;
  enabled?: boolean;
  loading?: boolean;
  required?: boolean;
  helpText?: string;
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
}

export const YEARS = Utils.range(1900, Utils.getYear(new Date()) + 2);

export const MONTHS = [
  'ui.commons.monthNames.january',
  'ui.commons.monthNames.february',
  'ui.commons.monthNames.march',
  'ui.commons.monthNames.april',
  'ui.commons.monthNames.may',
  'ui.commons.monthNames.june',
  'ui.commons.monthNames.july',
  'ui.commons.monthNames.august',
  'ui.commons.monthNames.september',
  'ui.commons.monthNames.october',
  'ui.commons.monthNames.november',
  'ui.commons.monthNames.december',
];
