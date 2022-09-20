import React from 'react';

function SvgComponent(
  props: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>
) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={svgRef}
      {...props}
    >
      <path
        d="M12 0a11.993 11.993 0 00-9.716 19.034l-1.5 4.458L5.4 22.017A12 12 0 1012 0zm6.982 16.946a3.385 3.385 0 01-2.355 1.693c-.627.133-1.446.24-4.2-.9-3.526-1.461-5.8-5.044-5.974-5.277a6.854 6.854 0 01-1.425-3.62 3.83 3.83 0 011.227-2.92 1.743 1.743 0 011.227-.431c.148 0 .282.008.4.014.352.015.53.036.762.592.29.7.995 2.42 1.078 2.6a.714.714 0 01.051.649c-.098.203-.23.389-.388.55-.177.2-.345.36-.522.579-.162.19-.345.394-.14.747a10.651 10.651 0 001.946 2.42c.82.75 1.775 1.34 2.814 1.735a.76.76 0 00.846-.133c.335-.398.649-.813.94-1.244a.67.67 0 01.86-.261c.324.112 2.038.96 2.391 1.135.353.175.585.261.67.41.092.562.02 1.139-.205 1.662h-.003z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgComponent);
const WhatsappIcon = React.memo(ForwardRef);
export { WhatsappIcon };
