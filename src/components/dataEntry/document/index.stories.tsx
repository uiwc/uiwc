import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import useState from 'storybook-addon-state';
import { Button } from '../../general/button';
import { DocumentProps } from './constants';
import { Document } from './Document';

export default {
  title: 'Data Entry/Document',
  component: Document,
  argTypes: {},
} as Meta;

const Template: Story<DocumentProps> = (args: DocumentProps) => {
  const [isUploading, setIsUploading] = useState('isUploading', false);
  const [src, setSrc] = useState('src', null);
  const [status, setStatus] = useState<any>('status', 'none');

  const handleUpload = (data: any) => {
    console.log('uploading...', data);

    setIsUploading(true);

    setTimeout(() => {
      setStatus('pending');
      setSrc(data.url);
      setIsUploading(false);
    }, 5000);
  };

  return (
    <div>
      <Document
        {...args}
        src={src}
        status={status}
        uploading={isUploading}
        onUpload={handleUpload}
      />

      <div className="mt-4">
        <Button
          variant="dropdown"
          className="mr-1"
          disabled={!src}
          onClick={() => setStatus('pending')}
        >
          Pendiente
        </Button>
        <Button
          variant="dropdown"
          className="mr-1"
          disabled={!src}
          onClick={() => setStatus('approved')}
        >
          Aprobar
        </Button>
        <Button
          variant="dropdown"
          disabled={!src}
          onClick={() => setStatus('rejected')}
        >
          Rechazar
        </Button>
      </div>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  name: 'Notas certificadas o constancia de culminación de primaria',
  physical: true,
  reasonsToReject: [
    'No es el documento solicitado',
    'Es ilegible (no puede leerse bien)',
    'Es más pequeño que el tamaño mínimo requerido',
  ],
};
