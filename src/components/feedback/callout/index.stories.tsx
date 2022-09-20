import { Meta, Story } from '@storybook/react/types-6-0';
import { Button } from '../../general/button';
import { Callout } from './Callout';
import { CalloutProps } from './constants';

export default {
  title: 'Feedback/Callout',
  component: Callout,
  argTypes: {},
} as Meta;

const Template: Story<CalloutProps> = (args: CalloutProps) => (
  <Callout {...args}>
    <h1>Lorem ipsum dolor sit amet.</h1>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis
      delectus consequatur illo dicta aliquam, voluptatibus ab soluta excepturi
      iure perspiciatis debitis, omnis a necessitatibus, nulla quod dolor
      assumenda labore distinctio?
    </p>
    <Button>Click me!</Button>
  </Callout>
);

export const Default = Template.bind({});
Default.args = {
  variant: 'powderer',
};
