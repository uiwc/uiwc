import React from 'react';

type SVGProps = React.SVGProps<SVGSVGElement> & {
  alone?: boolean;
};

function SvgComponent(
  { alone = false, ...rest }: SVGProps,
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
      {...rest}
    >
      {alone ? (
        <>
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M8 5v14l11-7z" fill="currentColor" />
        </>
      ) : (
        <path
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"
          fill="currentColor"
        />
      )}
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgComponent);
const PlayIcon = React.memo(ForwardRef);
export { PlayIcon };
