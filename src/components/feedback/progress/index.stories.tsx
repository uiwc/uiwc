import { Meta, Story } from '@storybook/react/types-6-0';
import { ProgressProps } from './constants';
import { Progress } from './Progress';

export default {
  title: 'Feedback/Progress',
  component: Progress,
  argTypes: {},
} as Meta;

const Template: Story<ProgressProps> = (args: ProgressProps) => {
  return <Progress {...args} />;
};

export const Default = Template.bind({});

export const Loaded = Template.bind({});
Loaded.args = {
  onComplete: () => {
    alert('loaded...');
  },
};

export const Half = Template.bind({});
Half.args = {
  value: 50,
  showProgress: true,
};

export const PrePost = Template.bind({});
PrePost.args = {
  value: 70,
  pre: '50%',
  post: 'alumnos',
  variant: 'info',
};

export const FixedWidth = Template.bind({});
FixedWidth.args = {
  value: 70,
  width: 300,
  pre: '300px',
  variant: 'error',
};
