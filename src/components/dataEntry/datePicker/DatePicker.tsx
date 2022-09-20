import { useCallback, useEffect, useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { i18n } from '../../../i18n/language';
import { Utils } from '../../../utils';
import { ContainerStyled } from '../common';
import { process } from '../helpers';
import { DatePickerProps, MONTHS, YEARS } from './constants';
import { DatePickerInput } from './DatePickerInput';
import { DatePickerHeaderStyled, DatePickerStyled } from './styled';

export function DatePicker({
  startDate = null,
  endDate = null,
  monthsShown = 1,
  selectsRange = false,
  dateFormat = 'dd/MM/yyyy',
  customInput,
  label = '',
  error = '',
  name,
  disabled = false,
  loading = false,
  required = false,
  className,
  helpText,
  onChange = (e: any) => {},
  validators = {},
  register,
  onUpdateForm = (e: any) => e,
  mode = 'onChange',
}: DatePickerProps) {
  const [innerStartDate, setInnerStartDate] = useState<any>(startDate);
  const [innerEndDate, setInnerEndDate] = useState<any>(
    selectsRange ? (!endDate ? startDate : endDate) : endDate
  );

  const containerStyles = Utils.joinClasses(className, 'input-container');

  const innerName =
    register !== undefined ? register(name, process(validators)) : { name };

  useEffect(() => {
    setInnerStartDate(startDate);

    onUpdateForm(name, startDate, {
      shouldValidate: false,
      shouldDirty: true,
    });
  }, [startDate]);

  useEffect(() => {
    if (selectsRange) {
      setInnerEndDate(endDate);

      onUpdateForm(name, endDate, {
        shouldValidate: false,
        shouldDirty: true,
      });
    }
  }, [endDate]);

  const handleChange = useCallback(
    // TODO: Fix caso en que solo selecciono una fecha, no da error si es requerido
    (data: any) => {
      if (selectsRange) {
        const [start, end] = data;
        setInnerStartDate(start);
        setInnerEndDate(end);
      } else {
        setInnerStartDate(data);
      }
      onUpdateForm(name, data, {
        shouldValidate: mode === 'onChange',
        shouldDirty: true,
      });
      onChange(data);
    },
    [name, onChange, onUpdateForm, selectsRange, mode]
  );

  return (
    <ContainerStyled className={containerStyles}>
      <DatePickerStyled>
        <ReactDatePicker
          className={className}
          selected={innerStartDate}
          startDate={innerStartDate}
          endDate={innerEndDate}
          onChange={handleChange}
          monthsShown={monthsShown}
          selectsRange={selectsRange}
          dateFormat={dateFormat}
          formatWeekDay={(day) => {
            const name = i18n(`ui.commons.dayNames.${day.toLowerCase()}`);
            return name.substring(0, 2);
          }}
          customInput={
            customInput ? (
              customInput
            ) : (
              <DatePickerInput
                {...innerName}
                label={label}
                error={error}
                loading={loading}
                required={required}
                enabled={!disabled}
                helpText={helpText}
                format={
                  selectsRange ? `${dateFormat} - ${dateFormat}` : dateFormat
                }
              />
            )
          }
          renderCustomHeader={({
            monthDate,
            changeYear,
            changeMonth,
            decreaseMonth,
            increaseMonth,
            customHeaderCount,
            prevMonthButtonDisabled,
            nextMonthButtonDisabled,
          }: any) => (
            <DatePickerHeaderStyled>
              <div
                className="duic-dp-actions"
                style={customHeaderCount === 0 ? {} : { visibility: 'hidden' }}
              >
                <button
                  type="button"
                  className="prev"
                  onClick={decreaseMonth}
                  disabled={prevMonthButtonDisabled}
                >
                  <span></span>
                </button>
              </div>

              <div className="duic-dp-selects">
                {i18n(MONTHS[Utils.getMonth(monthDate, false, true)])}{' '}
                <select
                  value={Utils.getYear(monthDate)}
                  onChange={({ target: { value } }) => changeYear(+value)}
                >
                  {YEARS.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>

              <div
                className="duic-dp-actions"
                style={
                  monthsShown - 1 === customHeaderCount
                    ? {}
                    : { visibility: 'hidden' }
                }
              >
                <button
                  type="button"
                  className="next"
                  onClick={increaseMonth}
                  disabled={nextMonthButtonDisabled}
                >
                  <span></span>
                </button>
              </div>
            </DatePickerHeaderStyled>
          )}
        />
      </DatePickerStyled>
    </ContainerStyled>
  );
}
