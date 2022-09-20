import { Utils } from '../../../utils';
import { ImageProps } from './constants';
import { ImageStyled, ImageWrapperStyled } from './styled';

export function Image({
  src,
  alt = ' ',
  square = false,
  circle = false,
  className,
  debug = false,
  width = '100%',
  height = 'auto',
  ...rest
}: ImageProps) {
  const wrapperStyles = Utils.joinClasses(
    className,
    circle && 'rounded-circle',
    square && 'square'
  );

  const imageStyles = Utils.joinClasses(
    className,
    circle && 'rounded-circle',
    square && 'square'
  );

  const w = Utils.isNumber(width) ? width : 300;
  const h = Utils.isNumber(height) ? height : 300;

  const source = debug || !src ? `https://via.placeholder.com/${w}x${h}` : src;

  return (
    <ImageWrapperStyled width={width} className={wrapperStyles} {...rest}>
      <ImageStyled
        src={source}
        alt={alt}
        className={imageStyles}
        width="100%"
        height={height}
      />
    </ImageWrapperStyled>
  );
}
