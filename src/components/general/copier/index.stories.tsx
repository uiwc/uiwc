import { Story, Meta } from '@storybook/react/types-6-0';
import { Copier } from './Copier';
import { CopierProps } from './constants';

export default {
  title: 'General/Copier',
  component: Copier,
  argTypes: {},
} as Meta;

const Template: Story<CopierProps> = (args: CopierProps) => {
  return <Copier {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  text: 'VE-TEST-01',
};
