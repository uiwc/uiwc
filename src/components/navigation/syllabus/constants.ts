import { IBaseProps } from '../../IBaseProps';

export interface SyllabusProps extends IBaseProps {
  vertical?: boolean;
  open?: boolean;
  onClose?: (value: boolean) => void;
}

export interface SyllabusIconProps extends IBaseProps {
  vertical?: boolean;
}

export interface SyllabusTopicProps extends IBaseProps {
  vertical?: boolean;
  open?: boolean;
  number?: number;
  title?: string;
  time?: number;
  checkedElements?: number;
  totalElements?: number;
}

export interface SyllabusPisaProps extends IBaseProps {
  loading?: boolean;
  vertical?: boolean;
  open?: boolean;
  title?: string;
  time?: number;
  weight?: number;
  minGrade?: number;
  maxGrade?: number;
  grade?: number;
  numberOfQuestions?: number;
  limitDate?: any;
  initDate?: any;
  opportunityNumber?: number;
  totalOpportunities?: number;
  active?: boolean;
  closed?: boolean;
  inProgress?: boolean;
  startAvailable?: boolean;
  took?: boolean;
  continueTo?: string;
  redirectTo?: string;
  isBestGrade?: boolean;
  onClick?: (id: any) => void;
}

export interface SyllabusGoalsProps extends IBaseProps {
  open?: boolean;
}

export interface SyllabusVideoProps extends IBaseProps {
  vertical?: boolean;
  checked?: boolean;
  title?: string;
  time?: number;
  active?: boolean;
  number?: number;
  onClick?: (id: any) => void;
}

export interface SyllabusLectureProps extends SyllabusVideoProps {}

export interface SyllabusActivityProps extends SyllabusVideoProps {}

export interface SyllabusFormativeEvaluationProps extends IBaseProps {
  vertical?: boolean;
  progress?: number;
  title?: string;
  active?: boolean;
  onClick?: (id: any) => void;
}

export interface SyllabusPisaTopicProps extends IBaseProps {
  number?: number;
  title?: string;
  progress?: number;
  itemsPerRow?: number;
  loading?: boolean;
}

export interface SyllabusPisaOpportunityProps extends IBaseProps {
  number?: number;
  total?: number;
  minGrade?: number;
  maxGrade?: number;
  grade?: number;
  date?: any;
  itemsPerRow?: number;
  isExpired?: boolean;
  inProgress?: boolean;
  redirectTo?: string;
  continueTo?: string;
  detailsTo?: string;
}

export interface SyllabusPisaTopicsWrapperProps extends IBaseProps {
  loading?: boolean;
}

export interface SyllabusPisaOpportunitiesWrapperProps extends IBaseProps {
  loading?: boolean;
}
