import * as React from 'react';
import { forwardRef, memo, Ref, SVGProps } from 'react';

const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 15 24"
    xmlSpace="preserve"
    width="1em"
    height="1em"
    ref={ref}
    {...props}
  >
    <defs>
      <path id="a" d="M.8 0h13.3v24H.8z" />
    </defs>
    <clipPath id="b">
      <use
        xlinkHref="#a"
        style={{
          overflow: 'visible',
        }}
      />
    </clipPath>
    <g
      style={{
        clipPath: 'url(#b)',
      }}
    >
      <path
        d="M12.7 2c.1.2.2.3.3.5.7.9 1.1 2 1.1 3.1v11.2c0 .7-.4 1.1-1.1 1.1-.7 0-1.1-.4-1.1-1.1V5.6c0-2.2-2-3.8-4.6-3.8C5 1.8 3 3.4 3 5.3v14.1c0 1 .3 2 1.6 2.5 2 .8 4.3-.3 4.3-2.1V8c0-.5-.1-.9-.6-1.2-.8-.5-2-.1-2.2.8-.1.2-.1.4-.1.6v8.9c-.1.5-.5.8-1.1.8-.5 0-1-.4-1-.8V7.9C4 5.6 6.5 4.3 8.9 5c1.4.5 2.3 1.5 2.3 2.9v11.8c0 .9-.3 1.7-.8 2.4-1.6 2-4.8 2.5-7.2 1.2-.1 0-.2-.1-.2-.1-.3-.2-.5-.4-.8-.7-.7-.9-1.1-1.9-1.1-3 0-4.7-.1-9.5 0-14.2C1 1.1 6.6-1.4 11 .8c.2.1.5.3.8.4.3.3.6.6.9.8z"
        style={{
          fill: 'currentColor',
        }}
      />
    </g>
  </svg>
);

const ForwardRef = forwardRef(SvgComponent);
const ClipIcon = memo(ForwardRef);
export { ClipIcon };
