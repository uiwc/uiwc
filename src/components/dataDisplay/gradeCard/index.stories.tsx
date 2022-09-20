import { Meta, Story } from '@storybook/react/types-6-0';
import { Col, Container, Row } from '../../layout/grid';
import { GradeCardProps } from './constants';
import { GradeCard } from './GradeCard';

export default {
  title: 'Data Display/Grade Card',
  component: GradeCard,
  argTypes: {},
} as Meta;

const Template: Story<GradeCardProps> = (args: GradeCardProps) => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={6} lg={3} className="mb-4">
          <GradeCard
            {...args}
            flat
            header="Localización de información "
            value={80}
            footer="Navegar para localizar y recuperar una o más piezas distintas de información. "
          />
        </Col>
        <Col xs={12} md={6} lg={3} className="mb-4">
          <GradeCard
            {...args}
            flat
            header="Razonamiento matemático"
            value={10}
            footer="Evaluar situaciones, seleccionar estrategias, sacar conclusiones lógicas, desarrollar y describir soluciones e identificar cómo se pueden aplicar esas soluciones."
          />
        </Col>
        <Col xs={12} md={6} lg={3} className="mb-4">
          <GradeCard
            {...args}
            flat
            header="Generar ideas diversas"
            value={65}
            footer="Aplicar el conocimiento conceptual para describir o explicar fenómenos, seleccionar procedimientos apropiados que involucren dos o más pasos, organizar / mostrar datos, interpretar o usar conjuntos de datos o gráficos simples."
          />
        </Col>
        <Col xs={12} md={6} lg={3} className="mb-4">
          <GradeCard
            {...args}
            header={
              <>
                <span className="d-block">Evaluación 1</span>
                <strong>Tema:</strong>{' '}
                <span className="text-muted">Función Exponencial</span>
              </>
            }
            value={9}
            minGrade={11}
            maxGrade={20}
            showLevel
          />
        </Col>
        <Col xs={12} md={6} lg={3} className="mb-4">
          <GradeCard
            {...args}
            flat
            header={
              <>
                <span className="d-block">Evaluación 1</span>
                <strong>Tema:</strong>{' '}
                <span className="text-muted">Función Exponencial</span>
              </>
            }
            value={45}
            showLevel
          />
        </Col>
        <Col xs={12} md={6} lg={3} className="mb-4">
          <GradeCard
            {...args}
            header={
              <>
                <span className="d-block">Evaluación 1</span>
                <strong>Tema:</strong>{' '}
                <span className="text-muted">Función Exponencial</span>
              </>
            }
            value={100}
            minGrade={50}
            maxGrade={100}
            showLevel
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
