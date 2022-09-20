import { IBaseProps } from '../../IBaseProps';

export interface FlexProps extends IBaseProps {
  /* Container Props */
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
  wrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
  align?: 'stretch' | 'center' | 'start' | 'end' | 'baseline';
  gap?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
  /* Child Props */
  grow?: number | boolean;
  shrink?: number | boolean;
  basis?: number | string;
}
