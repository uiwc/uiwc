import { IBaseProps } from '../../IBaseProps';

interface ResponsiveSizes {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  xxl?: number;
}

export interface AvatarProps extends IBaseProps {
  src?: string;
  size?: number;
  responsive?: ResponsiveSizes;
  alt?: string;
  icon?: React.ReactNode;
  shape?: 'circle' | 'square';
  iconClassName?: string;
  tooltip?: string;
  active?: boolean;
  inPopover?: boolean;
}

export interface AvatarGroupProps extends IBaseProps {}
