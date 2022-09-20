import * as React from 'react';
import { forwardRef, memo, Ref, SVGProps } from 'react';

const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    x={0}
    y={0}
    viewBox="0 0 31 23.3"
    xmlSpace="preserve"
    width="1em"
    height="1em"
    ref={ref}
    {...props}
  >
    <path
      className="st0"
      fill="currentColor"
      d="M21.3 0h-3.5c-.4 0-.7.2-1 .4-.3.3-.4.6-.4 1v20.4c0 .4.2.7.4 1 .3.3.6.4 1 .4h3.5c.4 0 .7-.1 1-.4.3-.3.4-.6.4-1V1.4c0-.4-.2-.7-.4-1-.2-.3-.6-.4-1-.4zM13.1 10.6H9.7c-.4 0-.7.2-1 .4-.3.3-.4.6-.4 1v9.8c0 .4.2.7.4 1s.6.4 1 .4h3.5c.4 0 .7-.1 1-.4.3-.3.4-.6.4-1V12c0-.4-.2-.7-.4-1-.4-.2-.7-.4-1.1-.4zM29.6 5.1h-3.5c-.4 0-.7.1-1 .4-.3.3-.4.6-.4 1v15.3c0 .4.2.7.4 1 .3.3.6.4 1 .4h3.5c.4 0 .7-.1 1-.4.3-.3.4-.6.4-1V6.5c0-.4-.2-.7-.4-1-.3-.2-.6-.4-1-.4zM4.9 15.6H1.4c-.4 0-.7.2-1 .4-.2.3-.4.6-.4 1v4.8c0 .4.2.7.4 1 .3.3.6.4 1 .4h3.5c.4 0 .7-.1 1-.4.3-.3.4-.6.4-1V17c0-.4-.2-.7-.4-1-.3-.2-.6-.4-1-.4z"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgComponent);
const ChartColumnsIcon = memo(ForwardRef);
export { ChartColumnsIcon };
