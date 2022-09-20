import React from 'react';

function SvgComponent(
  props: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>
) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={svgRef}
      {...props}
    >
      <path
        d="M15.643 2.754a2.013 2.013 0 00-1.415-1.415A46.987 46.987 0 007.991 1a47.355 47.355 0 00-6.237.349A2.013 2.013 0 00.34 2.764a21.72 21.72 0 00.01 7.683 2.013 2.013 0 001.416 1.416c2.07.25 4.155.363 6.24.337a47 47 0 006.237-.339 2.014 2.014 0 001.416-1.416c.462-2.543.457-5.15-.015-7.691zM6.405 9V4.2l4.14 2.4L6.405 9z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgComponent);
const YoutubeIcon = React.memo(ForwardRef);
export { YoutubeIcon };
