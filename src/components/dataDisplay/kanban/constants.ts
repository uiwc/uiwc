import { IBaseProps } from '../../IBaseProps';

export interface KanbanProps extends IBaseProps {}

export interface KanbanColumnProps extends IBaseProps {
  name?: React.ReactNode;
}

export interface KanbanCardProps extends IBaseProps {
  id: string;
  program?: any;
  period?: any;
  thumbnail?: string;
  title?: string;
  teachers?: any[];
  pending?: boolean;
  loading?: boolean;
  onAdd?: (data: any) => void;
  onUninvite?: (teacher: any) => void;
  onRemove?: (teacher: any) => void;
  onResend?: (teacher: any) => void;
}

export interface KanbantCardThumbnailProps extends IBaseProps {
  src?: string;
}
