import * as React from 'react';

type SVGProps = React.SVGProps<SVGSVGElement> & {
  alone?: boolean;
};

function SvgComponent(
  { alone = false, ...rest }: SVGProps,
  svgRef?: React.Ref<SVGSVGElement>
) {
  if (alone) {
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
        <path d="M19 13H5v-2h14v2z" fill="currentColor" />
      </svg>
    );
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="1em"
      width="1em"
      viewBox="0 0 24 24"
      ref={svgRef}
      {...rest}
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgComponent);
const MinusIcon = React.memo(ForwardRef);
export { MinusIcon };
