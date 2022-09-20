import { Meta, Story } from '@storybook/react/types-6-0';
import { Badge } from './Badge';
import { BadgeProps } from './constants';

export default {
  title: 'Data Display/Badge',
  component: Badge,
  argTypes: {},
} as Meta;

const Template: Story<BadgeProps> = (args: BadgeProps) => {
  return (
    <>
      <Badge {...args} />
      <Badge closable>marco.mendoza@gmail.com</Badge>
      <Badge>javier.perez@hotmail.com</Badge>
      <Badge pilled className="bg-error">
        Custom Class
      </Badge>
      <Badge pilled>Pilled</Badge>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  children: 'chistiam@gmail.com',
};
