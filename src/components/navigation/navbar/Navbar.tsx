import { useCallback, useState } from 'react';
import { Utils } from '../../../utils';
import { Logo } from '../../dataDisplay/logo';
import { Col, Hidden, Row, Visible } from '../../layout/grid';
import { NavbarProps } from './constants';
import {
  ContainerStyled,
  MenuIconStyled,
  NavbarItemStyled,
  NavbarStyled,
  NavbarWrapperStyled,
} from './styled';

export function Navbar({
  children,
  className,
  sticky = false,
  fluid = false,
  burger = true,
  logo = <Logo />,
  onToggle = (status: boolean) => {},
  ...rest
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const styles = Utils.joinClasses(className, sticky && 'sticky-top');

  const onMenuToggle = useCallback(() => {
    setIsOpen((status) => {
      onToggle(!status);
      return !status;
    });
  }, [onToggle]);

  return (
    <NavbarStyled id="dui-navbar" className={styles} {...rest}>
      <ContainerStyled fluid={fluid}>
        <Row className="h-100">
          <Col className="h-100 d-flex align-items-center">
            {burger ? (
              <Visible xs sm md>
                <MenuIconStyled
                  className="text-primary flex-grow-0 mr-md-5"
                  onClick={onMenuToggle}
                />
              </Visible>
            ) : null}

            <NavbarWrapperStyled className="flex-grow-1 justify-content-center justify-content-md-between">
              {logo ? logo : <span />}

              <Hidden xs sm md>
                {children ? children : <span />}
              </Hidden>
            </NavbarWrapperStyled>
          </Col>
        </Row>
      </ContainerStyled>
    </NavbarStyled>
  );
}

Navbar.Item = NavbarItemStyled;
