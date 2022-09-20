import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { Col, Container, Row } from '../../layout/grid';
import { ClassCard } from './ClassCard';
import { ClassCardProps } from './constants';

export default {
  title: 'Data Display/Class Card',
  component: ClassCard,
  argTypes: {},
} as Meta;

const Template: Story<ClassCardProps> = (args: ClassCardProps) => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={6} lg={4}>
          <ClassCard
            {...args}
            title="Introducción a la Docencia y Docente Creativo"
            topic="Tema 01"
            thumbnail="https://placebeard.it/640x360"
            date={new Date()}
            duration={65}
          />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <ClassCard
            {...args}
            title="Matemáticas"
            topic="Tema 02"
            date={new Date()}
            duration={30}
          />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <ClassCard
            {...args}
            title="Ciencias Naturales Física"
            topic="Tema 03"
            thumbnail="https://placebeard.it/500x360"
            date={new Date()}
            duration={70}
          />
        </Col>
      </Row>

      <Row>
        <Col xs={12} md={6} lg={4}>
          <ClassCard
            {...args}
            title="Introducción a la Docencia y Docente Creativo"
            topic="Tema 01"
            thumbnail="https://placebeard.it/640x360"
            date={new Date()}
            duration={65}
          />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <ClassCard
            {...args}
            title="Matemáticas"
            topic="Tema 02"
            date={new Date()}
            duration={30}
          />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <ClassCard
            {...args}
            title="Ciencias Naturales Física"
            topic="Tema 03"
            thumbnail="https://placebeard.it/500x360"
            date={new Date()}
            duration={70}
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
