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
      <g clipPath="url(#prefix__clip0)" fill="currentColor">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.625 0h10.5L21 7.875v15.75a2.625 2.625 0 01-2.625 2.625H2.625A2.625 2.625 0 010 23.625v-21A2.625 2.625 0 012.625 0zm0 2.625v21h15.75V9.187h-6.563V2.625H2.626z"
        />
        <path d="M5.25 17.063l1.838-1.838 2.1 2.1v-5.512h2.624v5.512l2.1-2.1 1.838 1.838-5.25 5.25-5.25-5.25z" />
      </g>
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgComponent);
const DownloadIcon = React.memo(ForwardRef);
export { DownloadIcon };
