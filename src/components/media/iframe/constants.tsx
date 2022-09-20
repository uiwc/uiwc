import { IBaseProps } from '../../IBaseProps';

export interface IframeProps extends IBaseProps {
  title?: string;
  src: string;
  allow?: string;
  width?: number | string;
  height?: number | string;
}
