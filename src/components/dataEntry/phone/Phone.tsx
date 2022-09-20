import { i18n } from '../../../i18n/language';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Utils } from '../../../utils';
import { Flag } from '../../general/flag';
import { Dropdown } from '../../navigation/dropdown';
import {
  AlertIconStyled,
  ContainerStyled,
  ErrorStyled,
  HelpTextStyled,
  LabelStyled,
} from '../common';
import { process } from '../helpers';
import { PhoneProps } from './constants';
import { countries } from './countries';
import {
  CodeStyled,
  FlagStyled,
  FullPhoneWrapper,
  PhoneSearchStyled,
  PhoneStyled,
  PhoneWrapperStyled,
} from './styled';

export const Phone = ({
  value,
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
  defaultCountry = 'US',
  codeValue = '',
  register,
  onUpdateForm = (e: any) => e,
  mode = 'onChange',
  onChange = (e: React.ChangeEvent<HTMLInputElement>) => {},
  onBlur = (e: React.FocusEvent<HTMLInputElement>) => {},
  onFocus = (e: React.FocusEvent<HTMLInputElement>) => {},
  searchable = true,
  ...rest
}: PhoneProps) => {
  const searchInput = useRef<HTMLInputElement>(null);
  const phoneInput = useRef<HTMLInputElement>(null);

  const [focused, setFocused] = useState(false);
  const [innerValue, setInnerValue] = useState(value);
  const [countrySelected, setCountrySelected] = useState<any>(
    countries.find(({ isoCode2 }) =>
      Utils.isSameText(isoCode2, defaultCountry.toUpperCase())
    ) || countries[0]
  );
  const [searchValue, setSearchValue] = useState('');

  const containerStyles = Utils.joinClasses(className, 'input-container');

  const inputStyles = Utils.joinClasses(
    error && 'has-error',
    focused && 'focused',
    loading && 'loading',
    disabled && 'disabled'
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
    if (codeValue) {
      const country =
        countries.find(({ dialCode }) =>
          Utils.isSameText(dialCode, codeValue)
        ) || countries[0];

      setCountrySelected(country);
      onUpdateForm(`${name}_dialCode`, codeValue, {
        shouldValidate: false,
        shouldDirty: true,
      });
    }
  }, [codeValue]);

  useEffect(() => {
    setInnerValue(value);
    onUpdateForm(name, value, {
      shouldValidate: false,
      shouldDirty: true,
    });
    if (phoneInput.current !== null && value !== undefined) {
      phoneInput.current.value = value;
    }
  }, [value]);

  const handleChange = useCallback(
    (e: any) => {
      const value = e.target.value;

      setInnerValue(value);
      onUpdateForm(name, value, {
        shouldValidate: mode === 'onChange',
        shouldDirty: true,
      });
      onUpdateForm(`${name}_dialCode`, countrySelected?.dialCode, {
        shouldValidate: false,
        shouldDirty: true,
      });
      onChange({
        code: countrySelected?.dialCode,
        value,
      });
    },
    [countrySelected?.dialCode, mode, name, onChange, onUpdateForm]
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

  const handleSelection = useCallback(
    (e: any) => {
      setCountrySelected(e);
      onUpdateForm(`${name}_dialCode`, e?.dialCode, {
        shouldValidate: false,
        shouldDirty: true,
      });
      onChange({
        code: e?.dialCode,
        value: innerValue,
      });
    },
    [innerValue, name, onChange, onUpdateForm]
  );

  const handleSearch = useCallback((value: string) => {
    setSearchValue(value);
  }, []);

  const filteredCountries = countries.filter((country) => {
    return (
      Utils.include(country.dialCode, searchValue) ||
      Utils.include(country.name, searchValue)
    );
  });

  return (
    <ContainerStyled className={containerStyles}>
      <PhoneWrapperStyled>
        <FlagStyled>
          <Dropdown
            caret
            disabled={disabled || loading}
            toggle={<Flag country={countrySelected?.isoCode2} />}
            onOpen={() => {
              setTimeout(() => {
                searchInput?.current?.focus();
                searchInput?.current?.select();
              }, 0);
            }}
            onClose={() => {
              setTimeout(() => {
                phoneInput?.current?.focus();
              }, 0);
            }}
            fixedArea={
              searchable && (
                <PhoneSearchStyled
                  ref={searchInput}
                  name="pn-search"
                  placeholder={i18n('ui.components.placeholders.search')}
                  className="m-0"
                  onChange={(e: any) => handleSearch(e.target.value)}
                />
              )
            }
          >
            {filteredCountries.length ? (
              filteredCountries.map((country) => (
                <Dropdown.Item
                  key={country.isoCode2}
                  icon={<Flag country={country.isoCode2} />}
                  value={country}
                  active={country.isoCode2 === countrySelected.isoCode2}
                  onClick={handleSelection}
                >
                  <span>
                    {country.name}{' '}
                    <span className="text-spanish">{country.dialCode}</span>
                  </span>
                </Dropdown.Item>
              ))
            ) : (
              <Dropdown.Title className="text-center">
                {i18n(`ui.components.helps.noOptions`)}
              </Dropdown.Title>
            )}
          </Dropdown>
        </FlagStyled>

        <FullPhoneWrapper>
          <CodeStyled className={inputStyles}>
            {countrySelected?.dialCode}
          </CodeStyled>

          <PhoneStyled
            as={as}
            type="phone"
            {...innerName}
            disabled={disabled ? 1 : undefined}
            readOnly={readOnly ? 1 : undefined}
            className={inputStyles}
            placeholder={floatingLabel && label ? null : placeholder}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            {...rest}
            ref={phoneInput}
          />
        </FullPhoneWrapper>

        {label && floatingLabel ? (
          <LabelStyled className={labelStyles}>
            <span>{label}</span>
          </LabelStyled>
        ) : null}

        {error ? <AlertIconStyled /> : null}
      </PhoneWrapperStyled>

      {error && <ErrorStyled>{error}</ErrorStyled>}
      {helpText && <HelpTextStyled>{helpText}</HelpTextStyled>}
      {/* {required && <HelpTextStyled>* Requerido</HelpTextStyled>} */}
    </ContainerStyled>
  );
};
