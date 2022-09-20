import { ReactNode } from 'react';
import { IBaseProps } from '../../IBaseProps';

export interface TreeNodeProps extends IBaseProps {
  node: any;
  children: ReactNode;
  isLeaf: boolean;
  isParent: boolean;
  isCollapse: boolean;
  checked: boolean;
  collapseIcon: ReactNode;
  expandIcon: ReactNode;
  onCheck: (nodeInfo: any) => void;
  onExpand: (nodeInfo: any) => void;
  render: (nodeInfo: any) => ReactNode;
}

export interface TreeProps extends IBaseProps {
  nodes?: any[];
  childrenAttr?: string;
  titleAttr?: string;
  collapseIcon?: ReactNode;
  expandIcon?: ReactNode;
  render?: (nodeInfo: any) => ReactNode;
  onNodeChange: (nodes: any[]) => void;
}
