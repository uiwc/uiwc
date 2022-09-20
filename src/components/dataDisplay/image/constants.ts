import { IBaseProps } from '../../IBaseProps';

export interface ImageProps extends IBaseProps {
  src?: string;
  width?: number | string;
  height?: number | string;
  alt?: string;
  square?: boolean;
  circle?: boolean;
  debug?: boolean;
}
