import { i18n } from '../../../i18n/language';
import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Button, useRouter } from '../../..';
import { Icons } from '../../general/icons';
import { BackButtonProps } from './constants';
import { BackButtonStyled } from './styled';

export function BackButton({
  text = i18n('ui.components.goBackButton.label'),
  to,
  variant = 'link',
  withoutIcon = false,
  ...rest
}: BackButtonProps) {
  const { history } = useRouter();

  const handleClick = useCallback(
    (e: any) => {
      e.preventDefault();
      history?.goBack();
    },
    [history]
  );

  if (variant === 'link') {
    if (to) {
      return (
        <BackButtonStyled to={to} as={Link} {...rest}>
          <div>
            {withoutIcon ? null : (
              <Icons.Arrow direction="left" className="mr-1" />
            )}
            {text}
          </div>
        </BackButtonStyled>
      );
    } else {
      return (
        <BackButtonStyled onClick={handleClick} {...rest}>
          <div>
            {withoutIcon ? null : (
              <Icons.Arrow direction="left" className="mr-1" />
            )}
            {text}
          </div>
        </BackButtonStyled>
      );
    }
  }

  if (to) {
    return (
      <Button variant="secondary" to={to} as={Link} {...rest}>
        {withoutIcon ? null : <Icons.Arrow direction="left" />}
        {text}
      </Button>
    );
  } else {
    return (
      <Button variant="secondary" onClick={handleClick} {...rest}>
        {withoutIcon ? null : <Icons.Arrow direction="left" />}
        {text}
      </Button>
    );
  }
}
