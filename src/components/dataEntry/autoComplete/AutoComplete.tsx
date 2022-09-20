import React, { useCallback, useEffect, useState } from 'react';
import { components } from 'react-select';
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
import { AutoCompleteProps } from './constants';
import { DefaultClear } from './DefaultClear';
import { DefaultMultiValue } from './DefaultMultiValue';
import { DefaultOption } from './DefaultOption';
import { DefaultSingleValue } from './DefaultSingleValue';
import {
  AutoCompleteStyled,
  AutoCompleteWrapperStyled,
  CreatableAutoCompleteStyled,
} from './styled';

export function AutoComplete({
  name,
  options = [],
  value,
  label,
  error,
  helpText,
  disabled = false,
  loading = false,
  required = false,
  clearable = false,
  searchable = true,
  multiple = false,
  creatable = false,
  className,
  placeholder,
  customOption = DefaultOption,
  customSingleValue = DefaultSingleValue,
  customMultiValue = DefaultMultiValue,
  menuPosition = 'absolute',
  menuPlacement = 'auto',
  onChange = (e: any | any[]) => {},
  onCreate = (e: any | any[]) => {},
  onIsNewValue = (inputValue: string, options: any[]) => {
    const found = options.find((o: any) => o.label === inputValue);
    return !found && inputValue.length > 0;
  },
  validators = {},
  register,
  onUpdateForm = (e: any) => e,
  mode = 'onChange',
  ...rest
}: AutoCompleteProps) {
  const [innerValue, setInnerValue] = useState(value);

  const inputStyles = Utils.joinClasses(
    error && 'has-error',
    loading && 'loading',
    disabled && 'disabled',
    multiple && 'is-multiple'
  );

  const labelStyles = Utils.joinClasses(
    error && 'has-error',
    disabled && 'disabled',
    loading && 'loading'
  );

  const containerStyles = Utils.joinClasses(className, 'input-container');

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
    (data: any) => {
      setInnerValue(data);

      onUpdateForm(name, data, {
        shouldValidate: mode === 'onChange',
        shouldDirty: true,
      });

      onChange(data);
    },
    [name, onChange, onUpdateForm, mode]
  );

  const handleCreate = useCallback(
    (data: any) => {
      onCreate(data);
    },
    [onCreate]
  );

  return (
    <ContainerStyled className={containerStyles}>
      <AutoCompleteWrapperStyled>
        {creatable ? (
          <CreatableAutoCompleteStyled
            {...innerName}
            value={innerValue}
            className={inputStyles}
            classNamePrefix="dw-uic-autocomplete"
            options={options}
            isDisabled={disabled}
            isLoading={loading}
            isSearchable={searchable}
            isClearable={clearable}
            isMulti={multiple}
            onChange={handleChange}
            onCreateOption={handleCreate}
            isValidNewOption={(inputValue: string, _: any, options: any) => {
              return onIsNewValue(inputValue, options);
            }}
            placeholder={
              placeholder || i18n(`ui.components.helps.chooseOption`)
            }
            noOptionsMessage={() => i18n(`ui.components.helps.noOptions`)}
            formatCreateLabel={(value: any) =>
              `${i18n(`ui.components.helps.create`)}: "${value}"`
            }
            components={{
              Option: customOption,
              SingleValue: customSingleValue,
              MultiValue: customMultiValue,
              ClearIndicator: DefaultClear,
            }}
            menuPosition={menuPosition}
            menuPlacement={menuPlacement}
            {...rest}
          />
        ) : (
          <AutoCompleteStyled
            {...innerName}
            value={innerValue}
            className={inputStyles}
            classNamePrefix="dw-uic-autocomplete"
            options={options}
            isDisabled={disabled}
            isLoading={loading}
            isSearchable={searchable}
            isClearable={clearable}
            isMulti={multiple}
            onChange={handleChange}
            placeholder={
              placeholder || i18n(`ui.components.helps.chooseOption`)
            }
            noOptionsMessage={() => i18n(`ui.components.helps.noOptions`)}
            components={{
              Option: customOption,
              SingleValue: customSingleValue,
              MultiValue: customMultiValue,
              ClearIndicator: DefaultClear,
            }}
            menuPosition={menuPosition}
            menuPlacement={menuPlacement}
            {...rest}
          />
        )}

        {label ? (
          <LabelStyled className={labelStyles}>
            <span>{label}</span>
          </LabelStyled>
        ) : null}

        {error ? <AlertIconStyled className="is-select" /> : null}
      </AutoCompleteWrapperStyled>

      {error && <ErrorStyled>{error}</ErrorStyled>}
      {helpText && <HelpTextStyled>{helpText}</HelpTextStyled>}
    </ContainerStyled>
  );
}

AutoComplete.Option = components.Option;
AutoComplete.SingleValue = components.SingleValue;
AutoComplete.MultiValue = components.MultiValue;
