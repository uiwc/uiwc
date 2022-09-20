import { Story, Meta } from '@storybook/react/types-6-0';
import { toast, ToastContainer } from './Toast';
import { Button } from '../../general/button';
import { ToastContainerProps } from './constants';
import React from 'react';

export default {
  title: 'Feedback/Toast',
  component: ToastContainer,
  argTypes: {},
} as Meta;

const Template: Story<ToastContainerProps> = (args: ToastContainerProps) => {
  const notify = () => {
    toast.success('success: Wow so easy! 8aeb029a7b10f2d5017b10f8d8130001 ');
    toast.warning('warning: Wow so easy!');
    toast.error(
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ad id et vel neque. In, libero dolorem.'
    );
    toast('Wow so easy!');
  };

  return (
    <div>
      <Button onClick={notify}>Notify!</Button>
      <ToastContainer {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};
