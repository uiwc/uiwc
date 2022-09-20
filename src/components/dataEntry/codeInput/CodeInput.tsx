import { useCallback, useEffect, useState } from 'react';
import { Utils } from '../../../utils';
import {
  BACKSPACE_KEY,
  CodeInputProps,
  DOWN_ARROW_KEY,
  LEFT_ARROW_KEY,
  RIGHT_ARROW_KEY,
  UP_ARROW_KEY,
} from './constants';
import { CodeInputStyled } from './styled';

export function CodeInput({
  name,
  value = '',
  fields = 6,
  disabled = false,
  loading = false,
  onChange = (value: any) => {},
  onValidate = (isValid: boolean) => {},
  ...rest
}: CodeInputProps) {
  const [digits, setDigits] = useState<any[]>(() => {
    return Array.from({ length: fields }).map((_, i) => value[i] || '');
  });
  const [refs] = useState<any[]>([]);

  const inputStyles = Utils.joinClasses(
    loading && 'loading',
    disabled && 'disabled'
  );

  const handleChange = useCallback(
    (e: any) => {
      const target = +e.target.dataset.id;
      const nextTarget = refs[target + 1];
      const arr = digits.slice();

      arr[target] = e.target.value;

      if (nextTarget) {
        nextTarget.focus();
        nextTarget.select();
      }

      onChange(arr.join(''));

      setDigits(arr);
    },
    [digits, onChange, refs]
  );

  const handleKeyDown = useCallback(
    (e: any) => {
      const target = +e.target.dataset.id;
      const nextTarget = refs[target + 1];
      const prevTarget = refs[target - 1];

      const arr = digits.slice();

      switch (e.keyCode) {
        case BACKSPACE_KEY:
          e.preventDefault();
          arr[target] = '';

          if (arr[target] === '') {
            if (prevTarget) {
              prevTarget.focus();
              prevTarget.select();
            }
          }

          setDigits(arr);
          onChange(arr.join(''));
          break;

        case UP_ARROW_KEY:
        case DOWN_ARROW_KEY:
          e.preventDefault();
          break;

        case LEFT_ARROW_KEY:
          e.preventDefault();
          if (prevTarget) {
            prevTarget.focus();
            prevTarget.select();
          }
          break;

        case RIGHT_ARROW_KEY:
          e.preventDefault();
          if (nextTarget) {
            nextTarget.focus();
            nextTarget.select();
          }
          break;
      }
    },
    [digits, onChange, refs]
  );

  useEffect(() => {
    const isFull = digits.every((v) => v !== '');

    onValidate(isFull);
  }, [onValidate, digits]);

  useEffect(() => {
    setDigits(Array.from({ length: fields }).map((_, i) => value[i] || ''));
  }, [fields, value]);

  return (
    <CodeInputStyled {...rest}>
      {digits.map((value, index) => (
        <input
          ref={(ref) => {
            refs[index] = ref;
          }}
          onChange={handleChange}
          value={value}
          onKeyDown={handleKeyDown}
          data-id={index}
          type="text"
          className={inputStyles}
          name={`${name}[${index}]`}
          key={index}
          maxLength={1}
          autoFocus={index === 0 ? true : false}
          disabled={disabled}
          readOnly={loading}
        />
      ))}
    </CodeInputStyled>
  );
}
