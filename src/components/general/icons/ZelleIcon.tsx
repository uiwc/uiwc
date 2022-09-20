import * as React from 'react';

type SVGProps = React.SVGProps<SVGSVGElement> & {
  colored?: boolean;
};

function SvgComponent(
  { colored = false, ...rest }: SVGProps,
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
      <rect
        width={24}
        height={24}
        rx={4}
        fill={colored ? '#6D1ED4' : 'currentColor'}
      />
      <path
        d="M10.607 6.216L7.22 6.185v2.247h5.613L7 15.908v1.902h3.607V20h2.164v-2.19h3.68c.03-.088.041-.324-.154-.54a5.267 5.267 0 01-.82-1.212c-.109-.211-.19-.464-.222-.485-.724-.033-4.892-.025-4.89-.05l5.838-7.524V6.216h-3.432V4h-2.164v2.216z"
        fill="#fff"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgComponent);
const ZelleIcon = React.memo(ForwardRef);
export { ZelleIcon };
