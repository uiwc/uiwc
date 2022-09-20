import { IBaseProps } from '../../IBaseProps';

export interface WizardProps extends IBaseProps {
  children?: any[] | null;
  align?: string;
  stepsDisabled?: string[];
  onStepChange?: (stepId: string, prevStepId?: string) => void;
}

export interface WizardStepProps extends IBaseProps {
  id: string;
  children?: React.ReactNode;
  transition?: any;
  title?: string;
}

export interface TopNavigationProps {
  align?: string;
  stepsDisabled?: string[];
  onChange?: (
    direction: 'previous' | 'next',
    stepId: string,
    prevStepId?: string
  ) => void;
}

export interface BottomNavigationProps {
  stepsDisabled?: string[];
  onChange?: (
    direction: 'previous' | 'next',
    stepId: string,
    prevStepId?: string
  ) => void;
}
