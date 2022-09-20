import { TabListProps as TLProps } from 'react-tabs';

export interface TabListProps extends TLProps {
  type?: 'default' | 'pills';
  justify?: boolean;
  scrollable?: boolean;
}
