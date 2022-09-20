import { HeadlineProps } from './constants';
import { HeadlineStyled } from './styled';

export const Headline = ({
  children,
  size = 1,
  variant,
  ...rest
}: HeadlineProps) => {
  const type = { as: `h${size}` };

  return (
    <HeadlineStyled {...type} size={size} variant={variant} {...rest}>
      {children}
    </HeadlineStyled>
  );
};
