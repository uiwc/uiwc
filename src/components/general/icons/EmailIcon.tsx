import React from 'react';

type SVGProps = React.SVGProps<SVGSVGElement> & { open?: boolean };

function SvgComponent(
  { open = false, ...rest }: SVGProps,
  svgRef?: React.Ref<SVGSVGElement>
) {
  const d = open
    ? 'M21.99 8c0-.72-.37-1.35-.94-1.7L12 1 2.95 6.3C2.38 6.65 2 7.28 2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2l-.01-10zM12 13L3.74 7.84 12 3l8.26 4.84L12 13z'
    : 'M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z';

  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={svgRef}
      {...rest}
    >
      <path d={d} fill="currentColor" />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgComponent);
const EmailIcon = React.memo(ForwardRef);
export { EmailIcon };
