import { AnimatePresence } from 'framer-motion';
import React, { useCallback, useState } from 'react';
import { Steps as AlbusSteps, Wizard as AlbusWizard } from 'react-albus';
import { BottomNavigation } from './BottomNavigation';
import { WizardProps } from './constants';
import { Step } from './Step';
import { TopNavigation } from './TopNavigation';

export const Wizard = ({
  children,
  align,
  stepsDisabled = [],
  onStepChange = (stepId: string, prevStepId?: string) => {},
  ...rest
}: WizardProps) => {
  const [transition, setTransition] = useState<any>({
    initial: false,
  });

  const handleChange = useCallback(
    (dir: string, stepId: string, prevStepId?: string) => {
      const transition = {
        initial: {
          opacity: 0,
          x: dir === 'next' ? '50%' : '-50%',
        },
        animate: {
          opacity: 1,
          x: 0,
        },
        exit: {
          opacity: 0,
          x: dir !== 'next' ? '-50%' : '100%',
          // scale: 0.1,
        },
        transition: {
          duration: 0.3,
          times: [0, 0.2, 1],
        },
      };

      setTransition(transition);

      onStepChange(stepId, prevStepId);
    },
    [onStepChange]
  );

  return (
    <AlbusWizard
      render={({ step }) => (
        <>
          <TopNavigation
            align={align}
            onChange={handleChange}
            stepsDisabled={stepsDisabled}
          />

          <AnimatePresence exitBeforeEnter>
            <AlbusSteps key={step?.id} step={step}>
              {React.Children.map(children, (child: any) => {
                return child.props.id
                  ? React.createElement(child.type, {
                      ...{
                        ...child.props,
                        key: child.props.id,
                        title: child.props.title,
                        transition,
                      },
                    })
                  : child;
              })}
            </AlbusSteps>
          </AnimatePresence>

          <BottomNavigation
            onChange={handleChange}
            stepsDisabled={stepsDisabled}
          />
        </>
      )}
      {...rest}
    />
  );
};

Wizard.Step = Step;
