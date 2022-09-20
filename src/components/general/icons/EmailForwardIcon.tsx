import React from 'react';

function SvgComponent(
  props: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>
) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 29 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={svgRef}
      {...props}
    >
      <path
        d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
        fill="currentColor"
      />
      <path
        d="M14.299 24.547a1.024 1.024 0 01-.859-1.011v0c0-5.48 3.207-9.71 7.893-10.252v-1.82a1.024 1.024 0 011.785-.686h0l4.18 4.644h0c.337.376.35.94.032 1.332h0l-4.18 5.108s0 0 0 0a1.024 1.024 0 01-1.817-.647v0-1.722c-1.486.12-2.676.508-3.606 1.145-1.043.714-1.807 1.77-2.291 3.222h0c-.14.418-.53.7-.97.7h-.002c-.053 0-.108-.004-.165-.013zm0 0s0 0 0 0l.09-.553-.09.553s0 0 0 0z"
        fill="currentColor"
        stroke="#fff"
        strokeWidth={1.12}
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgComponent);
const EmailForwardIcon = React.memo(ForwardRef);
export { EmailForwardIcon };
