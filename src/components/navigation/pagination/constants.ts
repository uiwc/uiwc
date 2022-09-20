import { IBaseProps } from '../../IBaseProps';

export interface PaginationProps extends IBaseProps {
  pageCount: number;
  pageIndex?: number;
  pageSize?: number;
  pageSizeOptions?: number[];
  align?: 'center' | 'start' | 'end' | 'between';
  disabled?: boolean;
  onPreviousPage?: () => void;
  onNextPage?: () => void;
  onGotoPage?: (updater: number | ((pageIndex: number) => number)) => void;
  onSetPageSize?: (pageSize: number) => void;
  onUpdate?: (data: { pageSize: number; pageIndex: number }) => void;
}
