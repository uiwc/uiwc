import { Meta, Story } from '@storybook/react/types-6-0';
import { useState } from 'react';
import { AutoComplete } from '../../dataEntry/autoComplete';
import { Form } from '../../dataEntry/form';
import { Button } from '../../general/button';
import { Navbar } from '../../navigation/navbar';
import { ModalProps } from './constants';
import { Modal } from './Modal';

export default {
  title: 'Feedback/Modal',
  component: Modal,
  argTypes: {},
} as Meta;

const Template: Story<ModalProps> = (args: ModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = (value: boolean) => {
    console.log('Modal closed!');
    setIsOpen(value);
  };

  return (
    <>
      <p>
        <Navbar sticky />

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          reiciendis culpa dolor praesentium, aspernatur laborum magnam
          consequuntur quidem saepe voluptates deleniti sunt consequatur
          corrupti porro aperiam architecto officiis ratione? Consequatur.
        </p>
        <p>
          Atque laudantium nemo repellendus doloribus natus maiores nisi
          voluptas, laboriosam nobis mollitia optio totam tenetur adipisci
          molestias nihil eligendi distinctio. Nam in consectetur ipsa sit quo
          est ipsam asperiores laboriosam.
        </p>
        <p>
          Rerum quos atque praesentium! Velit dignissimos possimus suscipit
          ducimus magnam earum dolor reprehenderit id! Fuga tempora, numquam at
          modi magnam nihil harum facere. Veniam tempore numquam adipisci, ex ad
          quam.
        </p>
        <p>
          Officia tempore sapiente illo. Debitis accusamus, sed iusto doloribus,
          soluta reiciendis natus ab dolor numquam provident qui. Perspiciatis
          amet explicabo nam, reiciendis beatae, adipisci ipsum ipsa sed nulla
          error iste!
        </p>
        <p>
          Quisquam optio dicta voluptate iure! Ipsum assumenda ipsa quaerat,
          nostrum cumque reprehenderit possimus ratione excepturi. Facere
          inventore eligendi sunt veniam in consequatur quis enim quaerat
          exercitationem, praesentium quasi eius nesciunt?
        </p>
        <p>
          Officiis itaque porro consequuntur consequatur, dolore quod, neque qui
          provident a esse exercitationem saepe non! Porro harum maxime,
          suscipit labore delectus laboriosam iste quae ipsum. Rem impedit iste
          aliquam vel.
        </p>
        <p>
          Debitis rerum, odit consequuntur sunt ipsam commodi earum officia
          obcaecati. A, sapiente veniam inventore corrupti quam magnam
          accusantium mollitia rem ratione qui, doloribus nemo voluptas earum
          blanditiis numquam vitae labore.
        </p>
        <p>
          Veniam corrupti suscipit cum facere consequuntur excepturi debitis
          aliquid incidunt dolorum. Perferendis debitis ullam impedit
          consectetur quibusdam odit cum repellat placeat alias omnis, eligendi
          mollitia ut consequatur quidem magnam ratione.
        </p>
        <p>
          Magnam nesciunt ea minus possimus aspernatur iusto reiciendis
          praesentium fuga aliquid quidem totam, culpa suscipit, odio numquam a
          voluptatem quod odit beatae quia mollitia esse nam? At non obcaecati
          omnis?
        </p>
        <p>
          Similique velit doloribus unde natus, porro incidunt asperiores eius
          eligendi iusto facere doloremque corporis, dolorem fugiat delectus
          quos ab vel ad architecto? Nam similique ad facere eaque, commodi amet
          dolores!
        </p>
      </p>
      <Modal {...args} onClose={handleClose} />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  type: 'success',
  open: false,
  title: 'Hello world!',
  children: (
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta pariatur
      animi sunt laboriosam enim totam distinctio nobis nulla, consectetur,
      doloribus tenetur ab dolorum harum suscipit saepe deleniti voluptates
      voluptas maxime!
    </p>
  ),
  footer: (
    <>
      <Button variant="secondary" block>
        Cancel
      </Button>
      <Button block>Looks good!</Button>
    </>
  ),
};
Default.parameters = {};

export const CustomTitle = Template.bind({});
CustomTitle.args = {
  open: false,
  title: <Button>A button as title</Button>,
  children: (
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta pariatur
      animi sunt laboriosam enim totam distinctio nobis nulla, consectetur,
      doloribus tenetur ab dolorum harum suscipit saepe deleniti voluptates
      voluptas maxime!
    </p>
  ),
  footer: (
    <>
      <Button variant="secondary">Cancel</Button>
      <Button>Looks good!</Button>
    </>
  ),
};
CustomTitle.parameters = {};

export const StaticModal = Template.bind({});
StaticModal.args = {
  open: false,
  title: 'Hello static world!',
  backdrop: 'static',
  children: (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta pariatur
        animi sunt laboriosam enim totam distinctio nobis nulla, consectetur,
        doloribus tenetur ab dolorum harum suscipit saepe deleniti voluptates
        voluptas maxime!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta pariatur
        animi sunt laboriosam enim totam distinctio nobis nulla, consectetur,
        doloribus tenetur ab dolorum harum suscipit saepe deleniti voluptates
        voluptas maxime!
      </p>
    </>
  ),
  footer: (
    <>
      <Button>Looks good!</Button>
    </>
  ),
};
StaticModal.parameters = {};

export const LongContent = Template.bind({});
LongContent.args = {
  type: 'warning',
  open: false,
  title: 'Hello world!',
  children: (
    <>
      <Form onSubmit={() => {}}>
        <AutoComplete name="auto" options={[]} menuPlacement="top" />

        <Button type="submit" block className="my-1">
          Send
        </Button>
      </Form>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta pariatur
        animi sunt laboriosam enim totam distinctio nobis nulla, consectetur,
        doloribus tenetur ab dolorum harum suscipit saepe deleniti voluptates
        voluptas maxime!
      </p>
      <p>
        Officiis itaque porro consequuntur consequatur, dolore quod, neque qui
        provident a esse exercitationem saepe non! Porro harum maxime, suscipit
        labore delectus laboriosam iste quae ipsum. Rem impedit iste aliquam
        vel.
      </p>
      <p>
        Debitis rerum, odit consequuntur sunt ipsam commodi earum officia
        obcaecati. A, sapiente veniam inventore corrupti quam magnam accusantium
        mollitia rem ratione qui, doloribus nemo voluptas earum blanditiis
        numquam vitae labore.
      </p>
      <p>
        Veniam corrupti suscipit cum facere consequuntur excepturi debitis
        aliquid incidunt dolorum. Perferendis debitis ullam impedit consectetur
        quibusdam odit cum repellat placeat alias omnis, eligendi mollitia ut
        consequatur quidem magnam ratione.
      </p>
      <p>
        Magnam nesciunt ea minus possimus aspernatur iusto reiciendis
        praesentium fuga aliquid quidem totam, culpa suscipit, odio numquam a
        voluptatem quod odit beatae quia mollitia esse nam? At non obcaecati
        omnis?
      </p>
      <p>
        Similique velit doloribus unde natus, porro incidunt asperiores eius
        eligendi iusto facere doloremque corporis, dolorem fugiat delectus quos
        ab vel ad architecto? Nam similique ad facere eaque, commodi amet
        dolores!
      </p>
    </>
  ),
  footer: (
    <>
      <Button variant="secondary" block>
        Cancel
      </Button>
      <Button block>Looks good!</Button>
    </>
  ),
};
Default.parameters = {};
