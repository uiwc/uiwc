import ReactSlick from 'react-slick';
import { SliderProps } from './constants';
import { SliderWrapperStyled } from './styled';

export const Slider = ({
  children,
  dots = false,
  infinite = true,
  speed = 500,
  autoplaySpeed = 10000,
  slidesToShow = 4,
  slidesToScroll = 4,
  arrows = true,
  autoplay = true,
  responsive = [],
  autoHideArrows = false,
  easing = 'linear',
  ...rest
}: SliderProps) => {
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
    easing,
  };

  if (children && Array.isArray(children) && children.length < slidesToShow) {
    settings.slidesToShow = children.length;

    responsive.forEach(({ settings }: any) => {
      if (settings && children.length < settings.slidesToShow) {
        settings.slidesToShow = children.length;
      }
    });
  }

  return (
    <SliderWrapperStyled
      autoHideArrows={autoHideArrows}
      arrows={arrows}
      responsive={responsive}
      {...rest}
    >
      <ReactSlick {...settings}>{children}</ReactSlick>
    </SliderWrapperStyled>
  );
};
