import * as React from 'react';

function SvgComponent(
  props: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>
) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={svgRef}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 15.588l-1.413 1.413L12 13.412l-3.589 3.589-1.413-1.413L10.586 12 7 8.412l1.413-1.413L12 10.587l3.587-3.588L17 8.412l-3.589 3.589L17 15.588zM12 2a10 10 0 100 20 10 10 0 000-20z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgComponent);
const CancelIcon = React.memo(ForwardRef);
export { CancelIcon };
