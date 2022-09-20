import { useCallback, useState } from 'react';
import { Utils } from '../../..';
import { Headline } from '../../general/headline';
import { Icons } from '../../general/icons';
import { Flex } from '../../layout/flex';
import { Visible } from '../../layout/grid';
import { AlertProps } from './constants';
import { AlertStyled } from './styled';

export function Alert({
  children,
  title,
  closable = false,
  variant = 'default',
  icon = 'info',
  isOpen = true,
  align = 'center',
  layout = 'horizontal',
  actions,
  closing = false,
  onClose = () => {},
  ...rest
}: AlertProps) {
  const [isClosed, setIsClosed] = useState(!isOpen);

  const handleClose = useCallback(() => {
    setIsClosed(true);
    onClose();
  }, [onClose]);

  const getIcon = useCallback(
    (className = '') => {
      if (icon === 'warning') {
        return (
          <Icons.Alert
            className={Utils.joinClasses('mr-3', className)}
            warning
          />
        );
      }
      if (icon === 'error') {
        return (
          <Icons.Cancel
            className={Utils.joinClasses('mr-3 text-error', className)}
          />
        );
      }
      if (icon === 'wrong') {
        return (
          <Icons.Block
            className={Utils.joinClasses('mr-3 text-wrong', className)}
          />
        );
      }
      if (icon === 'info') {
        return <Icons.Info className={Utils.joinClasses('mr-3', className)} />;
      }
      if (icon === 'info-fill') {
        return (
          <Icons.Info filled className={Utils.joinClasses('mr-3', className)} />
        );
      }

      return null;
    },
    [icon]
  );

  const getContent = useCallback(
    (size: 'lg' | 'xs' = 'lg') => {
      if (size === 'lg') {
        return (
          <Flex align={align} justify="between">
            <Flex shrink={false}>
              {icon !== 'none' ? getIcon('fs-4') : null}
            </Flex>

            <Flex align={align} className="text-break" basis={100}>
              <Flex basis={100} direction="column">
                {title ? <Headline size={5}>{title}</Headline> : null}
                {children}
              </Flex>
              <Flex shrink={true}>{actions}</Flex>
            </Flex>

            {closable ? (
              <Icons.Close
                className={Utils.joinClasses(
                  'fs-2 cursor-pointer anchor ml-3',
                  closing && 'closing'
                )}
                onClick={handleClose}
              />
            ) : null}
          </Flex>
        );
      } else {
        return (
          <>
            <Flex align="start" justify="between">
              {icon !== 'none' ? getIcon('fs-4 mb-3') : null}

              {closable ? (
                <Icons.Close
                  className={Utils.joinClasses(
                    'fs-2 cursor-pointer anchor ml-3',
                    closing && 'closing'
                  )}
                  onClick={handleClose}
                />
              ) : null}
            </Flex>
            <Flex direction="column">
              {title ? (
                <Headline size={5} className="mb-1">
                  {title}
                </Headline>
              ) : null}
              {children}

              {actions}
            </Flex>
          </>
        );
      }
    },
    [actions, align, children, closable, getIcon, handleClose, icon, title]
  );

  if (isClosed) {
    return null;
  }

  return (
    <AlertStyled variant={variant} {...rest}>
      <Visible md lg xl xxl>
        {getContent(layout === 'vertical' ? 'xs' : 'lg')}
      </Visible>

      <Visible xs sm>
        {getContent('xs')}
      </Visible>
    </AlertStyled>
  );
}
