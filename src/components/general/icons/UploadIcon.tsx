import * as React from 'react';

function SvgComponent(
  props: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>
) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 21 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={svgRef}
      {...props}
    >
      <g clipPath="url(#prefix__clip0)">
        <path
          d="M13.125 0h-10.5A2.625 2.625 0 000 2.625v21a2.625 2.625 0 002.625 2.625h15.75A2.625 2.625 0 0021 23.625V7.875L13.125 0zm5.25 23.625H2.625v-21h9.188v6.563h6.562v14.437zM5.25 17.062L7.088 18.9l2.1-2.1v5.512h2.624V16.8l2.1 2.1 1.838-1.837-5.25-5.25-5.25 5.25z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgComponent);
const UploadIcon = React.memo(ForwardRef);
export { UploadIcon };
