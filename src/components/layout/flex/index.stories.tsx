import { Meta, Story } from '@storybook/react/types-6-0';
import { Button } from '../../general/button';
import { Icons } from '../../general/icons';
import { FlexProps } from './constants';
import { Flex } from './Flex';

export default {
  title: 'Layout/Flex',
  component: Flex,
  argTypes: {},
} as Meta;

export const Default: Story<FlexProps> = (args: FlexProps) => {
  return (
    <Flex {...args}>
      <Flex className="bg-secondary p-4">
        <Button>Lorem ipsum</Button>
      </Flex>

      <Flex className="bg-primary text-white p-4">Lorem ipsum</Flex>

      <Flex className="bg-spanish text-white p-4">
        Lorem ipsum dolor sit amet.
      </Flex>
    </Flex>
  );
};
Default.args = {
  className: 'bg-powder',
};

export const UsingChildBasis: Story<FlexProps> = (args: FlexProps) => {
  return (
    <Flex {...args}>
      <Flex basis={100} className="bg-secondary p-4">
        <Button>Lorem ipsum</Button>
      </Flex>

      <Flex basis={100} className="bg-primary text-white p-4">
        Lorem ipsum
      </Flex>

      <Flex basis={100} className="bg-spanish text-white p-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ex
        nostrum cumque.
      </Flex>
    </Flex>
  );
};
UsingChildBasis.args = {
  className: 'bg-powder',
};

export const Wrapping: Story<FlexProps> = (args: FlexProps) => {
  return (
    <Flex {...args}>
      <Flex basis={50} className="bg-secondary p-4">
        <Button>Lorem ipsum</Button>
      </Flex>

      <Flex basis={50} className="bg-primary text-white p-4">
        Lorem ipsum
      </Flex>

      <Flex basis={100} className="bg-spanish text-white p-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ex
        nostrum cumque.
      </Flex>
    </Flex>
  );
};
Wrapping.args = {
  wrap: 'wrap',
  className: 'bg-powder',
};

export const Icon: Story<FlexProps> = (args: FlexProps) => {
  return (
    <Flex {...args}>
      <Flex shrink={false}>
        <Icons.Check success className="mr-3 fs-4" />
      </Flex>
      <Flex className="text-break" basis={100}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, eius
        qui, placeat fugit perferendis tempora quisquam ad veritatis dolores
        earum, consequatur quo corrupti exercitationem aliquid eos ab voluptate
        cum quasi!
      </Flex>
    </Flex>
  );
};
Icon.args = {
  className: 'p-2 bg-powder rounded',
};

export const Gap: Story<FlexProps> = (args: FlexProps) => {
  return (
    <Flex {...args}>
      <Flex basis={50} className="bg-secondary p-1">
        <Button block>Lorem ipsum</Button>
      </Flex>

      <Flex basis={50} className="bg-primary text-white p-1">
        <Button block variant="orange">
          Lorem ipsum
        </Button>
      </Flex>
    </Flex>
  );
};
Gap.args = {
  className: 'bg-powder flex-column flex-md-row',
  gap: 2,
};
