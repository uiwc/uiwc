import { Meta, Story } from '@storybook/react/types-6-0';
import { Utils } from '../../../utils';
import { Button } from '../../general/button';
import { Icons } from '../../general/icons';
import { Avatar } from './Avatar';
import { AvatarGroupProps, AvatarProps } from './constants';

export default {
  title: 'Data Display/Avatar',
  component: Avatar,
  argTypes: {},
} as Meta;

const Template: Story<AvatarProps> = (args: AvatarProps) => {
  return <Avatar {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  size: 64,
  src: 'https://pbs.twimg.com/media/DJjGHANUEAADO2c.jpg',
};

export const DefaultFallback = Template.bind({});
DefaultFallback.args = {
  size: 128,
  iconClassName: 'text-powder',
};

export const Icon = Template.bind({});
Icon.args = {
  size: 64,
  icon: <Icons.Twitter />,
};

export const Square = Template.bind({});
Square.args = {
  size: 64,
  src: 'https://pbs.twimg.com/media/DJjGHANUEAADO2c.jpg',
  shape: 'square',
};

export const Letters = Template.bind({});
Letters.args = {
  size: 64,
  icon: Utils.getInitialLetters('John', 'Doe'),
};

export const RectangularImage = Template.bind({});
RectangularImage.args = {
  size: 64,
  src: 'https://images.unsplash.com/photo-1422464804701-7d8356b3a42f',
};

export const Responsive = Template.bind({});
Responsive.args = {
  src: 'https://pbs.twimg.com/media/DJjGHANUEAADO2c.jpg',
  responsive: {
    md: 200,
    lg: 500,
  },
};

export const Error = Template.bind({});
Error.args = {
  size: 64,
  src:
    'https://storage.googleapis.com/dev.storage.dawere.com/newBE%2FprofilePictures%2F41fefca7-bd1c-47a5-982a-07bad42e1ba3.jpg',
};

export const Group: Story<AvatarGroupProps> = (args: AvatarGroupProps) => {
  return (
    <Avatar.Group {...args}>
      {Array(5)
        .fill(0)
        .map((_, index) => (
          <Avatar
            size={45}
            key={index}
            icon={'AG'}
            // src={`https://placebeard.it/100x10${index}`}
            tooltip={`Avatar ${index + 1}`}
            active={index === 0 || index === 2}
          />
        ))}
      <Button circle size={45}>
        +78
      </Button>
    </Avatar.Group>
  );
};
