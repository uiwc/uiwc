import React from 'react';
import { spacers } from '../../../styles/spacers';
import { Utils } from '../../../utils';
import { FlexProps } from './constants';

export const Flex = React.forwardRef(
  (
    {
      children,
      className,
      style,
      direction = 'row',
      justify = 'start',
      wrap = 'nowrap',
      align = 'stretch',
      grow = false,
      shrink = true,
      basis = 'auto',
      gap = 0,
      ...rest
    }: FlexProps,
    ref
  ) => {
    const classes = Utils.joinClasses(
      className,
      'd-flex',
      `flex-${direction}`,
      `justify-content-${justify}`,
      `flex-${wrap}`,
      `align-items-${align}`
    );

    const styles = Utils.merge(style || {}, {
      flexGrow: Utils.isBoolean(grow) ? +grow : grow,
      flexShrink: Utils.isBoolean(shrink) ? +shrink : shrink,
      flexBasis: Utils.isNumber(basis) ? `${+basis}%` : basis,
      gap: `${spacers[gap]}rem`,
    });

    return (
      <div ref={ref} className={classes} style={styles} {...rest}>
        {children}
      </div>
    );
  }
);
