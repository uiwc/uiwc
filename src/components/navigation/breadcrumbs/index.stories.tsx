import { Meta, Story } from '@storybook/react/types-6-0';
import { Icons } from '../../general';
import { Breadcrumbs } from './Breadcrumbs';
import { BreadcrumbsProps } from './constants';

export default {
  title: 'Navigation/Breadcrumbs',
  component: Breadcrumbs,
  argTypes: {},
} as Meta;

const Template: Story<BreadcrumbsProps> = (args: BreadcrumbsProps) => {
  return <Breadcrumbs {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  routes: [
    {
      breadcrumb: 'Home',
      to: '/',
    },
    {
      breadcrumb: 'About',
      to: '/about',
    },
    {
      breadcrumb: 'Contact',
      to: '/contact',
    },
  ],
};

export const WithIcons = Template.bind({});
WithIcons.args = {
  routes: [
    {
      icon: <Icons.Home />,
      breadcrumb: 'Home',
      to: '/',
    },
    {
      breadcrumb: 'About',
      to: '/about',
    },
    {
      breadcrumb: 'Contact',
      to: '/contact',
    },
  ],
};

export const Separator = Template.bind({});
Separator.args = {
  separator: <Icons.Chevron direction="right" />,
  routes: [
    {
      breadcrumb: 'Home',
      to: '/',
    },
    {
      breadcrumb: 'About',
      to: '/about',
    },
    {
      breadcrumb: 'Contact',
      to: '/contact',
    },
  ],
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
  routes: [
    {
      breadcrumb: 'Home',
      to: '/',
    },
    {
      breadcrumb: 'About',
      to: '/about',
    },
    {
      breadcrumb: 'Contact',
      to: '/contact',
    },
  ],
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  routes: [
    {
      breadcrumb: 'Home',
      to: '/',
    },
    {
      breadcrumb: 'About',
      to: '/about',
    },
    {
      breadcrumb: 'Contact',
      to: '/contact',
    },
  ],
};

export const WithBackButton = Template.bind({});
WithBackButton.args = {
  withBackArrow: true,
  routes: [
    {
      breadcrumb: 'Home or house',
      isBack: true,
    },
    {
      breadcrumb: 'About Us',
      to: '/about',
    },
    {
      breadcrumb: 'Contact Us for more information',
    },
  ],
};

export const Empty = Template.bind({});
Empty.args = {};
