import { IBaseProps } from '../../IBaseProps';

export interface SubjectCardProps extends IBaseProps {
  thumbnail?: string;
  title?: string;
  period?: string;
  teacher?: string;
  avatar?: string;
  progress?: number;
  points?: number;
  maxPoints?: number;
  loading?: boolean;
  hideProgress?: boolean;
  footer?: React.ReactNode;
}

export interface SubjectCardThumbnailProps extends IBaseProps {
  src?: string;
}
