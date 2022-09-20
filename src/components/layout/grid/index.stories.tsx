import { Story, Meta } from '@storybook/react/types-6-0';
import { Col, Container, Row, Hidden, Visible } from './Grid';

export default {
  title: 'Layout/Grid',
  component: Container,
  argTypes: {},
} as Meta;

const Template: Story = (args: any) => {
  return (
    <Container fluid>
      <Row debug>
        <Col debug>1 of 2</Col>
        <Col debug>2 of 2</Col>
        <Col>
          <Hidden xs sm>
            <div style={{ color: 'red' }}>Extra small and small</div>
          </Hidden>
          <Visible xs sm>
            <div style={{ color: 'green' }}>
              Visible on extra small and small
            </div>
          </Visible>
        </Col>
      </Row>
      <br />
      <Row debug>
        <Col debug>1 of 3</Col>
        <Col debug>2 of 3</Col>
        <Col debug>3 of 3</Col>
      </Row>
      <br />
      <Row debug>
        <Col md={4} debug>
          md=4
        </Col>
        <Col md={4} offset={{ md: 4 }} debug>
          md=4 offset-md=4
        </Col>
      </Row>
      <br />
      <Row justify="start" debug>
        <Col xs={3} debug>
          1 of 3
        </Col>
        <Col xs={3} debug>
          2 of 3
        </Col>
        <Col xs={3} debug>
          3 of 3
        </Col>
      </Row>
      <br />
      <Row justify="center" debug>
        <Col xs={3} debug>
          1 of 3
        </Col>
        <Col xs={3} debug>
          2 of 3
        </Col>
        <Col xs={3} debug>
          3 of 3
        </Col>
      </Row>
      <br />
      <Row justify="end" debug>
        <Col xs={3} debug>
          1 of 3
        </Col>
        <Col xs={3} debug>
          2 of 3
        </Col>
        <Col xs={3} debug>
          3 of 3
        </Col>
      </Row>
      <br />
      <Row justify="between" debug>
        <Col xs={3} debug>
          1 of 3
        </Col>
        <Col xs={3} debug>
          2 of 3
        </Col>
        <Col xs={3} debug>
          3 of 3
        </Col>
      </Row>
      <br />
      <Row justify="around" debug>
        <Col xs={3} debug>
          1 of 3
        </Col>
        <Col xs={3} debug>
          2 of 3
        </Col>
        <Col xs={3} debug>
          3 of 3
        </Col>
      </Row>
      <br />
      <Row justify="initial" debug>
        <Col xs={3} debug>
          1 of 3
        </Col>
        <Col xs={3} debug>
          2 of 3
        </Col>
        <Col xs={3} debug>
          3 of 3
        </Col>
      </Row>
      <br />
      <Row justify="inherit" debug>
        <Col xs={3} debug>
          1 of 3
        </Col>
        <Col xs={3} debug>
          2 of 3
        </Col>
        <Col xs={3} debug>
          3 of 3
        </Col>
      </Row>
    </Container>
  );
};

export const Default = Template.bind({});
