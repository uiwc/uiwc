import React from 'react';

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
        d="M12 1.2a10.8 10.8 0 100 21.6 10.8 10.8 0 000-21.6zM6.118 19.582a9.49 9.49 0 01-1.7-1.7L17.882 4.418a9.49 9.49 0 011.7 1.7L6.117 19.582z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgComponent);
const BlockIcon = React.memo(ForwardRef);
export { BlockIcon };
