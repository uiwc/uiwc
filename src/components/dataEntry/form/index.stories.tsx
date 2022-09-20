import { Meta, Story } from '@storybook/react/types-6-0';
import React, { useCallback, useRef } from 'react';
import useState from 'storybook-addon-state';
import { AutoComplete, Radio, RadioGroup } from '..';
import { Button } from '../../general';
import { Col, Row } from '../../layout/grid';
import { Checkbox } from '../checkbox';
import { DatePicker } from '../datePicker';
import { File } from '../file';
import { Input } from '../input';
import { Phone } from '../phone';
import { Select } from '../select';
import { FormProps } from './constants';
import { Form } from './Form';

const listOptions = [
  { label: 'Item 1', value: 'item-1' },
  { label: 'Item 2', value: 'item-2' },
  { label: 'Item 3', value: 'item-3' },
];

export default {
  title: 'Data Entry/Form',
  component: Form,
  argTypes: {},
} as Meta;

export const Default: Story<FormProps> = (args: FormProps) => {
  // const formRef = useRef<FormHandler>();

  const handleSubmit = (data: any) => console.log('handleSubmit', data);

  // const handleReset = () => formRef.current.reset();

  // const handleClearErrors = () => formRef.current.clearErrors();

  const handleChange = useCallback(
    (data: any) => console.log('handleChange', data),
    []
  );

  return (
    <>
      <Form onSubmit={handleSubmit} onChange={handleChange}>
        <Phone
          name="phone"
          label="My telephone"
          codeValue="+51"
          value="940203395"
          validators={{
            minLength: 4,
            maxLength: { value: 20 },
            required: true,
            phone: true,
          }}
        />

        <Input
          name="firstName"
          label="First Name"
          value="Christiam Mena"
          validators={{
            minLength: 4,
            maxLength: { value: 20 },
            required: true,
          }}
        />
        <Input
          type="number"
          name="age"
          label="Age"
          validators={{
            min: 4,
          }}
        />
        <Input
          name="lastName"
          label="Last Name"
          validators={{
            required: { value: true, message: 'Required custom message!' },
          }}
        />
        <Input
          type="email"
          name="email"
          label="Email"
          validators={{
            email: true,
          }}
        />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime,
          dolorum?
        </p>
        <Input
          type="email"
          name="customEmail"
          label="Custom Email"
          validators={{
            email: { value: true, message: 'Email is sooo wrong!' },
          }}
        />
        <Select
          options={listOptions}
          name="myoptions"
          label="My options"
          validators={{
            required: true,
          }}
        />

        <Checkbox name="thecheck" label="My checkbox" />

        <Button type="submit" block className="my-1">
          Send
        </Button>
      </Form>

      {/* <Button variant="secondary" className="my-1" block onClick={handleReset}>
        Reset
      </Button> */}

      {/* <Button
        variant="orange"
        className="my-1"
        block
        onClick={handleClearErrors}
      >
        Clear Errors
      </Button> */}
    </>
  );
};

export const EmailOrPasswordMatch: Story<FormProps> = (args: FormProps) => {
  const emailRef = useRef({});

  const handleSubmit = (data: any) => console.log('handleSubmit', data);

  const handleChange = useCallback((data: any) => {
    console.log('handleChange', data);
    emailRef.current = data.email;
  }, []);

  return (
    <>
      <Form onSubmit={handleSubmit} onChange={handleChange}>
        <Input
          type="email"
          name="email"
          label="Email"
          validators={{
            required: true,
            email: true,
          }}
        />

        <Input
          type="email"
          name="email_repeat"
          label="Confirm Email"
          validators={{
            required: true,
            email: true,
            emailMatch: (email: string) => email === emailRef.current,
          }}
        />

        <Button type="submit" block className="my-1">
          Send
        </Button>
      </Form>
    </>
  );
};

