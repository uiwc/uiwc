import { IBaseProps } from '../../IBaseProps';

export interface TestimonialsProps extends IBaseProps {
  arrows?: boolean;
  autoplay?: boolean;
  autoplaySpeed?: number;
  dots?: boolean;
  entries?: TestimonyProps[];
  infinite?: boolean;
  responsive?: any[];
  slidesToScroll?: number;
  slidesToShow?: number;
  speed?: number;
}

export interface TestimonyProps extends IBaseProps {
  author: string;
  country?: string;
  picture?: string;
  quote?: string;
}
