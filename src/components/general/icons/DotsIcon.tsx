import * as React from 'react';

function SvgComponent(
  props: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>
) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 6 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={svgRef}
      {...props}
    >
      <path
        d="M2.667 5.334a2.667 2.667 0 100-5.334 2.667 2.667 0 000 5.334zM2.667 14.667a2.667 2.667 0 100-5.334 2.667 2.667 0 000 5.334zM2.667 24a2.667 2.667 0 100-5.334 2.667 2.667 0 000 5.334z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgComponent);
const DotsIcon = React.memo(ForwardRef);
export { DotsIcon };