export const InputsMatch: Story<FormProps> = (args: FormProps) => {
  const inputRef = useRef({});

  const handleSubmit = (data: any) => console.log('handleSubmit', data);

  const handleChange = useCallback((data: any) => {
    console.log('handleChange', data);
    inputRef.current = data.name;
  }, []);

  return (
    <>
      <Form onSubmit={handleSubmit} onChange={handleChange}>
        <Input
          name="name"
          label="Name"
          validators={{
            required: true,
          }}
        />

        <Input
          name="name_repeat"
          label="Confirm Name"
          validators={{
            required: true,
            match: {
              value: (name: string) => name === inputRef.current,
              message: 'Inputs dont match!',
            },
          }}
        />

        <Button type="submit" block className="my-1">
          Send
        </Button>
      </Form>
    </>
  );
};

export const WithFile: Story<FormProps> = (args: FormProps) => {
  const handleSubmit = (data: any) => console.log('handleSubmit', data);

  const handleChange = useCallback((data: any) => {
    console.log('handleChange', data);
  }, []);

  return (
    <>
      <Form onSubmit={handleSubmit} onChange={handleChange}>
        <Input
          name="name"
          label="Name"
          validators={{
            required: true,
          }}
        />

        <File
          name="file"
          accept="image/png, image/jpeg"
          validators={{
            required: true,
          }}
        />

        <Button type="submit" block className="my-1">
          Send
        </Button>
      </Form>
    </>
  );
};

export const WithDatePicker: Story<FormProps> = (args: FormProps) => {
  const handleSubmit = (data: any) => console.log('handleSubmit', data);

  const handleChange = useCallback((data: any) => {
    // console.log('handleChange', data);
  }, []);

  return (
    <>
      <Form onSubmit={handleSubmit} onChange={handleChange}>
        <Input
          name="name"
          label="Name"
          validators={{
            required: true,
          }}
        />

        <DatePicker
          name="dp"
          label="Date Picker"
          // startDate={new Date()}
          validators={{
            required: true,
          }}
        />

        <Button type="submit" block className="my-1">
          Send
        </Button>
      </Form>
    </>
  );
};

export const WithDateRangePicker: Story<FormProps> = (args: FormProps) => {
  const handleSubmit = (data: any) => console.log('handleSubmit', data);

  const handleChange = useCallback((data: any) => {
    console.log('handleChange', data);
  }, []);

  return (
    <>
      <Form onSubmit={handleSubmit} onChange={handleChange}>
        <Input
          name="name"
          label="Name"
          validators={{
            required: true,
          }}
        />

        <DatePicker
          name="datepicker"
          label="Date Picker"
          selectsRange
          monthsShown={2}
          startDate={new Date('2020-01-01')}
          endDate={new Date('2022-01-01')}
          validators={{
            required: true,
          }}
        />

        <Button type="submit" block className="my-1">
          Send
        </Button>
      </Form>
    </>
  );
};

export const WithAutoComplete: Story<FormProps> = (args: FormProps) => {
  const handleSubmit = (data: any) => console.log('handleSubmit', data);

  const handleChange = useCallback((data: any) => {
    console.log('handleChange', data);
  }, []);

  return (
    <>
      <Form onSubmit={handleSubmit} onChange={handleChange}>
        <Input
          name="name"
          label="Name"
          validators={{
            required: true,
          }}
        />

        <AutoComplete
          name="autocomplete"
          label="Auto Complete"
          options={[
            { value: 'chocolate', label: 'Chocolate' },
            { value: 'strawberry', label: 'Strawberry' },
            { value: 'vanilla', label: 'Vanilla' },
          ]}
          validators={{
            required: true,
          }}
          creatable
        />

        <Button type="submit" block className="my-1">
          Send
        </Button>
      </Form>
    </>
  );
};

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

export const Nested: Story<FormProps> = (args: FormProps) => {
  const handleSubmit = (data: any) => console.log('handleSubmit', data);

  const handleChange = useCallback((data: any) => {
    console.log('handleChange', data);
  }, []);

  return (
    <>
      <Form onSubmit={handleSubmit} onChange={handleChange}>
        <Row>
          <Col xs={12} md={6}>
            <Input
              name="name"
              label="Name"
              validators={{
                required: true,
              }}
            />
          </Col>
          <Col xs={12} md={6}>
            <Input
              name="lasname"
              label="Last name"
              validators={{
                required: true,
              }}
            />
          </Col>
          <Col xs={12} md={6}>
            <AutoComplete name="auto" options={options} menuPosition="fixed" />
          </Col>
        </Row>

        <Button type="submit" block className="my-1">
          Send
        </Button>
      </Form>
    </>
  );
};

