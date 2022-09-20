import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { InstagramIcon } from '../../general/icons';
import { DropdownProps } from './constants';
import { Dropdown } from './Dropdown';

export default {
  title: 'Navigation/Dropdown',
  component: Dropdown,
  argTypes: {},
} as Meta;

const Template: Story<DropdownProps> = (args: DropdownProps) => {
  const handleSelection = (e: any) => {
    console.log('handleSelection', e);
  };

  return (
    <>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates,
        laborum, provident harum fuga quo et eveniet quam, nulla ex voluptatibus
        ratione. Alias optio molestiae harum, ipsum dolores illo voluptates
        beatae?
      </p>
      <div className="text-left my-4">
        <Dropdown {...args}>
          <Dropdown.Collapsible label="Abreme">
            <Dropdown.Item value="s1" onClick={handleSelection}>
              Sub-Item 1
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Title>Un Título</Dropdown.Title>
            <Dropdown.Item active value="s2" onClick={handleSelection}>
              Sub-Item 2
            </Dropdown.Item>
            <Dropdown.Item value="s3" onClick={handleSelection}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
              ea!
            </Dropdown.Item>
          </Dropdown.Collapsible>
          <Dropdown.Item value="hola-mundo" onClick={handleSelection}>
            Hola Mundo!
          </Dropdown.Item>
          <Dropdown.Item
            value="link"
            href="http://instagram.com"
            onClick={handleSelection}
          >
            Link
          </Dropdown.Item>
          <Dropdown.Item
            active
            value="with-icon"
            icon={<InstagramIcon />}
            onClick={handleSelection}
            hidden
          >
            With Icon
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Title>Un Título</Dropdown.Title>
          <Dropdown.Item
            active
            value={{ name: 'Chao Mundo' }}
            onClick={handleSelection}
          >
            Chao Mundo
          </Dropdown.Item>
          <Dropdown.Item value="lorem" onClick={handleSelection}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
            ea!
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Checkbox checked value="check-1" onChange={handleSelection}>
            Seleccioname
          </Dropdown.Checkbox>
        </Dropdown>
      </div>
      <p>
        Lorem ipsum3 dolor, sit amet consectetur adipisicing elit. Fuga quo
        maiores omnis numquam alias tempore architecto, quam, aut molestias
        explicabo dolore, deleniti tempora voluptas quibusdam consequatur
        aperiam culpa enim doloremque?
      </p>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  toggle: 'Click Me!',
};

export const FixedSize = Template.bind({});
FixedSize.args = {
  toggle: 'Click Me!',
  width: '600px',
  height: '150px',
};

export const FixedArea = Template.bind({});
FixedArea.args = {
  toggle: 'Click Me!',
  fixedArea: <div>FIXED VALUE</div>,
};
