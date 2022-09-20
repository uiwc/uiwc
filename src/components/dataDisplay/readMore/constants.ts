import { IBaseProps } from '../../IBaseProps';

export interface ReadMoreProps extends IBaseProps {
  min?: number;
  ideal?: number;
  max?: number;
  showButton?: boolean;
}
