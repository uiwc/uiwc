import { Container, Row } from '../grid';

import { FooterProps } from './constants';
import { FooterStyled } from './styled';

export function Footer({
  children,
  bottomSection,
  gutterWidth = 64,
  ...rest
}: FooterProps) {
  return (
    <FooterStyled id="dui-footer" {...rest}>
      <section id="dui-footer-section">
        <Container>
          <Row gutterWidth={gutterWidth}>{children}</Row>
        </Container>
      </section>
      {bottomSection ? (
        <section id="dui-sub-footer-section">
          <Container>
            <Row>{bottomSection}</Row>
          </Container>
        </section>
      ) : null}
    </FooterStyled>
  );
}
