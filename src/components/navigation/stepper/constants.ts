import { IBaseProps } from '../../IBaseProps';

export interface StepperProps extends IBaseProps {
  onSelect?: (key: any) => void;
  defaultStep?: number;
}

export interface StepProps extends IBaseProps {
  title?: string;
  active?: boolean;
  index?: number;
  summary?: React.ReactNode;
  onSelect?: (key: any) => void;
}
