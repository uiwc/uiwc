import { Story, Meta } from '@storybook/react/types-6-0';
import { Logo } from './Logo';
import { LogoProps } from './constants';

export default {
  title: 'Data Display/Logo',
  component: Logo,
  argTypes: {},
} as Meta;

const Template: Story<LogoProps> = (args: LogoProps) => {
  const negativeClass = args.negative
    ? 'bg-primary p-5 text-center'
    : 'bg-white p-5 text-center';

  return (
    <div className={negativeClass}>
      <Logo {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  size: 300,
  negative: false,
  full: false,
};
