import { Meta, Story } from '@storybook/react/types-6-0';
import { PreviewerProps } from './constants';
import { Previewer } from './Previewer';

export default {
  title: 'Data Display/Previewer',
  component: Previewer,
  argTypes: {},
} as Meta;

const Template: Story<PreviewerProps> = (args: PreviewerProps) => {
  return <Previewer {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  name: 'Notas certificadas o constancia de culminación de primaria',
};

export const Loading = Template.bind({});
Loading.args = {
  name: 'Notas certificadas o constancia de culminación de primaria',
  loading: true,
};

export const PDF = Template.bind({});
PDF.args = {
  src: 'http://www.suneo.mx/literatura/subidas/Bram%20Sttoker%20Dracula.pdf',
  name: 'Drácula',
};

export const PDFWithThumbnail = Template.bind({});
PDFWithThumbnail.args = {
  thumbnail:
    'https://media.gettyimages.com/photos/christopher-lee-british-actor-with-bloodshot-eyes-and-wearing-pale-picture-id119203148?s=612x612',
  src: 'http://www.suneo.mx/literatura/subidas/Bram%20Sttoker%20Dracula.pdf',
  name: 'Drácula',
};

export const PhysicalRequired = Template.bind({});
PhysicalRequired.args = {
  name: 'Partida de nacimiento',
  physical: true,
};

export const Pending = Template.bind({});
Pending.args = {
  src:
    'https://imgv2-2-f.scribdassets.com/img/document/379465850/original/2f954dfa52/1633840115?v=1',
  name: 'Notas certificadas',
  status: 'pending',
};

export const PendingPhysical = Template.bind({});
PendingPhysical.args = {
  src:
    'https://imgv2-2-f.scribdassets.com/img/document/379465850/original/2f954dfa52/1633840115?v=1',
  name: 'Notas certificadas',
  status: 'pending',
  physical: true,
};

export const Approved = Template.bind({});
Approved.args = {
  src:
    'https://imgv2-2-f.scribdassets.com/img/document/379465850/original/2f954dfa52/1633840115?v=1',
  name: 'Notas certificadas',
  status: 'approved',
};

export const Rejected = Template.bind({});
Rejected.args = {
  src:
    'https://imgv2-2-f.scribdassets.com/img/document/379465850/original/2f954dfa52/1633840115?v=1',
  name: 'Notas certificadas',
  status: 'rejected',
  reasonsToReject: [
    'No es el documento solicitado',
    'Es ilegible (no puede leerse bien)',
    'Es más pequeño que el tamaño mínimo requerido',
  ],
};
