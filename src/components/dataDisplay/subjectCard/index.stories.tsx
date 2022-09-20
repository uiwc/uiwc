import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { Button, Flex } from '../../..';
import { Col, Container, Row } from '../../layout/grid';
import { SubjectCardProps } from './constants';
import { SubjectCard } from './SubjectCard';

export default {
  title: 'Data Display/Subject Card',
  component: SubjectCard,
  argTypes: {},
} as Meta;

const Template: Story<SubjectCardProps> = (args: SubjectCardProps) => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={6} lg={4}>
          <SubjectCard
            {...args}
            title="Introducción a la Docencia y Docente Creativo"
            period="7mo cuatrimestre"
            thumbnail="https://placebeard.it/640x360"
            teacher="Profesor Juan Perez"
            avatar="https://pbs.twimg.com/profile_images/1168629980886183937/xHetjV3R_400x400.jpg"
            points={45}
            maxPoints={100}
            progress={50}
          />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <SubjectCard
            {...args}
            title="Matemáticas"
            period="3er año"
            teacher="Profesor Kevin Goncalvez"
            progress={25}
            points={3}
            maxPoints={20}
          />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <SubjectCard
            {...args}
            title="Ciencias Naturales Física"
            period="1er semestre"
            teacher="Profesor Simón Jóse Bolivar y Palacios"
            thumbnail="https://placebeard.it/500x360"
            avatar="https://pbs.twimg.com/profile_images/1168629980886183937/xHetjV3R_400x400.jpg"
            points={10}
            maxPoints={20}
            progress={75}
            hideProgress
            footer={
              <Flex justify="between" className="mt-4">
                <Button variant="link">Monitoreo</Button>
                <Button variant="link">Aula virtual</Button>
                <Button variant="link">Chat</Button>
              </Flex>
            }
          />
        </Col>
      </Row>
    </Container>
  );
};

export const Default = Template.bind({});
Default.args = {};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
};
