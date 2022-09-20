import React from 'react';

function SvgComponent(
  props: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>
) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 8 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={svgRef}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.744 15V8.622h2.178l.311-2.49H4.744V4.579c0-.7.233-1.244 1.244-1.244H7.31V1.078C7 1.078 6.222 1 5.367 1a3 3 0 00-3.189 3.267v1.866H0v2.489h2.178V15h2.566z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgComponent);
const FacebookIcon = React.memo(ForwardRef);
export { FacebookIcon };
