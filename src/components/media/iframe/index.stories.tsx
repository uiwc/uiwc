import { Story, Meta } from '@storybook/react/types-6-0';
import { Iframe } from './Iframe';
import { IframeProps } from './constants';

export default {
  title: 'Media/iframe',
  component: Iframe,
  argTypes: {},
} as Meta;

const Template: Story<IframeProps> = (args: IframeProps) => {
  return <Iframe {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  src: 'https://www.youtube.com/embed/vM-Bja2Gy04',
};

export const PDF = Template.bind({});
PDF.args = {
  src:
    'http://ebooksbeus.weebly.com/uploads/6/3/0/8/6308108/the_colour_of_magic_-_terry_pratchett.pdf',
};
