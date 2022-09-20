import React, { useCallback, useEffect, useState } from 'react';
import { i18n } from '../../../i18n/language';
import { Utils } from '../../../utils';
import {
  AlertIconStyled,
  ContainerStyled,
  ErrorStyled,
  HelpTextStyled,
  LabelStyled,
} from '../common';
import { process } from '../helpers';
import { SelectProps } from './constants';
import { SelectStyled, SelectWrapperStyled } from './styled';

export function Select({
  value,
  options = [],
  disabled = false,
  readOnly = false,
  loading = false,
  as = 'input',
  error = '',
  className,
  label = '',
  placeholder = '',
  floatingLabel = true,
  required = false,
  helpText,
  name,
  validators = {},
  register,
  onUpdateForm = (e: any) => e,
  mode = 'onChange',
  onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {},
  onBlur = (e: React.FocusEvent<HTMLSelectElement>) => {},
  onFocus = (e: React.FocusEvent<HTMLSelectElement>) => {},
  ...rest
}: SelectProps) {
  let defaultValue =
    Utils.isObject(value) && Utils.has(value, 'value')
      ? value?.value
      : value
      ? value
      : Utils.first(options)?.value;

  if (!required && Utils.isEmpty(value)) {
    defaultValue = null;
  }

  const hasRequiredValidator =
    !Utils.isEmpty(validators) && Utils.has(validators, 'required');

  const [focused, setFocused] = useState(false);
  const [innerValue, setInnerValue] = useState(defaultValue);

  const containerStyles = Utils.joinClasses(className, 'input-container');

  const wrapperStyles = Utils.joinClasses(focused && 'focused');

  const inputStyles = Utils.joinClasses(
    error && 'has-error',
    focused && 'focused',
    loading && 'loading'
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

  useEffect(() => {
    if (Utils.isUndefined(value)) {
      return;
    }

    let newValue =
      Utils.isObject(value) && Utils.has(value, 'value')
        ? value?.value
        : value
        ? value
        : Utils.first(options)?.value;

    if (!required && Utils.isEmpty(value)) {
      newValue = null;
    }

    setInnerValue(newValue);
    onUpdateForm(name, newValue, {
      shouldValidate: false,
      shouldDirty: true,
    });
  }, [value]);

  const handleChange = useCallback(
    (e: any) => {
      setInnerValue(e.target.value);
      onUpdateForm(name, e.target.value, {
        shouldValidate: mode === 'onChange',
        shouldDirty: true,
      });
      onChange(e);
    },
    [onChange, onUpdateForm, name, mode]
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

  return (
    <ContainerStyled className={containerStyles}>
      <SelectWrapperStyled className={wrapperStyles}>
        <SelectStyled
          as={as}
          id={name}
          {...innerName}
          disabled={disabled ? 1 : undefined}
          readOnly={readOnly ? 1 : undefined}
          className={inputStyles}
          placeholder={floatingLabel && label ? null : placeholder}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          defaultValue={defaultValue}
          {...rest}
        >
          {required || hasRequiredValidator ? null : (
            <option value="">{i18n(`ui.components.helps.chooseOption`)}</option>
          )}
          {options?.map((opt: any) => (
            <option key={opt.value} value={opt.value} disabled={opt.disabled}>
              {opt.label}
            </option>
          ))}
        </SelectStyled>

        {label && floatingLabel ? (
          <LabelStyled className={labelStyles} htmlFor={name}>
            <span>{label}</span>
          </LabelStyled>
        ) : null}

        {error ? <AlertIconStyled className="is-select" /> : null}
      </SelectWrapperStyled>

      {error && <ErrorStyled>{error}</ErrorStyled>}
      {helpText && <HelpTextStyled>{helpText}</HelpTextStyled>}
    </ContainerStyled>
  );
}
