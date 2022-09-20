import { Story, Meta } from '@storybook/react/types-6-0';
import { Loading } from './Loading';
import { LoadingProps } from './constants';

export default {
  title: 'Feedback/Loading',
  component: Loading,
  argTypes: {},
} as Meta;

const Template: Story<LoadingProps> = (args: LoadingProps) => (
  <Loading {...args} />
);

export const Default = Template.bind({});
