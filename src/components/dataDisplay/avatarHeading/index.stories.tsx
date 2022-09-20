import { Meta, Story } from '@storybook/react/types-6-0';
import { Headline } from '../../..';
import { AvatarHeading } from './AvatarHeading';
import { AvatarHeadingProps } from './constants';

export default {
  title: 'Data Display/Avatar Heading',
  component: AvatarHeading,
  argTypes: {},
} as Meta;

const Template: Story<AvatarHeadingProps> = (args: AvatarHeadingProps) => {
  return <AvatarHeading {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  size: 80,
  gap: 3,
  children: (
    <>
      <Headline size={3}>Christiam Mena Mijares</Headline>
      <p className="text-muted">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
        laborum aliquam possimus illo quia sequi corrupti culpa atque
        exercitationem quam. Laudantium inventore quae ut cumque fugit
        accusantium esse consequatur delectus.
      </p>
    </>
  ),
};
