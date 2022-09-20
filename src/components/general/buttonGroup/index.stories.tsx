import { Story, Meta } from '@storybook/react/types-6-0';
import { Button } from '../button';
import React from 'react';
import { ButtonGroupProps } from './constants';
import { Icons } from '../icons';

export default {
  title: 'General/Button Group',
  component: Button.Group,
  argTypes: {},
} as Meta;

export const Default: Story<ButtonGroupProps> = (args: ButtonGroupProps) => {
  return (
    <>
      <Button.Group className="mb-2" {...args}>
        <Button href="https://google.com" variant="green">
          Link
        </Button>
        <Button variant="green">Link green</Button>
        <Button variant="orange">orange</Button>
      </Button.Group>
    </>
  );
};

export const Justify: Story<ButtonGroupProps> = (args: ButtonGroupProps) => {
  return (
    <>
      <Button.Group className="mb-2" {...args}>
        <Button variant="secondary">
          <Icons.Copy />
          Copy
        </Button>
        <Button variant="secondary" active>
          Active
        </Button>
        <Button variant="secondary">Paste</Button>
        <Button variant="secondary">Cut</Button>
      </Button.Group>
    </>
  );
};
Justify.args = {
  justify: true,
};
