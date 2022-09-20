import { useCallback, useState } from 'react';
import { i18n } from '../../../i18n/language';
import { ReadMoreProps } from './constants';
import trimText from './helpers';
import { ReadMoreButtonStyled } from './styled';

export function ReadMore({
  children,
  min = 80,
  ideal = 120,
  max = 200,
  showButton = true,
  ...rest
}: ReadMoreProps) {
  const [primaryText, secondaryText] = trimText(
    children as string,
    min,
    ideal,
    max
  );

  const [state, setState] = useState({
    displaySecondary: false,
    primaryText,
    secondaryText,
    readMoreText: i18n('ui.commons.readMore'),
  });

  const handleStatus = useCallback(() => {
    const display = !state.displaySecondary;
    setState((state) => ({ ...state, displaySecondary: display }));
  }, [state.displaySecondary]);

  if (!state.secondaryText) {
    return (
      <p {...rest}>
        <span>{`${state.primaryText} ${state.secondaryText}`}</span>
      </p>
    );
  } else if (state.displaySecondary) {
    return (
      <p {...rest}>
        <span onClick={handleStatus}>
          {`${state.primaryText} ${state.secondaryText}`}
        </span>
      </p>
    );
  } else {
    return (
      <p {...rest}>
        <span>
          {state.primaryText}{' '}
          <span style={{ display: 'none' }}>{state.secondaryText}</span>
          {showButton ? (
            <ReadMoreButtonStyled onClick={handleStatus}>
              {state.readMoreText}
            </ReadMoreButtonStyled>
          ) : null}
        </span>
      </p>
    );
  }
}
