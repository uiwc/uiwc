import styled from 'styled-components';
import { Button } from '../button/Button';

export const FabStyled = styled(Button)`
  z-index: ${({ theme }) => theme.getZIndex('ASIDE') + 1};
`;
