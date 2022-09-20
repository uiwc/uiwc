import { Slider } from '../slider/Slider';
import { TestimonialsProps } from './constants';
import { Testimony } from './Testimony';

export function Testimonials({
  entries = [],
  children,
  dots = false,
  infinite = true,
  speed = 500,
  autoplaySpeed = 10000,
  slidesToShow = 4,
  slidesToScroll = 4,
  arrows = true,
  autoplay = true,
  responsive,
  ...rest
}: TestimonialsProps) {
  const settings = {
    dots,
    infinite,
    speed,
    autoplaySpeed,
    slidesToShow,
    slidesToScroll,
    arrows,
    autoplay,
    responsive,
  };

  return (
    <Slider {...rest} {...settings}>
      {entries.map(({ quote, ...props }, i: number) => (
        <Testimony key={i} {...props}>
          {quote}
        </Testimony>
      ))}
    </Slider>
  );
}

Testimonials.Testimony = Testimony;
