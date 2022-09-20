import { useEffect } from 'react';
import { Utils } from '../../../utils';
import { Skeleton } from '../skeleton';
import { ProgressProps } from './constants';
import {
  InnerProgressStyled,
  ProgressStyled,
  ProgressWrapperStyled,
} from './styled';

export const Progress = ({
  variant = 'primary',
  children,
  min = 0,
  max = 100,
  value = 0,
  width = '100%',
  barClassName,
  showProgress = false,
  pre,
  post,
  loading = false,
  onComplete = () => {},
  ...rest
}: ProgressProps) => {
  useEffect(() => {
    if (value >= max) {
      onComplete();
    }
  }, [value, max, onComplete]);

  const percent = Utils.round(
    (Math.max(min, Math.min(value, max)) / max) * 100,
    0
  );

  if (loading) {
    return <Skeleton />;
  }

  return (
    <ProgressWrapperStyled width={width}>
      {pre && <span className="mr-2">{pre}</span>}

      <ProgressStyled variant={variant} {...rest}>
        <InnerProgressStyled
          perc={percent}
          variant={variant}
          className={barClassName}
        >
          {showProgress ? `${percent}%` : children}
        </InnerProgressStyled>
      </ProgressStyled>

      {post && <span className="ml-2">{post}</span>}
    </ProgressWrapperStyled>
  );
};
