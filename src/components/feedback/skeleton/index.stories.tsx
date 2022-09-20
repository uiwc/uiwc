import { Meta, Story } from '@storybook/react/types-6-0';
import React, { useState } from 'react';
import { Flex } from '../../layout/flex';
import {
  SkeletonAvatarProps,
  SkeletonButtonProps,
  SkeletonCalendarDayProps,
  SkeletonImageProps,
  SkeletonKanbanProps,
  SkeletonListProps,
  SkeletonParagraphProps,
  SkeletonPreviewerProps,
  SkeletonProps,
  SkeletonSubjectCardProps,
  SkeletonTableProps,
  SkeletonTitleProps,
} from './constants';
import { Skeleton } from './Skeleton';

export default {
  title: 'Feedback/Skeleton',
  component: Skeleton,
  argTypes: {},
} as Meta;

const Template: Story<SkeletonProps> = (args: SkeletonProps) => {
  return <Skeleton {...args} />;
};

export const Default = Template.bind({});

export const SimulateAsync: Story<SkeletonProps> = (args: SkeletonProps) => {
  let [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 3000);

  return (
    <>
      {loading ? (
        <Skeleton height={50} width={250} className="mb-4" />
      ) : (
        <h1>Lorem ipsum</h1>
      )}
      {loading ? (
        <Skeleton count={6} />
      ) : (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          molestias aliquam earum cupiditate amet est. Quam minima sed
          exercitationem odio ratione eveniet mollitia. Consequuntur molestiae
          necessitatibus fugit sequi nam a. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Incidunt molestias aliquam earum
          cupiditate amet est. Quam minima sed exercitationem odio ratione
          eveniet mollitia. Consequuntur molestiae necessitatibus fugit sequi
          nam a. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Incidunt molestias aliquam earum cupiditate amet est. Quam minima sed
          exercitationem odio ratione eveniet mollitia. Consequuntur molestiae
          necessitatibus fugit sequi nam a. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Incidunt molestias aliquam earum
          cupiditate amet est. Quam minima sed exercitationem odio ratione
          eveniet mollitia. Consequuntur molestiae necessitatibus fugit sequi
          nam a.
        </p>
      )}
    </>
  );
};

export const Title: Story<SkeletonTitleProps> = (args: SkeletonTitleProps) => {
  return <Skeleton.Title {...args} />;
};

export const Paragraph: Story<SkeletonParagraphProps> = (
  args: SkeletonParagraphProps
) => {
  return <Skeleton.Paragraph {...args} />;
};

export const Image: Story<SkeletonImageProps> = (args: SkeletonImageProps) => {
  return <Skeleton.Image {...args} />;
};

export const List: Story<SkeletonListProps> = (args: SkeletonListProps) => {
  return <Skeleton.List {...args} />;
};

export const Button: Story<SkeletonButtonProps> = (
  args: SkeletonButtonProps
) => {
  return <Skeleton.Button {...args} />;
};

export const Avatar: Story<SkeletonAvatarProps> = (
  args: SkeletonAvatarProps
) => {
  return <Skeleton.Avatar {...args} />;
};

export const Table: Story<SkeletonTableProps> = (args: SkeletonTableProps) => {
  return <Skeleton.Table {...args} />;
};

export const Previewer: Story<SkeletonPreviewerProps> = (
  args: SkeletonPreviewerProps
) => {
  return <Skeleton.Previewer {...args} />;
};

export const SubjectCard: Story<SkeletonSubjectCardProps> = (
  args: SkeletonSubjectCardProps
) => {
  return <Skeleton.SubjectCard {...args} />;
};

export const Kanban: Story<SkeletonKanbanProps> = (
  args: SkeletonKanbanProps
) => {
  return <Skeleton.Kanban {...args} />;
};

export const Complex: Story<SkeletonProps> = (args: SkeletonProps) => {
  return (
    <Flex>
      <Skeleton.Avatar size={100} className="mr-3" />
      <Flex basis={100} direction="column">
        <Skeleton.Title />
        <Skeleton.Paragraph lines={3} />
        <Skeleton.List count={5} />
        <Skeleton.Image className="mb-3" />
        <Flex justify="between">
          <Skeleton.Button className="mr-3" />
          <Skeleton.Button />
        </Flex>
      </Flex>
    </Flex>
  );
};

export const CalendarDay: Story<SkeletonCalendarDayProps> = (
  args: SkeletonCalendarDayProps
) => {
  return <Skeleton.CalendarDay />;
};
