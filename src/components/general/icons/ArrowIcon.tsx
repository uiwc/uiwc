import * as React from 'react';

type SVGProps = React.SVGProps<SVGSVGElement> & {
  direction?: 'left' | 'up' | 'right' | 'down';
};

function SvgComponent(
  { direction = 'down', ...rest }: SVGProps,
  svgRef?: React.Ref<SVGSVGElement>
) {
  const paths = {
    left: 'M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z',
    up: 'M13,20V7.8l5.6,5.6L20,12l-8-8l-8,8l1.4,1.4L11,7.8V20H13z',
    right: 'M4,13h12.2l-5.6,5.6L12,20l8-8l-8-8l-1.4,1.4l5.6,5.6H4V13z',
    down: 'M11,4v12.2l-5.6-5.6L4,12l8,8l8-8l-1.4-1.4L13,16.2V4H11z',
  };

  const d = paths[direction];

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
const ArrowIcon = React.memo(ForwardRef);
export { ArrowIcon };
