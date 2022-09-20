import { Container, Row } from '../grid';
import { BlockProps } from './constants';
import { BlockStyled } from './styled';

export function Block({
  children,
  container = true,
  fluid = false,
  align = 'start',
  gutterWidth,
  containerClassName,
  rowClassName,
  ...rest
}: BlockProps) {
  return (
    <BlockStyled {...rest}>
      {container ? (
        <Container fluid={fluid} className={containerClassName}>
          <Row align={align} gutterWidth={gutterWidth} className={rowClassName}>
            {children}
          </Row>
        </Container>
      ) : (
        children
      )}
    </BlockStyled>
  );
}
