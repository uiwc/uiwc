import React from 'react';

function SvgComponent(
  props: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>
) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 14 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={svgRef}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.433 11.356A8.095 8.095 0 0012.6 3.189V2.8A6.324 6.324 0 0014 1.322a6.457 6.457 0 01-1.633.467A3.026 3.026 0 0013.611.233a7.133 7.133 0 01-1.789.7A2.778 2.778 0 009.722 0a2.922 2.922 0 00-2.878 2.878c-.018.21.009.422.078.622A8.04 8.04 0 011.011.467c-.256.45-.39.96-.389 1.478a3.09 3.09 0 001.244 2.411 2.622 2.622 0 01-1.322-.389 2.843 2.843 0 002.333 2.8 2.4 2.4 0 01-.778.078 1.324 1.324 0 01-.544-.078 2.947 2.947 0 002.722 2.022A5.872 5.872 0 01.7 10.033a2.154 2.154 0 01-.7-.078 7.34 7.34 0 004.433 1.4"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgComponent);
const TwitterIcon = React.memo(ForwardRef);
export { TwitterIcon };
