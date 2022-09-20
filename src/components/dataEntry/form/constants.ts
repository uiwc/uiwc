import { FieldValues, SubmitHandler } from 'react-hook-form';
import { IBaseProps } from '../../IBaseProps';

export interface FormProps extends IBaseProps {
  shouldFocusError?: boolean;
  onSubmit: SubmitHandler<FieldValues>;
  onChange?: (e: { [key: string]: any }) => void;
  // onValidate?: (e: boolean) => void;
  mode?: 'onChange' | 'onSubmit';
  removeRepeated?: boolean;
  removeDialCode?: boolean;
}
