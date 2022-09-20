import { forwardRef, memo, Ref } from 'react';

type SVGProps = React.SVGProps<SVGSVGElement> & {
  bookmarkFill?: any;
};

const SvgComponent = (
  { bookmarkFill = '#2E7977', ...rest }: SVGProps,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    xmlSpace="preserve"
    width="1em"
    height="1em"
    ref={ref}
    {...rest}
  >
    <g fill="currentColor">
      <path d="M7.1 20H5.9c-.7 0-1.3-.5-1.4-1.2-.1-.5.1-.9.5-1.2.3-.2.6-.3.9-.3h12.9c.9-.1 1.6-.9 1.6-1.8V2.3c-.2-.9-1-1.5-1.9-1.5h-13c-1.1 0-1.9.8-1.9 1.9v16.5c0 .2 0 .4.1.5.3.8 1 1.2 1.8 1.2h1.6V20zM20.4 18.3c-.1.9-.9 1.6-1.9 1.6h-6.3v.9H18.6c.8-.1 1.5-.6 1.6-1.3.2-.4.2-.8.2-1.2z" />
    </g>
    <path
      fill={bookmarkFill}
      d="M7 23.2c.8-.7 1.7-1.3 2.5-2 .1-.1.1-.1.2 0 .8.7 1.7 1.3 2.5 2 0 0 .1 0 .1.1V18H6.9l.1 5.2z"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgComponent);
const BookmarkIcon = memo(ForwardRef);
export { BookmarkIcon };
