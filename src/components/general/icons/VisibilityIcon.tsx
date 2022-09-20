import React from 'react';

type SVGProps = React.SVGProps<SVGSVGElement> & {
  off?: boolean;
};

function SvgComponent(
  { off = false, ...rest }: SVGProps,
  svgRef?: React.Ref<SVGSVGElement>
) {
  const d = off
    ? 'M12.005 7.366a5.459 5.459 0 015.457 5.457c0 .71-.141 1.375-.392 1.997l3.186 3.187A12.897 12.897 0 0024 12.823c-1.888-4.792-6.548-8.186-12.005-8.186-1.528 0-2.99.273-4.344.764l2.357 2.358a5.296 5.296 0 011.998-.393zM1.091 4.386L3.58 6.874l.502.503A12.883 12.883 0 000 12.823c1.888 4.79 6.548 8.185 12.005 8.185 1.692 0 3.307-.327 4.78-.917l.46.459 3.197 3.187 1.386-1.386L2.478 3 1.09 4.386zm6.036 6.036l1.692 1.691c-.055.23-.088.47-.088.71a3.27 3.27 0 003.274 3.274c.24 0 .48-.033.71-.088l1.691 1.692a5.409 5.409 0 01-2.4.579 5.46 5.46 0 01-5.458-5.457c0-.863.219-1.67.579-2.401zm4.704-.852l3.438 3.438.022-.174a3.27 3.27 0 00-3.275-3.275l-.185.011z'
    : 'M12 4.5c-5.455 0-10.113 3.393-12 8.182 1.887 4.789 6.545 8.182 12 8.182 5.454 0 10.113-3.393 12-8.182C22.113 7.892 17.454 4.5 12 4.5zm0 13.636a5.457 5.457 0 01-5.455-5.454A5.457 5.457 0 0112 7.227a5.457 5.457 0 015.454 5.455A5.457 5.457 0 0112 18.136zm0-8.727a3.268 3.268 0 00-3.273 3.273A3.268 3.268 0 0012 15.954a3.268 3.268 0 003.273-3.272A3.268 3.268 0 0012 9.409z';

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
      <path d={d} fill="currentColor" fillOpacity={off ? 0.4 : 1} />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgComponent);
const VisibilityIcon = React.memo(ForwardRef);
export { VisibilityIcon };
