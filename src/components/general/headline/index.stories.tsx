import { Meta, Story } from '@storybook/react/types-6-0';
import { HeadlineProps } from './constants';
import { Headline } from './Headline';

export default {
  title: 'General/Headline',
  component: Headline,
  argTypes: {},
} as Meta;

const Template: Story<HeadlineProps> = (args: HeadlineProps) => {
  return <Headline {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  children: 'My Headline',
};

export const LongText = Template.bind({});
LongText.args = {
  children:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, labore vel modi explicabo in unde quibusdam quaerat reprehenderit?',
};

export const All: Story<HeadlineProps> = (args: HeadlineProps) => {
  return (
    <>
      <Headline {...args} size={1}>
        My Headline 1
      </Headline>
      <Headline {...args} size={2}>
        My Headline 2
      </Headline>
      <Headline {...args} size={3}>
        My Headline 3
      </Headline>
      <Headline {...args} size={4}>
        My Headline 4
      </Headline>
      <Headline {...args} size={5}>
        My Headline 5
      </Headline>
      <p>Normal Text</p>
    </>
  );
};
All.parameters = {
  controls: { exclude: ['size'] },
};
