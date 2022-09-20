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
      <circle cx={12} cy={12} r={10} fill="currentColor" />
      <path
        d="M17.09 8.996L14.183 12h2.182c0 1.195-.46 2.341-1.278 3.187A4.295 4.295 0 0112 16.506a4.162 4.162 0 01-2.036-.526l-1.062 1.096c.88.572 1.891.89 2.93.92a5.67 5.67 0 002.977-.744 5.907 5.907 0 002.199-2.203 6.16 6.16 0 00.81-3.05H20l-2.91-3.004zM7.637 12c0-1.195.46-2.341 1.278-3.187A4.295 4.295 0 0112 7.493c.71-.002 1.41.179 2.036.526l1.062-1.096a5.687 5.687 0 00-2.93-.92 5.67 5.67 0 00-2.977.744A5.909 5.909 0 006.992 8.95a6.159 6.159 0 00-.81 3.05H4l2.91 3.004L9.817 12H7.636z"
        fill="#fff"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgComponent);
const SyncIcon = React.memo(ForwardRef);
export { SyncIcon };
