import { IBaseProps } from '../../IBaseProps';

export interface SliderProps extends IBaseProps {
  arrows?: boolean;
  autoplay?: boolean;
  autoplaySpeed?: number;
  dots?: boolean;
  infinite?: boolean;
  responsive?: any[];
  slidesToScroll?: number;
  slidesToShow?: number;
  speed?: number;
  autoHideArrows?: boolean;
  easing?: string;
}
