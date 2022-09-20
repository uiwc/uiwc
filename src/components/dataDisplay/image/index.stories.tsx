import { Story, Meta } from '@storybook/react/types-6-0';
import { Image } from './Image';
import { ImageProps } from './constants';

export default {
  title: 'Data Display/Image',
  component: Image,
  argTypes: {},
} as Meta;

const Template: Story<ImageProps> = (args: ImageProps) => {
  return <Image {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  src: 'https://images.unsplash.com/photo-1422464804701-7d8356b3a42f',
};

export const Placeholder = Template.bind({});
Placeholder.args = {
  debug: true,
};

export const Square = Template.bind({});
Square.args = {
  src: 'https://images.unsplash.com/photo-1422464804701-7d8356b3a42f',
  square: true,
  width: 300,
};

export const Circle = Template.bind({});
Circle.args = {
  src: 'https://images.unsplash.com/photo-1422464804701-7d8356b3a42f',
  square: true,
  circle: true,
  width: 300,
};
