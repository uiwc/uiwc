import { Meta, Story } from '@storybook/react/types-6-0';
import { Icons } from '../..';
import { SearchProps } from './constants';
import { Search } from './Search';

export default {
  title: 'Data Entry/Search',
  component: Search,
  argTypes: {},
} as Meta;

const Template: Story<SearchProps> = (args: SearchProps) => {
  return <Search {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  name: 'name',
  onSubmit: (data: any) => console.log('handleSubmit', data),
  onChange: (data: any) => console.log('handleChange', data),
};

export const Icon = Template.bind({});
Icon.args = {
  name: 'name',
  onSubmit: (data: any) => console.log('handleSubmit', data),
  onChange: (data: any) => console.log('handleChange', data),
  icon: <Icons.Plus />,
  placeholder: 'Agrega un email...',
  clearAfterSubmit: true,
  validators: {
    email: true,
  },
};
