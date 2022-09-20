import { Meta, Story } from '@storybook/react/types-6-0';
import { SpinnerProps } from './constants';
import { Spinner } from './Spinner';

export default {
  title: 'General/Spinner',
  component: Spinner,
  argTypes: {},
} as Meta;

const Template: Story<SpinnerProps> = (args: SpinnerProps) => {
  return <Spinner {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
