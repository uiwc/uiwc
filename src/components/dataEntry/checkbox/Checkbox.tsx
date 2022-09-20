import React, { useCallback, useEffect, useState } from 'react';
import { Utils } from '../../../utils';
import { ContainerStyled, ErrorStyled, HelpTextStyled } from '../common';
import { process } from '../helpers';
import { CheckboxProps } from './constants';
import {
  CheckboxStyled,
  OptionLabelStyled,
  OptionWrapperStyled,
} from './styled';

export function CheckboxComponent(
  {
    value = false,
    disabled = false,
    readOnly = false,
    loading = false,
    error = '',
    className,
    label = '',
    required = false,
    helpText,
    name,
    validators = {},
    register,
    onUpdateForm = (e: any) => e,
    mode = 'onChange',
    onChange = (e: React.ChangeEvent<HTMLInputElement>) => {},
    onBlur = (e: React.FocusEvent<HTMLInputElement>) => {},
    onFocus = (e: React.FocusEvent<HTMLInputElement>) => {},
    optionWrapperClassName,
    ...rest
  }: CheckboxProps,
  ref: React.Ref<HTMLInputElement>
) {
  const [focused, setFocused] = useState(false);
  const [innerValue, setInnerValue] = useState<boolean>(value);

  const containerStyles = Utils.joinClasses(className, label ? '' : 'mb-0');

  const inputStyles = Utils.joinClasses(
    error && 'has-error',
    focused && 'focused',
    loading && 'loading',
    label && 'mr-3'
  );

  const labelStyles = Utils.joinClasses(
    error && 'has-error',
    !Utils.isEmpty(innerValue) && 'filled',
    required && 'required',
    disabled && 'disabled',
    loading && 'loading'
  );

  const innerName =
    register !== undefined ? register(name, process(validators)) : { name };

  const handleChange = useCallback(
    (e: any) => {
      setInnerValue(!innerValue);
      onUpdateForm(name, e.target.checked, {
        shouldValidate: mode === 'onChange',
        shouldDirty: true,
      });
      onChange(e);
    },
    [innerValue, name, onChange, onUpdateForm, mode]
  );

  const handleFocus = useCallback(
    (e: any) => {
      setFocused(true);
      onFocus(e);
    },
    [onFocus]
  );

  const handleBlur = useCallback(
    (e: any) => {
      setFocused(false);
      onBlur(e);
    },
    [onBlur]
  );

  useEffect(() => {
    setInnerValue(value);
    onUpdateForm(name, value, {
      shouldValidate: false,
      shouldDirty: true,
    });
  }, [value]);

  return (
    <ContainerStyled className={containerStyles}>
      <OptionWrapperStyled className={optionWrapperClassName}>
        <CheckboxStyled
          id={name}
          {...innerName}
          disabled={disabled ? 1 : undefined}
          readOnly={readOnly ? 1 : undefined}
          className={inputStyles}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          ref={ref}
          checked={innerValue}
          {...rest}
        />

        {label ? (
          <OptionLabelStyled className={labelStyles} htmlFor={name}>
            {label}
          </OptionLabelStyled>
        ) : null}
      </OptionWrapperStyled>

      {error && <ErrorStyled>{error}</ErrorStyled>}
      {helpText && <HelpTextStyled>{helpText}</HelpTextStyled>}
    </ContainerStyled>
  );
}

const Checkbox = React.forwardRef(CheckboxComponent);
export { Checkbox };
