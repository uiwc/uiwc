import { Meta, Story } from '@storybook/react/types-6-0';
import { Navbar } from '../../navigation/navbar';
import { Aside } from './Aside';
import { AsideProps } from './constants';

export default {
  title: 'Layout/Aside',
  component: Aside,
  argTypes: {},
} as Meta;

const Template: Story<AsideProps> = (args: AsideProps) => {
  return (
    <>
      <Navbar sticky />

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
        explicabo odit voluptate dicta ipsam repellat neque officiis? Totam
        suscipit excepturi magnam porro distinctio dignissimos ipsam. Inventore
        corrupti sit mollitia ratione.
      </p>
      <p>
        Nulla quos voluptate deserunt qui similique quam consequatur perferendis
        autem nihil omnis cumque sunt in odio officia dicta, quod molestias!
        Quibusdam omnis amet sint! Nam dolores incidunt tempore quis facilis.
      </p>
      <p>
        Quaerat, modi laboriosam. Nam ex, consectetur laborum esse, officia
        dolores ullam totam id odit sit itaque exercitationem omnis architecto
        ut accusantium ducimus inventore culpa qui consequatur. Omnis officiis
        velit magnam.
      </p>
      <p>
        Delectus pariatur nostrum, nemo porro adipisci non odit corporis impedit
        modi dolore sapiente reprehenderit aliquid, dicta harum ullam deleniti
        numquam provident esse quam quis dolorum ea nam soluta. Facere, nulla!
      </p>
      <p>
        Quasi incidunt, vel, harum eos dicta sequi quis quo, ipsa illum nobis
        molestias velit quaerat necessitatibus dolorum perferendis expedita
        tempore itaque corporis earum totam quos? Quo, asperiores. Adipisci,
        rerum animi!
      </p>
      <p>
        Molestias exercitationem quod iste fugit accusantium dolorum cumque.
        Voluptatum ex alias voluptate reprehenderit quia esse molestias ut rem,
        quod aperiam unde placeat illum inventore ipsa, dolore debitis,
        aspernatur provident laudantium!
      </p>
      <p>
        Illo corrupti nisi vero, a voluptas earum impedit assumenda magnam
        excepturi tenetur facilis dolorem odio quo ducimus? Ducimus, voluptas.
        At enim accusantium nemo quis iusto esse repellat inventore debitis quo.
      </p>
      <p>
        Sapiente eius eveniet pariatur dolorem culpa? Debitis laudantium dicta
        veritatis eius similique consequatur? Aliquid perspiciatis minima totam
        alias sint non inventore provident perferendis, beatae, explicabo
        incidunt. Odit provident minus cum!
      </p>

      <Aside {...args}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque iure
        iusto voluptate odit, exercitationem itaque molestias perferendis eos
        dolores, ipsa blanditiis voluptatum aliquid ullam voluptatibus? Aliquid
        soluta porro officia sed.
      </Aside>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  open: true,
  height: 'calc(100vh - 70px)',
  topOffset: 70,
  position: 'left',
  picker: <div className="p-3 bg-secondary">Picker</div>,
  pickerTopOffset: 70,
};
