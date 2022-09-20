import { Meta, Story } from '@storybook/react/types-6-0';
import { EmptyProps } from './constants';
import { Empty } from './Empty';

export default {
  title: 'Data Display/Empty',
  component: Empty,
  argTypes: {},
} as Meta;

const Template: Story<EmptyProps> = (args: EmptyProps) => {
  return <Empty {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
