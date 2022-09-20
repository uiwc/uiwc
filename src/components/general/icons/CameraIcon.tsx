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
      <circle cx={12} cy={12} r={12} fill="currentColor" />
      <path
        d="M16.958 7.99h-.875c-.09 0-.178-.041-.278-.168l-1.053-1.154A2.07 2.07 0 0013.226 6h-2.452a2.07 2.07 0 00-1.526.668L8.15 7.877l-.233.114h-.875C5.916 7.99 5 8.884 5 9.98v5.403c0 1.098.916 1.991 2.042 1.991h9.916c1.126 0 2.042-.893 2.042-1.99V9.98c0-1.097-.916-1.99-2.042-1.99z"
        fill="#fff"
      />
      <path
        d="M12 9.5a2.628 2.628 0 00-2.625 2.625A2.628 2.628 0 0012 14.75a2.628 2.628 0 002.625-2.625A2.628 2.628 0 0012 9.5z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgComponent);
const CameraIcon = React.memo(ForwardRef);
export { CameraIcon };
