import { components } from 'react-select';

export const DefaultOption = ({ children, ...rest }: any) => {
  return <components.Option {...rest}>{children}</components.Option>;
};
