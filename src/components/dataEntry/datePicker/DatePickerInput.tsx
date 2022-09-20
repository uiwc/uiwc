import { forwardRef } from 'react';
import { Utils } from '../../../utils';
import {
  AlertIconStyled,
  ContainerStyled,
  ErrorStyled,
  HelpTextStyled,
  LabelStyled,
} from '../common';
import { DatePickerInputProps } from './constants';
import {
  CalendarIconStyled,
  DatePickerWrapperStyled,
  InputStyled,
} from './styled';

export const DatePickerInput = forwardRef(
  (
    {
      helpText,
      name,
      value,
      label,
      error = '',
      loading = false,
      required = false,
      enabled = false,
      format = '',
      onClick,
    }: DatePickerInputProps,
    ref: any
  ) => {
    const inputStyles = Utils.joinClasses(
      error && 'has-error',
      loading && 'loading',
      !enabled && 'disabled'
    );

    const labelStyles = Utils.joinClasses(
      error && 'has-error',
      required && 'required',
      !enabled && 'disabled',
      loading && 'loading'
    );

    return (
      <ContainerStyled>
        <DatePickerWrapperStyled>
          <InputStyled
            name={name}
            value={value}
            className={inputStyles}
            disabled={!enabled}
            placeholder={format?.toLowerCase()}
            onClick={onClick}
            readOnly
            ref={ref}
          />

          {label ? (
            <LabelStyled className={labelStyles}>
              <span>{label}</span>
            </LabelStyled>
          ) : null}

          {error ? (
            <AlertIconStyled />
          ) : (
            <CalendarIconStyled className={inputStyles} />
          )}
        </DatePickerWrapperStyled>

        {error && <ErrorStyled>{error}</ErrorStyled>}
        {helpText && <HelpTextStyled>{helpText}</HelpTextStyled>}
      </ContainerStyled>
    );
  }
);
