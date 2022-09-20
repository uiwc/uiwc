import { useCallback, useEffect, useState } from 'react';
import { useCollapse } from '../../../hooks/useCollapse';
import { Headline } from '../../general';
import { Icons } from '../../general/icons';
import { SyllabusGoalsProps } from './constants';
import { SyllabusGoalsStyled } from './styled';

export function SyllabusGoals({ open = false, children }: SyllabusGoalsProps) {
  const [isExpanded, setIsExpanded] = useState<boolean>(open);
  const { getCollapseProps, getToggleProps } = useCollapse({
    isExpanded,
  });

  const handleExpanded = useCallback(() => {
    setIsExpanded((state) => !state);
  }, []);

  useEffect(() => {
    setIsExpanded(open);
  }, [open]);

  return (
    <SyllabusGoalsStyled>
      <div
        className="cursor-pointer"
        {...getToggleProps({
          onClick: () => handleExpanded(),
        })}
      >
        <div className="d-flex align-items-center">
          <Headline size={4} className="mr-2 mb-0">
            Objetivos
          </Headline>
          <Icons.Chevron
            className="text-primary mt-1"
            direction={isExpanded ? 'up' : 'down'}
          />
        </div>
      </div>
      <div {...getCollapseProps()}>
        <div className="p-3 pt-2 pb-5">{children}</div>
      </div>
    </SyllabusGoalsStyled>
  );
}
