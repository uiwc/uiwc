import { Meta, Story } from '@storybook/react/types-6-0';
import { Confirm } from './Confirm';
import { ConfirmProps } from './constants';

export default {
  title: 'Feedback/Confirm',
  component: Confirm,
  argTypes: {},
} as Meta;

const Template: Story<ConfirmProps> = (args: ConfirmProps) => (
  <Confirm {...args} />
);

export const Default = Template.bind({});
Default.args = {
  type: 'success',
  open: false,
  title: 'Hello world!',
  onConfirm: () => alert('Click yes'),
  children: (
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta pariatur
      animi sunt laboriosam enim totam distinctio nobis nulla, consectetur,
      doloribus tenetur ab dolorum harum suscipit saepe deleniti voluptates
      voluptas maxime!
    </p>
  ),
};
Default.parameters = {};
