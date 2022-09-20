import React from 'react';

function SvgComponent(
  props: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>
) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={svgRef}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.25 3.667H1.75L7 7.833l5.25-4.166zM0 3.667A1.715 1.715 0 011.75 2h10.5A1.715 1.715 0 0114 3.667v6.666A1.715 1.715 0 0112.25 12H1.75A1.715 1.715 0 010 10.333V3.667z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgComponent);
const MessagesIcon = React.memo(ForwardRef);
export { MessagesIcon };
