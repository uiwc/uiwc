import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { Syllabus } from './Syllabus';

const TOPICS: any = [
  {
    number: 1,
    title: 'Repaso de funciones lineal, cuadrática, polimómica',
    progress: 10,
  },
  {
    number: 2,
    title: 'Razones Trigonométricas y Ángulos Notables',
    progress: 45,
  },
  {
    number: 3,
    title: 'El Círculo trigonométrico',
    progress: 65,
  },
  {
    number: 4,
    title: 'El Círculo trigonométrico',
    progress: 85,
  },
  {
    number: 5,
    title: 'El cuadrado trigonométrico',
    progress: 0,
  },
  {
    number: 6,
    title: 'Problemas de la trigonométrica',
    progress: 0,
  },
];

const OPPORTUNITIES: any = [
  {
    grade: 0,
    date: new Date(),
    isExpired: true,
  },
  {
    grade: 9,
    date: new Date('2020-02-05'),
  },
  {
    grade: 15,
    date: new Date('2020-01-01'),
  },
  {
    grade: 0,
    date: new Date('2020-01-01 13:15:00'),
    inProgress: true,
  },
];

export default {
  title: 'Navigation/Syllabus',
  component: Syllabus,
  argTypes: {},
} as Meta;

const Template: Story<any> = (args: any) => {
  return (
    <Syllabus {...args}>
      <Syllabus.Topic
        number={1}
        title="Razones Trigonométricas y Ángulos Notables"
        time={35}
        checkedElements={2}
        totalElements={10}
        {...args}
      >
        <Syllabus.Goals>
          <ul>
            <li>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum,
              laborum.
            </li>
            <li>
              Dignissimos accusantium optio eveniet consequuntur ut distinctio
              architecto praesentium enim!
            </li>
            <li>
              Voluptate, illum pariatur at aliquid nobis sequi cumque
              voluptatum. Provident!
            </li>
            <li>
              Labore, expedita nulla dicta placeat eius praesentium
              necessitatibus exercitationem minima?
            </li>
            <li>
              Consectetur pariatur rem quis temporibus, magni laboriosam
              doloribus. Quis, rerum!
            </li>
          </ul>
        </Syllabus.Goals>

        <Syllabus.Video
          checked
          title="Repaso de funciones lineal, cuadrática, polimómica"
          time={22}
          {...args}
        />
      </Syllabus.Topic>

      <Syllabus.Pisa
        time={90}
        title="Evaluación sobre Ángulos Notables"
        minGrade={10}
        maxGrade={20}
        {...args}
      >
        <Syllabus.PisaTopicsWrapper className="mb-4">
          {TOPICS.map((topic, index) => (
            <Syllabus.PisaTopic
              title={topic.title}
              number={topic.number}
              progress={topic.progress}
              key={index}
            />
          ))}
        </Syllabus.PisaTopicsWrapper>

        <Syllabus.PisaOpportunitiesWrapper>
          {OPPORTUNITIES.map((opportunity, index: number) => (
            <Syllabus.PisaOpportunity
              number={index + 1}
              total={OPPORTUNITIES.length}
              minGrade={10}
              maxGrade={20}
              grade={opportunity.grade}
              date={opportunity.date}
              isExpired={opportunity.isExpired}
              inProgress={opportunity.inProgress}
            />
          ))}
        </Syllabus.PisaOpportunitiesWrapper>
      </Syllabus.Pisa>

      <Syllabus.Topic
        number={2}
        title="El Círculo trigonométrico"
        time={70}
        checkedElements={2}
        totalElements={2}
        open
        {...args}
      >
        <Syllabus.Goals>
          <ul>
            <li>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum,
              laborum.
            </li>
            <li>
              Dignissimos accusantium optio eveniet consequuntur ut distinctio
              architecto praesentium enim!
            </li>
            <li>
              Voluptate, illum pariatur at aliquid nobis sequi cumque
              voluptatum. Provident!
            </li>
            <li>
              Labore, expedita nulla dicta placeat eius praesentium
              necessitatibus exercitationem minima?
            </li>
            <li>
              Consectetur pariatur rem quis temporibus, magni laboriosam
              doloribus. Quis, rerum!
            </li>
          </ul>
        </Syllabus.Goals>

        <Syllabus.Lecture
          checked
          title="Trigonometría Introducción"
          time={33}
          {...args}
        />

        <Syllabus.Video
          checked
          title="Repaso de funciones lineal, cuadrática, polimómica"
          time={22}
          {...args}
        />

        <Syllabus.Lecture title="Biografía de Pitágoras" time={10} {...args} />

        <Syllabus.Activity
          checked
          title="Ejercicios prácticos 1"
          time={25}
          {...args}
        />

        <Syllabus.Activity time={45} {...args} />

        <Syllabus.Video
          active
          title="Funciones desarrolladas en Excel"
          time={12}
          {...args}
        />

        <Syllabus.FormativeEvaluation
          progress={0}
          title="Funciones desarrolladas en Excel"
          {...args}
        />

        <Syllabus.FormativeEvaluation
          progress={10}
          title="Funciones desarrolladas en Excel"
          {...args}
        />

        <Syllabus.FormativeEvaluation progress={40} {...args} />

        <Syllabus.FormativeEvaluation
          progress={66}
          title="Funciones desarrolladas en Excel"
          {...args}
        />

        <Syllabus.FormativeEvaluation
          progress={93}
          title="Funciones desarrolladas en Excel"
          {...args}
        />
      </Syllabus.Topic>
    </Syllabus>
  );
};

export const Default = Template.bind({});
Default.args = {};

export const Vertical = Template.bind({});
Vertical.args = {
  vertical: true,
};

export const PISA: Story<any> = (args: any) => {
  return (
    <Syllabus>
      <Syllabus.Pisa
        open={true}
        time={90}
        title="Evaluación sobre Ángulos Notables"
        initDate={'2022-08-01'}
        limitDate={'2022-12-13'}
        startAvailable={false}
        inProgress
        grade={15}
        minGrade={10}
        maxGrade={20}
        {...args}
      >
        <Syllabus.PisaTopicsWrapper className="mb-4">
          {TOPICS.map((topic, index) => (
            <Syllabus.PisaTopic
              key={index}
              title={topic.title}
              number={topic.number}
              progress={topic.progress}
            />
          ))}
        </Syllabus.PisaTopicsWrapper>

        <Syllabus.PisaOpportunitiesWrapper>
          {OPPORTUNITIES.map((opportunity, index: number) => (
            <Syllabus.PisaOpportunity
              number={index + 1}
              total={OPPORTUNITIES.length}
              minGrade={10}
              maxGrade={20}
              grade={opportunity.grade}
              date={opportunity.date}
              isExpired={opportunity.isExpired}
              inProgress={opportunity.inProgress}
            />
          ))}
        </Syllabus.PisaOpportunitiesWrapper>
      </Syllabus.Pisa>
    </Syllabus>
  );
};
