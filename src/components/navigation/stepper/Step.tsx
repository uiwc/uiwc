import { useCallback, useEffect, useState } from 'react';
import { useCollapse } from '../../../hooks/useCollapse';
import { Utils } from '../../../utils';
import { StepProps } from './constants';
import { StepStyled } from './styled';

export function Step({
  children,
  title,
  active = false,
  index,
  className,
  onSelect = (key: number) => {},
  summary = null,
  ...rest
}: StepProps) {
  const [isExpanded, setExpanded] = useState(active);
  const [isSummaryExpanded, setIsSummaryExpanded] = useState(!active);
  const { getCollapseProps, getToggleProps } = useCollapse({
    isExpanded,
  });
  const { getCollapseProps: getSummaryCollapseProps } = useCollapse({
    isExpanded: isSummaryExpanded,
  });

  const styles = Utils.joinClasses(className, active && 'active');

  useEffect(() => {
    setExpanded(active);
    setIsSummaryExpanded(!active);
  }, [active]);

  const handleClick = useCallback(() => {
    onSelect(index);
    setExpanded((state) => !state);
    setIsSummaryExpanded((state) => !state);
  }, [index, onSelect]);

  return (
    <StepStyled className={styles} {...rest}>
      <h1
        className="stepper-title"
        {...getToggleProps({
          onClick: () => handleClick,
        })}
        onClick={handleClick}
      >
        {title}
      </h1>

      <div
        className="stepper-summary"
        onClick={handleClick}
        {...getSummaryCollapseProps()}
      >
        {summary}
      </div>

      <div {...getCollapseProps()}>{children}</div>
    </StepStyled>
  );
}
