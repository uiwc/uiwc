import { Meta, Story } from '@storybook/react/types-6-0';
import { PieProps } from './constants';
import { Pie } from './Pie';

export default {
  title: 'Feedback/Pie',
  component: Pie,
  argTypes: {},
} as Meta;

const Template: Story<PieProps> = (args: PieProps) => {
  return (
    <div className="text-center">
      <Pie {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  value: 80,
};

export const Variants: Story<PieProps> = (args: PieProps) => {
  return (
    <>
      <Pie {...args} variant="primary" />
      <Pie {...args} variant="error" />
      <Pie {...args} variant="warning" />
      <Pie {...args} variant="wrong" />
      <Pie {...args} variant="success" />
    </>
  );
};
Variants.args = {
  value: 50,
  size: 150,
  lineCap: 'butt',
};
