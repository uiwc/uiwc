import { Icons } from '..';
import { FabProps } from './constants';
import { FabStyled } from './styled';

export const Fab = ({
  children = <Icons.Bookmark />,
  variant = 'green',
  fixed = true,
  position = 'bottom-right',
  offset = 25,
  size = 60,
  onClick,
  className,
  circle = true,
  ...rest
}: FabProps) => {
  const fixedPosition = {
    'top-left': {
      top: offset,
      left: offset,
    },
    top: {
      top: offset,
      left: `calc(50% - ${offset / 2}px)`,
    },
    'top-right': {
      top: offset,
      right: offset,
    },
    'middle-left': {
      top: `calc(50% - ${offset / 2}px)`,
      left: offset,
    },
    middle: {
      top: `calc(50% - ${offset / 2}px)`,
      left: `calc(50% - ${offset / 2}px)`,
    },
    'middle-right': {
      top: `calc(50% - ${offset / 2}px)`,
      right: offset,
    },
    'bottom-right': {
      bottom: offset,
      right: offset,
    },
    bottom: {
      bottom: offset,
      left: `calc(50% - ${offset / 2}px)`,
    },
    'bottom-left': {
      bottom: offset,
      left: offset,
    },
  };

  return (
    <FabStyled
      onClick={onClick}
      style={fixed ? { position: 'fixed', ...fixedPosition[position] } : {}}
      circle={circle}
      variant={variant}
      size={size}
      className={className}
      {...rest}
    >
      {children}
    </FabStyled>
  );
};
