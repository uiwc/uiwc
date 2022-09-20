import { Story, Meta } from '@storybook/react/types-6-0';
import { Flag } from './Flag';
import { FlagProps } from './constants';

export default {
  title: 'General/Flag',
  component: Flag,
  argTypes: {},
} as Meta;

const Template: Story<FlagProps> = (args: FlagProps) => {
  return <Flag {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  size: 300,
  country: 'AU',
};

export const Square = Template.bind({});
Square.args = {
  shape: 'square',
  size: 300,
  country: 'US',
};

export const Circle = Template.bind({});
Circle.args = {
  shape: 'circle',
  size: 300,
  country: 'PR',
};
