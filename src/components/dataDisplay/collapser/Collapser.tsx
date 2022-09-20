import { useCallback, useEffect, useState } from 'react';
import { useCollapse } from '../../../hooks/useCollapse';
import { Utils } from '../../../utils';
import { Icons } from '../../general/icons';
import { Flex } from '../../layout/flex';
import { CollapserProps } from './constants';
import { CollapserContentStyled, CollapserStyled } from './styled';

export function Collapser({
  open = false,
  label = <span />,
  children,
  onExpanded = (state: boolean) => {},
  className,
  panelClassName = '',
  contentClassName = '',
  ...rest
}: CollapserProps) {
  const [isExpanded, setIsExpanded] = useState<boolean>(open);
  const { getCollapseProps, getToggleProps } = useCollapse({
    isExpanded,
  });

  const handleExpanded = useCallback(() => {
    onExpanded(!isExpanded);
    setIsExpanded((state) => !state);
  }, [isExpanded, onExpanded]);

  useEffect(() => {
    setIsExpanded(open);
  }, [open]);

  return (
    <CollapserStyled>
      <Flex
        align="center"
        className={Utils.joinClasses('px-2 py-3 cursor-pointer', className)}
        {...getToggleProps({
          onClick: () => handleExpanded(),
        })}
      >
        <Flex basis={100} align="center" justify="between">
          {label}
        </Flex>

        <Flex className="text-primary fw-500 ml-2" shrink={false}>
          <Icons.Chevron direction={isExpanded ? 'up' : 'down'} />
        </Flex>
      </Flex>

      <div
        className={Utils.joinClasses(panelClassName, 'border-bottom')}
        {...getCollapseProps()}
      >
        <CollapserContentStyled className={contentClassName}>
          {children}
        </CollapserContentStyled>
      </div>
    </CollapserStyled>
  );
}
