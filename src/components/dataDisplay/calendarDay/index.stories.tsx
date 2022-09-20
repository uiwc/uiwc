import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { CalendarDay } from './CalendarDay';
import { CalendarDayProps } from './constants';

export default {
  title: 'Data Display/Calendar Day',
  component: CalendarDay,
  argTypes: {},
} as Meta;

const Template: Story<CalendarDayProps> = (args: CalendarDayProps) => (
  <>
    <CalendarDay date={new Date()}>
      <CalendarDay.Subject
        subject="Matemáticas"
        period="2do período"
        date={new Date()}
      >
        <CalendarDay.Entry
          name="Sesión en vivo: Tema 2, Euclides"
          date={new Date()}
          startTime={new Date()}
          endTime={new Date(new Date().getTime() + 3600 * 1000)}
          author="Christiam Mena"
          linkTo="d"
          syncWithGoogle
        ></CalendarDay.Entry>
        <CalendarDay.Entry
          isLast
          syncWithGoogle
          name="Lorem ipsum dolor sit amet consectetur adipisicing elit. "
          date={new Date()}
          startTime={new Date()}
        ></CalendarDay.Entry>
      </CalendarDay.Subject>

      <CalendarDay.Subject
        subject="Ciencias Sociales"
        period="2do período"
        date={new Date('2023-03-27')}
      >
        <CalendarDay.Entry
          syncWithGoogle
          name="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta minima
        mollitia repudiandae doloribus eius blanditiis? Numquam temporibus
        provident eaque, similique veniam eos vel sunt optio, accusamus, culpa
        nam perspiciatis excepturi?"
          date={new Date()}
          startTime={new Date()}
        ></CalendarDay.Entry>
        <CalendarDay.Entry
          isLast
          name="Lorem ipsum dolor sit amet consectetur adipisicing elit. "
          date={new Date()}
          startTime={new Date()}
        ></CalendarDay.Entry>
      </CalendarDay.Subject>
    </CalendarDay>

    <CalendarDay date={new Date('2020-03-27')}>
      <CalendarDay.Subject
        subject="Castellano"
        period="2do período"
        date={new Date('2020-03-27')}
      >
        <CalendarDay.Entry
          syncWithGoogle
          name="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta minima
        mollitia repudiandae doloribus eius blanditiis? Numquam temporibus
        provident eaque, similique veniam eos vel sunt optio, accusamus, culpa
        nam perspiciatis excepturi?"
          date={new Date()}
          startTime={new Date()}
        ></CalendarDay.Entry>
        <CalendarDay.Entry
          isLast
          name="Lorem ipsum dolor sit amet consectetur adipisicing elit. "
          date={new Date()}
          startTime={new Date()}
        ></CalendarDay.Entry>
      </CalendarDay.Subject>
    </CalendarDay>

    <CalendarDay date={new Date('2020-09-10')}>
      <CalendarDay.Subject
        subject="Inglés"
        period="2do período"
        date={new Date('2020-09-10')}
      >
        <CalendarDay.Entry
          isLast
          name="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta minima
        mollitia repudiandae doloribus eius blanditiis? Numquam temporibus
        provident eaque, similique veniam eos vel sunt optio, accusamus, culpa
        nam perspiciatis excepturi?"
          date={new Date()}
          startTime={new Date()}
        ></CalendarDay.Entry>
      </CalendarDay.Subject>
    </CalendarDay>
  </>
);

export const Default = Template.bind({});
