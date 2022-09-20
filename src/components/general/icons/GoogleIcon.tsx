import React from 'react';

type SVGProps = React.SVGProps<SVGSVGElement> & {
  colored?: boolean;
};

function SvgComponent(
  { colored = false, ...rest }: SVGProps,
  svgRef?: React.Ref<SVGSVGElement>
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 38 38"
      width="1em"
      height="1em"
      ref={svgRef}
      {...rest}
    >
      <path
        d="M36.8 19.4c0-1.3-.1-2.6-.3-3.8H19.2v7.1h9.9c-.4 2.3-1.7 4.2-3.7 5.5v4.6h5.9c3.5-3.1 5.5-7.8 5.5-13.4z"
        fill={colored ? '#4285f4' : 'currentColor'}
      />
      <path
        d="M19.2 37.4c5 0 9.1-1.6 12.2-4.5l-5.9-4.6c-1.6 1.1-3.8 1.8-6.2 1.8-4.8 0-8.8-3.2-10.3-7.6H2.8v4.8c3 6 9.2 10.1 16.4 10.1z"
        fill={colored ? '#34a853' : 'currentColor'}
      />
      <path
        d="M8.9 22.5c-.4-1.1-.6-2.3-.6-3.5 0-1.2.2-2.4.6-3.5v-4.8H2.8C1.6 13.2.8 16 .8 19s.7 5.8 2 8.3l6.1-4.8z"
        fill={colored ? '#fbbc05' : 'currentColor'}
      />
      <path
        d="M19.2 7.9c2.7 0 5.1.9 7 2.7l5.3-5.3C28.3 2.3 24.2.5 19.2.5 12 .6 5.8 4.7 2.8 10.7l6.1 4.8c1.5-4.3 5.5-7.6 10.3-7.6z"
        fill={colored ? '#ea4335' : 'currentColor'}
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgComponent);
const GoogleIcon = React.memo(ForwardRef);
export { GoogleIcon };
