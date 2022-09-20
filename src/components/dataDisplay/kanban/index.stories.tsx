import { Meta, Story } from '@storybook/react/types-6-0';
import { Block } from '../../layout/block';
import { Col } from '../../layout/grid';
import { KanbanProps } from './constants';
import { Kanban } from './Kanban';

export default {
  title: 'Data Display/Kanban',
  component: Kanban,
  argTypes: {},
} as Meta;

const Template: Story<KanbanProps> = (args: KanbanProps) => {
  return (
    <Block narrow>
      <Col>
        <Kanban {...args}>
          <Kanban.Column name="Periodo 1">
            <Kanban.Card
              id="1"
              title="Introducción a la Docencia y Docente Creativo"
              thumbnail="https://storage.googleapis.com/storage.dawere.com/newBE%2FSubjects%2F0d6ca2b6-921c-468f-81cc-dec6093b5d3b.svg"
              teachers={[
                {
                  name: 'Christiam',
                  lastName: 'Mena',
                  avatar: 'https://placebeard.it/100x100',
                  phone: '+56 912345678',
                  email: 'christiam.mena@gmail.com',
                  pending: false,
                },
                {
                  name: 'Alvaro',
                  lastName: 'Gonzalez',
                  avatar: null,
                  phone: null,
                  email: 'alvaro.gon@gmail.com',
                  pending: false,
                },
                {
                  name: 'Amir',
                  lastName: 'Salous',
                  avatar: null,
                  phone: null,
                  email: 'amir.salous@gmail.com',
                  pending: false,
                },
                {
                  name: 'Pepito',
                  lastName: 'Perez',
                  avatar: null,
                  phone: null,
                  email: 'amir.salous@gmail.com',
                  pending: false,
                },
                {
                  name: 'Marco',
                  lastName: 'Expino',
                  avatar: null,
                  phone: null,
                  email: 'amir.salous@gmail.com',
                  pending: false,
                },
                {
                  name: null,
                  lastName: null,
                  avatar: null,
                  phone: null,
                  email: 'mario.bros@gmail.com',
                  pending: true,
                },
              ]}
              onAdd={(card: any) => console.log('add', card)}
              onRemove={(teacher: any) => console.log('remove', teacher)}
              onResend={(teacher: any) => console.log('resend', teacher)}
            />
            <Kanban.Card
              id="2"
              title="Ciencias Naturales"
              thumbnail="https://storage.googleapis.com/storage.dawere.com/newBE%2FSubjects%2F132d4564-ac10-4c49-b858-2844cb289a79.svg"
              teachers={[
                {
                  name: 'Christiam',
                  lastName: 'Mena',
                  avatar: 'https://placebeard.it/102x102',
                },
                {
                  name: 'Simon',
                  lastName: 'Gonzalez',
                  avatar: null,
                },
              ]}
            />
          </Kanban.Column>
          <Kanban.Column name="Periodo 2">
            <Kanban.Card
              id="3"
              title="Matemáticas"
              thumbnail="https://storage.googleapis.com/storage.dawere.com/newBE%2FSubjects%2F09537906-f650-409e-b10c-db8f1f2ea1b8.svg"
              teachers={[
                {
                  name: 'Mario',
                  lastName: 'Bermudas',
                  avatar: null,
                },
              ]}
            />
          </Kanban.Column>
          <Kanban.Column name="Periodo 3">
            <Kanban.Card
              id="4"
              title="Ciencias Naturales Biologías"
              thumbnail="https://storage.googleapis.com/storage.dawere.com/newBE%2FSubjects%2F6bf94ba0-b700-481f-a767-f42a632420af.svg"
              teachers={[
                {
                  name: 'Timo',
                  lastName: 'Farol',
                  avatar: null,
                },
              ]}
            />
            <Kanban.Card
              id="5"
              title="Lengua Castellana"
              thumbnail="https://storage.googleapis.com/storage.dawere.com/newBE%2FSubjects%2Fa8751019-c300-4362-9eec-d29ad7a8194c.svg"
              teachers={[]}
            />
            <Kanban.Card
              id="6"
              title="Filosofía"
              thumbnail="https://storage.googleapis.com/storage.dawere.com/newBE%2FSubjects%2F6ef9d0f8-b941-4232-ba09-40ed2940b93e.svg"
              teachers={[]}
            />
          </Kanban.Column>
          <Kanban.Column name="Periodo 4">
            <Kanban.Card
              id="7"
              title="English 2-A Through ESOL"
              thumbnail="https://storage.googleapis.com/storage.dawere.com/newBE%2FSubjects%2Fc66abf40-0f7a-4f88-9fc4-dbcd06812a97.svg"
              teachers={[
                {
                  name: 'Christiam',
                  lastName: 'Mena',
                  avatar: 'https://placebeard.it/103x103',
                },
              ]}
            />
          </Kanban.Column>
          <Kanban.Column name="Periodo 5">
            <Kanban.Card
              id="8"
              title="Physical Science (PH)"
              thumbnail="https://storage.googleapis.com/storage.dawere.com/newBE%2FSubjects%2Fe45ab06c-9ef3-46c4-8484-c30ecf55f578.svg"
              teachers={[]}
            />
          </Kanban.Column>
          <Kanban.Column name="Periodo 6">
            <Kanban.Card
              id="9"
              title="English 2-A Through ESOL"
              thumbnail="https://storage.googleapis.com/storage.dawere.com/newBE%2FSubjects%2Fc66abf40-0f7a-4f88-9fc4-dbcd06812a97.svg"
              teachers={[
                {
                  name: 'Christiam',
                  lastName: 'Mena',
                  avatar: 'https://placebeard.it/103x103',
                },
              ]}
            />
          </Kanban.Column>
        </Kanban>
      </Col>
    </Block>
  );
};

export const Default = Template.bind({});
Default.args = {};
