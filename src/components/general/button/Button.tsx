import { Utils } from '../../../utils';
import { ButtonGroup } from '../buttonGroup';
import { ChevronIcon } from '../icons';
import { Spinner } from '../spinner';
import { ButtonProps } from './constants';
import { ButtonStyled } from './styled';

export function Button({
  type = 'button',
  variant = 'green',
  disabled = false,
  className,
  children,
  as,
  to,
  loading = false,
  block = false,
  active = false,
  href,
  target,
  caret = false,
  caretDirection = 'down',
  circle = false,
  size = 48,
  onClick,
  ...rest
}: ButtonProps) {
  const styles = Utils.joinClasses(
    className,
    variant === 'link' && 'link-variant',
    block && 'block',
    active && 'active',
    loading && 'loading',
    circle && 'circle'
  );

  if (as && !disabled) {
    return (
      <ButtonStyled
        as={as}
        to={to}
        target={target}
        onClick={onClick}
        className={styles}
        variant={variant}
        size={size}
        {...rest}
      >
        {/* TODO: mejorar el loading con spinner... */}
        {/* El children es una prop especial de los componentes, es mas
      legible ponerlo entre etiquetas */}
        {loading ? (
          <Spinner
            color={
              variant === 'green'
                ? 'white'
                : variant === 'orange'
                ? 'text'
                : 'primary'
            }
            size={circle ? 1 : 0.5}
            variant={circle ? 'pulse' : 'dots'}
            className={circle ? '' : 'mx-3'}
          />
        ) : (
          <>
            {caret ? (
              <>
                {children}{' '}
                <ChevronIcon
                  direction={caretDirection}
                  className={
                    variant === 'green'
                      ? 'text-white'
                      : variant === 'orange'
                      ? 'text-text'
                      : 'text-primary'
                  }
                />
              </>
            ) : (
              children
            )}
          </>
        )}
      </ButtonStyled>
    );
  }

  if (href && !disabled) {
    return (
      <ButtonStyled
        as="a"
        href={href}
        target={target}
        onClick={onClick}
        className={styles}
        variant={variant}
        size={size}
        {...rest}
      >
        {/* TODO: mejorar el loading con spinner... */}
        {/* El children es una prop especial de los componentes, es mas
      legible ponerlo entre etiquetas */}
        {loading ? (
          <Spinner
            color={
              variant === 'green'
                ? 'white'
                : variant === 'orange'
                ? 'text'
                : 'primary'
            }
            size={circle ? 1 : 0.5}
            variant={circle ? 'pulse' : 'dots'}
            className={circle ? '' : 'mx-3'}
          />
        ) : (
          <>
            {caret ? (
              <>
                {children}{' '}
                <ChevronIcon
                  direction={caretDirection}
                  className={
                    variant === 'green'
                      ? 'text-white'
                      : variant === 'orange'
                      ? 'text-text'
                      : 'text-primary'
                  }
                />
              </>
            ) : (
              children
            )}
          </>
        )}
      </ButtonStyled>
    );
  }

  return (
    <ButtonStyled
      as="button"
      type={type}
      onClick={onClick}
      className={styles}
      variant={variant}
      disabled={disabled}
      size={size}
      {...rest}
    >
      {/* TODO: mejorar el loading con spinner... */}
      {/* El children es una prop especial de los componentes, es mas
      legible ponerlo entre etiquetas */}
      {loading ? (
        <Spinner
          color={
            variant === 'green'
              ? 'white'
              : variant === 'orange'
              ? 'text'
              : 'primary'
          }
          size={circle ? 1 : 0.5}
          variant={circle ? 'pulse' : 'dots'}
          className={circle ? '' : 'mx-3'}
        />
      ) : (
        <>
          {caret ? (
            <>
              {children}{' '}
              <ChevronIcon
                direction={caretDirection}
                className={
                  variant === 'green'
                    ? 'text-white'
                    : variant === 'orange'
                    ? 'text-text'
                    : 'text-primary'
                }
              />
            </>
          ) : (
            children
          )}
        </>
      )}
    </ButtonStyled>
  );
}

Button.Group = ButtonGroup;
