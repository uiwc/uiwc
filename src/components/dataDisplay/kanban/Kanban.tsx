import { KanbanProps } from './constants';
import KanbanCard from './KanbanCard';
import { KanbanColumn } from './KanbanColumn';
import { KanbanPopover } from './KanbanPopover';
import { KanbanStyled } from './styled';

export function Kanban({ children, ...rest }: KanbanProps) {
  return <KanbanStyled {...rest}>{children}</KanbanStyled>;
}

Kanban.Column = KanbanColumn;
Kanban.Card = KanbanCard;
Kanban.Popover = KanbanPopover;
