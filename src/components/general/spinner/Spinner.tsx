import { Utils } from '../../..';
import { SpinnerProps } from './constants';
import {
  CircleSpinnerStyled,
  DotsSpinnerStyled,
  PulseSpinnerStyled,
} from './styled';

export function Spinner({
  variant = 'dots',
  color = 'text',
  size = 1,
  className,
  ...rest
}: SpinnerProps) {
  const styles = Utils.joinClasses(className, 'dw-spinner');

  if (variant === 'pulse') {
    return (
      <PulseSpinnerStyled
        className={styles}
        color={color}
        size={size}
        {...rest}
      >
        <div className="double-bounce1"></div>
        <div className="double-bounce2"></div>
      </PulseSpinnerStyled>
    );
  }

  if (variant === 'circle') {
    return (
      <CircleSpinnerStyled
        className={styles}
        color={color}
        size={size}
        {...rest}
      >
        <div className="circle1 child"></div>
        <div className="circle2 child"></div>
        <div className="circle3 child"></div>
        <div className="circle4 child"></div>
        <div className="circle5 child"></div>
        <div className="circle6 child"></div>
        <div className="circle7 child"></div>
        <div className="circle8 child"></div>
        <div className="circle9 child"></div>
        <div className="circle10 child"></div>
        <div className="circle11 child"></div>
        <div className="circle12 child"></div>
      </CircleSpinnerStyled>
    );
  }

  return (
    <DotsSpinnerStyled className={styles} color={color} size={size} {...rest}>
      <div className="bounce1"></div>
      <div className="bounce2"></div>
      <div className="bounce3"></div>
    </DotsSpinnerStyled>
  );
}
