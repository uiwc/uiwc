import { Story, Meta } from '@storybook/react/types-6-0';
import { Card } from './Card';
import { CardProps } from './constants';

export default {
  title: 'Data Display/Card',
  component: Card,
  argTypes: {},
} as Meta;

const Template: Story<CardProps> = (args: CardProps) => (
  <Card {...args}>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta minima
      mollitia repudiandae doloribus eius blanditiis? Numquam temporibus
      provident eaque, similique veniam eos vel sunt optio, accusamus, culpa nam
      perspiciatis excepturi?
    </p>
  </Card>
);

export const Default = Template.bind({});
