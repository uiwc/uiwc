import { Meta, Story } from '@storybook/react/types-6-0';
import { ProfilePicProps } from './constants';
import { ProfilePic } from './ProfilePic';

export default {
  title: 'Data Display/ProfilePic',
  component: ProfilePic,
  argTypes: {},
} as Meta;

const Template: Story<ProfilePicProps> = (args: ProfilePicProps) => {
  return <ProfilePic {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  onChange: (data: any) => console.log(data),
};

export const Source = Template.bind({});
Source.args = {
  src: 'https://pbs.twimg.com/media/DJjGHANUEAADO2c.jpg',
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
