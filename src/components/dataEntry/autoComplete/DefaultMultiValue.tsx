import { components } from 'react-select';

export const DefaultMultiValue = ({ children, ...rest }: any) => {
  return <components.MultiValue {...rest}>{children}</components.MultiValue>;
};
