import React from 'react';
import { colors } from '../../../styles/colors';

type SVGProps = React.SVGProps<SVGSVGElement> & {
  warning?: boolean;
};

function SvgComponent(
  { warning = false, ...rest }: SVGProps,
  svgRef?: React.Ref<SVGSVGElement>
) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={svgRef}
      {...rest}
    >
      <path
        d="M13,2.2C7,2.2,2.2,7,2.2,13S7,23.8,13,23.8S23.8,19,23.8,13S19,2.2,13,2.2z M14.1,18.4h-2.2v-2.2h2.2V18.4z
	 M14.1,14.1h-2.2V7.6h2.2V14.1z"
        fill={warning ? colors.warning : 'currentColor'}
      />
      <path
        d="M11.8,7.5h2.4v7.3h-2.4L11.8,7.5L11.8,7.5z M14.2,18.5h-2.4V16h2.4V18.5z"
        fill={warning ? '#343A40' : '#ffffff'}
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgComponent);
const AlertIcon = React.memo(ForwardRef);
export { AlertIcon };
