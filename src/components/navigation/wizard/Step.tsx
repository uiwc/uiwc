import { motion } from 'framer-motion';
import { Step as AlbusStep } from 'react-albus';
import { WizardStepProps } from './constants';

export const Step = ({ id, children, transition }: WizardStepProps) => {
  return (
    <motion.div id={id} {...transition}>
      <AlbusStep id={id}>{children}</AlbusStep>
    </motion.div>
  );
};
