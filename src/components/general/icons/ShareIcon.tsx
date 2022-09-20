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
        d="M18 16.08a2.912 2.912 0 00-1.96.77L8.91 12.7A3.27 3.27 0 009 12a3.27 3.27 0 00-.09-.7l7.05-4.11a2.987 2.987 0 004.161-.069A3 3 0 1015 5c.005.236.035.47.09.7L8.04 9.81a2.987 2.987 0 00-4.161.069A3 3 0 006 15a2.987 2.987 0 002.04-.81l7.12 4.16a2.825 2.825 0 00-.08.65A2.923 2.923 0 0018 21.92 2.922 2.922 0 0020.92 19 2.923 2.923 0 0018 16.08z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgComponent);
const ShareIcon = React.memo(ForwardRef);
export { ShareIcon };
