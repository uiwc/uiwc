import React from 'react';
import { Flex } from '../../layout/flex';
import { Avatar } from '../avatar';
import { AvatarHeadingProps } from './constants';
import { AvatarHeadingStyled } from './styled';

export function AvatarHeading({
  alt = ' ',
  size = 30,
  src,
  icon,
  direction = 'row',
  justify = 'start',
  wrap = 'nowrap',
  align = 'center',
  children,
  gap = 3,
  ...rest
}: AvatarHeadingProps) {
  return (
    <AvatarHeadingStyled
      align={align}
      direction={direction}
      justify={justify}
      wrap={wrap}
      {...rest}
    >
      <Flex shrink={false}>
        <Avatar
          src={src}
          alt={alt}
          size={size}
          icon={icon}
          className={`mr-${gap}`}
        />
      </Flex>

      <div>{children}</div>
    </AvatarHeadingStyled>
  );
}
