import React, { useMemo } from 'react';
import { Utils } from '../../..';
import { FlagProps } from './constants';

const PATH = 'https://storage.googleapis.com/dawere-web-assets/flags/';

export function Flag({
  size = 24,
  shape = 'normal',
  country = 'AF',
  className,
  ...rest
}: FlagProps) {
  const shapes = useMemo(
    () => ({
      normal: '4x3',
      square: '1x1',
      circle: '1x1',
    }),
    []
  );

  const styles = Utils.joinClasses(
    className,
    shape === 'circle' ? 'rounded-circle' : ''
  );

  return (
    <img
      src={`${PATH}${shapes[shape]}/${country.toLocaleLowerCase()}.svg`}
      alt={country}
      className={styles}
      width={size}
      {...rest}
    />
  );
}
