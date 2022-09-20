import { Meta, Story } from '@storybook/react/types-6-0';
import { colors } from '../../../styles/colors';
import { Icons } from '../icons';
import { FabProps } from './constants';
import { Fab } from './Fab';

export default {
  title: 'General/Fab',
  component: Fab,
  argTypes: {},
} as Meta;

const Template: Story<FabProps> = (args: FabProps) => {
  return <Fab {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  children: <Icons.Bookmark bookmarkFill={colors.error} />,
  variant: 'orange',
  className: 'text-white',
  onClick: () => {
    console.log('clicked');
  },
};

export const Whatsapp = Template.bind({});
Whatsapp.args = {
  href: 'https://api.whatsapp.com/send?phone=51982647232',
  circle: false,
  children: (
    <>
      <Icons.Whatsapp className="fs-1" />{' '}
      <small>Habla con un Asesor de Admisiones</small>
    </>
  ),
  className: 'bg-success rounded-pill',
  onClick: () => {
    console.log('clicked');
  },
};
