import { IBaseProps } from '../../IBaseProps';

export interface DocumentProps extends IBaseProps {
  name?: string;
  title?: string;
  src?: string | null;
  thumbnail?: string | null;
  physical?: boolean;
  height?: number;
  status?: 'none' | 'approved' | 'rejected' | 'pending';
  accept?: string;
  maxSize?: number;
  loading?: boolean;
  uploading?: boolean;
  disabled?: boolean;
  reasonsToReject?: string[];
  to?: string;
  onUpload?: (data: any) => void;
}
