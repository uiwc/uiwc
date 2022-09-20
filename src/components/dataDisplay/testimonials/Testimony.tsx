import { TestimonyProps } from './constants';
import { TestimonyStyled } from './styled';
import { Headline } from '../../general/headline';

export function Testimony({
  children,
  author,
  country,
  picture,
  ...rest
}: TestimonyProps) {
  return (
    <TestimonyStyled {...rest}>
      <div className="testimony-wrapper">
        <blockquote>
          <Headline size={4}>{children}</Headline>
        </blockquote>
        <small>
          {author}
          {country ? `, ${country}` : null}
        </small>
      </div>
      {picture ? <img src={picture} alt="" /> : null}
    </TestimonyStyled>
  );
}
