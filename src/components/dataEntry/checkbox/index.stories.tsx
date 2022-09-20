import { Meta, Story } from '@storybook/react/types-6-0';
import { Checkbox } from './Checkbox';
import { CheckboxProps } from './constants';

export default {
  title: 'Data Entry/Checkbox',
  component: Checkbox,
  argTypes: {},
} as Meta;

const Template: Story<CheckboxProps> = (args: CheckboxProps) => {
  return <Checkbox {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  name: 'name',
  label: 'the checkbox',
};

export const WithError = Template.bind({});
WithError.args = {
  name: 'name',
  label: 'My checkbox with error',
  error: 'Houston we have a problem!',
};

export const Disabled = Template.bind({});
Disabled.args = {
  name: 'name',
  label: 'My disabled checkbox',
  disabled: true,
  value: true,
};

export const Loading = Template.bind({});
Loading.args = {
  name: 'name',
  label: 'My checkbox',
  loading: true,
};

export const Required = Template.bind({});
Required.args = {
  name: 'name',
  label: 'My required checkbox',
  required: true,
};

export const HelpText = Template.bind({});
HelpText.args = {
  name: 'name',
  label:
    'My checkbox: Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.',
  helpText:
    'Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.',
};

export const LongLabel = Template.bind({});
LongLabel.args = {
  name: 'name',
  label:
    'My checkbox: Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.',
  optionWrapperClassName: 'align-items-start',
};

export const Image = Template.bind({});
Image.args = {
  name: 'name',
  label: <img src="https://via.placeholder.com/350x150" alt=" " />,
};
