import { Meta, Story } from '@storybook/react/types-6-0';
import { BackButton } from './BackButton';
import { BackButtonProps } from './constants';

export default {
  title: 'Navigation/BackButton',
  component: BackButton,
  argTypes: {},
} as Meta;

const Template: Story<BackButtonProps> = (args: BackButtonProps) => {
  return <BackButton {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
