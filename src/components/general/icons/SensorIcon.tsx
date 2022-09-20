import { forwardRef, memo, Ref, SVGProps } from 'react';

const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  svgRef: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 17.6"
    xmlSpace="preserve"
    width="1em"
    height="1em"
    ref={svgRef}
    {...props}
  >
    <path fill="none" d="M0-3.2h24v24H0z" />
    <path
      d="M7 13.8c-1.3-1.3-2.1-3-2.1-5s.8-3.7 2.1-5l1.7 1.7c-.9.8-1.4 2-1.4 3.3s.5 2.5 1.4 3.3L7 13.8zm10 0c1.3-1.3 2.1-3 2.1-5s-.8-3.7-2.1-5l-1.7 1.7c.9.8 1.4 2 1.4 3.3s-.5 2.5-1.4 3.3l1.7 1.7zm-5-7.3c-1.3 0-2.3 1.1-2.3 2.3s1.1 2.3 2.3 2.3 2.3-1.1 2.3-2.3-1-2.3-2.3-2.3zm9.4 2.3c0 2.6-1.1 4.9-2.7 6.6l1.7 1.7c2.1-2.1 3.4-5 3.4-8.3S22.5 2.6 20.4.5l-1.7 1.7c1.6 1.7 2.7 4 2.7 6.6zm-16-6.6L3.7.5C1.6 2.6.3 5.5.3 8.8s1.3 6.2 3.4 8.3l1.7-1.7c-1.7-1.7-2.7-4-2.7-6.6s1-4.9 2.7-6.6z"
      fill="currentColor"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgComponent);
const SensorIcon = memo(ForwardRef);
export { SensorIcon };
