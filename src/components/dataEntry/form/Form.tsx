import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
} from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { Utils } from '../../../utils';
import { FormProps } from './constants';
import { FormStyled } from './styled';

export type FormHandler = {
  reset: () => void;
  clearErrors: () => void;
};

export const Form = forwardRef<FormHandler, FormProps>(
  (
    {
      shouldFocusError = true,
      onChange = (e: { [key: string]: any }) => {},
      // onValidate = (e: boolean) => {},
      children,
      onSubmit,
      mode = 'onChange',
      removeRepeated = true,
      removeDialCode = true,
      ...rest
    }: FormProps,
    ref
  ) => {
    const defaultValues = useMemo(() => {
      const dv: any = {};

      React.Children.forEach(children, (child: any) => {
        const name = child?.props?.name;
        const hasValue = Utils.has(child?.props, 'value');
        const hasStartDate = Utils.has(child?.props, 'startDate');
        const hasOptions = Utils.has(child?.props, 'options');
        const hasValidators = Utils.has(child?.props, 'validators');

        if (name) {
          if (hasValue) {
            dv[name] = child.props.value;
          }
          // Is a Select
          if (hasOptions) {
            if (child.type.displayName === 'Select') {
              if (!hasValue) {
                if (
                  hasValidators &&
                  Utils.has(child.props.validators, 'required')
                ) {
                  // Get the first value of options
                  dv[name] = Utils.first(child.props.options)?.value;
                } else {
                  dv[name] = '';
                }
              } else {
                // Check if the value is an object or a string
                dv[name] =
                  Utils.isObject(child.props.value) &&
                  Utils.has(child.props.value, 'value')
                    ? child.props.value?.value
                    : child.props.value;
              }
            }
          }
          // Is a DatePicker
          if (hasStartDate) {
            const hasEndDate = Utils.has(child?.props, 'endDate');
            const hasSelectsRange = Utils.has(child?.props, 'selectsRange');

            dv[name] = hasSelectsRange
              ? [
                  child.props.startDate,
                  hasEndDate ? child.props.endDate : new Date(),
                ]
              : child.props.startDate;
          }
        }
      });

      return dv;
    }, [children]);

    const {
      handleSubmit,
      register,
      setValue,
      reset,
      clearErrors,
      control,
      formState: { errors },
    } = useForm({ shouldFocusError, mode, defaultValues });

    // const { isValid } = useFormState({
    //   control,
    // });

    const watchedFields = useWatch({
      control,
    });

    useImperativeHandle(ref, () => ({
      reset,
      clearErrors,
    }));

    useEffect(() => {
      onChange(watchedFields);
    }, [onChange, watchedFields]);

    // useEffect(() => {
    //   onValidate(isValid);
    // }, [onValidate, isValid]);

    const processResult = useCallback(
      (data: any) => {
        if (removeRepeated) {
          for (const key in data) {
            if (key.includes('_repeat') || key.includes('_repeated')) {
              delete data[key];
            }
          }
        }
        // For <Phone />
        if (removeDialCode) {
          for (const key in data) {
            if (key.includes('_dialCode')) {
              // Change the phone input to include the dial code
              const field = key.split('_')[0];
              data[field] = `${data[key]} ${data[field]}`;
              delete data[key];
            }
          }
        }
        onSubmit(data);
      },
      [onSubmit, removeRepeated, removeDialCode]
    );

    function recursiveMap(children: any) {
      return React.Children.map(children, (child: any) => {
        if (child?.props?.children) {
          child = React.cloneElement(child, {
            children: recursiveMap(child.props.children),
          });
        }

        return child?.props?.name
          ? React.createElement(child.type, {
              ...{
                ...child.props,
                register: register,
                onUpdateForm: setValue,
                error: errors[child.props.name]?.message,
                key: child.props.name,
                mode,
              },
            })
          : child;
      });
    }

    return (
      <FormStyled onSubmit={handleSubmit(processResult)} {...rest}>
        {recursiveMap(children)}
      </FormStyled>
    );
  }
);
