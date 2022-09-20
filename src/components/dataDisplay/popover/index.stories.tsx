import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { Tooltip } from '..';
import { Button } from '../../general/button';
import { GoogleIcon } from '../../general/icons';
import { Avatar } from '../avatar';
import { PopoverProps } from './constants';
import { Popover } from './Popover';

export default {
  title: 'Data Display/Popover',
  component: Popover,
  argTypes: {},
} as Meta;

const Template: Story<PopoverProps> = (args: PopoverProps) => {
  return (
    <div className="text-center">
      <Popover {...args}>
        <Button>Button with Popover</Button>
      </Popover>

      <hr />

      <Popover {...args}>
        <i>
          <GoogleIcon colored />
        </i>
      </Popover>

      <hr />

      <Popover {...args}>
        <Avatar />
      </Popover>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  content: 'My Popover',
};

export const CustomWidth = Template.bind({});
CustomWidth.args = {
  content: 'My Popover',
  width: 500,
  maxWidth: 700,
};

export const FixedWidth = Template.bind({});
FixedWidth.args = {
  content: 'My Popover',
  fixedWidth: true,
};

export const HTMLPopover = Template.bind({});
HTMLPopover.args = {
  content: (
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

export const Nested: Story<PopoverProps> = (args: PopoverProps) => {
  return (
    <div className="text-center">
      <Popover
        {...args}
        closeable
        content={
          <>
            <Popover
              {...args}
              placement="right"
              content={
                <>
                  Lorem ipsum{' '}
                  <Tooltip text="My tooltip" inPopover>
                    <strong className="text-secondary">
                      dolor sit amet consectetur adipisicing elit
                    </strong>
                  </Tooltip>
                  . Modi eius dolores velit illo fuga esse reprehenderit
                  adipisci expedita dolorem aliquam qui vitae aut sint quibusdam
                  ipsa, quo voluptas ad dolorum?
                </>
              }
            >
              <Button block variant="secondary" className="mb-4">
                Sub Popover
              </Button>
            </Popover>
            <Avatar size={80} className="mb-4" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              veniam explicabo, alias voluptate culpa amet eius molestias
              debitis sed esse iste atque sapiente necessitatibus dolorem ipsum
              possimus non soluta ratione.
            </p>
          </>
        }
      >
        <Button>Button with Popover</Button>
      </Popover>
    </div>
  );
};
