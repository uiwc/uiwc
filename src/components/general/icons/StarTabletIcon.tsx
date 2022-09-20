import { forwardRef, memo, Ref, SVGProps } from 'react';

const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <path
      d="M19.6 12.7c-5.1-.7-9.4 4.2-7.3 9.6H6.2c-.9 0-1.4-.4-1.4-1.4V6c0-.9.5-1.4 1.4-1.4.5 0 .7.1.7.6 0 1.7.1 1.7 1.8 1.7h8c.7 0 .9-.2.8-.8v-.5c.1-.4-.3-.9.4-1 .8-.1 1.4.2 1.6.8 0 .1.1.2.1.3v7zm-7.3-2.9H8.9c-.6 0-1 .2-.9.8 0 .6.4.7.9.7h6.7c.5 0 .9-.2 1-.8 0-.6-.4-.7-1-.7h-3.3zm-2.2 4.5h1.4c.5 0 .8-.3.8-.7 0-.5-.3-.8-.8-.8H8.8c-.5 0-.8.3-.8.8s.3.7.8.7h1.3z"
      fill="currentColor"
    />
    <path
      d="M12.2 5.4H8.9c-.4 0-.6-.2-.6-.6 0-1.4.1-1.7 1.4-2.2.6-.2.9-.6 1-1.2.1-.9.6-1.3 1.4-1.3.8 0 1.4.5 1.5 1.4.1.6.4 1 1 1.2 1.2.5 1.4.8 1.4 2.1 0 .5-.2.7-.7.7-1-.1-2-.1-3.1-.1zm6.3 9 1.5 3.1 3.4.5-2.4 2.5.6 3.4-3.1-1.6-3.1 1.6.6-3.4-2.4-2.5 3.4-.5 1.5-3.1z"
      fill="currentColor"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgComponent);
const StarTabletIcon = memo(ForwardRef);
export { StarTabletIcon };
