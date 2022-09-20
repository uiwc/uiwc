import { Meta, Story } from '@storybook/react/types-6-0';
import { FileProps } from './constants';
import { File } from './File';

export default {
  title: 'Data Entry/File',
  component: File,
  argTypes: {},
} as Meta;

const Template: Story<FileProps> = (args: FileProps) => {
  return <File {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  helpText: 'Texto de Ayuda',
  name: 'file',
};

export const Images = Template.bind({});
Images.args = {
  accept: 'image/png, image/jpeg',
  name: 'file',
};

export const UploadEvent = Template.bind({});
UploadEvent.args = {
  onUpload: (data: any) => console.log(data),
  onRemove: () => console.log('File removed!'),
  name: 'file',
};
