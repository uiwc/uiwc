import React from 'react';

function SvgComponent(
  props: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>
) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={svgRef}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 2.244c.934-.035 1.87-.009 2.8.078.451-.006.9.073 1.322.233.582.271 1.05.74 1.322 1.322.16.422.24.871.234 1.323 0 .7.078.933.078 2.8.035.934.009 1.87-.078 2.8.006.451-.073.9-.233 1.322a2.732 2.732 0 01-1.322 1.322c-.422.16-.87.239-1.322.233-.7 0-.933.078-2.8.078-.934.035-1.87.009-2.8-.078-.451.006-.9-.073-1.322-.233a2.732 2.732 0 01-1.322-1.322c-.16-.422-.24-.87-.235-1.322 0-.7-.078-.933-.078-2.8-.035-.934-.009-1.87.078-2.8-.006-.451.073-.9.233-1.322.136-.289.32-.552.545-.778.182-.272.46-.466.778-.544.422-.16.87-.24 1.322-.234.93-.087 1.866-.113 2.8-.078zM8 1a22.982 22.982 0 00-2.878.078 4.8 4.8 0 00-1.711.311 3.045 3.045 0 00-1.244.778 3.045 3.045 0 00-.778 1.244 3.544 3.544 0 00-.311 1.711A22.981 22.981 0 001 8a22.98 22.98 0 00.078 2.878 4.8 4.8 0 00.31 1.711c.155.472.422.899.779 1.244.345.357.772.624 1.244.778a4.799 4.799 0 001.71.311c.958.086 1.919.112 2.879.078.96.034 1.921.008 2.878-.078a4.799 4.799 0 001.71-.311 3.262 3.262 0 002.023-2.022 4.799 4.799 0 00.31-1.711C14.922 10.1 15 9.867 15 8c.034-.96.008-1.921-.078-2.878a4.799 4.799 0 00-.311-1.711 3.045 3.045 0 00-.778-1.244 3.045 3.045 0 00-1.244-.778 4.8 4.8 0 00-1.711-.311A22.982 22.982 0 008 1zm0 3.422A3.52 3.52 0 004.422 8 3.578 3.578 0 108 4.422zm0 5.911A2.293 2.293 0 015.667 8 2.292 2.292 0 018 5.667 2.292 2.292 0 0110.333 8 2.29 2.29 0 018 10.333zm3.733-6.922a.856.856 0 10.856.856.863.863 0 00-.856-.856z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgComponent);
const InstagramIcon = React.memo(ForwardRef);
export { InstagramIcon };