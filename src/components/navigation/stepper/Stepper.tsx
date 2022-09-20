import React, { useCallback, useImperativeHandle, useState } from 'react';
import { StepperProps } from './constants';
import { Step } from './Step';
import { StepperStyled } from './styled';

export type StepperHandler = {
  select: (key: number) => void;
  prev: () => void;
  next: () => void;
};

export const Stepper: any = React.forwardRef<StepperHandler, StepperProps>(
  (
    {
      children,
      onSelect = (key: number) => {},
      defaultStep = 1,
      ...rest
    }: StepperProps,
    ref
  ) => {
    const [key, setKey] = useState<number>(defaultStep);

    const handleSelection = useCallback(
      (key: number) => {
        onSelect(key);
        setKey(key);
      },
      [onSelect]
    );

    useImperativeHandle(ref, () => ({
      select: (key: number) => {
        handleSelection(key);
      },
      prev: () => {
        const newKey = Math.max(1, key - 1);
        handleSelection(newKey);
      },
      next: () => {
        const newKey = Math.min(
          key + 1,
          React.Children.toArray(children).length
        );
        handleSelection(newKey);
      },
    }));

    return (
      <StepperStyled {...rest}>
        {React.Children.map(children, (child: any, index: number) => {
          return React.createElement(child.type, {
            ...{
              ...child.props,
              index: index + 1,
              onSelect: handleSelection,
              active: key === index + 1,
            },
          });
        })}
      </StepperStyled>
    );
  }
);

Stepper.Step = Step;
