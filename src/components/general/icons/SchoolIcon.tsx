import { forwardRef, memo, Ref, SVGProps } from 'react';

const SvgComponent = (
  rest: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="1em"
    width="1em"
    viewBox="0 0 24 24"
    ref={ref}
    {...rest}
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path
      d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3 1 9l11 6 9-4.91V17h2V9L12 3z"
      fill="currentColor"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgComponent);
const SchoolIcon = memo(ForwardRef);
export { SchoolIcon };
