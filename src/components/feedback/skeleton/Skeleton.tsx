import LoadingSkeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { SkeletonProps } from './constants';
import { SkeletonAvatar } from './SkeletonAvatar';
import { SkeletonBreadcrumbs } from './SkeletonBreadcrumbs';
import { SkeletonButton } from './SkeletonButton';
import { SkeletonCalendarDay } from './SkeletonCalendarDay';
import { SkeletonGradeCard } from './SkeletonGradeCard';
import { SkeletonImage } from './SkeletonImage';
import { SkeletonKanban } from './SkeletonKanban';
import { SkeletonList } from './SkeletonList';
import { SkeletonParagraph } from './SkeletonParagraph';
import { SkeletonPreviewer } from './SkeletonPreviewer';
import { SkeletonSubjectCard } from './SkeletonSubjectCard';
import { SkeletonTable } from './SkeletonTable';
import { SkeletonTitle } from './SkeletonTitle';

export { SkeletonTheme };

export function Skeleton({
  count = 1,
  duration = 1.2,
  delay = 0,
  circle = false,
  ...rest
}: SkeletonProps) {
  return (
    <LoadingSkeleton
      count={count}
      duration={duration}
      delay={delay}
      circle={circle}
      {...rest}
    />
  );
}

Skeleton.Paragraph = SkeletonParagraph;
Skeleton.Image = SkeletonImage;
Skeleton.Title = SkeletonTitle;
Skeleton.Button = SkeletonButton;
Skeleton.List = SkeletonList;
Skeleton.Avatar = SkeletonAvatar;
Skeleton.Table = SkeletonTable;
Skeleton.Previewer = SkeletonPreviewer;
Skeleton.SubjectCard = SkeletonSubjectCard;
Skeleton.GradeCard = SkeletonGradeCard;
Skeleton.Kanban = SkeletonKanban;
Skeleton.Breadcrumbs = SkeletonBreadcrumbs;
Skeleton.CalendarDay = SkeletonCalendarDay;
