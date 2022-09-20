import React, { useCallback, useEffect, useState } from 'react';
import { Utils } from '../../../utils';
import {
  AlertIconStyled,
  ContainerStyled,
  ErrorStyled,
  HelpTextStyled,
  LabelStyled,
  VisibilityIconStyled,
  WrapperStyled,
} from '../common';
import { process } from '../helpers';
import { InputProps } from './constants';
import { InputStyled } from './styled';

export const Input = ({
  type = 'text',
  value = '',
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
  showErrorFeedback = true,
  validators = {},
  register,
  onUpdateForm = (e: any) => e,
  mode = 'onChange',
  onChange = (e: React.ChangeEvent<HTMLInputElement>) => {},
  onBlur = (e: React.FocusEvent<HTMLInputElement>) => {},
  onFocus = (e: React.FocusEvent<HTMLInputElement>) => {},
  cleanable = false,
  preventCut = false,
  preventPaste = false,
  preventCopy = false,
  ...rest
}: InputProps) => {
  const [focused, setFocused] = useState(false);
  const [innerValue, setInnerValue] = useState<any>(value);
  const [showPassword, setShowPassword] = useState(false);
  const [isEmail] = useState(type === 'email');
  const [isPassword] = useState(type === 'password');
  const [isNumber] = useState(type === 'number');
  const [isHidden] = useState(type === 'hidden');
  const [inputType, setInputType] = useState(type);

  const containerStyles = Utils.joinClasses(className, 'input-container');

  const inputStyles = Utils.joinClasses(
    error && 'has-error',
    showErrorFeedback && 'show-error-feedback',
    isPassword && 'is-password',
    focused && 'focused',
    loading && 'loading'
  );

  const labelStyles = Utils.joinClasses(
    error && 'has-error',
    !Utils.isEmpty(innerValue) && 'filled',
    required && 'required',
    disabled && 'disabled',
    readOnly && 'readonly',
    loading && 'loading'
  );

  const alertIconStyles = Utils.joinClasses(isNumber && 'is-number');

  const innerName =
    register !== undefined
      ? register(name, process(validators, isEmail || isPassword ? type : ''))
      : { name };

  useEffect(() => {
    setInnerValue(value);
    onUpdateForm(name, value, {
      shouldValidate: false,
      shouldDirty: true,
    });
  }, [value]);

  const handleChange = useCallback(
    (e: any) => {
      const value = isNumber ? +e.target.value : e.target.value;

      setInnerValue(value);
      onUpdateForm(name, value, {
        shouldValidate: mode === 'onChange',
        shouldDirty: true,
      });
      onChange(e);
    },
    [isNumber, name, onChange, onUpdateForm, mode]
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

  const handleCopy = useCallback(
    (e: any) => {
      if (preventCopy) {
        e.preventDefault();
        return false;
      }
      return true;
    },
    [preventCopy]
  );

  const handlePaste = useCallback(
    (e: any) => {
      if (preventPaste) {
        e.preventDefault();
        return false;
      }
      return true;
    },
    [preventPaste]
  );

  const handleCut = useCallback(
    (e: any) => {
      if (preventCut) {
        e.preventDefault();
        return false;
      }
      return true;
    },
    [preventCut]
  );

  const togglePassword = useCallback(() => {
    setInputType(!showPassword ? 'text' : 'password');
    setShowPassword(!showPassword);
  }, [showPassword]);

  return (
    <ContainerStyled className={containerStyles}>
      <WrapperStyled>
        <InputStyled
          as={as}
          type={inputType}
          {...innerName}
          disabled={disabled ? 1 : undefined}
          readOnly={readOnly ? 1 : undefined}
          className={inputStyles}
          placeholder={floatingLabel && label ? null : placeholder}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onCut={handleCut}
          onPaste={handlePaste}
          onCopy={handleCopy}
          {...rest}
        />

        {label && floatingLabel && !isHidden ? (
          <LabelStyled className={labelStyles}>
            <span>{label}</span>
          </LabelStyled>
        ) : null}

        {showErrorFeedback ? (
          <>
            {error && !isPassword && !isHidden ? (
              <AlertIconStyled className={alertIconStyles} />
            ) : isPassword ? (
              <VisibilityIconStyled
                off={showPassword}
                className={inputStyles}
                onClick={togglePassword}
              />
            ) : null}
          </>
        ) : null}
      </WrapperStyled>

      {showErrorFeedback ? (
        <>{error && !isHidden ? <ErrorStyled>{error}</ErrorStyled> : null}</>
      ) : null}

      {helpText && !isHidden ? (
        <HelpTextStyled>{helpText}</HelpTextStyled>
      ) : null}
      {/* {required && <HelpTextStyled>* Requerido</HelpTextStyled>} */}
    </ContainerStyled>
  );
};
