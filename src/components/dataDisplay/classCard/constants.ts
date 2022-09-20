import { IBaseProps } from '../../IBaseProps';

export interface ClassCardProps extends IBaseProps {
  thumbnail?: string;
  title?: string;
  topic?: string;
  date?: any;
  duration?: number;
}

export interface ClassCardThumbnailProps extends IBaseProps {
  src?: string;
}
