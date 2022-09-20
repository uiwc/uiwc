import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { CodeInput } from './CodeInput';
import { CodeInputProps } from './constants';

export default {
  title: 'Data Entry/CodeInput',
  component: CodeInput,
  argTypes: {},
} as Meta;

const Template: Story<CodeInputProps> = (args: CodeInputProps) => {
  return (
    <div className="d-flex justify-content-center">
      <CodeInput {...args} />
    </div>
  );
};
export const Default = Template.bind({});
Default.args = {
  name: 'code',
  onChange: (value: any) => console.log('code', value),
  // onValidate: (isValid: boolean) => console.log('code is valid?', isValid),
};
