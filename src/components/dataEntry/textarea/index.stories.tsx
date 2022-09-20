import { Story, Meta } from '@storybook/react/types-6-0';
import { Textarea } from './Textarea';
import { TextareaProps } from './constants';

export default {
  title: 'Data Entry/Textarea',
  component: Textarea,
  argTypes: {},
} as Meta;

const Template: Story<TextareaProps> = (args: TextareaProps) => {
  return <Textarea {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  name: 'name',
  placeholder: 'My Textarea with placeholder',
  rows: 8,
};

export const FloatingLabel = Template.bind({});
FloatingLabel.args = {
  name: 'name',
  label: 'My Textarea with label',
  floatingLabel: true,
};

export const WithError = Template.bind({});
WithError.args = {
  name: 'name',
  label: 'My Textarea with error',
  floatingLabel: true,
  error: 'Houston we have a problem!',
};

export const Disabled = Template.bind({});
Disabled.args = {
  name: 'name',
  label: 'My disabled Textarea',
  floatingLabel: true,
  value:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati inventore nesciunt reprehenderit possimus! Ab cupiditate atque aperiam rem temporibus sed voluptate, ex asperiores ducimus fuga. Facilis iste voluptatibus est blanditiis!',
  disabled: true,
};

export const Loading = Template.bind({});
Loading.args = {
  name: 'name',
  label: 'My input with label',
  value: 'My value',
  loading: true,
  floatingLabel: true,
};

export const Required = Template.bind({});
Required.args = {
  name: 'name',
  label: 'My required Textarea',
  value: 'My value',
  required: true,
  floatingLabel: true,
};

export const HelpText = Template.bind({});
HelpText.args = {
  name: 'name',
  label: 'My Textarea',
  helpText:
    'Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.',
};
