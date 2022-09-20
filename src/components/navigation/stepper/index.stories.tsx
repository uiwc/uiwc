import { Meta, Story } from '@storybook/react/types-6-0';
import { createRef } from 'react';
import { Input } from '../../dataEntry/input';
import { Button } from '../../general/button';
import { StepperProps } from './constants';
import { Stepper, StepperHandler } from './Stepper';

export default {
  title: 'Navigation/Stepper',
  component: Stepper,
  argTypes: {},
} as Meta;

const Template: Story<StepperProps> = (args: StepperProps) => {
  const ref = createRef<StepperHandler>();

  return (
    <Stepper ref={ref} {...args}>
      <Stepper.Step
        title="Post a contest"
        summary={
          <span className="text-secondary">
            The Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos,
            animi. Explicabo voluptatum delectus est ex alias iusto, blanditiis,
            harum labore eligendi doloribus animi qui molestiae non maiores
            magni sapiente esse?
          </span>
        }
      >
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi,
          nobis.
        </p>
        <Input name="name" placeholder="Type something..." />

        <Button className="mr-3" onClick={() => ref.current.select(5)}>
          Go to Step 5
        </Button>

        <Button className="mr-1" onClick={() => ref.current.prev()}>
          Prev
        </Button>
        <Button onClick={() => ref.current.next()}>Next</Button>
      </Stepper.Step>
      <Stepper.Step title="Award an entry" active>
        <p>
          Got more entries that you love? Buy more entries anytime! Just hover
          on your favorite entry and click the Buy button Got more entries that
          you love? Buy more entries anytime! Just hover on your favorite entry
          and click the Buy button
        </p>
        <Button className="mr-1" onClick={() => ref.current.prev()}>
          Prev
        </Button>
        <Button onClick={() => ref.current.next()}>Next</Button>
      </Stepper.Step>
      <Stepper.Step title="Post a contest">
        <Button className="mr-1" onClick={() => ref.current.prev()}>
          Prev
        </Button>
        <Button onClick={() => ref.current.next()}>Next</Button>
      </Stepper.Step>
      <Stepper.Step title="Handover">
        <Button className="mr-1" onClick={() => ref.current.prev()}>
          Prev
        </Button>
        <Button onClick={() => ref.current.next()}>Next</Button>
      </Stepper.Step>
      <Stepper.Step title="Provide feedback">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, animi.
          Explicabo voluptatum delectus est ex alias iusto, blanditiis, harum
          labore eligendi doloribus animi qui molestiae non maiores magni
          sapiente esse?
        </p>
        <Button className="mr-1" onClick={() => ref.current.prev()}>
          Prev
        </Button>
        <Button onClick={() => ref.current.next()}>Next</Button>
      </Stepper.Step>
    </Stepper>
  );
};

export const Default = Template.bind({});
Default.args = {
  onSelect: (key: number) => console.log(key),
  defaultStep: 2,
};
