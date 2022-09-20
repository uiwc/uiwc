import * as React from 'react';

function SvgComponent(
  props: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>
) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 22 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={svgRef}
      {...props}
    >
      <path
        d="M19.2 2.4H18V0h-2.4v2.4H6V0H3.6v2.4H2.4C1.08 2.4 0 3.48 0 4.8v16.8C0 22.92 1.08 24 2.4 24h16.8c1.32 0 2.4-1.08 2.4-2.4V4.8c0-1.32-1.08-2.4-2.4-2.4zm0 19.2H2.4v-12h16.8v12zM2.4 7.2V4.8h16.8v2.4H2.4zm6.72 12.6l7.08-7.08-1.32-1.32L9 17.28l-2.52-2.52-1.32 1.32 3.96 3.72z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgComponent);
const CalendarCheckedIcon = React.memo(ForwardRef);
export { CalendarCheckedIcon };
