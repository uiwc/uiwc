import React from 'react';
import { KanbanColumnProps } from './constants';
import {
  KanbanColumnContentStyled,
  KanbanColumnHeaderStyled,
  KanbanColumnStyled,
} from './styled';

export function KanbanColumn({ children, name, ...rest }: KanbanColumnProps) {
  return (
    <KanbanColumnStyled {...rest}>
      {name ? (
        <KanbanColumnHeaderStyled>{name}</KanbanColumnHeaderStyled>
      ) : null}
      <KanbanColumnContentStyled>{children}</KanbanColumnContentStyled>
    </KanbanColumnStyled>
  );
}
