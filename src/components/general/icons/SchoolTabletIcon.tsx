import { forwardRef, memo, Ref, SVGProps } from 'react';

const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M17.6 15.1c.2.1.4.1.5.2 1.5.9 3.1 1.8 4.6 2.6.4.3.4.7 0 1-1.6.9-3.2 1.8-4.8 2.8-.2.1-.4.1-.7 0-1.6-.9-3.2-1.9-4.9-2.8-.4-.2-.4-.7 0-1 1.5-.9 3.1-1.8 4.6-2.6.3-.1.5-.1.7-.2z"
    />
    <path
      fill="currentColor"
      d="m14 20.6 2.1 1.2c.3.2.6.3.8.5.4.3.9.3 1.3 0l3-1.8c.1-.1.2-.1.4-.2.1 1 0 1.3-.8 1.8l-2.7 1.5c-.4.2-.8.2-1.2 0-.9-.5-1.9-1.1-2.8-1.6 0 0-.1-.2-.1-.3v-1.1zM12.8 20c.5.1.5.2.5.6v.8c0 .3 0 .6.3.8.3.2.2.7-.1.9-.3.2-.7.2-.9-.1-.2-.3-.2-.7.1-.9.2-.1.2-.3.2-.4-.1-.6-.1-1.2-.1-1.7z"
    />
    <path
      fill="currentColor"
      d="M18.2 13.4c-5.2-.7-9.6 4.3-7.5 9.8H4.4c-1 0-1.4-.4-1.4-1.4V6.5c0-1 .5-1.4 1.4-1.4.6-.1.8.1.8.6 0 1.8.1 1.8 1.8 1.8h8.2c.7 0 .9-.2.8-.9v-.5c.1-.4-.3-.9.4-1 .8-.1 1.4.2 1.7.8 0 .1.1.2.1.3v7.2zm-7.5-3H7.2c-.6 0-1 .2-.9.8 0 .6.4.7.9.7H14c.5 0 1-.2 1-.8 0-.6-.4-.8-1-.8-1.1.1-2.2.1-3.3.1zM8.4 15h1.4c.5 0 .8-.3.8-.7 0-.5-.3-.8-.8-.8H7c-.5 0-.8.3-.8.8s.3.7.8.7h1.4z"
    />
    <path
      fill="currentColor"
      d="M10.6 5.9H7.3c-.4.1-.6-.1-.6-.5 0-1.4.1-1.8 1.5-2.2.6-.2.9-.6 1-1.2 0-1 .6-1.5 1.4-1.5.8 0 1.5.5 1.5 1.4.1.7.4 1 1 1.2 1.3.5 1.5.8 1.5 2.1 0 .5-.2.7-.7.7h-3.3z"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgComponent);
const SchoolTabletIcon = memo(ForwardRef);
export { SchoolTabletIcon };
