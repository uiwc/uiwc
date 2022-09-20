import { i18n } from '../../../i18n/language';
import { useCallback, useRef, useState } from 'react';
import { Utils } from '../../../utils';
import { Button, Icons } from '../../general';
import { FormHandler } from '../form';
import { Input } from '../input/Input';
import { SearchProps } from './constants';
import { FormStyled } from './styled';

export const Search = ({
  value = '',
  disabled = false,
  readOnly = false,
  loading = false,
  as = 'input',
  className,
  label = '',
  placeholder = '',
  required = false,
  helpText,
  name,
  validators = {},
  icon = <Icons.Search />,
  allowEmptySearch = false,
  clearAfterSubmit = false,
  type = 'text',
  maxLength,
  minLength,
  floatingLabel = false,
  onChange = (e: { [key: string]: any }) => {},
  onSubmit = () => {},
  ...rest
}: SearchProps) => {
  const formRef = useRef<FormHandler>();
  const [isClearVisible, setIsClearVisible] = useState(false);

  const style = Utils.joinClasses(
    isClearVisible && !loading && !readOnly && !disabled && 'clear-visible'
  );

  const inputSettings = {
    type,
    value,
    disabled,
    readOnly,
    loading,
    as,
    className,
    label,
    placeholder: placeholder
      ? placeholder
      : i18n('ui.components.placeholders.search'),
    required,
    helpText,
    name,
    validators,
    maxLength,
    minLength,
    floatingLabel,
    cleanable: true,
  };

  const handleSubmit = useCallback(
    (data: any) => {
      if (Utils.isEmpty(data[name]) && !allowEmptySearch) {
        return;
      }

      onSubmit(data);

      if (clearAfterSubmit) {
        formRef?.current?.reset();
      }
    },
    [name, allowEmptySearch, onSubmit, clearAfterSubmit]
  );

  const handleChange = useCallback(
    (data: any) => {
      onChange(data);
      setIsClearVisible(!Utils.isEmpty(data[name]));
    },
    [onChange, name]
  );

  const handleClear = useCallback(() => {
    formRef?.current?.reset();

    if (allowEmptySearch) {
      onSubmit({ [name]: '' });
    }
  }, [allowEmptySearch, onSubmit, name]);

  return (
    <FormStyled
      ref={formRef}
      onSubmit={handleSubmit}
      onChange={handleChange}
      className={style}
      {...rest}
    >
      <div>
        {isClearVisible && !loading && !readOnly && !disabled ? (
          <Icons.Close
            className="dui-clear-search anchor"
            onClick={handleClear}
          />
        ) : null}
      </div>

      <Input {...inputSettings} />

      <Button
        variant="tertiary"
        type="submit"
        loading={loading}
        disabled={disabled}
      >
        {icon}
      </Button>
    </FormStyled>
  );
};
