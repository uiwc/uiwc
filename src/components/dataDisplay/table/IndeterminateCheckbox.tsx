import { forwardRef, useEffect, useRef } from 'react';
import { Checkbox } from '../../dataEntry/checkbox';

export const IndeterminateCheckbox = forwardRef(
  ({ indeterminate, ...rest }: any, ref: any) => {
    const defaultRef = useRef();
    const resolvedRef = ref || defaultRef;

    useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate;
    }, [resolvedRef, indeterminate]);

    return <Checkbox ref={resolvedRef} {...rest} />;
  }
);
