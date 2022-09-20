import { motion } from 'framer-motion';
import styled from 'styled-components';
import { CameraIcon } from '../../general/icons';

export const ProfilePicStyled = styled.div`
  position: relative;
  display: inline-block;

  input {
    cursor: pointer;
    height: 100%;
    left: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    width: 100%;

    &:focus {
      outline: none;
    }
  }
`;

export const ProfilePicButtonStyled = styled(motion.div)`
  width: 48px;
  height: 48px;
  color: ${({ theme }) => theme.getColor('primary')};
  cursor: pointer;
  position: absolute;
  bottom: 5%;
  right: 5%;

  :hover {
    color: ${({ theme }) => theme.getColor('brand')};
  }

  &.loading,
  &.disabled {
    color: ${({ theme }) => theme.getColor('powder')};
    pointer-events: none;
  }
`;

export const ProfilePicIconStyled = styled(CameraIcon)`
  width: 48px;
  height: 48px;
  cursor: pointer;
`;
