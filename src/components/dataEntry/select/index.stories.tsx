import { Story, Meta } from '@storybook/react/types-6-0';
import { Select } from './Select';
import { SelectProps } from './constants';

const listOptions = [
  { label: 'Item 1', value: 'item-1' },
  { label: 'Item 2', value: 'item-2' },
  { label: 'Item 3', value: 'item-3' },
];

export default {
  title: 'Data Entry/Select',
  component: Select,
  argTypes: {},
} as Meta;

const Template: Story<SelectProps> = (args: SelectProps) => {
  return <Select {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  options: listOptions,
  name: 'name',
  placeholder: 'My select with placeholder',
};

export const FloatingLabel = Template.bind({});
FloatingLabel.args = {
  value: listOptions[2].value,
  options: listOptions,
  name: 'name',
  label: 'My select with label',
  floatingLabel: true,
};

export const WithError = Template.bind({});
WithError.args = {
  value: listOptions[1],
  options: listOptions,
  name: 'name',
  label: 'My select with error',
  floatingLabel: true,
  error: 'Houston we have a problem!',
};

export const Disabled = Template.bind({});
Disabled.args = {
  value: listOptions[2].value,
  options: listOptions,
  name: 'name',
  label: 'My disabled select',
  floatingLabel: true,
  disabled: true,
};

export const Loading = Template.bind({});
Loading.args = {
  value: listOptions[2].value,
  options: listOptions,
  name: 'name',
  label: 'My select with label',
  loading: true,
  floatingLabel: true,
};

export const Required = Template.bind({});
Required.args = {
  value: listOptions[2].value,
  options: listOptions,
  name: 'name',
  label: 'My required select',
  required: true,
  floatingLabel: true,
};

export const HelpText = Template.bind({});
HelpText.args = {
  options: listOptions,
  name: 'name',
  label: 'My select',
  helpText:
    'Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.',
};
