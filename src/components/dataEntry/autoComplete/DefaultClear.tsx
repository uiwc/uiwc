import { components } from 'react-select';
import { Icons } from '../../general/icons';

export const DefaultClear = ({ children, ...rest }: any) => {
  return (
    <components.ClearIndicator {...rest}>
      <Icons.Close />
    </components.ClearIndicator>
  );
};
