import { Meta, Story } from '@storybook/react/types-6-0';
import { Icons } from '../../general/icons';
import { Navbar } from '../navbar';
import { SidebarProps } from './constants';
import { Sidebar } from './Sidebar';

export default {
  title: 'Navigation/Sidebar',
  component: Sidebar,
  argTypes: {},
} as Meta;

const Template: Story<SidebarProps> = (args: SidebarProps) => {
  return (
    <>
      <Navbar sticky />
      <Sidebar {...args}>
        <Sidebar.Logo />
        <Sidebar.Profile
          name="Alvaro Gonzalez"
          avatar="https://pbs.twimg.com/media/DJjGHANUEAADO2c.jpg"
          role="Estudiante"
          loading
        />
        <Sidebar.Divider />
        <Sidebar.Item href="http://google.com">Google</Sidebar.Item>
        <Sidebar.Item>Lorem ipsum dolor sit amet, consectetur</Sidebar.Item>
        <Sidebar.Divider />
        <Sidebar.Collapsible label="Collapsible">
          <Sidebar.Item active>Sub-item 1</Sidebar.Item>
          <Sidebar.Divider />
          <Sidebar.Item>Sub-item 2</Sidebar.Item>
          <Sidebar.Item>Sub-item 3</Sidebar.Item>
        </Sidebar.Collapsible>
        <Sidebar.Divider />
        <Sidebar.Item active={true}>Home</Sidebar.Item>
        <Sidebar.Item>
          <Icons.Home /> With Icon
        </Sidebar.Item>
        <Sidebar.Divider />
        <Sidebar.Button>Log in</Sidebar.Button>
        <Sidebar.Button variant="orange">Sign up</Sidebar.Button>
        <Sidebar.Divider />
      </Sidebar>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  open: true,
};
