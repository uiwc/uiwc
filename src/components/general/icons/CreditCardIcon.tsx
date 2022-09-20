import * as React from 'react';

type SVGProps = React.SVGProps<SVGSVGElement> & {
  colored?: boolean;
};

function SvgComponent(
  { colored = false, ...rest }: SVGProps,
  svgRef?: React.Ref<SVGSVGElement>
) {
  if (colored) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x={0}
        y={0}
        viewBox="0 0 24 24"
        xmlSpace="preserve"
        width="1em"
        height="1em"
        ref={svgRef}
        {...rest}
      >
        <style>{'.st1{fill:#288cb4}.st3{fill:#be2814}'}</style>
        <path
          d="M23 8.6h-3.4v5.9c0 .4-.2.9-.5 1.2-.3.3-.7.5-1.2.5H5.2v5.1c0 .2.1.4.2.6.2.2.4.2.6.2h17c.2 0 .4-.1.6-.2.2-.2.2-.4.2-.6V9.5c0-.2-.1-.4-.2-.6-.1-.2-.3-.3-.6-.3z"
          style={{
            fill: '#27a9e1',
          }}
        />
        <path
          className="st1"
          d="M6.9 21.3v-5.1H5.2v5.1c0 .2.1.4.2.6.2.2.4.2.6.2h1.7c-.2 0-.4-.1-.6-.2-.1-.1-.2-.3-.2-.6z"
        />
        <path
          d="M17.9 15.4H1c-.2 0-.4-.1-.6-.2s-.2-.4-.2-.6V2.7c0-.2.1-.4.2-.6.1-.2.3-.3.6-.3h17c.2 0 .4.1.6.2.2.2.2.4.2.6v11.9c0 .2-.1.4-.2.6-.2.2-.4.3-.7.3z"
          style={{
            fill: '#e73f3a',
          }}
        />
        <path
          className="st3"
          d="M1.8 14.5V2.7c0-.2.1-.4.2-.6.2-.2.4-.2.6-.2H1c-.2 0-.4.1-.6.2-.2.1-.3.3-.3.6v11.9c0 .2.1.4.2.6s.4.2.6.2h1.7c-.2 0-.4-.1-.6-.2s-.2-.4-.2-.7z"
        />
        <path
          d="M19.6 11.2h4.2v1.7h-4.2v-1.7z"
          style={{
            fill: '#505050',
          }}
        />
        <path className="st1" d="M7.8 17.9h1.7v.8H7.8v-.8z" />
        <path className="st3" d="M2.7 10.3h1.7v.8H2.7v-.8z" />
        <path
          d="M15.8 5.2h-4.2c-.1 0-.2 0-.3-.1s-.1-.2-.1-.3v-.9c0-.1 0-.2.1-.3s.2-.1.3-.1h4.2c.1 0 .2 0 .3.1s.1.2.1.3v.8c0 .1 0 .2-.1.3s-.2.2-.3.2z"
          style={{
            fill: '#f0f0f0',
          }}
        />
        <path
          className="st3"
          d="M2.7 12h13.6v.8H2.7V12zM5.2 10.3h1.7v.8H5.2v-.8zM7.8 10.3h1.7v.8H7.8v-.8zM10.3 10.3h5.9v.8h-5.9v-.8z"
        />
        <path
          className="st1"
          d="M10.3 17.9H12v.8h-1.7v-.8zM12.8 17.9h1.7v.8h-1.7v-.8zM15.4 17.9h5.9v.8h-5.9v-.8z"
        />
        <path
          d="M5.6 8.6H3.1c-.1 0-.2 0-.3-.1-.1-.1-.1-.2-.1-.3V5.6c0-.1 0-.2.1-.3.1 0 .2-.1.3-.1h2.5c.1 0 .2 0 .3.1s.1.2.1.3v2.5c0 .1 0 .2-.1.3 0 .2-.2.2-.3.2z"
          style={{
            fill: '#fab400',
          }}
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
        d="M24 7.64V6.376a2.625 2.625 0 00-2.625-2.625H2.625A2.625 2.625 0 000 6.375v1.266c0 .13.105.234.234.234h23.532c.129 0 .234-.105.234-.234zM0 9.61v8.015a2.625 2.625 0 002.625 2.625h18.75A2.625 2.625 0 0024 17.625V9.609a.234.234 0 00-.234-.234H.234A.234.234 0 000 9.609zm6 6.14a.75.75 0 01-.75.75H4.5a.75.75 0 01-.75-.75V15a.75.75 0 01.75-.75h.75A.75.75 0 016 15v.75z"
        fill="currentColor"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgComponent);
const CreditCardIcon = React.memo(ForwardRef);
export { CreditCardIcon };
