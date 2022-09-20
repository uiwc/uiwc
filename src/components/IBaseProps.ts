import React from 'react';

export interface IBaseProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  children?: React.ReactNode;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
  ref?: any;
}
