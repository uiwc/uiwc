import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { Utils } from '../../..';
import { AutoComplete } from './AutoComplete';
import { AutoCompleteProps } from './constants';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const emails = [
  { value: 'christiam@gmail.com', label: 'christiam@gmail.com' },
  { value: 'juan@gmail.com', label: 'juan@gmail.com' },
  { value: 'pancho@hotmail.com', label: 'pancho@hotmail.com' },
];

export default {
  title: 'Data Entry/AutoComplete',
  component: AutoComplete,
  argTypes: {},
} as Meta;

const Template: Story<AutoCompleteProps> = (args: AutoCompleteProps) => {
  return <AutoComplete {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  options,
};

export const FloatingLabel = Template.bind({});
FloatingLabel.args = {
  label: 'Label',
  options,
};

export const WithError = Template.bind({});
WithError.args = {
  label: 'Label',
  error: 'Error',
  options,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Label',
  disabled: true,
  options,
};

export const Loading = Template.bind({});
Loading.args = {
  label: 'Label',
  loading: true,
  options,
};

export const Required = Template.bind({});
Required.args = {
  label: 'Label',
  required: true,
  options,
};

export const HelpText = Template.bind({});
HelpText.args = {
  label: 'Label',
  helpText:
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum quae similique qui laudantium illo aspernatur nam fuga. Neque laborum provident modi, natus consectetur illum sint? Laboriosam sint animi aspernatur. Est.',
  options,
};

export const Clearable = Template.bind({});
Clearable.args = {
  label: 'Label',
  clearable: true,
  options,
};

export const WithValue = Template.bind({});
WithValue.args = {
  label: 'Label',
  options,
  value: { value: 'strawberry', label: 'Strawberry' },
};

export const Multi = Template.bind({});
Multi.args = {
  label: 'Label',
  options,
  multiple: true,
};

const CO = ({ children, ...rest }: any) => {
  return (
    <AutoComplete.Option {...rest}>
      <strong>**{children}**</strong>
    </AutoComplete.Option>
  );
};

const CSV = ({ children, ...rest }: any) => {
  return (
    <AutoComplete.SingleValue {...rest}>
      <i>--{children}--</i>
    </AutoComplete.SingleValue>
  );
};

export const CustomSingleValue = Template.bind({});
CustomSingleValue.args = {
  label: 'Label',
  options,
  customOption: CO,
  customSingleValue: CSV,
};

const CMV = ({ children, ...rest }: any) => {
  return (
    <AutoComplete.MultiValue {...rest}>
      <i>--{children}--</i>
    </AutoComplete.MultiValue>
  );
};

export const CustomMultiValue = Template.bind({});
CustomMultiValue.args = {
  label: 'Label',
  options,
  multiple: true,
  customOption: CO,
  customMultiValue: CMV,
};

export const Creatable = Template.bind({});
Creatable.args = {
  label: 'Label',
  options: emails,
  creatable: true,
  onIsNewValue: (inputValue: string, options: any[]) => {
    return Utils.isEmail(inputValue);
  },
};

export const Fixed = Template.bind({});
Fixed.args = {
  label: 'Label',
  options: emails,
  menuPosition: 'fixed',
};
