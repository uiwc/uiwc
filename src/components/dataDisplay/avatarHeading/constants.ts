import { IBaseProps } from '../../IBaseProps';

export interface AvatarHeadingProps extends IBaseProps {
  src?: string;
  size?: number;
  alt?: string;
  icon?: React.ReactNode;
  shape?: 'circle' | 'square';

  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
  wrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
  align?: 'stretch' | 'center' | 'start' | 'end' | 'baseline';

  gap?: 1 | 2 | 3 | 4 | 5;
}
