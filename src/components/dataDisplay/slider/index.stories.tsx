import { Story, Meta } from '@storybook/react/types-6-0';
import { SliderProps } from './constants';
import { Slider } from './Slider';
import { Card } from '../card';
import { Button } from '../../general/button';

export default {
  title: 'Data Display/Slider',
  component: Slider,
  argTypes: {},
} as Meta;

const Template: Story<SliderProps> = (args: SliderProps) => {
  return (
    <>
      <Button block>Test</Button>
      <Slider {...args}>
        {Array(5)
          .fill(null)
          .map((_, i) => (
            <Card key={i} className="bg-light text-primary p-5 m-2">
              <h1 className="text-center m-0">{`${i + 1}`.padStart(2, '0')}</h1>
            </Card>
          ))}
      </Slider>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  dots: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  infinite: false,
  autoplay: false,
  autoHideArrows: true,
};

export const Responsive = Template.bind({});
Responsive.args = {
  autoplay: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        arrows: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
      },
    },
  ],
};
