import { IBaseProps } from '../../IBaseProps';

export interface GradeCardProps extends IBaseProps {
  flat?: boolean;
  header?: React.ReactNode;
  value: number;
  minGrade?: number;
  maxGrade?: number;
  footer?: React.ReactNode;
  loading?: boolean;
  showLevel?: boolean;
  detailsTo?: string;
}
