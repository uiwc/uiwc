import { i18n } from '../../../i18n/language';
import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useRouter } from '../../../hooks/useRouter';
import { Skeleton } from '../../feedback';
import { Icons } from '../../general/icons';
import { BreadcrumbsProps, BreadcrumbsRoute } from './constants';
import {
  BreadcrumbsStyled,
  BreadcrumbStyled,
  SeparatorStyled,
  TextStyled,
} from './styled';

export function Breadcrumbs({
  separator = '/',
  routes = [],
  loading = false,
  disabled = false,
  withBackArrow = false,
  backButtonText,
  ...rest
}: BreadcrumbsProps) {
  const { history } = useRouter();

  const handleClick = useCallback(
    (e: any) => {
      e.preventDefault();
      history?.goBack();
    },
    [history]
  );

  const handleRouteClick = useCallback((e: any, fn: (e: any) => {}) => {
    e.preventDefault();
    fn(e);
  }, []);

  const render = useCallback(
    (route: any, isFirst: boolean, isLast: boolean) => {
      let element: any = (
        <TextStyled>
          {route.icon} {route.breadcrumb}
        </TextStyled>
      );

      if (route.isBack) {
        element = (
          <BreadcrumbStyled
            onClick={handleClick}
            target={route.target}
            className={disabled || route.disabled ? 'disabled' : ''}
          >
            {isFirst && withBackArrow ? <Icons.Arrow direction="left" /> : null}
            {route.icon}
            {route.breadcrumb ||
              backButtonText ||
              i18n('ui.components.goBackButton.label')}
          </BreadcrumbStyled>
        );
      }

      if (route.to) {
        element = (
          <BreadcrumbStyled
            as={Link}
            to={route.to}
            target={route.target}
            className={disabled || route.disabled ? 'disabled' : ''}
          >
            {isFirst && withBackArrow ? <Icons.Arrow direction="left" /> : null}
            {route.icon}
            {route.breadcrumb}
          </BreadcrumbStyled>
        );
      }

      if (route.isButton) {
        element = (
          <BreadcrumbStyled
            as={Link}
            to=" "
            onClick={(e: any) => handleRouteClick(e, route.onClick)}
            className={disabled || route.disabled ? 'disabled' : ''}
          >
            {isFirst && withBackArrow ? <Icons.Arrow direction="left" /> : null}
            {route.icon}
            {route.breadcrumb}
          </BreadcrumbStyled>
        );
      }

      return (
        <>
          {element}
          {isLast ? null : <SeparatorStyled>{separator}</SeparatorStyled>}
        </>
      );
    },
    [
      backButtonText,
      disabled,
      handleClick,
      handleRouteClick,
      separator,
      withBackArrow,
    ]
  );

  if (routes.length === 0) {
    routes = [{ isBack: true }];
    withBackArrow = true;
  }

  if (loading) {
    return <Skeleton.Breadcrumbs count={routes.length} />;
  }

  return (
    <BreadcrumbsStyled {...rest}>
      {routes.map((route: BreadcrumbsRoute, index: number) => {
        const isFirst = index === 0;
        const isLast = index === routes.length - 1;

        return (
          <React.Fragment key={index}>
            {render(route, isFirst, isLast)}
          </React.Fragment>
        );
      })}
    </BreadcrumbsStyled>
  );
}
