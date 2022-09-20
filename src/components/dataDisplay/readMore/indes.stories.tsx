import { Story, Meta } from '@storybook/react/types-6-0';
import { ReadMore } from './ReadMore';
import { ReadMoreProps } from './constants';

export default {
  title: 'Data Display/ReadMore',
  component: ReadMore,
  argTypes: {},
} as Meta;

const Template: Story<ReadMoreProps> = (args: ReadMoreProps) => {
  return <ReadMore {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  children:
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt pariatur dolore recusandae deserunt autem id ducimus iure tempore nihil corrupti, illum quod accusantium! Rem ipsum eius voluptatibus quam totam similique!',
};
