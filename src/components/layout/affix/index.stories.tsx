import { Story, Meta } from '@storybook/react/types-6-0';
import { Affix } from './Affix';
import { AffixProps } from './constants';
import { Container, Row, Col } from '../grid';
import { Main } from '../main';
import styled from 'styled-components';

const Grid = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    'navbar'
    'main'
    'footer';
`;

export default {
  title: 'Layout/Affix',
  component: Affix,
  argTypes: {},
} as Meta;

const Template: Story<AffixProps> = (args: AffixProps) => {
  return (
    <Grid>
      <Main>
        <Container>
          <Row id="content">
            <Col xs={9}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis velit eaque dignissimos, quis aut sequi officia cumque
                repellendus suscipit, quidem magni debitis quas neque quaerat
                minima ut deleniti molestiae assumenda.
              </p>
              <p>
                Maxime ipsum consequuntur, doloribus rerum officia, dignissimos
                accusantium repellendus ex officiis eum ut repudiandae
                reiciendis illo explicabo iste! Neque architecto maiores
                aspernatur est maxime ipsa dignissimos totam facere rem
                exercitationem.
              </p>
              <p>
                Culpa, totam iusto? Officiis non debitis optio laboriosam
                suscipit cum, architecto excepturi officia facilis velit quas
                odit, possimus molestiae iure quis ullam voluptatum inventore
                nulla in quam eligendi, provident enim?
              </p>
              <p>
                Aliquid delectus quod, sit eius vel repudiandae! Soluta vel
                eveniet assumenda ea natus quaerat quos dolor alias voluptatibus
                totam qui fuga voluptate, corrupti dolorum aspernatur laboriosam
                ut! Eaque, eos labore.
              </p>
              <p>
                Tenetur, minus impedit? Rem, labore asperiores facilis dolores
                quis voluptate assumenda, recusandae quibusdam laboriosam
                perspiciatis, voluptates aliquid placeat consectetur adipisci ad
                repellendus! Recusandae, id dolorum commodi consequuntur placeat
                nostrum iusto.
              </p>
              <p>
                Nulla ratione culpa quisquam tempora et dignissimos at
                consequuntur esse quo rem! Aliquid eligendi incidunt nesciunt
                cumque nihil tempore laborum deserunt nulla, quas eius atque
                consequatur fugiat assumenda ab officia.
              </p>
              <p>
                Est iste eius repellendus, hic modi similique autem delectus
                dolore nobis, repudiandae omnis tenetur! Velit repudiandae ea,
                veniam, ad deleniti pariatur, cumque cupiditate accusamus
                repellat quam voluptates minima aspernatur exercitationem?
              </p>
              <p>
                Dolores sequi suscipit quis delectus voluptate, architecto animi
                itaque nobis? Excepturi rem architecto asperiores molestias ab
                sit consequatur similique exercitationem magnam, inventore quam
                voluptatem harum commodi, et rerum ex doloribus.
              </p>
              <p>
                Exercitationem distinctio, hic asperiores veritatis quia
                aliquam? Odit asperiores consectetur nisi eaque aliquam harum,
                magnam, voluptas veritatis obcaecati ut distinctio et libero
                suscipit, soluta id minima. Tempora veritatis pariatur quae.
              </p>
              <p>
                Pariatur aut sunt excepturi ipsum rem assumenda dolor,
                dignissimos laborum sequi at minima quae numquam voluptates
                alias distinctio nihil beatae? Quas, ex? Cumque quis provident
                tempore voluptas, autem nobis nisi.
              </p>
            </Col>
            <Col xs={3}>
              <Affix {...args}>
                <div className="bg-secondary rounded p-3">
                  <h1 className="mt-0">Sticky element</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sint ipsa ab excepturi, totam cum quas asperiores eius nobis
                    temporibus consectetur possimus tempora iure ex commodi
                    delectus incidunt deleniti. Nisi, obcaecati.
                  </p>
                </div>
              </Affix>
            </Col>
          </Row>

          <Row className="bg-primary text-white">
            <Col>
              <h1>Footer</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae enim aliquid quas dolorum fuga quo sed saepe, sequi
                pariatur mollitia ipsum cumque possimus debitis aliquam nesciunt
                incidunt non in? Blanditiis!. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Repudiandae enim aliquid quas
                dolorum fuga quo sed saepe, sequi pariatur mollitia ipsum cumque
                possimus debitis aliquam nesciunt incidunt non in? Blanditiis!
              </p>
              <p>
                Distinctio aut animi alias ducimus dolores! Quibusdam fuga aut
                delectus libero provident, quae sequi modi recusandae laborum
                officiis iure minus fugit sed nesciunt natus ipsam ipsa
                reiciendis ullam. Blanditiis, sed?
              </p>
              <p>
                Aliquam laudantium corporis iure, placeat fugiat explicabo qui
                odio eum itaque sunt reiciendis quos ea eligendi? Quis, quo
                repudiandae. Numquam ratione magni dolore veritatis commodi ad
                dolor ab sapiente obcaecati.
              </p>
              <p>
                Tempora quaerat fuga doloremque maiores ab nobis itaque sit
                culpa cum ducimus qui perferendis harum velit, libero quia eos
                dolores recusandae nihil adipisci, neque temporibus. Placeat
                ratione animi perspiciatis quidem?
              </p>
              <p>
                Reprehenderit commodi asperiores velit quod obcaecati ullam sunt
                ipsum maxime aliquam quo? Quia tempora itaque unde deserunt
                voluptatibus quos saepe nostrum reprehenderit ipsam, modi illum
                labore ipsum pariatur repudiandae magni!
              </p>
            </Col>
          </Row>
        </Container>
      </Main>
    </Grid>
  );
};

export const Default = Template.bind({});
Default.args = {
  bottomBoundary: '#content',
  children:
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt pariatur dolore recusandae deserunt autem id ducimus iure tempore nihil corrupti, illum quod accusantium! Rem ipsum eius voluptatibus quam totam similique!',
};
