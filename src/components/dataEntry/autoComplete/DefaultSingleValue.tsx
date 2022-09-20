import { components } from 'react-select';

export const DefaultSingleValue = ({ children, ...rest }: any) => {
  return <components.SingleValue {...rest}>{children}</components.SingleValue>;
};
