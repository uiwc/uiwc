import { IframeProps } from './constants';

export function Iframe({
  title = '',
  src,
  allow = 'fullscreen',
  width = '100%',
  height = 315,
  ...rest
}: IframeProps) {
  return (
    <>
      <iframe
        title={title}
        src={src}
        allow={allow}
        width={width}
        height={height}
        style={{ border: 'none' }}
        {...rest}
      />
    </>
  );
}
