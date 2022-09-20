import React, { useState } from 'react';
import { Icons } from '../..';
import { Utils } from '../../..';
import { BadgeProps } from './constants';
import { BadgeStyled } from './styled';

export function Badge({
  id = Utils.guid(true),
  children,
  closable = false,
  disabled = false,
  className,
  pilled = false,
  onClose = (id: string) => {},
  ...rest
}: BadgeProps) {
  const [innerId] = useState(id);

  const styles = Utils.joinClasses(
    pilled ? 'rounded-pill' : false,
    className,
    disabled && 'disabled'
  );

  return (
    <BadgeStyled className={styles} {...rest}>
      <div>
        <span>{children}</span>

        {closable ? <Icons.Close onClick={() => onClose(innerId)} /> : null}
      </div>
    </BadgeStyled>
  );
}
