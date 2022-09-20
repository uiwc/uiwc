import * as React from 'react';
import { forwardRef, memo, Ref } from 'react';

type SVGProps = React.SVGProps<SVGSVGElement> & {
  colored?: boolean;
};

const SvgComponent = (
  { colored = false, ...rest }: SVGProps,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    x={0}
    y={0}
    viewBox="0 0 24 24"
    xmlSpace="preserve"
    width="1em"
    height="1em"
    ref={ref}
    {...rest}
  >
    <path
      style={{
        fill: colored ? '#2a5b5f' : 'currentColor',
      }}
      d="m23 18.6-7-4.4v1.9h-4l-.5 2.3.5 2.7h4V23l7-4.4z"
    />
    <path
      style={{
        fill: colored ? '#2a5b5f' : 'currentColor',
      }}
      d="m10.5 16.1-4.1-4v4.7c0 1.1.5 2.2 1.3 3 .8.8 1.9 1.3 3 1.3H12v-5h-1.5zM13.3 2.9H12l-.9 2.2.9 2.8h1.5l4.1 4V7.3c0-1.1-.5-2.2-1.3-3-.7-.9-1.8-1.4-3-1.4z"
    />
    <path
      style={{
        fill: colored ? '#2a5b5f' : 'currentColor',
      }}
      d="M8 2.9V1L1 5.4l7 4.4V7.9h4v-5H8z"
    />
    <path
      d="m12 6.4-.5 5.8.5 5.5c1.5 0 2.9-.6 4-1.6 1.1-1.1 1.6-2.5 1.6-4S17 9.1 16 8c-1.1-1-2.5-1.6-4-1.6z"
      style={{
        fill: colored ? '#fc7419' : 'currentColor',
      }}
    />
    <path
      d="M6.4 12c0 1.5.6 2.9 1.6 4 1.1 1.1 2.5 1.6 4 1.6V6.4c-1.5 0-2.9.6-4 1.6-1 1.1-1.6 2.5-1.6 4z"
      style={{
        fill: colored ? '#fda102' : 'currentColor',
      }}
    />
    <path
      d="m12 5.7-.5.5.5.8c2.7 0 5 2.2 5 5 0 1.3-.5 2.6-1.5 3.5-.9 1-2.2 1.5-3.5 1.5l-.5.6.5.6c3.5 0 6.3-2.8 6.3-6.3 0-3.4-2.8-6.2-6.3-6.2z"
      style={{
        fill: colored ? '#fdae02' : '#fff',
      }}
    />
    <path
      d="M7 12c0-2.7 2.2-5 5-5V5.7c-3.5 0-6.3 2.8-6.3 6.3s2.8 6.3 6.3 6.3V17c-1.3 0-2.6-.5-3.5-1.5-1-.9-1.5-2.2-1.5-3.5z"
      style={{
        fill: colored ? '#fdcb02' : '#fff',
      }}
    />
    <path
      style={{
        fill: colored ? '#fdd535' : '#fff',
      }}
      d="M12.1 10.7c.4 0 .9.1 1.4.4l.5-1.2c-.4-.2-.9-.4-1.4-.4v-.8H12l-.5 1.6.5.4h.1zM12 11.3l-.5.8.5.6c.3.1.6.2.6.3 0 .2-.2.3-.6.3l-.5.7.5 1.3h.6v-.8c1.1-.2 1.6-.9 1.6-1.6 0-1.3-1.4-1.4-2.2-1.6z"
    />
    <path
      style={{
        fill: colored ? '#feea9a' : '#fff',
      }}
      d="M11.9 13.3c-.6 0-1.1-.2-1.6-.4l-.5 1.2c.4.3 1.1.4 1.8.5v.7h.4l-.1-2zM11.6 9.5c-1.2.2-1.7.8-1.7 1.6 0 1.3 1.3 1.4 2.1 1.6v-1.4c-.3-.1-.5-.1-.5-.3 0-.2.1-.3.5-.3v-2h-.4v.8z"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgComponent);
const TransferIcon = memo(ForwardRef);
export { TransferIcon };
