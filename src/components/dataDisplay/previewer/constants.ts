import { IBaseProps } from '../../IBaseProps';

export interface PreviewerProps extends IBaseProps {
  name?: string;
  src?: string | null;
  thumbnail?: string | null;
  physical?: boolean;
  height?: number;
  status?: 'none' | 'approved' | 'rejected' | 'pending';
  loading?: boolean;
  reasonsToReject?: string[];
  to?: string;
}
