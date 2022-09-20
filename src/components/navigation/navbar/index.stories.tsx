import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { Dropdown } from '..';
import { Avatar, Icons } from '../..';
import { Button } from '../../general/button';
import { Col, Container, Row } from '../../layout/grid';
import { NavbarProps } from './constants';
import { Navbar } from './Navbar';

export default {
  title: 'Navigation/Navbar',
  component: Navbar,
  argTypes: {},
} as Meta;

const Template: Story<NavbarProps> = (args: NavbarProps) => {
  return (
    <div className="vh-80 overflow-y-auto">
      <Navbar {...args}>
        <div>
          <ul className="mr-5">
            <Navbar.Item>
              <a href=" ">Home</a>
            </Navbar.Item>
            <Navbar.Item>
              <a href=" ">Link</a>
            </Navbar.Item>
            <Navbar.Item>
              <Dropdown
                toggle={
                  <>
                    <Avatar />
                    Dropdown <Icons.Chevron />
                  </>
                }
                autoWidth
                autoHeight
                menuClassName="bg-cultured mt-3"
              >
                {Array(10)
                  .fill({})
                  .map((_, i) => (
                    <Dropdown.Item>Item 0{i}</Dropdown.Item>
                  ))}
              </Dropdown>
            </Navbar.Item>
          </ul>

          <Button variant="secondary" className="mr-2">
            Inicia Sesión
          </Button>
          <Button variant="orange">Regístrate Gratis</Button>
        </div>
      </Navbar>

      <div className="bg-primary text-white">
        <Container>
          <Row>
            <Col>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
                expedita aliquam vitae laudantium voluptates facilis tempora in
                fugit, aliquid voluptas, cupiditate eum. Quos, illo. Ea
                voluptatem deserunt soluta laborum voluptate!
              </p>
              <p>
                Eum quam voluptas accusantium porro vel tenetur. Accusamus
                quisquam veritatis quos quia, eveniet blanditiis, id ab harum
                dolorum mollitia qui! In, explicabo aliquid repellendus soluta
                dolorem consequatur quibusdam facilis tempore?
              </p>
              <p>
                Et dicta natus, temporibus vero aliquam rerum iusto voluptate,
                sequi distinctio, dolore debitis assumenda nesciunt dignissimos
                modi! Blanditiis dolore magni totam temporibus alias ratione,
                inventore, quas numquam quaerat velit distinctio?
              </p>
              <p>
                Consequuntur rem possimus alias animi quod molestias atque
                quisquam est iure? Tempore, ex ut repellendus labore omnis
                doloribus fugiat cum quisquam magnam eum nisi accusantium
                officiis sit dolores dignissimos nam.
              </p>
              <p>
                Odit eaque reiciendis nulla quo perferendis? Omnis placeat
                maxime doloremque, accusamus non suscipit, minus quia
                repudiandae hic exercitationem sit deleniti assumenda,
                consequatur corporis alias recusandae soluta eaque et quae?
                Cupiditate?
              </p>
              <p>
                Maiores ratione, quisquam obcaecati ea illo animi quam
                asperiores nulla nesciunt provident eos assumenda minus, dolorem
                modi mollitia! At nihil aut itaque quibusdam, adipisci numquam
                rem dolore perferendis voluptas veniam!
              </p>
              <p>
                Qui, ipsam optio, laboriosam architecto porro dolor earum nam
                natus nihil consequatur itaque, minima omnis libero placeat
                eligendi! Sunt placeat velit iste natus ullam, maxime aut alias
                quos quasi error.
              </p>
              <p>
                Voluptate dolorem consequuntur quod omnis aliquid totam
                molestiae voluptatibus distinctio, sit excepturi optio quis?
                Laudantium veniam repellendus temporibus aliquam culpa eligendi
                maiores, natus omnis, exercitationem, nemo at eius laboriosam
                vitae.
              </p>
              <p>
                Est expedita amet sint dolor porro nostrum consequuntur, minus
                modi! Sint beatae repellat facere nulla necessitatibus.
                Voluptatum repellendus deleniti soluta libero obcaecati, itaque
                perspiciatis aperiam, laudantium quas sit, ullam culpa.
              </p>
              <p>
                Sed, quisquam eius! Obcaecati, harum accusamus. Ducimus
                doloribus illo nam ab libero ad, culpa suscipit velit, repellat,
                nisi sit? Soluta dolore nulla vero odio rerum! Necessitatibus,
                illo sed? Eos, corporis?
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  sticky: true,
  onToggle: (status: boolean) => {
    alert(status);
  },
};
