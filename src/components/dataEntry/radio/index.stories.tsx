import { Meta, Story } from '@storybook/react/types-6-0';
import { RadioProps } from './constants';
import { Radio } from './Radio';
import { RadioGroup } from './RadioGroup';

export default {
  title: 'Data Entry/Radio',
  component: Radio,
  argTypes: {},
} as Meta;

const Template: Story<RadioProps> = (args: RadioProps) => {
  return (
    <RadioGroup value="2">
      <Radio {...args} name="name" label="One" value="1" />
      <Radio {...args} name="name" label="Two" value="2" />
      <Radio {...args} name="name" label="Three" value="3" />
    </RadioGroup>
  );
};

export const Default = Template.bind({});
Default.args = {};

export const WithError = Template.bind({});
WithError.args = {
  error: 'Houston we have a problem!',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
};

export const Required = Template.bind({});
Required.args = {
  required: true,
};

export const HelpText = Template.bind({});
HelpText.args = {
  helpText:
    'Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.',
};

export const LongLabel: Story<RadioProps> = (args: RadioProps) => {
  return (
    <RadioGroup value="3">
      <Radio
        {...args}
        name="name"
        label="1) Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces."
        value="1"
      />
      <Radio
        {...args}
        name="name"
        label="2) Top align: Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji."
        value="2"
        optionWrapperClassName="align-items-start"
      />
      <Radio
        {...args}
        name="name"
        label="3) Your password must be 8-20 characters long."
        value="3"
      />
    </RadioGroup>
  );
};

export const Image: Story<RadioProps> = (args: RadioProps) => {
  return (
    <RadioGroup value="2">
      <Radio
        {...args}
        name="name"
        label={<img src="https://via.placeholder.com/350x151" alt=" " />}
        value="1"
      />
      <Radio
        {...args}
        name="name"
        label={<img src="https://via.placeholder.com/350x152" alt=" " />}
        value="2"
      />
      <Radio
        {...args}
        name="name"
        label={<img src="https://via.placeholder.com/350x153" alt=" " />}
        value="3"
      />
    </RadioGroup>
  );
};

export const Nested: Story<RadioProps> = (args: RadioProps) => {
  return (
    <RadioGroup value="3">
      <div>
        <Radio
          {...args}
          name="name"
          label="1) Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces."
          value="1"
        />
      </div>
      <ul>
        <li>
          <Radio
            {...args}
            name="name"
            label="2) Top align: Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji."
            value="2"
            optionWrapperClassName="align-items-start"
          />
        </li>
      </ul>
      <Radio
        {...args}
        name="name"
        label="3) Your password must be 8-20 characters long."
        value="3"
      />
    </RadioGroup>
  );
};
