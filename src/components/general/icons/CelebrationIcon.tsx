import React from 'react';

function SvgComponent(
  props: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>
) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={svgRef}
      {...props}
    >
      <path
        d="M3.198 21.722c-.335 1.66 1.401 2.945 2.891 2.141l9.893-5.338c1.274-.688 1.437-2.454.309-3.342L8.683 9.2c-1.168-.919-2.903-.267-3.2 1.201L3.199 21.722z"
        fill="currentColor"
      />
      <path
        d="M14.253 16.597h-.006c-.597-.001-2.155-.634-3.796-2.333a.462.462 0 00-.669 0 .501.501 0 000 .692c1.49 1.542 3.327 2.619 4.466 2.62l.014-.001a.482.482 0 00.463-.499.48.48 0 00-.472-.48zM23.861 9.195a.462.462 0 00-.668 0c-1.02 1.055-1.839 1.011-2.787.96-1.008-.054-2.15-.115-3.424 1.202a.501.501 0 000 .692.463.463 0 00.668 0c.976-1.01 1.778-.966 2.707-.917 1.025.055 2.187.118 3.505-1.245a.501.501 0 000-.692zM9.506 7.051a.481.481 0 00.472-.489c0-1.492.61-2.06 1.315-2.718.75-.699 1.6-1.491 1.6-3.355 0-.27-.212-.489-.473-.489a.481.481 0 00-.473.49c0 1.427-.596 1.983-1.287 2.627-.763.712-1.627 1.518-1.627 3.445 0 .27.211.49.473.49z"
        fill="currentColor"
      />
      <path
        d="M13.48 16.625a.491.491 0 00-.344-.594c-1.396-.36-1.78-1.11-2.226-1.978-.473-.923-1.01-1.97-2.753-2.419a.471.471 0 00-.572.358.491.491 0 00.344.594c1.336.344 1.713 1.079 2.149 1.93.481.938 1.027 2.003 2.83 2.467a.471.471 0 00.572-.358zM10.71 18.731c.048-.204-.057-.406-.236-.452-.986-.254-1.249-.826-1.552-1.489-.323-.704-.688-1.502-1.92-1.82-.18-.046-.364.082-.413.286-.049.204.057.406.236.452.944.244 1.2.804 1.498 1.452.328.717.7 1.529 1.975 1.857.179.046.363-.082.412-.286z"
        fill="#fff"
      />
      <path
        d="M19.117 7c.444 0 .86-.18 1.175-.504.647-.67.647-1.76 0-2.43a1.623 1.623 0 00-2.35 0 1.738 1.738 0 00-.487 1.215c0 .459.173.89.487 1.215.314.325.731.504 1.175.504zm-.506-2.243a.699.699 0 011.012 0 .76.76 0 010 1.047.7.7 0 01-1.012 0 .749.749 0 01-.21-.523c0-.198.074-.384.21-.524zM12.03 6.56a.474.474 0 00-.221.298.499.499 0 00.128.478l2.344 2.425a.475.475 0 00.34.15.455.455 0 00.302-.113.483.483 0 00.157-.258l.858-3.313a.501.501 0 00-.122-.482.468.468 0 00-.332-.142.455.455 0 00-.13.019l-3.203.887a.46.46 0 00-.122.051zm2.785.224l-.438 1.692-1.198-1.239 1.636-.453zM21.674 12.911h-2.021a.481.481 0 00-.473.49v2.09c0 .27.212.49.473.49h2.02c.262 0 .474-.22.474-.49v-2.09c0-.27-.212-.49-.473-.49zm-.473 2.091h-1.075V13.89H21.2v1.112z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgComponent);
const CelebrationIcon = React.memo(ForwardRef);
export { CelebrationIcon };
