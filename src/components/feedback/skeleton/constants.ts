import { IBaseProps } from '../../IBaseProps';

export interface SkeletonProps extends IBaseProps {
  count?: number;
  duration?: number;
  delay?: number;
  width?: string | number;
  wrapper?: React.ReactNode;
  height?: string | number;
  circle?: boolean;
}

export interface SkeletonButtonProps extends IBaseProps {
  duration?: number;
  delay?: number;
  width?: string | number;
  wrapper?: React.ReactNode;
  height?: string | number;
}

export interface SkeletonAvatarProps extends IBaseProps {
  duration?: number;
  delay?: number;
  size?: string | number;
  wrapper?: React.ReactNode;
  circle?: boolean;
}

export interface SkeletonParagraphProps extends IBaseProps {
  count?: number;
  lines?: number;
  minLines?: number;
  maxLines?: number;
  duration?: number;
  delay?: number;
  width?: string | number;
  wrapper?: React.ReactNode;
}

export interface SkeletonImageProps extends IBaseProps {
  duration?: number;
  delay?: number;
  height?: string | number;
  width?: string | number;
  wrapper?: React.ReactNode;
}

export interface SkeletonTitleProps extends IBaseProps {
  duration?: number;
  delay?: number;
  height?: string | number;
  wrapper?: React.ReactNode;
}

export interface SkeletonListProps extends IBaseProps {
  count?: number;
  duration?: number;
  delay?: number;
  wrapper?: React.ReactNode;
}

export interface SkeletonTableProps extends IBaseProps {
  rows?: number;
  columns?: number;
  duration?: number;
  delay?: number;
  wrapper?: React.ReactNode;
}

export interface SkeletonPreviewerProps extends IBaseProps {
  duration?: number;
  delay?: number;
}

export interface SkeletonSubjectCardProps extends IBaseProps {
  duration?: number;
  delay?: number;
}

export interface SkeletonGradeCardProps extends IBaseProps {
  duration?: number;
  delay?: number;
}

export interface SkeletonKanbanProps extends IBaseProps {
  duration?: number;
  delay?: number;
  height?: string | number;
  width?: string | number;
  wrapper?: React.ReactNode;
}

export interface SkeletonBreadcrumbsProps extends IBaseProps {
  duration?: number;
  delay?: number;
  height?: string | number;
  count?: number;
  separator?: React.ReactNode;
}

export interface SkeletonCalendarDayProps extends IBaseProps {
  count?: number;
}
