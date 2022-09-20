import { Meta, Story } from '@storybook/react/types-6-0';
import React, { forwardRef } from 'react';
import { Button } from '../../general/button';
import { DatePickerProps } from './constants';
import { DatePicker } from './DatePicker';

const ExampleCustomInput = forwardRef(({ value, onClick }: any, ref: any) => (
  <Button onClick={onClick} ref={ref}>
    {value}
  </Button>
));

export default {
  title: 'Data Entry/DatePicker',
  component: DatePicker,
  argTypes: {},
} as Meta;

const Template: Story<DatePickerProps> = (args: DatePickerProps) => {
  return <DatePicker {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  name: 'datepicker',
};

export const FloatingLabel = Template.bind({});
FloatingLabel.args = {
  name: 'datepicker',
  label: 'Date Picker',
};

export const WithError = Template.bind({});
WithError.args = {
  name: 'datepicker',
  label: 'Date Picker',
  error: 'This is an error',
};

export const Loading = Template.bind({});
Loading.args = {
  name: 'datepicker',
  label: 'Date Picker',
  loading: true,
};

export const Required = Template.bind({});
Required.args = {
  name: 'datepicker',
  label: 'Date Picker',
  required: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  name: 'datepicker',
  label: 'Date Picker',
  disabled: true,
};

export const HelpText = Template.bind({});
HelpText.args = {
  name: 'datepicker',
  label: 'Date Picker',
  helpText: 'Some text to help you',
};

export const TwoMonths = Template.bind({});
TwoMonths.args = {
  name: 'datepicker',
  label: 'Date Picker',
  monthsShown: 2,
};

export const DateFormat = Template.bind({});
DateFormat.args = {
  name: 'datepicker',
  label: 'Date Picker',
  dateFormat: 'dd / MMM / yyyy',
};

export const DateRange = Template.bind({});
DateRange.args = {
  name: 'datepicker',
  label: 'Date Picker',
  monthsShown: 2,
  selectsRange: true,
};

export const CustomInput = Template.bind({});
CustomInput.args = {
  name: 'datepicker',
  startDate: new Date(),
  customInput: <ExampleCustomInput />,
};
