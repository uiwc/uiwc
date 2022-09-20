import { IBaseProps } from '../../IBaseProps';

export interface BreadcrumbsRoute {
  breadcrumb?: string;
  to?: string;
  target?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  isBack?: boolean;
  isButton?: boolean;
  onClick?: (event: any) => void;
}

export interface BreadcrumbsProps extends IBaseProps {
  separator?: React.ReactNode;
  routes?: BreadcrumbsRoute[];
  loading?: boolean;
  disabled?: boolean;
  withBackArrow?: boolean;
  backButtonText?: string;
}
