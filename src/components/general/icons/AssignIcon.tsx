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
      <path
        d="M17.907 4.553h-2.864a3.09 3.09 0 00-6.086 0H6.093A2.093 2.093 0 004 6.646v13.707a2.093 2.093 0 002.093 2.093h11.814A2.093 2.093 0 0020 20.353V6.646a2.092 2.092 0 00-2.093-2.093zM8.033 17.8a.42.42 0 01-.516-.516l.516-1.93 1.93 1.93-1.93.516zm8.318-7.017l-5.7 5.702-1.92-1.916 5.7-5.701a.689.689 0 01.98 0l.938.938a.692.692 0 01.002.98v-.003z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgComponent);
const AssignIcon = React.memo(ForwardRef);
export { AssignIcon };
