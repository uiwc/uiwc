import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { Callout, Headline } from '../..';
import { Container } from '../../layout/grid';
import { WizardProps } from './constants';
import { Wizard } from './Wizard';

export default {
  title: 'Navigation/Wizard',
  component: Wizard,
  argTypes: {},
} as Meta;

const Template: Story<WizardProps> = (args: WizardProps) => {
  return (
    <Container>
      <Wizard {...args}>
        <Wizard.Step id="1" title="Comprar cupón">
          <Callout variant="powderer" className="mb-2">
            <Headline className="mb-4">Step 1</Headline>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim quo
              eum soluta quas fuga voluptas accusamus delectus odit doloremque
              atque id, maiores, voluptatum minima pariatur ratione. Aut
              explicabo dolorem aliquam!
            </p>
          </Callout>
        </Wizard.Step>
        <Wizard.Step id="2" title="Confirmación">
          <Callout className="mb-2">
            <Headline className="mb-4">Step 2 rules!</Headline>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim quo
              eum soluta quas fuga voluptas accusamus delectus odit doloremque
              atque id, maiores, voluptatum minima pariatur ratione. Aut
              explicabo dolorem aliquam!
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim quo
              eum soluta quas fuga voluptas accusamus delectus odit doloremque
              atque id, maiores, voluptatum minima pariatur ratione. Aut
              explicabo dolorem aliquam!
            </p>
          </Callout>
        </Wizard.Step>
        <Wizard.Step id="3" title="Disabled">
          <Callout className="mb-2">
            <Headline className="mb-4">Disabled</Headline>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit,
              illum!
            </p>
          </Callout>
        </Wizard.Step>
        <Wizard.Step id="4" title="Fin del asunto de una vez por todas">
          <Callout variant="warning" className="mb-2">
            <Headline className="mb-4">Final</Headline>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit,
              illum!
            </p>
          </Callout>
        </Wizard.Step>
      </Wizard>
    </Container>
  );
};

export const Default = Template.bind({});
Default.args = {
  // align: 'space-between',
  stepsDisabled: ['3'],
  onStepChange: (stepId: string, prev: string) => console.log(stepId, prev),
};
