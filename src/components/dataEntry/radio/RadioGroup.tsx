import React, { useCallback, useEffect, useState } from 'react';
import { RadioGroupProps } from './constants';

export function RadioGroup({
  children,
  value,
  onChange = (e: any) => {},
  validators = {},
  ...rest
}: RadioGroupProps) {
  const [innerValue, setInnerValue] = useState<any>(value);

  const handleOnChecked = useCallback(
    (value: any) => {
      setInnerValue(value?.toString());
      onChange(value);
    },
    [onChange]
  );

  function recursiveMap(children: any) {
    return React.Children.map(children, (child: any) => {
      if (child?.props?.children) {
        child = React.cloneElement(child, {
          children: recursiveMap(child.props.children),
        });
      }

      return child?.props?.name
        ? React.createElement(child.type, {
            ...{
              ...child.props,
              onChecked: handleOnChecked,
              validators,
              groupValue: innerValue,
            },
          })
        : child;
    });
  }

  useEffect(() => {
    setInnerValue(value);
  }, [value]);

  return <>{recursiveMap(children)}</>;
}