export const WithNestedAutoComplete: Story<FormProps> = (args: FormProps) => {
  const [data, setData] = useState<any>('state', {
    // country: { value: 'chocolate', label: 'Chocolate' },
  });

  const handleSubmit = (data: any) => console.log('handleSubmit', data);

  const handleChange = useCallback((data: any) => {
    console.log('handleChange', data);
  }, []);

  return (
    <>
      <Form onSubmit={handleSubmit} onChange={handleChange}>
        <AutoComplete
          name="step1"
          label="Step 1"
          options={[
            { value: 'chocolate', label: 'Chocolate' },
            { value: 'strawberry', label: 'Strawberry' },
            { value: 'vanilla', label: 'Vanilla' },
          ]}
          value={data?.country}
          onChange={(country: any) => {
            setData({
              ...data,
              country,
              state: null,
              township: null,
            });
          }}
          validators={{
            required: true,
          }}
        />

        <AutoComplete
          name="step2"
          label="Step 2"
          options={[
            { value: 'chocolate', label: 'Chocolate' },
            { value: 'strawberry', label: 'Strawberry' },
            { value: 'vanilla', label: 'Vanilla' },
          ]}
          value={data?.state}
          onChange={(state: any) => {
            setData({
              ...data,
              state,
              township: null,
            });
          }}
          disabled={!data?.country}
          validators={{
            required: true,
          }}
        />

        <AutoComplete
          clearable={false}
          name="step3"
          label="Step 3"
          options={[
            { value: 'chocolate', label: 'Chocolate' },
            { value: 'strawberry', label: 'Strawberry' },
            { value: 'vanilla', label: 'Vanilla' },
          ]}
          value={data?.township}
          onChange={(township: any) => {
            setData({
              ...data,
              township,
            });
          }}
          disabled={!data?.state}
          validators={{
            required: true,
          }}
        />

        <AutoComplete
          clearable={false}
          name="step4"
          label="Step 4"
          multiple
          options={[
            { value: 'chocolate', label: 'Chocolate' },
            { value: 'strawberry', label: 'Strawberry' },
            { value: 'vanilla', label: 'Vanilla' },
          ]}
          value={[{ value: 'strawberry', label: 'Strawberry' }]}
          validators={{
            required: true,
          }}
        />

        <Button type="submit" block className="my-1">
          Send
        </Button>
      </Form>
    </>
  );
};

export const Radios: Story<FormProps> = (args: FormProps) => {
  const handleSubmit = (data: any) => console.log('handleSubmit', data);

  const handleChange = useCallback((data: any) => {
    console.log('handleChange', data);
  }, []);

  return (
    <>
      <Form onSubmit={handleSubmit} onChange={handleChange}>
        <Row>
          <Col xs={12} md={6}>
            <Input
              name="name"
              label="Name"
              validators={{
                required: true,
              }}
            />

            <AutoComplete name="auto" options={options} menuPosition="fixed" />
          </Col>
          <Col xs={12} md={3}>
            <RadioGroup
              value="4"
              validators={{
                required: true,
              }}
            >
              <Radio name="radio" label="Mar" value="mar" />
              <Radio name="radio" label="Tierra" value="tierra" />
              <Radio name="radio" label="Bool" value="true" />
              <Radio name="radio" label="Number" value="4" />
            </RadioGroup>
          </Col>
          <Col xs={12} md={3}>
            <RadioGroup
              validators={{
                required: true,
              }}
            >
              <Radio name="opciones" label="Espacio" value="espacio" />
              <Radio name="opciones" label="Marte" value="marte" />
              <Radio name="opciones" label="Edad" value={88} />
              <Radio name="opciones" label="Sexo" value="M" />
            </RadioGroup>
          </Col>
        </Row>

        <Button type="submit" block className="my-1">
          Send
        </Button>
      </Form>
    </>
  );
};
