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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.294 15.579h-.908l-.316-.314a7.397 7.397 0 001.796-4.832 7.433 7.433 0 10-7.433 7.433 7.398 7.398 0 004.831-1.791l.316.313v.906L21.297 23 23 21.296l-5.704-5.717h-.002zm-6.861 0a5.146 5.146 0 110-10.292 5.146 5.146 0 010 10.292z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgComponent);
const SearchIcon = React.memo(ForwardRef);
export { SearchIcon };
