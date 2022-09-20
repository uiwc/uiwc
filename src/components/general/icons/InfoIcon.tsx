import React from 'react';
import { colors } from '../../../styles/colors';

type SVGProps = React.SVGProps<SVGSVGElement> & {
  filled?: boolean;
  warning?: boolean;
};

function SvgComponent(
  { filled = false, warning = false, ...rest }: SVGProps,
  svgRef?: React.Ref<SVGSVGElement>
) {
  if (filled) {
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
          d="M13 23.833c5.98 0 10.833-4.853 10.833-10.833S18.98 2.167 13 2.167 2.167 7.02 2.167 13 7.02 23.833 13 23.833zm-1.083-16.25h2.166V9.75h-2.166V7.583zm0 4.334h2.166v6.5h-2.166v-6.5z"
          fill={warning ? colors.warning : 'currentColor'}
        />
        <path
          d="M14.219 18.484H11.78v-7.312h2.438v7.312zM11.781 7.516h2.438v2.438h-2.438z"
          fill={warning ? '#343A40' : '#ffffff'}
        />
      </svg>
    );
  }

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
      <path
        d="M10.9,6.5h2.2v2.2h-2.2V6.5z M10.9,10.9h2.2v6.6h-2.2V10.9z M12,1C6,1,1,6,1,12S6,23,12,23S23,18,23,12
	S18,1,12,1z M12,20.8c-4.8,0-8.8-3.9-8.8-8.8S7.2,3.2,12,3.2s8.8,3.9,8.8,8.8S16.8,20.8,12,20.8z"
        fill={warning ? colors.warning : 'currentColor'}
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgComponent);
const InfoIcon = React.memo(ForwardRef);
export { InfoIcon };
