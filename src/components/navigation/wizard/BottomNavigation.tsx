import { useCallback } from 'react';
import { WithWizard } from 'react-albus';
import { Button } from '../../general/button';
import { Icons } from '../../general/icons';
import { BottomNavigationProps } from './constants';
import { BottomNavigationStyled } from './styled';

export const BottomNavigation = ({
  stepsDisabled = [],
  onChange = (
    direction: 'previous' | 'next',
    stepId: string,
    prevStepId?: string
  ) => {},
}: BottomNavigationProps) => {
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
        const nextStepIndex = steps.indexOf(step) + 1;
        const nextStep = steps[Math.min(nextStepIndex, steps.length - 1)];

        const prevStepIndex = steps.indexOf(step) - 1;
        const prevStep = steps[Math.max(prevStepIndex, 0)];

        return (
          <BottomNavigationStyled>
            <div className="order-last order-md-first">
              {steps.indexOf(step) <= 0 ? null : (
                <Button
                  type="button"
                  className="w-100 | mb-md-0 w-md-auto"
                  variant="secondary"
                  onClick={() =>
                    move(
                      () => push(prevStep.id),
                      'previous',
                      prevStep.id,
                      step.id
                    )
                  }
                  disabled={stepsDisabled.includes(prevStep?.id)}
                >
                  <Icons.Arrow direction="left" /> {prevStep?.title}
                </Button>
              )}
            </div>

            <div className="order-first order-md-last">
              {steps.indexOf(step) >= steps.length - 1 ? null : (
                <Button
                  type="button"
                  className="mb-2 w-100 | mb-md-0 w-md-auto"
                  onClick={() =>
                    move(() => push(nextStep.id), 'next', nextStep.id, step.id)
                  }
                  disabled={stepsDisabled.includes(nextStep?.id)}
                >
                  {nextStep?.title} <Icons.Arrow direction="right" />
                </Button>
              )}
            </div>
          </BottomNavigationStyled>
        );
      }}
    />
  );
};
