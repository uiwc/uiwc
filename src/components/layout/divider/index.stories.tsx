import { Story, Meta } from '@storybook/react/types-6-0';
import { DividerProps } from './constants';
import { Divider } from './Divider';

export default {
  title: 'Layout/Divider',
  component: Divider,
  argTypes: {},
} as Meta;

const Template: Story<DividerProps> = (args: DividerProps) => {
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
        doloremque quas dolor odio adipisci. Voluptates possimus atque quam
        fugit, exercitationem provident saepe beatae perspiciatis aliquid
        temporibus placeat unde necessitatibus sapiente?
      </p>
      <Divider {...args} />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit neque
        esse iusto magnam dolorum pariatur ea harum fugit mollitia autem!
      </p>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {};

export const WithText = Template.bind({});
WithText.args = {
  children: 'My Divider',
};
