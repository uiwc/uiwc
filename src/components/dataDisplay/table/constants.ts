import { IBaseProps } from '../../IBaseProps';

export interface TableProps extends IBaseProps {
  columns: any[];
  data: any[];
  loading?: boolean;
  clickable?: boolean;
  onRowClick?: (row: any) => void;
  // Selection
  selectable?: boolean;
  onSelect?: (data: any) => void;
  // Grouping
  groupByField?: string;
  // Sorting
  sortable?: boolean;
  manualSorting?: boolean;
  onSorting?: (data: any) => void;
  // Pagination
  pageable?: boolean;
  defaultPageSize?: number;
  defaultPageIndex?: number;
  pageSizeOptions?: number[];
  onPaging?: (data: any) => void;
  hideHeader?: boolean;
}
