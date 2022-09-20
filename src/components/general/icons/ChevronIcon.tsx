import React from 'react';

type SVGProps = React.SVGProps<SVGSVGElement> & {
  direction?: 'left' | 'up' | 'right' | 'down';
};

function SvgComponent(
  { direction = 'down', ...rest }: SVGProps,
  svgRef?: React.Ref<SVGSVGElement>
) {
  const paths = {
    left:
      'M17 5.903L15.097 4 7 12.097l8.097 8.097L17 18.292l-6.18-6.195L17 5.903z',
    up:
      'M12.097 7L4 15.097 5.903 17l6.194-6.18L18.291 17l1.903-1.903L12.097 7z',
    right:
      'M8.903 4L7 5.903l6.18 6.194L7 18.291l1.903 1.903L17 12.097 8.903 4z',
    down:
      'M18.291 7l-6.194 6.18L5.903 7 4 8.903 12.097 17l8.097-8.097L18.292 7z',
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
const ChevronIcon = React.memo(ForwardRef);
export { ChevronIcon };
