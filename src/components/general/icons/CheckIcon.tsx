import React from 'react';
import { colors } from '../../../styles/colors';

type SVGProps = React.SVGProps<SVGSVGElement> & {
  success?: boolean;
  alone?: boolean;
};

function SvgComponent(
  { success = false, alone = false, ...rest }: SVGProps,
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
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M19.6 4.9 9 15.5l-4.2-4.2-2.1 2.1L9 19.7 21.7 7z"
            fill={success ? colors.success : 'currentColor'}
          />
        </>
      ) : (
        <path
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
          fill={success ? colors.success : 'currentColor'}
        />
      )}
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgComponent);
const CheckIcon = React.memo(ForwardRef);
export { CheckIcon };
