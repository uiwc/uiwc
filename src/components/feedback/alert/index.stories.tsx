import { Meta, Story } from '@storybook/react/types-6-0';
import { Button } from '../../general/button';
import { Alert } from './Alert';
import { AlertProps } from './constants';

export default {
  title: 'Feedback/Alert',
  component: Alert,
  argTypes: {},
} as Meta;

const Template: Story<AlertProps> = (args: AlertProps) => <Alert {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Perfil de usuario incompleto',
  children: (
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis
      delectus consequatur illo dicta aliquam, voluptatibus ab soluta excepturi
      iure perspiciatis debitis, omnis a necessitatibus, nulla quod dolor
      assumenda labore distinctio?
    </p>
  ),
};

export const WithActions = Template.bind({});
WithActions.args = {
  title: 'Perfil de usuario incompleto',
  actions: <Button>Completar perfil usuario</Button>,
  children: <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>,
};

export const WarningVariant = Template.bind({});
WarningVariant.args = {
  title: 'Perfil de usuario incompleto',
  actions: <Button>Completar perfil usuario</Button>,
  variant: 'warning',
  icon: 'warning',
  children: (
    <p>
      Provee la información de perfil faltante para que puedas gozar de las
      bondades de Dawere.
    </p>
  ),
};

export const Closable = Template.bind({});
Closable.args = {
  title: 'Perfil de usuario incompleto',
  actions: <Button>Completar perfil usuario</Button>,
  closable: true,
  children: (
    <p>
      Provee la información de perfil faltante para que puedas gozar de las
      bondades de Dawere.
    </p>
  ),
};
