import { Meta, Story } from '@storybook/react/types-6-0';
import { i18n } from '../../../i18n/language';
import React from 'react';
import { GoogleIcon, Icons } from '../icons';
import { Button } from './Button';
import { ButtonProps } from './constants';

export default {
  title: 'General/Button',
  component: Button,
  argTypes: {},
} as Meta;

const Template: Story<ButtonProps> = (args: ButtonProps) => {
  return <Button {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
};

export const With_i18n = Template.bind({});
With_i18n.args = {
  children: i18n('ui.components.forms.errors.min', { min: 10 }),
};

export const Circle = Template.bind({});
Circle.args = {
  variant: 'orange',
  children: <Icons.Plus />,
  circle: true,
};

export const AlertOnClick = Template.bind({});
AlertOnClick.args = {
  children: 'Click me',
  onClick: () => {
    alert('You clicked the button!');
  },
};

export const ButtonAsLink = Template.bind({});
ButtonAsLink.args = {
  children: 'Click me',
  as: 'a',
  href: 'https://google.com',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  children: (
    <>
      <GoogleIcon colored />
      Log in with Google
    </>
  ),
  variant: 'secondary',
};

export const WithCaret = Template.bind({});
WithCaret.args = {
  children: 'Caret button',
  variant: 'secondary',
  caret: true,
};

export const All: Story<ButtonProps> = (args: ButtonProps) => {
  return (
    <>
      <Button {...args} href="https://google.com">
        Link
      </Button>
      &nbsp;
      <Button {...args}>Primary</Button>
      &nbsp;
      <Button {...args} variant="orange">
        Orange
      </Button>
      &nbsp;
      <Button {...args} variant="secondary">
        Secondary
      </Button>
      &nbsp;
      <Button {...args} variant="tertiary">
        Tertiary
      </Button>
      &nbsp;
      <Button {...args} variant="dropdown" caret>
        Dropdown
      </Button>
      &nbsp;
      <Button {...args} variant="link">
        Link
      </Button>
      &nbsp;
      <Button {...args} variant="filter">
        Filter
      </Button>
    </>
  );
};
