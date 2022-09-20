import React, { useCallback, useEffect, useState } from 'react';
import { Utils } from '../../../utils';
import { ContainerStyled, HelpTextStyled } from '../common';
import { process } from '../helpers';
import { RadioProps } from './constants';
import { OptionLabelStyled, OptionWrapperStyled, RadioStyled } from './styled';

export function RadioComponent(
  {
    value,
    name = '',
    groupValue,
    disabled = false,
    readOnly = false,
    loading = false,
    error = '',
    className,
    label = '',
    required = false,
    helpText,
    validators = {},
    register,
    onUpdateForm = (e: any) => e,
    mode = 'onChange',
    onChecked = (e: any) => {},
    onChange = (e: React.ChangeEvent<HTMLInputElement>) => {},
    onBlur = (e: React.FocusEvent<HTMLInputElement>) => {},
    onFocus = (e: React.FocusEvent<HTMLInputElement>) => {},
    optionWrapperClassName,
    ...rest
  }: RadioProps,
  ref: React.Ref<HTMLInputElement>
) {
  const [focused, setFocused] = useState(false);

  const containerStyles = Utils.joinClasses(className, label ? '' : 'mb-0');

  const inputStyles = Utils.joinClasses(
    error && 'has-error',
    focused && 'focused',
    loading && 'loading',
    label && 'mr-3'
  );

  const labelStyles = Utils.joinClasses(
    error && 'has-error',
    required && 'required',
    disabled && 'disabled',
    loading && 'loading'
  );

  const getValue = useCallback((e: any) => {
    let value = e;

    if (value === 'true' || value === 'false') {
      value = value === 'true';
    } else if (Utils.isNumber(+value)) {
      value = +value;
    }

    return value;
  }, []);

  const innerName =
    register !== undefined ? register(name, process(validators)) : { name };

  const handleChange = useCallback(
    (e: any) => {
      const val = getValue(e.target.value);

      onChecked(val);
      onChange(e);
    },
    [getValue, onChecked, onChange]
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
    if (groupValue === value?.toString()) {
      const val = getValue(value);

      onUpdateForm(name, val, {
        shouldValidate: mode === 'onChange',
        shouldDirty: true,
      });
    }
  }, [groupValue]);

  return (
    <ContainerStyled className={containerStyles}>
      <OptionWrapperStyled className={optionWrapperClassName}>
        <RadioStyled
          id={name}
          {...innerName}
          disabled={disabled ? 1 : undefined}
          readOnly={readOnly ? 1 : undefined}
          className={inputStyles}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          ref={ref}
          value={value}
          checked={groupValue === value?.toString()}
          {...rest}
        />

        {label ? (
          <OptionLabelStyled className={labelStyles} htmlFor={name}>
            {label}
          </OptionLabelStyled>
        ) : null}
      </OptionWrapperStyled>

      {helpText && <HelpTextStyled>{helpText}</HelpTextStyled>}
    </ContainerStyled>
  );
}

const Radio = React.forwardRef(RadioComponent);
export { Radio };
