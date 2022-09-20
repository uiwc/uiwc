import { useCallback, useEffect, useState } from 'react';
import { Utils } from '../../../utils';
import {
  AlertIconStyled,
  ContainerStyled,
  ErrorStyled,
  HelpTextStyled,
  LabelStyled,
  WrapperStyled,
} from '../common';
import { process } from '../helpers';
import { TextareaProps } from './constants';
import { TextareaStyled } from './styled';

export const Textarea = ({
  value = '',
  disabled = false,
  readOnly = false,
  loading = false,
  as = 'textarea',
  error = '',
  className,
  label = '',
  placeholder = '',
  floatingLabel = true,
  rows = 5,
  required = false,
  helpText,
  name,
  validators = {},
  register,
  onUpdateForm = (e: any) => e,
  mode = 'onChange',
  onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {},
  onBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {},
  onFocus = (e: React.FocusEvent<HTMLTextAreaElement>) => {},
  ...rest
}: TextareaProps) => {
  const [focused, setFocused] = useState(false);
  const [innerValue, setInnerValue] = useState(value);

  const containerStyles = Utils.joinClasses(className, 'input-container');

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
    setInnerValue(value);
    onUpdateForm(name, value, {
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
    [name, mode, onChange, onUpdateForm]
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
      <WrapperStyled>
        <TextareaStyled
          as={as}
          id={name}
          {...innerName}
          disabled={disabled ? 1 : undefined}
          readOnly={readOnly ? 1 : undefined}
          loading={loading ? 1 : undefined}
          className={inputStyles}
          placeholder={floatingLabel && label ? null : placeholder}
          rows={rows}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...rest}
        />

        {label && floatingLabel ? (
          <LabelStyled className={labelStyles} htmlFor={name}>
            <span>{label}</span>
          </LabelStyled>
        ) : null}

        {error ? <AlertIconStyled /> : null}
      </WrapperStyled>

      {error && <ErrorStyled>{error}</ErrorStyled>}
      {helpText && <HelpTextStyled>{helpText}</HelpTextStyled>}
      {/* {required && <HelpTextStyled>* Requerido</HelpTextStyled>} */}
    </ContainerStyled>
  );
};
