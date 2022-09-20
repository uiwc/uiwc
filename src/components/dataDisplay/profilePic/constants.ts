import { IBaseProps } from '../../IBaseProps';

export interface ProfilePicProps extends IBaseProps {
  src?: string;
  size?: number;
  accept?: string;
  onlyImages?: boolean;
  disabled?: boolean;
  loading?: boolean;
  onChange?: (data: any) => void;
}
