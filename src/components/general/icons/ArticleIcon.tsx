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
        d="M14 3l6 6v10c0 1.1-.9 2-2 2H6.99C5.89 21 5 20.1 5 19l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L13 4.5V10z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgComponent);
const ArticleIcon = React.memo(ForwardRef);
export { ArticleIcon };
