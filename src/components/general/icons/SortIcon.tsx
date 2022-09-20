import * as React from 'react';

type SVGProps = React.SVGProps<SVGSVGElement> & {
  order?: 'asc' | 'desc' | '';
};

function SvgComponent(
  { order = '', ...rest }: SVGProps,
  svgRef?: React.Ref<SVGSVGElement>
) {
  let topOpacity = 1;
  let bottomOpacity = 1;

  if (order === 'asc') {
    topOpacity = 0.4;
  }

  if (order === 'desc') {
    bottomOpacity = 0.4;
  }

  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 6 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={svgRef}
      {...rest}
    >
      <path
        d="M3 0l2.598 4.5H.402L3 0z"
        fill="currentColor"
        fillOpacity={topOpacity}
      />
      <path
        d="M3 10L.402 5.5h5.196L3 10z"
        fill="currentColor"
        fillOpacity={bottomOpacity}
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgComponent);
const SortIcon = React.memo(ForwardRef);
export { SortIcon };
