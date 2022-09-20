import { Story, Meta } from '@storybook/react/types-6-0';
import { Tooltip } from './Tooltip';
import { TooltipProps } from './constants';
import { Button } from '../../general/button';
import { GoogleIcon } from '../../general/icons';
import React from 'react';

export default {
  title: 'Data Display/Tooltip',
  component: Tooltip,
  argTypes: {},
} as Meta;

const Template: Story<TooltipProps> = (args: TooltipProps) => {
  return (
    <div className="text-center">
      <Tooltip {...args}>
        <Button>Button with tooltip</Button>
      </Tooltip>

      <hr />

      <Tooltip {...args}>
        <i>
          <GoogleIcon colored />
        </i>
      </Tooltip>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  text: 'My Tooltip',
};

export const HTMLTooltip = Template.bind({});
HTMLTooltip.args = {
  text: (
    <>
      Lorem ipsum{' '}
      <strong className="text-secondary">
        dolor sit amet consectetur adipisicing elit
      </strong>
      . Modi eius dolores velit illo fuga esse reprehenderit adipisci expedita
      dolorem aliquam qui vitae aut sint quibusdam ipsa, quo voluptas ad
      dolorum?
    </>
  ),
};
