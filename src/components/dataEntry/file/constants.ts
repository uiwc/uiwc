import { FieldValues, UseFormRegister, UseFormSetValue } from 'react-hook-form';
import { IBaseProps } from '../../IBaseProps';

export interface FileProps extends IBaseProps {
  name: string;
  accept?: string;
  height?: number;
  onlyImages?: boolean;
  helpText?: string;
  error?: string;
  disabled?: boolean;
  loading?: boolean;
  onUpload?: (data: any) => void;
  onRemove?: () => void;
  validators?: { [key: string]: any };
  register?: UseFormRegister<FieldValues>;
  onUpdateForm?: UseFormSetValue<FieldValues>;
  mode?: 'onChange' | 'onSubmit';
}

export interface UploadStateProps {
  file: File | null;
  url: string | null;
  formatError: boolean;
  isImage: boolean;
}
