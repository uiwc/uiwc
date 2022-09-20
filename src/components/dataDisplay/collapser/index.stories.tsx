import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { Headline } from '../../general/headline';
import { Flex } from '../../layout/flex';
import { Collapser } from './Collapser';
import { CollapserProps } from './constants';

export default {
  title: 'Data Display/Collapser',
  component: Collapser,
  argTypes: {},
} as Meta;

const Template: Story<CollapserProps> = (args: CollapserProps) => (
  <Collapser {...args}>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta minima
      mollitia repudiandae doloribus eius blanditiis? Numquam temporibus
      provident eaque, similique veniam eos vel sunt optio, accusamus, culpa nam
      perspiciatis excepturi?
    </p>
  </Collapser>
);

export const Default = Template.bind({});
Default.args = {
  contentClassName: 'p-5',
  label: (
    <>
      <Flex align="center">
        <Headline size={3} className="mb-0 text-nowrap">
          Tema 01
        </Headline>

        <Headline size={4} variant="spanish" className="mb-0 mx-3">
          Propiedades coligativas de las soluciones
        </Headline>
      </Flex>

      <span>5 horas</span>
    </>
  ),
};

export const Event = Template.bind({});
Event.args = {
  label: 'Label',
  onExpanded: (state: boolean) => alert('expanded: ' + state),
};

export const Opened = Template.bind({});
Opened.args = {
  label: 'Label',
  open: true,
};
