import { CardProps } from './constants';
import {
  CardStyled,
  CardHeaderStyled,
  CardBodyStyled,
  CardFooterStyled,
} from './styled';

export function Card({ children, shadow = true, ...rest }: CardProps) {
  return (
    <CardStyled shadow={shadow} {...rest}>
      {children}
    </CardStyled>
  );
}

Card.Header = CardHeaderStyled;
Card.Body = CardBodyStyled;
Card.Footer = CardFooterStyled;
