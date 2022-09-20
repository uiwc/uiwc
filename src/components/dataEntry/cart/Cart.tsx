import React, { useCallback, useState } from 'react';
import { CartItem } from './CartItem';
import { CartTotal } from './CartTotal';
import { CartProps } from './constants';

export function Cart({
  children,
  onChange = (data: any) => {},
  ...rest
}: CartProps) {
  const getTotal = useCallback((obj: any) => {
    return Object.values(obj).reduce((accum: number, el: any) => {
      return accum + (el.subtotal || 0);
    }, 0);
  }, []);

  const [, setState] = useState<any>(() => {
    const map: any = {};
    React.Children.toArray(children).forEach(({ props }: any) => {
      if (props.name) {
        map[props.name] = {
          ...props,
          subtotal: (props.quantity || 0) * props.price,
        };
      }
    });

    onChange({ total: getTotal(map), items: Object.values(map) });

    return map;
  });

  const handleChange = useCallback(
    (data: any) => {
      setState((state: any) => {
        state[data.name] = data;
        onChange({ total: getTotal(state), items: Object.values(state) });
        return { ...state };
      });
    },
    [getTotal, onChange]
  );

  return (
    <>
      {React.Children.map(children, (child: any) => {
        return React.createElement(child.type, {
          ...{
            ...child.props,
            onChange: handleChange,
          },
        });
      })}
    </>
  );
}

Cart.Item = CartItem;
Cart.Total = CartTotal;
