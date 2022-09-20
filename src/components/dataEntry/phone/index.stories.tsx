import { Meta, Story } from '@storybook/react/types-6-0';
import { PhoneProps } from './constants';
import { Phone } from './Phone';

export default {
  title: 'Data Entry/Phone',
  component: Phone,
  argTypes: {},
} as Meta;

const Template: Story<PhoneProps> = (args: PhoneProps) => {
  return <Phone {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  name: 'name',
  label: 'Phone',
  onChange: (e) => console.log(e),
};

export const DefaultCountry = Template.bind({});
DefaultCountry.args = {
  name: 'name',
  label: 'Phone',
  defaultCountry: 'mx',
};

export const DefaultCode = Template.bind({});
DefaultCode.args = {
  name: 'name',
  label: 'Phone',
  codeValue: '+51',
  value: '940203395',
};
