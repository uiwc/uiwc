import { Meta, Story } from '@storybook/react/types-6-0';
import { Cart } from './Cart';
import { CartItemProps, CartProps } from './constants';

export default {
  title: 'Data Entry/Cart',
  component: Cart.Item,
  argTypes: {},
} as Meta;

const Template: Story<CartItemProps> = (args: CartItemProps) => {
  return (
    <>
      <Cart.Item {...args} />
      <Cart.Item
        id="2"
        price={300}
        currency="€"
        title="Preparatoria Online de España"
      />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  id: '1',
  title: 'Bachillerato Virtual de Estados Unidos',
  price: 155,
  onChange: (data: any) => console.log(data),
};

export const WithQuantity = Template.bind({});
WithQuantity.args = {
  id: '1',
  title: 'Bachillerato Virtual de Venezuela',
  price: 200,
  quantity: 99,
  onChange: (data: any) => console.log(data),
};

export const Checked = Template.bind({});
Checked.args = {
  id: '1',
  title: 'Bachillerato Virtual de Venezuela',
  price: 200,
  checked: true,
  onChange: (data: any) => console.log(data),
};

export const CheckedWithQty = Template.bind({});
CheckedWithQty.args = {
  id: '1',
  title: 'Bachillerato Virtual de Venezuela',
  price: 200,
  quantity: 10,
  checked: true,
  onChange: (data: any) => console.log(data),
};

export const Group: Story<CartProps> = (args: CartProps) => {
  return (
    <>
      <Cart onChange={(data: any) => console.log(data)}>
        <Cart.Item
          id="ve"
          price={155}
          quantity={99}
          currency="€"
          title="Preparatoria Online de Venezuela"
        />
        <Cart.Item
          id="es"
          price={300}
          currency="€"
          title="Preparatoria Online de España"
        />
      </Cart>
      <Cart.Total total={155 * 99 + 300 * 10} currency="€" />
    </>
  );
};
