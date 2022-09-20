import { Meta, Story } from '@storybook/react/types-6-0';
import { InputProps } from './constants';
import { Input } from './Input';

export default {
  title: 'Data Entry/Input',
  component: Input,
  argTypes: {},
} as Meta;

const Template: Story<InputProps> = (args: InputProps) => {
  return <Input {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  type: 'text',
  name: 'name',
  placeholder: 'My input with placeholder',
};

export const FloatingLabel = Template.bind({});
FloatingLabel.args = {
  type: 'text',
  name: 'name',
  label: 'My input with label',
  floatingLabel: true,
};

export const WithError = Template.bind({});
WithError.args = {
  type: 'text',
  name: 'name',
  label: 'My input with error',
  floatingLabel: true,
  error: 'Houston we have a problem!',
};

export const Disabled = Template.bind({});
Disabled.args = {
  type: 'text',
  name: 'name',
  label: 'My disabled input',
  floatingLabel: true,
  value: 'My value',
  disabled: true,
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  type: 'text',
  name: 'name',
  label: 'My readOnly input',
  floatingLabel: true,
  value: 'My value',
  readOnly: true,
};

export const NumberInput = Template.bind({});
NumberInput.args = {
  type: 'number',
  name: 'name',
  label: 'My numeric input',
  floatingLabel: true,
  value: 23,
};

export const Loading = Template.bind({});
Loading.args = {
  type: 'text',
  name: 'name',
  label: 'My input with label',
  value: 'My value',
  loading: true,
  floatingLabel: true,
};

export const Required = Template.bind({});
Required.args = {
  type: 'text',
  name: 'name',
  label: 'My required input',
  value: 'My value',
  required: true,
  floatingLabel: true,
};

export const HelpText = Template.bind({});
HelpText.args = {
  type: 'text',
  name: 'name',
  label: 'My input',
  helpText:
    'Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.',
};

export const Password = Template.bind({});
Password.args = {
  type: 'password',
  name: 'password',
  label: 'My password',
  helpText:
    'Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.',
};

export const PreventInteraction = Template.bind({});
PreventInteraction.args = {
  name: 'password',
  label: 'Try copy',
  preventCopy: true,
  preventCut: true,
  preventPaste: true,
};
