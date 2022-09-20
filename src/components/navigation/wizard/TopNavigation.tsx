import { useCallback } from 'react';
import { WithWizard } from 'react-albus';
import { Utils } from '../../..';
import { TopNavigationProps } from './constants';
import { TopNavigationStyled } from './styled';

export const TopNavigation = ({
  align = 'start',
  stepsDisabled = [],
  onChange = (
    direction: 'previous' | 'next',
    stepId: string,
    prevStepId?: string
  ) => {},
}: TopNavigationProps) => {
  const move = useCallback(
    (
      movement: () => void,
      direction: 'previous' | 'next',
      stepId: string,
      prevStepId?: string
    ) => {
      movement();
      onChange(direction, stepId, prevStepId);
    },
    [onChange]
  );

  return (
    <WithWizard
      render={({ step, steps, push }: any) => {
        return (
          <TopNavigationStyled align={align}>
            {steps.map((item: any, index: number) => {
              return (
                <div
                  key={index}
                  className={Utils.joinClasses(
                    item.id === step.id && 'active',
                    stepsDisabled.includes(item.id) && 'disabled'
                  )}
                  onClick={() => {
                    move(
                      () => push(item.id),
                      steps.indexOf(step) > steps.indexOf(item)
                        ? 'previous'
                        : 'next',
                      item.id,
                      step.id
                    );
                  }}
                >
                  <button key={index}>{index + 1}</button>
                  <span className="fs-small">{item.title}</span>
                </div>
              );
            })}
          </TopNavigationStyled>
        );
      }}
    />
  );
};
