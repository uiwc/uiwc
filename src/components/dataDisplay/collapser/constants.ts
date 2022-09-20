import React from 'react';
import { IBaseProps } from '../../IBaseProps';

export interface CollapserProps extends IBaseProps {
  open?: boolean;
  label?: React.ReactNode;
  onExpanded?: (state: boolean) => void;
  panelClassName?: string;
  contentClassName?: string;
}
