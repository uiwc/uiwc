import React from 'react';

function SvgComponent(
  props: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>
) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={svgRef}
      {...props}
    >
      <path
        d="M12 18.681l-1.45-1.155C5.4 13.44 2 10.745 2 7.437a4.25 4.25 0 01.404-1.849 4.774 4.774 0 011.191-1.567 5.56 5.56 0 011.792-1.042c.67-.24 1.389-.36 2.113-.354.856.006 1.7.172 2.477.487A5.98 5.98 0 0112 4.454a5.979 5.979 0 012.023-1.342 6.712 6.712 0 012.477-.487 6.135 6.135 0 012.113.354c.67.24 1.28.594 1.792 1.042.512.448.917.98 1.19 1.567A4.25 4.25 0 0122 7.438c0 3.307-3.4 6.002-8.55 10.097L12 18.681z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgComponent);
const HeartIcon = React.memo(ForwardRef);
export { HeartIcon };
