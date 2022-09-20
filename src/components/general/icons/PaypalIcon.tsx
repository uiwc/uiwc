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
      viewBox="0 0 21 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={svgRef}
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.304 23.011l.731-4.636.047-.257a.951.951 0 01.94-.803h.581c.968 0 1.857-.104 2.643-.308a6.706 6.706 0 002.217-1.005 5.99 5.99 0 001.673-1.831c.465-.779.806-1.717 1.014-2.787.184-.945.218-1.791.103-2.515-.123-.764-.417-1.417-.876-1.94a3.696 3.696 0 00-1.057-.815l-.01-.005v-.012c.148-.944.142-1.73-.017-2.408-.16-.679-.483-1.29-.99-1.867C16.253.626 14.343.019 11.627.019h-7.46a1.05 1.05 0 00-1.035.885L.026 20.6a.62.62 0 00.614.718h4.628l-.004.022-.318 2.015a.541.541 0 00.535.626h3.881a.915.915 0 00.904-.772l.038-.198z"
        fill={colored ? '#27346A' : 'currentColor'}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.645 6.122a.933.933 0 01.922-.788h5.847c.693 0 1.339.045 1.93.14a8.494 8.494 0 01.956.213 5.828 5.828 0 011.03.41c.292-1.867-.003-3.137-1.013-4.288C16.206.543 14.197 0 11.627 0H4.168c-.525 0-.972.382-1.054.9L.008 20.598a.64.64 0 00.632.74h4.605l2.4-15.215z"
        fill={colored ? '#27346A' : 'currentColor'}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.33 6.097c-.023.143-.048.288-.077.437-.983 5.05-4.35 6.797-8.648 6.797H7.417c-.525 0-.969.382-1.05.901l-1.44 9.12a.56.56 0 00.554.648h3.881c.46 0 .85-.334.922-.788l.039-.197.73-4.637.048-.256a.933.933 0 01.922-.788h.58c3.761 0 6.705-1.528 7.566-5.947.36-1.846.174-3.387-.777-4.47a3.698 3.698 0 00-1.063-.82z"
        fill={colored ? '#2790C3' : 'currentColor'}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.3 5.687a8.493 8.493 0 00-.957-.213 12.2 12.2 0 00-1.929-.14H8.567a.933.933 0 00-.922.788l-1.243 7.88-.036.23a1.064 1.064 0 011.05-.901h2.19c4.298 0 7.664-1.746 8.647-6.797.03-.15.054-.294.076-.437a5.289 5.289 0 00-1.03-.41z"
        fill={colored ? '#1F264F' : 'currentColor'}
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgComponent);
const PaypalIcon = React.memo(ForwardRef);
export { PaypalIcon };
