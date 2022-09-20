import React from 'react';
import { Utils } from '../../../utils';
import { CartTotalProps } from './constants';

export function CartTotal({ total = 0, currency = '$' }: CartTotalProps) {
  return (
    <div className="fs-2 fw-500 text-right px-3 py-2 border-top mt-4">
      {currency}
      {Utils.toCurrency(total)}
    </div>
  );
}
